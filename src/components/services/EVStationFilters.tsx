import React from 'react';
import { useEVStore } from '../../stores/evStore';

export const EVStationFilters: React.FC = () => {
  const { filters, updateFilters } = useEVStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Connector Type
        </label>
        <select
          value={filters.connectorType}
          onChange={(e) => updateFilters({ connectorType: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">All Types</option>
          <option value="CCS2">CCS2</option>
          <option value="CHAdeMO">CHAdeMO</option>
          <option value="Type2">Type 2</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Power Output
        </label>
        <select
          value={filters.minPower}
          onChange={(e) => updateFilters({ minPower: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value={0}>Any Power</option>
          <option value={50}>50+ kW</option>
          <option value={100}>100+ kW</option>
          <option value={150}>150+ kW</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Availability
        </label>
        <select
          value={filters.status}
          onChange={(e) => updateFilters({ status: e.target.value as 'all' | 'available' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="all">Show All</option>
          <option value="available">Available Only</option>
        </select>
      </div>
    </div>
  );
};