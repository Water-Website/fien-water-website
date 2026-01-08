'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NaturePuritySection() {
  const [isHovered, setIsHovered] = useState(false);

  const leftItems = [
    {
      title: 'Alkaline',
      symbol: 'pH',
      description: 'Naturally balances body acidity and promotes better hydration',
      delay: 0.8
    },
    {
      title: 'Calcium',
      symbol: 'Ca',
      description: 'Strengthens bones and supports active body movement.',
      delay: 1.2
    },
    {
      title: 'Magnesium',
      symbol: 'Mg',
      description: 'Enhances energy levels and supports a calm, focused mind',
      delay: 1.6
    }
  ];

  const rightItems = [
    {
      title: 'Low Sodium',
      symbol: 'Na',
      description: 'Helps maintain healthy blood pressure and fluid balance.',
      delay: 1.0
    },
    {
      title: 'Fluoride',
      symbol: 'FL',
      description: 'Curated mix of botanical extracts that detoxify and rejuvenate from within.',
      delay: 1.4
    },
    {
      title: 'Silica',
      symbol: 'Si',
      description: 'Helps maintain healthy blood pressure and fluid balance',
      delay: 1.8
    }
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-6 font-poppins"
        >
          Nature's Purity, Infused with Wellness
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-base lg:text-lg max-w-4xl mx-auto mb-16 font-nunito-sans"
        >
          Every drop of FIEN Water is drawn from deep, pristine aquifers — enriched with essential minerals and herbal infusions that restore balance, vitality, and inner harmony.
        </motion.p>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mb-12 max-w-6xl mx-auto">
          {/* Left Side - Minerals */}
          <div className="flex flex-col space-y-8 items-end pr-4">
            {leftItems.map((item, index) => (
              <motion.div
                key={item.symbol}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="flex items-start gap-4 max-w-sm"
              >
                {/* Text Content - Right Aligned */}
                <div className="text-right">
                  <h3 className="font-bold text-lg mb-1 font-poppins text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-nunito-sans">{item.description}</p>
                </div>
                
                {/* Circle with Symbol */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#C8E65E] border-4 border-[#05472A] flex items-center justify-center">
                  <span className="text-[#05472A] font-bold text-xl font-poppins">{item.symbol}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Image with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative px-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gray-50">
              {/* Before Hover Image */}
              <Image
                src="/fien-water-images/wellness/wellness-before-hover.png"
                alt="FIEN Water Wellness"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              
              {/* After Hover Image */}
              <Image
                src="/fien-water-images/wellness/wellness-after-hover.png"
                alt="FIEN Water Wellness Hover"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Minerals */}
          <div className="flex flex-col space-y-8 items-start pl-4">
            {rightItems.map((item, index) => (
              <motion.div
                key={item.symbol}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="flex items-start gap-4 max-w-sm"
              >
                {/* Circle with Symbol */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#C8E65E] border-4 border-[#05472A] flex items-center justify-center">
                  <span className="text-[#05472A] font-bold text-xl font-poppins">{item.symbol}</span>
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-bold text-lg mb-1 font-poppins text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-nunito-sans">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 text-sm lg:text-base max-w-6xl mx-auto mb-8 leading-relaxed font-nunito-sans"
        >
          Sourced from the depths of protected underground aquifers, FIEN Water is naturally infused with vital minerals and herbal essences that nurture the body and mind. Each drop travels through layers of earth, absorbing nature's finest elements — from skin-revitalizing silica to bone-strengthening calcium and antioxidant-rich alkaline pH. Enriched with our signature blend of herbal infusions, FIEN goes beyond hydration — it restores balance, enhances vitality, and connects you back to nature's purest form of wellness.
        </motion.p>

        {/* Get in Touch Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="group inline-flex items-center px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300 font-nunito-sans">
            <span>Get in touch with us!</span>
            <svg 
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

