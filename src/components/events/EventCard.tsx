import React from 'react';
import { Calendar } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';
import Button from '../ui/Button';
import type { Event } from '../../Data/events';

const EventCard = ({ event }: { event: Event }) => (
  <AnimatedCard>
    <div className="relative mb-4">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">{event.title}</h3>
      
      <div className="flex items-center text-blue-400">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{event.date}</span>
      </div>
      
      <p className="text-gray-400">{event.description}</p>
      
      <Button variant="outline" className="w-full">
        Learn More
      </Button>
    </div>
  </AnimatedCard>
);

export default EventCard;