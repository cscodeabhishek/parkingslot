import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '../../ui/Input';
import { ParkingSlot, VehicleType } from '../../../types/parking';
import { BookingFormData } from './types';

interface BookingFormInputsProps {
  form: UseFormReturn<BookingFormData>;
  availableSlots: ParkingSlot[];
}

export const BookingFormInputs: React.FC<BookingFormInputsProps> = ({ 
  form,
  availableSlots
}) => {
  const { register, formState: { errors } } = form;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="Vehicle Number"
        {...register('vehicleNumber')}
        error={errors.vehicleNumber?.message}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vehicle Type
        </label>
        <select
          {...register('vehicleType')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {Object.values(VehicleType).map((type) => (
            <option key={type} value={type}>
              {type.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <Input
        type="datetime-local"
        label="Start Time"
        {...register('startTime')}
        error={errors.startTime?.message}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Duration
        </label>
        <select
          {...register('duration')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
          <option value="4">4 Hours</option>
          <option value="8">8 Hours</option>
          <option value="24">24 Hours</option>
        </select>
      </div>
    </div>
  );
};