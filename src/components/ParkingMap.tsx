import React from 'react';
import { useParkingStore } from '../stores/parkingStore';
import { VehicleType } from '../types/parking';

export const ParkingMap: React.FC = () => {
  const { slots } = useParkingStore();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`
            p-4 rounded-lg border-2 
            ${slot.isOccupied ? 'bg-red-100 border-red-500' : 'bg-green-100 border-green-500'}
          `}
        >
          <p className="font-bold">Slot {slot.number}</p>
          <p>Floor: {slot.floor}</p>
          <p>Type: {slot.vehicleType}</p>
          <p>{slot.isOccupied ? 'Occupied' : 'Available'}</p>
        </div>
      ))}
    </div>
  );
};