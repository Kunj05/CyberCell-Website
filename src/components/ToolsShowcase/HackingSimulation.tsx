import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
  "Think before you click! 🧠💻",
  "Lock it down with 2FA! 🔒🛡️",
  "Phishing alert! Don’t bite the bait! 🎣🚫",
  "Strong passwords, strong defenses! 🛡️🔐",
  "Keep your software updated – stay secure! ⚡🔄",
  "Encrypt it or risk it! 🔒📡",
  "Never reuse passwords – mix it up! 🔑🔄",
  "Be cautious with public Wi-Fi! 🌍🚫",
  "Backup your data – better safe than sorry! 💾⚠️",
  "Keep your firewall up, your hackers out! 🧱🚫"
];

const HackingSimulation = () => {
  const [visibleCommands, setVisibleCommands] = React.useState<string[]>([]);

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < commands.length) {
        setVisibleCommands((prev) => [...prev, commands[currentIndex]]);
        currentIndex++;
      } else {
        setVisibleCommands([]);
        currentIndex = 0;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[300px] bg-black/40 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 relative overflow-hidden font-mono">
      <h3 className="text-xl font-semibold text-blue-400 mb-6">
        Cybersecurity Tips
      </h3>

      <div className="space-y-2">
        <AnimatePresence>
          {visibleCommands.map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-400">$ </span>
              <span className="text-gray-300">{cmd}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};
export default HackingSimulation;
