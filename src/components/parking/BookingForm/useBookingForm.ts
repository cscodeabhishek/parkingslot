import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useVehicleStore } from '../../../stores/vehicleStore';
import { useParkingStore } from '../../../stores/parkingStore';
import { BookingFormData } from './types';
import { BookingStatus } from '../../../types/parking';

const bookingSchema = z.object({
  vehicleNumber: z.string().min(1, 'Vehicle number is required'),
  vehicleType: z.enum(['car', 'bike', 'suv']),
  startTime: z.string(),
  duration: z.string(),
});

export const useBookingForm = () => {
  const { vehicles } = useVehicleStore();
  const { getAvailableSpots, addBooking } = useParkingStore();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const vehicleNumber = form.watch('vehicleNumber');
  const selectedVehicle = vehicles.find(v => v.number === vehicleNumber);
  const availableSlots = getAvailableSpots(form.watch('vehicleType'));

  const calculatePrice = (data: BookingFormData) => {
    const hours = parseInt(data.duration);
    const baseRate = data.vehicleType === 'bike' ? 20 : 40;
    return baseRate * hours;
  };

  const onSubmit = (data: BookingFormData) => {
    if (availableSlots.length === 0) {
      form.setError('vehicleType', { 
        message: 'No spots available for this vehicle type' 
      });
      return;
    }

    const booking = {
      id: crypto.randomUUID(),
      slotId: availableSlots[0].id,
      userId: 'user-1',
      vehicleNumber: data.vehicleNumber,
      startTime: new Date(data.startTime),
      endTime: new Date(new Date(data.startTime).getTime() + parseInt(data.duration) * 3600000),
      status: BookingStatus.ACTIVE,
      amount: calculatePrice(data)
    };

    addBooking(booking);
    form.reset();
  };

  return {
    form,
    onSubmit,
    calculatePrice,
    selectedVehicle,
    availableSlots
  };
};