"use client"

import { useState } from 'react'
import { AlertCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    // TODO: update notification banner colors
    <div className="bg-primary px-4 py-2 text-primary-foreground">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/notification-banner.png"
            alt="Notification Banner"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>Join our Early Access program to test our cattle management app on your ranch.</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}