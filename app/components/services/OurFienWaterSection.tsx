'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

export default function OurFienWaterSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: "/services-tab/our-fien-water/fien-1.png",
      alt: "Fien Water Image One"
    },
    {
      src: "/services-tab/our-fien-water/fien-2.png", 
      alt: "Fien Water Image Two"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds transition

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen bg-[#05472A] p-2">
      {/* Background Vector - Left Side Only */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 z-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/services-tab/our-fien-water/fien-water-vector.png"
            alt="Fien Water Background Vector"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8 text-center lg:text-left"
          >
            <div className="relative">
              {/* Quote Image positioned at top */}
              <div className="absolute -top-5 left-70 z-10">
                <Image
                  src="/services-tab/our-fien-water/quote.png"
                  alt="Quote decoration"
                  width={80}
                  height={60}
                  className="inline-block"
                />
              </div>
              
              <h2 className="font-poppins leading-tight relative"
              style={{
                fontWeight: '700',
                fontSize: '125px',
                lineHeight: '100%',
                letterSpacing: '2px'
              }}
              >
                {/* Green shadow layer (back) */}
                <div 
                  className="absolute top-0 left-0"
                  style={{
                    color: '#9ACD32',
                    fontWeight: '700',
                    fontSize: '125px',
                    lineHeight: '100%',
                    letterSpacing: '2px',
                    transform: 'translate(3px, 3px)'
                  }}
                >
                  FIEN
                </div>
                
                {/* White text layer (front) */}
                <div 
                  className="relative z-10"
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '125px',
                    lineHeight: '100%',
                    letterSpacing: '2px'
                  }}
                >
                  FIEN
                </div>
                
                <div className="relative mt-2 block">
                  {/* Green shadow layer (back) */}
                  <div 
                    className="absolute top-0 left-0"
                    style={{
                      color: '#9ACD32',
                      fontWeight: '700',
                      fontSize: '125px',
                      lineHeight: '100%',
                      letterSpacing: '2px',
                      transform: 'translate(3px, 3px)'
                    }}
                  >
                    Water
                  </div>
                  
                  {/* White text layer (front) */}
                  <div 
                    className="relative z-10 font-poppins"
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '125px',
                      lineHeight: '100%',
                      letterSpacing: '2px'
                    }}
                  >
                    Water
                  </div>
                </div>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed font-nunito-sans max-w-2xl">
              We don't just provide water, we cater to your wellness. Each water bottle we supply, each sip you intake is infused with gentle herbal notes that refresh your senses and restore balance from within.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white font-nunito-sans" 
              style={{
                fontSize: '16px',
                fontWeight: 900,
                lineHeight: '24px',
                letterSpacing: '0px'
              }}
              >Why Choose this WELLNESS?</h3>

              <ul className="">
                {[
                  'Infused with Nature: Blended with subtle herbal essences to rejuvenate both body and mind.',
                  'Pure, Tested, Trusted: Each batch is quality-tested to ensure uncompromised freshness and purity.',
                  'Wellness Meets Lifestyle: Designed for those who see hydration as part of a conscious, elevated routine, not just a habit.'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 2.0 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start text-white font-nunito-sans"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 flex-shrink-0" />
                    <span className="text-xs font-nunito-sans"
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '0px'
                    }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start"
            >
              <a href="/fien-water">
                <button className="group inline-flex items-center px-8 py-4 border text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 font-nunito-sans shadow-lg hover:shadow-xl">
                  <span>Go to FIEN Water</span>
                  <span className="relative w-5 h-5 ml-2">
                    {/* Default Arrow - Right */}
                    <IconArrowRight
                      className="absolute w-5 h-5 transition-all duration-200 opacity-100 group-hover:opacity-0"
                    />
                    {/* Hover Arrow - Up Right */}
                    <IconArrowUpRight
                      className="absolute w-5 h-5 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </span>
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Section with Transitions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0"
          >
            <div className="relative w-[700px] h-[700px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-xl"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    fill
                    className="object-contain rounded-xl drop-shadow-2xl h-full w-full"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Decorative Image */}
      <div className="absolute bottom-0 right-40 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/services-tab/our-fien-water/fien-water-bottom.png"
            alt="Fien Water Bottom Decoration"
            width={200}
            height={400}
            className="opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
