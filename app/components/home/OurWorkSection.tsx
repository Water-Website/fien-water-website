'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
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
  const lastManualChangeRef = useRef<number>(0);

  useEffect(() => {
    lastManualChangeRef.current = Date.now();
  }, []);

  const workItems = [ 
    { 
      id: 1, 
      category: "Brand Category 1", 
      title: "MEZUCI ITALIA", 
      description: "Mezucci Italia, known for its finely crafted stainless-steel bathroom accessories and luxury finish hardware, partnered with us to extend their elegant identity into branded hydration.", 
      additionalText: "We designed and executed premium custom bottles that carried the same refined aesthetics and quality Mezucci is celebrated for, ensuring a seamless brand extension.", 
      image: "/home-tab/work/mezuci.png" 
    }, 
    { 
      id: 2, 
      category: "Brand Category 2", 
      title: "THERMOPLASTICS TECHNOLOGIES", 
      description: "Thermoplastic Technologies, a company recognised for its high-precision injection-moulded components and robust plastic engineering capabilities, collaborated with us to translate their technical excellence into a branded bottle.", 
      additionalText: "We delivered a crisp, industrial-inspired design with flawless execution—reflecting their commitment to accuracy, performance and dependable manufacturing quality.", 
      image: "/home-tab/work/thermo.png" 
    }, 
    { 
      id: 3, 
      category: "Brand Category 3", 
      title: "THE CAKE VANITY", 
      description: "The Cake Vanity, known for its beautifully crafted cakes and indulgent desserts, partnered with us to extend their playful, pastel-themed identity into branded hydration.",
      additionalText: "We designed and executed bottles that capture their sweet, welcoming aesthetic—bringing their signature charm and bakery warmth into a neatly refined, professional brand expression.", 
      image: "/home-tab/work/cake.png" 
    }, 
  ];

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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const fadeUp: Variants = {
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
             Across Industries. Across sectors.
            </h2>
            <p className="text-gray-600 max-w-5xl mx-auto font-nunito-sans"
              style={{ fontSize: '16px', fontWeight: 300, lineHeight: '140%' }}
            >
              From established corporate names to fast-growing retail stores, we’ve partnered with brands across scales and sectors.
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
                  {/* <motion.div 
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
                  </motion.div> */}

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
                  <a href='/fien-water' 
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
                  </a>
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
