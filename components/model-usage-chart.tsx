'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const chartData = [
  { time: '00:00', gpt4: 2400, claude: 1400, custom: 800 },
  { time: '04:00', gpt4: 3200, claude: 1900, custom: 1200 },
  { time: '08:00', gpt4: 2800, claude: 2200, custom: 1400 },
  { time: '12:00', gpt4: 4200, claude: 2800, custom: 1800 },
  { time: '16:00', gpt4: 3800, claude: 3200, custom: 2200 },
  { time: '20:00', gpt4: 4800, claude: 3600, custom: 2600 },
  { time: '24:00', gpt4: 5200, claude: 4100, custom: 3000 },
];

export function ModelUsageChart() {
  return (
    <div className="glass-card p-3 xs:p-4 sm:p-6 glow-sm w-full">
      <div className="mb-3 xs:mb-4 sm:mb-6">
        <h2 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1">Model Usage Over Time</h2>
        <p className="text-muted-foreground text-xs">API requests by model in the last 24 hours</p>
      </div>

      <div className="w-full overflow-x-auto" style={{ height: 'auto', minHeight: '250px', maxHeight: '350px' }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a4c" />
            <XAxis dataKey="time" stroke="#94a3b8" style={{ fontSize: '12px' }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a2332',
                border: '1px solid #1e3a4c',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 217, 255, 0.2)',
              }}
              labelStyle={{ color: '#e5e7eb' }}
              cursor={{ stroke: '#00d9ff', strokeWidth: 2 }}
            />
            <Legend wrapperStyle={{ color: '#94a3b8', paddingTop: '15px' }} />
            <Line
              type="monotone"
              dataKey="gpt4"
              stroke="#00d9ff"
              strokeWidth={2.5}
              dot={{ fill: '#00d9ff', r: 3 }}
              activeDot={{ r: 5, fill: '#00d9ff' }}
              name="GPT-4"
              isAnimationActive={true}
            />
            <Line
              type="monotone"
              dataKey="claude"
              stroke="#06b6d4"
              strokeWidth={2.5}
              dot={{ fill: '#06b6d4', r: 3 }}
              activeDot={{ r: 5, fill: '#06b6d4' }}
              name="Claude"
              isAnimationActive={true}
            />
            <Line
              type="monotone"
              dataKey="custom"
              stroke="#0891b2"
              strokeWidth={2.5}
              dot={{ fill: '#0891b2', r: 3 }}
              activeDot={{ r: 5, fill: '#0891b2' }}
              name="Custom Model"
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
