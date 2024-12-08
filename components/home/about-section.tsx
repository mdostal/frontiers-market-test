import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="container flex flex-col-reverse lg:flex-row items-start gap-[64px]">
      <div className="max-lg:self-center flex-shrink-0">
        <Image
          src="/images/tfmf.webp"
          width={528}
          height={648}
          alt="Rancher with cattle"
          className="rounded-lg shadow-lg"
        />
        <p className="text-center md:text-lg font-bold leading-[30px] max-md:pt-2">
          Joe Draper, happy Frontiers Market rancher
        </p>
        <div>
          <p className="text-green-600 mb-4">WHO WE ARE</p>
          <h2 className="text-3xl font-bold mb-6">The Frontiers Market Family</h2>
          <p className="text-gray-600 mb-8">
            Frontiers Market got its start in Texas with one goal: provide farmers and ranchers 
            with digital solutions to help them become more efficient, profitable, and competitive 
            in national markets.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}