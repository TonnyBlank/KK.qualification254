// Course Data Index - Re-exports all course data and types
export * from './types';
export * from './degreeCourses';
export * from './diplomaCourses';
export * from './certificateCourses';
export * from './artisanCourses';
export * from './kmtcCourses';

import { Course, gradePoints, subjectLabels, QualificationResult } from './types';
import { getDegreeCourses, getClusterCourses, allDegreeCourses } from './degreeCourses';
import { getDiplomaCourses } from './diplomaCourses';
import { getCertificateCourses } from './certificateCourses';
import { getArtisanCourses } from './artisanCourses';
import { getKmtcCourses } from './kmtcCourses';

export function getCoursesByLevel(level: string, selectedClusters?: number[], selectedCategories?: string[]): Course[] {
  switch (level) {
    case 'degree':
      return getDegreeCourses(selectedClusters);
    case 'artisan':
      return getArtisanCourses(selectedCategories);
    case 'certificate':
      return getCertificateCourses(selectedCategories);
    case 'diploma':
      return getDiplomaCourses(selectedCategories);
    case 'kmtc':
      return getKmtcCourses();
    default:
      return [];
  }
}

export function getAllDegreeCourses(): Course[] {
  return Object.values(allDegreeCourses).flat();
}

export function getGradePoints(grade: string): number {
  return gradePoints[grade] || 0;
}

export function calculateTotalPoints(grades: Record<string, string>): number {
  const pointsArray = Object.values(grades).map(g => getGradePoints(g));
  pointsArray.sort((a, b) => b - a);
  const bestSeven = pointsArray.slice(0, 7);
  return bestSeven.reduce((sum, point) => sum + point, 0);
}

/**
 * Check if a subject requirement is met.
 * Supports alternative subjects using "/" separator (e.g., "english/kiswahili")
 * If requirement is "english/kiswahili" and student has either subject with required grade, it passes.
 */
function checkSubjectRequirement(
  subjectKey: string,
  requiredGrade: string,
  studentGrades: Record<string, string>
): { met: boolean; bestSubject?: string; studentGrade?: string } {
  const subjects = subjectKey.split('/').map(s => s.trim());
  const requiredPoints = getGradePoints(requiredGrade);

  // Find the best matching subject from alternatives
  let bestMatch: { subject: string; grade: string; points: number } | null = null;

  for (const subject of subjects) {
    const studentGrade = studentGrades[subject];
    if (studentGrade) {
      const studentPoints = getGradePoints(studentGrade);
      if (!bestMatch || studentPoints > bestMatch.points) {
        bestMatch = { subject, grade: studentGrade, points: studentPoints };
      }
    }
  }

  if (!bestMatch) {
    // None of the alternative subjects were taken
    return { met: false };
  }

  // Check if the best grade meets the requirement
  if (bestMatch.points >= requiredPoints) {
    return { met: true, bestSubject: bestMatch.subject, studentGrade: bestMatch.grade };
  }

  return { met: false, bestSubject: bestMatch.subject, studentGrade: bestMatch.grade };
}

/**
 * Get display label for subject key (handles alternatives)
 */
function getSubjectLabel(subjectKey: string): string {
  const subjects = subjectKey.split('/').map(s => s.trim());
  return subjects.map(s => subjectLabels[s] || s).join(' / ');
}

export function checkQualification(
  course: Course,
  grades: Record<string, string>,
  clusterWeights: Record<number, number>,
  level: string,
  studentMeanGrade?: string
): QualificationResult {
  let qualified = true;
  let marginallyQualified = false;
  const missingRequirements: string[] = [];
  let studentWeight = 0;
  let meanGradeMet = true;
  const cutoff = course.previousYearCutoff || 0;

  // Check Mean Grade for all courses (degree and non-degree)
  if (course.minimumMeanGrade && studentMeanGrade) {
    const requiredPoints = getGradePoints(course.minimumMeanGrade);
    const studentPoints = getGradePoints(studentMeanGrade);
    if (studentPoints < requiredPoints) {
      qualified = false;
      meanGradeMet = false;
      missingRequirements.push(`Mean Grade: Need ${course.minimumMeanGrade}, Have ${studentMeanGrade}`);
    }
  }

  // Check Subject Requirements (with alternative subject support)
  for (const [subjectKey, required] of Object.entries(course.subjectRequirements)) {
    const result = checkSubjectRequirement(subjectKey, required, grades);
    const subjectLabel = getSubjectLabel(subjectKey);

    if (!result.bestSubject) {
      // None of the alternative subjects were taken
      qualified = false;
      missingRequirements.push(`${subjectLabel} (Not taken)`);
    } else if (!result.met) {
      // Subject taken but grade too low
      qualified = false;
      missingRequirements.push(`${subjectLabel}: Need ${required}, Have ${result.studentGrade}`);
    }
  }

  // Check Cluster Weight for Degree courses
  if (level === 'degree' && course.bestCluster > 0) {
    const clusterToCheck = course.bestCluster;
    studentWeight = clusterWeights[clusterToCheck] || 0;

    if (qualified) {
      if (studentWeight < cutoff) {
        qualified = false;
        if (studentWeight >= cutoff * 0.95) {
          marginallyQualified = true;
          qualified = true;
          missingRequirements.push(`Cluster Weight (${studentWeight.toFixed(3)}) is close to cutoff (${cutoff})`);
        } else {
          missingRequirements.push(`Cluster Weight (${studentWeight.toFixed(3)}) below cutoff (${cutoff})`);
        }
      }
    }
  }

  return { course, qualified, marginallyQualified, missingRequirements, studentWeight, meanGradeMet };
}

// Re-export getClusterCourses for backward compatibility
export { getClusterCourses };
