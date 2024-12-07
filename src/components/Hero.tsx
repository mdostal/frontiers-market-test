import React from 'react';
import { Download } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative mt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transform Your Business
        </h1>
        <p className="mt-6 text-xl text-primary-100 max-w-3xl">
          Streamline your operations and boost productivity with our comprehensive solution.
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-secondary-600 hover:bg-secondary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};