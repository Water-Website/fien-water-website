'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';

export default function FloatingRestartButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTarget = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTarget}
          className="fixed bottom-10 right-10 z-[9999] group"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1]
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex items-center justify-center w-14 h-14 bg-black/90 backdrop-blur-md border border-white/20 rounded-full hover:bg-black transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] group-hover:border-white/40">
            <IconArrowUp
              className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-500 ease-out"
              stroke={2.5}
            />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="bg-black/90 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-2xl">
              Back to Top
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
