import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (category: string) => void;
}

const SearchBar = ({ onSearch, onFilterChange }: SearchBarProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'learning', label: 'Learning' },
    { id: 'tools', label: 'Tools' },
    { id: 'ctf', label: 'CTF' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ];

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="mb-12 space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search resources..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-black/40 border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500/50 text-white placeholder-gray-400"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterClick(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeFilter === category.id
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                : 'bg-black/40 text-gray-400 border border-blue-500/20 hover:border-blue-500/40'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
