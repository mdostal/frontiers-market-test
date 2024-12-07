import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { SearchBar } from './components/SearchBar';
import { InfoGrid } from './components/InfoGrid';
import { ImageWithText } from './components/ImageWithText';
import { SecondaryHero } from './components/SecondaryHero';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { useAuth } from './hooks/useAuth';

function App() {
  useAuth(); // Initialize authentication

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <InfoSection />
      <SearchBar />
      <InfoGrid />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button className="w-full bg-primary-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-primary-700 transition-colors">
          Create Account
        </button>
      </div>
      <ImageWithText />
      <SecondaryHero />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;