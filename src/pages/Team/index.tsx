import { Github, Linkedin, Instagram } from 'lucide-react';
import { LeaderData, coordinators } from '../../Data/Team';
import TeamSection from './TeamSection';

const Team = () => {
  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Our Team
        </h1>

        <TeamSection title="Founders" members={LeaderData} className="mb-20" />

        <TeamSection
          title="Core Team"
          members={coordinators}
          variant="compact"
        />
      </div>
    </div>
  );
};

export default Team;
