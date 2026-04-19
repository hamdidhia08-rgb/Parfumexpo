"use client";

import React from "react";
import { CalendarCheck2, Users, MapPin, BarChart3 } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const features = [
  {
    icon: Users,
    title: "Event Planning Manage",
    desc: "Deliver seamless virtual experiences with high-quality streaming and interactive tools.",
  },
  {
    icon: CalendarCheck2,
    title: "Conference Coordination",
    desc: "Deliver seamless virtual experiences with high-quality streaming and interactive tools.",
  },
  {
    icon: MapPin,
    title: "Venue Booking & Setup",
    desc: "Deliver seamless virtual experiences with high-quality streaming and interactive tools.",
  },
  {
    icon: BarChart3,
    title: "Post-Event Analytics",
    desc: "Deliver seamless virtual experiences with high-quality streaming and interactive tools.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="relative py-28 text-white font-[var(--font-inter-tight)] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[#070A12]" />

  
  <FloatingParticles/>
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/30 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-[#C9A227]/20 blur-[120px] rounded-full" />

      {/* TITLE */}
      <div className="relative text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-[#C9A227]">
          Core Feature
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          Core features that power our <br />
          <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.4)]">
            exceptional services
          </span>
        </h2>
        
      </div>

      {/* CARDS */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="group relative p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
              transition-all duration-500 hover:scale-[1.03]
              hover:border-[#C9A227]/60
              hover:shadow-[0_0_40px_rgba(201,162,39,0.25)]"
            >
              {/* GLOW BORDER EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#C9A227]/10 to-transparent blur-xl" />

              {/* ICON */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-xl
              bg-[#C9A227]/10 text-[#C9A227]
              group-hover:bg-[#C9A227]/20 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.5)]
              transition">
                <Icon size={22} />
              </div>

              {/* TEXT */}
              <h3 className="relative mt-5 text-lg font-semibold group-hover:text-[#C9A227] transition">
                {item.title}
              </h3>

              <p className="relative mt-3 text-sm text-white/60 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="relative mt-6 flex items-center gap-2 text-sm text-[#C9A227] font-medium cursor-pointer
              hover:gap-4 transition-all">
                Read More →
              </div>

              {/* GLOW DOT */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#C9A227] rounded-full blur-[2px] opacity-60 group-hover:opacity-100" />
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="relative text-center mt-20 text-white/70">
        <p>
          Join our team and help weave innovation, quality, and success together worldwide.
        </p>

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="text-[#C9A227] font-semibold text-lg">4.9/5</span>
          <span className="text-[#C9A227]">★★★★★</span>
          <span className="text-white/60">Our 4200 Reviews</span>
        </div>
      </div>
    </section>
  );
}