import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allSubjects, subjectLabels, grades } from "@/lib/courseData";
import { BookOpen, Languages, FlaskConical, Globe, Wrench } from "lucide-react";

interface GradeInputProps {
  grades: Record<string, string>;
  onGradeChange: (subject: string, grade: string) => void;
}

const tabConfig = [
  { id: 'core', label: 'Core', icon: BookOpen },
  { id: 'languages', label: 'Languages', icon: Languages },
  { id: 'sciences', label: 'Sciences', icon: FlaskConical },
  { id: 'humanities', label: 'Humanities', icon: Globe },
  { id: 'technical', label: 'Technical', icon: Wrench },
];

export function GradeInput({ grades: studentGrades, onGradeChange }: GradeInputProps) {
  const [activeTab, setActiveTab] = useState('core');

  const getFilledCount = () => {
    return Object.values(studentGrades).filter(g => g).length;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-display font-semibold text-primary flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Enter Your KCSE Grades
        </h2>
        <div className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
          {getFilledCount()} subjects entered
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-5 gap-1 mb-6 h-auto p-1 bg-muted rounded-xl">
          {tabConfig.map(({ id, label, icon: Icon }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="flex flex-col md:flex-row items-center gap-1 py-2 px-2 text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(allSubjects).map(([category, subjects]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject) => (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2"
                >
                  <label className="text-sm font-medium text-foreground">
                    {subjectLabels[subject]}
                  </label>
                  <Select
                    value={studentGrades[subject] || ''}
                    onValueChange={(value) => onGradeChange(subject, value)}
                  >
                    <SelectTrigger className="h-11 bg-background border-border hover:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}
