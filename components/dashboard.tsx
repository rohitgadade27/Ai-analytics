'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { KPICards } from './kpi-cards';
import { ModelUsageChart } from './model-usage-chart';
import { ActivityFeed } from './activity-feed';
import { CreditUsageBar } from './credit-usage-bar';
import { SettingsPage } from './settings-page';
import { ModelsPage } from './models-page';
import { AnalyticsPage } from './analytics-page';
import { UsagePage } from './usage-page';
import { BillingPage } from './billing-page';
import { NotificationsPage } from './notifications-page';
import { HelpPage } from './help-page';
import { AIAnalyticsPage } from './ai-analytics-page';

interface DashboardProps {
  onLogout?: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'analytics' | 'ai-analytics' | 'models' | 'settings' | 'usage' | 'billing' | 'notifications' | 'help' | 'logout'>('dashboard');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle logout navigation
  useEffect(() => {
    if (currentPage === 'logout' && onLogout) {
      const timer = setTimeout(() => {
        onLogout();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, onLogout]);

  const renderPage = (): ReactNode => {
    switch (currentPage) {
      case 'analytics':
        return <AnalyticsPage />;
      case 'ai-analytics':
        return <AIAnalyticsPage />;
      case 'models':
        return <ModelsPage />;
      case 'settings':
        return <SettingsPage />;
      case 'usage':
        return <UsagePage />;
      case 'billing':
        return <BillingPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'help':
        return <HelpPage />;
      case 'logout':
        return (
          <div className="flex items-center justify-center h-96">
            <div className="glass-card p-8 rounded-lg text-center max-w-md">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Logging Out</h1>
              <p className="text-muted-foreground mb-2">You have been successfully logged out.</p>
              <p className="text-sm text-muted-foreground">Redirecting to login...</p>
              <div className="mt-6 flex justify-center">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6 sm:space-y-8">
            {/* Welcome Section */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Analytics Dashboard</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Track your AI model usage, credits, and performance metrics</p>
            </div>

            {/* KPI Cards Grid */}
            <KPICards />

            {/* Charts and activity section */}
            <div className="space-y-6 sm:space-y-8">
              <ModelUsageChart />
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                <CreditUsageBar />
                <ActivityFeed />
              </div>
            </div>
          </div>
        );
    }
  };

  if (!isClient) {
    return (
      <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
        <div className="w-64 hidden md:flex" />
        <div className="flex-1 flex flex-col">
          <div className="h-16 glass-card border-b border-primary/20" />
          <div className="flex-1" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen max-w-full bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Scrollable Content */}
        <div className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden">
          <div className="p-3 xs:p-4 sm:p-6 lg:p-8 min-h-full">
            <div className="max-w-7xl mx-auto w-full">
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
