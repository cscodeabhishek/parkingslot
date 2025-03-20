import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { EVStation, EVFilters } from '../types/ev';

interface EVState {
  stations: EVStation[];
  filters: EVFilters;
  updateFilters: (newFilters: Partial<EVFilters>) => void;
  getFilteredStations: () => EVStation[];
}

const mockStations: EVStation[] = [
  {
    id: '1',
    name: 'Central Mall Charging Hub',
    location: 'Central Mall, MG Road',
    status: 'available',
    powerOutput: 150,
    connectorType: 'CCS2',
    pricePerKwh: 12,
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    id: '2',
    name: 'Tech Park EV Station',
    location: 'Tech Park, Whitefield',
    status: 'in-use',
    powerOutput: 100,
    connectorType: 'CHAdeMO',
    pricePerKwh: 10,
    coordinates: { lat: 12.9698, lng: 77.7500 },
  },
  // Add more mock stations as needed
];

export const useEVStore = create<EVState>()(
  persist(
    (set, get) => ({
      stations: mockStations,
      filters: {
        connectorType: '',
        minPower: 0,
        status: 'all',
      },
      updateFilters: (newFilters) => {
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        }));
      },
      getFilteredStations: () => {
        const { filters, stations } = get();
        return stations.filter((station) => {
          if (filters.connectorType && station.connectorType !== filters.connectorType) {
            return false;
          }
          if (station.powerOutput < filters.minPower) {
            return false;
          }
          if (filters.status === 'available' && station.status !== 'available') {
            return false;
          }
          return true;
        });
      },
    }),
    {
      name: 'ev-storage',
    }
  )
);