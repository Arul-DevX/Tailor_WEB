import React from 'react';
import ClassList from './ClassList';
import { classes } from './classData';

export default function TailoringClasses() {
  return (
    <section id='class' className="py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailoring Classes</h2>
          <p className="text-gray-600">Learn the art of tailoring from experienced professionals</p>
        </div>
        <ClassList classes={classes} />
      </div>
    </section>
  );
}