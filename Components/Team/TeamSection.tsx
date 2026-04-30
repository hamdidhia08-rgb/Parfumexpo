"use client";

import { Inter } from "next/font/google";
import TeamCard from "./TeamCard";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const team = [
    {
      name: "Semire",
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
    {
      name: "Nadir Ansari",
      role: "Public Services Consultant",
      image: "/images/team/img3.jpeg",
      facebook: "#",
      instagram: "#",
      twitter: "#",
      phone: "21644444444",
    },
  ];

  return (
    <section
      className={`relative py-20 ${inter.className}`}
      style={{
        backgroundImage: "url('/images/blogimage.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-[700px] mx-auto mb-12 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 text-[#181817]">
            Meet Our Team
          </h2>

          <div className="w-20 h-[3px] bg-[#FFC400] mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-4">
            A passionate team committed to innovation, elegance, and delivering exceptional value.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative px-4 md:px-10">
          {/* LEFT */}
          <button
            onClick={scrollPrev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-[#FFC400] hover:text-black transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT */}
          <button
            onClick={scrollNext}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-[#FFC400] hover:text-black transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden py-6" ref={emblaRef}>
            <div className="flex">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex-[0_0_300px] px-4 py-4"
                >
                  <TeamCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}