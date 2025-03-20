import React from 'react';
import { useParkingStore } from '../../stores/parkingStore';

export const ParkingStats: React.FC = () => {
  const { parkingSpots, bookings } = useParkingStore();
  
  const stats = {
    totalSpots: parkingSpots.length,
    availableSpots: parkingSpots.filter(spot => spot.status === 'available').length,
    activeBookings: bookings.filter(booking => booking.status === 'active').length,
    occupancyRate: Math.round((parkingSpots.filter(spot => spot.status === 'occupied').length / parkingSpots.length) * 100)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        title="Total Spots"
        value={stats.totalSpots}
        description="Total parking capacity"
      />
      <StatCard
        title="Available Spots"
        value={stats.availableSpots}
        description="Ready for parking"
        className="text-green-600"
      />
      <StatCard
        title="Active Bookings"
        value={stats.activeBookings}
        description="Current bookings"
        className="text-blue-600"
      />
      <StatCard
        title="Occupancy Rate"
        value={`${stats.occupancyRate}%`}
        description="Current utilization"
        className="text-purple-600"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, className }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className={`mt-2 text-3xl font-semibold ${className}`}>{value}</p>
    <p className="mt-1 text-sm text-gray-600">{description}</p>
  </div>
);