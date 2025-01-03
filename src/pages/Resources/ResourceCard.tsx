import { ExternalLink } from 'lucide-react';
import type { Resource } from '../../Data/resources';
import AnimatedCard from '../../components/ui/AnimatedCard';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-green-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <AnimatedCard>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">
          {resource.title}
        </h3>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <p className="text-gray-400 mb-4">{resource.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {resource.keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-colors duration-300 hover:border-blue-500/40"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400 capitalize">
          {resource.category}
        </span>
        <span
          className={`text-sm font-medium ${getDifficultyColor(
            resource.difficulty
          )} capitalize`}
        >
          {resource.difficulty}
        </span>
      </div>
    </AnimatedCard>
  );
};

export default ResourceCard;