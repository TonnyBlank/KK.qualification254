// KUCCPS Course Data for Kenya

export interface Course {
  name: string;
  code: string;
  universities: string[];
  previousYearCutoff: number;
  bestCluster: number;
  clusters: number[];
  subjectRequirements: Record<string, string>;
  level?: string;
}

export const allSubjects = {
  core: ['english', 'kiswahili', 'mathematics'],
  languages: ['french', 'german', 'arabic'],
  sciences: ['biology', 'chemistry', 'physics', 'science'],
  humanities: ['geography', 'history', 'cre', 'ire', 'hre', 'business'],
  technical: ['computer', 'agriculture', 'woodwork', 'metalwork', 'building', 'mechanics', 'drawing', 'aviation', 'electricity', 'homescience', 'art', 'music']
};

export const subjectLabels: Record<string, string> = {
  english: 'English',
  kiswahili: 'Kiswahili',
  mathematics: 'Mathematics',
  french: 'French',
  german: 'German',
  arabic: 'Arabic',
  biology: 'Biology',
  chemistry: 'Chemistry',
  physics: 'Physics',
  science: 'Science',
  geography: 'Geography',
  history: 'History',
  cre: 'CRE',
  ire: 'IRE',
  hre: 'HRE',
  business: 'Business Studies',
  computer: 'Computer Studies',
  agriculture: 'Agriculture',
  woodwork: 'Woodwork',
  metalwork: 'Metalwork',
  building: 'Building Construction',
  mechanics: 'Power Mechanics',
  drawing: 'Drawing & Design',
  aviation: 'Aviation Technology',
  electricity: 'Electricity',
  homescience: 'Home Science',
  art: 'Art & Design',
  music: 'Music'
};

export const grades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E'];

export const gradePoints: Record<string, number> = {
  'A': 12, 'A-': 11, 'B+': 10, 'B': 9, 'B-': 8,
  'C+': 7, 'C': 6, 'C-': 5, 'D+': 4, 'D': 3, 'D-': 2, 'E': 1
};

export const levelPrices: Record<string, number> = {
  'certificate': 50,
  'diploma': 50,
  'degree': 50,
  'kmtc': 50
};

export const levelNames: Record<string, string> = {
  'certificate': 'Certificate Courses',
  'diploma': 'Diploma Courses',
  'degree': 'Degree Courses',
  'kmtc': 'KMTC Medical Courses'
};

export const levelDescriptions: Record<string, string> = {
  'certificate': 'Entry-level qualifications for various careers',
  'diploma': 'Technical and professional qualifications',
  'degree': 'University bachelor\'s degree programs',
  'kmtc': 'Kenya Medical Training College programs'
};

// Law Courses (Cluster 1)
const cluster1LawCourses: Course[] = [
  { name: "Bachelor of Laws (LLB)", code: "1111134", universities: ["Kenyatta University"], previousYearCutoff: 40.746, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LLB)", code: "1263134", universities: ["University of Nairobi"], previousYearCutoff: 40.402, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LLB)", code: "1249134", universities: ["JKUAT"], previousYearCutoff: 40.369, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LL.B.)", code: "1253134", universities: ["Moi University"], previousYearCutoff: 40.225, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LLB)", code: "1279134", universities: ["Mount Kenya University"], previousYearCutoff: 40.165, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LL.B.)", code: "1425134", universities: ["Zetech University"], previousYearCutoff: 39.699, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws with IT", code: "1229134", universities: ["Maseno University"], previousYearCutoff: 39.798, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LL.B.)", code: "1105134", universities: ["Chuka University"], previousYearCutoff: 39.419, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LLB)", code: "1057134", universities: ["Egerton University"], previousYearCutoff: 39.126, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Laws (LL.B.)", code: "1087134", universities: ["Kisii University"], previousYearCutoff: 39.066, bestCluster: 1, clusters: [1], subjectRequirements: { english: "B", kiswahili: "B" } },
  { name: "Bachelor of Justice and Peace", code: "1480652", universities: ["Catholic University of Eastern Africa"], previousYearCutoff: 22.449, bestCluster: 1, clusters: [1], subjectRequirements: { english: "C+", kiswahili: "C+" } }
];

// Business Courses (Cluster 2)
const cluster2BusinessCourses: Course[] = [
  { name: "Bachelor of Business Information Technology", code: "1249244", universities: ["JKUAT"], previousYearCutoff: 34.605, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Science (Human Resource Management)", code: "1111189", universities: ["Kenyatta University"], previousYearCutoff: 33.990, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Commerce", code: "1263133", universities: ["University of Nairobi"], previousYearCutoff: 33.703, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Commerce", code: "1111133", universities: ["Kenyatta University"], previousYearCutoff: 32.962, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Commerce", code: "1249133", universities: ["JKUAT"], previousYearCutoff: 32.918, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Business Information Technology", code: "1164244", universities: ["Multimedia University"], previousYearCutoff: 31.802, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Hotel and Hospitality Management", code: "1111221", universities: ["Kenyatta University"], previousYearCutoff: 30.444, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Commerce", code: "1057133", universities: ["Egerton University"], previousYearCutoff: 30.136, bestCluster: 2, clusters: [2], subjectRequirements: { english: "B", mathematics: "B" } },
  { name: "Bachelor of Science in Human Resource Management", code: "1249189", universities: ["JKUAT"], previousYearCutoff: 29.685, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
  { name: "Bachelor of Science in International Business Management", code: "1080647", universities: ["Co-operative University"], previousYearCutoff: 29.219, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
  { name: "Bachelor of Commerce", code: "1080133", universities: ["Co-operative University"], previousYearCutoff: 28.501, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
  { name: "Bachelor of Science in Hospitality Management", code: "1279224", universities: ["Mount Kenya University"], previousYearCutoff: 27.319, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
  { name: "Bachelor of Commerce", code: "1105133", universities: ["Chuka University"], previousYearCutoff: 26.330, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
  { name: "Bachelor of Science (Supply Chain Management)", code: "1249247", universities: ["JKUAT"], previousYearCutoff: 21.444, bestCluster: 2, clusters: [2], subjectRequirements: { english: "C+", mathematics: "C+" } },
];

// Certificate Courses
const certificateCourses: Course[] = [
  { name: "Certificate in Business Administration", code: "CERT001", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D+" }, level: "Certificate" },
  { name: "Certificate in Information Technology", code: "CERT002", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D+" }, level: "Certificate" },
  { name: "Certificate in Accounting", code: "CERT003", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D" }, level: "Certificate" },
  { name: "Certificate in Sales and Marketing", code: "CERT004", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", kiswahili: "D+" }, level: "Certificate" },
  { name: "Certificate in Food and Beverage", code: "CERT005", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D" }, level: "Certificate" },
];

// Diploma Courses
const diplomaCourses: Course[] = [
  { name: "Diploma in Business Management", code: "DIP001", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C-" }, level: "Diploma" },
  { name: "Diploma in Information Technology", code: "DIP002", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C" }, level: "Diploma" },
  { name: "Diploma in Accounting", code: "DIP003", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C-" }, level: "Diploma" },
  { name: "Diploma in Human Resource Management", code: "DIP004", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma" },
  { name: "Diploma in Supply Chain Management", code: "DIP005", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "D+" }, level: "Diploma" },
  { name: "Diploma in Hospitality Management", code: "DIP006", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma" },
];

// KMTC Courses
const kmtcCourses: Course[] = [
  { name: "Diploma in Clinical Medicine", code: "KMTC001", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C", chemistry: "C-" }, level: "KMTC" },
  { name: "Diploma in Kenya Registered Community Health Nursing", code: "KMTC002", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C-", chemistry: "D+" }, level: "KMTC" },
  { name: "Diploma in Pharmacy", code: "KMTC003", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C", chemistry: "C" }, level: "KMTC" },
  { name: "Diploma in Medical Laboratory Sciences", code: "KMTC004", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", biology: "C", chemistry: "C-" }, level: "KMTC" },
  { name: "Diploma in Radiography", code: "KMTC005", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C-", physics: "C-" }, level: "KMTC" },
  { name: "Diploma in Physiotherapy", code: "KMTC006", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C", physics: "C-" }, level: "KMTC" },
  { name: "Diploma in Nutrition and Dietetics", code: "KMTC007", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", biology: "C-", chemistry: "D+" }, level: "KMTC" },
  { name: "Diploma in Health Records", code: "KMTC008", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "D+" }, level: "KMTC" },
];

export function getCoursesByLevel(level: string): Course[] {
  switch (level) {
    case 'degree':
      return [...cluster1LawCourses, ...cluster2BusinessCourses];
    case 'certificate':
      return certificateCourses;
    case 'diploma':
      return diplomaCourses;
    case 'kmtc':
      return kmtcCourses;
    default:
      return [];
  }
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

export interface QualificationResult {
  course: Course;
  qualified: boolean;
  marginallyQualified: boolean;
  missingRequirements: string[];
  studentWeight: number;
}

export function checkQualification(
  course: Course,
  grades: Record<string, string>,
  clusterWeights: Record<number, number>,
  level: string
): QualificationResult {
  let qualified = true;
  let marginallyQualified = false;
  const missingRequirements: string[] = [];
  let studentWeight = 0;
  const cutoff = course.previousYearCutoff || 0;

  // Check Subject Requirements
  for (const [subject, required] of Object.entries(course.subjectRequirements)) {
    const studentGrade = grades[subject];
    const requiredPoints = getGradePoints(required);

    if (!studentGrade) {
      qualified = false;
      missingRequirements.push(`${subjectLabels[subject] || subject} (Not taken)`);
    } else {
      const studentPoints = getGradePoints(studentGrade);
      if (studentPoints < requiredPoints) {
        qualified = false;
        missingRequirements.push(`${subjectLabels[subject] || subject}: Need ${required}, Have ${studentGrade}`);
      }
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

  return { course, qualified, marginallyQualified, missingRequirements, studentWeight };
}
