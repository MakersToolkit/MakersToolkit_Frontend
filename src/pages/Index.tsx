
import React from 'react';
import StarField from '@/components/StarField';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PlanetSection from '@/components/PlanetSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main>
        <HeroSection />
        <PlanetSection />
        <EventsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
