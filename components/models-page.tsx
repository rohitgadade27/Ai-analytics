'use client';

import { TrendingUp, Package, Zap, Clock } from 'lucide-react';
import { Button } from './ui/button';

const models = [
  {
    name: 'GPT-4',
    status: 'active',
    requests: '24,530',
    latency: '142ms',
    accuracy: '98.5%',
    version: '1.0',
  },
  {
    name: 'Claude 3',
    status: 'active',
    requests: '18,420',
    latency: '158ms',
    accuracy: '97.2%',
    version: '1.2',
  },
  {
    name: 'Custom Model',
    status: 'active',
    requests: '8,750',
    latency: '98ms',
    accuracy: '96.8%',
    version: '2.0',
  },
  {
    name: 'Legacy Model',
    status: 'inactive',
    requests: '2,100',
    latency: '245ms',
    accuracy: '94.1%',
    version: '0.8',
  },
];

export function ModelsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white">AI Models</h1>
        </div>
        <p className="text-muted-foreground">Manage and monitor your AI models</p>
      </div>

      {/* Deploy Button */}
      <div className="flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-background">
          <Zap className="w-4 h-4 mr-2" />
          Deploy New Model
        </Button>
      </div>

      {/* Models Grid */}
      <div className="space-y-4">
        {models.map((model) => (
          <div key={model.name} className="glass-card p-4 sm:p-6 glow-sm hover:border-primary/40 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Model Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{model.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    model.status === 'active' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-slate-500/20 text-slate-400'
                  }`}>
                    {model.status}
                  </span>
                  <span className="text-xs text-muted-foreground">v{model.version}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 flex-1">
                <div className="text-center p-2 sm:p-3 bg-card/40 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Requests</p>
                  <p className="text-sm sm:text-base font-bold text-white">{model.requests}</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-card/40 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Latency</p>
                  <p className="text-sm sm:text-base font-bold text-primary">{model.latency}</p>
                </div>
                <div className="text-center p-2 sm:p-3 bg-card/40 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                  <p className="text-sm sm:text-base font-bold text-emerald-400">{model.accuracy}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 sm:gap-3 justify-end">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-xs sm:text-sm">
                  Monitor
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-xs sm:text-sm">
                  Config
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-primary shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Performance Summary</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-3 sm:p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Avg Latency</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">135ms</p>
          </div>
          <div className="p-3 sm:p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Avg Accuracy</p>
            <p className="text-xl sm:text-2xl font-bold text-emerald-400">96.6%</p>
          </div>
          <div className="p-3 sm:p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Total Requests</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-400">53.8K</p>
          </div>
          <div className="p-3 sm:p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">Active Models</p>
            <p className="text-xl sm:text-2xl font-bold text-amber-400">3/4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
