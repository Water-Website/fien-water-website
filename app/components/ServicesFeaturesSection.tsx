'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IconStar, IconUsers, IconTrendingUp, IconShield } from '@tabler/icons-react';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const ServicesFeaturesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features: Feature[] = [
    {
      id: 1,
      icon: <IconStar className="w-12 h-12" />,
      title: 'Premium Quality',
      description: 'We deliver exceptional quality in every project, ensuring your brand stands out with professional excellence.',
      stat: '99%'
    },
    {
      id: 2,
      icon: <IconUsers className="w-12 h-12" />,
      title: 'Expert Team',
      description: 'Our experienced professionals bring decades of combined expertise to create innovative solutions.',
      stat: '50+'
    },
    {
      id: 3,
      icon: <IconTrendingUp className="w-12 h-12" />,
      title: 'Proven Results',
      description: 'Track record of successful projects that drive growth and deliver measurable business impact.',
      stat: '200+'
    },
    {
      id: 4,
      icon: <IconShield className="w-12 h-12" />,
      title: 'Reliable Support',
      description: 'Comprehensive support throughout your journey with dedicated account management and ongoing assistance.',
      stat: '24/7'
    }
  ];

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Sequential animation effect
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowFeatures(true), 300);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-gray-600 text-sm tracking-wider border-b-2 border-cyan-400 pb-2 font-nunito-sans mb-6 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight mb-6">
            What Sets Us
            <br />
            <span className="text-cyan-600">Apart</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine innovation, expertise, and dedication to deliver services that exceed expectations
            and drive meaningful results for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out transform ${
          showFeatures 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-cyan-600 mb-6">
                {feature.icon}
              </div>
              
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {feature.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out transform ${
          showFeatures 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFeaturesSection;




