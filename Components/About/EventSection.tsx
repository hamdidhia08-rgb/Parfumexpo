'use client';

import Image from 'next/image';
import { Inter_Tight } from 'next/font/google';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Check, Sparkles, Building2, Users, CalendarCheck2 } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
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
    <section className={`${inter.className}w-full bg-white  border-black/10`}>

      {/* SECTION 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
{/* LEFT TEXT */}
<div 
  className="flex items-center px-6 md:px-20 py-16"
  data-aos="fade-up"
>
  <div className="max-w-xl">
    
    {/* LABEL */}
    <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
      PERFUME EXPO
    </span>

    {/* TITLE */}
    <h1 className={`${interTight.className} mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-[#C9A227]`}>
      The Art of Fragrance in Istanbul
    </h1>

    {/* DESCRIPTION */}
    <p className={`${interTight.className} mt-6 text-black text-base leading-relaxed max-w-2xl font-light`}>
      The Fragrance Expo returns to Istanbul after more than 20 years, bringing together perfume creators, brands, and experts from around the world. With its strategic location and global importance, Istanbul offers the perfect environment for innovation, business, and luxury experiences. More than 90 exhibitors and sponsors will showcase the latest trends in perfumery, creating a unique event that blends elegance, creativity, and networking opportunities.
    </p>

    {/* ORGANIZER TEXT */}
    <p className={`${interTight.className} mt-4 text-black/70 text-sm leading-relaxed max-w-2xl`}>
      The event is organized by <span className="font-semibold text-black">Aşk Istanbul</span>, a leading company in international exhibition management, under the supervision of business leader <span className="font-semibold text-black">SEMIRE SARHAN</span>.
    </p>

    {/* TICKS */}
    <div className={`${interTight.className} mt-6 space-y-3`}>
      {[
        "Global gathering of perfume brands and experts",
        "More than 90 international exhibitors",
        "July 8 – 10, 2026 in Istanbul"
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

    {/* LOCATION */}
    <span className="text-xs tracking-[0.25em] uppercase text-black font-semibold">
      WOW HOTEL ISTANBUL
    </span>

    {/* TITLE */}
    <h1 className={`${interTight.className} mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-[#C9A227]`}>
      The Fragrance Expo in Istanbul
    </h1>

    {/* DESCRIPTION */}
    <p className={`${interTight.className} mt-6 text-black text-base leading-relaxed max-w-2xl font-light`}>
      The Fragrance Expo takes place at WOW Hotel Istanbul across a space exceeding 1400 m², bringing together more than 90 exhibitors and sponsors from around the world in a refined professional environment. The event features interactive activities and unique experiences, offering an exceptional opportunity for fragrance professionals and enthusiasts to build partnerships, discover the latest innovations, and engage in a global luxury event.
    </p>

    {/* FEATURES */}
    <div className={`${interTight.className} mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6`}>

      {[
        {
          icon: Sparkles,
          title: "Luxury Atmosphere",
          desc: "A refined environment blending elegance and creativity.",
        },
        {
          icon: Building2,
          title: "Strategic Location",
          desc: "Hosted in Istanbul, a global hub for business and tourism.",
        },
        {
          icon: Users,
          title: "90+ Exhibitors",
          desc: "International brands, experts, and perfume creators.",
        },
        {
          icon: CalendarCheck2,
          title: "Exclusive Experience",
          desc: "Interactive activities and premium networking opportunities.",
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