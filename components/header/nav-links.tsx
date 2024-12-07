"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      <Link href="/browse" className="text-sm font-medium hover:text-primary">
        Browse livestock
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="tel:512-387-4314">
            <span className="hidden sm:inline">Call us</span> 512-387-4314
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </nav>
  )
}