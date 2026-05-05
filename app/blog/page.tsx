import React from 'react'
import Hero from '../Hero/Hero'
import NavLight from '@/Components/Navbar/NavLight'
import BlogCards from '@/Components/Blog/BlogCard'
import Footer from '@/Components/Footer/footer'
import ScrollToTopButton from '@/Components/ScrollToTopButton'
import WhatsappButtons from '@/Components/WhatsappButtons'
export default function page() {
  return (
    <div>
      <NavLight/>
      <Hero/>
      <BlogCards/>
      <ScrollToTopButton/>
      <WhatsappButtons/>

      <Footer/>
    </div>
  )
}
