import { motion } from "framer-motion";
import { Check, Layers, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { degreeClusters } from "@/lib/courseData";

interface ClusterSelectionProps {
  selectedClusters: number[];
  onClusterToggle: (cluster: number) => void;
  onSelectAll: () => void;
  checkAll: boolean;
  visible: boolean;
}

export function ClusterSelection({ 
  selectedClusters, 
  onClusterToggle, 
  onSelectAll,
  checkAll,
  visible 
}: ClusterSelectionProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
    >
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="flex items-start gap-3">
          <Layers className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h2 className="text-xl font-display font-semibold text-primary">
              Select Clusters to Check
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Choose specific clusters for degree courses or check all
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSelectAll}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all font-medium text-sm",
            checkAll 
              ? "bg-primary text-primary-foreground border-primary" 
              : "bg-background text-primary border-primary/50 hover:border-primary hover:bg-primary/5"
          )}
        >
          <CheckCheck className="w-4 h-4" />
          {checkAll ? "All Selected" : "Check All"}
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(degreeClusters).map(([clusterId, name], index) => {
          const id = parseInt(clusterId);
          const isSelected = checkAll || selectedClusters.includes(id);

          return (
            <motion.button
              key={id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * index }}
              onClick={() => !checkAll && onClusterToggle(id)}
              disabled={checkAll}
              className={cn(
                "relative p-3 rounded-xl border-2 transition-all text-left group",
                isSelected
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border hover:border-primary/50 bg-background hover:bg-muted/30",
                checkAll && "opacity-75 cursor-not-allowed"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors",
                  isSelected 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {id}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-medium truncate",
                    isSelected ? "text-primary" : "text-foreground"
                  )}>
                    {name}
                  </p>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {!checkAll && selectedClusters.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-muted/50 rounded-xl"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{selectedClusters.length}</span> cluster(s) selected
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
