import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 animate-pulse" />
            <h1 className="relative text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              PictCyberCell
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the elite community of cyber defenders. Master the art of
            cybersecurity through hands-on experience and expert guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button className="text-lg px-8 py-3">Join Now</Button>
            <Button variant="outline" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Floating cyber elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700" />
    </div>
  );
};

export default Hero;
