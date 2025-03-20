import React, { useState } from 'react';
import { useParkingStore } from '../../stores/parkingStore';
import { ParkingSpot } from './ParkingSpot';
import { SearchLocation } from './SearchLocation';
import { ParkingLegend } from './ParkingLegend';

export const ParkingMap: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const { parkingSpots } = useParkingStore();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Parking Map</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <SearchLocation />
            
            <div className="mt-4 flex space-x-2 overflow-x-auto">
              {[1, 2, 3].map((floor) => (
                <button
                  key={floor}
                  onClick={() => setSelectedFloor(floor)}
                  className={`px-4 py-2 rounded-md ${
                    selectedFloor === floor
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Floor {floor}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {parkingSpots
                .filter((spot) => spot.floor === selectedFloor)
                .map((spot) => (
                  <ParkingSpot key={spot.id} spot={spot} />
                ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <ParkingLegend />
          </div>
        </div>
      </div>
    </div>
  );
};