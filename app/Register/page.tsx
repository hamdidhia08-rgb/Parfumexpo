import NavLight from '@/Components/Navbar/NavLight'
import React from 'react'
import Hero from '../Hero/Hero'
import RegisterSection from '@/Components/Registre/RegisterSection'
import ScrollToTopButton from '@/Components/ScrollToTopButton'
import WhatsappButtons from '@/Components/WhatsappButtons'
import Footer from '@/Components/Footer/footer'

export default function Register() {
  return (
    <>
    <NavLight/>
    <Hero/>
    <RegisterSection/>
    <ScrollToTopButton/>
    <WhatsappButtons/>
    <Footer/>
    </>
  )
}
