'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FienWaterHeroSection() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      default: '/fien-water-images/hero-section/main-first.png',
      hover: '/fien-water-images/hero-section/main-first-on-hover.png',
      alt: 'Fien Water First Image'
    },
    {
      id: 2,
      default: '/fien-water-images/hero-section/main-second.png',
      hover: '/fien-water-images/hero-section/main-second-on-hover.png',
      alt: 'Fien Water Second Image'
    },
    {
      id: 3,
      default: '/fien-water-images/hero-section/main-third.png',
      hover: '/fien-water-images/hero-section/main-third-on-hover.png',
      alt: 'Fien Water Third Image'
    }
  ];

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Large FIEN Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <Image
          src="/fien-water-images/hero-section/fien-logo-zoomed.png"
          alt="Fien Water Hero Text"
          width={900}
          height={500}
          priority
        />
      </div>

      {/* Three Images - Full Width Split */}
      <div className="relative z-10 flex h-full w-full">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            className="relative flex-1 h-full cursor-pointer group"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Default Image */}
            <Image
              src={image.default}
              alt={image.alt}
              fill
              className={`object-cover transition-opacity duration-500 ${
                hoveredImage === image.id ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
            
            {/* Hover Image */}
            <Image
              src={image.hover}
              alt={`${image.alt} - Hover`}
              fill
              className={`object-cover transition-opacity duration-500 ${
                hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
              }`}
              priority
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        ))}
      </div>

      {/* Bottom Text - "Slide Down For Information" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-30"
      >
        <button className="flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors duration-300 group">
          <span className="text-lg font-nunito-sans tracking-wide">
            Slide Down For Information
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </button>
      </motion.div>

      {/* TM Symbol in top right */}
      <div className="absolute top-32 right-12 z-30">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center"
        >
          <span className="text-white/70 text-xl font-bold">TM</span>
        </motion.div>
      </div>
    </section>
  );
}

