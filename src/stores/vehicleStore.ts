import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { VehicleType } from '../types/parking';

interface Vehicle {
  id: string;
  number: string;
  type: VehicleType;
  model: string;
  insuranceExpiry: Date;
  registrationExpiry: Date;
}

interface VehicleState {
  vehicles: Vehicle[];
  addVehicle: (vehicle: Vehicle) => void;
  removeVehicle: (id: string) => void;
  getVehicle: (id: string) => Vehicle | undefined;
}

export const useVehicleStore = create<VehicleState>()(
  persist(
    (set, get) => ({
      vehicles: [],
      addVehicle: (vehicle) => {
        set((state) => ({
          vehicles: [...state.vehicles, vehicle],
        }));
      },
      removeVehicle: (id) => {
        set((state) => ({
          vehicles: state.vehicles.filter((v) => v.id !== id),
        }));
      },
      getVehicle: (id) => {
        return get().vehicles.find((v) => v.id === id);
      },
    }),
    {
      name: 'vehicle-storage',
    }
  )
);