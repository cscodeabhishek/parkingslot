import { VehicleType } from '../../../types/parking';

export interface BookingFormData {
  vehicleNumber: string;
  vehicleType: VehicleType;
  startTime: string;
  duration: string;
}