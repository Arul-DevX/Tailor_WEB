import React from 'react';
import LazyImage from '../LazyImage';

const galleryItems = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
    category: 'Traditional',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    category: 'Bridal',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    category: 'Modern',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1505264987448-83038d4272ee?q=80&w=1486&auto=format&fit=crop&q=80&w=800',
    category: 'School uniform',
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-lg"
          data-aos="fade-up"
          data-aos-delay={index * 50} // Reduced delay
        >
          <LazyImage
            src={item.image}
            alt={`Gallery ${item.category}`}
            className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-lg font-medium">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
