import { motion } from "framer-motion";
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Download, 
  RefreshCcw,
  User,
  GraduationCap,
  Award,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QualificationResult, levelNames, calculateTotalPoints, subjectLabels } from "@/lib/courseData";
import { cn } from "@/lib/utils";

interface ResultsDisplayProps {
  results: QualificationResult[];
  grades: Record<string, string>;
  selectedLevel: string;
  phone: string;
  clusterWeights: Record<number, number>;
  selectedClusters?: number[];
  checkAllClusters?: boolean;
  onCheckAnother: () => void;
}

export function ResultsDisplay({
  results,
  grades,
  selectedLevel,
  phone,
  clusterWeights,
  selectedClusters = [],
  checkAllClusters = false,
  onCheckAnother,
}: ResultsDisplayProps) {
  const totalPoints = calculateTotalPoints(grades);
  const qualifiedCount = results.filter(r => r.qualified && !r.marginallyQualified).length;
  const marginalCount = results.filter(r => r.marginallyQualified).length;
  const notQualifiedCount = results.filter(r => !r.qualified).length;

  const enteredSubjects = Object.entries(grades)
    .filter(([_, grade]) => grade)
    .map(([subject, grade]) => `${subjectLabels[subject] || subject}: ${grade}`)
    .join(', ');

  const getBestClusterDisplay = () => {
    const entries = Object.entries(clusterWeights)
      .filter(([_, value]) => value > 0)
      .sort((a, b) => b[1] - a[1]);
    if (entries.length === 0) return 'N/A';
    const [cluster, weight] = entries[0];
    return `Cluster ${cluster} (${weight.toFixed(2)})`;
  };

  const handleDownload = () => {
    const htmlContent = generateReportHTML(results, grades, selectedLevel, phone, totalPoints, enteredSubjects, getBestClusterDisplay());
    const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `KUCCPS_Results_${new Date().toISOString().slice(0, 10)}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Student Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl p-6 shadow-lg border border-border"
      >
        <h2 className="text-xl font-display font-semibold text-primary mb-6 flex items-center gap-2">
          <User className="w-5 h-5" />
          Your Results Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <InfoCard icon={User} label="Phone" value={`+254 ${phone}`} />
          <InfoCard icon={GraduationCap} label="Level Checked" value={levelNames[selectedLevel]} />
          <InfoCard icon={Award} label="Total Points" value={`${totalPoints}/84`} />
          {selectedLevel === 'degree' && (
            <InfoCard icon={Building} label="Best Cluster" value={getBestClusterDisplay()} />
          )}
        </div>

        <div className="bg-muted/50 rounded-xl p-4">
          <p className="text-sm text-muted-foreground mb-1">Subjects Entered</p>
          <p className="text-sm text-foreground">{enteredSubjects}</p>
        </div>
      </motion.div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          icon={CheckCircle}
          count={qualifiedCount}
          label="Qualified"
          color="text-primary"
          bgColor="bg-primary/10"
        />
        <StatCard
          icon={AlertTriangle}
          count={marginalCount}
          label="Close to Cutoff"
          color="text-accent-foreground"
          bgColor="bg-accent/20"
        />
        <StatCard
          icon={XCircle}
          count={notQualifiedCount}
          label="Not Qualified"
          color="text-destructive"
          bgColor="bg-destructive/10"
        />
      </div>

      {/* Warning for marginal qualifications */}
      {marginalCount > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-accent/10 border border-accent/30 rounded-xl p-4"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-accent-foreground">Warning: Marginally Qualified Courses</p>
              <p className="text-sm text-accent-foreground/80 mt-1">
                Some courses have cluster weights close to last year's cutoff. Choose a guaranteed alternative as backup.
                Cutoff points vary each year - these are 2024 reference points.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Course List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-2xl p-6 shadow-lg border border-border"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-display font-semibold text-primary">
            Course Qualification Results
          </h2>
          <span className="text-sm text-muted-foreground">
            {results.length} courses found
          </span>
        </div>

        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          {results.map((result, index) => (
            <CourseCard key={index} result={result} index={index} level={selectedLevel} />
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleDownload}
          variant="outline"
          className="flex-1 h-12"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Results (Word)
        </Button>
        <Button
          onClick={onCheckAnother}
          className="flex-1 h-12 kenya-gradient"
        >
          <RefreshCcw className="w-4 h-4 mr-2" />
          Check Another Level
        </Button>
      </div>
    </motion.div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="bg-muted/50 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className="font-semibold text-foreground">{value}</p>
    </div>
  );
}

function StatCard({ icon: Icon, count, label, color, bgColor }: { 
  icon: any; 
  count: number; 
  label: string; 
  color: string;
  bgColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("rounded-xl p-4 text-center", bgColor)}
    >
      <Icon className={cn("w-6 h-6 mx-auto mb-2", color)} />
      <p className={cn("text-2xl font-bold", color)}>{count}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
}

function CourseCard({ result, index, level }: { result: QualificationResult; index: number; level: string }) {
  const { course, qualified, marginallyQualified, missingRequirements, studentWeight } = result;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      className={cn(
        "rounded-xl p-4 border-2 transition-all",
        marginallyQualified
          ? "border-accent bg-accent/5"
          : qualified
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-muted/30"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="text-sm font-medium text-muted-foreground w-6">{index + 1}.</span>
          <div>
            <h3 className="font-semibold text-foreground">{course.name}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
              <span>Code: {course.code}</span>
              {level === 'degree' && (
                <>
                  <span>Cutoff: {course.previousYearCutoff}</span>
                  <span>Your Score: {studentWeight.toFixed(3)}</span>
                </>
              )}
            </div>
            {course.universities.length > 0 && (
              <p className="text-sm text-primary mt-2">
                {course.universities.slice(0, 2).join(', ')}
                {course.universities.length > 2 && ` +${course.universities.length - 2} more`}
              </p>
            )}
          </div>
        </div>
        
        <div className={cn(
          "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",
          marginallyQualified
            ? "bg-accent text-accent-foreground"
            : qualified
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        )}>
          {marginallyQualified ? 'CLOSE TO CUTOFF' : qualified ? 'QUALIFIED' : 'NOT QUALIFIED'}
        </div>
      </div>

      {missingRequirements.length > 0 && (
        <div className={cn(
          "mt-3 p-3 rounded-lg text-sm",
          marginallyQualified
            ? "bg-accent/20 text-accent-foreground"
            : qualified
            ? "bg-accent/10 text-accent-foreground"
            : "bg-destructive/10 text-destructive"
        )}>
          {missingRequirements.join(' • ')}
        </div>
      )}
    </motion.div>
  );
}

function generateReportHTML(
  results: QualificationResult[],
  grades: Record<string, string>,
  selectedLevel: string,
  phone: string,
  totalPoints: number,
  enteredSubjects: string,
  bestCluster: string
) {
  const tableRows = results.map((result, index) => {
    const { course, qualified, marginallyQualified, missingRequirements, studentWeight } = result;
    const status = marginallyQualified ? 'CLOSE TO CUTOFF' : qualified ? 'QUALIFIED' : 'NOT QUALIFIED';
    const rowClass = marginallyQualified ? 'marginally-qualified' : qualified ? 'qualified' : 'not-qualified';
    
    return `
      <tr class="${rowClass}">
        <td>${index + 1}</td>
        <td>${course.name}</td>
        <td>${course.code}</td>
        <td>${course.universities.join(', ')}</td>
        ${selectedLevel === 'degree' ? 
          `<td>${course.previousYearCutoff}</td><td>${studentWeight.toFixed(3)}</td>` : 
          `<td>${course.level || levelNames[selectedLevel]}</td>`
        }
        <td>${status}</td>
        <td>${missingRequirements.join('; ') || '-'}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        h1 { color: #006600; text-align: center; border-bottom: 3px solid #FFD700; padding-bottom: 10px; }
        h2 { color: #006600; margin-top: 30px; }
        .student-info { background: #f0fff0; padding: 20px; border-radius: 10px; border-left: 5px solid #009900; margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }
        th { background-color: #006600; color: white; padding: 12px; text-align: left; border: 1px solid #ddd; }
        td { padding: 10px; border: 1px solid #ddd; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        .qualified { background-color: #e6ffe6; color: #006600; font-weight: bold; }
        .not-qualified { background-color: #ffe6e6; color: #cc0000; }
        .marginally-qualified { background-color: #fff8e6; color: #cc6600; font-weight: bold; }
        .warning { background-color: #fff8e6; border: 2px solid #ff9900; padding: 15px; margin: 20px 0; border-radius: 8px; color: #cc6600; }
        .footer { text-align: center; margin-top: 40px; color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 20px; }
      </style>
    </head>
    <body>
      <h1>KUCCPS QUALIFICATION RESULTS - KENYA</h1>
      <p style="text-align: center; color: #666;">Generated on: ${new Date().toLocaleDateString()}</p>
      
      <div class="student-info">
        <h2>Student Information</h2>
        <p><strong>Phone Number:</strong> +254 ${phone}</p>
        <p><strong>Course Level Checked:</strong> ${levelNames[selectedLevel]}</p>
        <p><strong>Subjects Entered:</strong> ${enteredSubjects}</p>
        <p><strong>Total Points:</strong> ${totalPoints}</p>
        <p><strong>Best Cluster Weight:</strong> ${bestCluster}</p>
      </div>
      
      <div class="warning">
        <strong>⚠️ IMPORTANT NOTE:</strong>
        <p>These results are based on 2024 cutoff points. Actual ${new Date().getFullYear()} cutoff points may vary.</p>
        <p>Always verify with official KUCCPS portal before making final decisions.</p>
      </div>
      
      <h2>Course Qualification Results</h2>
      <p>Total Courses Found: ${results.length}</p>
      
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Institution(s)</th>
            ${selectedLevel === 'degree' ? '<th>Cutoff (2024)</th><th>Your Score</th>' : '<th>Level</th>'}
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      
      <div class="footer">
        <p>KUCCPS Course Qualification Checker - Kenya</p>
        <p>Document generated on: ${new Date().toLocaleString()}</p>
        <p>© ${new Date().getFullYear()} KUCCPS Course Checker</p>
      </div>
    </body>
    </html>
  `;
}
