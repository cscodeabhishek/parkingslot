import React, { useState } from 'react';
import { EVStationList } from './EVStationList';
import { EVStationMap } from './EVStationMap';
import { EVStationFilters } from './EVStationFilters';
import { useEVStore } from '../../stores/evStore';

export const EVCharging: React.FC = () => {
  const [view, setView] = useState<'list' | 'map'>('list');
  const { stations } = useEVStore();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">EV Charging Stations</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-md ${
                view === 'list'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setView('map')}
              className={`px-4 py-2 rounded-md ${
                view === 'map'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        <EVStationFilters />

        <div className="mt-6">
          {view === 'list' ? (
            <EVStationList stations={stations} />
          ) : (
            <EVStationMap stations={stations} />
          )}
        </div>
      </div>
    </div>
  );
};