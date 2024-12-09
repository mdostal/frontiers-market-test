"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export function NavLinks() {
  return (
    <div className="flex flex-1 flex-row items-center justify-end gap-3">
      <div className="max-md:hidden flex flex-1">
        <Link className="font-semibold text-sm sm:text-base w-full" href="https://frontiersmarket.com/cattle-for-sale" className="bg-white border-[#E4E7EC] border-[1px] rounded-md py-2 px-3 font-medium text-sm sm:text-base text-[#1D2939]">
          Browse livestock
        </Link>
      </div>
      <div className="flex gap-3">
        <Button variant="ghost" asChild>
          <Link className='flex gap-2 text-primary text-sm md:text-base items-center'
            href="tel:+1512-387-4314">
            <p className="max-md:hidden">Call us</p>
            <Image src="/images/phone.svg" alt="Phone" width={15} height={15} />
            512-387-4314
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
    </div>
  )
}