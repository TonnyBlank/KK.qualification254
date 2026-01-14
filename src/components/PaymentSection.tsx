import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CreditCard, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { levelNames, levelPrices } from "@/lib/courseData";

interface PaymentSectionProps {
  selectedLevel: string;
  subjectCount: number;
  hasRequiredSubjects: boolean;
  hasClusterWeights: boolean;
  hasClusterSelection?: boolean;
  onPaymentSuccess: () => void;
}

export function PaymentSection({
  selectedLevel,
  subjectCount,
  hasRequiredSubjects,
  hasClusterWeights,
  hasClusterSelection = true,
  onPaymentSuccess,
}: PaymentSectionProps) {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.slice(0, 9);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    setError("");
  };

  const isValid = () => {
    if (subjectCount < 7) return false;
    if (!selectedLevel) return false;
    if (phone.length !== 9) return false;
    if (!hasRequiredSubjects) return false;
    if (selectedLevel === 'degree' && !hasClusterSelection) return false;
    if (selectedLevel === 'degree' && !hasClusterWeights) return false;
    return true;
  };

  const getValidationMessage = () => {
    if (subjectCount < 7) return `Enter at least 7 subjects (${subjectCount}/7)`;
    if (!selectedLevel) return "Select a course level";
    if (!hasRequiredSubjects) return "English and Mathematics are required";
    if (selectedLevel === 'degree' && !hasClusterSelection) return "Select clusters to check or 'Check All'";
    if (selectedLevel === 'degree' && !hasClusterWeights) return "Enter cluster weights for degree courses";
    if (phone.length !== 9) return "Enter valid phone number";
    return null;
  };

  const handlePayment = async () => {
    if (!isValid()) return;

    setIsLoading(true);
    setError("");

    // Simulate M-Pesa payment
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    onPaymentSuccess();
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
        <CreditCard className="w-5 h-5" />
        Payment & Check Results
      </h2>

      {selectedLevel && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Selected Level</p>
              <p className="font-semibold text-foreground">{levelNames[selectedLevel]}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="font-bold text-xl text-primary">Ksh {levelPrices[selectedLevel]}</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            M-Pesa Phone Number
          </label>
          <div className="flex">
            <div className="flex items-center px-4 bg-muted border border-r-0 border-border rounded-l-lg text-muted-foreground font-medium">
              +254
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="7XX XXX XXX"
                className="pl-10 rounded-l-none h-12"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Enter your M-Pesa registered phone number
          </p>
        </div>

        {validationMessage && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4 text-accent" />
            {validationMessage}
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <Button
          onClick={handlePayment}
          disabled={!isValid() || isLoading}
          className="w-full h-14 text-lg font-semibold kenya-gradient hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing Payment...
            </>
          ) : (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Pay Ksh {selectedLevel ? levelPrices[selectedLevel] : 50} & Check Results
            </>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          You will receive an M-Pesa prompt on your phone. Enter your PIN to complete payment.
        </p>
      </div>
    </motion.div>
  );
}
