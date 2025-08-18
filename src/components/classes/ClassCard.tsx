import React from 'react';
import { Clock, Users } from 'lucide-react';
import { TailoringClass } from './types';

export default function ClassCard({ title, description, duration, capacity, image }: TailoringClass) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            {capacity}
          </div>
        </div>
      </div>
    </div>
  );
}