"use client";

import React from "react";

export default function FloatingParticles() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 8 + 2;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-[#C9A227] opacity-30 blur-[2px]"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `
                floatY ${6 + Math.random() * 10}s ease-in-out infinite,
                floatX ${8 + Math.random() * 12}s ease-in-out infinite,
                glow ${3 + Math.random() * 4}s ease-in-out infinite
              `,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
}