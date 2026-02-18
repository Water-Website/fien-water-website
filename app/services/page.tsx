import ServicesTabSection from '../components/services/ServicesTabSection';
import ServicesFeaturesSection from '../components/home/ServicesFeaturesSection';
import ServicesProcessSection from '../components/home/ServicesProcessSection';
import FooterSection from '../components/home/FooterSection';
import OurBottlesSection from '../components/services/OurBottlesSection';
import GetInTouchSection from '../components/home/GetInTouchSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import OurCupsSection from '../components/services/OurCupsSection';
import OurFienWaterSection from '../components/services/OurFienWaterSection';
import BackToTopButton from '../components/home/RestartButton';

export default function ServicesPage() {
  return (
    <>
      <div className="scroll-snap-container">
        {/* Services Tab Section with Background */}
        <section className="scroll-snap-section relative" data-section="services-tab">
          <ServicesTabSection />
        </section>

        <section className="scroll-snap-section relative">
          <OurBottlesSection />
        </section>

        <section className="scroll-snap-section relative">
          <OurCupsSection />
        </section>

        <section className="scroll-snap-section relative">
          <OurFienWaterSection />
        </section>

        <section className="scroll-snap-section relative">
          <ContactSection />
        </section>
        
        {/* Services Features Section */}
        <section className="scroll-snap-section relative">
          <FaqSection />
        </section>
        
        {/* Services Process Section */}
        <section className="scroll-snap-section relative">
          <GetInTouchSection />
        </section>
        
        {/* Footer Section */}
        <section className="scroll-snap-section relative">
          <FooterSection />
        </section>
      </div>
      <BackToTopButton position="bottom-right" />
    </>
  );
}
