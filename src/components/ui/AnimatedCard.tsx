import { motion } from 'framer-motion';
import React from 'react';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedCard = ({ children, className = '' }: AnimatedCardProps) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Border glow effect */}
      <div className="absolute -inset-[1px] rounded-lg bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      {/* Card background */}
      <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 transition-colors duration-300 group-hover:border-blue-500/40">
        {/* Shine effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;