import { useAuthStore } from '@/lib/store/auth-store'

export function getUserId(): string {
    return useAuthStore.getState().getEffectiveId()
  }