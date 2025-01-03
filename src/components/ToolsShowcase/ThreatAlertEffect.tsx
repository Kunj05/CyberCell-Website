import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Shield, Lock } from 'lucide-react';

const alerts = [
  { message: 'Suspicious login attempt detected', icon: AlertTriangle },
  { message: 'Port scan detected from 192.168.1.100', icon: Shield },
  { message: 'Brute force attack blocked', icon: Lock },
  { message: 'SQL injection attempt prevented', icon: Shield },
  { message: 'Malicious payload detected', icon: AlertTriangle },
];

const ThreatAlertEffect = () => {
  const [currentAlerts, setCurrentAlerts] = useState<typeof alerts>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setCurrentAlerts((prev) => [newAlert]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[300px] bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 relative overflow-hidden">
      <h3 className="text-xl font-semibold text-blue-400 mb-6">
        Threat Monitor
      </h3>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentAlerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0, rotateX: -80 }}
              animate={{ x: 0, opacity: 1, rotateX: 0 }}
              exit={{ x: 100, opacity: 0, rotateX: 80 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-500/5 p-4 rounded-lg border border-blue-500/10 transform-gpu"
            >
              <div className="flex items-center gap-3">
                <alert.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm">{alert.message}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default ThreatAlertEffect;
