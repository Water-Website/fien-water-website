'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconPlus, IconMinus, IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(-1);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "What services does your agency provide?",
      answer:
        "We specialize in product branding, packaging design, creative strategy, and custom brand experiences. From concept to production, we ensure your brand stands out with designs that resonate with your audience.",
    },
    {
      id: 2,
      question: "Do you offer eco-friendly and sustainable packaging solutions?",
      answer:
        "Yes, we prioritize sustainable materials and eco-conscious design practices to create packaging that aligns with your brand values while reducing environmental impact.",
    },
    {
      id: 3,
      question: "Can you handle both design and production?",
      answer:
        "Absolutely! Our process covers everything from ideation and concept design to production-ready files, ensuring a seamless journey from vision to reality.",
    },
    {
      id: 4,
      question: "How long does a typical project take?",
      answer:
        "Timelines vary based on project scope, but most branding and packaging design projects take between 2-6 weeks. We provide a clear schedule during the discovery phase.",
    },
    {
      id: 5,
      question: "Do you work with startups as well as established brands?",
      answer:
        "Yes, we collaborate with businesses of all sizes - from emerging startups lookingto establish a unique identity to established brands aiming to refresh their design approach.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const floatAnimation = {
    
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        rotate: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    },
  };

  return (
    <section className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Question Mark Icons */}
          <motion.div
            variants={floatAnimation}
            className="absolute -top-8 -left-32 w-32 h-32 p-4 bg-white/10 rotate-12"
          >
            <div className="w-full h-full relative">
              <Image
                src="/question.png"
                alt="Question mark"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={floatAnimation}
            className="absolute -top-12 -right-32 w-36 h-36 p-4 bg-white/10 -rotate-12"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="w-full h-full relative">
              <Image
                src="/question.png"
                alt="Question mark"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={floatAnimation}
            className="absolute top-32 -left-36 w-28 h-28 p-4 bg-white/10 -rotate-12"
            style={{ animationDelay: '1s' }}
          >
            <div className="w-full h-full relative">
              <Image
                src="/question.png"
                alt="Question mark"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            variants={floatAnimation}
            className="absolute top-24 -right-36 w-32 h-32 p-4 bg-white/10 -rotate-6"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="w-full h-full relative">
              <Image
                src="/question.png"
                alt="Question mark"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* FAQ Label */}
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center mb-6">
            <span className="text-gray-600 text-sm tracking-wider border-b border-cyan-400 pb-1 font-nunito-sans">
              FAQ's
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-gray-900 mb-6 font-bold font-nunito-sans relative z-10"
            style={{
              fontSize: '46px',
              fontWeight: 900,
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            Your Questions, Answered
            <br />
            within Minutes..
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-600 max-w-3xl mx-auto font-nunito-sans relative z-10"
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '160%',
              letterSpacing: '0px',
            }}
          >
            Quick insights to help you understand our process, services, and approach – all in one place.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: 'easeOut' 
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`border border-gray-200 rounded-2xl transition-all duration-300 ${
                openFaq === index
                  ? 'bg-cyan-50 border-cyan-200 shadow-lg'
                  : 'bg-white hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              >
                <h3
                  className="text-gray-700 font-medium font-nunito-sans pr-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '100%',
                  }}
                >
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 ml-4">
                  {openFaq === index ? (
                    <IconMinus className="w-6 h-6 text-cyan-600 transition-transform duration-300" />
                  ) : (
                    <IconPlus className="w-6 h-6 text-gray-600 transition-transform duration-300 hover:text-cyan-600" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p
                    className="text-gray-700 font-nunito-sans"
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '160%',
                      letterSpacing: '0px',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <button
            className="inline-flex items-center px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
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
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
