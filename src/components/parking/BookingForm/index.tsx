import React from 'react';
import { BookingFormInputs } from './BookingFormInputs';
import { BookingFormSummary } from './BookingFormSummary';
import { useBookingForm } from './useBookingForm';

export const BookingForm: React.FC = () => {
  const { 
    form,
    onSubmit,
    calculatePrice,
    selectedVehicle,
    availableSlots
  } = useBookingForm();

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Parking Spot</h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BookingFormInputs 
          form={form} 
          availableSlots={availableSlots}
        />
        
        <BookingFormSummary 
          selectedVehicle={selectedVehicle}
          price={calculatePrice(form.watch())}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};