'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FienWaterHeroSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/fien-water-images/hero-section/fien-water-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" />
      </div>

      {/* Large FIEN Text Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {/* <Image
          src="/fien-water-images/hero-section/fien-logo-zoomed.png"
          alt="Fien Water Hero Text"
          width={900}
          height={500}
          priority
        /> */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white/20 text-6xl md:text-8xl font-extrabold tracking-tighter backdrop-blur-sm px-4 py-2 rounded-xl inline-block text-center select-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)',
            fontFamily: 'Tom',
            // textShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
          }}
        >
          Introducing Fien Water
        </motion.h1>
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

