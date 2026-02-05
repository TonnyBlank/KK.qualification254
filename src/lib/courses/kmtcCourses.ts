// KMTC Courses (Kenya Medical Training College)
import { Course } from './types';

export const kmtcCourses: Course[] = [
  { name: "Diploma in Clinical Medicine", code: "KMTC001", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C", "chemistry": "C-" }, level: "KMTC", minimumMeanGrade: "C" },
  { name: "Diploma in Kenya Registered Community Health Nursing", code: "KMTC002", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C", "biology": "C-", "chemistry": "D+" }, level: "KMTC", minimumMeanGrade: "C-" },
  { name: "Diploma in Pharmacy", code: "KMTC003", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C", "chemistry": "C" }, level: "KMTC", minimumMeanGrade: "C" },
  { name: "Diploma in Medical Laboratory Sciences", code: "KMTC004", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C-", "biology": "C", "chemistry": "C-" }, level: "KMTC", minimumMeanGrade: "C-" },
  { name: "Diploma in Radiography", code: "KMTC005", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C-", "physics/mathematics": "C-" }, level: "KMTC", minimumMeanGrade: "C" },
  { name: "Diploma in Physiotherapy", code: "KMTC006", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C", "physics": "C-" }, level: "KMTC", minimumMeanGrade: "C" },
  { name: "Diploma in Nutrition and Dietetics", code: "KMTC007", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "biology": "C-", "chemistry": "D+" }, level: "KMTC", minimumMeanGrade: "C-" },
  { name: "Diploma in Health Records", code: "KMTC008", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english/kiswahili": "C-", "mathematics": "D+" }, level: "KMTC", minimumMeanGrade: "C-" },
  { name: "Diploma in Occupational Therapy", code: "KMTC009", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C-" }, level: "KMTC", minimumMeanGrade: "C" },
  { name: "Diploma in Dental Technology", code: "KMTC010", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { "english": "C", "biology": "C", "chemistry": "C-" }, level: "KMTC", minimumMeanGrade: "C" },
];

export function getKmtcCourses(): Course[] {
  return kmtcCourses;
}
