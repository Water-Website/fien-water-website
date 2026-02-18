'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconArrowRight, IconArrowUpRight, IconMapPin, IconPhone, IconMail, IconMapPinFilled, IconPhoneFilled, IconMailFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';


const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactDetails: '',
    message: '',
    interests: [] as string[],
    privacyAccepted: false
  });

  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const interests = [
    'Custom Branded Bottles',
    'Herbal Infused & Functional Water Solutions',
    'Brand Partnerships & Collaborations',
    'Promotional Cups & Drinkware',
    'Corporate & Event Hydration Campaign',
    'Bulk Supply & Distribution Partnerships'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
    
    // Reset status when user changes interests
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare data for API
      const emailData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        message: `
Contact Details: ${formData.contactDetails}

Message: ${formData.message}

Interests: ${formData.interests.length > 0 ? formData.interests.join(', ') : 'None selected'}
        `.trim()
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactDetails: '',
          message: '',
          interests: [],
          privacyAccepted: false
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact-us/contact-us-hero-bg.png"
          alt="Contact Us Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header Content - Full Width Top */}
          <motion.div
            className="text-center text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1
              className="mb-6 font-bold font-nunito-sans items-start text-white"
              style={{ fontSize: '64px', fontWeight: 900, lineHeight: '110%', letterSpacing: '-2px' }}
            >
              Got an Idea? 
              <br />
              Let’s Make It possible.
            </h1>
          </motion.div>

          {/* Contact Form - Transparent Background */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Interests Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-white font-medium mb-4 font-nunito-sans">
                  You are Interested in:-
                </label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut", delay: 0.15 }}
                      className="inline-block w-fit"
                      onClick={() => handleInterestToggle(interest)}
                      >
                        <div className="relative">
                          <div className={`glass-bubble ${formData.interests.includes(interest) ? 'selected' : ''}`}>
                            <span className="relative z-10">
                              {interest}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                    // <button
                    //   key={index}
                    //   type="button"
                    //   onClick={() => handleInterestToggle(interest)}
                    //     className={`px-2 py-2 corner-gradient-bg text-xs font-medium transition-all duration-300 text-left font-nunito-sans transform hover:scale-105 hover:shadow-lg ${
                    //       formData.interests.includes(interest)
                    //         ? 'bg-white text-black border-white shadow-lg'
                    //         : 'bg-transparent text-white border-white/50 hover:border-white hover:bg-white/10 hover:backdrop-blur-sm'
                    //     }`}
                    // >
                    //   {interest}
                    // </button>
                  ))}
                </div>
              </motion.div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-0 py-4 border-0 border-b-2 border-white/50 focus:border-white outline-none transition-colors duration-300 text-white placeholder-white/70 bg-transparent font-nunito-sans"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-0 py-4 border-0 border-b-2 border-white/50 focus:border-white outline-none transition-colors duration-300 text-white placeholder-white/70 bg-transparent font-nunito-sans"
                    required
                  />
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-0 py-4 border-0 border-b-2 border-white/50 focus:border-white outline-none transition-colors duration-300 text-white placeholder-white/70 bg-transparent font-nunito-sans"
                  required
                />
              </motion.div>

              {/* Contact Details Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="contactDetails"
                  value={formData.contactDetails}
                  onChange={handleInputChange}
                  placeholder="Contact Details"
                  className="w-full px-0 py-4 border-0 border-b-2 border-white/50 focus:border-white outline-none transition-colors duration-300 text-white placeholder-white/70 bg-transparent font-nunito-sans"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={1}
                  className="w-full px-0 py-4 border-0 border-b-2 border-white/50 focus:border-white outline-none resize-none transition-colors duration-300 text-white placeholder-white/70 bg-transparent font-nunito-sans"
                  required
                />
              </motion.div>

              {/* Privacy Checkbox and Submit Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                className="flex items-start justify-between pt-4"
              >
                <div className="flex items-start space-x-3 flex-1">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="fien-checkbox mt-1"
                    required
                  />
                  <label className="text-white text-sm font-nunito-sans leading-relaxed">
                    I understand that FIEN will securely hold my data in accordance with their privacy policy.
                  </label>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-4 py-2 border-2 border-white rounded-full transition-all duration-300 transform font-nunito-sans font-medium ml-6 ${
                    isSubmitting
                      ? 'bg-gray-400 border-gray-400 text-white cursor-not-allowed'
                      : 'bg-transparent text-white hover:bg-white hover:text-black hover:scale-105'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                  {!isSubmitting && <IconArrowRight className="ml-3 w-5 h-5" />}
                </button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  ❌ {errorMessage}
                </motion.div>
              )}

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <div className="rounded-2xl p-1">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=B-4/3,%20Ground%20Floor,%20Model%20Town%201,%20Delhi,%20India%20110009&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    />

                    {/* Custom Pin Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
                      <motion.div
                        initial={{ scale: 0, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.5, type: "spring" }}
                        className="relative"
                      >
                        {/* Pin */}
                        <div className="w-8 h-8 bg-cyan-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        {/* Pin Shadow */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/20 rounded-full blur-sm"></div>

                        {/* Address Tooltip */}
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg border border-white/50">
                          B-4/3, Ground Floor, Model Town 1, Delhi - 110009
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Address Info */}
                  {/* <div className="mt-4 p-4 bg-white/5 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold font-nunito-sans mb-1">Our Location</h4>
                        <p className="text-white/80 text-sm font-nunito-sans leading-relaxed">
                          B-4/3, Ground Floor, Model Town 1<br />
                          Delhi, India - 110009
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Contact Information Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start">
                  {/* Contact Details */}
                  <div className="space-y-3 mb-8 flex-1">
                    {/* Address */}
                    <div className="flex items-start space-x-2">
                        <IconMapPinFilled className="w-4 h-6 text-white" />
                      <div>
                        <p className="text-white font-nunito-sans" style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 }}>
                          B-4/3, Ground Floor, Model Town 1, Delhi - 110009
                        </p>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start space-x-2">
                      <PhoneIcon className="w-4 h-4 text-white" />
                      <div>
                        <p className="text-white font-nunito-sans" style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 }}>
                          +91-9560402187 | +91-9810728831
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-2">
                      
                        <IconMailFilled className="w-4 h-4 text-white" />
                      <div>
                        <p className="text-white font-nunito-sans" style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '0px', fontWeight: 400 }}>
                          Info@fien.in | aventismarketing5@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Chat Section */}
                  <div className="ml-8">
                    <div className="text-center">
                      <h4 className="text-white font-nunito-sans text-lg mb-4">
                        Chat with us on WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/919560402187"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsWhatsAppHovered(true)}
                        onMouseLeave={() => setIsWhatsAppHovered(false)}
                        className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 font-nunito-sans font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                        </svg>
                        Chat With Us
                        {isWhatsAppHovered ? (
                          <IconArrowUpRight className="ml-2 w-4 h-4" />
                        ) : (
                          <IconArrowRight className="ml-2 w-4 h-4" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>

                  {/* Social Media Section */}
                  <div>
                    <h3 className="text-white font-nunito-sans text-xl mb-6">
                      Or You Can Connect with us on
                    </h3>
                    <div className="flex space-x-4">
                      {/* Facebook */}
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>

                      {/* Twitter/X */}
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                        </svg>
                      </a>

                      {/* Pinterest */}
                      <a
                        href="#"
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.091 3.169 9.435 7.644 11.189-.105-.951-.199-2.411.042-3.45.217-.936 1.403-5.955 1.403-5.955s-.358-.718-.358-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.223.085.345-.089.378-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.647 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.358-.629-2.75-1.377l-.749 2.853c-.27 1.04-.991 2.35-1.487 3.141 1.761.503 3.626.776 5.556.776 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
