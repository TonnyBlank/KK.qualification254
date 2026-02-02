import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award } from "lucide-react";
import { grades } from "@/lib/courseData";

interface MeanGradeInputProps {
  meanGrade: string;
  onMeanGradeChange: (grade: string) => void;
  visible: boolean;
}

export function MeanGradeInput({ meanGrade, onMeanGradeChange, visible }: MeanGradeInputProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
    >
      <div className="flex items-start gap-3 mb-4">
        <Award className="w-5 h-5 text-primary mt-0.5" />
        <div>
          <h2 className="text-xl font-display font-semibold text-primary">
            KCSE Mean Grade
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your overall KCSE mean grade (required for non-degree courses)
          </p>
        </div>
      </div>

      <div className="max-w-xs">
        <Select value={meanGrade} onValueChange={onMeanGradeChange}>
          <SelectTrigger className="h-12 bg-background border-border hover:border-primary/50 transition-colors">
            <SelectValue placeholder="Select Mean Grade" />
          </SelectTrigger>
          <SelectContent>
            {grades.map((grade) => (
              <SelectItem key={grade} value={grade}>
                {grade}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}
