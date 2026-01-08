'use client';

import React from 'react';
import Header from '../components/services/Header';
import ContactUsSection from '../components/contact-us/ContactUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FooterSection from '../components/home/FooterSection';
import BackToTopButton from '../components/home/RestartButton';

export default function ContactUsPage() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Header */}
        <section className="relative" data-section="contact-us">
          <Header />
          
        </section>
        
        {/* Contact Us Form Section */}
        <section className="scroll-snap-section relative" data-section="contact-us">
          <ContactUsSection />
          <BackToTopButton position="bottom-right" />
        </section>

        {/* Testimonials Section */}
        <section className="scroll-snap-section relative">
          <TestimonialsSection />
          <BackToTopButton position="bottom-right" />
        </section>
        
        {/* Footer Section */}
        <section className="scroll-snap-section relative">
          <FooterSection />
          <BackToTopButton position="bottom-right" />
        </section>
      </div>
    </>
  );
}
