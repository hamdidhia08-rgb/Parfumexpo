'use client'

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import NavLight from "@/Components/Navbar/NavLight";
import Hero from "@/app/Hero/Hero";
import BlogHeader from "@/Components/Blog/BlogHeader";
import RecentPostsComponent from "@/Components/Blog/RecentPostsComponent";
import GlobalTagsComponent from "@/Components/Blog/GlobalTagsComponent";
import Link from "next/link";
import Footer from "@/Components/Footer/footer";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsappButtons from "@/Components/WhatsappButtons";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const posts = [
  {
    id: "perfume-expo-istanbul-2026",
    title: "Perfume Expo Istanbul 2026 Officially Announced",
    desc: "The international Perfume Expo Istanbul will take place from July 8 to 10, 2026, bringing together global perfume brands, experts, and innovators. This event highlights luxury fragrances, creativity, and new business opportunities in one of the most dynamic cities in the world.",
    image: "/images/Blog/blog.jpg",
  },
  {
    id: "fragrance-experience-global",
    title: "A Unique Fragrance Experience with Global Participation",
    desc: "Hosted at WOW Istanbul Hotel across more than 1400 m², this event will feature over 90 international exhibitors and welcome thousands of visitors. Attendees will experience interactive perfume activities and premium scent collections.",
    image: "/images/wow.webp",
  },
  {
    id: "fragrance-industry-growth",
    title: "Expanding Opportunities in the Fragrance Industry",
    desc: "Under the leadership of SEMIRE SARHAN and organized by Aşk Istanbul, the exhibition creates new opportunities for networking, innovation, and growth within the global fragrance market.",
    image: "/images/Blog/blog1.jpg",
  },
];

export default function BlogDetail() {

  const params = useParams();
  const id = params?.id as string;

  const post = posts.find(p => p.id === id);

  if (!post) return notFound();

  return (
    <div className={inter.className}>
    <NavLight/>
    <Hero/>

      <div className="max-w-7xl mx-auto mt-15 px-4 sm:px-6 py-8 sm:py-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
        
        {/* LEFT */}
        <div className="lg:flex-1 lg:max-w-2/3">

       <img 
        src={post.image} 
        alt={post.title} 
        className="
            w-full 
            h-[260px] sm:h-[320px] lg:h-[420px] xl:h-[440px]
            object-cover 
            rounded-xl 
            mb-8
        "
        />
         <BlogHeader post={post} />
    {/* TOP RETURN */}
<div className="mt-4 mb-2">
  <Link
    href="/blog"
    className="
      inline-flex items-center gap-2
      text-sm font-medium
      text-[#C9A227]
      hover:text-[#b8961f]
      transition-all
    "
  >
    ← Back to Blog
  </Link>
</div>
          {/* LIST parfum */}
          <div className="mt-10">
            <ul className="space-y-6">
              
              <li className="flex items-start gap-4">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227] shrink-0"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    Luxury Fragrance Experience
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Discover premium perfumes crafted by international experts.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227] shrink-0"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    Global Networking
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Connect with brands, creators, and distributors worldwide.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-[6px] w-2 h-2 rounded-full bg-[#C9A227] shrink-0"></span>
                <div>
                  <h4 className="text-gray-800 font-semibold text-base">
                    Innovation & Trends
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Explore the latest trends shaping the future of perfumery.
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* EXTRA TEXT */}
          <p className="text-gray-600 mt-7 leading-relaxed text-base">
            This exhibition offers a unique opportunity to explore the world of fragrance,
            combining elegance, creativity, and business opportunities in one unforgettable experience.
          </p>
{/* BOTTOM RETURN */}
<div className="mt-10 pt-6 border-t border-gray-100">
  <Link
    href="/blog"
    className="
      inline-flex items-center gap-2
      px-5 py-2.5
      rounded-lg
      border border-[#C9A227]/30
      text-[#C9A227]
      text-sm font-medium
      hover:bg-[#C9A227]/10
      hover:border-[#C9A227]/50
      transition-all duration-200
    "
  >
    ← Return to Blog
  </Link>
</div>
        </div>

            {/* Partie droite (réduite légèrement) */}
          <div className="lg:w-[28%] flex justify-center lg:justify-end  lg:mt-0">
            <div className="w-full max-w-[370px]">
              <RecentPostsComponent/>
              <GlobalTagsComponent/>
            </div>
          </div>
        {/* <Sidebar /> */}

      </div>
      <Footer/>
          <ScrollToTopButton/>
        <WhatsappButtons/>

    </div>
  );
}