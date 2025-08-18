import { useState, useEffect } from 'react';
import { SliderImage } from '../types';

export function useImageTransition(images: SliderImage[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [images.length]);

  return { currentIndex };
}