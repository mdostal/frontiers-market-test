"use client"

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { states } from '@/data/states'

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('All States')
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    router.push(`https://frontiersmarket.com/cattle-for-sale?q=${searchTerm}&stateShort=${selectedState}`);
  }

  return (
    <section className="container">
      <p className="text-base text-secondary font-semibold uppercase">
        Verified listings added daily
      </p>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl leading-9 md:text-3xl md:leading-12 text-primary font-archia font-semibold">
          Thousands of Cattle to Browse
        </h2>
      </div>
      <form onSubmit={handleSearch} className="lg:flex flex-col gap-3 justify-end">
        <div className="flex">
          <input
            type="text"
            placeholder="What are you looking for?"
            aria-label='What are you looking for?'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow border border-lightGrey rounded-l-lg text-sm text-[#475467] p-3 w-full"
          />

          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="max-md:hidden border border-lightGrey text-sm text-[#475467] h-12 p-3 w-1/4">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state.name} value={state.shortText}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit" onClick={handleSearch} className="flex gap-3 items-center justify-center text-lg text-white bg-secondary p-3 h-12 rounded-r-lg leading-normal">
            Search
            <Search className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </section>
  )
}