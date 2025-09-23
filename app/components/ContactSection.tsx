'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

const ContactSection = () => {
  const [showButton, setShowButton] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startAnimation) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    const sectionElement = document.getElementById('contact-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, [startAnimation]);

  return (
    <section id="contact-section" className="min-h-screen relative group">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/water-bg.png"
          alt="Water Background"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-start px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-5xl">
            {/* Line 1 */}
            <div
              className={`overflow-hidden text-5xl text-white font-bold font-nutino-sans flex flex-col justify-start ${
                startAnimation ? 'animate-typewriter-line1' : 'opacity-0'
              }`}
              style={{ 
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: '130%',
                letterSpacing: '0px'
               }}
            >
              Great design, like water, adapts
            </div>

            {/* Line 2 */}
            <div
              className={`overflow-hidden text-5xl text-white font-bold font-nutino-sans flex flex-col justify-start ${
                startAnimation ? 'animate-typewriter-line2' : 'opacity-0'
              }`}
              style={{ 
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: '130%',
                letterSpacing: '0px'
               }}
            >
              flows, and refreshes every
            </div>

            {/* Line 3 */}
            <div
              className={`overflow-hidden text-5xl text-white font-bold font-nutino-sans flex flex-col justify-start ${
                startAnimation ? 'animate-typewriter-line3' : 'opacity-0'
              }`}
              style={{ 
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: '130%',
                letterSpacing: '0px'
               }}
              onAnimationEnd={() => setShowButton(true)} // trigger button after line 3
            >
              experience.
            </div>

            {/* Contact Button */}
            {showButton && (
              <button
                className="mt-8 inline-flex items-center px-6 py-3 border border-white text-white rounded-full
                           hover:bg-white hover:text-black transition-all duration-500 ease-out transform hover:scale-105 fade-up"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span className="text-lg font-medium mr-3">Contact Us</span>
                <div className="relative w-5 h-5">
                  <IconArrowRight
                    className={`w-5 h-5 absolute transition-all duration-200 ${
                      isButtonHovered
                        ? 'opacity-0 translate-x-1 -translate-y-1'
                        : 'opacity-100 translate-x-0 translate-y-0'
                    }`}
                  />
                  <IconArrowUpRight
                    className={`w-5 h-5 absolute transition-all duration-200 ${
                      isButtonHovered
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : 'opacity-0 -translate-x-1 translate-y-1'
                    }`}
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
