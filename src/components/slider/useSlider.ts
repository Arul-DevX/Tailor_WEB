import { useState, useEffect, useCallback } from 'react';
import { sliderImages } from './SliderData';

export function useSlider() {
  const [position, setPosition] = useState(0);

  const moveSlider = useCallback(() => {
    setPosition(prev => {
      // When we reach the end of the first set of images
      if (prev <= -(100 * (sliderImages.length - 1))) {
        // Jump back to start
        return 0;
      }
      // Move to next image
      return prev - 100;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      moveSlider();
    }, 5000); // Wait 5 seconds before moving to next image

    return () => clearInterval(timer);
  }, [moveSlider]);

  return { position, sliderImages };
}