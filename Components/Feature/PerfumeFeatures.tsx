'use client';

import React from 'react';
import {
  Sparkles,
  Building2,
  Users,
  CalendarCheck2,
} from 'lucide-react';

import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
});

const PerfumeFeatures = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Exclusive Fragrance',
      desc: 'Luxury perfumes and rare scents.',
    },
    {
      icon: Building2,
      title: 'International Brands',
      desc: 'Meet leading perfume houses.',
    },
    {
      icon: CalendarCheck2,
      title: 'Book An Appointment',
      desc: 'Private meetings with exhibitors.',
    },
    {
      icon: Users,
      title: 'Networking Experience',
      desc: 'Connect with buyers and visitors.',
    },
  ];

  return (
    <section className={`w-full bg-white py-10 md:py-12 ${interTight.className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 mt-1">
                  <Icon
                    strokeWidth={1.8}
                    className="w-10 h-10 text-[#2c2d28]"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-medium text-[#22201D] leading-tight mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[15px] leading-5 text-[#555555] max-w-[180px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent"></div>
      </div>
    </section>
  );
};

export default PerfumeFeatures;