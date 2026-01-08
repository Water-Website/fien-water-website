'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

export default function OurCupsSection() {
  const [hovered, setHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#E5E5E5] py-12 overflow-hidden">
      {/* Left side decorative image */}
      <div className="absolute top-40 left-8 z-10">
        <Image
          src="/services-tab/our-cups/cups-side-image.png"
          alt="Cups side decoration"
          width={250}
          height={200}
          className="opacity-90"
        />
      </div>

      {/* Bottom right decorative image */}
      <div className="absolute bottom-0 right-8 z-10">
        <Image
          src="/services-tab/our-cups/cups-bottom-image.png"
          alt="Cups bottom decoration"
          width={300}
          height={400}
          className=""
        />
      </div>

      <div className="container mx-auto px-8 relative z-20">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-extrabold text-gray-900 font-poppins"
          >
            Customised Cups
          </motion.h2>

          {/* Main cups image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Fixed container to prevent layout shifts */}
            <div 
              className="relative cursor-pointer flex items-center justify-center"
              style={{ 
                width: '700px', 
                height: '400px' // Fixed dimensions
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Default state image */}
              <motion.img
                src={"/services-tab/our-cups/cups-default.png"}
                alt="Customised Cups Default"
                className="absolute inset-0 w-full h-full object-contain"
                animate={{ 
                  opacity: hovered ? 0 : 1,
                  scale: hovered ? 0.9 : 1
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25,
                  opacity: { duration: 0.3 }
                }}
              />
              
              {/* Hover state image */}
              <motion.img
                src={"/services-tab/our-cups/cups-on-hover.png"}
                alt="Customised Cups Hover"
                className="absolute inset-0 w-full h-full object-contain"
                animate={{ 
                  opacity: hovered ? 1 : 0,
                  scale: hovered ? 1.5 : 0.9
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25,
                  opacity: { duration: 0.3 }
                }}
              />
              
              {/* Subtle shadow effect */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-coffee-muted rounded-full blur-sm"
                animate={{ 
                  opacity: hovered ? 0.4 : 0.2,
                  scale: hovered ? 1.2 : 1
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25
                }}
              />
            </div>
          </motion.div>

          {/* Content section */}
          <div className="max-w-4xl space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed font-nunito-sans" 
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '0px'
                }}
              >
                At FIEN, we believe that everyday items have the power to create extraordinary brand
                connections. Our custom-branded water bottles are more than just containers — they are a
                reflection of your brand's identity, carried into people's daily routines. Whether at
                the gym, in the office, or on the go, our bottles keep your brand visible, memorable,
                and trusted.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-nunito-sans"
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  letterSpacing: '0px'
                }}
              >
                Crafted with high-quality materials and designed for durability, our bottles
                seamlessly blend function with style. Every sip becomes a subtle brand reminder,
                ensuring your message travels wherever your audience goes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-nunito-sans"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}>
                <span>Get in touch with us</span>
                <div className="relative w-5 h-5 ml-2">
              <IconArrowRight
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered
                    ? 'opacity-0 transform translate-x-1 -translate-y-1'
                    : 'opacity-100 transform translate-x-0 translate-y-0'
                }`}
              />
              <IconArrowUpRight
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered
                    ? 'opacity-100 transform translate-x-0 translate-y-0'
                    : 'opacity-0 transform -translate-x-1 translate-y-1'
                }`}
              />
            </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
