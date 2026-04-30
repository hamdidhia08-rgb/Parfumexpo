'use client'

import Image from "next/image";
import { User, Tag, MessageCircle } from "lucide-react";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const posts = [
  {
    id: "perfume-expo-istanbul-2026",
    date: "23",
    month: "April 2026",
    author: "Perfume Expo Team",
    category: "Exhibition",
    title: "Perfume Expo Istanbul 2026 Officially Announced",
    desc: "The international Perfume Expo Istanbul will take place from July 8 to 10, 2026, bringing together the global fragrance industry in one of the world's leading business and tourism hubs.",
    image: "/images/Blog/blog.jpg",
  },
  {
    id: "fragrance-experience-global",
    date: "25",
    month: "April 2026",
    author: "Expo News",
    category: "Events",
    title: "A Unique Fragrance Experience with Global Participation",
    desc: "Held at WOW Istanbul Hotel over 1400 m², the expo will host 90+ international exhibitors and welcome over 10,000 visitors, offering interactive experiences and strong business opportunities.",
    image: "/images/wow.webp",
  },
  {
    id: "fragrance-industry-growth",
    date: "29",
    month: "April 2026",
    author: "Industry Insights",
    category: "Business",
    title: "Expanding Opportunities in the Fragrance Industry",
    desc: "Organized by Aşk Istanbul under the leadership of SEMIRE SARHAN, the event creates a powerful platform for networking, innovation, and growth in the global perfume market.",
    image: "/images/Blog/blog1.jpg",
  },
];

export default function BlogCards() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`py-16 bg-gray-50 ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse"
              >
                {/* IMAGE */}
                <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] bg-gray-200" />

                {/* CONTENT */}
                <div className="pt-8 sm:pt-10 px-4 sm:px-6 pb-5 sm:pb-6">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                </div>
              </div>
            ))
          : posts.map((post) => (
  <Link key={post.id} href={`/blog/${post.id}`} className="block">
    
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover"
        />

        {/* DATE BADGE */}
        <div className="absolute bottom-[-16px] sm:bottom-[-20px] left-4 sm:left-6 flex shadow-md">

          <div className="bg-[#C9A227] text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-base sm:text-lg">
            {post.date}
          </div>

          <div className="bg-[#1f2937] text-white px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center text-xs sm:text-sm font-bold text-center">
            {post.month}
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-8 sm:pt-10 px-4 sm:px-6 pb-5 sm:pb-6">

        {/* META */}
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <div className="flex items-center gap-1">
            <User size={16} className="text-[#C9A227]" />
            <span>{post.author}</span>
          </div>

          <div className="flex items-center gap-1">
            <Tag size={16} className="text-[#C9A227]" />
            <span>{post.category}</span>
          </div>
        </div>

        {/* TITLE */}
        <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 leading-snug hover:text-[#C9A227] transition">
          {post.title}
        </h3>

        {/* DESC */}
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-3">
          {post.desc}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between text-xs sm:text-sm mt-3 sm:mt-4">

          {/* READ MORE */}
          <div className="group flex items-center gap-2 text-[#C9A227] font-medium transition-all">
            <span className="relative">
              Read more
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C9A227] transition-all group-hover:w-full"></span>
            </span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </div>

          {/* COMMENTS */}
          <div className="flex items-center gap-1 text-gray-400">
            <span>0 comments</span>
            <MessageCircle size={16} className="text-[#C9A227]" />
          </div>

        </div>

      </div>

    </div>

  </Link>
))}

      </div>
    </section>
  );
}