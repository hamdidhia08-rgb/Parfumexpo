'use client';

import React from 'react';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { Inter } from "next/font/google";
import Link from 'next/link';
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const RegisterCards = () => {
  const cards = [
    {
      icon: Users,
      badge: 'VISITOR ACCESS',
      title: 'Discover Luxury Fragrances',
      desc: 'Register as a visitor and explore exclusive perfume brands, premium scents, and live fragrance experiences.',
      button: 'Register Now',
    },
    {
      icon: Building2,
      badge: 'BUSINESS ACCESS',
      title: 'Showcase Your Brand',
      desc: 'Register as a company and present your perfume house, products, and connect with global buyers.',
      button: 'Register Now',
    },
  ];

  return (
    <section className={`${inter.className} w-full bg-white py-10 px-4 md:px-8`}>

      {/* TITLE */}
      <div className="text-center mb-12">
        
        <p className="text-[#C9A227] text-sm tracking-widest uppercase mb-3">
          Registration Options
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-[1.1]">
          Choose Your{" "}
          <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.3)]">
            Experience
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Join the Perfume Expo as a visitor or exhibitor and unlock exclusive opportunities.
        </p>

      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 
              bg-gradient-to-br from-white to-[#fafafa]
              min-h-[260px] p-6 md:p-7
              flex flex-col justify-between
              transition-all duration-500
              hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-56 h-56 
              bg-[#C9A227]/10 blur-3xl rounded-full 
              opacity-70
              animate-[pulse_6s_ease-in-out_infinite]
              group-hover:opacity-100
              group-hover:scale-110
              transition-all duration-700"></div>

              {/* Hover Light */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
              bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.10),transparent_55%)]"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-full bg-[#C9A227]/10 text-[#C9A227]">
                    <Icon className="w-4 h-4" />
                  </div>

                  <p className="text-[#C9A227] text-[11px] tracking-[0.25em] font-semibold">
                    {card.badge}
                  </p>
                </div>

                {/* Title */}
                <h3 className="text-[#111111] text-2xl md:text-3xl font-semibold leading-snug mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed max-w-lg">
                  {card.desc}
                </p>
              </div>

          <div className="relative z-10 mt-6">
          <Link
            href="/Register"  
            className="group/btn inline-flex items-center gap-2
            bg-[#C9A227] hover:bg-[#ddb83a]
            text-white font-medium text-sm
            px-5 py-2.5 rounded-full
            transition-all duration-300
            shadow-[0_8px_25px_rgba(201,162,39,0.18)]"
          >
            {card.button}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
          </Link>
        </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default RegisterCards;