'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IconArrowRight } from '@tabler/icons-react';

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
}

const ServicesProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and market landscape to develop a comprehensive strategy.',
      icon: '🔍'
    },
    {
      id: 2,
      number: '02',
      title: 'Design & Planning',
      description: 'Our creative team develops innovative concepts and detailed plans that align with your brand vision and objectives.',
      icon: '🎨'
    },
    {
      id: 3,
      number: '03',
      title: 'Development & Creation',
      description: 'We bring concepts to life through expert development, utilizing cutting-edge technologies and best practices.',
      icon: '⚡'
    },
    {
      id: 4,
      number: '04',
      title: 'Testing & Refinement',
      description: 'Rigorous testing and quality assurance ensure every detail meets our high standards and your expectations.',
      icon: '🔧'
    },
    {
      id: 5,
      number: '05',
      title: 'Launch & Support',
      description: 'We handle the launch process and provide ongoing support to ensure continued success and optimization.',
      icon: '🚀'
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
      setTimeout(() => setShowSteps(true), 300);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-gray-600 text-sm tracking-wider border-b-2 border-cyan-400 pb-2 font-nunito-sans mb-6 inline-block">
            Our Process
          </span>
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight mb-6">
            How We Work
            <br />
            <span className="text-cyan-600">Together</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery through structured phases,
            clear communication, and continuous collaboration.
          </p>
        </div>

        {/* Process Steps */}
        <div className={`transition-all duration-1000 ease-out transform ${
          showSteps 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className="relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-3xl text-center mb-4">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except for last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-20 -right-4 z-20 w-8 h-8 bg-white rounded-full border-4 border-cyan-400 items-center justify-center">
                      <IconArrowRight className="w-4 h-4 text-cyan-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ease-out transform ${
          showSteps 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's begin your project journey with a detailed consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcessSection;




