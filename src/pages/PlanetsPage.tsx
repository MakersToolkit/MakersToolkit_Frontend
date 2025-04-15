
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';

const PlanetsPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Explore Planets</h1>
        <div className="text-center text-xl text-gray-300 mb-16">
          This page is under construction. Soon you'll be able to explore detailed information about various planets.
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlanetsPage;
