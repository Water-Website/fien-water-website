'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const testimonials = [ { id: 1, name: "Emily Thompson", position: "Product Manager, AlphaWorks", testimonial: "Partnering with this team has been one of the best business decisions we've made. Their AI solutions have streamlined our workflows, reduced operational costs, and helped us achieve results faster. The ease of integration and ongoing support has been exceptional.", image: "/testimonials/testimonials-avatar-one.png" }, { id: 2, name: "David Lee", position: "COO, BrightEdge Enterprises", testimonial: "We've never experienced this level of efficiency before. The AI agents have completely transformed how we work, saving countless hours each week. Not only are we able to focus on higher-value tasks, but the overall productivity and morale of our team have improved significantly. It's been a game-changer for us.", image: "/testimonials/testimonials-avatar-two.png" }, { id: 3, name: "James Williams", position: "CEO, BrightEdge Enterprises", testimonial: "I was skeptical at first, but the results speak for themselves. Our processes are now faster, more accurate, and far less labor-intensive. What impressed me most was how intuitive and user-friendly the platform is, ensuring our team quickly adapted without any disruption. Highly recommended.", image: "/testimonials/testimonials-avatar-three.png" } ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

 // Auto-scroll every 1 second
useEffect(() => {
  // if (isPaused) return;

  intervalRef.current = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, 2000); // 1 second

  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
}, [testimonials.length]);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
        <motion.div className="text-center mb-2" variants={fadeUp}>
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-gray-600 text-sm tracking-wider border-b border-cyan-400 pb-1 font-nunito-sans">
              Testimonials
            </span>
          </div>
          <h2 className="text-gray-900 mb-3 font-bold font-nunito-sans"
            style={{ fontSize: '48px', fontWeight: 900, lineHeight: '110%', letterSpacing: '-1px' }}>
            What Customers Say About
            <br /> Our Company
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-gray-600 max-w-5xl mx-auto text-center font-nunito-sans mb-8"
          style={{ fontSize: '16px', fontWeight: 500, lineHeight: '140%' }}
          variants={fadeUp}
        >
          From corporate offices to retail spaces, we've helped top brands create impactful visibility
          through creative product marketing.
        </motion.p>

        {/* Carousel Section */}
        <motion.div
          className="relative"
          // onMouseEnter={() => setIsPaused(true)}
          // onMouseLeave={() => setIsPaused(false)}
          variants={fadeUp}
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
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100">
                      <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-gray-700 text-center font-nunito-sans mb-6"
                      style={{ fontSize: '16px', fontWeight: 400, lineHeight: '140%', letterSpacing: '0px' }}>
                      {testimonial.testimonial}
                    </p>
                    <div className="text-center">
                      <h4 className="text-gray-900 font-bold font-nunito-sans"
                        style={{ fontSize: '18px', fontWeight: 700 }}>{testimonial.name}</h4>
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
        <motion.div className="text-center mt-1" variants={fadeUp}>
          <button
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
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
