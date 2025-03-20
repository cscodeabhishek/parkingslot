import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <div className="w-64 bg-white h-screen shadow">
          <Navigation />
        </div>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};