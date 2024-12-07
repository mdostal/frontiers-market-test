import React from 'react';
import { Shield, Users, Zap, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-level security protocols to protect your data and transactions'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join thousands of satisfied users in our growing community'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for quick and efficient operations'
  },
  {
    icon: Trophy,
    title: 'Award Winning',
    description: 'Recognized for excellence in service and innovation'
  }
];

export const InfoGrid = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};