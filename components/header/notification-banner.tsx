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
    <section className="flex bg-primary py-3 sticky width-full top-0 z-99999">
      <div className="container flex flex-row justify-between text-sm lg:text-base xl:translate-x-4">
        <a href="/mobile-app" className="flex justify-between md:w-full">
          <div>
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
            <p className="hidden md:block">
              Available On
            </p>
            <Image src={'/images/apple-logo.svg'} alt="Apple Logo" width={20} height={20} />
            <p className="md:hidden font-medium text-base">Test our cattle weight app.</p>
          </div>
        </a>
        </div>
        <span className='flex gap-2 pl-10 text-white float-left justify-end items-end'>
          <Button
            variant="thin"
            size="tiny"
            aria-label='remove banner'
            onClick={() => setIsVisible(false)}
            className='text-white float-right justify-end pr-4'>
            <Image
            src={'/images/x.svg'} 
            alt="X" 
            width={24} 
            height={24} 
            className="float-right justify-end"
            />
          </Button>
        </span>
    </section>
  )
}