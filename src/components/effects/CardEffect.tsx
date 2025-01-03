import { motion } from 'framer-motion';

type CardEffectProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardEffect = ({ children, className = '' }: CardEffectProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
      
      {/* Card content */}
      <div className="relative">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default CardEffect;