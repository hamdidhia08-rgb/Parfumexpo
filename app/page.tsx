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
import TeamSection from "@/Components/Team/TeamSection";
import Footer from "@/Components/Footer/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
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
    <div >
      <Navbar />

      {/* HERO */}

        <Hero />
        <About/>
    
   

      {/* CARDS */}
      <div data-aos="fade-up" data-aos-delay="200">
        <RegisterCards />
      </div>

      <br /><br /><br /><br />
      
      {/* CORE FEATURES */}
    
        <CoreFeatures />
       
              {/* EVENT */}
        <EventSection />
        <TeamSection/>
        <Footer/>

        <ScrollToTopButton/>
        <WhatsappButtons/>


    </div>
  );
}