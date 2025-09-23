import Header from '../components/services/Header';
import ServicesTabSection from '../components/services/ServicesTabSection';
import ServicesFeaturesSection from '../components/ServicesFeaturesSection';
import ServicesProcessSection from '../components/ServicesProcessSection';
import FooterSection from '../components/FooterSection';
import OurBottlesSection from '../components/services/OurBottlesSection';
import GetInTouchSection from '../components/GetInTouchSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import OurCupsSection from '../components/services/OurCupsSection';

export default function ServicesPage() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Header */}
        <section className="relative">
          <Header />
        </section>
        
        {/* Services Tab Section with Background */}
        <section className="scroll-snap-section">
          <ServicesTabSection />
        </section>

        <section className="scroll-snap-section">
          <OurBottlesSection />
        </section>

        <section className="scroll-snap-section">
          <OurCupsSection />
        </section>

        <section className="scroll-snap-section">
          <ContactSection />
        </section>
        
        {/* Services Features Section */}
        <section className="scroll-snap-section">
          <FaqSection />
        </section>
        
        {/* Services Process Section */}
        <section className="scroll-snap-section">
          <GetInTouchSection />
        </section>
        
        {/* Footer Section */}
        <section className="scroll-snap-section">
          <FooterSection />
        </section>
      </div>
    </>
  );
}
