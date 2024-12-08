"use client"

import Link from 'next/link'
import { NotificationBanner } from './notification-banner'
import { NavLinks } from './nav-links'
import Image from 'next/image'

export function Header() {
  return (
    <>
      <NotificationBanner />
      <header className="bg-[#FBFAFA] sticky top-0 z-10">
        <div className="container py-2 pt-4 sm:py-4  flex flex-row items-center md:items-end justify-between gap-16">
          <div className="max-md:hidden">
            <Link href="/" className='flex items-center p-2'>
              <Image 
                width={100} 
                height={32} 
                src="/images/logo.svg" 
                alt="Frontiers Market" 
                className="" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <NavLinks />
          </div>
        </div>
      </header>
    </>
  )
}