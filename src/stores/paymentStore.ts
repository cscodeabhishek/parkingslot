import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PaymentStatus } from '../types/parking';

interface Payment {
  id: string;
  date: string;
  amount: number;
  description: string;
  status: PaymentStatus;
}

interface PaymentState {
  payments: Payment[];
  addPayment: (payment: Payment) => void;
}

const mockPayments: Payment[] = [
  {
    id: '1',
    date: new Date().toISOString(),
    amount: 250,
    description: 'Parking at Central Mall - 2 hours',
    status: PaymentStatus.COMPLETED,
  },
  {
    id: '2',
    date: new Date().toISOString(),
    amount: 500,
    description: 'EV Charging - 45 kWh',
    status: PaymentStatus.PENDING,
  },
];

export const usePaymentStore = create<PaymentState>()(
  persist(
    (set) => ({
      payments: mockPayments,
      addPayment: (payment) => {
        set((state) => ({
          payments: [payment, ...state.payments],
        }));
      },
    }),
    {
      name: 'payment-storage',
    }
  )
);