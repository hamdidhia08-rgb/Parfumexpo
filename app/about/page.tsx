import React from 'react'
import Hero from '../Hero/Hero'
import NavLight from '@/Components/Navbar/NavLight'
import About from '@/Components/About/About'
import AboutSectionTwo from '@/Components/About/Service'
import BrandCarousel from '@/Components/carousel/carousel'
import HeroSection from '@/Components/About/EventSection'
import FinalAboutSection from '@/Components/About/FinalAboutSection'
import MapSection from '@/Components/Map/MapSection'
import ScrollToTopButton from '@/Components/ScrollToTopButton'
import WhatsappButtons from '@/Components/WhatsappButtons'
import Footer from '@/Components/Footer/footer'
import HeroBanner from '@/Components/Banners/HeroBanner'
import TopBar from '@/Components/Navbar/TopBar'

export default function page() {
  return (
    <>
    <NavLight/>
    <Hero/>
    <AboutSectionTwo/>
    <HeroSection/>
    <FinalAboutSection/>
    <BrandCarousel/><br /><br /><br />
    <HeroBanner/>
    <MapSection/><br /><br />
    <ScrollToTopButton/>
    <WhatsappButtons/>
    <Footer/>
    </>
  )
}
