import React from 'react';
import { Users, Calendar, Trophy } from 'lucide-react';

const stats: Stat[] = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Members',
    description:
      'A growing community of cybersecurity enthusiasts who share knowledge and learn together.',
  },
  {
    icon: Calendar,
    value: '100+',
    label: 'Sessions Conducted',
    description:
      'Our team hosts workshops, training sessions, and hands-on practice to upskill the community.',
  },
  {
    icon: Trophy,
    value: '5+',
    label: 'CTF',
    description:
      'Participate in exciting Capture the Flag (CTF) challenges and competitions to sharpen your skills.',
  },
];

const Stats = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 rounded-lg  bg-blue-500/10 text-blue-400 border border-blue-500/20  bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0  transition-transform duration-1000 " />
              <div className="relative bg-black/40  p-8 rounded-lg border border-blue-500/10">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-blue-400 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stats;
