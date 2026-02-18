'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

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
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a skeleton/placeholder matching server layout
  }

  return (
    <footer className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home-tab/footer-section/footer.png"
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
              FIEN is a creative agency built to turn bold ideas into powerful brand statements. We design, strategize, and tell stories that help brands stand out and stay remembered.

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
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/#about-us-section' },
                  { name: 'Our Services', href: '/services' },
                  { name: 'Fien Water', href: '/fien-water' },
                  { name: 'Brands', href: '/#our-work-section' },
                  { name: 'Contact Us', href: '/contact-us' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                    <a href={item.href} className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans" style={{ fontSize: '16px', lineHeight: '45px' }}>
                      {item.name}
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
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/share/1DLHZYbgJt/'  },
                  { name: 'Instagram', href: 'https://www.instagram.com/fien.it?igsh=MTk0NG8wM3kweDB0OA=='},
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aventis-marketing-enterprises-llp-93960736b'},
                  { name: 'Twitter', href: 'https://x.com/fienitt?t=kLhYqqx7Nf14f7ZPAey8-g&s=09'},
                  { name: 'Chat With Us', href: 'https://wa.me/919560402187'},
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans"
                      style={{ fontSize: '16px', lineHeight: '35px' }}
                    >
                      {item.name}
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
                  B-4/3, Ground Floor, Model Town 1, Delhi
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  110009, India
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  📞 +91-9560402187 | +91-9810728831
                </p>
                <p className="text-white font-nunito-sans" style={{ fontSize: '16px' }}>
                  ✉️ Info@fien.in | aventismarketing5@gmail.com
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
                {['Privacy Policy'].map((item, i) => (
                  <a key={i} href="#" className="text-white hover:text-cyan-400 transition-colors duration-300 font-nunito-sans" style={{ fontSize: '14px' }}>
                    {item}
                  </a>
                ))}
              </div>
              <p className="text-white font-nunito-sans" style={{ fontSize: '14px' }}>
                © 2026 FIEN
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
