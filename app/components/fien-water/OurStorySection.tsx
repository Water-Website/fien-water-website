'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RiCloudFill, RiDropFill, RiLeafFill, RiRecycleFill } from 'react-icons/ri';
import { RiBardFill, RiSunFill } from '@remixicon/react';

export default function OurStorySection() {
  const timelineItems = [
    {
      side: 'left',
      title: "Ancient Wisdom Meets Modern Technology",
      description: "We combine herbal wellness practices with precision science, followed by strict infusion-to-packaging quality control.",
      icon: (
        <RiLeafFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
    {
      side: 'right',
      title: 'Hydration is self-care',
      description: "Fien is a  space where nature, science, and self-care come together. With every drop, you rediscover hydration as something fresh, honest, and deeply human.",
      icon: (
        <RiDropFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
    {
      side: 'left',
      title: 'Sustainability at the Core',
      description: 'We are Eco-conscious and hold lightweight packaging , having reduced environmental footprint without compromising strength or aesthetics. We bring purity with purpose.',
      icon: (
        <RiCloudFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
    {
      side: 'right',
      title: 'Richness we preserve',
      description: "We turn hydration into a moment of mindful balance by bringing a blend which helps in healing and vitality.",
      icon: (
       <RiSunFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
    {
      side: 'left',
      title: 'Purity You Trust',
      description: 'How do we stand by purity? State-of-the-art filtration, UV sterilization for safety and 100% contactless bottling',
      icon: (
        <RiRecycleFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
    {
      side: 'right',
      title: 'Designed with Meaning',
      description: "Where aesthetics serve a deeper cultural, emotional and functional purpose.",
      icon: (
        <RiBardFill className="w-7 h-7 text-[#05472A]" />
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-[#FAFFE7] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6 font-nunito-sans" style={{
            fontWeight: '900',
            fontSize: '46px',
            lineHeight: '100%',
            letterSpacing: '0px'
          }}>
            The story behind Fien Water
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-nunito-sans leading-relaxed" style={{
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '100%',
            letterSpacing: '0px'
          }}>
            It's not just water, it's an experience of pristine balance and clarity.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 rounded-md transform -translate-x-1/2 h-full w-3 bg-[#CCFF00] hidden lg:block border-5 border-[#05472A]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  item.side === 'left' 
                    ? 'lg:flex-row flex-col' 
                    : 'lg:flex-row-reverse flex-col'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 w-full ${
                  item.side === 'left' ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                } text-left`}>
                  <h3 className="text-2xl font-black text-[#1a3a1a] mb-3 font-nunito-sans" style={{ 
                    fontSize: '22px',
                    fontWeight: '900',
                    lineHeight: '100%',
                    letterSpacing: '0px'
                   }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-nunito-sans leading-relaxed" style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '100%',
                    letterSpacing: '0px'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative flex items-center justify-center my-8 lg:my-0">
                  <div className="w-15 h-15 rounded-full bg-[#C5E639] border-4 border-[#05472A] flex items-center justify-center z-10 shadow-lg">
                    <div className="text-[#1a3a1a]">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="lg:w-5/12 w-full hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

