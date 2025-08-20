import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'class', 'about', 'services', 'gallery', 'contact', 'booking'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px', // More lenient margins
      threshold: [0, 0.1, 0.5] // Multiple thresholds for better detection
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0;
      let activeEntry = null;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeEntry = entry;
        }
      });

      // Update active section if we have a valid entry
      if (activeEntry && activeEntry.intersectionRatio > 0) {
        setActiveSection(activeEntry.target.id);
      }
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Handle scroll to detect when at top of page
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // If we're at the very top, set to home
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Check which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if current scroll position is within this section
          if (scrollY >= elementTop - 200 && scrollY < elementBottom - 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return activeSection;
}