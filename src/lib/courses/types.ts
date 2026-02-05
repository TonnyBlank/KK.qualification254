// Course Types and Shared Data

export interface Course {
  name: string;
  code: string;
  universities: string[];
  previousYearCutoff: number;
  bestCluster: number;
  clusters: number[];
  subjectRequirements: Record<string, string>; // Supports "english/kiswahili" format for alternatives
  level?: string;
  category?: string;
  minimumMeanGrade?: string;
}

export interface QualificationResult {
  course: Course;
  qualified: boolean;
  marginallyQualified: boolean;
  missingRequirements: string[];
  studentWeight: number;
  meanGradeMet?: boolean;
}

export const allSubjects = {
  core: ['english', 'kiswahili', 'mathematics'],
  languages: ['french', 'german', 'arabic'],
  sciences: ['biology', 'chemistry', 'physics'],
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
