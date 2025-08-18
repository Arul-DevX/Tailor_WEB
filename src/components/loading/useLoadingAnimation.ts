import { useState, useEffect } from 'react';

export default function useLoadingAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minLoadingTime = 1500; // 1.5 seconds minimum loading time
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsVisible(false);
      }, remainingTime);
    };

    // Handle page load
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', hideLoader);
    };
  }, []);

  return { isVisible };
}