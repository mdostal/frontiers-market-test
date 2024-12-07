import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DetailItem {
  title: string;
  description: string;
  header: string;
  image: string;
}

const buyerDetails: DetailItem[] = [
  {
    title: "Easy Search",
    description: "Find exactly what you're looking for with our advanced search features.",
    header: "For Buyers",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Secure Transactions",
    description: "Every transaction is protected with state-of-the-art security.",
    header: "Safe & Secure",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "24/7 Support",
    description: "Our support team is always here to help you with any questions.",
    header: "Always Available",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const sellerDetails: DetailItem[] = [
  {
    title: "Market Analysis",
    description: "Get detailed insights about your market and competitors.",
    header: "For Sellers",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Quick Listing",
    description: "List your items quickly and easily with our streamlined process.",
    header: "Efficient",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Analytics Dashboard",
    description: "Track your performance with our comprehensive analytics tools.",
    header: "Insightful",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const InfoSection = () => {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');
  const details = activeTab === 'buyers' ? buyerDetails : sellerDetails;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex justify-center space-x-4 mb-12">
        <button
          onClick={() => setActiveTab('buyers')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeTab === 'buyers'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          For Buyers
        </button>
        <button
          onClick={() => setActiveTab('sellers')}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
            activeTab === 'sellers'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          For Sellers
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {details.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-primary-600">{item.header}</h3>
              <h4 className="text-2xl font-bold mt-2 text-gray-900">{item.title}</h4>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          key={`${activeTab}-images`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6"
        >
          {details.map((item, index) => (
            <div key={index} className="relative h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};