import React, { useState } from 'react';
import { useParkingStore } from '../stores/parkingStore';
import { VehicleType, BookingStatus } from '../types/parking';

export const BookingForm: React.FC = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleType, setVehicleType] = useState<VehicleType>(VehicleType.CAR);
  const { getAvailableSlots, addBooking } = useParkingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const availableSlots = getAvailableSlots(vehicleType);
    if (availableSlots.length === 0) {
      alert('No available slots for this vehicle type');
      return;
    }

    const booking = {
      id: crypto.randomUUID(),
      slotId: availableSlots[0].id,
      userId: 'user-1', // In a real app, this would come from auth
      vehicleNumber,
      startTime: new Date(),
      endTime: new Date(Date.now() + 3600000), // 1 hour booking
      status: BookingStatus.ACTIVE
    };

    addBooking(booking);
    setVehicleNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vehicle Number
        </label>
        <input
          type="text"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vehicle Type
        </label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value as VehicleType)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {Object.values(VehicleType).map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Book Parking Slot
      </button>
    </form>
  );
};