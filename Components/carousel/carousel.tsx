'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const brands = [
  '/images/brand/Chanel_logo_complet.png',
  '/images/brand/clive.jpg',
  '/images/brand/Roja_Parfums_logo_logotype.jpg',
  '/images/brand/Creed_Fragrances_logo.svg.png',
  '/images/brand/Amouage-Logo.png',
  '/images/brand/Tom-Ford-logo.png',
];

export default function BrandCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden py-12 bg-white">

      {/* LEFT */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* RIGHT */}
      <button
        onClick={scrollNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* CAROUSEL */}
      <div ref={emblaRef}>
        <div className="flex px-4 md:px-10"> {/* ✅ padding inline global */}

          {brands.map((src, index) => (
            <div
              key={index}
              className="
                flex-[0_0_50%]   /* mobile = 2 */
                sm:flex-[0_0_33%]
                md:flex-[0_0_22%]  /* plus petit */
                px-2 md:px-3
              "
            >
              {/* CARD */}
              <div className="
                h-[90px] md:h-[100px]
                bg-white
                rounded-xl
                flex items-center justify-center
                shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                border border-transparent
                hover:border-[#C9A227]
                transition-all duration-300
                group
              ">
                
                <div className="relative w-[90px] md:w-[110px] h-[40px] md:h-[55px] grayscale group-hover:grayscale-0 transition">
                  <Image
                    src={src}
                    alt="brand"
                    fill
                    className="object-contain"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}