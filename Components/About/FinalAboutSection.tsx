'use client'
import Link from 'next/link';
import { Inter } from "next/font/google";
import { ArrowRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function FinalAboutSection() {
  return (
    <section className={`py-17 ${inter.className}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* SMALL TITLE */}
        <p className="text-[#C9A227] text-sm font-medium mb-3 tracking-wide">
          Perfume Expo Istanbul
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          An Invitation to Discover{" "}
          <span className="text-[#C9A227]">Fragrance Beyond Limits</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-5xl mx-auto mb-10">
          Step into a world where every scent tells a story and every note awakens emotion.
          Our exhibition in Istanbul is more than an event — it is a destination where
          creativity, luxury, and innovation meet to redefine the art of perfumery.
          
          <br /><br />
          Whether you are a brand, a creator, or a passionate enthusiast, this is your
          opportunity to explore rare compositions, connect with global experts, and
          experience fragrance in its most refined form.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
           <Link href="/Register">
          <button className="group flex items-center gap-3 bg-[#C9A227] text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all hover:bg-[#b8961f] shadow-lg shadow-[#C9A227]/20">
            <span>Join the Experience</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
          </Link>
        </div>

        {/* DECOR LINE */}
        <div className="mt-14 flex justify-center">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent"></div>
        </div>

      </div>
    </section>
  );
}