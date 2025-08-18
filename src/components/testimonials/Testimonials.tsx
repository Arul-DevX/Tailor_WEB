import React from 'react';
import TestimonialList from './TestimonialList';
import { testimonials } from './testimonialData';

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600">What our clients say about our services</p>
        </div>
        <TestimonialList testimonials={testimonials} />
      </div>
    </section>
  );
}