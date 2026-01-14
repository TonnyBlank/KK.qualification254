import { useState } from "react";
import { Header } from "@/components/Header";
import { GradeInput } from "@/components/GradeInput";
import { CourseLevelSelect } from "@/components/CourseLevelSelect";
import { ClusterWeights } from "@/components/ClusterWeights";
import { ClusterSelection } from "@/components/ClusterSelection";
import { PaymentSection } from "@/components/PaymentSection";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { getCoursesByLevel, checkQualification, QualificationResult } from "@/lib/courseData";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [selectedLevel, setSelectedLevel] = useState("");
  const [clusterWeights, setClusterWeights] = useState<Record<number, number>>({});
  const [selectedClusters, setSelectedClusters] = useState<number[]>([]);
  const [checkAllClusters, setCheckAllClusters] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QualificationResult[]>([]);
  const [phone, setPhone] = useState("712345678");

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades((prev) => ({ ...prev, [subject]: grade }));
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    // Reset cluster selection when level changes
    if (level !== "degree") {
      setSelectedClusters([]);
      setCheckAllClusters(false);
    }
  };

  const handleWeightChange = (cluster: number, weight: number) => {
    setClusterWeights((prev) => ({ ...prev, [cluster]: weight }));
  };

  const handleClusterToggle = (cluster: number) => {
    setSelectedClusters((prev) =>
      prev.includes(cluster)
        ? prev.filter((c) => c !== cluster)
        : [...prev, cluster]
    );
  };

  const handleSelectAllClusters = () => {
    setCheckAllClusters(!checkAllClusters);
    if (!checkAllClusters) {
      setSelectedClusters([]);
    }
  };

  const subjectCount = Object.values(grades).filter((g) => g).length;
  const hasRequiredSubjects = Boolean(grades.english && grades.mathematics);
  const hasClusterWeights = Object.values(clusterWeights).some((w) => w > 0);
  const hasClusterSelection = checkAllClusters || selectedClusters.length > 0;

  const handlePaymentSuccess = () => {
    // For degree, use selected clusters; for others, pass undefined
    const clustersToCheck = selectedLevel === "degree" 
      ? (checkAllClusters ? undefined : selectedClusters)
      : undefined;
    
    const courses = getCoursesByLevel(selectedLevel, clustersToCheck);
    const qualificationResults = courses.map((course) =>
      checkQualification(course, grades, clusterWeights, selectedLevel)
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
    setCheckAllClusters(false);
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

              <ClusterSelection
                selectedClusters={selectedClusters}
                onClusterToggle={handleClusterToggle}
                onSelectAll={handleSelectAllClusters}
                checkAll={checkAllClusters}
                visible={selectedLevel === "degree"}
              />

              <ClusterWeights
                weights={clusterWeights}
                onWeightChange={handleWeightChange}
                visible={selectedLevel === "degree" && hasClusterSelection}
              />

              <PaymentSection
                selectedLevel={selectedLevel}
                subjectCount={subjectCount}
                hasRequiredSubjects={hasRequiredSubjects}
                hasClusterWeights={hasClusterWeights}
                hasClusterSelection={hasClusterSelection}
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
