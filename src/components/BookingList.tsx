import React from 'react';
import { useParkingStore } from '../stores/parkingStore';
import { format } from 'date-fns';

export const BookingList: React.FC = () => {
  const { bookings, cancelBooking } = useParkingStore();

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Your Bookings</h2>
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="border rounded-lg p-4 space-y-2 bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold">Vehicle: {booking.vehicleNumber}</p>
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                booking.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : booking.status === 'completed'
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {booking.status}
            </span>
          </div>
          <p>Start: {format(new Date(booking.startTime), 'PPp')}</p>
          <p>End: {format(new Date(booking.endTime), 'PPp')}</p>
          {booking.status === 'active' && (
            <button
              onClick={() => cancelBooking(booking.id)}
              className="text-red-600 hover:text-red-800"
            >
              Cancel Booking
            </button>
          )}
        </div>
      ))}
    </div>
  );
};