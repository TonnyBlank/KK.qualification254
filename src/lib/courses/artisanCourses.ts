// Artisan Courses (Level 4)
import { Course } from './types';

export const artisanCourses: Course[] = [
  { name: "Artisan in Masonry", code: "ART001", universities: ["Nairobi Technical", "Mombasa Technical", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Building, Construction & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Plumbing", code: "ART002", universities: ["Kenya Polytechnic", "Kisumu Polytechnic", "Thika Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Building, Construction & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Welding and Fabrication", code: "ART003", universities: ["Mombasa Technical", "Nairobi Technical", "Kabete National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Engineering & Technology & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Motor Vehicle Mechanics", code: "ART004", universities: ["Kenya Polytechnic", "Kisii National Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Engineering & Technology & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Electrical Installation", code: "ART005", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Nairobi Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Engineering & Technology & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Carpentry and Joinery", code: "ART006", universities: ["Kisumu Polytechnic", "Machakos Technical", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Building, Construction & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Tailoring", code: "ART007", universities: ["Nairobi Technical", "Mombasa Technical", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Clothing, Fashion & Textile", minimumMeanGrade: "E" },
  { name: "Artisan in Hairdressing", code: "ART008", universities: ["Nairobi Technical", "Mombasa Technical", "Kisumu Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Hair Dressing & Beauty Therapy", minimumMeanGrade: "E" },
  { name: "Artisan in Beauty Therapy", code: "ART009", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Nyeri National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Hair Dressing & Beauty Therapy", minimumMeanGrade: "E" },
  { name: "Artisan in Food Processing", code: "ART010", universities: ["Mombasa Polytechnic", "Kisii National Polytechnic", "Nairobi Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Food Science & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Painting and Decoration", code: "ART011", universities: ["Kenya Polytechnic", "Eldoret Polytechnic", "Machakos Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Building, Construction & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Leather Work", code: "ART012", universities: ["Nairobi Technical", "Kisumu Polytechnic", "Thika Technical"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Clothing, Fashion & Textile", minimumMeanGrade: "E" },
  { name: "Artisan in Refrigeration and Air Conditioning", code: "ART013", universities: ["Kenya Polytechnic", "Mombasa Polytechnic", "Eldoret Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Engineering & Technology & Related", minimumMeanGrade: "E" },
  { name: "Artisan in Agricultural Mechanics", code: "ART014", universities: ["Bukura Agricultural College", "Egerton University", "Kisii National Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "Agricultural Sciences & Related", minimumMeanGrade: "E" },
  { name: "Artisan in ICT Support", code: "ART015", universities: ["Kenya Polytechnic", "Nairobi Technical", "Mombasa Polytechnic"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "E" }, level: "Artisan", category: "IT & Related", minimumMeanGrade: "E" },
];

export function getArtisanCourses(selectedCategories?: string[]): Course[] {
  if (selectedCategories && selectedCategories.length > 0) {
    return artisanCourses.filter(c => c.category && selectedCategories.includes(c.category));
  }
  return artisanCourses;
}
