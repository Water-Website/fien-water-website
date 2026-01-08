'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowBackUp } from '@tabler/icons-react';

export default function FloatingRestartButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTarget = () => {
    // Look for home-tab first, then services-tab as fallback
    const homeSection = document.querySelector('[data-section="home-tab"]');
    const servicesSection = document.querySelector('[data-section="services-tab"]');

    const targetSection = homeSection || servicesSection;

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Final fallback: scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 100px (reduced threshold)
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Set initial visibility
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTarget}
          className="fixed bottom-6 right-6 z-[9999] group"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ zIndex: 9999 }}
        >
          <div className="flex items-center justify-center w-32 h-12 bg-black backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-2xl hover:shadow-black/50 gap-2">
            <IconArrowBackUp
              className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300"
            />
            <span className="text-white text-sm font-medium">Restart</span>
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
              Back to beginning
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
