import React from 'react';
import { EVStation } from '../../types/ev';
import { BoltIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface EVStationListProps {
  stations: EVStation[];
}

export const EVStationList: React.FC<EVStationListProps> = ({ stations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stations.map((station) => (
        <div key={station.id} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{station.name}</h3>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{station.location}</span>
              </div>
            </div>
            <div className={`${
              station.status === 'available' ? 'text-green-600' : 'text-red-600'
            }`}>
              <BoltIcon className="h-6 w-6" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Power Output</span>
              <span className="font-medium">{station.powerOutput} kW</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Connector Type</span>
              <span className="font-medium">{station.connectorType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Price</span>
              <span className="font-medium">₹{station.pricePerKwh}/kWh</span>
            </div>
          </div>

          <Button
            className="w-full mt-4"
            disabled={station.status !== 'available'}
          >
            {station.status === 'available' ? 'Reserve Station' : 'Currently In Use'}
          </Button>
        </div>
      ))}
    </div>
  );
};