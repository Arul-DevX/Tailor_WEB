import React from 'react';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '1000+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction' }
];

export default function AboutStats() {
  return (
    <div className="grid grid-cols-3 gap-8 py-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-rose-600">{stat.value}</p>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}