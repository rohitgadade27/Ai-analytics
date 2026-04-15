'use client';

import { useState } from 'react';
import { Zap, Sparkles, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { AI_CONFIG, type AIModel } from '@/lib/ai-config';

interface InsightData {
  model: AIModel;
  insight: string;
  timestamp: string;
}

export function AIInsights() {
  const [selectedModel, setSelectedModel] = useState<AIModel>('chatgpt');
  const [query, setQuery] = useState('');
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [loading, setLoading] = useState(false);

  const generateInsight = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      // Simulated AI response - in production, call actual APIs
      const mockInsights: Record<AIModel, string> = {
        chatgpt: `Based on your API usage patterns, I recommend optimizing your GPT-4 calls. Your peak usage is between 2-4 PM IST. Consider implementing caching to reduce token consumption by 15-20%.`,
        claude: `Claude analysis shows your error rate is primarily from timeout issues. Implementing exponential backoff with max retries of 3 would improve reliability from 98.2% to 99.5%.`,
        gemini: `Gemini detected unusual spikes in your model usage on weekends. This suggests potential automated scripts. Review your webhook configurations and API key permissions.`,
      };

      const newInsight: InsightData = {
        model: selectedModel,
        insight: mockInsights[selectedModel],
        timestamp: new Date().toLocaleTimeString('en-IN'),
      };

      setInsights([newInsight, ...insights]);
      setQuery('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">AI-Powered Insights</h2>
        </div>
        <p className="text-muted-foreground">Get intelligent analysis powered by ChatGPT, Claude, and Gemini</p>
      </div>

      {/* Model Selection */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <h3 className="text-lg font-semibold text-white mb-4">Select AI Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {(Object.entries(AI_CONFIG) as [AIModel, any][]).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setSelectedModel(key)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedModel === key
                  ? 'border-primary bg-primary/10'
                  : 'border-primary/20 bg-card/40 hover:border-primary/40'
              }`}
            >
              <div className="text-left">
                <p className="font-semibold text-white">{config.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{config.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Query Input */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <h3 className="text-lg font-semibold text-white mb-4">Ask Questions About Your Data</h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="e.g., Why is my token usage high? How can I reduce costs? What are performance bottlenecks?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateInsight()}
            className="bg-card/40 border-primary/20"
          />
          <Button
            onClick={generateInsight}
            disabled={loading || !query.trim()}
            className="bg-primary hover:bg-primary/90 text-background w-full sm:w-auto"
          >
            {loading ? 'Analyzing...' : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Insights Display */}
      <div className="space-y-4">
        {insights.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <Zap className="w-12 h-12 text-primary/40 mx-auto mb-3" />
            <p className="text-muted-foreground">Ask a question to get AI-powered insights</p>
          </div>
        ) : (
          insights.map((insight, idx) => (
            <div key={idx} className="glass-card p-4 sm:p-6 glow-sm border-l-4 border-primary">
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-primary">{AI_CONFIG[insight.model].name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{insight.timestamp}</p>
                </div>
              </div>
              <p className="text-white leading-relaxed">{insight.insight}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
