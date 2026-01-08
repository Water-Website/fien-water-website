'use client';

import React from 'react';
import Header from '../components/services/Header';
import FienWaterHeroSection from '../components/fien-water/FienWaterHeroSection';
import HydrationSection from '../components/fien-water/HydrationSection';
import NaturePuritySection from '../components/fien-water/NaturePuritySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/fien-water/FaqSection';
import GetInTouchSection from '../components/fien-water/GetInTouchSection';
import SipSection from '../components/fien-water/SipSection';
import OurStorySection from '../components/fien-water/OurStorySection';
import FooterSection from '../components/home/FooterSection';
import RestartButton from '../components/home/RestartButton';
import QuerySection from '../components/fien-water/QuerySection';

export default function FienWaterPage() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Hero Section with Three Images */}
        <section className="scroll-snap-section relative" data-section="fien-water-hero">
          <div className="absolute top-0 left-0 right-0 z-50">
            <Header />
          </div>
          <FienWaterHeroSection />
        </section>
        
        {/* Hydration Section */}
        <section className="scroll-snap-section relative" data-section="hydration">
          <HydrationSection />
          <RestartButton position="bottom-right" />
        </section>
        
        {/* Get in Touch Section */}
        <section className="scroll-snap-section relative">
          <GetInTouchSection />
          <RestartButton position="bottom-right" />
        </section>

        {/* Nature's Purity Section */}
        <section className="scroll-snap-section relative" data-section="nature-purity">
          <NaturePuritySection />
          <RestartButton position="bottom-right" />
        </section>
        
        {/* Sip Section - Nature's Perfection */}
        <section className="scroll-snap-section relative" data-section="sip">
          <SipSection />
          <RestartButton position="bottom-right" />
        </section>
        
        {/* Our Story Section */}
        <section className="scroll-snap-section relative" data-section="our-story">
          <OurStorySection />
          <RestartButton position="bottom-right" />
        </section>
        
        <section className="scroll-snap-section relative">
          <TestimonialsSection />
          <RestartButton position="bottom-right" />
        </section>

        <section className="scroll-snap-section relative">
          <FaqSection />
          <RestartButton position="bottom-right" />
        </section>

        <section className="scroll-snap-section relative">
          <QuerySection />
          <RestartButton position="bottom-right" />
        </section>
        
        {/* Footer Section */}
        <section className="scroll-snap-section relative">
          <FooterSection />
          <RestartButton position="bottom-right" />
        </section>
      </div>
    </>
  );
}
