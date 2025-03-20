import React from 'react';
import { EVStation } from '../../types/ev';

interface EVStationMapProps {
  stations: EVStation[];
}

export const EVStationMap: React.FC<EVStationMapProps> = ({ stations }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 h-[400px] flex items-center justify-center">
      <p className="text-gray-500">
        Map integration will be available soon
      </p>
    </div>
  );
};