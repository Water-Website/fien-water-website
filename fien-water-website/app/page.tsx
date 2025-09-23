import Header from './components/services/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import JourneySection from './components/JourneySection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import MissionSection from './components/MissionSection';
import StatisticsSection from './components/StatisticsSection';
import OurWorkSection from './components/OurWorkSection';
import BottleBrandSection from './components/BottleBrandSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import GetInTouchSection from './components/GetInTouchSection';
import FooterSection from './components/FooterSection';
export default function Home() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Hero Section with Video Background */}
        <section className="scroll-snap-section relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Aura.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-black"></div>
        </video>
        
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
      </section>
      
      {/* About Us Section - Appears on scroll */}
      <section className="scroll-snap-section">
        <AboutUsSection />
      </section>
      
      {/* Journey Section - Our Creative Process */}
      <section className="scroll-snap-section">
        <JourneySection />
      </section>
      
      {/* Services Section - End-to-End Services */}
      <section className="scroll-snap-section">
        <ServicesSection />
      </section>
      
      {/* Contact Section - Great Design Quote */}
      <section className="scroll-snap-section">
        <ContactSection />
      </section>
      
      {/* Mission Section - Our Mission & Vision */}
      <section className="scroll-snap-section">
        <MissionSection />
      </section>
      
      {/* Statistics Section - Key Metrics */}
      <section className="">
        <StatisticsSection />
      </section>
      
      {/* Our Work Section - Portfolio Showcase */}
      <section className="scroll-snap-section">
        <OurWorkSection />
      </section>
      
      {/* Bottle Brand Section - Designs That Speak */}
      <section className="scroll-snap-section">
        <BottleBrandSection />
      </section>
      
      {/* Testimonials Section - Customer Reviews */}
      <section className="scroll-snap-section">
        <TestimonialsSection />
      </section>
      
      {/* FAQ Section - Frequently Asked Questions */}
      <section className="scroll-snap-section">
        <FaqSection />
      </section>
      
      {/* Get in Touch Section - Contact Form */}
      <section className="scroll-snap-section">
        <GetInTouchSection />
      </section>
      
      {/* Footer Section - Company Info & Links */}
      <section className="scroll-snap-section">
        <FooterSection />
      </section>
      </div>
    </>
  );
}