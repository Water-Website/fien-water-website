'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const testimonials = useMemo(() => [
    { 
      id: 1, 
      name: "MEZUCI ITALIA", 
      position: "Rahul Lalwani", 
      testimonial: "Fien translated our aesthetic into beautifully crafted branded bottles and made sure they reached the right touchpoints—client meetings, studio displays and partner interactions. The bottles genuinely elevated our presence. We noticed clients remembering our brand more easily, and several even asked for the bottles themselves. It created the subtle, premium visibility we were aiming for.", 
      image: null 
    }, 
    { 
      id: 2, 
      name: "THERMOPLASTICS TECHNOLOGIES", 
      position: "Ashish Jain", 
      testimonial: "For us, effectiveness mattered more than appearance, and Fien delivered both. The bottles were circulated across our dealer network, factory visits and supplier interactions, creating a surprising wave of recall. We saw more enquiries and faster recognition during discussions simply because people had already seen the bottles. It turned out to be a very efficient branding tool.", 
      image: "/home-tab/testimonials/testimonial-2.png" 
    }, 
    { 
      id: 3, 
      name: "THE CAKE VANITY", 
      position: "Mehak Khurana", 
      testimonial: "Fien helped us turn our themed bottles into a small but powerful marketing win. We distributed them with select orders and at events, and customers instantly picked them up on social media. It brought in new walk-ins, repeat buyers and a noticeable bump in our online engagement. The response was far beyond what we expected for a bakery.", 
      image: "/home-tab/testimonials/testimonial-1.png" 
    }
  ], []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll effect - simplified approach
  useEffect(() => {
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % 3; // Use fixed length of 3
        return next;
      });
    }, 1500); // 1.5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // No dependencies to prevent restart

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + testimonials.length) % testimonials.length;
    switch (position) {
      case 0: // Center
        return { transform: 'translateX(0%) scale(1)', zIndex: 30, opacity: 1 };
      case 1: // Right
        return { transform: 'translateX(60%) scale(0.85)', zIndex: 20, opacity: 0.7 };
      case 2: // Left
        return { transform: 'translateX(-60%) scale(0.85)', zIndex: 20, opacity: 0.7 };
      default:
        return { transform: 'translateX(0%) scale(0.8)', zIndex: 10, opacity: 0.5 };
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between heading -> description -> carousel -> button
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-3 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-2" 
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-gray-600 text-sm tracking-wider border-b border-cyan-400 pb-1 font-nunito-sans">
              Testimonials
            </span>
          </div>
          <h2 className="text-gray-900 mb-3 font-bold font-nunito-sans"
            style={{ fontSize: '48px', fontWeight: 900, lineHeight: '110%', letterSpacing: '-1px' }}>
            Proof, Not Promises
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 max-w-5xl mx-auto text-center font-nunito-sans mb-8"
          style={{ fontSize: '16px', fontWeight: 500, lineHeight: '140%' }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
         Real feedback from clients who’ve trusted us to bring their vision to life.

        </motion.p>

        {/* Carousel Section */}
        <motion.div
          className="relative"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200"
          >
            <IconChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200"
          >
            <IconChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards */}
          <div className="relative h-[600px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="absolute w-[400px] transition-all duration-500 ease-in-out"
                style={getCardStyle(index)}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-[500px] flex flex-col">
                  <div className="flex flex-col items-center mb-3">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 flex items-center justify-center bg-[#DFE5E7]">
                      {testimonial.image ? (
                        <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="w-full h-full object-cover" />
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-12 h-12 text-white fill-current">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-700 text-center font-nunito-sans mb-6"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '140%', letterSpacing: '0px' }}>
                      {testimonial.testimonial}
                    </p>
                    <div className="text-center">
                      <h4 className="text-gray-600 font-semibold font-nunito-sans"
                        style={{ fontSize: '16px', fontWeight: 700 }}>{testimonial.name}</h4>
                      <p className="text-gray-500 font-nunito-sans"
                        style={{ fontSize: '14px', fontWeight: 400 }}>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us Button */}
        <motion.div 
          className="text-center mt-1" 
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <a href="/contact-us"
            className="inline-flex items-center px-4 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Contact Us
            <div className="relative w-5 h-5 ml-2">
              <IconArrowRight
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered ? 'opacity-0 translate-x-1 -translate-y-1' : 'opacity-100'
                }`}
              />
              <IconArrowUpRight
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered ? 'opacity-100' : 'opacity-0 -translate-x-1 translate-y-1'
                }`}
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
