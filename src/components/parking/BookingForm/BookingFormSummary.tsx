import React from 'react';
import { Vehicle } from '../../../types/parking';

interface BookingFormSummaryProps {
  selectedVehicle?: Vehicle;
  price: number;
}

export const BookingFormSummary: React.FC<BookingFormSummaryProps> = ({
  selectedVehicle,
  price
}) => {
  if (!selectedVehicle) return null;

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-medium text-gray-900">Booking Summary</h3>
      <div className="mt-2 space-y-2">
        <p className="text-sm text-gray-600">
          Vehicle: {selectedVehicle.model} ({selectedVehicle.number})
        </p>
        <p className="text-sm font-medium text-gray-900">
          Total Price: ₹{price}
        </p>
      </div>
    </div>
  );
};