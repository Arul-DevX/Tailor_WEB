import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useAOS() {
  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 600, // Faster animations
      once: false, // Allow animations to repeat
      offset: 100,
      disable: false, // Enable on all devices
      mirror: true, // Enable animations when scrolling up
      easing: 'ease-out',
      anchorPlacement: 'top-bottom', // Trigger animation when top of element hits bottom of window
    });

    // Handle scroll events
    const handleScroll = () => {
      AOS.refresh();
    };

    // Throttle scroll events
    let timeoutId: number;
    const throttledScroll = () => {
      if (!timeoutId) {
        timeoutId = window.setTimeout(() => {
          handleScroll();
          timeoutId = 0;
        }, 20);
      }
    };

    window.addEventListener('scroll', throttledScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);
}