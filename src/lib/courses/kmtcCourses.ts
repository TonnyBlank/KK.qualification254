// KMTC Courses (Kenya Medical Training College)
import { Course } from './types';

export const kmtcCourses: Course[] = [
  // --- DIPLOMA IN COMMUNITY ORAL HEALTH ---
  ...["4980K01", "5000K01"].map(code => ({
    name: "Diploma in Community Oral Health",
    code: code,
    universities: [code === "4980K01" ? "KMTC - Mosoriot Campus" : "KMTC - Nairobi Campus"],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "chemistry": "C", 
      "mathematics/physics": "C" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN NUTRITION & DIETETICS ---
  ...["4780K02", "4830K02", "5030K02", "5100K02"].map(code => ({
    name: "Diploma in Nutrition & Dietetics",
    code: code,
    universities: [
      code === "4780K02" ? "KMTC - Homa Bay Campus" :
      code === "4830K02" ? "KMTC - Karen - Nairobi Campus" :
      code === "5030K02" ? "KMTC - Nyandarua Campus" : "KMTC - Thika Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "D+", 
      "biology/biologicalSciences": "D+", 
      "chemistry/physicalSciences": "D+", 
      "mathematics/physics/generalScience/homeScience/agriculture": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- DIPLOMA IN HEALTH RECORDS AND INFORMATION TECHNOLOGY ---
  ...["4790K03", "5000K03", "5005K03", "5070K03", "5105K03"].map(code => ({
    name: "Diploma in Health Records and Information Technology",
    code: code,
    universities: [
      code === "4790K03" ? "KMTC - Isiolo Campus" :
      code === "5000K03" ? "KMTC - Nairobi Campus" :
      code === "5005K03" ? "KMTC - Nakuru Campus" :
      code === "5070K03" ? "KMTC - Siaya Campus" : "KMTC - Trans Mara Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "mathematics": "C-", 
      "biology/biologicalSciences": "D+", 
      "physics/chemistry/geography/economics/homeScience/agriculture/computer/business": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN KENYA REGISTERED COMMUNITY HEALTH NURSING ---
  ...[
    { code: "4720K04", campus: "Bomet" }, { code: "4725K04", campus: "Bondo" },
    { code: "4730K04", campus: "Bungoma" }, { code: "4735K04", campus: "Busia" },
    { code: "4740K04", campus: "Chemolingot" }, { code: "4745K04", campus: "Chuka" },
    { code: "4755K04", campus: "Eldoret" }, { code: "4760K04", campus: "Embu" },
    { code: "4765K04", campus: "Garissa" }, { code: "4770K04", campus: "Gatundu" },
    { code: "4780K04", campus: "Homa Bay" }, { code: "4790K04", campus: "Isiolo" },
    { code: "4795K04", campus: "Iten" }, { code: "4800K04", campus: "Kabarnet" },
    { code: "5175K04", campus: "Kakamega - Navakholo" }, { code: "4805K04", campus: "Kakamega" },
    { code: "4815K04", campus: "Kapenguria" }, { code: "4820K04", campus: "Kapkatet" },
    { code: "4825K04", campus: "Kaptumo" }, { code: "4840K04", campus: "Kilifi" },
    { code: "4845K04", campus: "Kisii" }, { code: "4850K04", campus: "Kisumu" },
    { code: "4855K04", campus: "Kitale" }, { code: "4860K04", campus: "Kitui" },
    { code: "4870K04", campus: "Kuria" }, { code: "4880K04", campus: "Lake Victoria" },
    { code: "4890K04", campus: "Lodwar" }, { code: "4895K04", campus: "Loitokitok" },
    { code: "4905K04", campus: "Machakos" }, { code: "4910K04", campus: "Makindu" },
    { code: "4915K04", campus: "Makueni" }, { code: "5310K04", campus: "Marsabit" },
    { code: "4945K04", campus: "Meru" }, { code: "4960K04", campus: "Migori" },
    { code: "4975K04", campus: "Mombasa" }, { code: "4980K04", campus: "Mosoriot" },
    { code: "4985K04", campus: "Msambweni" }, { code: "4990K04", campus: "Murang'a" },
    { code: "4995K04", campus: "Mwingi" }, { code: "5000K04", campus: "Nairobi" },
    { code: "5005K04", campus: "Nakuru" }, { code: "5215K04", campus: "Narok" },
    { code: "5015K04", campus: "Nyahururu" }, { code: "5025K04", campus: "Nyamira" },
    { code: "5030K04", campus: "Nyandarua" }, { code: "5040K04", campus: "Nyeri" },
    { code: "5050K04", campus: "Port Reitz" }, { code: "5055K04", campus: "Rachuonyo" },
    { code: "5070K04", campus: "Siaya" }, { code: "5080K04", campus: "Sigowet" },
    { code: "5100K04", campus: "Thika" }, { code: "5120K04", campus: "Voi" },
    { code: "5130K04", campus: "Webuye" }
  ].map(c => ({
    name: "Diploma in Kenya Registered Community Health Nursing",
    code: c.code,
    universities: [`KMTC - ${c.campus} Campus`],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN KENYA REGISTERED NURSING, MENTAL HEALTH & PSYCHIATRY ---
  ...["4935K05", "4990K05", "5050K05"].map(code => ({
    name: "Diploma in Kenya Registered Nursing, Mental Health & Psychiatry",
    code: code,
    universities: [
      code === "4935K05" ? "KMTC - Mathare Campus" :
      code === "4990K05" ? "KMTC - Murang'a Campus" : "KMTC - Port Reitz Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN KENYA REGISTERED NURSING & MIDWIFERY ---
  ...["4780K06", "4805K06", "4865K06", "4980K06"].map(code => ({
    name: "Diploma in Kenya Registered Nursing & Midwifery",
    code: code,
    universities: [
      code === "4780K06" ? "KMTC - Homa Bay Campus" :
      code === "4805K06" ? "KMTC - Kakamega Campus" :
      code === "4865K06" ? "KMTC - Kombewa Campus" : "KMTC - Mosoriot Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN RADIOGRAPHY & IMAGING ---
  ...["4730K07", "4755K07", "4780K07", "4820K07", "4850K07", "4930K07", "4975K07", "5000K07", "5005K07", "5040K07", "5070K07"].map(code => ({
    name: "Diploma in Radiography & Imaging",
    code: code,
    universities: [
      code === "4730K07" ? "KMTC - Bungoma Campus" :
      code === "4755K07" ? "KMTC - Eldoret Campus" :
      code === "4780K07" ? "KMTC - Homa Bay Campus" :
      code === "4820K07" ? "KMTC - Kapkatet Campus" :
      code === "4850K07" ? "KMTC - Kisumu Campus" :
      code === "4930K07" ? "KMTC - Manza Campus" :
      code === "4975K07" ? "KMTC - Mombasa Campus" :
      code === "5000K07" ? "KMTC - Nairobi Campus" :
      code === "5005K07" ? "KMTC - Nakuru Campus" :
      code === "5040K07" ? "KMTC - Nyeri Campus" : "KMTC - Siaya Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "physics/physicalSciences": "C", 
      "mathematics/chemistry": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN MEDICAL LABORATORY SCIENCES ---
  ...["4760K08", "4805K08", "4845K08", "4860K08", "4865K08", "4880K08", "4905K08", "4945K08", "5000K08", "5005K08", "5040K08", "5050K08"].map(code => ({
    name: "Diploma in Medical Laboratory Sciences",
    code: code,
    universities: [
      code === "4760K08" ? "KMTC - Embu Campus" :
      code === "4805K08" ? "KMTC - Kakamega Campus" :
      code === "4845K08" ? "KMTC - Kisii Campus" :
      code === "4860K08" ? "KMTC - Kitui Campus" :
      code === "4865K08" ? "KMTC - Kombewa Campus" :
      code === "4880K08" ? "KMTC - Lake Victoria Campus" :
      code === "4905K08" ? "KMTC - Machakos Campus" :
      code === "4945K08" ? "KMTC - Meru Campus" :
      code === "5000K08" ? "KMTC - Nairobi Campus" :
      code === "5005K08" ? "KMTC - Nakuru Campus" :
      code === "5040K08" ? "KMTC - Nyeri Campus" : "KMTC - Port Reitz Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "chemistry/physicalSciences": "C", 
      "mathematics/physics": "C" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN OCCUPATIONAL THERAPY ---
  ...["4900K09", "4905K09", "4910K09", "4920K09", "4975K09", "4990K09", "5000K09", "5020K09", "5095K09", "5075K09"].map(code => ({
    name: "Diploma in Occupational Therapy",
    code: code,
    universities: [
      code === "4900K09" ? "KMTC - Lugari Campus" :
      code === "4905K09" ? "KMTC - Machakos Campus" :
      code === "4910K09" ? "KMTC - Makindu Campus" :
      code === "4920K09" ? "KMTC - Makueni Campus" :
      code === "4975K09" ? "KMTC - Mombasa Campus" :
      code === "4990K09" ? "KMTC - Murang'a Campus" :
      code === "5000K09" ? "KMTC - Nairobi Campus" :
      code === "5020K09" ? "KMTC - Nyamache Campus" :
      code === "5095K09" ? "KMTC - Teso Campus" : "KMTC - Ugunja Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences/homeScience/agriculture": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN OPTOMETRY ---
  ...["5000K10", "5075K10"].map(code => ({
    name: "Diploma in Optometry",
    code: code,
    universities: [
      code === "5000K10" ? "KMTC - Nairobi Campus" : "KMTC - Ugunja Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "mathematics": "C", 
      "biology/biologicalSciences": "C-", 
      "physics/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN ORTHOPAEDIC TECHNOLOGY ---
  ...["4850K11", "4905K11", "5000K11", "5050K11"].map(code => ({
    name: "Diploma in Orthopaedic Technology",
    code: code,
    universities: [
      code === "4850K11" ? "KMTC - Kisumu Campus" :
      code === "4905K11" ? "KMTC - Machakos Campus" :
      code === "5000K11" ? "KMTC - Nairobi Campus" : "KMTC - Port Reitz Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences/woodwork/metalwork/drawing": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN PHARMACY ---
  ...["4805K12", "4850K12", "4930K12", "4975K12", "5000K12", "5005K12", "5040K12"].map(code => ({
    name: "Diploma in Pharmacy",
    code: code,
    universities: [
      code === "4805K12" ? "KMTC - Kakamega Campus" :
      code === "4850K12" ? "KMTC - Kisumu Campus" :
      code === "4930K12" ? "KMTC - Manza Campus" :
      code === "4975K12" ? "KMTC - Mombasa Campus" :
      code === "5000K12" ? "KMTC - Nairobi Campus" :
      code === "5005K12" ? "KMTC - Nakuru Campus" : "KMTC - Nyeri Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "chemistry/physicalSciences": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/physicalSciences": "C" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN PHYSIOTHERAPY ---
  ...["4770K13", "4780K13", "4905K13", "5000K13", "5005K13", "5025K13", "5040K13", "5050K13"].map(code => ({
    name: "Diploma in Physiotherapy",
    code: code,
    universities: [
      code === "4770K13" ? "KMTC - Gatundu Campus" :
      code === "4780K13" ? "KMTC - Homa Bay Campus" :
      code === "4905K13" ? "KMTC - Machakos Campus" :
      code === "5000K13" ? "KMTC - Nairobi Campus" :
      code === "5005K13" ? "KMTC - Nakuru Campus" :
      code === "5025K13" ? "KMTC - Nyamira Campus" :
      code === "5040K13" ? "KMTC - Nyeri Campus" : "KMTC - Port Reitz Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN MEDICAL ENGINEERING ---
  ...["4755K14", "4945K14", "5000K14"].map(code => ({
    name: "Diploma in Medical Engineering",
    code: code,
    universities: [
      code === "4755K14" ? "KMTC - Eldoret Campus" :
      code === "4945K14" ? "KMTC - Meru Campus" : "KMTC - Nairobi Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "mathematics": "C-", 
      "physics/physicalSciences": "C-", 
      "biology/chemistry/biologicalSciences/metalwork/electricity/drawing": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN PUBLIC HEALTH ---
  ...["4835K15", "5000K15"].map(code => ({
    name: "Diploma in Public Health",
    code: code,
    universities: [
      code === "4835K15" ? "KMTC - Karuri Campus" : "KMTC - Nairobi Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics": "C-", 
      "physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN DENTAL TECHNOLOGY ---
  ...["5000K16", "5005K16"].map(code => ({
    name: "Diploma in Dental Technology",
    code: code,
    universities: [
      code === "5000K16" ? "KMTC - Nairobi Campus" : "KMTC - Nakuru Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "physics/chemistry/physicalSciences": "C", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences/metalwork": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN ORTHOPEDIC & TRAUMA MEDICINE ---
  ...["5175K17", "4815K17", "4845K17", "4905K17", "4910K17", "5000K17", "5040K17", "5065K17"].map(code => ({
    name: "Diploma in Orthopedic & Trauma Medicine",
    code: code,
    universities: [
      code === "5175K17" ? "KMTC - Kakamega - Navakholo Campus" :
      code === "4815K17" ? "KMTC - Kapenguria Campus" :
      code === "4845K17" ? "KMTC - Kisii Campus" :
      code === "4905K17" ? "KMTC - Machakos Campus" :
      code === "4910K17" ? "KMTC - Makindu Campus" :
      code === "5000K17" ? "KMTC - Nairobi Campus" :
      code === "5040K17" ? "KMTC - Nyeri Campus" : "KMTC - Shianda - Mumias Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN MEDICAL SOCIAL WORK ---
  ...["4785K18", "4820K18", "4835K18"].map(code => ({
    name: "Diploma in Medical Social Work",
    code: code,
    universities: [
      code === "4785K18" ? "KMTC - Imenti Campus" :
      code === "4820K18" ? "KMTC - Kapkatet Campus" : "KMTC - Karuri Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "D+", 
      "mathematics/physics/chemistry/physicalSciences/history/geography/cre/ire/hre/homeScience/agriculture/business": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN HEALTH COUNSELLING ---
  ...["4760K19", "4935K19"].map(code => ({
    name: "Diploma in Health Counselling",
    code: code,
    universities: [
      code === "4760K19" ? "KMTC - Embu Campus" : "KMTC - Mathare Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "D+", 
      "history/geography/cre/ire/hre": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN COMMUNITY HEALTH ---
  ...[
    "4775K20", "4785K20", "4790K20", "4795K20", "5175K20", "5180K20", "4870K20", "4910K20", 
    "5000K20", "5005K20", "5010K20", "5015K20", "5020K20", "5055K20", "5080K20", "5130K20"
  ].map(code => ({
    name: "Diploma in Community Health",
    code: code,
    universities: [
      code === "4775K20" ? "KMTC - Gatundu - Mutunguru Satellite Campus" :
      code === "4785K20" ? "KMTC - Imenti Campus" :
      code === "4790K20" ? "KMTC - Isiolo Campus" :
      code === "4795K20" ? "KMTC - Iten Campus" :
      code === "5175K20" ? "KMTC - Kakamega - Navakholo Campus" :
      code === "5180K20" ? "KMTC - Kitui - Mutomo Campus" :
      code === "4870K20" ? "KMTC - Kuria Campus" :
      code === "4910K20" ? "KMTC - Makindu Campus" :
      code === "5000K20" ? "KMTC - Nairobi Campus" :
      code === "5005K20" ? "KMTC - Nakuru Campus" :
      code === "5010K20" ? "KMTC - Ndhiwa Campus" :
      code === "5015K20" ? "KMTC - Nyahururu Campus" :
      code === "5020K20" ? "KMTC - Nyamache Campus" :
      code === "5055K20" ? "KMTC - Rachuonyo Campus" :
      code === "5080K20" ? "KMTC - Sigowet Campus" : "KMTC - Webuye Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "D+", 
      "mathematics/physics/chemistry/physicalSciences/homeScience/agriculture": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN EMERGENCY MEDICAL TECHNOLOGY ---
  ...["5175K21", "4815K21", "4910K21", "4975K21", "5000K21"].map(code => ({
    name: "Diploma in Emergency Medical Technology",
    code: code,
    universities: [
      code === "5175K21" ? "KMTC - Kakamega - Navakholo Campus" :
      code === "4815K21" ? "KMTC - Kapenguria Campus" :
      code === "4910K21" ? "KMTC - Makindu Campus" :
      code === "4975K21" ? "KMTC - Mombasa Campus" : "KMTC - Nairobi Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "biology/biologicalSciences": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN SPEECH AND LANGUAGE THERAPY ---
  ...["5000K30"].map(code => ({
    name: "Diploma in Speech and Language Therapy",
    code: code,
    universities: ["KMTC - Nairobi Campus"],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN KENYA REGISTERED NURSING ---
  ...["4770K31"].map(code => ({
    name: "Diploma in Kenya Registered Nursing",
    code: code,
    universities: ["KMTC - Gatundu Campus"],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "mathematics/physics/chemistry/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN CLINICAL MEDICINE AND SURGERY ---
  ...[
    "4725K32", "4735K32", "4755K32", "4760K32", "4765K32", "4780K32", "4790K32", "4795K32", 
    "4800K32", "4805K32", "4815K32", "4820K32", "4840K32", "4845K32", "4850K32", "4860K32", 
    "4895K32", "4905K32", "4915K32", "4925K32", "5310K32", "4945K32", "4985K32", "5000K32", 
    "5005K32", "5025K32", "5030K32", "5040K32", "5050K32", "5065K32", "5080K32", "5095K32", 
    "5100K32", "5120K32", "5130K32"
  ].map(code => ({
    name: "Diploma in Clinical Medicine and Surgery",
    code: code,
    universities: [
      code === "4725K32" ? "KMTC - Bondo Campus" :
      code === "4735K32" ? "KMTC - Busia Campus" :
      code === "4755K32" ? "KMTC - Eldoret Campus" :
      code === "4760K32" ? "KMTC - Embu Campus" :
      code === "4765K32" ? "KMTC - Garissa Campus" :
      code === "4780K32" ? "KMTC - Homa Bay Campus" :
      code === "4790K32" ? "KMTC - Isiolo Campus" :
      code === "4795K32" ? "KMTC - Iten Campus" :
      code === "4800K32" ? "KMTC - Kabarnet Campus" :
      code === "4805K32" ? "KMTC - Kakamega Campus" :
      code === "4815K32" ? "KMTC - Kapenguria Campus" :
      code === "4820K32" ? "KMTC - Kapkatet Campus" :
      code === "4840K32" ? "KMTC - Kilifi Campus" :
      code === "4845K32" ? "KMTC - Kisii Campus" :
      code === "4850K32" ? "KMTC - Kisumu Campus" :
      code === "4860K32" ? "KMTC - Kitui Campus" :
      code === "4895K32" ? "KMTC - Loitokitok Campus" :
      code === "4905K32" ? "KMTC - Machakos Campus" :
      code === "4915K32" ? "KMTC - Makueni Campus" :
      code === "4925K32" ? "KMTC - Mandera Campus" :
      code === "5310K32" ? "KMTC - Marsabit Campus" :
      code === "4945K32" ? "KMTC - Meru Campus" :
      code === "4985K32" ? "KMTC - Msambweni Campus" :
      code === "5000K32" ? "KMTC - Nairobi Campus" :
      code === "5005K32" ? "KMTC - Nakuru Campus" :
      code === "5025K32" ? "KMTC - Nyamira Campus" :
      code === "5030K32" ? "KMTC - Nyandarua Campus" :
      code === "5040K32" ? "KMTC - Nyeri Campus" :
      code === "5050K32" ? "KMTC - Port Reitz Campus" :
      code === "5065K32" ? "KMTC - Shianda - Mumias Campus" :
      code === "5080K32" ? "KMTC - Sigowet Campus" :
      code === "5095K32" ? "KMTC - Teso Campus" :
      code === "5100K32" ? "KMTC - Thika Campus" :
      code === "5120K32" ? "KMTC - Voi Campus" : "KMTC - Webuye Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C", 
      "chemistry/physicalSciences": "C-", 
      "mathematics/physics/physicalSciences": "C-" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN MORTUARY SCIENCE ---
  ...["4725K33", "4760K33", "4805K33", "4845K33", "4850K33", "4905K33", "4975K33", "5000K33", "5110K33"].map(code => ({
    name: "Diploma in Mortuary Science",
    code: code,
    universities: [
      code === "4725K33" ? "KMTC - Bondo Campus" :
      code === "4760K33" ? "KMTC - Embu Campus" :
      code === "4805K33" ? "KMTC - Kakamega Campus" :
      code === "4845K33" ? "KMTC - Kisii Campus" :
      code === "4850K33" ? "KMTC - Kisumu Campus" :
      code === "4905K33" ? "KMTC - Machakos Campus" :
      code === "4975K33" ? "KMTC - Mombasa Campus" :
      code === "5000K33" ? "KMTC - Nairobi Campus" : "KMTC - Ugenya Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: {},
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- DIPLOMA IN HEALTH PROMOTION ---
  ...["5000K34"].map(code => ({
    name: "Diploma in Health Promotion",
    code: code,
    universities: ["KMTC - Nairobi Campus"],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- DIPLOMA IN HEALTH INSURANCE MANAGEMENT ---
  ...["5000K35"].map(code => ({
    name: "Diploma in Health Insurance Management",
    code: code,
    universities: ["KMTC - Nairobi Campus"],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C", 
      "biology/biologicalSciences": "D+", 
      "mathematics": "D+", 
      "physics/chemistry/physicalSciences/geography/economics/homeScience/agriculture/computer/business": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C"
  })),

  // --- CERTIFICATE IN HEALTH RECORDS AND INFORMATION TECHNOLOGY ---
  ...["4725K22", "4740K22", "4785K22", "5220K22", "4815K22", "4825K22", "4860K22", "4870K22", "4885K22", "4895K22", "4900K22", "4920K22", "4950K22"].map(code => ({
    name: "Certificate in Health Records and Information Technology",
    code: code,
    universities: [
      code === "4725K22" ? "KMTC - Bondo Campus" :
      code === "4740K22" ? "KMTC - Chemolingot Campus" :
      code === "4785K22" ? "KMTC - Imenti Campus" :
      code === "5220K22" ? "KMTC - Kangema Campus" :
      code === "4815K22" ? "KMTC - Kapenguria Campus" :
      code === "4825K22" ? "KMTC - Kaptumo Campus" :
      code === "4860K22" ? "KMTC - Kitui Campus" :
      code === "4870K22" ? "KMTC - Kuria Campus" :
      code === "4885K22" ? "KMTC - Lamu Campus" :
      code === "4895K22" ? "KMTC - Loitokitok Campus" :
      code === "4900K22" ? "KMTC - Lugari Campus" :
      code === "4920K22" ? "KMTC - Makueni - Mbuvo Campus" :
      code === "4950K22" ? "KMTC - Maua Campus" : "KMTC - Other Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "D", 
      "mathematics": "D-", 
      "physics/chemistry/generalScience/geography/computer/business": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN KENYA ENROLLED COMMUNITY HEALTH NURSING ---
  ...["4720K23", "4765K23", "4790K23", "4800K23", "4815K23", "4840K23", "4860K23", "4895K23", "4985K23", "5125K23"].map(code => ({
    name: "Certificate in Kenya Enrolled Community Health Nursing",
    code: code,
    universities: [
      code === "4720K23" ? "KMTC - Bomet Campus" :
      code === "4765K23" ? "KMTC - Garissa Campus" :
      code === "4790K23" ? "KMTC - Isiolo Campus" :
      code === "4800K23" ? "KMTC - Kabarnet Campus" :
      code === "4815K23" ? "KMTC - Kapenguria Campus" :
      code === "4840K23" ? "KMTC - Kilifi Campus" :
      code === "4860K23" ? "KMTC - Kitui Campus" :
      code === "4895K23" ? "KMTC - Loitokitok Campus" :
      code === "4985K23" ? "KMTC - Msambweni Campus" : "KMTC - Wajir Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN NUTRITION & DIETETICS ---
  ...["4750K24", "4800K24", "4830K24", "4875K24", "4890K24", "4920K24", "4970K24", "5060K24", "5100K24"].map(code => ({
    name: "Certificate in Nutrition & Dietetics",
    code: code,
    universities: [
      code === "4750K24" ? "KMTC - Chwele Campus" :
      code === "4800K24" ? "KMTC - Kabarnet Campus" :
      code === "4830K24" ? "KMTC - Karen - Nairobi Campus" :
      code === "4875K24" ? "KMTC - Kwale Campus" :
      code === "4890K24" ? "KMTC - Lodwar Campus" :
      code === "4920K24" ? "KMTC - Makueni - Mbuvo Campus" :
      code === "4970K24" ? "KMTC - Molo Campus" :
      code === "5060K24" ? "KMTC - Rera Campus" : "KMTC - Thika Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "D+", 
      "biology/biologicalSciences": "D", 
      "chemistry/physicalSciences": "D", 
      "mathematics/physics/generalScience/homeScience/agriculture": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "D+"
  })),

  // --- CERTIFICATE IN MEDICAL ENGINEERING ---
  ...["4720K25", "4755K25", "4760K25", "4840K25", "4845K25", "4850K25", "4880K25", "4895K25", "4910K25", "4945K25", "5000K25"].map(code => ({
    name: "Certificate in Medical Engineering",
    code: code,
    universities: [
      code === "4720K25" ? "KMTC - Bomet Campus" :
      code === "4755K25" ? "KMTC - Eldoret Campus" :
      code === "4760K25" ? "KMTC - Embu Campus" :
      code === "4840K25" ? "KMTC - Kilifi Campus" :
      code === "4845K25" ? "KMTC - Kisii Campus" :
      code === "4850K25" ? "KMTC - Kisumu Campus" :
      code === "4880K25" ? "KMTC - Lake Victoria Campus" :
      code === "4895K25" ? "KMTC - Loitokitok Campus" :
      code === "4910K25" ? "KMTC - Makindu Campus" :
      code === "4945K25" ? "KMTC - Meru Campus" : "KMTC - Nairobi Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "D+", 
      "mathematics": "D", 
      "biology/physics/chemistry/biologicalSciences": "D-" 
    },
    level: "KMTC",
    minimumMeanGrade: "D+"
  })),

  // --- CERTIFICATE IN ORTHOPEDIC TRAUMA MEDICINE ---
  ...["4730K26", "5495K26", "4735K26", "5505K26", "4745K26", "4815K26", "4845K26", "4905K26", "5000K26", "5040K26"].map(code => ({
    name: "Certificate in Orthopedic Trauma Medicine",
    code: code,
    universities: [
      code === "4730K26" ? "KMTC - Bungoma Campus" :
      code === "5495K26" ? "KMTC - Burnt Forest Campus" :
      code === "4735K26" ? "KMTC - Busia Campus" :
      code === "5505K26" ? "KMTC - Butula Campus" :
      code === "4745K26" ? "KMTC - Chuka Campus" :
      code === "4815K26" ? "KMTC - Kapenguria Campus" :
      code === "4845K26" ? "KMTC - Kisii Campus" :
      code === "4905K26" ? "KMTC - Machakos Campus" :
      code === "5000K26" ? "KMTC - Nairobi Campus" : "KMTC - Nyeri Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/homeScience/agriculture/woodwork/metalwork/computer": "D+" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN PUBLIC HEALTH ---
  ...["4800K27", "4835K27", "4860K27", "4870K27", "4875K27", "4880K27", "4930K27", "5040K27", "5090K27", "5105K27"].map(code => ({
    name: "Certificate in Public Health",
    code: code,
    universities: [
      code === "4800K27" ? "KMTC - Kabarnet Campus" :
      code === "4835K27" ? "KMTC - Karuri Campus" :
      code === "4860K27" ? "KMTC - Kitui Campus" :
      code === "4870K27" ? "KMTC - Kuria Campus" :
      code === "4875K27" ? "KMTC - Kwale Campus" :
      code === "4880K27" ? "KMTC - Lake Victoria Campus" :
      code === "4930K27" ? "KMTC - Manza Campus" :
      code === "5040K27" ? "KMTC - Nyeri Campus" :
      code === "5090K27" ? "KMTC - Taveta Campus" : "KMTC - Trans Mara Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "C-", 
      "biology/biologicalSciences": "C-", 
      "mathematics/physics/chemistry/physicalSciences": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN COMMUNITY HEALTH ASSISTANT ---
  ...["4965K28", "4740K28", "4760K28", "4785K28", "4790K28", "5175K28", "4805K28", "5220K28", "4810K28", "4815K28", "5360K28", "5035K28", "5180K28", "4870K28", "4875K28", "4880K28", "4890K28"].map(code => ({
    name: "Certificate in Community Health Assistant",
    code: code,
    universities: [
      code === "4965K28" ? "KMTC - Awendo Campus" :
      code === "4740K28" ? "KMTC - Chemolingot Campus" :
      code === "4760K28" ? "KMTC - Embu Campus" :
      code === "4785K28" ? "KMTC - Imenti Campus" :
      code === "4790K28" ? "KMTC - Isiolo Campus" :
      code === "5175K28" ? "KMTC - Kakamega - Navakholo Campus" :
      code === "4805K28" ? "KMTC - Kakamega Campus" :
      code === "5220K28" ? "KMTC - Kangema Campus" :
      code === "4810K28" ? "KMTC - Kangundo Campus" :
      code === "4815K28" ? "KMTC - Kapenguria Campus" :
      code === "5360K28" ? "KMTC - Kerio Valley Campus" :
      code === "5035K28" ? "KMTC - Kinangop Campus" :
      code === "5180K28" ? "KMTC - Kitui - Mutomo Campus" :
      code === "4870K28" ? "KMTC - Kuria Campus" :
      code === "4875K28" ? "KMTC - Kwale Campus" :
      code === "4880K28" ? "KMTC - Lake Victoria Campus" :
      code === "4890K28" ? "KMTC - Lodwar Campus" : "KMTC - Other Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "D+", 
      "biology/biologicalSciences": "D", 
      "mathematics/physics/chemistry/physicalSciences/homeScience/agriculture": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN EMERGENCY MEDICAL TECHNICIAN ---
  ...["4965K29", "4730K29", "4815K29", "4905K29", "5000K29", "5040K29"].map(code => ({
    name: "Certificate in Emergency Medical Technician",
    code: code,
    universities: [
      code === "4965K29" ? "KMTC - Awendo Campus" :
      code === "4730K29" ? "KMTC - Bungoma Campus" :
      code === "4815K29" ? "KMTC - Kapenguria Campus" :
      code === "4905K29" ? "KMTC - Machakos Campus" :
      code === "5000K29" ? "KMTC - Nairobi Campus" : "KMTC - Nyeri Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "biology/biologicalSciences": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "C-"
  })),

  // --- CERTIFICATE IN HEALTH INSURANCE MANAGEMENT ---
  ...["4725K36", "4750K36", "4975K36", "5000K36", "5005K36", "5020K36", "5040K36", "5055K36", "5060K36", "5130K36"].map(code => ({
    name: "Certificate in Health Insurance Management",
    code: code,
    universities: [
      code === "4725K36" ? "KMTC - Bondo Campus" :
      code === "4750K36" ? "KMTC - Chwele Campus" :
      code === "4975K36" ? "KMTC - Mombasa Campus" :
      code === "5000K36" ? "KMTC - Nairobi Campus" :
      code === "5005K36" ? "KMTC - Nakuru Campus" :
      code === "5020K36" ? "KMTC - Nyamache Campus" :
      code === "5040K36" ? "KMTC - Nyeri Campus" :
      code === "5055K36" ? "KMTC - Rachuonyo Campus" :
      code === "5060K36" ? "KMTC - Rera Campus" : "KMTC - Webuye Campus"
    ],
    previousYearCutoff: 0,
    bestCluster: 0,
    clusters: [],
    subjectRequirements: { 
      "english/kiswahili": "D+", 
      "biology/biologicalSciences": "D", 
      "physics/chemistry/homeScience/agriculture/woodwork/building/electricity/drawing": "D" 
    },
    level: "KMTC",
    minimumMeanGrade: "D+"
  }))
];

export function getKmtcCourses(): Course[] {
  return kmtcCourses;
}