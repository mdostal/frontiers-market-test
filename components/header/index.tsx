"use client"

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { NotificationBanner } from './notification-banner'
import { NavLinks } from './nav-links'

export function Header() {
  return (
    <>
      <NotificationBanner />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Frontiers Market" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <NavLinks />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
    </>
  )
}