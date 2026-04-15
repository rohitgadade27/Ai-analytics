'use client';

import { Bell, Mail, Smartphone, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const notificationPreferences = [
  { id: '1', title: 'Usage Alerts', description: 'Get notified when you reach 80% usage', enabled: true },
  { id: '2', title: 'Billing Reminders', description: 'Reminders for upcoming billing dates', enabled: true },
  { id: '3', title: 'System Status', description: 'Updates about API status and maintenance', enabled: true },
  { id: '4', title: 'New Features', description: 'Announcements about new features and updates', enabled: false },
  { id: '5', title: 'Security Alerts', description: 'Important security and account notifications', enabled: true },
  { id: '6', title: 'Weekly Reports', description: 'Weekly usage and performance reports', enabled: false },
];

const recentNotifications = [
  { id: '1', type: 'info', title: 'API Update', message: 'New models available in your account', time: '2 hours ago' },
  { id: '2', type: 'success', title: 'Upgrade Complete', message: 'Your plan has been successfully upgraded', time: '1 day ago' },
  { id: '3', type: 'warning', title: 'Usage Alert', message: 'You have reached 75% of your monthly quota', time: '3 days ago' },
  { id: '4', type: 'info', title: 'Maintenance Scheduled', message: 'Scheduled maintenance on April 15 from 2-4 AM UTC', time: '5 days ago' },
  { id: '5', type: 'success', title: 'Payment Processed', message: 'Monthly subscription charge of $149.00 processed', time: '1 week ago' },
];

export function NotificationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Notifications</h1>
        <p className="text-muted-foreground text-sm sm:text-base">Manage your notification preferences and view recent alerts</p>
      </div>

      {/* Notification Preferences */}
      <div className="glass-card p-4 sm:p-6 glow-sm space-y-4">
        <h3 className="text-xl font-bold text-white mb-6">Notification Preferences</h3>
        {notificationPreferences.map((pref) => (
          <div key={pref.id} className="flex items-center justify-between gap-3 p-4 border border-primary/10 rounded-lg hover:bg-primary/5 transition-colors">
            <div className="flex-1">
              <p className="font-semibold text-white text-sm sm:text-base">{pref.title}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">{pref.description}</p>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${
                pref.enabled ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => {}}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  pref.enabled ? 'translate-x-5' : 'translate-x-1'
                } mt-0.5`}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Notification Channels */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <h3 className="text-xl font-bold text-white mb-4">Notification Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-primary/20 rounded-lg">
            <Mail className="w-5 h-5 text-primary mb-2" />
            <p className="font-semibold text-white text-sm mb-1">Email</p>
            <p className="text-muted-foreground text-xs mb-3">user@example.com</p>
            <Button variant="outline" size="sm">Verify</Button>
          </div>
          <div className="p-4 border border-primary/20 rounded-lg">
            <Smartphone className="w-5 h-5 text-cyan-400 mb-2" />
            <p className="font-semibold text-white text-sm mb-1">SMS</p>
            <p className="text-muted-foreground text-xs mb-3">+1 (555) 123-4567</p>
            <Button variant="outline" size="sm">Add</Button>
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="glass-card p-4 sm:p-6 glow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <h3 className="text-xl font-bold text-white">Recent Notifications</h3>
          <Button variant="outline" size="sm">Mark All as Read</Button>
        </div>
        <div className="space-y-3">
          {recentNotifications.map((notif) => {
            const iconClass = notif.type === 'success' ? 'text-emerald-400' : notif.type === 'warning' ? 'text-amber-400' : 'text-blue-400';
            const Icon = notif.type === 'success' ? CheckCircle : notif.type === 'warning' ? AlertCircle : Info;
            return (
              <div key={notif.id} className="p-4 border border-primary/10 rounded-lg hover:bg-primary/5 transition-colors flex gap-3">
                <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconClass}`} />
                <div className="flex-1">
                  <p className="font-semibold text-white text-sm">{notif.title}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{notif.message}</p>
                  <p className="text-muted-foreground text-xs mt-1">{notif.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
