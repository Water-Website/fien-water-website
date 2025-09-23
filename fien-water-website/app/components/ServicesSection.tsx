'use client';
import React, { useState, useEffect, useRef } from 'react';

import Image from 'next/image';
// Import service images
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';

interface Service {
  id: number;
  name: string;
  title: string;
  description: string;
  additionalText: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);
  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showServicesHeader, setShowServicesHeader] = useState<boolean>(false);
  const [showHeading, setShowHeading] = useState<boolean>(false);
  const [showTabs, setShowTabs] = useState<boolean>(false);
  const [showServiceContent, setShowServiceContent] = useState<boolean>(false);
  const [visibleTabIndex, setVisibleTabIndex] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: 1,
      name: 'Service 1',
      title: 'Service 1',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      additionalText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/services/service-one.png'
    },
    {
      id: 2,
      name: 'Service 2',
      title: 'Service 2',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      additionalText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/services/service-two.png'
    },
    {
      id: 3,
      name: 'Service 3',
      title: 'Service 3',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      additionalText: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/services/service-three.png'
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
      const timeouts = [
        setTimeout(() => setShowServicesHeader(true), 300),
        setTimeout(() => setShowHeading(true), 800),
        setTimeout(() => setShowTabs(true), 1400),
        setTimeout(() => setShowServiceContent(true), 2400)
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isVisible]);

  // Staggered tab animation
  useEffect(() => {
    if (showTabs) {
      services.forEach((_, index) => {
        setTimeout(() => {
          setVisibleTabIndex(index);
        }, index * 200); // 200ms delay between each tab
      });
    }
  }, [showTabs]);

  // Auto-cycle through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev: number) => prev === 3 ? 1 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getServiceStyle = (serviceId: number): React.CSSProperties => {
    const currentIndex = activeService - 1;
    const serviceIndex = serviceId - 1;
    const offset = serviceIndex - currentIndex;
    
    // Clean single card display with smooth transitions
    let translateY: number;
    let translateZ: number;
    let rotateX: number;
    
    if (offset < 0) {
      // Previous services - completely hidden but ready for transition
      translateY = -100; // Move up and out of view
      translateZ = -100; // Push back in Z space
      rotateX = -15; // Rotate away
    } else if (offset === 0) {
      // Current active service (centered and visible)
      translateY = 0;
      translateZ = 0;
      rotateX = 0;
    } else {
      // Future services - completely hidden but ready for transition
      translateY = 100; // Move down and out of view
      translateZ = -100; // Push back in Z space
      rotateX = 15; // Rotate away
    }
    
    // Enhanced z-index for proper layering
    const zIndex = 100 + (10 - Math.abs(offset)) * 10;
    
    // Scale effect for depth perception
    const scale = offset === 0 ? 1 : Math.max(0.92, 1 - Math.abs(offset) * 0.04);
    
    // Opacity for clean single card display
    let opacity: number;
    if (offset === 0) {
      opacity = 1; // Active card fully visible
    } else {
      opacity = 0; // All other cards completely hidden
    }
    
    // Enhanced shadows for 3D depth
    let boxShadow: string;
    if (offset === 0) {
      boxShadow = '0 40px 80px -20px hsl(0 0% 0% / 0.4), 0 0 0 1px hsl(var(--services-cyan) / 0.2), 0 0 60px hsl(var(--services-cyan) / 0.15)';
    } else if (offset === -1) {
      boxShadow = '0 20px 40px -10px hsl(0 0% 0% / 0.25)';
    } else {
      boxShadow = '0 10px 20px -5px hsl(0 0% 0% / 0.15)';
    }
    
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: zIndex,
      transform: `translateY(${translateY}%) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
      opacity: opacity,
      transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      transformOrigin: 'center center',
      transformStyle: 'preserve-3d',
      boxShadow: boxShadow,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
    };
  };

  const handleServiceClick = (serviceId: number) => {
    if (serviceId !== activeService) {
      setActiveService(serviceId);
    }
  };

  return (
    <>
      {/* Header Section */}
      <section ref={sectionRef} className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className={`text-center mb-8 transition-all duration-1200 ease-out transform ${
            showServicesHeader 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <span className="text-gray-900 text-sm tracking-wider border-b-2 border-solid pb-1 font-nunito-sans" 
                  style={{ borderColor: 'hsl(var(--services-cyan))' }}>
              Our Services
            </span>
          </div>

          {/* Main Heading */}
          <div className={`text-center transition-all duration-1200 ease-out transform ${
            showHeading 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h1 
              className="text-gray-900 mb-6 text-center font-bold leading-tight"
              style={{ 
                fontSize: '46px',
                fontWeight: 900,
                lineHeight: '100%',
                letterSpacing: '0px' }}
            >
              End-to-End Services That Bring Your
              <br />
              Brand to Life
            </h1>
            <p 
              className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed font-nunito-sans"
              style={{  
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '100%', }}
            >
              Our creative process covers strategy, design, and production – delivering high-quality branded essentials that connect with people where it matters most
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Wave Background */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute bg-white inset-0">
          <Image
            src='/services/service-wave.png'
            alt="Wave Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Services Content */}
        <div className="relative z-10 pt-16 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-center items-center gap-12">
              {/* Left Side - Service Tabs */}
              <div className="flex-none w-64">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={service.id} className={`transition-all duration-700 ease-out transform ${
                      visibleTabIndex >= index
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}>
                            <button
                        onClick={() => handleServiceClick(service.id)}
                        className={'w-full transition-all duration-300 ease-out transform'}
                      >
                        <div className={`flex items-center relative ${
                          activeService === service.id ? 'justify-start' : 'justify-end'
                        }`}>
                          <span className={`${
                            activeService === service.id
                              ? 'text-black font-bold text-xl'
                              : 'text-lg text-gray-400 font-normal group-hover:text-gray-600'
                         }`}>
                            {service.name}
                          </span>
                          {activeService === service.id && (
                            <div 
                              className="flex-1 h-0.5 ml-6 animate-slideInRight bg-gray-900"
                              // style={{ 
                              //   background: 'var(--gradient-services)'
                              // }}
                            ></div>
                          )}
                          {activeService === service.id && (
                            <div 
                              className="absolute inset-0 rounded-lg -z-0 animate-fadeInUp"
                              // style={{
                              //   background: 'var(--gradient-subtle)'
                              // }}
                            ></div>
                          )}
                        </div>
                      </button>
                      {index < services.length - 1 && (
                        <div className={`h-px my-4 transition-all duration-300 bg-gray-900 ${
                          activeService === service.id || activeService === service.id + 1
                            ? 'opacity-100'
                            : 'opacity-30'
                        }`} 
                        // style={{
                        //   background: activeService === service.id || activeService === service.id + 1
                        //     ? 'var(--gradient-services)'
                        //     : 'hsl(var(--services-gray-400))'
                        // }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Carousel with Enhanced 3D */}
              <div className={`w-full max-w-5xl transition-all duration-1200 ease-out transform ${
                showServiceContent 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-12 scale-90'
              }`}>
                {/* 3D Container for stacked cards */}
                <div className="services-3d-container relative h-[500px] rounded-2xl overflow-visible">
                  {services.map((service) => (
                    <div 
                      key={service.id} 
                      className={`services-card ${activeService === service.id ? 'active' : ''}`}
                      style={getServiceStyle(service.id)}
                    >
                      <div className="flex relative rounded-2xl w-full h-full overflow-hidden bg-card">
                        {/* Image Section with enhanced animation */}
                        <div className="w-1/2 h-full relative overflow-hidden">
                          <div className={`w-full h-full ${activeService === service.id ? 'animate-imageSlideOver' : ''}`}>
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                          </div>
                        </div>

                        <div className="absolute -top-6 right-40 z-10">
                          <Image
                            src="/services/service-upper-circle.png"
                            alt="Upper Circle"
                            width={200}
                            height={150}
                          />
                        </div>
                        
                        {/* Lower Circle - positioned at bottom left corner of content */}
                        <div className="absolute -bottom-8 -right-8 z-10">
                          <Image
                            src="/services/service-lower-circle.png"
                            alt="Lower Circle"
                            width={200}
                            height={150}
                          />
                        </div>
                        
                        {/* Content Section with text slide over effect */}
                        <div className="w-1/2 p-8 flex flex-col justify-center space-y-6 bg-gray-900" >
                          <div className={`${activeService === service.id ? 'animate-textSlideOver' : ''}`}>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {service.title}
                            </h3>
                            
                            <div className="space-y-4">
                              <p className="text-white/90 leading-relaxed text-sm">
                                {service.description}
                              </p>
                              
                              <p className="text-white/80 leading-relaxed text-sm">
                                {service.additionalText}
                              </p>
                            </div>
                          </div>

                          <div className={`${activeService === service.id ? 'animate-textSlideOver' : ''}`} 
                               style={{ animationDelay: '0.2s' }}>
                            <button 
                              className="services-button self-start"
                              onMouseEnter={() => setIsButtonHovered(true)}
                              onMouseLeave={() => setIsButtonHovered(false)}
                            >
                              Learn More
                              <div className="relative w-5 h-5 ml-2">
                                <IconArrowRight 
                                  className={`w-5 h-5 absolute transition-all duration-200 ${
                                    isButtonHovered 
                                      ? 'opacity-0 transform translate-x-1 -translate-y-1' 
                                      : 'opacity-100 transform translate-x-0 translate-y-0'
                                  }`} 
                                />
                                <IconArrowUpRight
                                  className={`w-5 h-5 absolute transition-all duration-200 ${
                                    isButtonHovered 
                                      ? 'opacity-100 transform translate-x-0 translate-y-0' 
                                      : 'opacity-0 transform -translate-x-1 translate-y-1'
                                  }`} 
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;