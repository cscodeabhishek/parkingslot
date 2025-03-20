import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  CreditCardIcon,
  TruckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Book Parking', href: '/dashboard/book', icon: CalendarIcon },
  { name: 'Vehicles', href: '/dashboard/vehicles', icon: TruckIcon },
  { name: 'Payments', href: '/dashboard/payments', icon: CreditCardIcon },
  { name: 'EV Charging', href: '/dashboard/ev-charging', icon: BoltIcon },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="mt-5 px-2">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
          >
            <item.icon
              className={`${
                isActive ? 'text-indigo-600' : 'text-gray-400'
              } mr-4 flex-shrink-0 h-6 w-6`}
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};