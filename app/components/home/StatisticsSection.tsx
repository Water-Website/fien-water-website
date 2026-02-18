'use client';

import React from 'react';
import Image from 'next/image';
import { RiBox3Fill, RiFeedbackFill, RiLightbulbFlashFill, RiTruckFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const StatisticsSection = () => {
  const statistics = [
    {
      icon: <RiTruckFill className="w-12 h-12 text-white" />,
      number: "6k+",
      description: "Bottles Deployed",
    },
    {
      icon: <RiLightbulbFlashFill className="w-12 h-12 text-white" />,
      number: "100%",
      description: "Brand Focused Approach",
    },
    {
      icon: <RiBox3Fill className="w-12 h-12 text-white" />,
      number: "90%+",
      description: "Positive Client Feedback ",
    },
    // {
    //   icon: <RiFeedbackFill className="w-12 h-12 text-white" />,
    //   number: "99%",
    //   description: "Positive Client Feedback",
    // },
  ];

  // Parent container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between each stat
        delayChildren: 0.2, // wait before starting sequence
      },
    },
  };

  // Each stat animation
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="statistics-section" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home-tab/statistics/stats.png"
          alt="Plastic Free Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Statistics Content */}
      <div className="relative z-10 min-h-[50vh] flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                className="text-center group transition-all duration-500"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-12">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2">
                  <h3
                    className="text-white font-bold"
                    style={{
                      fontSize: '48px',
                      fontWeight: 700,
                      lineHeight: '100%',
                    }}
                  >
                    {stat.number}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    className="text-white/90 font-medium"
                    style={{
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '130%',
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
