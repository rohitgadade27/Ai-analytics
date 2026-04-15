'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Zap, TrendingUp, Clock, AlertCircle } from 'lucide-react';

const usageData = [
  { time: '12 AM', gpt4: 450, claude: 280, custom: 120 },
  { time: '2 AM', gpt4: 320, claude: 200, custom: 80 },
  { time: '4 AM', gpt4: 280, claude: 150, custom: 60 },
  { time: '6 AM', gpt4: 680, claude: 420, custom: 200 },
  { time: '8 AM', gpt4: 890, claude: 560, custom: 280 },
  { time: '10 AM', gpt4: 1200, claude: 780, custom: 420 },
  { time: '12 PM', gpt4: 1450, claude: 920, custom: 580 },
  { time: '2 PM', gpt4: 1100, claude: 680, custom: 360 },
  { time: '4 PM', gpt4: 950, claude: 620, custom: 300 },
  { time: '6 PM', gpt4: 1300, claude: 840, custom: 450 },
  { time: '8 PM', gpt4: 1050, claude: 680, custom: 320 },
  { time: '10 PM', gpt4: 750, claude: 480, custom: 200 },
];

const requestStats = [
  { model: 'GPT-4', requests: 12450, tokens: 450000, avgLatency: '245ms' },
  { model: 'Claude', requests: 8320, tokens: 280000, avgLatency: '320ms' },
  { model: 'Custom', requests: 3200, tokens: 90000, avgLatency: '180ms' },
];

export function UsagePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">API Usage</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Real-time monitoring of your API requests and token consumption</p>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="glass-card p-5 sm:p-6 glow-sm">
          <Zap className="w-5 h-5 text-primary mb-2" />
          <p className="text-muted-foreground text-xs sm:text-sm mb-1">Total Requests</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">23,970</p>
          <p className="text-xs text-emerald-400 mt-2">↑ 12% today</p>
        </div>
        <div className="glass-card p-5 sm:p-6 glow-sm">
          <TrendingUp className="w-5 h-5 text-cyan-400 mb-2" />
          <p className="text-muted-foreground text-xs sm:text-sm mb-1">Tokens Used</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">820K</p>
          <p className="text-xs text-muted-foreground mt-2">/ 10M monthly</p>
        </div>
        <div className="glass-card p-5 sm:p-6 glow-sm">
          <Clock className="w-5 h-5 text-blue-400 mb-2" />
          <p className="text-muted-foreground text-xs sm:text-sm mb-1">Avg Latency</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">248ms</p>
          <p className="text-xs text-emerald-400 mt-2">↓ 5% vs yesterday</p>
        </div>
        <div className="glass-card p-5 sm:p-6 glow-sm">
          <AlertCircle className="w-5 h-5 text-amber-400 mb-2" />
          <p className="text-muted-foreground text-xs sm:text-sm mb-1">Error Rate</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">0.12%</p>
          <p className="text-xs text-emerald-400 mt-2">Within limits</p>
        </div>
      </div>

      {/* Usage Trends Chart */}
      <div className="glass-card p-6 glow-sm">
        <h3 className="text-xl font-bold text-white mb-4">Requests Over Time (24h)</h3>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={usageData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
              <XAxis dataKey="time" stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a2332', border: '1px solid #1e3a4c' }} />
              <Legend wrapperStyle={{ color: '#94a3b8' }} />
              <Line type="monotone" dataKey="gpt4" stroke="#00d9ff" strokeWidth={2} name="GPT-4" />
              <Line type="monotone" dataKey="claude" stroke="#06b6d4" strokeWidth={2} name="Claude" />
              <Line type="monotone" dataKey="custom" stroke="#0891b2" strokeWidth={2} name="Custom" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Model Statistics */}
      <div className="glass-card p-6 glow-sm">
        <h3 className="text-xl font-bold text-white mb-4">Model Statistics</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-muted-foreground border-b border-primary/20">
              <tr>
                <th className="text-left py-3 px-4">Model</th>
                <th className="text-left py-3 px-4">Requests</th>
                <th className="text-left py-3 px-4">Tokens</th>
                <th className="text-left py-3 px-4">Avg Latency</th>
              </tr>
            </thead>
            <tbody>
              {requestStats.map((stat) => (
                <tr key={stat.model} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                  <td className="text-white py-3 px-4">{stat.model}</td>
                  <td className="text-cyan-400 text-sm py-3 px-4">{stat.requests.toLocaleString()}</td>
                  <td className="text-cyan-400 text-sm py-3 px-4">{(stat.tokens / 1000).toFixed(0)}K</td>
                  <td className="text-cyan-400 text-xs sm:text-sm py-3 px-4">{stat.avgLatency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
