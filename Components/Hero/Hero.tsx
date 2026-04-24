'use client';

import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Countdown from '@/Components/Hero/Countdown';
import Marquee from '../About/Marquee';

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(true);
  }, []);

  return (
<section
  className={`${inter.className} relative min-h-[110vh] w-full flex flex-col items-center justify-start md:justify-end text-white overflow-hidden bg-[#0B0B0B] pb-10 md:pb-24`}
>
      {/* Background */}
      <div
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[7000ms] ease-out pointer-events-none
        ${isZoomed ? 'scale-100' : 'scale-110'}`}
        style={{
          backgroundImage: "url('/images/bg/Parfum.png')",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#0B0B0B]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_55%)]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-5 md:px-6 text-center pt-40 md:pt-52">
        
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8 shadow-2xl transition-all duration-1000 delay-300
          ${isZoomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex -space-x-1.5 items-center">
            {[
              { src: '/images/user1.png', alt: 'User 1' },
              { src: '/images/user2.jpg', alt: 'User 2' },
              { src: '/images/user3.jpg', alt: 'User 3' },
            ].map((user, index) => (
              <div
                key={index}
                className="relative w-5 h-5 rounded-full border border-white/20 overflow-hidden shadow-sm"
              >
                <Image src={user.src} alt={user.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          <span className="text-[12px] md:text-[13px] font-medium tracking-wide text-white/90">
            Luxury Fragrance Experience
          </span>
        </div>

        {/* TITLE */}
        <h1
          className={`text-[36px] leading-[1.15] md:text-[74px] font-[800] md:leading-[1.05] mb-5 md:mb-6 max-w-5xl mx-auto tracking-[-0.04em] transition-all duration-1000 delay-500
          ${isZoomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="hidden md:inline">
            Discover the Art of <br />
            <span className="text-white">Luxury </span>
            <span className="text-[#C9A227]">Perfumes</span>
          </span>

          <span className="md:hidden">
            Discover the Art of <br />
            <span className="text-white">Luxury </span>
            <span className="text-[#C9A227]">Perfumes</span>
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`text-white/70 text-[14px] md:text-[18px] max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light transition-all duration-1000 delay-700
          ${isZoomed ? 'opacity-100' : 'opacity-0'}`}
        >
          Discover a refined fragrance exhibition where elegance meets creativity—explore exclusive scents and meet world-class perfumers.
        </p>

{/* BUTTONS */}
<div
  className={`flex flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-20 transition-all duration-1000 delay-1000 ${
    isZoomed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  }`}
>

  {/* PRIMARY BUTTON (inchangé propre) */}
  <button className="bg-[#C9A227] hover:bg-[#E0B93B] text-black px-6 py-2.5 md:px-9 md:py-3 rounded-full font-bold text-[12px] md:text-[15px] transition-all shadow-[0_10px_40px_rgba(201,162,39,0.25)] active:scale-95 whitespace-nowrap">
    Explore Exhibition
  </button>

  {/* VIDEO BUTTON */}
  <button className="flex items-center gap-2 md:gap-4 group cursor-pointer">
<div className="relative w-9 h-9 md:w-12 md:h-12 flex items-center justify-center">

  {/* Glow glass animé (remplace ping) */}
  <span className="absolute inset-0 rounded-full 
    bg-white/10 backdrop-blur-xl 
    animate-glow-ring"></span>

  {/* Halo doux */}
  <span className="absolute inset-0 rounded-full 
    bg-[#C9A227]/20 blur-md 
    animate-glow-soft"></span>

  {/* Border glass */}
  <span className="absolute inset-0 rounded-full 
    border border-white/20"></span>

  {/* Inner button */}
  <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full 
    bg-white/10 backdrop-blur-xl border border-white/20
    flex items-center justify-center 
    shadow-[0_8px_30px_rgba(255,255,255,0.08)]
    transition-all duration-300 hover:scale-110">

    <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5 text-white" />

  </div>

</div>

    <span className="font-semibold text-[12px] md:text-[15px] text-white group-hover:text-[#C9A227] transition-colors whitespace-nowrap">
      Watch Experience
    </span>

  </button>

</div>

        {/* COUNTDOWN */}
        <Countdown />
      </div>
      {/* MARQUEE */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee/>
      </div>
    </section>
  );
};

export default Hero;