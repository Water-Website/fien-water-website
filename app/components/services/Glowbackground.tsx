'use client';

import React, { useState } from 'react';

const GlowBackground = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>

      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 255, 255, 0.15), transparent 80%)`,
        }}
      ></div>
    </div>
  );
};

export default GlowBackground;
