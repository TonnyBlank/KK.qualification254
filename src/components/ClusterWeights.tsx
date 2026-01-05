import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Calculator, Info } from "lucide-react";

interface ClusterWeightsProps {
  weights: Record<number, number>;
  onWeightChange: (cluster: number, weight: number) => void;
  visible: boolean;
}

export function ClusterWeights({ weights, onWeightChange, visible }: ClusterWeightsProps) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border"
    >
      <div className="flex items-start gap-3 mb-6">
        <Calculator className="w-5 h-5 text-primary mt-0.5" />
        <div>
          <h2 className="text-xl font-display font-semibold text-primary">
            Enter Cluster Weights
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Required for degree courses. Enter your cluster points from KUCCPS.
          </p>
        </div>
      </div>

      <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-accent-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-accent-foreground">
            Cluster weights determine your eligibility for degree programs. Different courses use different clusters.
            Enter the clusters relevant to your desired courses.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((cluster) => (
          <div key={cluster} className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted-foreground">
              Cluster {cluster}
            </label>
            <Input
              type="number"
              placeholder="0.00"
              min={0}
              max={100}
              step={0.01}
              value={weights[cluster] || ''}
              onChange={(e) => onWeightChange(cluster, parseFloat(e.target.value) || 0)}
              className="h-10 text-center bg-background"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
