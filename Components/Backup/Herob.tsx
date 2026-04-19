'use client';

import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Countdown from './Countdown';

const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(true);
  }, []);

  return (
    <section className={`${inter.className} relative min-h-[110vh] w-full flex flex-col items-center justify-end text-white overflow-hidden bg-[#060116] pb-20 md:pb-24`}>
      
      {/* Background */}
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] ease-out pointer-events-none
          ${isZoomed ? 'scale-100' : 'scale-125'}`}
        style={{ backgroundImage: "url('/images/hero3.png')" }}
      >
        <div className="absolute inset-0 bg-[#1a0620]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060116]/30 to-[#060116]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-6 text-center pt-28 md:pt-52">
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-3 py-1.5 md:px-3.5 md:py-2 mb-6 md:mb-8 shadow-2xl transition-all duration-1000 delay-300
          ${isZoomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          <div className="flex -space-x-1.5 items-center">
            {[
              { src: '/images/user1.png', alt: 'User 1' },
              { src: '/images/user2.jpg', alt: 'User 2' },
              { src: '/images/user3.jpg', alt: 'User 3' },
            ].map((user, index) => (
              <div key={index} className="relative w-5 h-5 rounded-full border border-white overflow-hidden shadow-sm">
                <Image src={user.src} alt={user.alt} fill className="object-cover"/>
              </div>
            ))}
          </div>

          <span className="text-[12px] md:text-[13px] font-medium tracking-wide text-white">
            Luxury Fragrance Experience
          </span>
        </div>

        {/* TITLE */}
        <h1 className={`text-[34px] leading-[1.2] md:text-[72px] font-[800] md:leading-[1.1] mb-4 md:mb-6 max-w-5xl mx-auto tracking-[-0.04em] transition-all duration-1000 delay-500
          ${isZoomed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Discover the Art of <br className="hidden md:block" />
          Luxury Perfumes
        </h1>

        {/* DESCRIPTION */}
        <p className={`text-white/80 text-[14px] md:text-[17px] max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light transition-all duration-1000 delay-700
          ${isZoomed ? 'opacity-100' : 'opacity-0'}`}>
          Discover a refined fragrance exhibition where elegance meets creativity—explore exclusive scents and meet world-class perfumers.
        </p>

        {/* BUTTONS */}
        <div className={`flex flex-row items-center justify-center gap-2 md:gap-6 mb-12 md:mb-20 transition-all duration-1000 delay-1000 ${
         isZoomed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          
          {/* PRIMARY BUTTON */}
       <button className="bg-[#FF4D8D] hover:bg-[#e8437c] text-white px-4 py-2 md:px-9 md:py-2.5 rounded-full font-bold text-[12px] md:text-[15px] transition-all shadow-[0_10px_40px_rgba(255,77,141,0.25)] active:scale-95 whitespace-nowrap">
            <span className="hidden sm:inline">Explore Exhibition</span>
            <span className="sm:hidden">Explore</span>
          </button>
          {/* VIDEO BUTTON */}
        <button className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          <div className="relative w-9 h-9 md:w-12 md:h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#FF4D8D]/40 animate-ping opacity-60"></div>
            <div className="absolute inset-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"></div>

            <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#FF4D8D] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Play className="fill-white w-3 h-3 md:w-4 md:h-4 ml-0.5 text-white" />
            </div>
          </div>

          <span className="font-bold text-[12px] md:text-[15px] tracking-wide group-hover:text-[#FF4D8D] transition-colors whitespace-nowrap">
            <span className="hidden sm:inline">Watch Experience</span>
            <span className="sm:hidden">Watch</span>
          </span>
        </button>
        </div>

        <Countdown/>
      </div>
    </section>
  );
};

export default Hero;