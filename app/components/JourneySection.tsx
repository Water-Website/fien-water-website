'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const JourneySection = () => {
  // Animation states
  const [showJourneyHeader, setShowJourneyHeader] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showCircles, setShowCircles] = useState([false, false, false, false, false]);
  const [showNumbers, setShowNumbers] = useState([false, false, false, false, false]);
  const [isVisible, setIsVisible] = useState(false);

  const phases = [
    { label: 'Discovery', size: 'w-64 h-64' },
    { label: 'Strategy', size: 'w-80 h-80' },
    { label: 'Concept', size: 'w-64 h-64' },
    { label: 'Design System', size: 'w-96 h-96' },
    { label: 'Production', size: 'w-72 h-72' }
  ];

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('journey-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Sequential animation effect
  useEffect(() => {
    if (isVisible) {
      // 1. Journey header appears first
      setTimeout(() => setShowJourneyHeader(true), 200);
      
      // 2. Main heading appears
      setTimeout(() => setShowHeading(true), 600);
      
      // 3. Workflow diagram container appears
      setTimeout(() => setShowWorkflow(true), 1000);
      
      // 4. Circles appear one by one with staggered timing
      phases.forEach((_, index) => {
        setTimeout(() => {
          setShowCircles(prev => {
            const newShowCircles = [...prev];
            newShowCircles[index] = true;
            return newShowCircles;
          });
        }, 1400 + (index * 300)); // Start at 1400ms, then 200ms delay between each circle
      });
      
      // 5. Numbers appear one by one (slightly after their corresponding circles)
      phases.forEach((_, index) => {
        setTimeout(() => {
          setShowNumbers(prev => {
            const newShowNumbers = [...prev];
            newShowNumbers[index] = true;
            return newShowNumbers;
          });
        }, 1600 + (index * 200)); // Start at 1600ms, 200ms after each circle starts
      });
    }
  }, [isVisible, phases]);

  return (
    <section id="journey-section" className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/journey.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gray-900"></div>
      </video>
      
      {/* Video Overlay for better content readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Section Header */}
          <div className={`mb-6 transition-all duration-1000 ease-out transform ${
            showJourneyHeader 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-cyan-400 text-sm uppercase tracking-wider border-b border-cyan-400 pb-1">
              Our Journey
            </span>
          </div>

          {/* Main Heading */}
          <div className={`transition-all duration-1000 ease-out transform ${
            showHeading 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 
              className="text-white mb-6 text-center font-nunito-sans"
              style={{
                fontSize: '46px',
                fontWeight: 900,
                lineHeight: '100%',
                letterSpacing: '0px'
              }}
            >
              Our End-to-End Creative Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              From discovery and strategy to design and production, every stage is crafted to transform ideas into impactful
              <br className="hidden md:block" />
              brand experiences.
            </p>
          </div>

          {/* Journey Workflow Image */}
          <div className={`relative w-full mx-auto transition-all duration-1000 ease-out transform ${
            showWorkflow 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <div className="flex items-start justify-items-start">

<div className="w-full flex items-center justify-center p-8 overflow-x-auto">
      <div className="relative flex items-center justify-center min-w-max">
        {/* Render circles */}
        {phases.map((phase, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center transition-all duration-800 ease-out transform ${
              showCircles[index] 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-75'
            }`}
            style={{
              marginLeft: index > 0 ? '-80px' : '0',
              zIndex: phases.length - index
            }}
          >
            {/* Circle with border only */}
            <div 
              className={`${phase.size} rounded-full border-2 border-cyan-400 bg-transparent hover:bg-cyan-400/20 flex flex-col items-center justify-center relative transition-all duration-300 ease-in-out cursor-pointer`}
            >
              {/* Label inside circle */}
              <div className="text-center">
                <div className="text-white text-base font-normal">
                  {phase.label}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Position numbers absolutely in intersection areas */}
        {/* 01 - Before Discovery */}
        <div 
          className={`absolute text-white text-xl font-light flex items-center justify-center w-12 h-12 transition-all duration-600 ease-out transform ${
            showNumbers[0] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75'
          }`}
          style={{
            left: '0px',
            top: '50%',
            transform: showNumbers[0] ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            zIndex: 20
          }}
        >
          01
        </div>

        {/* 02 - Between Discovery and Strategy */}
        <div 
          className={`absolute text-white text-xl font-light flex items-center justify-center w-12 h-12 transition-all duration-600 ease-out transform ${
            showNumbers[1] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75'
          }`}
          style={{
            left: 'calc(256px - 80px)',
            top: '50%',
            transform: showNumbers[1] ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            zIndex: 20
          }}
        >
          02
        </div>

        {/* 03 - Between Strategy and Concept */}
        <div 
          className={`absolute text-white text-xl font-light flex items-center justify-center w-12 h-12 transition-all duration-600 ease-out transform ${
            showNumbers[2] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75'
          }`}
          style={{
            left: 'calc(256px + 320px - 160px)',
            top: '50%',
            transform: showNumbers[2] ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            zIndex: 20
          }}
        >
          03
        </div>

        {/* 04 - Between Concept and Design System */}
        <div 
          className={`absolute text-white text-xl font-light flex items-center justify-center w-12 h-12 transition-all duration-600 ease-out transform ${
            showNumbers[3] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75'
          }`}
          style={{
            left: 'calc(256px + 320px + 256px - 240px)',
            top: '50%',
            transform: showNumbers[3] ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            zIndex: 20
          }}
        >
          04
        </div>

        {/* 05 - Between Design System and Production */}
        <div 
          className={`absolute text-white text-xl font-light flex items-center justify-center w-12 h-12 transition-all duration-600 ease-out transform ${
            showNumbers[4] 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-75'
          }`}
          style={{
            left: 'calc(256px + 320px + 256px + 384px - 320px)',
            top: '50%',
            transform: showNumbers[4] ? 'translateY(-50%)' : 'translateY(calc(-50% + 16px))',
            zIndex: 20
          }}
        >
          05
        </div>
      </div>
    </div>




            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
