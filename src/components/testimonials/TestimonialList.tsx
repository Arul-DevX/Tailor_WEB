import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from './types';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4 sm:px-0">
      {testimonials.map((testimonial, index) => (
        <div key={testimonial.name} data-aos="fade-up" data-aos-delay={index * 100}>
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
}