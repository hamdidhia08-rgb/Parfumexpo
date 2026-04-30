'use client'
import Link from 'next/link';
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function HeroBanner() {
  return (
    <section className={`relative w-full h-[65vh] md:h-[75vh] overflow-hidden text-white ${inter.className}`}>

      {/* 🎥 VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        <iframe
          className="absolute top-1/2 left-1/2 
          w-[120vw] h-[67.5vw]
          min-w-full min-h-full
          -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/twwnsp_5PrA?autoplay=1&mute=1&loop=1&playlist=twwnsp_5PrA&controls=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
      </div>

      {/* 💎 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        {/* 🔥 BIG TITLE */}
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] max-w-4xl tracking-tight">
          Discover the Essence of <br />
          <span className="text-[#FFFF]">Luxury Fragrance</span>
        </h1>

        {/* ✨ DESCRIPTION */}
        <p className="mt-5 text-white/70 max-w-xl text-sm md:text-lg font-light">
          Step into a refined world where scent becomes art and elegance defines every moment.
        </p>

        {/* 🎯 BUTTON */}
        <Link href="/Register">
        <button className="mt-8 bg-[#C9A227] hover:bg-[#e0b93b] text-black px-7 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105">
          Register Now
        </button>
        </Link>

      </div>

    </section>
  )
}