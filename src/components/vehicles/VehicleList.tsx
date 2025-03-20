import React from 'react';
import { useVehicleStore } from '../../stores/vehicleStore';
import { format } from 'date-fns';
import { TrashIcon } from '@heroicons/react/24/outline';

export const VehicleList: React.FC = () => {
  const { vehicles, removeVehicle } = useVehicleStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{vehicle.number}</h3>
              <p className="text-gray-600">{vehicle.model}</p>
            </div>
            <button
              onClick={() => removeVehicle(vehicle.id)}
              className="text-red-600 hover:text-red-800"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm">
              <span className="font-medium">Type:</span>{' '}
              <span className="capitalize">{vehicle.type}</span>
            </p>
            <p className="text-sm">
              <span className="font-medium">Insurance Expires:</span>{' '}
              {format(vehicle.insuranceExpiry, 'PP')}
            </p>
            <p className="text-sm">
              <span className="font-medium">Registration Expires:</span>{' '}
              {format(vehicle.registrationExpiry, 'PP')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};