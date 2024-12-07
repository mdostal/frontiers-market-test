"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const sellerFeatures = [
  {
    title: 'Sell to a National Market',
    description: 'Sell to anyone from industry giants to small-scale operations wanting to buy your product. Ensure fair, competitive prices in the national market with buyers you can trust.',
    image: 'https://images.unsplash.com/photo-1605185189315-fc269c231e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Make More Sales',
    description: 'Access to Frontiers Market\'s marketplace means you are seen by thousands of potential buyers. As soon as you are verified to sell, get offers from all over the country.',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Secure Transactions',
    description: 'Our platform ensures safe and secure transactions with verified buyers, protecting both parties throughout the process.',
    image: 'https://images.unsplash.com/photo-1533069027836-fa937181a8ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const buyerFeatures = [
  {
    title: 'Access Quality Livestock',
    description: 'Browse through a wide selection of verified livestock from trusted sellers across the country.',
    image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Competitive Pricing',
    description: 'Compare prices across different sellers and regions to ensure you get the best deal for your investment.',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Verified Sellers',
    description: 'All sellers on our platform are thoroughly verified to ensure you\'re dealing with legitimate businesses.',
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export function FeaturesTabs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">
          Why buy & sell on Frontiers Market?
        </h2>
        <p className="text-center text-green-600 mb-8">Trusted livestock marketplace</p>
        
        <Tabs defaultValue="selling" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="selling">I'm here for selling</TabsTrigger>
            <TabsTrigger value="buying">I'm here for buying</TabsTrigger>
          </TabsList>
          <TabsContent value="selling" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {sellerFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="buying" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {buyerFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}