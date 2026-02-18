'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const lines = [
  "Where collaboration doesn't",
  "just create a positive impact,",
  "but builds legacies that last.",
];

// Build a flat list of characters with their cumulative delay
const allChars: { char: string; lineIdx: number; delay: number }[] = [];
let totalDelay = 0;
const CHAR_DELAY = 0.04; // seconds per character
const LINE_PAUSE = 0.15; // pause between lines

lines.forEach((line, lineIdx) => {
  if (lineIdx > 0) totalDelay += LINE_PAUSE;
  for (let i = 0; i < line.length; i++) {
    allChars.push({ char: line[i], lineIdx, delay: totalDelay });
    totalDelay += CHAR_DELAY;
  }
});

const TOTAL_TYPING_DURATION = totalDelay;

const ContactSection = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Group chars by line for rendering
  const lineChars = lines.map((_, lineIdx) =>
    allChars.filter(c => c.lineIdx === lineIdx)
  );

  return (
    <section id="contact-section" className="relative overflow-hidden group">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/home-tab/contact-us/home-contact.png"
          alt="Water Background"
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-700 group-hover:bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100vh] flex flex-col justify-center items-start px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div ref={sectionRef} className="max-w-5xl">
            {/* Typewriter Heading */}
            <div
              role="heading"
              aria-level={2}
              className="text-white font-poppins flex flex-col justify-center"
              style={{
                fontSize: 'clamp(32px, 5vw, 64px)',
                fontWeight: 700,
                lineHeight: '130%',
                letterSpacing: '0px',
              }}
            >
              {lineChars.map((chars, lineIdx) => (
                <span key={lineIdx} className="mb-2 min-h-[1em] block">
                  {chars.map((c, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        delay: c.delay,
                        duration: 0.02,
                      }}
                      className="inline-block"
                      style={{ whiteSpace: 'pre' }}
                    >
                      {c.char}
                    </motion.span>
                  ))}
                  {/* Blinking cursor — visible only while this line is active */}
                  {/* {isInView && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        delay: chars[0]?.delay ?? 0,
                        duration: (chars[chars.length - 1]?.delay ?? 0) - (chars[0]?.delay ?? 0) + CHAR_DELAY + 0.3,
                        times: [0, 0.01, 0.95, 1],
                        ease: 'linear',
                      }}
                      className="inline-block w-[3px] h-[0.9em] bg-white ml-1 rounded-sm align-middle animate-pulse"
                    />
                  )} */}
                </span>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                delay: TOTAL_TYPING_DURATION + 0.3,
                duration: 0.7,
                ease: 'easeOut',
              }}
              className="mt-8"
            >
              <a
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 border border-white/80 text-white rounded-full
                           backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black
                           transition-all duration-500 ease-out transform hover:scale-105"
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
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
