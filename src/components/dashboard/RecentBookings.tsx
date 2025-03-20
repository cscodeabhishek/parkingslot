import React from 'react';
import { useParkingStore } from '../../stores/parkingStore';
import { format } from 'date-fns';

export const RecentBookings: React.FC = () => {
  const { bookings } = useParkingStore();
  const recentBookings = bookings
    .sort((a, b) => b.startTime.getTime() - a.startTime.getTime())
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
      <div className="space-y-4">
        {recentBookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{booking.vehicleNumber}</p>
              <p className="text-sm text-gray-500">
                {format(booking.startTime, 'PPp')}
              </p>
            </div>
            <span className={`px-2 py-1 rounded-full text-sm ${
              booking.status === 'active'
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};