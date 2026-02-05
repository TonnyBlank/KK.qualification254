 import { motion } from "framer-motion";
 import { CheckCircle, AlertCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 interface CheckResultsButtonProps {
   selectedLevel: string;
   subjectCount: number;
   hasRequiredSubjects: boolean;
   hasClusterWeights: boolean;
   hasCategorySelection?: boolean;
   hasMeanGrade?: boolean;
   onCheckResults: () => void;
 }
 
 export function CheckResultsButton({
   selectedLevel,
   subjectCount,
   hasRequiredSubjects,
   hasClusterWeights,
   hasCategorySelection = true,
   hasMeanGrade = true,
   onCheckResults,
 }: CheckResultsButtonProps) {
   const isValid = () => {
     if (subjectCount < 7) return false;
     if (!selectedLevel) return false;
     if (!hasRequiredSubjects) return false;
     if (!hasCategorySelection) return false;
     if (!hasMeanGrade) return false;
     if (selectedLevel === 'degree' && !hasClusterWeights) return false;
     return true;
   };
 
   const getValidationMessage = () => {
     if (subjectCount < 7) return `Enter at least 7 subjects (${subjectCount}/7)`;
     if (!selectedLevel) return "Select a course level";
     if (!hasRequiredSubjects) return "English and Mathematics are required";
     if (!hasMeanGrade) return "Enter your KCSE mean grade";
     if (!hasCategorySelection) {
       if (selectedLevel === 'degree') return "Select clusters to check or 'Check All'";
       return "Select categories to check or 'Check All'";
     }
     if (selectedLevel === 'degree' && !hasClusterWeights) return "Enter cluster weights for degree courses";
     return null;
   };
 
   const validationMessage = getValidationMessage();
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: 0.4 }}
       className="bg-card rounded-2xl p-6 shadow-lg border border-border"
     >
       <h2 className="text-xl font-display font-semibold text-primary mb-6 flex items-center gap-2">
         <CheckCircle className="w-5 h-5" />
         Check Qualification
       </h2>
 
       <div className="space-y-4">
         {validationMessage && (
           <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
             <AlertCircle className="w-4 h-4 text-accent" />
             {validationMessage}
           </div>
         )}
 
         <Button
           onClick={onCheckResults}
           disabled={!isValid()}
           className="w-full h-14 text-lg font-semibold kenya-gradient hover:opacity-90 transition-opacity disabled:opacity-50"
         >
           <CheckCircle className="w-5 h-5 mr-2" />
           Check My Qualifications
         </Button>
 
         <p className="text-xs text-center text-muted-foreground">
           Find out which courses you qualify for based on your KCSE results.
         </p>
       </div>
     </motion.div>
   );
 }