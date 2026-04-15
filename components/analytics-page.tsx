'use client';

import { BarChart3, Calendar, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { ModelUsageChart } from './model-usage-chart';

const metrics = [
  { label: 'Total Requests', value: '145.2K', change: '+12.5%' },
  { label: 'Avg Response Time', value: '142ms', change: '-8.2%' },
  { label: 'Success Rate', value: '99.8%', change: '+0.3%' },
  { label: 'Unique Users', value: '2,847', change: '+15.1%' },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Analytics</h1>
        </div>
        <p className="text-muted-foreground">Detailed insights and performance metrics</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button variant="outline" className="border-primary/20 hover:bg-primary/10 gap-2 text-xs sm:text-sm">
          <Calendar className="w-4 h-4" />
          Last 7 Days
        </Button>
        <Button variant="outline" className="border-primary/20 hover:bg-primary/10 gap-2 text-xs sm:text-sm">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass-card p-4 sm:p-6 glow-sm">
            <p className="text-muted-foreground text-xs sm:text-sm mb-2">{metric.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-2xl sm:text-3xl font-bold text-white">{metric.value}</p>
              <p className="text-emerald-400 text-xs sm:text-sm font-semibold">{metric.change}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <ModelUsageChart />
        
        {/* Error Rate Chart */}
        <div className="glass-card p-4 sm:p-6 glow-sm">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1">Error Rate Trend</h2>
            <p className="text-muted-foreground text-xs sm:text-sm">Errors per 1000 requests</p>
          </div>

          <div className="space-y-4">
            {[
              { name: 'GPT-4', rate: 0.2, color: 'from-primary to-primary' },
              { name: 'Claude', rate: 0.35, color: 'from-cyan-500 to-cyan-500' },
              { name: 'Custom', rate: 0.5, color: 'from-blue-500 to-blue-500' },
            ].map((model) => (
              <div key={model.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-foreground">{model.name}</span>
                  <span className="text-xs text-muted-foreground">{model.rate}%</span>
                </div>
                <div className="h-2 bg-card/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${model.color}`}
                    style={{ width: `${model.rate * 20}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Endpoints */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-6">Top API Endpoints</h2>
        <div className="space-y-3">
          {[
            { endpoint: '/api/generate', requests: '45.2K', latency: '156ms' },
            { endpoint: '/api/complete', requests: '38.1K', latency: '142ms' },
            { endpoint: '/api/analyze', requests: '28.9K', latency: '198ms' },
            { endpoint: '/api/translate', requests: '18.7K', latency: '124ms' },
          ].map((item) => (
            <div key={item.endpoint} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-card/40 rounded-lg hover:bg-card/60 transition-colors">
              <span className="text-xs sm:text-sm font-medium text-foreground break-all">{item.endpoint}</span>
              <div className="flex gap-4 sm:justify-end">
                <span className="text-xs sm:text-sm text-muted-foreground">{item.requests}</span>
                <span className="text-xs sm:text-sm text-primary font-semibold">{item.latency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
