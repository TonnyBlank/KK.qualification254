// Certificate Courses (Level 5)
import { Course } from './types';

export const certificateCourses: Course[] = [
  { name: "Certificate in Business Administration", code: "CERT001", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+", "mathematics": "D+" }, level: "Certificate", category: "Business & Related", minimumMeanGrade: "D" },
  
];

export function getCertificateCourses(selectedCategories?: string[]): Course[] {
  if (selectedCategories && selectedCategories.length > 0) {
    return certificateCourses.filter(c => c.category && selectedCategories.includes(c.category));
  }
  return certificateCourses;
}
