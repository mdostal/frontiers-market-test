import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function AppPromo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm mb-4">Livestock in your pocket</p>
            <h2 className="text-3xl font-bold mb-6">
              Get the Frontiers Market companion app
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                alt="User avatar"
                className="w-10 h-10 rounded-full -ml-4"
              />
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                alt="User avatar"
                className="w-10 h-10 rounded-full -ml-4"
              />
              <span className="ml-2 text-sm text-gray-600">
                Trusted by the biggest U.S. ranchers 🇺🇸
              </span>
            </div>
            <Button className="bg-black hover:bg-gray-800">
              <Download className="mr-2 h-4 w-4" />
              Download App
            </Button>
          </div>
          <div className="relative">
            <img
              src="/app-preview.png"
              alt="App preview"
              className="rounded-lg shadow-xl"
            />
            <img
              src="/apple-badge.svg"
              alt="Available on App Store"
              className="absolute bottom-4 right-4 h-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}