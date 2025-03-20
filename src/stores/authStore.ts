import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';
import type { User } from '../types/auth';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email: string, password: string) => {
        try {
          set({
            isAuthenticated: true,
            user: {
              id: '1',
              email,
              name: 'Demo User',
            },
          });
          toast.success('Successfully logged in!');
        } catch (error) {
          toast.error('Failed to login. Please try again.');
          throw error;
        }
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
        toast.success('Successfully logged out!');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);