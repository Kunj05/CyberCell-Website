import React from 'react';
import PopupEffect from './PopupEffect';
import CloudEffect from './CloudEffect';
import ThreatAlertEffect from './ThreatAlertEffect';
import HackingSimulation from './HackingSimulation';

const ToolsShowcase = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white text-center mb-16">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            <span className="text-inherit">🔐</span> What We Do
            <span className="text-inherit">💡</span>
          </p>
        </h2>

        {/* First Row - Large + Small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <PopupEffect />
          </div>
          <div className="md:col-span-1">
            <CloudEffect />
          </div>
        </div>

        {/* Second Row - Small + Large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <ThreatAlertEffect />
          </div>
          <div className="md:col-span-2">
            <HackingSimulation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsShowcase;
