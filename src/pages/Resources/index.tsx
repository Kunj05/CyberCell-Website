import { useState, useMemo } from 'react';
import { resources } from '../../Data/resources';
import SearchBar from './SearchBar';
import ResourceCard from './ResourceCard';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        resource.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        categoryFilter === 'all' || resource.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Learning Resources
        </h1>

        <SearchBar
          onSearch={setSearchQuery}
          onFilterChange={setCategoryFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
