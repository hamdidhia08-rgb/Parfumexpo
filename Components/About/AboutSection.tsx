'use client';

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutSection() {
  const avatars = [
    "/images/user1.png",
    "/images/user2.jpg",
    "/images/user3.jpg",
    "/images/user4.jpg",
  ];

  return (
    <section className={`${inter.className} relative w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 lg:px-20 py-24 bg-white overflow-hidden`}>
      
      {/* BLOC IMAGE */}
      <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-end lg:pr-12">
          <div className="relative w-[340px] h-[420px] md:w-[420px] md:h-[540px]">
          
          {/* IMAGE */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl z-10">
            <Image
              src="/images/carousel-1.png"
              alt="About Experience"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* DÉCOR */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-50 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -top-8 -left-8 w-20 h-20 border-4 border-[#FF4D8D]/10 rounded-full"></div>

          {/* ✅ CARTE FLOTTANTE FIX */}
          <div className="absolute top-6 right-3 md:-right-6 bg-white/80 backdrop-blur-lg px-4 py-3 rounded-2xl shadow-xl border border-white/40 z-20">
            <p className="text-xs text-gray-400">Experience</p>
            <p className="text-lg font-black text-gray-900">10+ Years</p>
          </div>

          {/* ✅ PETIT BADGE PREMIUM */}
          <div className="absolute bottom-6 left-6 bg-black/80 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
            Luxury Events
          </div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-50 rounded-full -z-0 animate-pulse opacity-60"></div>
          <div className="absolute -top-8 -left-8 w-20 h-20 border-4 border-[#FF4D8D]/10 rounded-full -z-0"></div>
        </div>
      </div>

      {/* BLOC TEXTE - Espacements verticaux réduits */}
      <div className="w-full lg:w-[50%] mt-12 lg:mt-0 flex flex-col items-start">
        
        {/* Distance réduite sous le badge (mb-3 au lieu de mb-6) */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-10 h-[2px] bg-[#FF4D8D]"></span>
          <p className="text-[#FF4D8D] font-extrabold text-xs uppercase tracking-[0.3em]">
            Discover Our Story
          </p>
        </div>

        {/* Distance réduite sous le titre (mb-4 au lieu de mb-8) */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-7 tracking-tight">
          Your trusted partners in <br />
          <span className="text-gray-400">exceptional experiences.</span>
        </h2>

        {/* Distance réduite entre les paragraphes (space-y-2) et sous le bloc (mb-6 au lieu de mb-12) */}
        <div className="space-y-2 max-w-xl mb-6">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
            We combine world-class creativity and seamless execution to deliver events that leave a lasting impression.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Our team works closely with you to craft purpose-driven experiences that elevate your brand to new heights.
          </p>
        </div>

        {/* SECTION AVATARS + BOUTON - Espacement réduit (space-y-6 au lieu de 10) */}
        <div className="w-full space-y-6">
          
          <div className="flex items-center justify-between bg-gray-50/80 p-5 rounded-3xl border border-gray-100 max-w-md shadow-sm">
            <div className="space-y-1">
              <p className="text-sm md:text-base font-black text-gray-800 leading-none">
                Trusted by Thousands
              </p>
              <p className="text-xs text-gray-400 font-medium">Across our global events</p>
            </div>
            <div className="flex -space-x-4">
              {avatars.map((src, i) => (
                <div key={i} className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-sm">
                  <Image 
                    src={src} 
                    alt={`User ${i}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border-4 border-white bg-[#FF4D8D] flex items-center justify-center text-[10px] md:text-xs font-black text-white z-10 shadow-sm">
                50+
              </div>
            </div>
          </div>

          <button className="px-10 py-4 bg-[#FF4D8D] text-white font-black rounded-full hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300 w-fit text-sm uppercase tracking-widest">
            More About Us
          </button>
          
        </div>
      </div>
    </section>
  );
}