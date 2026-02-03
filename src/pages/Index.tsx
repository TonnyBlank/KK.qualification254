import { useState } from "react";
import { Header } from "@/components/Header";
import { GradeInput } from "@/components/GradeInput";
import { CourseLevelSelect } from "@/components/CourseLevelSelect";
import { ClusterWeights } from "@/components/ClusterWeights";
import { CategorySelection } from "@/components/CategorySelection";
import { MeanGradeInput } from "@/components/MeanGradeInput";
import { PaymentSection } from "@/components/PaymentSection";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { getCoursesByLevel, checkQualification, QualificationResult } from "@/lib/courseData";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [meanGrade, setMeanGrade] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [clusterWeights, setClusterWeights] = useState<Record<number, number>>({});
  const [selectedClusters, setSelectedClusters] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [checkAllClusters, setCheckAllClusters] = useState(false);
  const [checkAllCategories, setCheckAllCategories] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QualificationResult[]>([]);
  const [phone, setPhone] = useState("793900080");

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades((prev) => ({ ...prev, [subject]: grade }));
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    // Reset selections when level changes
    setSelectedClusters([]);
    setSelectedCategories([]);
    setCheckAllClusters(false);
    setCheckAllCategories(false);
  };

  const handleWeightChange = (cluster: number, weight: number) => {
    setClusterWeights((prev) => ({ ...prev, [cluster]: weight }));
  };

  const handleItemToggle = (item: number | string) => {
    if (selectedLevel === 'degree') {
      const cluster = item as number;
      setSelectedClusters((prev) =>
        prev.includes(cluster)
          ? prev.filter((c) => c !== cluster)
          : [...prev, cluster]
      );
    } else {
      const category = item as string;
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category)
          : [...prev, category]
      );
    }
  };

  const handleSelectAll = () => {
    if (selectedLevel === 'degree') {
      setCheckAllClusters(!checkAllClusters);
      if (!checkAllClusters) {
        setSelectedClusters([]);
      }
    } else {
      setCheckAllCategories(!checkAllCategories);
      if (!checkAllCategories) {
        setSelectedCategories([]);
      }
    }
  };

  const subjectCount = Object.values(grades).filter((g) => g).length;
  const hasRequiredSubjects = Boolean(grades.english && grades.mathematics);
  const hasClusterWeights = Object.values(clusterWeights).some((w) => w > 0);
  
  // For degree: needs cluster selection
  // For diploma/certificate/artisan: needs category selection
  // For kmtc: no category selection needed
  const hasCategorySelection = selectedLevel === 'kmtc' 
    ? true 
    : selectedLevel === 'degree'
    ? (checkAllClusters || selectedClusters.length > 0)
    : (checkAllCategories || selectedCategories.length > 0);

  // Mean grade is required for all levels
  const hasMeanGrade = Boolean(meanGrade);

  // Show category selection for degree, diploma, certificate, artisan (not kmtc)
  const showCategorySelection = ['degree', 'diploma', 'certificate', 'artisan'].includes(selectedLevel);

  // Show mean grade input for all levels (degrees also require mean grade for qualification)
  const showMeanGradeInput = ['degree', 'diploma', 'certificate', 'artisan', 'kmtc'].includes(selectedLevel);

  const handlePaymentSuccess = () => {
    // Get courses based on level and selected clusters/categories
    const clustersToCheck = selectedLevel === "degree" 
      ? (checkAllClusters ? undefined : selectedClusters)
      : undefined;
    
    const categoriesToCheck = ['diploma', 'certificate', 'artisan'].includes(selectedLevel)
      ? (checkAllCategories ? undefined : selectedCategories)
      : undefined;
    
    const courses = getCoursesByLevel(selectedLevel, clustersToCheck, categoriesToCheck);
    const qualificationResults = courses.map((course) =>
      checkQualification(course, grades, clusterWeights, selectedLevel, meanGrade)
    );
    
    // Sort: qualified first, then marginal, then not qualified
    qualificationResults.sort((a, b) => {
      if (a.qualified && !b.qualified) return -1;
      if (!a.qualified && b.qualified) return 1;
      if (a.marginallyQualified && !b.marginallyQualified) return -1;
      if (!a.marginallyQualified && b.marginallyQualified) return 1;
      return 0;
    });
    
    setResults(qualificationResults);
    setShowResults(true);
  };

  const handleCheckAnother = () => {
    setShowResults(false);
    setSelectedLevel("");
    setSelectedClusters([]);
    setSelectedCategories([]);
    setCheckAllClusters(false);
    setCheckAllCategories(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl py-6 px-4">
        <Header />

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <GradeInput grades={grades} onGradeChange={handleGradeChange} />
              
              <CourseLevelSelect
                selectedLevel={selectedLevel}
                onLevelChange={handleLevelChange}
              />

              <MeanGradeInput
                meanGrade={meanGrade}
                onMeanGradeChange={setMeanGrade}
                visible={showMeanGradeInput}
              />

              <CategorySelection
                selectedItems={selectedLevel === 'degree' ? selectedClusters : selectedCategories}
                onItemToggle={handleItemToggle}
                onSelectAll={handleSelectAll}
                checkAll={selectedLevel === 'degree' ? checkAllClusters : checkAllCategories}
                visible={showCategorySelection}
                level={selectedLevel}
              />

              <ClusterWeights
                weights={clusterWeights}
                onWeightChange={handleWeightChange}
                visible={selectedLevel === "degree" && hasCategorySelection}
              />

              <PaymentSection
                selectedLevel={selectedLevel}
                subjectCount={subjectCount}
                hasRequiredSubjects={hasRequiredSubjects}
                hasClusterWeights={hasClusterWeights}
                hasCategorySelection={hasCategorySelection}
                hasMeanGrade={hasMeanGrade}
                onPaymentSuccess={handlePaymentSuccess}
              />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultsDisplay
                results={results}
                grades={grades}
                selectedLevel={selectedLevel}
                phone={phone}
                meanGrade={meanGrade}
                clusterWeights={clusterWeights}
                selectedClusters={checkAllClusters ? [] : selectedClusters}
                checkAllClusters={checkAllClusters}
                onCheckAnother={handleCheckAnother}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
