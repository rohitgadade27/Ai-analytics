'use client';

import { useState, useEffect } from 'react';
import { Dashboard } from '@/components/dashboard';
import { LoginPage } from '@/components/login-page';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if user is already logged in
    const stored = typeof window !== 'undefined' ? localStorage.getItem('auth') : null;
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-background" />
    );
  }

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}
