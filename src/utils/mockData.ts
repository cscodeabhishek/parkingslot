import { ParkingSlot, VehicleType } from '../types/parking';

export const initialParkingSlots: ParkingSlot[] = [
  {
    id: '1',
    number: 'A1',
    isOccupied: false,
    vehicleType: VehicleType.CAR,
    floor: 1
  },
  {
    id: '2',
    number: 'A2',
    isOccupied: false,
    vehicleType: VehicleType.CAR,
    floor: 1
  },
  {
    id: '3',
    number: 'B1',
    isOccupied: false,
    vehicleType: VehicleType.BIKE,
    floor: 1
  },
  {
    id: '4',
    number: 'B2',
    isOccupied: false,
    vehicleType: VehicleType.SUV,
    floor: 1
  }
];