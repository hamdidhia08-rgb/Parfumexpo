'use client';

import Image from 'next/image';
import { Inter_Tight } from 'next/font/google';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Check, Sparkles, Building2, Users, CalendarCheck2 } from "lucide-react";

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export default function HeroSection() {

  useEffect(() => {
    AOS.init({
      duration: 450,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="w-full bg-white  border-black/10">

      {/* SECTION 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
{/* LEFT TEXT */}
<div 
  className="flex items-center px-6 md:px-20 py-16"
  data-aos="fade-up"
>
  <div className="max-w-xl">
    <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
      PERFUME EXPO
    </span>

    <h1 className={`${interTight.className} mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-[#C9A227]`}>
    The Art of Fragrance in Istanbul
    </h1>

    <p className="mt-6 text-black text-base leading-relaxed max-w-2xl font-light">
      In the heart of Istanbul, where East meets West, discover a world of luxury fragrances and timeless scents. This exclusive exhibition brings together iconic perfume houses, niche creators, and scent enthusiasts to celebrate elegance, creativity, and the power of olfactory art.
    </p>

    {/* TICKS */}
    <div className="mt-6 space-y-3">
      {[
        "Luxury and niche perfume brands",
        "International fragrance creators",
        "Exclusive scent discoveries"
      ].map((item, i) => (
        <div 
          key={i} 
          className="flex items-center gap-3"
          data-aos="fade-up"
          data-aos-delay={i * 60}
        >
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#C9A227]/10">
            <Check size={16} className="text-[#C9A227]" />
          </div>
          <span className="text-black text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* RIGHT IMAGE */}
        <div 
          className="relative w-full h-[350px] md:h-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src="/images/about33.jpg"
            alt="speaker"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

        {/* LEFT IMAGE */}
        <div 
          className="relative w-full h-[350px] md:h-auto md:order-1 order-2"
          data-aos="fade-up"
        >
          <Image
            src="/images/wow.webp"
            alt="speaker"
            fill
            className="object-cover"
          />
        </div>

       {/* RIGHT TEXT */}
<div 
  className="flex items-center px-6 md:px-20 py-16 md:order-2 order-1"
  data-aos="fade-up"
  data-aos-delay="100"
>
  <div className="max-w-xl">
    <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
      WOW HOTEL ISTANBUL
    </span>

    <h1 className={`${interTight.className} mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-[#C9A227]`}>
      Istanbul Luxury Fragrance Expo
    </h1>

    <p className="mt-6 text-black text-base leading-relaxed max-w-2xl font-light">
      Experience a unique perfume exhibition at WOW Hotel Istanbul, where luxury, elegance, and creativity come together. Discover exclusive scents, meet international perfume brands, and immerse yourself in a refined atmosphere dedicated to the art of fragrance.
    </p>

    {/* FEATURES */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

      {[
        {
          icon: Sparkles,
          title: "Luxury Experience",
          desc: "Explore fragrances in an elegant 5-star setting.",
        },
        {
          icon: Building2,
          title: "Premium Location",
          desc: "Hosted at WOW Hotel Istanbul.",
        },
        {
          icon: Users,
          title: "Global Brands",
          desc: "Meet international perfume creators.",
        },
        {
          icon: CalendarCheck2,
          title: "Exclusive Access",
          desc: "A refined and limited exhibition event.",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1"
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <div className="shrink-0 mt-1">
              <Icon
                strokeWidth={1.8}
                className="w-7 h-7 text-[#C9A227]"
              />
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-black leading-tight">
                {item.title}
              </h3>

              <p className="text-[13px] text-black/60 leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</div>

      </div>

    </section>
  );
}