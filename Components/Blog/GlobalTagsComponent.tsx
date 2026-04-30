'use client';

import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

/* TAGS PARFUM */
const tags = [
  "#Perfume",
  "#Fragrance",
  "#LuxuryScents",
  "#Oud",
  "#NichePerfume",
  "#PerfumeExpo",
  "#IstanbulExpo",
  "#ScentArt",
  "#PerfumeLovers",
  "#FragranceWorld",
  "#LuxuryLifestyle",
  "#ScentExperience",
];

const GlobalTagsComponent: React.FC = () => {
  return (
    <div
      className={`
        ${roboto.className}
        w-full 
        max-w-full 
        sm:max-w-sm 
        bg-white 
        rounded-xl 
        p-5 sm:p-6 
        shadow-sm 
        border border-gray-100
        mt-8
        transition-all duration-300
        hover:shadow-md
      `}
    >
      {/* TITLE */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
        Popular Tags
      </h2>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="
              px-3 sm:px-4 
              py-1.5 
              text-xs sm:text-sm 
              rounded-lg 
              bg-[#C9A227]/10 
              text-[#C9A227] 
              font-medium 
              cursor-pointer
              hover:bg-[#C9A227]/20
              hover:scale-[1.03]
              transition-all duration-200
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GlobalTagsComponent;