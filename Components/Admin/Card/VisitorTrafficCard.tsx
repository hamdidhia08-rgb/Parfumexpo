"use client"

import { Inter } from "next/font/google"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

const inter = Inter({ subsets: ["latin"] })

const countries = [
  {
    name: "Saudi Arabia",
    flag: "/images/Flag/image1.webp",
    value: "45.2k",
    percent: "65%",
    width: "65%",
    color: "bg-emerald-400",
  },
  {
    name: "United Arab Emirates",
    flag: "/images/Flag/Flag_of_the_United_Arab_Emirates.svg",
    value: "32.8k",
    percent: "48%",
    width: "48%",
    color: "bg-yellow-400",
  },
  {
    name: "Qatar",
    flag: "/images/Flag/qatar.png",
    value: "21.4k",
    percent: "35%",
    width: "35%",
    color: "bg-purple-500",
  },
  {
    name: "Kuwait",
    flag: "/images/Flag/Flag_of_Kuwait.svg.png",
    value: "18.9k",
    percent: "28%",
    width: "28%",
    color: "bg-cyan-400",
  },
]

export default function VisitorTrafficCard() {
  return (
    <Card className={`${inter.className} bg-[#0F172A] border border-white/10 rounded-2xl`}>

      {/* HEADER */}
      <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-3">
        <CardTitle className="text-white text-base">
          Visitor Traffics
        </CardTitle>

        <div className="flex gap-2">
          {["All", "1M", "6M"].map((item) => (
            <Button
              key={item}
              size="sm"
              className={`h-7 px-3 text-xs ${
                item === "6M"
                  ? "bg-white text-black"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              {item}
            </Button>
          ))}
        </div>
      </CardHeader>

      {/* LIST */}
      <CardContent className="p-5 space-y-4">

        {countries.map((country, index) => (
          <div
            key={index}
            className="space-y-2 p-2 rounded-lg hover:bg-white/5 transition"
          >

            {/* TOP */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={18}   // 🔥 plus petit
                  height={18}
                  className="rounded-full"
                />
                <span className="text-[13px] text-white">
                  {country.name}
                </span>
              </div>

              <span className="text-[13px] font-medium text-white">
                {country.value}
              </span>

            </div>

            {/* BAR */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className={`h-full ${country.color}`}
                style={{ width: country.width }}
              />
            </div>

            {/* PERCENT */}
            <div className="text-[11px] text-slate-400">
              {country.percent}
            </div>

          </div>
        ))}

      </CardContent>
    </Card>
  )
}