import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ParkingSlot, Booking, VehicleType } from '../types/parking';

interface ParkingState {
  parkingSpots: ParkingSlot[];
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  cancelBooking: (bookingId: string) => void;
  getAvailableSpots: (vehicleType: VehicleType) => ParkingSlot[];
}

export const useParkingStore = create<ParkingState>()(
  persist(
    (set, get) => ({
      parkingSpots: [],
      bookings: [],
      
      addBooking: (booking) => {
        set((state) => ({
          bookings: [...state.bookings, booking],
          parkingSpots: state.parkingSpots.map((spot) =>
            spot.id === booking.slotId ? { ...spot, status: 'occupied' } : spot
          ),
        }));
      },

      cancelBooking: (bookingId) => {
        set((state) => {
          const booking = state.bookings.find((b) => b.id === bookingId);
          if (!booking) return state;

          return {
            bookings: state.bookings.filter((b) => b.id !== bookingId),
            parkingSpots: state.parkingSpots.map((spot) =>
              spot.id === booking.slotId ? { ...spot, status: 'available' } : spot
            ),
          };
        });
      },

      getAvailableSpots: (vehicleType) => {
        return get().parkingSpots.filter(
          (spot) => spot.status === 'available' && spot.vehicleType === vehicleType
        );
      },
    }),
    {
      name: 'parking-storage',
    }
  )
);