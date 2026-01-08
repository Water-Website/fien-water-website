'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IconArrowBackUp, IconArrowUp } from '@tabler/icons-react';

interface RestartButtonProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export default function RestartButton({ 
  position = 'bottom-right'
}: RestartButtonProps) {
  
  const scrollToFirstTab = () => {
    // Look for the ServicesTabSection element
    const servicesTabSection = document.querySelector('[data-section="services-tab"]');
    const firstTabSection = document.querySelector('[data-section="home-tab"]');
    const fienWaterSection = document.querySelector('[data-section="fien-water-hero"]');
    const contactUsSection = document.querySelector('[data-section="contact-us"]');

    if (servicesTabSection) {
      servicesTabSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (firstTabSection) {
      firstTabSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (fienWaterSection) {
      fienWaterSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else if (contactUsSection) {
      contactUsSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      
      // Fallback: scroll to top if element not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const positionClasses = {
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8'
  };

  return (
    <motion.button
      onClick={scrollToFirstTab}
      className={`absolute ${positionClasses[position]} z-30 group`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center justify-center w-26 h-9 bg-black/80 backdrop-blur-md border border-gray-300/50 rounded-3xl hover:bg-black/90 transition-all duration-300 shadow-xl hover:shadow-2xl gap-1">
        <IconArrowBackUp 
          className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" 
        />
        <span className="text-white text-xs font-medium">Restart</span>
      </div>
    </motion.button>
  );
}