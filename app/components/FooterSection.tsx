'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const columnContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.4 }
  }
};

const FooterSection = () => {
  return (
    <footer className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/connect-with-us-bg.png"
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 py-20 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Section */}
          <div className="text-center mb-6">
            {/* Logo */}
            <motion.div variants={fadeUp} className="mb-8">
              <Image
                src="/fien-logo.png"
                alt="FIEN Logo"
                width={200}
                height={80}
                className="mx-auto"
                priority
              />
            </motion.div>

            {/* Company Description */}
            <motion.p 
              variants={fadeUp}
              className="text-white max-w-4xl mx-auto font-nunito-sans"
              style={{ fontSize: '18px', fontWeight: 300, lineHeight: '100%' }}
            >
              Fien is an advertising agency that helps brands connect with people by printing their logo or message on everyday-use products. We turn simple items into moving billboards for your brand.
            </motion.p>
          </div>

          {/* Columns */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 mb-16 mt-8 px-60 py-6"
            variants={columnContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Quick Actions */}
            <motion.div variants={fadeUp}>
              <h3 className="text-cyan-400 mb-8 font-bold font-nunito-sans" style={{ fontSize: '20px' }}>
                Quick Actions
              </h3>
              <ul>
                {['Home','About Us','Our Services','Fien Wanter','Brands','Contact Us'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans" style={{ fontSize: '16px', lineHeight: '45px' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect with Us */}
            <motion.div variants={fadeUp}>
              <h3 className="text-cyan-400 mb-8 font-bold font-nunito-sans" style={{ fontSize: '20px' }}>
                Connect with Us
              </h3>
              <ul>
                {['Behance','Instagram','LinkedIn','Dribbble','Careers','Chat With Us'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans" style={{ fontSize: '16px', lineHeight: '35px' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Address */}
            <motion.div variants={fadeUp}>
              <h3 className="text-cyan-400 mb-8 font-bold font-nunito-sans" style={{ fontSize: '20px' }}>
                Address
              </h3>
              <div className="space-y-4">
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '45px' }}>
                  Fien Water Studio
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  DLF Phase 2, Gurugram, Haryana
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  122002, India
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  📞 +91-98XXXXXX00
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  ✉️ hello@fienwater.in
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider + Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="border-t border-cyan-400/30 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
                {['Privacy Policy','Cookie Policy','Terms & Condition'].map((item, i) => (
                  <a key={i} href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans" style={{ fontSize: '14px' }}>
                    {item}
                  </a>
                ))}
              </div>
              <p className="text-white font-nunito-sans" style={{ fontSize: '14px' }}>
                © 2025 FIEN
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
