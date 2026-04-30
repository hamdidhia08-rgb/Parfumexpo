'use client'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AboutSection2() {
  return (
    <section className={`py-20 bg-white ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-[#C9A227] text-sm font-medium mb-3 uppercase tracking-wide">
            About the Expo
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            The Return of the{" "}
            <span className="text-[#C9A227]">Fragrance Expo</span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The Fragrance Expo returns to Istanbul after more than 20 years, bringing back one of the most important events for perfume lovers and creators from around the world.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Known as a global hub for business and innovation, Istanbul offers a strategic location and a vibrant environment where brands, experts, and professionals in the fragrance industry can connect and grow.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            More than <span className="font-semibold text-[#C9A227]">90 international exhibitors</span> will showcase the latest trends, creations, and innovations in perfumery, delivering a unique experience that blends luxury, creativity, and business opportunities.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Perfume is more than just a product — it is identity, memory, and emotion. This exhibition creates a global platform where passion and innovation meet under one roof.
          </p>

        </div>

        {/* DATE CARD */}
        <div className="mt-14 flex justify-center">
          <div className="px-8 py-6 rounded-2xl border border-gray-200 shadow-sm text-center hover:shadow-md transition">

            <p className="text-sm text-gray-500 mb-2">
              Event Date
            </p>

            <p className="text-xl font-semibold text-[#C9A227]">
              July 8 – 10, 2026
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}