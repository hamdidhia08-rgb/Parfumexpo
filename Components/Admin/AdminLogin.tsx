'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Mail, Lock } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLogin() {
  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${inter.className}`}>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/images/comming.png" // 👉 mets une image parfum luxe ici
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* GOLD LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.2),_transparent_60%)]" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md md:max-w-xl lg:max-w-2xl p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/30">
              <Image
                src="/images/icon.png"
                alt="Logo"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight text-white">
              Parfum Expo<span className="text-[#C9A227]">.</span>
            </span>
          </Link>
        </div>

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Admin Login
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Access your dashboard securely
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6 max-w-md mx-auto">

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30 transition"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30 transition"
            />
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-[#C9A227]" />
              Remember me
            </label>

            <a href="#" className="hover:text-[#C9A227] transition">
              Forgot password?
            </a>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#b8931f] transition shadow-lg shadow-[#C9A227]/30"
          >
            Sign In
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-xs mt-8">
          © {new Date().getFullYear()} Parfum Expo. Admin Panel
        </p>
      </div>
    </section>
  )
}