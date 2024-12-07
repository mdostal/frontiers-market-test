import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';

interface State {
  user: User | null;
  setUser: (user: User | null) => void;
  createGuestUser: () => User;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      createGuestUser: () => {
        const guestUser: User = {
          id: uuidv4(),
          isGuest: true,
          displayName: `Guest_${Math.random().toString(36).substr(2, 9)}`,
          email: null,
          photoURL: null,
        };
        set({ user: guestUser });
        return guestUser;
      },
    }),
    {
      name: 'user-storage',
    }
  )
);