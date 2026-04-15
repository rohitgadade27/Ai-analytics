'use client';

import { Bell, Menu, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeaderProps {
  onMenuClick: () => void;
  onNotificationClick?: () => void;
}

export function Header({ onMenuClick, onNotificationClick }: HeaderProps) {
  return (
    <header className="glass-card border-b border-primary/20 px-3 xs:px-4 sm:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 shrink-0 w-full h-auto min-h-14 sm:min-h-16">
      {/* Left side - Menu and Search */}
      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 flex-1 min-w-0">
        <Button
          variant="outline"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden bg-card/40 border-primary/20 hover:bg-card/60 shrink-0 h-9 w-9 xs:h-10 xs:w-10"
        >
          <Menu className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        </Button>

        {/* Search Bar - Hidden on mobile, visible on md+ */}
        <div className="hidden md:flex items-center flex-1 max-w-md min-w-0">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground shrink-0" />
            <Input
              placeholder="Search metrics..."
              className="pl-10 pr-3 bg-card/40 border-primary/20 focus:border-primary/50 focus:ring-primary/50 text-xs sm:text-sm w-full"
            />
          </div>
        </div>
      </div>

      {/* Right side - Notifications and Profile */}
      <div className="flex items-center gap-1 xs:gap-2 sm:gap-4 shrink-0">
        <Button
          variant="outline"
          size="icon"
          onClick={onNotificationClick}
          className="bg-card/40 border-primary/20 hover:bg-card/60 relative shrink-0 h-9 w-9 xs:h-10 xs:w-10"
        >
          <Bell className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          <span className="absolute top-0.5 right-0.5 xs:top-1 xs:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse-glow" />
        </Button>

        {/* Profile Avatar */}
        <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border border-primary/40 flex items-center justify-center cursor-pointer hover:border-primary/60 transition-colors glow-sm shrink-0">
          <span className="text-xs xs:text-xs sm:text-sm font-semibold text-primary">U</span>
        </div>
      </div>
    </header>
  );
}
