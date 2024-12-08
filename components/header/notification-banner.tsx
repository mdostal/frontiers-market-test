"use client"

import * as React from 'react'
import { useState } from 'react'
import { AlertCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    // TODO: update notification banner colors
    <section className="flex bg-primary py-3 sticky top-0 z-99999">
      <div className="container flex flex-row justify-between text-sm lg:text-base xl:translate-x-4">
        <a href="/mobile-app" className="flex justify-between md:w-full">
          <div className="flex justify-between md:w-full">
            <p className="hidden md:flex items-center gap-2 text-white">
              <Image
                src="/images/flag.jpeg"
                alt="Flag"
                width={24}
                height={24}
              />
              Join our Early Access program to test our cattle management app on your ranch.
            </p>
          </div>
          <div className='flex gap-2 text-white items-center'>
            <p className="md:hidden font-medium text-base">
              Available On
            </p>
            <Image src={'/images/apple-logo.svg'} alt="Apple Logo" width={20} height={20} />
          </div>
        </a>
        {/* // TODO: fix the button to remove as well */}
        <button
          // variant="ghost"
          // size="icon"
          // label="remove banner" 
          onClick={() => setIsVisible(false)}
          className="pr-4"
        >
          <X className="h-24 w-24" />
        </button>
      </div>
    </section>
  )
}