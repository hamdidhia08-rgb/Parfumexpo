import AboutEventGrid from "@/Components/About/AboutEventGrid";
import AboutSection from "@/Components/About/AboutSection";
import RegisterCards from "@/Components/Card/RegisterCards";
import CoreFeatures from "@/Components/Feature/CoreFeatures";
import PerfumeFeatures from "@/Components/Feature/PerfumeFeatures";
import Countdown from "@/Components/Hero/Countdown";
import Hero from "@/Components/Hero/Hero";
import HeroSlider from "@/Components/Hero/HeroSlider";
import Navbar from "@/Components/Navbar/Nav";
import Navbar2 from "@/Components/Navbar/Nav2";
import Image from "next/image";

export default function Page2() {
  return (
  <>
    <Navbar2/>
     <HeroSlider/>
     <PerfumeFeatures/>
     <RegisterCards/><br /><br />
     

  </>
  );
}
