import { Github, Linkedin, Instagram } from 'lucide-react';
import AnimatedCard from '../../components/ui/AnimatedCard';

type TeamSectionProps = {
  title: string;
  members: any[];
  variant?: 'default' | 'compact';
  className?: string;
};

const TeamSection = ({ title, members, variant = 'default', className = '' }: TeamSectionProps) => {
  const isCompact = variant === 'compact';

  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold text-center mb-12 text-blue-400">
        {title}
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-${isCompact ? '6' : '8'}`}>
        {members.map((member, index) => (
          <AnimatedCard key={index}>
            <div className="flex flex-col items-center">
              <div className="relative group mb-4">
                <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 bg-blue-500/20" />
                <img
                  src={member.image}
                  alt={member.name}
                  className={`relative ${isCompact ? 'w-24 h-24' : 'w-32 h-32'} rounded-full object-cover border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300`}
                />
              </div>
              
              <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} font-bold text-white mb-1`}>
                {member.name}
              </h3>
              <p className="text-blue-400 mb-2">
                {member.position || member.title}
              </p>
              {!isCompact && (
                <p className="text-gray-400 text-center mb-4">
                  {member.description}
                </p>
              )}
              
              <div className="flex space-x-4">
                <a
                  href={member.socials.github}
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className={`w-${isCompact ? '4' : '5'} h-${isCompact ? '4' : '5'}`} />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className={`w-${isCompact ? '4' : '5'} h-${isCompact ? '4' : '5'}`} />
                </a>
                <a
                  href={member.socials.instagram}
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className={`w-${isCompact ? '4' : '5'} h-${isCompact ? '4' : '5'}`} />
                </a>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;