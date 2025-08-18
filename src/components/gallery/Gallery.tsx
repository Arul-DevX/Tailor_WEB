import React from 'react';
import GalleryGrid from './GalleryGrid';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of handcrafted designs and satisfied customers
          </p>
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}