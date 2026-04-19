"use client";

import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

// Interface pour sécuriser le typage
interface EventItem {
  id: number;
  title: string;
  desc: string;
  date: string;
  location: string;
  image: string;
}

const scheduleData: Record<string, EventItem[]> = {
  "Day 01": [
    {
      id: 1,
      title: "Creative Entrepreneurship Forum",
      desc: "Executives and innovators discuss digital transformation, leadership models, and future market opportunities.",
      date: "18 Aug' 2024",
      location: "Sterling Conference Hall",
      image: "/images/exemple1.jpg",
    },
    {
      id: 2,
      title: "Luxury Brand Strategy Summit",
      desc: "Learn how premium brands create strong identity, trust, and long-term customer loyalty worldwide.",
      date: "18 Aug' 2024",
      location: "Royal Business Lounge",
      image: "/images/exemple1.jpg",
    },
    {
      id: 3,
      title: "Global Investment Networking",
      desc: "Meet investors, founders, and business leaders looking for the next generation of innovation.",
      date: "18 Aug' 2024",
      location: "Skyline Meeting Center",
      image: "/images/exemple1.jpg",
    },
    {
      id: 4,
      title: "Digital Commerce Excellence",
      desc: "Discover strategies to scale e-commerce brands through automation and premium customer experience.",
      date: "18 Aug' 2024",
      location: "Prestige Expo Room",
      image: "/images/exemple1.jpg",
    },
  ],

  "Day 02": [
    {
      id: 5,
      title: "Future Marketing Trends",
      desc: "Discover luxury marketing strategies for modern audiences and digital platforms.",
      date: "19 Aug' 2024",
      location: "Premium Studio",
      image: "/images/exemple1.jpg",
    },
    {
      id: 6,
      title: "Innovation & Tech Summit",
      desc: "Explore future technologies transforming business operations and customer engagement.",
      date: "19 Aug' 2024",
      location: "Main Grand Hall",
      image: "/images/exemple1.jpg",
    },
    {
      id: 7,
      title: "AI Business Acceleration",
      desc: "How artificial intelligence increases productivity, growth, and smarter decisions.",
      date: "19 Aug' 2024",
      location: "Tech Vision Arena",
      image: "/images/exemple1.jpg",
    },
    {
      id: 8,
      title: "Startup Growth Conference",
      desc: "Successful founders share secrets behind scaling startups into global companies.",
      date: "19 Aug' 2024",
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
      location: "Luxury Hub Center",
      image: "/images/exemple1.jpg",
    },
    {
      id: 12,
      title: "Creative Media Experience",
      desc: "Immersive content creation, visuals, and campaigns for luxury industries.",
      date: "20 Aug' 2024",
      location: "Vision Hall",
      image: "/images/exemple1.jpg",
    },
    {
      id: 13,
      title: "High-End Customer Journey",
      desc: "Master customer satisfaction through refined service and premium experiences.",
      date: "20 Aug' 2024",
      location: "Elite Service Room",
      image: "/images/exemple1.jpg",
    },
    {
      id: 14,
      title: "Global Networking Gala",
      desc: "Meet elite professionals, CEOs, creators, and international decision makers.",
      date: "20 Aug' 2024",
      location: "Golden Palace Venue",
      image: "/images/exemple1.jpg",
    },
    {
      id: 15,
      title: "Closing Vision Ceremony",
      desc: "Celebrating innovation, success stories, and future partnerships worldwide.",
      date: "20 Aug' 2024",
      location: "Imperial Grand Stage",
      image: "/images/exemple1.jpg",
    },
  ],
};

export default function CoreFeatures() {
  const [activeTab, setActiveTab] = useState<keyof typeof scheduleData>("Day 01");

  return (
    <section className="relative py-28 text-white font-(--font-inter-tight) overflow-hidden bg-[#070A12]">
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
        
        {/* TABS (Jours en haut - Style Jaune/Doré) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {Object.keys(scheduleData).map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day as keyof typeof scheduleData)}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === day
                    ? "bg-[#C9A227] text-[#070A12] shadow-[0_0_20px_rgba(201,162,39,0.4)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS (Format horizontal de l'image) */}
        <div className="space-y-6">
          {scheduleData[activeTab].map((event) => (
            <div
              key={event.id}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl flex flex-col md:flex-row items-center p-4 md:p-5 transition-all duration-500 hover:border-[#C9A227]/40 hover:shadow-[0_0_40px_rgba(201,162,39,0.15)]"
            >
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
                <div className="flex flex-wrap gap-5 mb-4 text-xs font-medium uppercase tracking-wider text-white/50">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#C9A227]" />
                    <span>Date: <span className="text-white">{event.date}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#C9A227]" />
                    <span>Location: <span className="text-white">{event.location}</span></span>
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
  );
}