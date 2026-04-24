'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutEventGrid from "@/Components/About/AboutEventGrid";
import AboutSection from "@/Components/About/AboutSection";
import EventSection from "@/Components/About/EventSection";
import RegisterCards from "@/Components/Card/RegisterCards";
import BrandCarousel from "@/Components/carousel/carousel";
import CoreFeatures from "@/Components/Feature/CoreFeatures";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Nav";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import WhatsappButtons from "@/Components/WhatsappButtons";
import Marquee from "@/Components/About/Marquee";
import About from "@/Components/About/About";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}

        <Hero />
        <About/>
<br /><br />
      {/* BRANDS */}
      <div data-aos="fade-up" data-aos-delay="100">
        <BrandCarousel />
      </div>

      {/* TITLE */}
      <div 
        className="relative text-center mt-12 mb-12"
        data-aos="fade-up"
        data-aos-delay="150"
      >
     

        <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
          Core features that power our <br />
          <span className="text-[#C9A227] drop-shadow-[0_0_20px_rgba(201,162,39,0.4)]">
            exceptional services
          </span>
        </h2>
      </div>

      {/* CARDS */}
      <div data-aos="fade-up" data-aos-delay="200">
        <RegisterCards />
      </div>

      <br /><br /><br /><br />
      
      {/* CORE FEATURES */}
    
        <CoreFeatures />
       
              {/* EVENT */}
        <EventSection />



        <ScrollToTopButton/>
        <WhatsappButtons/>


    </>
  );
}