// Certificate Courses (Level 5)
import { Course } from './types';

export const certificateCourses: Course[] = [
  { name: "Certificate in Business Administration", code: "CERT001", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+", "mathematics": "D+" }, level: "Certificate", category: "Business & Related", minimumMeanGrade: "D" },
  { name: "Certificate in Information Technology", code: "CERT002", universities: ["Nairobi Technical", "Kisumu Polytechnic", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+", "mathematics": "D+" }, level: "Certificate", category: "IT & Related", minimumMeanGrade: "D" },
  { name: "Certificate in Accounting", code: "CERT003", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Thika Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+", "mathematics": "D" }, level: "Certificate", category: "Business & Related", minimumMeanGrade: "D" },
  { name: "Certificate in Sales and Marketing", code: "CERT004", universities: ["Eldoret Polytechnic", "Kisii National Polytechnic", "Machakos Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+" }, level: "Certificate", category: "Business & Related", minimumMeanGrade: "D" },
  { name: "Certificate in Food and Beverage", code: "CERT005", universities: ["Kenya Utalii College", "Mombasa Polytechnic", "Nairobi Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D" }, level: "Certificate", category: "Hospitality, Hotel, Tourism, & Related", minimumMeanGrade: "D-" },
  { name: "Certificate in Electrical Installation", code: "CERT006", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Kisumu Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "D", "mathematics": "D", "physics": "D" }, level: "Certificate", category: "Engineering Technology & Related", minimumMeanGrade: "D" },
  { name: "Certificate in Plumbing", code: "CERT007", universities: ["Nairobi Technical", "Mombasa Technical", "Machakos Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D" }, level: "Certificate", category: "Building, Construction & Related", minimumMeanGrade: "D-" },
  { name: "Certificate in Fashion Design", code: "CERT008", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D+", "art": "D" }, level: "Certificate", category: "Clothing, Fashion & Textile", minimumMeanGrade: "D" },
  { name: "Certificate in Health Sciences", code: "CERT009", universities: ["KMTC", "Nairobi Hospital Training Centre", "Kenyatta National Hospital"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "D+", "biology": "D" }, level: "Certificate", category: "Health Sciences & Related", minimumMeanGrade: "D+" },
  { name: "Certificate in Building Technology", code: "CERT010", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Kisumu Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "D", "mathematics": "D" }, level: "Certificate", category: "Building, Construction & Related", minimumMeanGrade: "D" },
];

export function getCertificateCourses(selectedCategories?: string[]): Course[] {
  if (selectedCategories && selectedCategories.length > 0) {
    return certificateCourses.filter(c => c.category && selectedCategories.includes(c.category));
  }
  return certificateCourses;
}
