'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const formContainer = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fieldAnimation = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const bottleVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut', 
      delay,
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  })
};

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-center relative">
            
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-4xl p-12 shadow-2xl relative z-20 max-w-6xl w-full"
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Header */}
              <motion.div variants={fadeUp} className="mb-8">
                <h1 
                  className="text-gray-900 mb-6 font-bold font-nunito-sans"
                  style={{ fontSize: '42px', fontWeight: 900, lineHeight: '110%', letterSpacing: '-1px' }}
                >
                  Get in touch with us
                </h1>
                <p 
                  className="text-gray-600 font-nunito-sans"
                  style={{ fontSize: '16px', fontWeight: 600, lineHeight: '160%' }}
                >
                  Have a project in mind? Let's start the conversation. Our team is ready to bring your brand vision to life through strategic packaging and creative storytelling.
                </p>
              </motion.div>

              {/* Fields animate one by one */}
              <form onSubmit={handleSubmit} className="space-y-6 px-20">
                <motion.div variants={fieldAnimation}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-cyan-500 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent"
                    required
                  />
                </motion.div>

                <motion.div variants={fieldAnimation}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-cyan-500 outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent"
                    required
                  />
                </motion.div>

                <motion.div variants={fieldAnimation}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself"
                    rows={1}
                    className="w-full px-4 py-4 border-b-2 border-gray-300 focus:border-cyan-500 outline-none resize-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-transparent"
                    required
                  />
                </motion.div>

                <motion.div variants={fieldAnimation} className="pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    Submit
                    <IconArrowRight className="ml-3 w-5 h-5" />
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Bottle Image 1 */}
            <motion.div
              className="absolute -top-30 -right-32 w-[350px] h-[500px] -rotate-12 z-30"
              custom={2.0}
              variants={bottleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="/get-in-touch/get-in-touch-one.png"
                alt="Premium water bottle design"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Bottle Image 2 */}
            <motion.div
              className="absolute -bottom-20 -left-40 w-[350px] h-[500px] z-30"
              custom={2.5}
              variants={bottleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Image
                src="/get-in-touch/get-in-touch-two.png"
                alt="Elegant bottle branding"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
