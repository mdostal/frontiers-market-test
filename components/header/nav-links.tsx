"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export function NavLinks() {
  return (
    <nav className="flex items-center gap-6">
      <Link href="https://frontiersmarket.com/cattle-for-sale" className="text-sm font-medium hover:text-primary">
        Browse livestock
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <Link href="tel:512-387-4314">
            <span className="hidden sm:inline">Call us</span> 512-387-4314
          </Link>
        </Button>

        <SignedOut>
          <SignInButton >
            <Button variant="ghost" className='font-semibold text-sm sm:text-base rounded-md py-2 px-3 text-primary border border-lightGrey' asChild>
                <Link href="/">Log in</Link>
            </Button>

          </SignInButton>
          <SignInButton >
            <Button asChild className="font-bold text-sm sm:text-base rounded-md py-2 px-3 bg-primary text-white max-md:hidden">
              <Link href="/">Register</Link>
            </Button>
          </SignInButton>

        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  )
}