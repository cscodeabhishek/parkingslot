import React from 'react';
import { ParkingMap } from '../parking/ParkingMap';
import { ParkingStats } from './ParkingStats';
import { RecentBookings } from './RecentBookings';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <ParkingStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ParkingMap />
        </div>
        <div>
          <RecentBookings />
        </div>
      </div>
    </div>
  );
};