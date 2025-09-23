'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  IconArrowRight, 
  IconArrowUpRight, 
  IconCaretLeftFilled, 
  IconCaretRightFilled 
} from '@tabler/icons-react';

const OurWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const lastManualChangeRef = useRef(Date.now());

  const workItems = [ { id: 1, category: "Brand Category 1", title: "Brewing Brands with Every Sip", description: "We've collaborated with leading café chains like Cafe Coffee Day, Chai Point, and Blue Tokai to create branded tea and coffee cups that engage customers in their daily routines.", additionalText: "Every sip becomes a brand reminder, turning casual moments into powerful impressions that stay with people long after their coffee break.", image: "/work/our-work-one.png" }, { id: 2, category: "Brand Category 2", title: "Branding Beyond the Boardroom", description: "Professional spaces are where ideas, deals, and innovation thrive. By partnering with co-working leaders like WeWork, Innov8, and Awfis, we ensure brands are integrated into these environments through creatively designed products.", additionalText: "This approach keeps businesses visible, relatable, and part of everyday work-life interactions.", image: "/work/our-work-two.png" }, { id: 3, category: "Brand Category 3", title: "Refreshing Brands, One Bottle at a Time", description: "Retail and wellness brands like Himalaya, Dabur, and Patanjali trust our herbal water bottles and daily-use essentials for consistent brand recall.", additionalText: "Each product serves as a subtle yet effective marketing tool, ensuring visibility while aligning with the healthy, refreshing lifestyles these brands promote.", image: "/work/our-work-three.png" }, { id: 4, category: "Brand Category 4", title: "Making Brands Shine at Every Event", description: "High-impact events call for high-visibility branding. Collaborating with platforms like NASSCOM, TiE Delhi-NCR, and Startup India, we’ve designed creative product marketing strategies that ensure brands stand out.", additionalText: "From seminars to product launches, we help make every moment a brand-building opportunity.", image: "/work/our-work-four.png" } ];

  // Auto-scroll functionality
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedRef.current && Date.now() - lastManualChangeRef.current > 2500) {
        setCurrentIndex((prev) => (prev + 1) % workItems.length);
      }
    }, 2500); // 2.5 seconds for balanced timing

    return () => clearInterval(interval);
  }, [workItems.length]);

  const currentItem = workItems[currentIndex];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="our-work-section" className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Container with stagger animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Section */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="text-gray-900 text-sm tracking-wider border-b border-cyan-400 pb-1 inline-block">
              Our Work
            </span>
          </motion.div>

          {/* Main Heading + Description */}
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 
              className="text-gray-900 mb-4 font-bold font-nunito-sans"
              style={{ fontSize: '46px', fontWeight: 900, lineHeight: '100%' }}
            >
              Brands We've Worked With..
            </h2>
            <p className="text-gray-600 max-w-5xl mx-auto font-nunito-sans"
              style={{ fontSize: '16px', fontWeight: 300, lineHeight: '140%' }}
            >
              From corporate offices to retail spaces, we've helped top brands create impactful visibility through creative product marketing.
            </p>
          </motion.div>

          {/* Carousel Section */}
          <motion.div 
            variants={fadeUp} 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                lastManualChangeRef.current = Date.now();
                setCurrentIndex((prev) => (prev - 1 + workItems.length) % workItems.length);
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 z-20 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all"
            >
              <IconCaretLeftFilled className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() => {
                lastManualChangeRef.current = Date.now();
                setCurrentIndex((prev) => (prev + 1) % workItems.length);
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 z-20 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all"
            >
              <IconCaretRightFilled className="w-6 h-6 text-gray-900" />
            </button>

            {/* Black Container */}
            <div className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="flex items-center justify-between">
                
                {/* Image */}
                <motion.div 
                  key={currentItem.image}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                  className="w-[45%] relative"
                >
                  <div className="aspect-[5/5] relative rounded-2xl overflow-hidden">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      fill
                      className="object-cover"
                      priority={currentIndex === 0}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      quality={85}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-[55%] pl-12">
                  {/* Category Badge */}
                  <motion.div 
                    key={`${currentItem.id}-category`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.15 }}
                    className="inline-block mb-6"
                  >
                    <div className="relative">
                      <div className="corner-gradient-bg">
                        <span className="relative z-10 px-4 py-2 text-white text-sm font-medium block">
                          {currentItem.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    key={`${currentItem.id}-title`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.3 }}
                    className="text-white mb-6 font-nunito-sans"
                    style={{ fontSize: '24px', fontWeight: 900, lineHeight: '100%', letterSpacing: '0px' }}
                  >
                    {currentItem.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.div 
                    key={`${currentItem.id}-description`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.45 }}
                    className="space-y-4 mb-12 font-nunito-sans" 
                    style={{ fontSize: '16px', fontWeight: 400, lineHeight: '140%', letterSpacing: '0px', wordSpacing: '2px' }}
                  >
                    <p className="text-white/90 text-base leading-relaxed">
                      {currentItem.description}
                    </p>
                    <p className="text-white/80 text-base leading-relaxed" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '140%', letterSpacing: '0px', wordSpacing: '2px' }}>
                      {currentItem.additionalText}
                    </p>
                  </motion.div>

                  {/* Know More Button */}
                  <motion.button 
                    key={`${currentItem.id}-button`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut", delay: 0.6 }}
                    className="inline-flex items-center px-4 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                  >
                    Know More
                    <div className="relative w-5 h-5 ml-1">
                      <IconArrowRight 
                        className={`w-5 h-5 absolute transition-all duration-200 ${
                          isButtonHovered 
                            ? 'opacity-0 transform translate-x-1 -translate-y-1' 
                            : 'opacity-100 transform'
                        }`} 
                      />
                      <IconArrowUpRight 
                        className={`w-5 h-5 absolute transition-all duration-200 ${
                          isButtonHovered 
                            ? 'opacity-100' 
                            : 'opacity-0 transform -translate-x-1 translate-y-1'
                        }`} 
                      />
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
