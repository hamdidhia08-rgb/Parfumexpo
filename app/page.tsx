"use client";

import { useEffect, useState } from "react";
import { Oswald } from "next/font/google";
import { MapPin, CalendarDays } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {

  // ✅ CORRECTION DATE (08 July 2026)
  const targetDate = new Date("2026-07-08T00:00:00Z").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // ✅ STOP SI TERMINÉ
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox = ({ value, label }: any) => (
    <div className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
      <span className="text-4xl md:text-5xl font-bold text-yellow-400">
        {value}
      </span>
      <span className="text-xs tracking-widest text-gray-300 mt-1 uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center ${oswald.className}`}
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/comming.png"
          alt="Perfume Expo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-gray-400 tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
          Our New Website
        </p>

        {/* MAIN TITLE */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold text-white mb-6 uppercase leading-[1.05]">
          Coming Soon
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          A new era of luxury fragrance begins. Experience exclusive scents,
          elite brands, and unforgettable moments at the most prestigious perfume exhibition.
        </p>

        {/* EVENT INFO CLEAN */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 text-gray-300 text-sm sm:text-base">

          <div className="flex items-center gap-2 whitespace-nowrap">
            <MapPin size={16} className="text-gray-400" />
            <span>WOW Hotel Istanbul</span>
          </div>

          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <CalendarDays size={16} className="text-gray-400" />
            <span>08 July 2026</span>
          </div>

        </div>

        {/* COUNTDOWN */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-yellow-400/10 to-transparent blur-2xl"></div>
    </section>
  );
}