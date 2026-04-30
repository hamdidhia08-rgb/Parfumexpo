'use client';

import React, { useState } from "react";
import FloatingParticles from "./FloatingParticles";
import { Inter } from "next/font/google";
import EventCard from "./EventCard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
  const [activeTab, setActiveTab] = useState("Day 01");

  return (
    <section
      className={`${inter.className} relative pt-20 pb-24 text-white overflow-hidden bg-contain bg-center`}
      style={{ backgroundImage: "url('/images/bg/oi.jpg')" }}
    >
      <FloatingParticles />

      {/* GLOW */}
{/* TOP GLOW */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/25 blur-[160px] rounded-full pointer-events-none" />

{/* SIDE SOFT GLOW */}
<div className="absolute top-40 -left-20 w-[300px] h-[300px] bg-[#C9A227]/10 blur-[120px] rounded-full pointer-events-none" />

{/* BOTTOM GLOW */}
<div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-[#C9A227]/15 blur-[140px] rounded-full pointer-events-none" />
      {/* TITLE */}
      <div className="text-center mb-12 px-4">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#C9A227]">
          Exclusive Event Schedule
        </p>

        <h2 className="mt-3 text-2xl md:text-5xl font-bold leading-tight">
          Explore our premium <br />
          <span className="text-[#C9A227]">
            international event program
          </span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="flex justify-center mb-12 px-4">
          <div className="
            flex gap-2 md:gap-3
            bg-white/10 p-1.5 md:p-2
            rounded-full border border-white/20 backdrop-blur-xl
            shadow-[0_0_25px_rgba(255,255,255,0.06)]
            overflow-x-auto scrollbar-hide
            max-w-full
          ">

            {Object.keys(scheduleData).map((day) => (
              <button
                key={day}
                onClick={() => setActiveTab(day)}
                className={`
                  px-5 md:px-7 py-2.5 md:py-2.5
                  text-[13px] md:text-sm
                  rounded-full font-semibold whitespace-nowrap
                  transition-all duration-300
                  
                  ${activeTab === day
                    ? "bg-white text-black shadow-[0_6px_20px_rgba(255,255,255,0.2)] scale-[1.03]"
                    : "text-white/70 hover:text-white hover:bg-white/10"}
                `}
              >
                {day}
              </button>
            ))}

          </div>
        </div>

        {/* CARDS */}
        <div className="space-y-5 md:space-y-6">
          {scheduleData[activeTab].map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center mt-16 text-white/70 px-4">
        <p className="text-sm">
          Join our team and help weave innovation worldwide.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-[#C9A227] font-semibold">4.9/5</span>
          <span className="text-[#C9A227]">★★★★★</span>
        </div>
      </div>
    </section>
  );
}