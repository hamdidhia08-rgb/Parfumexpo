"use client";

import { Inter } from "next/font/google";
import TeamCard from "./TeamCard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function TeamSection() {
  const team = [
    {
      name: "Semire arslan",
      role: "General Manager",
      image: "/images/team/img1.jpeg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21612345678",
    },
    {
      name: "Sahar arslan",
      role: "Sales Manager",
      image: "/images/team/img2.jpeg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21698765432",
    },
    {
      name: "Abdulkadir Şarhan",
      role: "Operations Manager",
      image: "/images/team/img4.jpeg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21655555555",
    },
    {
      name: "Khaled Zia",
      role: "Operations Manager",
      image: "/images/team/img5.jpeg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21644444444",
    },
  ];

  return (
    <section
      className={`relative py-20 ${inter.className} bg-[#f8f8f6]`}
      style={{
        backgroundImage: "url('/images/blogimage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay propre */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/40 backdrop-blur-[1px] md:backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-[700px] mx-auto mb-16 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#181817]">
            Meet Our Team
          </h2>

          <div className="w-20 h-[3px] bg-[#FFC400] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 leading-relaxed">
            A passionate team committed to innovation, elegance, and delivering exceptional value.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex justify-center transition duration-300 hover:scale-[1.04]"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}