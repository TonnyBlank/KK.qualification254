import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { GradeInput } from "@/components/GradeInput";
import { CourseLevelSelect } from "@/components/CourseLevelSelect";
import { ClusterWeights } from "@/components/ClusterWeights";
import { PaymentSection } from "@/components/PaymentSection";
import { ResultsDisplay } from "@/components/ResultsDisplay";
import { getCoursesByLevel, checkQualification, QualificationResult } from "@/lib/courseData";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [grades, setGrades] = useState<Record<string, string>>({});
  const [selectedLevel, setSelectedLevel] = useState("");
  const [clusterWeights, setClusterWeights] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QualificationResult[]>([]);
  const [phone, setPhone] = useState("712345678"); // Demo phone

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades((prev) => ({ ...prev, [subject]: grade }));
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
  };

  const handleWeightChange = (cluster: number, weight: number) => {
    setClusterWeights((prev) => ({ ...prev, [cluster]: weight }));
  };

  const subjectCount = Object.values(grades).filter((g) => g).length;
  const hasRequiredSubjects = Boolean(grades.english && grades.mathematics);
  const hasClusterWeights = Object.values(clusterWeights).some((w) => w > 0);

  const handlePaymentSuccess = () => {
    const courses = getCoursesByLevel(selectedLevel);
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

              <ClusterWeights
                weights={clusterWeights}
                onWeightChange={handleWeightChange}
                visible={selectedLevel === "degree"}
              />

              <PaymentSection
                selectedLevel={selectedLevel}
                subjectCount={subjectCount}
                hasRequiredSubjects={hasRequiredSubjects}
                hasClusterWeights={hasClusterWeights}
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
