import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero-gradient text-primary-foreground rounded-2xl p-8 mb-8 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary-foreground/5 rounded-full blur-xl" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center gap-3 mb-4"
        >
          <GraduationCap className="w-10 h-10" />
          <Award className="w-8 h-8 text-accent" />
        </motion.div>
        
        <h1 className="text-2xl md:text-4xl font-display font-bold mb-3">
          University Course Qualification Check
        </h1>
        <p className="text-primary-foreground/90 text-sm md:text-lg max-w-2xl mb-4">
          Check if you qualify for university and college courses based on your KCSE results
        </p>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-semibold text-sm md:text-base shadow-gold"
        >
          Ksh 50 Per Course Level
        </motion.div>
      </div>

      {/* Kenya flag stripe decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1" style={{ backgroundColor: 'hsl(0, 0%, 10%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(0, 75%, 50%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(48, 95%, 53%)' }} />
        <div className="flex-1" style={{ backgroundColor: 'hsl(140, 70%, 28%)' }} />
      </div>
    </motion.header>
  );
}
