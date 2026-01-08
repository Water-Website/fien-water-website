'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SipSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Default Image - sip-before.png */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/fien-water-images/sip/sip-before.png"
            alt="FIEN Water Bottle"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Hover Image - sip-after-hover.png */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/fien-water-images/sip/sip-after-hover.png"
            alt="FIEN Water Bottle Hovered"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-nutino-sans" style={{
              fontWeight: '900',
              fontSize: '56px',
              lineHeight: '100%',
              letterSpacing: '0px'
            }}
          >
            It Took Nature Years to Perfect.{' '}
            <span className="block mt-2">
              FIEN Brings It to You in Every Sip.
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

