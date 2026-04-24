"use client";
import React from "react";

const Countdown = () => {

  // 👉 valeurs statiques (tu peux changer comme tu veux)
  const data = [
    { label: 'Days', value: 120 },
    { label: 'Hours', value: 18 },
    { label: 'Minutes', value: 45 },
    { label: 'Seconds', value: 12 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 md:mt-0">
      
      {/* TEXT TOP */}
      <div className="flex items-center justify-center gap-5 mb-5 md:mb-10">
        <div className="h-px w-10 md:w-20 bg-white/30"></div>

        <span className="text-[10px] md:text-[12px] font-medium uppercase tracking-[0.3em] text-white/70 text-center leading-snug">
          Upcoming Fragrance -
          <br className="md:hidden" />
          Don't Miss Out
        </span>

        <div className="h-px w-10 md:w-20 bg-white/30"></div>
      </div>

      {/* BOXES */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl md:rounded-2xl py-4 md:py-8 px-1 md:px-2 backdrop-blur-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-20 blur-2xl"></div>

            <div className="relative z-10 text-center">
              <div className="text-xl md:text-4xl font-[800] mb-1 tracking-tighter text-white">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-white text-[10px] md:text-[15px] font-medium leading-tight">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;