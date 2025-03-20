import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { DashboardOverview } from '../components/dashboard/DashboardOverview';
import { BookingForm } from '../components/parking/BookingForm';
import { VehicleManagement } from '../components/vehicles/VehicleManagement';
import { PaymentHistory } from '../components/payments/PaymentHistory';
import { EVCharging } from '../components/services/EVCharging';

export const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/vehicles" element={<VehicleManagement />} />
        <Route path="/payments" element={<PaymentHistory />} />
        <Route path="/ev-charging" element={<EVCharging />} />
      </Routes>
    </DashboardLayout>
  );
};