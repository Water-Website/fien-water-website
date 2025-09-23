'use client';

import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const line1 = "Marketing That Stays in Hand,";
  const line2 = "Not Just in Mind";
  const fullText = `${line1} ${line2}`;
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  // const [showCursor, setShowCursor] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (currentCharIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 50); // Faster typing speed for immediate start

      return () => clearTimeout(timer);
    } else {
      // Show the rest of the content immediately after typing completes
      setTimeout(() => {
        setShowContent(true);
        // Show button quickly after description text appears
        setTimeout(() => setShowButton(true), 300);
      }, 200);
    }
  }, [currentCharIndex, fullText]);

  // Blinking cursor effect
  useEffect(() => {
    if (currentCharIndex < fullText.length) {
      const cursorTimer = setInterval(() => {
      }, 500); // Blink every 500ms

      return () => clearInterval(cursorTimer);
    }
  }, [currentCharIndex, fullText.length]);

  return (
    <section className="min-h-screen flex items-center justify-center mb-12">
      {/* Hero Content */}
      <div className="text-center max-w-6xl mx-auto mt-8">
        <h1 
          className="text-white mb-10 sm:mb-8 text-center font-poppins min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] flex flex-col justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
          style={{
            fontSize: '70px',
            fontWeight: 800,
            lineHeight: '100%',
            letterSpacing: '2px'
          }}
        >
          <div className="text-center">
            {/* Split text into two lines for proper display */}
            <div className="mb-4">
              {displayedText.length <= line1.length ? (
                // Show first line with cursor if we're still typing it
                <>
                  {displayedText}
                </>
              ) : (
                // Show complete first line
                line1
              )}
            </div>
            
            {displayedText.length > line1.length + 1 && (
              <div>
                {/* Show second line */}
                {displayedText.slice(line1.length + 1)}
              </div>
            )}
          </div>
        </h1>
        
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'} mt-4 sm:mt-6`}>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed text-center">
            We craft branded essentials that travel with your audience, delivering visibility with
            <br className="hidden md:block" />
            every sip, every step, and every day.
          </p>
        </div>
         <div className={`text-center p-4 mt-12 transition-opacity duration-500 ${showButton ? 'opacity-100' : 'opacity-0'}`}>
           <button className="inline-flex items-center px-4 py-3 border border-white text-white rounded-full hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            >
             Contact Us
             <div className="relative w-5 h-5 ml-2">
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

export default HeroSection;
