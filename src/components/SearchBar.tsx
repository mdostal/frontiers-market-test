import React, { useState } from 'react';
import { Search } from 'lucide-react';

const states = [
  'All States',
  'Alabama',
  'Alaska',
  'Arizona',
  // ... add all states
  'Wyoming'
];

export const SearchBar = () => {
  const [selectedState, setSelectedState] = useState('All States');

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="w-full md:w-48">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-indigo-700">
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};