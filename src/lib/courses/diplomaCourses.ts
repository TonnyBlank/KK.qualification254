// Diploma Courses (Level 6)
import { Course } from './types';

export const diplomaCourses: Course[] = [
  { name: "Diploma in Business Management", code: "DIP001", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "mathematics": "C-" }, level: "Diploma", category: "Business & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Information Technology", code: "DIP002", universities: ["Kenya Polytechnic", "Kisumu Polytechnic", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "mathematics": "C" }, level: "Diploma", category: "Computing, IT & Related", minimumMeanGrade: "C-" },
 
];

export function getDiplomaCourses(selectedCategories?: string[]): Course[] {
  if (selectedCategories && selectedCategories.length > 0) {
    return diplomaCourses.filter(c => c.category && selectedCategories.includes(c.category));
  }
  return diplomaCourses;
}
