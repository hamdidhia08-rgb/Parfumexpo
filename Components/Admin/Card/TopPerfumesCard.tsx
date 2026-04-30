"use client"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function TopPerfumesCard() {
  return (
    <div className={`${inter.className} bg-[#0F172A] border border-white/10 rounded-2xl p-6`}>

      <h3 className="text-white text-lg font-semibold">
        Top Perfumes
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        Most popular fragrances
      </p>

      <div className="mt-5 space-y-4">

        <div className="flex justify-between items-center">
          <span className="text-white text-sm">Dior Sauvage</span>
          <span className="text-[#C9A227] font-medium">120</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white text-sm">Chanel No.5</span>
          <span className="text-[#C9A227] font-medium">98</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white text-sm">Tom Ford Oud</span>
          <span className="text-[#C9A227] font-medium">76</span>
        </div>

      </div>

    </div>
  )
}