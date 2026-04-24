"use client";

import Image from "next/image";
import { Phone, Layers, Users,ArrowRight } from "lucide-react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
   <section className={`py-12 sm:py-16 mt-10 ${inter.className}`}>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-0 items-center">

    {/* LEFT SIDE */}
    <div className="relative w-full max-w-[520px] hidden lg:block">

      <Image
        src="/images/about/about-us.png"
        alt="dots"
        width={200}
        height={200}
        className="absolute top-14 right-0 z-0 opacity-60 animate-float"
      />

      <div className="relative rounded-2xl overflow-hidden z-10 -ml-6">
        <Image
          src="/images/about/testi.png"
          alt="event"
          width={460}
          height={520}
          className="rounded-2xl object-cover h-[540px]"
        />
      </div>

      <div className="absolute -bottom-14 -right-10 w-[70%] border-[6px] border-white rounded-2xl overflow-hidden shadow-xl z-20">
        <Image
          src="/images/about/about3.png"
          alt="event"
          width={400}
          height={300}
          className="object-cover rounded-2xl"
        />
      </div>

      {/* CIRCLE */}
      <div className="absolute top-[42%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] flex items-center justify-center z-30">

        <div className="absolute inset-0 rounded-full bg-[#FFC400] border-[6px] border-white shadow-lg"></div>
        <div className="absolute w-[75px] h-[75px] bg-white rounded-full"></div>

        <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              />
            </defs>

            <text fill="black" fontSize="7" letterSpacing="1.2" fontWeight="900">
              <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                • YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="relative z-10 w-[70px] h-[70px] bg-[#F6F6F7] rounded-full flex items-center justify-center p-2">
          <span className="text-black font-black text-2xl">25+</span>
        </div>
      </div>

      {/* BADGE */}
      <div className="absolute -left-20 bottom-16 bg-slate-900 text-white px-6 py-6 rounded-xl flex items-center gap-3 shadow-xl ring-2 ring-white z-30">
        <Layers size={28} className="text-[#FFC400]" />

        <div>
          <h3 className="text-xl font-bold">10 000+</h3>
          <p className="text-sm text-gray-300">Global Attendees</p>
        </div>
      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="max-w-[800px]">

      <div className="flex items-center gap-1.5 mb-2">
        <span className="w-1.5 h-1.5 bg-[#FFC400] rounded-full"></span>

        <p className="text-[#505361] font-medium text-xs sm:text-sm">
          Perfume Exhibition
        </p>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
        Experience the Essence of{" "}
        <span className="text-[#C9A227]">Luxury Fragrance</span>
      </h1>

      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
        Step into a world where scent becomes art. Our exclusive perfume exhibition brings together 
        prestigious brands, rare creations, and immersive experiences designed to awaken your senses 
        and redefine elegance.
      </p>

      {/* Cards */}
      <div className="space-y-4">

        <div className="bg-gray-100 p-4 sm:p-5 rounded-xl flex gap-4 items-center">
          <div className="bg-[#1E1E22] text-white p-3 rounded-lg">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold">Premium Brand Showcases</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Discover exclusive collections from world-class perfume houses.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 sm:p-5 rounded-xl flex gap-4 items-center">
          <div className="bg-[#1E1E22] text-white p-3 rounded-lg">
            <Users size={20} />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold">Immersive Fragrance Experience</h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Engage your senses with unique scent journeys and live demonstrations.
            </p>
          </div>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">

        <button className="group flex items-center gap-3 bg-[#FFC400] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition hover:opacity-90">
          <span>Explore Exhibition</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="bg-[#FFC400] text-black p-3 rounded-full">
            <Phone size={18} />
          </div>
          <div>
            <p className="font-semibold text-sm sm:text-base">Contact Us</p>
            <p className="text-xs sm:text-sm text-gray-500">+90 538 507 39 47</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
  );
}