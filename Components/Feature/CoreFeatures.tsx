"use client";

import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import FloatingParticles from "./FloatingParticles";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Interface pour sécuriser le typage
interface EventItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  location: string;
  image: string;
  time: string;
}

const scheduleData: Record<string, EventItem[]> = {
  "Day 01": [
    {
      id: 1,
      title: "Creative Entrepreneurship Forum",
      desc: "Executives and innovators discuss digital transformation, leadership models, and future market opportunities.",
      date: "18 Aug' 2024",
      time: "9:00 AM - 5:30 PM",
      location: "Sterling Conference Hall",
      image: "/images/exemple1.jpg",
    },
    {
      id: 2,
      title: "Luxury Brand Strategy Summit",
      desc: "Learn how premium brands create strong identity, trust, and long-term customer loyalty worldwide.",
      date: "18 Aug' 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Royal Business Lounge",
      image: "/images/2151623430_copy.webp",
    },
    {
      id: 3,
      title: "Global Investment Networking",
      desc: "Meet investors, founders, and business leaders looking for the next generation of innovation.",
      date: "18 Aug' 2024",
      time: "11:00 AM - 6:00 PM",
      location: "Skyline Meeting Center",
      image: "/images/interactive-process-image-1.jpg",
    }

  ],

  "Day 02": [
    {
      id: 5,
      title: "Future Marketing Trends",
      desc: "Discover luxury marketing strategies for modern audiences and digital platforms.",
      date: "19 Aug' 2024",
      time: "9:30 AM - 3:30 PM",
      location: "Premium Studio",
      image: "/images/interactive-process-image-2.jpg",
    },
    {
      id: 6,
      title: "Innovation & Tech Summit",
      desc: "Explore future technologies transforming business operations and customer engagement.",
      date: "19 Aug' 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Main Grand Hall",
      image: "/images/test2.png",
    },
    {
      id: 7,
      title: "AI Business Acceleration",
      desc: "How artificial intelligence increases productivity, growth, and smarter decisions.",
      date: "19 Aug' 2024",
      time: "11:30 AM - 6:30 PM",
      location: "Tech Vision Arena",
      image: "/images/speak2.png",
    },
    {
      id: 8,
      title: "Startup Growth Conference",
      desc: "Successful founders share secrets behind scaling startups into global companies.",
      date: "19 Aug' 2024",
      time: "2:00 PM - 8:00 PM",
      location: "NextGen Center",
      image: "/images/exemple1.jpg",
    }
  ],

  "Day 03": [
    {
      id: 11,
      title: "Future of Digital Branding",
      desc: "Build premium brands with modern storytelling and elegant digital identity.",
      date: "20 Aug' 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Luxury Hub Center",
      image: "/images/exemple1.jpg",
    },
    {
      id: 12,
      title: "Creative Media Experience",
      desc: "Immersive content creation, visuals, and campaigns for luxury industries.",
      date: "20 Aug' 2024",
      time: "10:30 AM - 4:30 PM",
      location: "Vision Hall",
      image: "/images/exemple1.jpg",
    },
    {
      id: 13,
      title: "High-End Customer Journey",
      desc: "Master customer satisfaction through refined service and premium experiences.",
      date: "20 Aug' 2024",
      time: "12:00 PM - 6:00 PM",
      location: "Elite Service Room",
      image: "/images/exemple1.jpg",
    },
    {
      id: 14,
      title: "Global Networking Gala",
      desc: "Meet elite professionals, CEOs, creators, and international decision makers.",
      date: "20 Aug' 2024",
      time: "6:00 PM - 11:00 PM",
      location: "Golden Palace Venue",
      image: "/images/exemple1.jpg",
    },
    {
      id: 15,
      title: "Closing Vision Ceremony",
      desc: "Celebrating innovation, success stories, and future partnerships worldwide.",
      date: "20 Aug' 2024",
      time: "8:00 PM - 12:00 AM",
      location: "Imperial Grand Stage",
      image: "/images/exemple1.jpg",
    },
  ],
};

export default function CoreFeatures() {
  const [activeTab, setActiveTab] = useState<keyof typeof scheduleData>("Day 01");
useEffect(() => {
  AOS.init({
    duration: 500,
    once: true,
  });

  AOS.refresh(); // 🔥 important avec React dynamique
}, []);
  return (
    <>

<section
  className="relative pt-25 py-28 text-white font-(--font-inter-tight) overflow-hidden bg-contain bg-center"
  style={{ backgroundImage: "url('/images/bg/oi.jpg')" }}
>

      <FloatingParticles />
      
      {/* BACKGROUND GLOWS (On garde tes lueurs dorées) */}
      <div className="absolute -top-30 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#C9A227]/30 blur-[140px] rounded-full" />
      <div className="absolute -bottom-30 -right-20 w-100 h-100 bg-[#C9A227]/20 blur-[120px] rounded-full" />

      {/* TITLE SECTION (Ton design original) */}
<div className="relative text-center mb-16">
  <p className="text-sm tracking-[0.3em] uppercase text-[#C9A227]">
    Exclusive Event Schedule
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
    Explore our premium <br />
    <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.4)]">
      international event program
    </span>
  </h2>


</div>

      <div className="relative max-w-6xl mx-auto px-6">
        
<div className="flex justify-center mb-12">
  <div className="inline-flex bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
    
    {Object.keys(scheduleData).map((day) => (
      <button
        key={day}
        onClick={() => setActiveTab(day as keyof typeof scheduleData)}
        className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
          activeTab === day
            ? "bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            : "text-white/60 hover:text-white hover:bg-white/10"
        }`}
      >
        {day}
      </button>
    ))}

  </div>
</div>

        {/* CARDS (Format horizontal de l'image) */}
        <div className="space-y-6">
      {scheduleData[activeTab].map((event, index) => (
                <div
                  key={event.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
className="group relative bg-white/10 border border-white/20 rounded-3xl overflow-hidden backdrop-blur-2xl flex flex-col md:flex-row items-center p-4 md:p-5 transition-all duration-500 hover:border-white/30 hover:bg-white/15"                >
              {/* IMAGE (Rectangle arrondi à gauche) */}
              <div className="w-full md:w-72 h-48 relative rounded-2xl overflow-hidden shrink-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENU TEXTE */}
              <div className="grow px-4 md:px-8 mt-6 md:mt-0">
                <div className="flex flex-wrap gap-5 mb-4 text-sm text-white/70">
                 <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#C9A227]" />
                    <span className="text-[#fff] font-semibold tracking-wide">
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#C9A227]" />
                    <span>Location : <span className="text-white">{event.location}</span></span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#C9A227] transition-colors">
                  {event.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                  {event.desc}
                </p>
              </div>

              {/* ACTIONS (Bouton et Participants) */}
              <div className="flex flex-col items-center gap-5 mt-6 md:mt-0 md:pl-6 md:border-l border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#070A12] bg-gray-700 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i + event.id}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#070A12] bg-[#C9A227] flex items-center justify-center text-[10px] font-bold text-[#070A12]">
                    50+
                  </div>
                </div>

                <button className="bg-[#C9A227] hover:bg-[#b08d20] text-[#070A12] px-7 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap active:scale-95">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ORIGINAL */}
      <div className="relative text-center mt-20 text-white/70">
        <p className="text-sm">
          Join our team and help weave innovation, quality, and success together worldwide.
        </p>
        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="text-[#C9A227] font-semibold text-lg">4.9/5</span>
          <span className="text-[#C9A227]">★★★★★</span>
          <span className="text-white/60 text-sm">Our 4200 Reviews</span>
        </div>
      </div>
    </section>
    </>
  );
}