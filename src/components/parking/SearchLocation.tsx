import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchLocation: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for parking location..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
};