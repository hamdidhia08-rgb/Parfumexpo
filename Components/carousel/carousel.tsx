'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const brands = [
  '/images/brand/Chanel_logo_complet.png',
  '/images/brand/clive.jpg',
  '/images/brand/Roja_Parfums_logo_logotype.jpg',
   '/images/brand/Creed_Fragrances_logo.svg.png',
  '/images/brand/Amouage-Logo.png',
  '/images/brand/Tom-Ford-logo.png',
];

export default function BrandCarousel() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  return (
    <div className="overflow-hidden py-10 bg-white">
      <div ref={emblaRef}>
        <div className="flex">
          {brands.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_20%] px-6 flex items-center justify-center"
            >
              <div className="w-[120px] h-[60px] relative grayscale hover:grayscale-0 transition">
                <Image
                  src={src}
                  alt="brand"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}