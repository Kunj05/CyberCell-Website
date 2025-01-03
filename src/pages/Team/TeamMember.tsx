import { type ReactNode } from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import AnimatedCard from '../../components/ui/AnimatedCard';

type SocialLink = {
  platform: 'linkedin' | 'github' | 'instagram';
  url: string;
};

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  description: string;
  socials: SocialLink[];
};

const socialIcons: Record<SocialLink['platform'], ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />
};

const TeamMember = ({ name, role, image, description, socials }: TeamMemberProps) => {
  return (
    <AnimatedCard>
      <div className="flex flex-col items-center">
        <div className="relative group mb-4">
          <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 bg-blue-500/20" />
          <img
            src={image}
            alt={name}
            className="relative w-32 h-32 rounded-full object-cover border-2 border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300"
          />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 mb-2">{role}</p>
        <p className="text-gray-400 text-center mb-4">{description}</p>
        
        <div className="flex space-x-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialIcons[social.platform]}
            </a>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TeamMember;