import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, Globe, Shield } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Advanced Linux Workshop",
    date: "Next Week",
    icon: Terminal,
    color: "text-blue-400"
  },
  {
    id: 2,
    title: "Cryptography Challenge",
    date: "Starting Soon",
    icon: Lock,
    color: "text-blue-400"
  },
  {
    id: 3,
    title: "Web Security Masterclass",
    date: "Tomorrow",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    id: 4,
    title: "Network Security Lab",
    date: "This Weekend",
    icon: Shield,
    color: "text-blue-400"
  }
];

const PopupEffect = () => {
  const [notifications, setNotifications] = useState<(typeof events[0] & { uniqueId: string })[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = events[Math.floor(Math.random() * events.length)];
      const uniqueEvent = {
        ...newEvent,
        uniqueId: `${newEvent.id}-${Date.now()}`
      };
      setNotifications(prev => [uniqueEvent, ...prev].slice(0, 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[400px] bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
      <h3 className="text-xl font-semibold text-blue-400 mb-6">Upcoming Sessions</h3>
      
      <div className="space-y-4">
        <AnimatePresence>
          {notifications.map((event) => (
            <motion.div
              key={event.uniqueId}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-500/5 rounded-lg p-4 border border-blue-500/10"
            >
              <div className="flex items-center gap-3">
                <event.icon className={`w-6 h-6 ${event.color}`} />
                <div>
                  <h4 className="text-white font-medium">{event.title}</h4>
                  <p className="text-blue-400 text-sm">{event.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PopupEffect;