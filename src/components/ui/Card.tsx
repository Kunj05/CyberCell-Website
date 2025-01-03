import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
};

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}: CardProps) => {
  const baseStyles = "backdrop-blur-sm rounded-xl p-6 transition-all duration-300";
  
  const variants = {
    default: "bg-black/40 border border-blue-500/20",
    gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20",
    glass: "bg-white/5 border border-white/10"
  };

  const hoverEffect = hover ? "hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10" : "";

  return (
    <div className={`relative group ${baseStyles} ${variants[variant]} ${hoverEffect} ${className}`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;