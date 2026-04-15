'use client';

import { Settings, Bell, Lock, User, LogOut, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function SettingsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Settings</h1>
        </div>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Account Settings */}
      <div className="glass-card p-4 sm:p-6 glow-sm space-y-6">
        <div className="flex items-center gap-3 pb-6 border-b border-primary/20">
          <User className="w-5 h-5 text-primary shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Account Information</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
            <Input placeholder="user@example.com" className="bg-card/40 border-primary/20" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
            <Input placeholder="Full Name" className="bg-card/40 border-primary/20" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Organization</label>
            <Input placeholder="Your Organization" className="bg-card/40 border-primary/20" />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Role</label>
            <Input placeholder="Administrator" className="bg-card/40 border-primary/20" />
          </div>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-background w-full sm:w-auto">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Security Settings */}
      <div className="glass-card p-4 sm:p-6 glow-sm space-y-6">
        <div className="flex items-center gap-3 pb-6 border-b border-primary/20">
          <Lock className="w-5 h-5 text-primary shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Security</h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-card/40 border border-primary/20 rounded-lg">
            <div>
              <p className="text-sm font-medium text-white">Password</p>
              <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
            </div>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
              Change Password
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-card/40 border border-primary/20 rounded-lg">
            <div>
              <p className="text-sm font-medium text-white">Two-Factor Authentication</p>
              <p className="text-xs text-muted-foreground">Not enabled</p>
            </div>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
              Enable 2FA
            </Button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glass-card p-4 sm:p-6 glow-sm space-y-6">
        <div className="flex items-center gap-3 pb-6 border-b border-primary/20">
          <Bell className="w-5 h-5 text-primary shrink-0" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Notifications</h2>
        </div>

        <div className="space-y-4">
          {['Email alerts', 'Credit warnings', 'Usage reports', 'System updates'].map((item) => (
            <label key={item} className="flex items-center gap-3 p-3 hover:bg-primary/5 rounded-lg cursor-pointer transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-primary/40" defaultChecked />
              <span className="text-sm text-foreground">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card p-4 sm:p-6 glow-sm border-red-500/20 space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-red-400">Danger Zone</h2>
        <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
          <LogOut className="w-4 h-4 mr-2" />
          Logout All Devices
        </Button>
      </div>
    </div>
  );
}
