import ContactSection from '@/Components/Contact/contact'
import Footer from '@/Components/Footer/footer'
import NavLight from '@/Components/Navbar/NavLight'
import ScrollToTopButton from '@/Components/ScrollToTopButton'
import WhatsappButtons from '@/Components/WhatsappButtons'
import React from 'react'

export default function page() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">

      <NavLight/>

      <ContactSection/>

      <ScrollToTopButton/>
      <WhatsappButtons/>

      {/* MAP FULL WIDTH */}
      <div className="w-full mt-20">

        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=WOW İstanbul Hotel, Turkey&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>

      <Footer/>

    </div>
  )
}