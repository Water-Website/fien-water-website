'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/dark-fien-logo.png"
              alt="FIEN Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/" 
            className={`text-black hover:border-b hover:border-white hover:font-extrabold transition-all duration-200 ${
              pathname === '/' ? 'font-extrabold' : ''
            }`}
          >
            Home
          </a>
          <a 
            href="/services" 
            className={`text-black hover:border-b hover:border-white hover:font-extrabold transition-all duration-200 ${
              pathname === '/services' ? 'font-extrabold' : ''
            }`}
          >
            Services
          </a>
          <a 
            href="/fien-water" 
            className={`text-black hover:border-b hover:border-white hover:font-extrabold transition-all duration-200 ${
              pathname === '/fien-water' ? 'font-extrabold' : ''
            }`}
          >
            FIEN Water
          </a>
          <a 
            href="/contact-us" 
            className={`text-black hover:border-b hover:border-white hover:font-extrabold transition-all duration-200 ${
              pathname === '/contact-us' ? 'font-extrabold' : ''
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-white/20 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Image
              src="/insta-filled.png"
              alt="Instagram Logo"
              width={24}
              height={24}
              className="w-5 h-5"
              priority
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-white/20 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Image
              src="/fb-filled.png"
              alt="Facebook Logo"
              width={24}
              height={24}
              className="w-5 h-5"
              priority
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-white/20 transition-colors duration-200"
            aria-label="X (Twitter)"
          >
            <Image
              src="/x-filled.png"
              alt="Twitter Logo"
              width={24}
              height={24}
              className="w-5 h-5"
              priority
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-white/20 transition-colors duration-200"
            aria-label="WhatsApp"
          >
            <Image
              src="/whatsapp-filled.png"
              alt="WhatsApp Logo"
              width={24}
              height={24}
              className="w-5 h-5"
              priority
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
