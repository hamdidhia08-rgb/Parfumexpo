"use client";

import { Inter } from "next/font/google";
import TeamCard from "./TeamCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function TeamSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const team = [
    {
      name: "John Carter",
      role: "Marketing Manager",
      image: "/images/user/user2.jpg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21612345678",
    },
    {
      name: "Emma Wilson",
      role: "Creative Director",
      image: "/images/user/img5.jpg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21698765432",
    },
    {
      name: "Michael Brown",
      role: "Sales Manager",
      image: "/images/user/img6.jpg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21655555555",
    },
    {
      name: "Sophia Taylor",
      role: "Brand Strategist",
      image: "/images/user/user3.jpg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21644444444",
    },
  ];

  return (
    <section
      className={`relative py-20 overflow-hidden ${inter.className}`}
      style={{
        backgroundImage: "url('/images/blogimage.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >

      {/* OVERLAY (léger pour garder le pattern visible) */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

      <div className="relative z-10">
        
        {/* HEADER */}
        <div
          className="max-w-[700px] mx-auto mb-12 text-center px-4"
          data-aos="fade-up"
        >

          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight text-[#181817]">
            Meet Our Team
          </h2>

          {/* YELLOW LINE */}
          <div
            className="w-20 h-[3px] bg-[#FFC400] mx-auto mt-4 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="150"
          ></div>

          <p
            className="text-gray-600 text-[16px] leading-relaxed mt-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            A passionate team committed to innovation, elegance, and delivering exceptional value through every detail.
          </p>

        </div>

        {/* CARDS */}
        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}