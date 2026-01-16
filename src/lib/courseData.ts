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
  category?: string;
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
  'artisan': 50,
  'certificate': 50,
  'diploma': 50,
  'degree': 50,
  'kmtc': 50
};

export const levelNames: Record<string, string> = {
  'artisan': 'Artisan/Level 4',
  'certificate': 'Certificate/Level 5',
  'diploma': 'Diploma/Level 6',
  'degree': 'Degree Programmes',
  'kmtc': 'KMTC Medical Courses'
};

export const levelDescriptions: Record<string, string> = {
  'artisan': 'Level 4 practical skills training',
  'certificate': 'Level 5 entry-level qualifications',
  'diploma': 'Level 6 technical & professional qualifications',
  'degree': 'University bachelor\'s degree programs',
  'kmtc': 'Kenya Medical Training College programs'
};

// Degree Clusters (1-20) - KUCCPS Official
export const degreeClusters: Record<number, string> = {
  1: "Law",
  2: "Business, Hospitality & Related",
  3: "Social Sciences, Media Studies, Fine Arts, Film, Animation, Graphics & Related",
  4: "Geosciences & Related",
  5: "Engineering, Engineering Technology & Related",
  6: "Architecture, Building Construction & Related",
  7: "Computing, IT & Related",
  8: "Agribusiness & Related",
  9: "General Science, Biological Sciences, Physics, Chemistry & Related",
  10: "Actuarial Science, Accountancy, Mathematics, Economics, Statistics & Related",
  11: "Interior Design, Fashion Design, Textiles & Related",
  12: "Sport Science & Related",
  13: "Medicine, Health, Veterinary Medicine & Related",
  14: "History, Archeology & Related",
  15: "Agriculture, Animal Health, Food Science, Nutrition Dietetics, Environmental Sciences, Natural Resources & Related",
  16: "Geography & Related",
  17: "French & German",
  18: "Music & Related",
  19: "Education & Related",
  20: "Religious Studies, Theology, Islamic Studies & Related"
};

// Diploma Categories (Level 6)
export const diplomaCategories: string[] = [
  "Law", "Education & Related", "Business & Related", "Building, Construction & Related",
  "Engineering, Technology & Related", "Environmental Sciences", "Applied Sciences",
  "Health Sciences & Related", "Food Science & Related", "Nutrition & Dietetics",
  "Social Sciences", "Computing, IT & Related", "Clothing, Fashion & Textile",
  "Agricultural Sciences & Related", "Natural Sciences & Related", "Tax & Custom Administration",
  "Graphics, Media Studies, Media Production & Related", "Hospitality, Hotel, Tourism, & Related",
  "Technical Courses", "Animal Health and Related", "Hair Dressing & Beauty Therapy",
  "Library & Information Science", "Primary Teacher Education", "Music and Related"
];

// Certificate Categories (Level 5)
export const certificateCategories: string[] = [
  "Business & Related", "Building, Construction & Related", "Engineering Technology & Related",
  "Health Sciences & Related", "Food Science & Related", "Nutrition & Dietetics",
  "Social Sciences", "Environmental Sciences", "Applied Sciences", "IT & Related",
  "Hospitality, Hotel, Tourism, & Related", "Clothing, Fashion & Textile",
  "Agricultural Sciences & Related", "Natural Sciences & Related",
  "Graphics, Media Studies, Media Production & Related", "Technical Courses",
  "Tax & Custom Administration", "Hair Dressing & Beauty Therapy",
  "Library & Information Sciences", "Law", "Education", "Animal Health and Related"
];

// Artisan Categories (Level 4)
export const artisanCategories: string[] = [
  "Business & Related", "Building, Construction & Related", "Engineering & Technology & Related",
  "Food Science & Related", "Social Sciences", "Applied Sciences", "IT & Related",
  "Hospitality, Hotel, Tourism, & Related", "Clothing, Fashion & Textile",
  "Agricultural Sciences & Related", "Natural Sciences & Related", "Technical Courses",
  "Hair Dressing & Beauty Therapy", "Library & Information Sciences"
];

// Cluster 1: Law & Legal Studies
const cluster1Courses: Course[] = [
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

// Cluster 2: Business & Commerce
const cluster2Courses: Course[] = [
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

// Cluster 3: Education Arts
const cluster3Courses: Course[] = [
  { name: "Bachelor of Education (Arts)", code: "1263200", universities: ["University of Nairobi"], previousYearCutoff: 32.500, bestCluster: 3, clusters: [3], subjectRequirements: { english: "C+", kiswahili: "C+" } },
  { name: "Bachelor of Education (Arts)", code: "1111200", universities: ["Kenyatta University"], previousYearCutoff: 31.200, bestCluster: 3, clusters: [3], subjectRequirements: { english: "C+", kiswahili: "C" } },
  { name: "Bachelor of Education (Arts)", code: "1253200", universities: ["Moi University"], previousYearCutoff: 30.800, bestCluster: 3, clusters: [3], subjectRequirements: { english: "C+", history: "C" } },
  { name: "Bachelor of Education (English/Literature)", code: "1057200", universities: ["Egerton University"], previousYearCutoff: 29.500, bestCluster: 3, clusters: [3], subjectRequirements: { english: "B", kiswahili: "C" } },
  { name: "Bachelor of Education (Kiswahili)", code: "1229200", universities: ["Maseno University"], previousYearCutoff: 28.100, bestCluster: 3, clusters: [3], subjectRequirements: { english: "C", kiswahili: "B" } },
];

// Cluster 4: Education Sciences
const cluster4Courses: Course[] = [
  { name: "Bachelor of Education (Science)", code: "1263201", universities: ["University of Nairobi"], previousYearCutoff: 33.800, bestCluster: 4, clusters: [4], subjectRequirements: { english: "C+", mathematics: "B" } },
  { name: "Bachelor of Education (Science)", code: "1111201", universities: ["Kenyatta University"], previousYearCutoff: 32.500, bestCluster: 4, clusters: [4], subjectRequirements: { english: "C+", mathematics: "B-" } },
  { name: "Bachelor of Education (Mathematics)", code: "1253201", universities: ["Moi University"], previousYearCutoff: 31.200, bestCluster: 4, clusters: [4], subjectRequirements: { english: "C", mathematics: "B" } },
  { name: "Bachelor of Education (Physics)", code: "1057201", universities: ["Egerton University"], previousYearCutoff: 30.600, bestCluster: 4, clusters: [4], subjectRequirements: { english: "C", physics: "B-", mathematics: "C+" } },
  { name: "Bachelor of Education (Chemistry)", code: "1249201", universities: ["JKUAT"], previousYearCutoff: 29.800, bestCluster: 4, clusters: [4], subjectRequirements: { english: "C", chemistry: "B-" } },
];

// Cluster 5: Medicine & Health Sciences
const cluster5Courses: Course[] = [
  { name: "Bachelor of Medicine and Surgery (MBChB)", code: "1263001", universities: ["University of Nairobi"], previousYearCutoff: 46.500, bestCluster: 5, clusters: [5], subjectRequirements: { english: "B", biology: "A-", chemistry: "A-", mathematics: "B+" } },
  { name: "Bachelor of Medicine and Surgery (MBChB)", code: "1253001", universities: ["Moi University"], previousYearCutoff: 45.200, bestCluster: 5, clusters: [5], subjectRequirements: { english: "B", biology: "A-", chemistry: "A-", physics: "B+" } },
  { name: "Bachelor of Pharmacy", code: "1263002", universities: ["University of Nairobi"], previousYearCutoff: 42.800, bestCluster: 5, clusters: [5], subjectRequirements: { english: "B", biology: "B+", chemistry: "A-" } },
  { name: "Bachelor of Dental Surgery", code: "1263003", universities: ["University of Nairobi"], previousYearCutoff: 44.100, bestCluster: 5, clusters: [5], subjectRequirements: { english: "B", biology: "A-", chemistry: "B+" } },
  { name: "Bachelor of Science in Nursing", code: "1111005", universities: ["Kenyatta University"], previousYearCutoff: 38.500, bestCluster: 5, clusters: [5], subjectRequirements: { english: "C+", biology: "B", chemistry: "B-" } },
];

// Cluster 6: Engineering
const cluster6Courses: Course[] = [
  { name: "Bachelor of Science in Civil Engineering", code: "1263300", universities: ["University of Nairobi"], previousYearCutoff: 42.500, bestCluster: 6, clusters: [6], subjectRequirements: { english: "C+", mathematics: "A-", physics: "B+" } },
  { name: "Bachelor of Science in Electrical Engineering", code: "1263301", universities: ["University of Nairobi"], previousYearCutoff: 41.800, bestCluster: 6, clusters: [6], subjectRequirements: { english: "C+", mathematics: "A-", physics: "B+" } },
  { name: "Bachelor of Science in Mechanical Engineering", code: "1249300", universities: ["JKUAT"], previousYearCutoff: 40.200, bestCluster: 6, clusters: [6], subjectRequirements: { english: "C+", mathematics: "B+", physics: "B+" } },
  { name: "Bachelor of Technology in Civil Engineering", code: "1164300", universities: ["Technical University of Kenya"], previousYearCutoff: 38.100, bestCluster: 6, clusters: [6], subjectRequirements: { english: "C", mathematics: "B", physics: "B" } },
  { name: "Bachelor of Engineering in Mechatronics", code: "1111300", universities: ["Kenyatta University"], previousYearCutoff: 37.500, bestCluster: 6, clusters: [6], subjectRequirements: { english: "C", mathematics: "B", physics: "B" } },
];

// Cluster 7: Architecture & Building
const cluster7Courses: Course[] = [
  { name: "Bachelor of Architecture", code: "1263400", universities: ["University of Nairobi"], previousYearCutoff: 40.200, bestCluster: 7, clusters: [7], subjectRequirements: { english: "C+", mathematics: "B", physics: "B-" } },
  { name: "Bachelor of Construction Management", code: "1249400", universities: ["JKUAT"], previousYearCutoff: 35.500, bestCluster: 7, clusters: [7], subjectRequirements: { english: "C+", mathematics: "B-", physics: "C+" } },
  { name: "Bachelor of Quantity Surveying", code: "1263401", universities: ["University of Nairobi"], previousYearCutoff: 36.800, bestCluster: 7, clusters: [7], subjectRequirements: { english: "C+", mathematics: "B" } },
  { name: "Bachelor of Real Estate", code: "1263402", universities: ["University of Nairobi"], previousYearCutoff: 34.200, bestCluster: 7, clusters: [7], subjectRequirements: { english: "C+", mathematics: "C+", geography: "C+" } },
];

// Cluster 8: Environmental Sciences
const cluster8Courses: Course[] = [
  { name: "Bachelor of Environmental Science", code: "1111500", universities: ["Kenyatta University"], previousYearCutoff: 30.500, bestCluster: 8, clusters: [8], subjectRequirements: { english: "C+", biology: "B-", chemistry: "C+" } },
  { name: "Bachelor of Science in Environmental Studies", code: "1263500", universities: ["University of Nairobi"], previousYearCutoff: 29.800, bestCluster: 8, clusters: [8], subjectRequirements: { english: "C+", geography: "B-" } },
  { name: "Bachelor of Environmental Planning & Management", code: "1229500", universities: ["Maseno University"], previousYearCutoff: 27.200, bestCluster: 8, clusters: [8], subjectRequirements: { english: "C", geography: "C+" } },
];

// Cluster 9: Agriculture & Forestry
const cluster9Courses: Course[] = [
  { name: "Bachelor of Science in Agriculture", code: "1263600", universities: ["University of Nairobi"], previousYearCutoff: 32.500, bestCluster: 9, clusters: [9], subjectRequirements: { english: "C+", biology: "B-", chemistry: "C+" } },
  { name: "Bachelor of Science in Horticulture", code: "1249600", universities: ["JKUAT"], previousYearCutoff: 30.200, bestCluster: 9, clusters: [9], subjectRequirements: { english: "C+", biology: "C+", chemistry: "C" } },
  { name: "Bachelor of Science in Forestry", code: "1253600", universities: ["Moi University"], previousYearCutoff: 28.500, bestCluster: 9, clusters: [9], subjectRequirements: { english: "C+", biology: "C+" } },
  { name: "Bachelor of Science in Animal Science", code: "1057600", universities: ["Egerton University"], previousYearCutoff: 29.800, bestCluster: 9, clusters: [9], subjectRequirements: { english: "C+", biology: "B-" } },
];

// Cluster 10: Computer Science & IT
const cluster10Courses: Course[] = [
  { name: "Bachelor of Science in Computer Science", code: "1263700", universities: ["University of Nairobi"], previousYearCutoff: 38.500, bestCluster: 10, clusters: [10], subjectRequirements: { english: "C+", mathematics: "B+" } },
  { name: "Bachelor of Science in Information Technology", code: "1249700", universities: ["JKUAT"], previousYearCutoff: 36.200, bestCluster: 10, clusters: [10], subjectRequirements: { english: "C+", mathematics: "B" } },
  { name: "Bachelor of Science in Software Engineering", code: "1111700", universities: ["Kenyatta University"], previousYearCutoff: 35.800, bestCluster: 10, clusters: [10], subjectRequirements: { english: "C+", mathematics: "B", physics: "C+" } },
  { name: "Bachelor of Science in Data Science", code: "1164700", universities: ["Strathmore University"], previousYearCutoff: 34.500, bestCluster: 10, clusters: [10], subjectRequirements: { english: "C+", mathematics: "B" } },
  { name: "Bachelor of Information Communication Technology", code: "1087700", universities: ["Kisii University"], previousYearCutoff: 28.200, bestCluster: 10, clusters: [10], subjectRequirements: { english: "C", mathematics: "C+" } },
];

// Cluster 11: Physical Sciences
const cluster11Courses: Course[] = [
  { name: "Bachelor of Science in Physics", code: "1263800", universities: ["University of Nairobi"], previousYearCutoff: 35.200, bestCluster: 11, clusters: [11], subjectRequirements: { english: "C+", mathematics: "B", physics: "B" } },
  { name: "Bachelor of Science in Mathematics", code: "1263801", universities: ["University of Nairobi"], previousYearCutoff: 34.500, bestCluster: 11, clusters: [11], subjectRequirements: { english: "C+", mathematics: "A-" } },
  { name: "Bachelor of Science in Statistics", code: "1111800", universities: ["Kenyatta University"], previousYearCutoff: 32.800, bestCluster: 11, clusters: [11], subjectRequirements: { english: "C+", mathematics: "B" } },
  { name: "Bachelor of Actuarial Science", code: "1263802", universities: ["University of Nairobi"], previousYearCutoff: 40.200, bestCluster: 11, clusters: [11], subjectRequirements: { english: "B", mathematics: "A-" } },
];

// Cluster 12: Biological Sciences
const cluster12Courses: Course[] = [
  { name: "Bachelor of Science in Biology", code: "1263900", universities: ["University of Nairobi"], previousYearCutoff: 33.500, bestCluster: 12, clusters: [12], subjectRequirements: { english: "C+", biology: "B", chemistry: "B-" } },
  { name: "Bachelor of Science in Biochemistry", code: "1263901", universities: ["University of Nairobi"], previousYearCutoff: 35.200, bestCluster: 12, clusters: [12], subjectRequirements: { english: "C+", biology: "B", chemistry: "B" } },
  { name: "Bachelor of Science in Microbiology", code: "1111900", universities: ["Kenyatta University"], previousYearCutoff: 32.800, bestCluster: 12, clusters: [12], subjectRequirements: { english: "C+", biology: "B-", chemistry: "C+" } },
  { name: "Bachelor of Science in Biotechnology", code: "1249900", universities: ["JKUAT"], previousYearCutoff: 34.100, bestCluster: 12, clusters: [12], subjectRequirements: { english: "C+", biology: "B", chemistry: "B-" } },
];

// Cluster 13: Social Sciences
const cluster13Courses: Course[] = [
  { name: "Bachelor of Arts in Sociology", code: "1263101", universities: ["University of Nairobi"], previousYearCutoff: 28.500, bestCluster: 13, clusters: [13], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Arts in Psychology", code: "1263102", universities: ["University of Nairobi"], previousYearCutoff: 30.200, bestCluster: 13, clusters: [13], subjectRequirements: { english: "C+", mathematics: "C" } },
  { name: "Bachelor of Social Work", code: "1111103", universities: ["Kenyatta University"], previousYearCutoff: 27.800, bestCluster: 13, clusters: [13], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Arts in Political Science", code: "1263104", universities: ["University of Nairobi"], previousYearCutoff: 29.500, bestCluster: 13, clusters: [13], subjectRequirements: { english: "C+", history: "C" } },
];

// Cluster 14: Communication & Media
const cluster14Courses: Course[] = [
  { name: "Bachelor of Journalism & Mass Communication", code: "1263120", universities: ["University of Nairobi"], previousYearCutoff: 33.500, bestCluster: 14, clusters: [14], subjectRequirements: { english: "B", kiswahili: "C+" } },
  { name: "Bachelor of Communication & Media", code: "1111120", universities: ["Kenyatta University"], previousYearCutoff: 31.200, bestCluster: 14, clusters: [14], subjectRequirements: { english: "B" } },
  { name: "Bachelor of Science in Communication", code: "1253120", universities: ["Moi University"], previousYearCutoff: 29.800, bestCluster: 14, clusters: [14], subjectRequirements: { english: "B-" } },
  { name: "Bachelor of Digital Media", code: "1164120", universities: ["Multimedia University"], previousYearCutoff: 28.500, bestCluster: 14, clusters: [14], subjectRequirements: { english: "C+", computer: "C" } },
];

// Cluster 15: Fine Arts & Design
const cluster15Courses: Course[] = [
  { name: "Bachelor of Fine Arts", code: "1263130", universities: ["University of Nairobi"], previousYearCutoff: 26.500, bestCluster: 15, clusters: [15], subjectRequirements: { english: "C+", art: "C+" } },
  { name: "Bachelor of Arts in Design", code: "1111130", universities: ["Kenyatta University"], previousYearCutoff: 25.800, bestCluster: 15, clusters: [15], subjectRequirements: { english: "C", art: "C" } },
  { name: "Bachelor of Interior Design", code: "1164130", universities: ["Technical University of Kenya"], previousYearCutoff: 27.200, bestCluster: 15, clusters: [15], subjectRequirements: { english: "C", art: "C+" } },
];

// Cluster 16: Music & Performing Arts
const cluster16Courses: Course[] = [
  { name: "Bachelor of Music", code: "1111140", universities: ["Kenyatta University"], previousYearCutoff: 25.200, bestCluster: 16, clusters: [16], subjectRequirements: { english: "C+", music: "C+" } },
  { name: "Bachelor of Arts in Theatre Arts", code: "1263140", universities: ["University of Nairobi"], previousYearCutoff: 24.800, bestCluster: 16, clusters: [16], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Arts in Film & Animation", code: "1164140", universities: ["Multimedia University"], previousYearCutoff: 26.500, bestCluster: 16, clusters: [16], subjectRequirements: { english: "C+", art: "C" } },
];

// Cluster 17: Hospitality & Tourism
const cluster17Courses: Course[] = [
  { name: "Bachelor of Tourism Management", code: "1253150", universities: ["Moi University"], previousYearCutoff: 28.500, bestCluster: 17, clusters: [17], subjectRequirements: { english: "C+", geography: "C" } },
  { name: "Bachelor of Hospitality & Tourism", code: "1111150", universities: ["Kenyatta University"], previousYearCutoff: 27.200, bestCluster: 17, clusters: [17], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Events Management", code: "1279150", universities: ["Mount Kenya University"], previousYearCutoff: 25.800, bestCluster: 17, clusters: [17], subjectRequirements: { english: "C", business: "C" } },
];

// Cluster 18: Security & Criminology
const cluster18Courses: Course[] = [
  { name: "Bachelor of Criminology", code: "1263160", universities: ["University of Nairobi"], previousYearCutoff: 30.500, bestCluster: 18, clusters: [18], subjectRequirements: { english: "C+", history: "C" } },
  { name: "Bachelor of Security Management", code: "1111160", universities: ["Kenyatta University"], previousYearCutoff: 28.200, bestCluster: 18, clusters: [18], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Forensic Science", code: "1253160", universities: ["Moi University"], previousYearCutoff: 32.100, bestCluster: 18, clusters: [18], subjectRequirements: { english: "C+", chemistry: "B-", biology: "C+" } },
];

// Cluster 19: Sports & Recreation
const cluster19Courses: Course[] = [
  { name: "Bachelor of Sports Science", code: "1111170", universities: ["Kenyatta University"], previousYearCutoff: 26.500, bestCluster: 19, clusters: [19], subjectRequirements: { english: "C+", biology: "C" } },
  { name: "Bachelor of Physical Education", code: "1253170", universities: ["Moi University"], previousYearCutoff: 25.200, bestCluster: 19, clusters: [19], subjectRequirements: { english: "C" } },
  { name: "Bachelor of Recreation & Leisure Management", code: "1057170", universities: ["Egerton University"], previousYearCutoff: 24.800, bestCluster: 19, clusters: [19], subjectRequirements: { english: "C" } },
];

// Cluster 20: Special Needs Education
const cluster20Courses: Course[] = [
  { name: "Bachelor of Education (Special Needs)", code: "1111180", universities: ["Kenyatta University"], previousYearCutoff: 28.500, bestCluster: 20, clusters: [20], subjectRequirements: { english: "C+" } },
  { name: "Bachelor of Special Needs Education", code: "1253180", universities: ["Moi University"], previousYearCutoff: 27.200, bestCluster: 20, clusters: [20], subjectRequirements: { english: "C", biology: "C" } },
  { name: "Bachelor of Sign Language Interpretation", code: "1229180", universities: ["Maseno University"], previousYearCutoff: 25.800, bestCluster: 20, clusters: [20], subjectRequirements: { english: "C+" } },
];

// Artisan Courses (Level 4)
const artisanCourses: Course[] = [
  { name: "Artisan in Masonry", code: "ART001", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Building, Construction & Related" },
  { name: "Artisan in Plumbing", code: "ART002", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Building, Construction & Related" },
  { name: "Artisan in Welding and Fabrication", code: "ART003", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Engineering & Technology & Related" },
  { name: "Artisan in Motor Vehicle Mechanics", code: "ART004", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Engineering & Technology & Related" },
  { name: "Artisan in Electrical Installation", code: "ART005", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Engineering & Technology & Related" },
  { name: "Artisan in Carpentry and Joinery", code: "ART006", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Building, Construction & Related" },
  { name: "Artisan in Tailoring", code: "ART007", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Clothing, Fashion & Textile" },
  { name: "Artisan in Hairdressing", code: "ART008", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Hair Dressing & Beauty Therapy" },
  { name: "Artisan in Beauty Therapy", code: "ART009", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Hair Dressing & Beauty Therapy" },
  { name: "Artisan in Food Processing", code: "ART010", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Food Science & Related" },
  { name: "Artisan in Painting and Decoration", code: "ART011", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Building, Construction & Related" },
  { name: "Artisan in Leather Work", code: "ART012", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Clothing, Fashion & Textile" },
  { name: "Artisan in Refrigeration and Air Conditioning", code: "ART013", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Engineering & Technology & Related" },
  { name: "Artisan in Agricultural Mechanics", code: "ART014", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "Agricultural Sciences & Related" },
  { name: "Artisan in ICT Support", code: "ART015", universities: ["Various TVETs"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "E" }, level: "Artisan", category: "IT & Related" },
];

// Certificate Courses (Level 5)
const certificateCourses: Course[] = [
  { name: "Certificate in Business Administration", code: "CERT001", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D+" }, level: "Certificate", category: "Business & Related" },
  { name: "Certificate in Information Technology", code: "CERT002", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D+" }, level: "Certificate", category: "IT & Related" },
  { name: "Certificate in Accounting", code: "CERT003", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", mathematics: "D" }, level: "Certificate", category: "Business & Related" },
  { name: "Certificate in Sales and Marketing", code: "CERT004", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", kiswahili: "D+" }, level: "Certificate", category: "Business & Related" },
  { name: "Certificate in Food and Beverage", code: "CERT005", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D" }, level: "Certificate", category: "Hospitality, Hotel, Tourism, & Related" },
  { name: "Certificate in Electrical Installation", code: "CERT006", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D", mathematics: "D", physics: "D" }, level: "Certificate", category: "Engineering Technology & Related" },
  { name: "Certificate in Plumbing", code: "CERT007", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D" }, level: "Certificate", category: "Building, Construction & Related" },
  { name: "Certificate in Fashion Design", code: "CERT008", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", art: "D" }, level: "Certificate", category: "Clothing, Fashion & Textile" },
  { name: "Certificate in Health Sciences", code: "CERT009", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D+", biology: "D" }, level: "Certificate", category: "Health Sciences & Related" },
  { name: "Certificate in Building Technology", code: "CERT010", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "D", mathematics: "D" }, level: "Certificate", category: "Building, Construction & Related" },
];

// Diploma Courses (Level 6)
const diplomaCourses: Course[] = [
  { name: "Diploma in Business Management", code: "DIP001", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C-" }, level: "Diploma", category: "Business & Related" },
  { name: "Diploma in Information Technology", code: "DIP002", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C" }, level: "Diploma", category: "Computing, IT & Related" },
  { name: "Diploma in Accounting", code: "DIP003", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C-" }, level: "Diploma", category: "Business & Related" },
  { name: "Diploma in Human Resource Management", code: "DIP004", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma", category: "Business & Related" },
  { name: "Diploma in Supply Chain Management", code: "DIP005", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "D+" }, level: "Diploma", category: "Business & Related" },
  { name: "Diploma in Hospitality Management", code: "DIP006", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma", category: "Hospitality, Hotel, Tourism, & Related" },
  { name: "Diploma in Civil Engineering", code: "DIP007", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C", physics: "C-" }, level: "Diploma", category: "Engineering, Technology & Related" },
  { name: "Diploma in Electrical Engineering", code: "DIP008", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", mathematics: "C", physics: "C-" }, level: "Diploma", category: "Engineering, Technology & Related" },
  { name: "Diploma in Social Work", code: "DIP009", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma", category: "Social Sciences" },
  { name: "Diploma in Journalism", code: "DIP010", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", kiswahili: "C-" }, level: "Diploma", category: "Graphics, Media Studies, Media Production & Related" },
  { name: "Diploma in Education", code: "DIP011", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-" }, level: "Diploma", category: "Education & Related" },
  { name: "Diploma in Nursing", code: "DIP012", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C-", biology: "C-" }, level: "Diploma", category: "Health Sciences & Related" },
  { name: "Diploma in Law", code: "DIP013", universities: ["Various Polytechnics"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C" }, level: "Diploma", category: "Law" },
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
  { name: "Diploma in Occupational Therapy", code: "KMTC009", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C-" }, level: "KMTC" },
  { name: "Diploma in Dental Technology", code: "KMTC010", universities: ["KMTC"], previousYearCutoff: 0, bestCluster: 0, clusters: [], subjectRequirements: { english: "C", biology: "C", chemistry: "C-" }, level: "KMTC" },
];

// All degree courses organized by cluster
const allDegreeCourses: Record<number, Course[]> = {
  1: cluster1Courses,
  2: cluster2Courses,
  3: cluster3Courses,
  4: cluster4Courses,
  5: cluster5Courses,
  6: cluster6Courses,
  7: cluster7Courses,
  8: cluster8Courses,
  9: cluster9Courses,
  10: cluster10Courses,
  11: cluster11Courses,
  12: cluster12Courses,
  13: cluster13Courses,
  14: cluster14Courses,
  15: cluster15Courses,
  16: cluster16Courses,
  17: cluster17Courses,
  18: cluster18Courses,
  19: cluster19Courses,
  20: cluster20Courses,
};

export function getCoursesByLevel(level: string, selectedClusters?: number[]): Course[] {
  switch (level) {
    case 'degree':
      if (selectedClusters && selectedClusters.length > 0) {
        return selectedClusters.flatMap(cluster => allDegreeCourses[cluster] || []);
      }
      // Return all degree courses if no clusters selected (check all)
      return Object.values(allDegreeCourses).flat();
    case 'artisan':
      return artisanCourses;
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

export function getClusterCourses(cluster: number): Course[] {
  return allDegreeCourses[cluster] || [];
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
