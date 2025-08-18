import React from 'react';
import ClassCard from './ClassCard';
import { TailoringClass } from './types';

interface ClassListProps {
  classes: TailoringClass[];
}

export default function ClassList({ classes }: ClassListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
      {classes.map((classItem, index) => (
        <div key={classItem.title} data-aos="fade-up" data-aos-delay={index * 100}>
          <ClassCard {...classItem} />
        </div>
      ))}
    </div>
  );
}