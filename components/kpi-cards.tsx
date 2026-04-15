'use client';

import { useEffect, useState } from 'react';
import { Zap, TrendingUp, Users, Clock } from 'lucide-react';

interface KPIData {
  label: string;
  value: number;
  icon: any;
  change: number;
  changeLabel: string;
  suffix?: string;
}

const kpiData: KPIData[] = [
  {
    label: 'Total Requests',
    value: 45280,
    icon: Zap,
    change: 12.5,
    changeLabel: 'vs last month',
    suffix: '',
  },
  {
    label: 'Active Users',
    value: 2847,
    icon: Users,
    change: 8.2,
    changeLabel: 'vs last week',
    suffix: '',
  },
  {
    label: 'Avg Response Time',
    value: 142,
    icon: Clock,
    change: -5.1,
    changeLabel: 'improvement',
    suffix: 'ms',
  },
  {
    label: 'Success Rate',
    value: 99.8,
    icon: TrendingUp,
    change: 0.3,
    changeLabel: 'vs last month',
    suffix: '%',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [target]);

  if (!hydrated) return <span>{target.toLocaleString()}{suffix}</span>;

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 w-full">
      {kpiData.map((kpi, idx) => {
        const Icon = kpi.icon;
        const colors = [
          { bg: 'from-primary/20 to-primary/5', border: 'primary' },
          { bg: 'from-cyan-500/20 to-cyan-500/5', border: 'cyan-500' },
          { bg: 'from-emerald-500/20 to-emerald-500/5', border: 'emerald-500' },
          { bg: 'from-blue-500/20 to-blue-500/5', border: 'blue-500' },
        ];
        const color = colors[idx];

        return (
          <div
            key={kpi.label}
            className={`glass-card p-3 xs:p-4 sm:p-5 lg:p-6 glow-sm hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 group w-full min-h-fit`}
            style={{
              background: `linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(15, 20, 25, 0.5) 100%)`,
            }}
          >
            {/* Header with Icon */}
            <div className="flex items-start justify-between gap-2 mb-3 xs:mb-4">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:border-primary/60 transition-colors shrink-0">
                <Icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
              </div>
              <div
                className={`text-xs xs:text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 ${
                  kpi.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {kpi.change >= 0 ? '↑' : '↓'} {Math.abs(kpi.change)}%
              </div>
            </div>

            {/* Label */}
            <p className="text-muted-foreground text-xs xs:text-xs sm:text-sm mb-2 line-clamp-2">{kpi.label}</p>

            {/* Value */}
            <div className="text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 line-clamp-1 break-words">
              <AnimatedCounter target={kpi.value} suffix={kpi.suffix} />
            </div>

            {/* Change Label */}
            <p className="text-xs text-muted-foreground line-clamp-1">{kpi.changeLabel}</p>
          </div>
        );
      })}
    </div>
  );
}
