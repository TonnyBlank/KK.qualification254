// Diploma Courses (Level 6)
import { Course } from './types';

export const diplomaCourses: Course[] = [
  { name: "Diploma in Business Management", code: "DIP001", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "mathematics": "C-" }, level: "Diploma", category: "Business & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Information Technology", code: "DIP002", universities: ["Kenya Polytechnic", "Kisumu Polytechnic", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "mathematics": "C" }, level: "Diploma", category: "Computing, IT & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Accounting", code: "DIP003", universities: ["Mombasa Polytechnic", "Kenya Polytechnic", "Kisii National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "mathematics": "C-" }, level: "Diploma", category: "Business & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Human Resource Management", code: "DIP004", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Thika Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-" }, level: "Diploma", category: "Business & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Supply Chain Management", code: "DIP005", universities: ["Mombasa Polytechnic", "Kenya Polytechnic", "Kisumu Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "mathematics": "D+" }, level: "Diploma", category: "Business & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Hospitality Management", code: "DIP006", universities: ["Kenya Utalii College", "Mombasa Polytechnic", "Kenya Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-" }, level: "Diploma", category: "Hospitality, Hotel, Tourism, & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Civil Engineering", code: "DIP007", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Kisumu Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "mathematics": "C", "physics": "C-" }, level: "Diploma", category: "Engineering, Technology & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Electrical Engineering", code: "DIP008", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Mombasa Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "mathematics": "C", "physics": "C-" }, level: "Diploma", category: "Engineering, Technology & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Social Work", code: "DIP009", universities: ["Kenya Institute of Social Work", "Nairobi Technical", "Kisii National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-" }, level: "Diploma", category: "Social Sciences", minimumMeanGrade: "C-" },
  { name: "Diploma in Journalism", code: "DIP010", universities: ["Kenya Institute of Mass Communication", "Kenya Polytechnic", "Mombasa Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "kiswahili": "C-" }, level: "Diploma", category: "Graphics, Media Studies, Media Production & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Education", code: "DIP011", universities: ["Kenya Teachers Training College", "Machakos TTC", "Migori TTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-" }, level: "Diploma", category: "Education & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Nursing", code: "DIP012", universities: ["Kenya Medical Training College", "Nairobi Hospital School of Nursing", "Aga Khan Hospital"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "biology": "C-" }, level: "Diploma", category: "Health Sciences & Related", minimumMeanGrade: "C-" },
  { name: "Diploma in Law", code: "DIP013", universities: ["Kenya School of Law", "Mombasa Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C" }, level: "Diploma", category: "Law", minimumMeanGrade: "C" },
];

export function getDiplomaCourses(selectedCategories?: string[]): Course[] {
  if (selectedCategories && selectedCategories.length > 0) {
    return diplomaCourses.filter(c => c.category && selectedCategories.includes(c.category));
  }
  return diplomaCourses;
}
