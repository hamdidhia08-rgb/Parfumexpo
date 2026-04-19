"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  Playfair_Display,
  Montserrat,
  Inter_Tight,
} from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SLIDES = [
  {
    id: 1,
    image: "/images/img3.png",
    title: "Explore Your Signature Scent",
    subtitle: "ISTANBUL 2026 • EXHIBITION",
    desc: "Explore refined fragrances crafted with elegance and precision, designed to express identity, emotion, and timeless luxury in every drop.",
    buttonText: "REGISTER NOW",
  },
  {
    id: 2,
    image: "/images/img2.webp",
    title: "Luxury Scents & Floral Harmony",
    subtitle: "ISTANBUL 2026 • SHOWCASE",
    desc: "Experience exclusive perfume creations blending rich floral notes, modern artistry, and sophisticated craftsmanship for a unique sensory journey.",
    buttonText: "REGISTER NOW",
  }
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full max-w-[94%] mx-auto overflow-hidden rounded-[15px]">
      <div className="relative overflow-hidden rounded-[20px]" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full h-[360px] md:h-[500px] lg:h-[620px] flex-none bg-black"
            >
              {/* IMAGE */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center select-none"
                  sizes="100vw"
                />
              </div>

              {/* CONTENT */}
              <div className="relative h-full container mx-auto px-6 md:px-10 lg:px-12 flex items-center">
                <div className="max-w-md md:max-w-xl z-10">
                  {/* Subtitle */}
                  <span
                    className={`${montserrat.className} block text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-4`}
                  >
                    {slide.subtitle}
                  </span>

                  {/* Title */}
                  <h1
                      className={`${interTight.className} text-4xl md:text-6xl lg:text-7xl font-medium text-white  md:leading-[1.13] mb-5`}
                    >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className={`${interTight.className} text-white/80 text-sm md:text-[16px] leading-relaxed max-w-[520px] mb-8`}
                  >
                    {slide.desc}
                  </p>

                  {/* Button */}
                  <button className="group relative overflow-hidden border border-white/60 bg-transparent px-8 py-3 text-white transition-all duration-300 rounded-xl backdrop-blur-sm hover:bg-white hover:text-black">
                    <span
                      className={`${interTight.className} relative z-10 text-[13px] font-semibold uppercase tracking-wide`}
                    >
                      {slide.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all md:flex hidden"
        >
          <ChevronLeft size={20} strokeWidth={1.5} className="text-white" />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all md:flex hidden"
        >
          <ChevronRight size={20} strokeWidth={1.5} className="text-white" />
        </button>

        {/* PAGINATION */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selectedIndex === index
                  ? "bg-[#C9A227] w-8"
                  : "bg-white/40 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}