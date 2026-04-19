"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const SLIDES = [
  { id: 1, image: "/images/s6.jpg", title: "Explore Your Signature Scent", subtitle: "FRAGRANCES DEFINE YOU", buttonText: "SHOP NOW" },
  { id: 2, image: "/images/s1-Recsaovered_copy.jpg", title: "Luxury Flowers & Aromas", subtitle: "NEW COLLECTION 2026", buttonText: "DISCOVER MORE" },
  { id: 3, image: "/images/slide2.webp", title: "The Essence of Nature", subtitle: "PURE & ORGANIC", buttonText: "VIEW COLLECTION" },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false
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
    <section className="relative w-full mx-auto overflow-hidden">
      <div className="relative" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide) => (
            <div 
              className="relative min-w-full h-[400px] md:h-[500px] lg:h-[630px] flex-none bg-[#FDF0E9]" 
              key={slide.id}
            >
              {/* IMAGE : Pleine largeur (object-cover) calée à droite */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-right select-none"
                  sizes="100vw"
                />
              </div>

              {/* CONTENU TEXTE : px-8 au lieu de px-24 pour aller vers la gauche */}
              <div className="relative h-full container mx-auto px-6 md:px-10 lg:px-8 flex items-center">
                <div className="max-w-md md:max-w-xl z-10">
                  <span className={`${montserrat.className} block text-[10px] md:text-xs font-bold tracking-[0.4em] text-gray-800 uppercase mb-4`}>
                    {slide.subtitle}
                  </span>
                  
                  <h1 className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-[1.1] mb-10`}>
                    {slide.title}
                  </h1>

           <button className="group relative overflow-hidden bg-[#FF4D8D] px-8 py-3 text-white transition-all duration-300 rounded-lg shadow-md">
            <span className={`${montserrat.className} relative z-10 text-[13px] font-semibold uppercase`}>
                {slide.buttonText}
            </span>
            {/* Effet de survol noir qui respecte aussi le radius */}
            <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 rounded-lg" />
            </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white transition-all md:flex hidden">
          <ChevronLeft size={20} strokeWidth={1} />
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white transition-all md:flex hidden">
          <ChevronRight size={20} strokeWidth={1} />
        </button>

        {/* PAGINATION */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selectedIndex === index ? "bg-[#FF4D8D] w-8" : "bg-gray-400/30 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}