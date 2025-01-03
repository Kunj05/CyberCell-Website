import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Bug,
  Cpu,
  Wifi,
  Database,
  Terminal,
  Code,
  Server,
  Key,
  Network,
  Search,
  FileSearch,
  Webhook,
} from 'lucide-react';

const tools = [
  { Icon: Shield, name: 'Security' },
  { Icon: Lock, name: 'Encryption' },
  { Icon: Bug, name: 'Debug' },
  { Icon: Cpu, name: 'System' },
  { Icon: Wifi, name: 'Network' },
  { Icon: Database, name: 'Database' },
  { Icon: Terminal, name: 'Terminal' },
  { Icon: Code, name: 'Code' },
  { Icon: Server, name: 'Server' },
  { Icon: Key, name: 'Key' },
  { Icon: Network, name: 'Network' },
  { Icon: Search, name: 'Search' },
  { Icon: FileSearch, name: 'Analysis' },
  { Icon: Webhook, name: 'API' },
];

const CloudEffect = () => {
  return (
    <div className="h-[400px] w-full bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 relative overflow-hidden flex justify-center items-center">
      <h3 className="text-xl font-semibold text-blue-400 mb-6 absolute top-1">
        Hands-On Tools
      </h3>

      <div className="relative ">
        {/* Floating icons */}
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            initial={{
              x: Math.random() * 300 - 150, // Random starting X position between -150 and 150
              y: Math.random() * 300 - 150, // Random starting Y position between -150 and 150
              scale: 1,
              rotate: Math.random() * 360, // Random starting rotation
            }}
            animate={{
              x: [
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
              ], // Animate X position
              y: [
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
                Math.random() * 300 - 150,
              ], // Animate Y position
              scale: [1, 1.1, 1], // Scale animation effect
              rotate: [0, 180, 360], // Rotate animation effect
            }}
            transition={{
              duration: 5 + Math.random() * 5, // Random animation duration for each icon
              repeat: Infinity, // Repeat animation indefinitely
              repeatType: 'reverse', // Reverse animation after each cycle
              ease: 'easeInOut', // Ease in and out for smooth transitions
            }}
          >
            <tool.Icon className="w-8 h-8 text-blue-400/70" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CloudEffect;
