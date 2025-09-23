'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let currentSection = 0;
    const sections = document.querySelectorAll('.scroll-snap-section');
    const totalSections = sections.length;

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= totalSections) return;
      
      const targetSection = sections[index];
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      isScrolling = true;
      
      if (e.deltaY > 0) {
        // Scrolling down
        currentSection = Math.min(currentSection + 1, totalSections - 1);
      } else {
        // Scrolling up
        currentSection = Math.max(currentSection - 1, 0);
      }
      
      scrollToSection(currentSection);
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        isScrolling = true;
        currentSection = Math.min(currentSection + 1, totalSections - 1);
        scrollToSection(currentSection);
        setTimeout(() => { isScrolling = false; }, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        isScrolling = true;
        currentSection = Math.max(currentSection - 1, 0);
        scrollToSection(currentSection);
        setTimeout(() => { isScrolling = false; }, 1000);
      }
    };

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default SmoothScroll;
