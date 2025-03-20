import React from 'react';
import { useVehicleStore } from '../../stores/vehicleStore';
import { VehicleForm } from './VehicleForm';
import { VehicleList } from './VehicleList';
import { Button } from '../ui/Button';
import { PlusIcon } from '@heroicons/react/24/outline';

export const VehicleManagement: React.FC = () => {
  const [isAddingVehicle, setIsAddingVehicle] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Your Vehicles</h2>
        <Button
          onClick={() => setIsAddingVehicle(true)}
          className="flex items-center space-x-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Add Vehicle</span>
        </Button>
      </div>

      {isAddingVehicle && (
        <VehicleForm onClose={() => setIsAddingVehicle(false)} />
      )}

      <VehicleList />
    </div>
  );
};