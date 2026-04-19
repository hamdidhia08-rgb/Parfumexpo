import AboutEventGrid from "@/Components/About/AboutEventGrid";
import AboutSection from "@/Components/About/AboutSection";
import RegisterCards from "@/Components/Card/RegisterCards";
import CoreFeatures from "@/Components/Feature/CoreFeatures";
import Countdown from "@/Components/Hero/Countdown";
import Hero from "@/Components/Hero/Hero";
import HeroSlider from "@/Components/Hero/HeroSlider";
import Navbar from "@/Components/Navbar/Nav";
import Navbar2 from "@/Components/Navbar/Nav2";
import Image from "next/image";

export default function Home() {
  return (
  <>
    <Navbar/>
     <Hero/>
           {/* TITLE */}
      <div className="relative text-center mt-12 mb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-[#C9A227]">
          Core Feature
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          Core features that power our <br />
          <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.4)]">
            exceptional services
          </span>
        </h2>
      </div>
     <RegisterCards/><br /><br />
  </>
  );
}
