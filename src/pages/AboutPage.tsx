
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About AstroSpark</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-300 mb-6">
            AstroSpark is a cosmic exploration platform dedicated to sharing the wonders of our universe. Our mission is to inspire curiosity about space and astronomy through immersive digital experiences.
          </p>
          
          <p className="text-lg text-gray-300 mb-6">
            Founded by a team of astronomy enthusiasts and digital creators, we aim to make cosmic knowledge accessible to everyone, regardless of their scientific background.
          </p>
          
          <p className="text-lg text-gray-300">
            Through interactive visualizations, educational content, and timely updates on celestial events, we invite you to join us on a journey through the cosmos.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Founder & Astronomer', 'Lead Developer', 'Content Creator'].map((role, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/5 border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">Team Member</h3>
                  <p className="text-cosmic-stardust-teal mb-3">{role}</p>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo pharetra.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
