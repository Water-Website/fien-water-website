'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion, Variants, useInView } from 'framer-motion';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 2.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Individual image variants for each image - Sequential Animation 4→3→2→1
const image4Variants: Variants = {
  hidden: {
    opacity: 0, 
    scale: 0.1, 
    y: -300,
    x: 50,
    rotate: -45
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { 
      delay: 0.1, // First to appear immediately (Image 4)
      duration: 1.0, 
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring" as const,
      stiffness: 120,
      damping: 15
    }
  }
};

const image3Variants: Variants = {
  hidden: {
    opacity: 0, 
    scale: 0.1, 
    y: -300,
    x: -50,
    rotate: 45
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { 
      delay: 0.6, // Second to appear (Image 3)
      duration: 1.0, 
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring" as const,
      stiffness: 120,
      damping: 15
    }
  }
};

const image2Variants: Variants = {
  hidden: {
    opacity: 0, 
    scale: 0.1, 
    y: -300,
    x: 30,
    rotate: -30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { 
      delay: 1.1, // Third to appear (Image 2)
      duration: 1.0, 
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring" as const,
      stiffness: 120,
      damping: 15
    }
  }
};

const image1Variants: Variants = {
  hidden: {
    opacity: 0, 
    scale: 0.1, 
    y: -300,
    x: -30,
    rotate: 60
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: { 
      delay: 1.6, // Last to appear (Image 1)
      duration: 1.0, 
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring" as const,
      stiffness: 120,
      damping: 15
    }
  }
};

const BottleBrandSection = () => {
  const imagesContainerRef = useRef(null);
  const isInView = useInView(imagesContainerRef, { once: true, amount: 0.1, margin: "-100px" });

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
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
                  Designs That Perform.
                  <br />
                  <span className="text-cyan-400">Brands That matter.</span>
                </motion.h1>

                <motion.p 
                  className="text-gray-300 max-w-lg font-nunito-sans"
                  style={{ fontSize: '18px', fontWeight: 400, lineHeight: '160%', letterSpacing: '0px' }}
                  custom={1}
                  variants={textVariants}
                >
                  We craft visuals and identities that don’t just look good; they leave a lasting impression.
                </motion.p>

                <motion.button
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.4 }}
  variants={buttonVariants}
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
            <div 
              ref={imagesContainerRef}
              className="relative h-[650px] w-full overflow-visible"
            >
              
              {/* Image 4 - First to appear */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={image4Variants}
                className="absolute -top-[25px] -right-[160px] w-[320px] h-[400px] -rotate-6 rounded-3xl transform transition-transform duration-500 z-10 hover:rotate-6 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              >
                <Image src="/home-tab/brands/bottle-brand-4.png" alt="brand design 4" className="w-full h-full object-cover rounded-3xl" width={320} height={400} />
              </motion.div>

              {/* Image 3 - Second to appear */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={image3Variants}
                className="absolute top-32 -right-12 w-[300px] h-[400px] rotate-20 rounded-3xl transform transition-transform duration-500 z-30 hover:rotate-6 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              >
                <Image src="/home-tab/brands/bottle-brand-3.png" alt="brand design 3" className="w-full h-full object-cover rounded-3xl" width={300} height={400} />
              </motion.div>

              {/* Image 2 - Third to appear */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={image2Variants}
                className="absolute top-64 right-36 w-[300px] h-[400px] rounded-3xl transform transition-transform duration-500 z-30 hover:rotate-6 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              >
                <Image src="/home-tab/brands/bottle-brand-2.png" alt="brand design 2" className="w-full h-full object-cover rounded-3xl" width={300} height={400} />
              </motion.div>

              {/* Image 1 - Last to appear */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={image1Variants}
                className="absolute -bottom-20 -left-20 w-[300px] h-[400px] rounded-3xl transform transition-transform duration-500 z-40 hover:rotate-6 drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              >
                <Image src="/home-tab/brands/brand-1.png" alt="brand design 1" className="w-full h-full object-cover rounded-3xl" width={300} height={400} />
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
    </section>
  );
};

export default BottleBrandSection;
