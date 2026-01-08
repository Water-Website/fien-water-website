'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GetInTouchSection() {
  // Column 1 Images (Fastest)
  const column1Images = [
    '/fien-water-images/get-in-touch/frame-one/frame-one-1.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-2.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-3.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-4.png',
  ];

  // Column 2 Images (Medium Speed)
  const column2Images = [
    '/fien-water-images/get-in-touch/frame-two/frame-two-1.png',
    '/fien-water-images/get-in-touch/frame-two/frame-two-2.png',
    '/fien-water-images/get-in-touch/frame-two/frame-two-3.png',
    '/fien-water-images/get-in-touch/frame-two/frame-two-4.png',
  ];

  // Column 3 Images (Slowest)
  const column3Images = [
    '/fien-water-images/get-in-touch/frame-one/frame-one-1.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-2.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-3.png',
    '/fien-water-images/get-in-touch/frame-one/frame-one-4.png',
  ];

  return (
    <section className="min-h-screen bg-[#F8F8F8] overflow-hidden relative">
      <div className="container mx-auto px-8 py-20">
        <div className="flex gap-16 items-start ">
          {/* Left Side - Text Content */}
          <div className="w-1/2 max-w-xl pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-[#05472A] mb-6 font-poppins"
            >
              Designed for the Modern, Mindful Consumer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-6 font-nunito-sans"
            >
              FIEN Water is crafted for those who see hydration as more than a necessity. With
              subtle herbal infusions and natural purity, each bottle delivers a refreshing
              experience that nurtures both body and mind.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 mb-8 font-nunito-sans"
            >
              Thoughtfully packaged in sleek, recyclable bottles, FIEN fits seamlessly into your
              daily routine — from gym sessions and workdays to social gatherings and retail
              shelves. It's not just water; it's a wellness companion built for a conscious,
              modern lifestyle.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group inline-flex items-center px-8 py-3 bg-[#05472A] text-white rounded-full font-medium hover:opacity-90 transition-opacity font-nunito-sans"
            >
              <span>Get in touch with us!</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Right Side - Diagonal Scrolling Frames */}
          <div className="flex-1 flex gap-4 h-[1100px] overflow-hidden absolute -top-20 w-[750px] -right-24 rotate-30">
            {/* First Column - Fastest - Top Position */}
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll-fast">
                {[...column1Images, ...column1Images, ...column1Images].map((image, index) => (
                  <div
                    key={`col1-${index}`}
                    className="mb-3 rounded-xl overflow-hidden transform"
                  >
                    <Image
                      src={image}
                      alt={`FIEN Water ${index + 1}`}
                      width={900}
                      height={350}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Column - Medium Speed - Middle Position */}
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll-medium">
                {[...column2Images, ...column2Images, ...column2Images].map((image, index) => (
                  <div
                    key={`col2-${index}`}
                    className="mb-4 rounded-xl overflow-hidden transform"
                  >
                    <Image
                      src={image}
                      alt={`FIEN Water ${index + 1}`}
                      width={900}
                      height={350}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Third Column - Reverse Scroll - Bottom Position */}
            <div className="flex-1 overflow-hidden h-full">
              <div className="animate-scroll-reverse -mt-[1500px]">
                {[...column3Images, ...column3Images, ...column3Images, ...column3Images].map((image, index) => (
                  <div
                    key={`col3-${index}`}
                    className="mb-4 rounded-xl overflow-hidden transform"
                  >
                    <Image
                      src={image}
                      alt={`FIEN Water ${index + 1}`}
                      width={900}
                      height={350}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

