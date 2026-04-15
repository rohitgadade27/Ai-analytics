'use client';

import { Activity, AlertCircle, CheckCircle, Zap } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'success',
    title: 'Model deployed',
    description: 'GPT-4 model v2.1 deployed',
    time: '2 hours ago',
    icon: CheckCircle,
  },
  {
    id: 2,
    type: 'warning',
    title: 'High memory usage',
    description: 'Memory usage at 85% capacity',
    time: '5 hours ago',
    icon: AlertCircle,
  },
  {
    id: 3,
    type: 'info',
    title: 'API rate limit',
    description: 'Approaching monthly rate limit',
    time: '8 hours ago',
    icon: Zap,
  },
  {
    id: 4,
    type: 'success',
    title: 'Backup completed',
    description: 'Daily backup finished successfully',
    time: '1 day ago',
    icon: CheckCircle,
  },
];

export function ActivityFeed() {
  return (
    <div className="glass-card p-3 xs:p-4 sm:p-6 glow-sm h-full flex flex-col w-full">
      <div className="mb-3 xs:mb-4 sm:mb-6 flex items-center gap-2 shrink-0 min-w-0">
        <Activity className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
        <h2 className="text-sm xs:text-base sm:text-lg font-bold text-white truncate">Recent Activity</h2>
      </div>

      <div className="space-y-2 xs:space-y-3 sm:space-y-4 overflow-y-auto flex-1 w-full">
        {activities.map((activity) => {
          const Icon = activity.icon;
          const typeColors = {
            success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
            warning: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
            info: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          };

          return (
            <div key={activity.id} className="flex gap-2 xs:gap-2 sm:gap-3 pb-2 xs:pb-3 sm:pb-4 border-b border-primary/10 last:border-0 hover:bg-primary/5 rounded p-1 xs:p-2 transition-colors">
              <div
                className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 ${
                  typeColors[activity.type as keyof typeof typeColors]
                }`}
              >
                <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs xs:text-xs sm:text-sm font-semibold text-white truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-0.5 xs:mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
