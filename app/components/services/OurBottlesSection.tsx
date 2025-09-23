'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurBottlesSection() {

  const [frontHovered, setFrontHovered] = useState(false);
  const [backHovered, setBackHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: photos stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center justify-center min-h-[520px]"
          >
            {/* Background vector image */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none" >
              <Image
                src="/services-tab/our-bottles/our-bottles-vector.png"
                alt=""
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            {/* BACK card (smaller, left / behind) */}
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              whileInView={{ y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                z: 50,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.4 
                }
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              viewport={{ once: true }}
              className="absolute left-[-20px] top-[-120px] z-10 group cursor-pointer"
              style={{ willChange: 'transform' }}
              onMouseEnter={() => setBackHovered(true)}
              onMouseLeave={() => setBackHovered(false)}
            >
              <div className="rounded-2xl transform-gpu">
                <div className="w-full rounded-2xl h-full">
                  <motion.div
                    initial={{ rotate: -4 }}
                    whileInView={{ rotate: -2 }}
                    whileHover={{ 
                      // rotate: 3,
                      transition: { 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.4 
                      }
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={backHovered ? "/services-tab/our-bottles/our-bottles-one-hover.png" : "/services-tab/our-bottles/our-bottles-first.png"}
                      alt="Bottle on teal"
                      width={400}
                      height={500}
                      className="object-cover w-[400px] h-[500px] transition-all duration-500 ease-out"
                    />
                  </motion.div>
                </div>
              </div>

            </motion.div>

            {/* FRONT card (larger, right / top) */}
            <motion.div
              initial={{ y: -10, scale: 0.98 }}
              whileInView={{ y: 0, scale: 1 }}
              whileHover={{ 
                scale: 1.08,
                z: 100,
                y: -10,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.4 
                }
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute right-[50px] top-[120px] z-20 group cursor-pointer"
              style={{ willChange: 'transform' }}
              onMouseEnter={() => setFrontHovered(true)}
              onMouseLeave={() => setFrontHovered(false)}
            >
              <div
                className="rounded-2xl transform-gpu"
              >
                <div className="w-full h-full rounded-2xl">
                  <motion.div
                    initial={{ rotate: 8 }}
                    whileInView={{ rotate: 8 }}
                    whileHover={{ 
                      // rotate: -4,
                      transition: { 
                        type: 'spring', 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.4 
                      }
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={frontHovered ? "/services-tab/our-bottles/our-bottles-two-hover.png" : "/services-tab/our-bottles/our-bottles-second.png"}
                      alt="Person drinking from bottle"
                      width={400}
                      height={400}
                      className="transition-all duration-500 ease-out origin-center"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Optional small accent card (tiny) — uncomment if you want a third overlapping card */}
            {/*
            <motion.div
              initial={{ rotate: 18, y: 60, scale: 0.95 }}
              whileHover={{ rotate: 12, y: 40, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="absolute left-[140px] bottom-[-40px] z-5"
              style={{ width: 160, height: 200 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <Image src="/path/to/third.png" alt="" width={160} height={200} className="object-cover" />
              </div>
            </motion.div>
            */}
          </motion.div>

          {/* RIGHT: content (keeps your existing content but slightly tightened) */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 font-poppins"
            >
              Our Bottles
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-700 text-lg leading-relaxed font-nunito-sans" 
              style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0px'
              }}
              >
                At FIEN, we believe that everyday items have the power to create extraordinary brand
                connections. Our custom-branded water bottles are more than just containers — they are a
                reflection of your brand's identity, carried into people's daily routines. Whether at
                the gym, in the office, or on the go, our bottles keep your brand visible, memorable,
                and trusted.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed font-nunito-sans"
              style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0px'
              }}
              >
                Crafted with high-quality materials and designed for durability, our bottles
                seamlessly blend function with style. Every sip becomes a subtle brand reminder,
                ensuring your message travels wherever your audience goes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 font-nunito-sans" 
              style={{
                fontSize: '16px',
                fontWeight: 900,
                lineHeight: '24px',
                letterSpacing: '0px'
              }}
              >Why Choose FIEN Bottles?</h3>

              <ul className="">
                {[
                  'Practical Branding – Turn a daily-use item into a constant reminder of your brand.',
                  'High-Quality Materials – Durable, reusable, and eco-friendly options available.',
                  'Custom Designs – Tailored to match your brand identity, from colors to logos.',
                  'Wider Reach – Perfect for offices, cafes, gyms, events, or giveaways.',
                  'Eco-Conscious Appeal – Encourage sustainability while promoting your brand.',
                  'Everyday Visibility – Your brand travels with your audience wherever they go.',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 1 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start text-gray-700 font-nunito-sans"
                  >
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-2 flex-shrink-0" />
                    <span className="text-xs font-nunito-sans"
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      lineHeight: '24px',
                      letterSpacing: '0px'
                    }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed font-nunito-sans"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                lineHeight: '24px',
                letterSpacing: '0px'
              }}>
              From corporate promotions to event merchandise, FIEN bottles are designed to not only quench thirst but
              also strengthen your brand's presence in the real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.95 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <button className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-nunito-sans">
                <span>Get in touch with us</span>
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="flex-shrink-0">
                <Image src="/services-tab/our-bottles/our-bottles-arrow.png" alt="Our Bottles" width={60} height={40} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
