export interface ParkingSlot {
  id: string;
  number: string;
  floor: number;
  status: 'available' | 'occupied' | 'reserved' | 'charging';
  vehicleType: VehicleType;
  isCharging?: boolean;
}

export interface Booking {
  id: string;
  slotId: string;
  userId: string;
  vehicleNumber: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
  amount?: number;
  paymentStatus?: PaymentStatus;
}

export enum VehicleType {
  CAR = 'car',
  BIKE = 'bike',
  SUV = 'suv'
}

export enum BookingStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed'
}