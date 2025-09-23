'use client';

import React, { useState } from 'react';

const GlowBackground = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden" // removed dark bg
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(0, 255, 255, 0.3), transparent 80%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default GlowBackground;
