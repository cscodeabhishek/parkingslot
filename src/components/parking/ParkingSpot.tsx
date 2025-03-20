import React from 'react';
import { ParkingSlot } from '../../types/parking';
import { cn } from '../../utils/cn';

interface ParkingSpotProps {
  spot: ParkingSlot;
}

export const ParkingSpot: React.FC<ParkingSpotProps> = ({ spot }) => {
  const statusClasses = {
    available: 'bg-green-100 border-green-500 hover:bg-green-200',
    occupied: 'bg-red-100 border-red-500',
    reserved: 'bg-yellow-100 border-yellow-500',
    charging: 'bg-blue-100 border-blue-500',
  };

  return (
    <div
      className={cn(
        'p-4 rounded-lg border-2 transition-colors cursor-pointer',
        statusClasses[spot.status],
        'flex flex-col items-center justify-center text-center'
      )}
    >
      <span className="font-bold">{spot.number}</span>
      <span className="text-sm capitalize">{spot.vehicleType}</span>
      {spot.isCharging && (
        <span className="text-xs text-blue-600 mt-1">⚡ Charging</span>
      )}
    </div>
  );
};