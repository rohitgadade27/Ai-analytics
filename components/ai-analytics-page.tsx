'use client';

import { AIInsights } from './ai-insights';

export function AIAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">AI-Powered Analytics</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Get intelligent insights from ChatGPT, Claude, and Gemini</p>
      </div>

      <AIInsights />
    </div>
  );
}
