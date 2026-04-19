"use client";

import React from "react";

export default function FloatingParticles() {
  const particles = Array.from({ length: 18 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;

        return (
          <span
            key={i}
            className="absolute bg-[#C9A227] rounded-full opacity-20 blur-[1px] animate-float"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
}