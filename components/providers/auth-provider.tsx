"use client"

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useAuthStore } from '@/lib/store/auth-store'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, isSignedIn } = useUser()
  const setUserId = useAuthStore((state) => state.setUserId)

  useEffect(() => {
    if (isSignedIn && user) {
      setUserId(user.id)
    } else {
      setUserId(null) // This will trigger guest ID creation if needed
    }
  }, [isSignedIn, user, setUserId])

  return <>{children}</>
}