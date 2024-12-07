"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Cattle grazing in field"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Search Livestock For Sale
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Trusted by 10,000+ livestock owners
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/browse">Browse livestock</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}