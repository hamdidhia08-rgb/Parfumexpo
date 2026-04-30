'use client';

import { Clock, MapPin, ArrowRight } from "lucide-react";

export default function EventCard({ event }: any) {
  return (
    <div className="group relative bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center p-4 md:p-5 transition-all duration-300 hover:border-[#C9A227] hover:bg-white/15">
      
      {/* IMAGE */}
      <div className="w-full md:w-72 aspect-[16/9] md:h-48 relative rounded-xl md:rounded-2xl overflow-hidden shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className="w-full px-0 md:px-8 mt-4 md:mt-0">

        {/* TIME + LOCATION */}
        <div className="flex items-center flex-wrap md:flex-nowrap gap-3 md:gap-5 mb-3 text-xs md:text-sm text-white/70">
          
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
            <Clock size={14} className="text-[#C9A227]" />
            <span className="text-white font-semibold">
              {event.time}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#C9A227]" />
            <span className="text-white">
              {event.location}
            </span>
          </div>

        </div>

        {/* TITLE */}
        <h3 className="text-lg md:text-2xl font-bold mb-2 group-hover:text-[#C9A227] transition-colors">
          {event.title}
        </h3>

        {/* DESC */}
        <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-2xl">
          {event.desc}
        </p>
      </div>

      {/* ACTION */}
      <div className="w-full md:w-auto flex md:flex-col items-center justify-between md:justify-center gap-4 mt-4 md:mt-0 md:pl-6 md:border-l border-white/10">
        
        {/* USERS */}
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-[#070A12] bg-gray-700 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${i + event.id}`} />
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-[#070A12] bg-[#C9A227] flex items-center justify-center text-[10px] font-bold text-black">
            50+
          </div>
        </div>

        {/* BUTTON INLINE */}
     <button className="flex items-center gap-2 bg-[#C9A227] hover:bg-[#b08d20] text-black px-5 md:px-6 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all active:scale-95 whitespace-nowrap">
  <span>Read More</span>
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</button>
      </div>

    </div>
  );
}