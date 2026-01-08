import Header from './components/services/Header';
import HeroSection from './components/home/HeroSection';
import AboutUsSection from './components/home/AboutUsSection';
import JourneySection from './components/home/JourneySection';
import ServicesSection from './components/home/ServicesSection';
import ContactSection from './components/home/ContactSection';
import MissionSection from './components/home/MissionSection';
import StatisticsSection from './components/home/StatisticsSection';
import OurWorkSection from './components/home/OurWorkSection';
import BottleBrandSection from './components/home/BottleBrandSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import FaqSection from './components/home/FaqSection';
import GetInTouchSection from './components/home/GetInTouchSection';
import FooterSection from './components/home/FooterSection';
import BackToTopButton from './components/home/RestartButton';

export default function Home() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Hero Section with Video Background */}
        <section className="scroll-snap-section relative overflow-hidden" data-section="home-tab">
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
        <div className="relative z-10" data-section="home-tab">
          <Header />
          <HeroSection />
        </div>
      </section>
      
      {/* About Us Section - Appears on scroll */}
      <section className="scroll-snap-section">
        <AboutUsSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Journey Section - Our Creative Process */}
      <section className="scroll-snap-section">
        <JourneySection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Services Section - End-to-End Services */}
      <section className="scroll-snap-section">
        <ServicesSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Contact Section - Great Design Quote */}
      <section className="scroll-snap-section">
        <ContactSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Mission Section - Our Mission & Vision */}
      <section className="scroll-snap-section">
        <MissionSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Statistics Section - Key Metrics */}
      <section className="">
        <StatisticsSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Our Work Section - Portfolio Showcase */}
      <section className="scroll-snap-section">
        <OurWorkSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Bottle Brand Section - Designs That Speak */}
      <section className="scroll-snap-section">
        <BottleBrandSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Testimonials Section - Customer Reviews */}
      <section className="scroll-snap-section">
        <TestimonialsSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* FAQ Section - Frequently Asked Questions */}
      <section className="scroll-snap-section">
        <FaqSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Get in Touch Section - Contact Form */}
      <section className="scroll-snap-section">
        <GetInTouchSection />
        <BackToTopButton position="bottom-right" />
      </section>
      
      {/* Footer Section - Company Info & Links */}
        <section className="scroll-snap-section">
          <FooterSection />
          <BackToTopButton position="bottom-right" />
        </section>
        </div>
        
      
    </>
  );
}