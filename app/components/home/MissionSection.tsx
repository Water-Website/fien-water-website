'use client';

import React from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  const missionPoints = [
    "Innovative & Future-Ready Solutions",
    "Human-Centric Design Philosophy", 
    "Seamless Integration of Aesthetics & Usability",
    "Focus on Scalability & Growth",
    "Commitment to Continuous Innovation",
    "Designs that Inspire & Perform"
  ];

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" }
    })
  };

  const floatVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.3, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <section id="mission-section" className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Images */}
          <div className="relative">
            {/* Floating images */}
            <motion.div
              custom={0}
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute -top-4 right-8 z-30"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <Image
                src="/mission/open-rate.png"
                alt="Open Rate 96%"
                width={200}
                height={140}
                className="drop-shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </motion.div>

            <motion.div
              custom={1}
              variants={floatVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="absolute bottom-24 -left-4 z-30"
              style={{ animation: "floatReverse 4s ease-in-out infinite" }}
            >
              <Image
                src="/mission/click-rate.png"
                alt="Click Rate 89%"
                width={200}
                height={140}
                className="drop-shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Main Mission Image */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <Image
                src="/mission/mission.png"
                alt="Mission Background"
                width={600}
                height={500}
                className="w-full"
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-gray-600 text-sm uppercase tracking-wider border-b border-cyan-400 pb-1">
                Our Mission & Vision
              </span>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 
                className="text-gray-900 mb-8 font-nunito-sans"
                style={{ fontSize: '46px', fontWeight: 900, lineHeight: '130%' }}
              >
                Driven by Purpose,
                <br />
                Designed for Impact
              </h2>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 mb-8"
            >
              <p className="text-gray-600 font-nunito-sans">
                Our vision is to blend creativity, strategy, and innovation to craft solutions
                that inspire, engage, and deliver meaningful experiences for every brand we
                work with.
              </p>
              <p className="text-gray-500 font-nunito-sans">
                Our vision is to shape digital experiences that inspire, connect, and leave a
                lasting impact. We aim to push creative boundaries, blending aesthetics with
                functionality to craft designs that not only look good but drive real results.
              </p>
            </motion.div>

            {/* Mission Points */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.4, delayChildren: 1.5 }
                }
              }}
              className="space-y-3 mb-8"
            >
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { 
                        duration: 0.6, 
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }
                    }
                  }}
                  className="flex items-start space-x-2"
                >
                  <div className="flex-shrink-0 w-1 h-1 bg-black rounded-full mt-2"></div>
                  <p className="text-gray-700 text-sm font-bold">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.button
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:scale-105"
            >
              Know More
              <span className="relative w-5 h-5 ml-2">
                <IconArrowRight className="absolute w-5 h-5 opacity-100 group-hover:opacity-0 transition-all duration-200 translate-y-0" />
                <IconArrowUpRight className="absolute w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
      `}</style>
    </section>
  );
};

export default MissionSection;
