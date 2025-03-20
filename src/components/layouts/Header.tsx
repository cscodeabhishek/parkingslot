import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export const Header: React.FC = () => {
  const { logout } = useAuthStore();

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">Park+</span>
          </div>
          <button
            onClick={logout}
            className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};