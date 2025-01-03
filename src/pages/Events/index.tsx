import { useState } from 'react';
import { events } from '../../Data/events';
import EventCard from '../../components/events/EventCard';
import Button from '../../components/ui/Button';
import { Calendar, History } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = events.filter((event) => event.type === activeTab);

  return (
    <div className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Events
        </h1>

        {/* Tab buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === 'upcoming' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('upcoming')}
          >
            <Calendar className="w-4 h-4" />
            Upcoming Events
          </Button>
          <Button
            variant={activeTab === 'past' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('past')}
          >
            <History className="w-4 h-4" />
            Past Events
          </Button>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-gray-400 py-12">
            No {activeTab} events found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
