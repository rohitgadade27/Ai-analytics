'use client';

import {
  BarChart3,
  Zap,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  TrendingUp,
  CreditCard,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: (page: 'dashboard' | 'analytics' | 'ai-analytics' | 'models' | 'settings' | 'usage' | 'billing' | 'notifications' | 'help' | 'logout') => void;
  currentPage?: 'dashboard' | 'analytics' | 'ai-analytics' | 'models' | 'settings' | 'usage' | 'billing' | 'notifications' | 'help' | 'logout';
}

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Sparkles, label: 'AI Analytics', id: 'ai-analytics' },
  { icon: TrendingUp, label: 'Models', id: 'models' },
  { icon: Zap, label: 'Usage', id: 'usage' },
  { icon: CreditCard, label: 'Billing', id: 'billing' },
] as const;

const bottomItems = [
  { icon: HelpCircle, label: 'Help', id: 'help' },
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: LogOut, label: 'Logout', id: 'logout' },
] as const;

export function Sidebar({ isOpen, onToggle, onNavigate, currentPage }: SidebarProps) {
  const handleNavClick = (id: string) => {
    const validIds = ['dashboard', 'analytics', 'ai-analytics', 'models', 'settings', 'usage', 'billing', 'notifications', 'help', 'logout'];
    if (validIds.includes(id)) {
      onNavigate?.(id as any);
      // Close sidebar on mobile after navigation
      if (window.innerWidth < 768) {
        onToggle();
      }
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`glass-card fixed md:relative h-dvh md:h-screen w-56 sm:w-64 p-3 xs:p-4 sm:p-6 border-r border-primary/20 flex flex-col transition-all duration-300 z-50 md:z-auto shrink-0 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="mb-8 sm:mb-12 flex items-center gap-2 sm:gap-3 shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('dashboard')}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center glow-sm shrink-0">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-white truncate">AI Analytics</span>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-1 sm:space-y-2 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id as any)}
                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 group text-sm sm:text-base text-left ${
                  isActive
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors shrink-0 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="space-y-1 sm:space-y-2 pt-3 sm:pt-4 border-t border-primary/20 shrink-0">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-200 group text-sm sm:text-base text-left ${
                  isActive
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors shrink-0 ${isActive ? 'text-primary' : 'group-hover:text-primary'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onToggle}
        />
      )}
    </>
  );
}
