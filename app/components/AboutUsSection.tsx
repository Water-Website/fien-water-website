'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight, IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';

const AboutUsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  // Animation states
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    {
      src: '/about-us/about-us-first.png',
      alt: 'About Us - First Image'
    },
    {
      src: '/about-us/about-us-second.png',
      alt: 'About Us - Second Image'
    },
    {
      src: '/about-us/about-us-third.png',
      alt: 'About Us - Third Image'
    }
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

    const sectionElement = document.getElementById('about-us-section');
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
      // 1. About Us header appears first
      setTimeout(() => setShowAboutUs(true), 200);
      
      // 2. Main heading appears
      setTimeout(() => setShowHeading(true), 600);
      
      // 3. Image carousel appears
      setTimeout(() => setShowCarousel(true), 1000);
      
      // 4. Description text appears after images are loaded (additional delay)
      setTimeout(() => setShowDescription(true), 2000);
      
      // 5. Button appears after description with delay
      setTimeout(() => setShowButton(true), 2800);
    }
  }, [isVisible]);

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, images.length]);

  const goToPrevious = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const goToNext = () => {
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
    // Resume auto-scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section id="about-us-section" className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* About Us Header */}
        <div className={`text-center mb-6 transition-all duration-1000 ease-out transform ${
          showAboutUs 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-gray-500 text-sm uppercase tracking-wider border-b border-cyan-400 pb-1">About Us</span>
        </div>

        {/* Main Heading */}
        <div className={`text-center mb-8 transition-all duration-1000 ease-out transform ${
          showHeading 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
            <h2 
              className="text-black mb-3 text-center font-nunito-sans"
              style={{
                fontSize: '46px',
                fontWeight: 900,
                lineHeight: '100%',
                letterSpacing: '0px'
              }}
            >
              Our Story, Your Visibility
            </h2>
          <p className="text-gray-600 text-lg max-w-5xl mx-auto leading-relaxed font-nunito-sans"
          style={{
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            letterSpacing: '0px'
          }}>
            We believe brands should live beyond screens. That's why we design promotional products that travel with your audience,
            <br className="hidden md:block" />
            creating daily connections that last.
          </p>
        </div>

        {/* Image Carousel */}
        <div className={`relative max-w-6xl mx-auto mb-8 transition-all duration-1000 ease-out transform ${
          showCarousel 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          {/* Image Container */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`
              }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - Overlaid on bottom right */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200 border border-white/20"
                aria-label="Previous image"
              >
                <IconCaretLeftFilled className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200 border border-white/20"
                aria-label="Next image"
              >
                <IconCaretRightFilled className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className={`text-center max-w-5xl mx-auto mb-4 transition-all duration-1000 ease-out transform ${
          showDescription 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed font-nunito-sans"
          style={{
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            letterSpacing: '0px',
          }}
          >
            FIEN is a product marketing venture dedicated to making brands part of people's everyday lives. We specialize in transforming simple,
            everyday items like water bottles and cups into powerful branding tools that travel with your audience. By combining creativity, strategy,
            and high-quality production, we help businesses go beyond digital impressions and create real-world connections. From cafes and
            corporate offices to events and retail spaces, FIEN ensures your brand is seen, remembered, and experienced where it matters most.
          </p>
        </div>

        {/* Contact Us Button */}
        <div className={`text-center transition-all duration-1000 ease-out transform ${
          showButton 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <button 
            className="inline-flex items-center gap-2 bg-transparent border text-gray-700 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
           Know More
            <div className="relative w-5 h-5">
              <IconArrowRight 
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered 
                    ? 'opacity-0 transform translate-x-1 -translate-y-1' 
                    : 'opacity-100 transform translate-x-0 translate-y-0'
                }`} 
              />
              <IconArrowUpRight 
                className={`w-5 h-5 absolute transition-all duration-200 ${
                  isButtonHovered 
                    ? 'opacity-100 transform translate-x-0 translate-y-0' 
                    : 'opacity-0 transform -translate-x-1 translate-y-1'
                }`} 
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
