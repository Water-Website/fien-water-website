'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RiPencilRulerFill, RiShieldStarFill } from 'react-icons/ri';
import { IconArrowRight } from '@tabler/icons-react';

export default function HydrationSection() {
  const pathRef = useRef<SVGPathElement>(null);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showAlternateText, setShowAlternateText] = useState(false);

  useEffect(() => {
    // Circle animation takes 6 seconds, middle point is at 3 seconds
    const toggleText = () => {
      setShowAlternateText(prev => !prev);
    };

    // Initial change at 3 seconds (when circle reaches middle)
    const initialTimer = setTimeout(toggleText, 3000);

    // Then toggle every 6 seconds to sync with circle loop
    const interval = setInterval(toggleText, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#C8E65E] to-[#9ACD32] overflow-hidden flex items-center">
      <div className="flex flex-col lg:flex-row items-center w-full px-8 gap-8">
        {/* Left Side - Icons and Bottles (Less than half) */}
        <div className="relative w-[40%] flex flex-col justify-between h-[85vh]">
          {/* Icon Circles - Top */}
          <div className="relative z-20 space-y-6 px-20">
            {/* Icon 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#05472A] flex items-center justify-center flex-shrink-0">
               <RiShieldStarFill className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#05472A] max-w-[180px]">
                <h3 className="font-poppins font-bold text-sm leading-tight text-left">
                  Innovative & Future-Ready Solutions
                </h3>
              </div>
            </motion.div>

            {/* Icon 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-[#05472A] flex items-center justify-center flex-shrink-0">
               <RiPencilRulerFill className="w-8 h-8 text-white" />
              </div>
              <div className="text-[#05472A] max-w-[180px]">
                <h3 className="font-poppins font-bold text-sm leading-tight text-left">
                  Human-Centric Design Philosophy
                </h3>
              </div>
            </motion.div>
          </div>

          {/* Bottle Image - Bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative z-30 self-center lg:self-start left-36 bottom-45"
          >
            <Image
              src="/fien-water-images/hydration/hydration-bottles.png"
              alt="FIEN Water Bottles"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Right Side - Rounded White Container (More than half) */}
        <div className="relative w-[60%]">
          {/* Semicircle Loader - Left Edge of White Container */}
          {/* <div className="absolute -left-8 top-1/4 z-50">
            
          </div> */}

          <div className="bg-white rounded-3xl shadow-2xl flex flex-col justify-between h-[85vh] p-10 py-8 relative overflow-visible">
            {/* Top Content Area */}
            <div className="relative z-20 space-y-4">
            {/* Description Paragraph with Semicircle */}
            <div className="flex items-start">
              {/* Perfect Semicircle with Moving Dot */}
              <div className="flex items-start -ml-24 -mt-10">
                <svg width="240" height="360" viewBox="0 0 240 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <path
                    id="arcBaseSemiCircle"
                    d="M 60 20 A 160 160 0 0 1 60 340"
                    fill="none"
                    stroke="#CCFF00"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    id="arcProgressSemiCircle"
                    d="M 60 20 A 160 160 0 0 1 60 340"
                    fill="none"
                    stroke="#05472A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="502.65" 
                    strokeDashoffset="502.65"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="502.65"
                      to="0"
                      dur="6s" 
                      fill="freeze"
                      repeatCount="indefinite"
                    />
                  </path>

                  <circle r="7" fill="#05472A">
                    <animateMotion
                      dur="6s"
                      repeatCount="indefinite"
                      fill="freeze"
                      path="M 60 20 A 160 160 0 0 1 60 340"
                    />
                  </circle>
                </svg>
              </div>

              <div className="flex flex-col gap-3">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="font-medium font-nunito-sans text-gray-600"  style={{ 
                  fontWeight: 500,
                  fontSize: '14px',
                  // lineHeight: '100%',
                  letterSpacing: '0px',
                 }}
              >
                Every drop of FIEN Water begins its journey in the untouched upper reaches of the Himalayas, where snow and rain filter naturally through layers of rock and soil, gathering minerals and purity along the way. Infused with subtle herbal notes and bottled with care, FIEN Water carries the essence of nature's wellness. More than hydration, it is a mindful choice — crafted for those who value purity, sustainability, and the timeless luxury of living in harmony with nature.
              </motion.p>

                          {/* Feature List */}
            <ul>
              {[
                'Innovative & Future-Ready Solutions',
                'Human-Centric Design Philosophy',
                'Seamless Integration of Aesthetics & Usability',
                'Focus on Scalability & Growth',
                'Commitment to Continuous Innovation',
                'Designs that Inspire & Perform'
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + (index * 0.15) }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 bg-[#05472A] rounded-full mt-3 flex-shrink-0"></span>
                  <span className="text-gray-800 font-nunito-sans font-bold text-sm"  
                  style={{ 
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '32px',
                letterSpacing: '0px',
              }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              viewport={{ once: true }}
            >
              <button className="group inline-flex items-center px-4 py-2 border-2 border-[#05472A] text-[#05472A] font-semibold rounded-full hover:bg-[#05472A] hover:text-white transition-all duration-300 font-nunito-sans">
                <span>Learn More</span>
                <IconArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
            </div>
            </div>
          </div>

          {/* Large Heading at Bottom */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={showAlternateText ? 'alternate' : 'original'}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="relative z-20 text-3xl lg:text-4xl font-bold font-poppins leading-tight mt-6"
              style={{
                background: 'linear-gradient(135deg, #05472A 0%, #7CB342 50%, #9ACD32 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {showAlternateText ? (
                <>
                  It Took Nature Years to Perfect.{' '}
                  <span className="block mt-2">
                    FIEN Brings It to You in Every Sip.
                  </span>
                </>
              ) : (
                "FIEN Water: Hydration, Redefined for Body, Mind & Planet"
              )}
            </motion.h2>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
}
