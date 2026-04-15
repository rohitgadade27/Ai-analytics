'use client';

import { CreditCard, TrendingUp } from 'lucide-react';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { formatINR, convertToINR } from '@/lib/currency';

export function CreditUsageBar() {
  const usedCredits = 7250;
  const totalCredits = 10000;
  const percentageUsed = (usedCredits / totalCredits) * 100;
  const remainingCredits = totalCredits - usedCredits;
  const urgency = percentageUsed > 80 ? 'high' : percentageUsed > 60 ? 'medium' : 'low';
  
  // Calculate cost: ~₹0.167 per 1M tokens (based on $0.002 per 1M)
  const costPerToken = 0.000000167;
  const estimatedSpent = Math.round(usedCredits * costPerToken);
  const estimatedRemaining = Math.round(remainingCredits * costPerToken);

  return (
    <div className="glass-card p-3 xs:p-4 sm:p-6 glow-sm h-full flex flex-col w-full">
      <div className="flex items-center gap-2 xs:gap-2 sm:gap-3 mb-3 xs:mb-4 sm:mb-6 shrink-0 min-w-0">
        <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
          <CreditCard className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm xs:text-base sm:text-lg font-bold text-white truncate">Credit Usage</h2>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3 xs:mb-4 sm:mb-6 shrink-0">
        <div className="flex justify-between items-center mb-2 gap-2">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="text-xs xs:text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">{percentageUsed.toFixed(1)}%</span>
        </div>
        <div className="relative h-2 bg-card/60 border border-primary/20 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r transition-all duration-700 ${
              urgency === 'high' 
                ? 'from-red-500 via-red-400 to-orange-400' 
                : urgency === 'medium'
                ? 'from-amber-400 via-amber-400 to-orange-400'
                : 'from-primary via-primary to-emerald-400'
            }`}
            style={{ width: `${percentageUsed}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2 xs:gap-2 sm:gap-3 mb-3 xs:mb-4 sm:mb-6 flex-1 w-full">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-2 xs:p-2 sm:p-3 min-h-fit flex flex-col justify-center">
          <p className="text-xs text-muted-foreground mb-1">Spent</p>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-primary line-clamp-1 break-words">{formatINR(estimatedSpent)}</p>
          <p className="text-xs text-muted-foreground">{usedCredits.toLocaleString()} tokens</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2 xs:p-2 sm:p-3 min-h-fit flex flex-col justify-center">
          <p className="text-xs text-muted-foreground mb-1">Available</p>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-emerald-400 line-clamp-1 break-words">{formatINR(estimatedRemaining)}</p>
          <p className="text-xs text-muted-foreground">{remainingCredits.toLocaleString()} tokens</p>
        </div>
      </div>

      {/* Button */}
      <Button className="w-full bg-primary hover:bg-primary/90 text-background border-0 font-semibold text-xs xs:text-sm sm:text-base py-2 transition-all duration-200 flex items-center justify-center gap-2">
        <TrendingUp className="w-3 h-3 xs:w-4 xs:h-4 shrink-0" />
        <span className="truncate">Add Credits</span>
      </Button>
    </div>
  );
}
