import React from 'react';
import { Shield, Lock, Terminal } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Shield className="h-12 w-12 text-cyan-500" strokeWidth={1.5} />
            <Lock className="h-8 w-8 text-cyan-500/80" strokeWidth={1.5} />
            <Terminal className="h-12 w-12 text-cyan-500" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-white to-cyan-500">
            PictCyberCell
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Defending the Digital Frontier
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary">Join the Mission</Button>
            <Button variant="outline">Explore</Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </div>
  );
};

export default HeroSection;