import React from 'react';

export const ParkingLegend: React.FC = () => {
  const legendItems = [
    { color: 'bg-green-100 border-green-500', label: 'Available' },
    { color: 'bg-red-100 border-red-500', label: 'Occupied' },
    { color: 'bg-yellow-100 border-yellow-500', label: 'Reserved' },
    { color: 'bg-blue-100 border-blue-500', label: 'EV Charging' },
  ];

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-4">Legend</h3>
      <div className="space-y-2">
        {legendItems.map(({ color, label }) => (
          <div key={label} className="flex items-center space-x-2">
            <div className={`w-4 h-4 rounded border ${color}`} />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};