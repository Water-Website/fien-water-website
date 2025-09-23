'use client';

import React from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
  })
};

const imageVariants = {
  hidden: (i: number) => {
    // Deterministic values based on index instead of Math.random()
    const offsetValues = [25, -35, 15, -20]; // Predefined horizontal offsets
    const rotationValues = [-25, 20, -15, 30]; // Predefined rotation values
    
    return {
      opacity: 0, 
      scale: 0.3, 
      y: -400, 
      x: offsetValues[i] || 0, // Use predefined offset for this image
      rotate: rotationValues[i] || 0 // Use predefined rotation for this image
    };
  },
  visible: (i: number) => {
    // Reverse order: 4th image (index 3) appears first, 1st image (index 0) appears last
    const reverseIndex = 3 - i;
    return {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { 
        delay: 1.5 + reverseIndex * 0.25, 
        duration: 1.0, 
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for bouncy landing
        type: "spring",
        stiffness: 120,
        damping: 18
      }
    };
  }
};

const BottleBrandSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bottle-brand/bottle-brand-wave.png"
          alt="Cyan wave background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="space-y-6"
              >
                <motion.h1 
                  className="font-bold font-nunito-sans leading-tight"
                  style={{ fontSize: '56px', fontWeight: 900, lineHeight: '110%', letterSpacing: '-1px' }}
                  custom={0}
                  variants={textVariants}
                >
                  Designs That Speak.
                  <br />
                  <span className="text-cyan-400">Brands That Shine.</span>
                </motion.h1>

                <motion.p 
                  className="text-gray-300 max-w-lg font-nunito-sans"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '160%', letterSpacing: '0px' }}
                  custom={1}
                  variants={textVariants}
                >
                  We craft designs that don't just look stunning – they perform, 
                  engage, and leave a lasting impact. From bold branding to sleek 
                  packaging, our portfolio highlights the innovation and artistry 
                  we bring to every project.
                </motion.p>

                <motion.button
  custom={2}
  variants={textVariants}
  whileHover="hover"
  className="group inline-flex items-center px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
>
  Contact Us
  <span className="relative w-5 h-5 ml-2">
    {/* Default Arrow */}
    <IconArrowRight
      className="absolute w-5 h-5 transition-all duration-200 opacity-100 group-hover:opacity-0 group-hover:translate-x-1 -translate-y-1"
    />
    {/* Hover Arrow */}
    <IconArrowUpRight
      className="absolute w-5 h-5 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-1 translate-y-1"
    />
  </span>
</motion.button>
              </motion.div>
            </div>

            {/* Right Images Grid */}
            <div className="relative h-[650px] w-full">
              {[
                { src: "/bottle-brand/brand-four.png", className: "absolute -top-30 -right-56 w-[300px] h-[400px] -rotate-6 rounded-3xl", z: 20, name: "4th" },
                { src: "/bottle-brand/brand-three.png", className: "absolute top-32 -right-12 w-[300px] h-[400px] rotate-20 rounded-3xl", z: 30, name: "3rd"},
                { src: "/bottle-brand/brand-two.png", className: "absolute top-64 right-40 w-[350px] h-[500px] rounded-3xl", z: 30, name: "2nd" },
                { src: "/bottle-brand/brand-one.png", className: "absolute -bottom-20 -left-20 w-[300px] h-[400px] rounded-3xl", z: 40, name: "1st" },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className={`${img.className} transform transition-transform duration-500 z-${img.z} hover:rotate-6 drop-shadow-2xl`}
                  custom={i}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                  }}
                >
                  <Image src={img.src} alt="brand" className="" width={300} height={400} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
    </section>
  );
};

export default BottleBrandSection;
