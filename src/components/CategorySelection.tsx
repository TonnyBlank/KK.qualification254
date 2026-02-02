import { motion } from "framer-motion";
import { Check, Layers, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  degreeClusters, 
  diplomaCategories, 
  certificateCategories, 
  artisanCategories 
} from "@/lib/courseData";

interface CategorySelectionProps {
  selectedItems: (number | string)[];
  onItemToggle: (item: number | string) => void;
  onSelectAll: () => void;
  checkAll: boolean;
  visible: boolean;
  level: string;
}

export function CategorySelection({ 
  selectedItems, 
  onItemToggle, 
  onSelectAll,
  checkAll,
  visible,
  level
}: CategorySelectionProps) {
  if (!visible) return null;

  // Get the appropriate items based on level
  const getItemsForLevel = () => {
    switch (level) {
      case 'degree':
        return Object.entries(degreeClusters).map(([id, name]) => ({
          id: parseInt(id),
          name,
          isCluster: true
        }));
      case 'diploma':
        return diplomaCategories.map((name, index) => ({
          id: name,
          name,
          isCluster: false
        }));
      case 'certificate':
        return certificateCategories.map((name, index) => ({
          id: name,
          name,
          isCluster: false
        }));
      case 'artisan':
        return artisanCategories.map((name, index) => ({
          id: name,
          name,
          isCluster: false
        }));
      default:
        return [];
    }
  };

  const items = getItemsForLevel();
  const isDegree = level === 'degree';
  const title = isDegree ? "Select Clusters to Check" : "Select Categories to Check";
  const subtitle = isDegree 
    ? "Choose specific clusters for degree courses or check all"
    : `Choose specific categories for ${level} courses or check all`;

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
              {title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {subtitle}
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

      <div className={cn(
        "grid gap-3",
        isDegree ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )}>
        {items.map((item, index) => {
          const isSelected = checkAll || selectedItems.includes(item.id);

          return (
            <motion.button
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * index }}
              onClick={() => !checkAll && onItemToggle(item.id)}
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
                {isDegree && (
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors flex-shrink-0",
                    isSelected 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {item.id}
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-sm font-medium",
                    isDegree ? "truncate" : "line-clamp-2",
                    isSelected ? "text-primary" : "text-foreground"
                  )}>
                    {item.name}
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

      {!checkAll && selectedItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-muted/50 rounded-xl"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{selectedItems.length}</span> {isDegree ? "cluster(s)" : "category(ies)"} selected
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
