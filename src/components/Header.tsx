import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="fixed w-full z-50">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-primary-600"
          >
            <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center">
                  <span className="flex p-2">
                    <Bell className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span>New features available! Check out our latest updates.</span>
                  </p>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    onClick={() => setShowNotification(false)}
                    className="flex p-2 rounded-md hover:bg-primary-500 focus:outline-none"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Features
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Pricing
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};