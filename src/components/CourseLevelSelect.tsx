import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Stethoscope, Check, Wrench } from "lucide-react";
import { levelNames, levelDescriptions, levelPrices } from "@/lib/courseData";
import { cn } from "@/lib/utils";

interface CourseLevelSelectProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

const levelConfig = [
  { id: 'artisan', icon: Wrench },
  { id: 'certificate', icon: Award },
  { id: 'diploma', icon: BookOpen },
  { id: 'degree', icon: GraduationCap },
  { id: 'kmtc', icon: Stethoscope },
];

export function CourseLevelSelect({ selectedLevel, onLevelChange }: CourseLevelSelectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
    >
      <h2 className="text-xl font-display font-semibold text-primary mb-6 flex items-center gap-2">
        <GraduationCap className="w-5 h-5" />
        Select Course Level
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {levelConfig.map(({ id, icon: Icon }, index) => (
          <motion.button
            key={id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            onClick={() => onLevelChange(id)}
            className={cn(
              "relative p-5 rounded-xl border-2 transition-all duration-300 text-left group",
              selectedLevel === id
                ? "border-primary bg-primary/5 shadow-green"
                : "border-border hover:border-primary/50 bg-background hover:bg-muted/50"
            )}
          >
            {selectedLevel === id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
              >
                <Check className="w-4 h-4 text-primary-foreground" />
              </motion.div>
            )}
            
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                selectedLevel === id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
              )}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {levelNames[id]}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {levelDescriptions[id]}
                </p>
                <div className="inline-flex items-center gap-1 bg-accent/20 text-accent-foreground px-2 py-0.5 rounded text-sm font-medium">
                  Ksh {levelPrices[id]}
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
