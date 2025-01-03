import { Github, Linkedin, Twitter } from 'lucide-react';

const developers = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
    bio: 'Full-stack developer with expertise in React and Node.js',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300',
    bio: 'Frontend specialist focused on creating beautiful user experiences',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=300&h=300',
    bio: 'Backend expert with strong knowledge of system architecture',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

const Developers = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Meet Our Web Developers
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <div className="flex flex-col items-center">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-32 h-32 rounded-full mb-4 border-2 border-blue-500/20"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{dev.name}</h3>
                  <p className="text-blue-400 mb-2">{dev.role}</p>
                  <p className="text-gray-400 text-center mb-4">{dev.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href={dev.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={dev.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={dev.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;