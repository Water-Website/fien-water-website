'use client';

import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const lines = [
    "The best marketing doesn’t just sell a product,",
    "it stays in the mind, in the heart,",
    "and in conversations",
  ];

  const [typedLines, setTypedLines] = useState<string[]>(["", "", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setShowContent(true);
      setTimeout(() => setShowButton(true), 300);
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setTypedLines(prev => {
          const updated = [...prev];
          updated[lineIndex] += currentLine[charIndex];
          return updated;
        });
        setCharIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const lineDelay = setTimeout(() => {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }, 150);

      return () => clearTimeout(lineDelay);
    }
  }, [charIndex, lineIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center mb-12">
      <div className="text-center max-w-7xl mx-auto mt-8">
        {/* Heading */}
        <div
          role="heading"
          aria-level={1}
          className="text-white mb-10 text-center font-poppins flex flex-col justify-center
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
          style={{
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '100%',
            letterSpacing: '2px',
          }}
        >
          {typedLines.map((line, index) => (
            <span key={index} className="mb-4 min-h-[1em] block">
              {line}
              {index === lineIndex && charIndex < lines[index]?.length && (
                <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse" />
              )}
            </span>
          ))}
        </div>

        {/* Description */}
        <div
          className={`transition-opacity duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          } mt-4 sm:mt-6`}
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
            We turn everyday essentials into brand storytellers, sparking connection with
            <br className="hidden md:block" />
            every use, every moment, every day.
          </p>
        </div>

        {/* Button */}
        <div
          className={`text-center p-4 mt-12 transition-opacity duration-500 ${
            showButton ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="/contact-us"
            className="inline-flex items-center px-4 py-3 border border-white text-white
                       rounded-full hover:bg-white hover:text-black transition-all duration-300
                       ease-in-out transform hover:scale-105 font-medium"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Contact Us
            <div className="relative w-5 h-5 ml-2">
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
