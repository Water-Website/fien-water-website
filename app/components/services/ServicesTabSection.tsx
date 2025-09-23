'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from './Header';
import GlowBackground from './Glowbackground';

export default function ServicesPage() {
  return (
    <GlowBackground>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/services-tab/header-bg.png" // replace with your actual background image
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0" /> {/* Dark overlay */}
        </div>

        {/* Header */}
        <header className="relative z-20">
          <Header />
        </header>

        {/* Bottom Left Vector */}
        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/services-tab/hero-section/hero-section-vector.png"
            alt="Hero Section Vector"
            width={650}
            height={600}
            className=""
          />
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col justify-center items-start max-w-6xl px-32 h-[90vh]">
        {/* Animated Title */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-white font-extrabold tracking-tight font-poppins justify-start items-start mb-2"
            style={{ fontSize: '60px', lineHeight: '120%', letterSpacing: '2px', fontWeight: 900 }}
          >
          <span className="block mb-5">Comprehensive Design</span>
          <span className="block mb-5">Development Solutions for</span>
          <span className="block mb-5">Impactful Digital</span>
          <span className="block">Experiences</span>
          </motion.h1>

          {/* & Symbol positioned to connect the first two lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.2 }}
            className="absolute hover:-rotate-30 transition-all duration-300"
            style={{
              top: '-80px', // Adjust positioning to span between the first two lines
              right: '-140px', // Position to the right of the text
              transform: 'translateY(-50%)'
            }}
          >
            <Image
              src="/services-tab/hero-section/and.png"
              alt="And symbol"
              width={270}
              height={270}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.0 }}
          className="mt-6 text-gray-200 font-nunito-sans max-w-3xl"
          style={{ fontSize: '18px', lineHeight: '28px' }}
        >
          At FIEN, we believe that everyday items have the power to create extraordinary brand
          connections. Our custom-branded water bottles are more than just containers — they are
          a reflection of your brand’s identity, carried into people’s daily routines. Whether at
          the gym, in the office, or on the go, our bottles keep your brand visible, memorable,
          and trusted.
        </motion.p>
        </div>
      </div>
    </GlowBackground>
  );
}
