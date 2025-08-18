import React from 'react';
import { useImageTransition } from './hooks/useImageTransition';
import { sliderImages } from './SliderData';
import './slider.css';

export default function ImageSlider() {
  const { currentIndex } = useImageTransition(sliderImages);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {sliderImages.map((image, index) => (
        <div
          key={image.id}
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover mt-16"
          />
          <div className="slider-overlay" />
        </div>
      ))}
    </div>
  );
}