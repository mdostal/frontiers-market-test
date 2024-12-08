import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

interface AuthState {
  userId: string | null
  guestId: string | null
  setUserId: (id: string | null) => void
  getEffectiveId: () => string
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      userId: null,
      guestId: null,
      setUserId: (id: string | null) => {
        if (!id && !get().guestId) {
          // If clearing userId and no guestId exists, create one
          set({ userId: null, guestId: `guest-${uuidv4()}` })
        } else {
          set({ userId: id })
        }
      },
      getEffectiveId: () => {
        const state = get()
        return state.userId || state.guestId || `guest-${uuidv4()}`
      }
    }),
    {
      name: 'auth-storage',
    }
  )
)