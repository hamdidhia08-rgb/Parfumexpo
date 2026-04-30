"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/* ✅ TES POSTS */
const posts = [
  {
    id: "perfume-expo-istanbul-2026",
    date: "23",
    month: "April 2026",
    title: "Perfume Expo Istanbul 2026 Officially Announced",
    image: "/images/Blog/blog.jpg",
  },
  {
    id: "fragrance-experience-global",
    date: "25",
    month: "April 2026",
    title: "A Unique Fragrance Experience with Global Participation",
    image: "/images/wow.webp",
  },
  {
    id: "fragrance-industry-growth",
    date: "29",
    month: "April 2026",
    title: "Expanding Opportunities in the Fragrance Industry",
    image: "/images/Blog/blog1.jpg",
  },
];

/* ITEM */
const PostItem = ({ post }: any) => (
  <Link href={`/blog/${post.id}`} className="block">
    <div className="flex items-center gap-4 cursor-pointer group py-4">
      
      {/* IMAGE */}
      <div className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={96}
          height={64}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-center">
        <h3 className="text-[15px] font-semibold text-gray-800 leading-snug group-hover:text-[#C9A227] transition-colors">
          {post.title}
        </h3>

        {/* DATE */}
        <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
          <Calendar size={15} className="text-[#C9A227]" />
          <span>{post.date} {post.month}</span>
        </div>
      </div>

    </div>
  </Link>
);

/* MAIN */
export default function RecentPostsComponent() {
  return (
   <div
        className={`${roboto.className} 
        w-full 
        max-w-full 
        sm:max-w-sm 
        bg-white 
        rounded-xl 
        p-5 sm:p-6 
        border border-gray-100 
        shadow-sm`}
        >
      {/* TITLE */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Recent Posts
      </h2>

      {/* LIST */}
      <div className="divide-y divide-gray-100">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
}