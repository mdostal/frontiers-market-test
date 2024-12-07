import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              alt="Rancher with cattle"
              className="rounded-lg shadow-lg"
            />
          </div>
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
      </div>
    </section>
  )
}