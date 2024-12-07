import React from 'react';

export const SecondaryHero = () => {
  return (
    <div className="bg-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 text-lg text-indigo-200">
              Join thousands of satisfied customers who have transformed their business with our platform.
            </p>
            <div className="mt-8">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-50">
                Get Started Now
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
            <img
              className="h-56 w-full object-cover lg:w-64 rounded-lg"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Call to action"
            />
          </div>
        </div>
      </div>
    </div>
  );
};