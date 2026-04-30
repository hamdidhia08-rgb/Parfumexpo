'use client'

import { ShoppingBag, FlaskConical, Sparkles, Camera } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const events = [
  {
    icon: ShoppingBag,
    title: "Perfume Bazaar",
    desc: "Shop perfumes directly from top brands, including luxury oils and incense.",
  },
  {
    icon: FlaskConical,
    title: "Create Your Perfume",
    desc: "Create your own signature scent with expert guidance.",
  },
  {
    icon: Sparkles,
    title: "Fragrance Parade",
    desc: "Enjoy a vibrant show filled with luxury and celebration.",
  },
  {
    icon: Camera,
    title: "Perfume Studio",
    desc: "Capture creative moments in perfume-inspired spaces.",
  },
];

export default function AboutSectionTwo() {
  return (
    <section className={`py-20 bg-white ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#C9A227] text-sm font-medium mb-2">
            Expo Activities
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Discover Our{" "}
            <span className="text-[#C9A227]">Experiences</span>
          </h2>

<p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
  The Fragrance Expo returns to Istanbul after more than 20 years.
  Discover global perfume brands, experts, and the latest innovations.
  Explore a world of luxury, creativity, and new opportunities.
</p>
        </div>

   {/* CARDS */}
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {events.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group p-6 rounded-2xl border border-gray-200 bg-white
        shadow-sm hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300"
      >
        
        {/* ICON */}
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#C9A227] group-hover:scale-110 transition">
          <Icon size={22} />
        </div>

        {/* TITLE */}
        <h3 className="font-semibold text-lg mb-2 group-hover:text-[#C9A227] transition">
          {item.title}
        </h3>

        {/* TEXT */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>

      </div>
    );
  })}

</div>

      </div>
    </section>
  );
}