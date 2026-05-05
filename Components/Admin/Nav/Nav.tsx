"use client"

import { Inter } from "next/font/google"
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu"
import {
  FaBell,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaDesktop,
  FaGlobe,
  FaSearch,
} from "react-icons/fa"
import { Avatar, AvatarFallback } from "@/Components/ui/avatar"

const inter = Inter({
  subsets: ["latin"],
})

export default function Navbar() {
  return (
    <header className={`${inter.className} sticky top-0 z-50 w-full border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-xl`}>
      
      <div className="flex items-center justify-between px-6 h-[80px]">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <Button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <FaBars className="text-white text-[22px]" />
          </Button>

          <div className="relative w-[260px]">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[14px]" />
            <Input
              placeholder="Search..."
              className="pl-10 h-11 bg-white/5 border-white/10 text-slate-200 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <Button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <FaDesktop className="text-white text-[20px]" />
          </Button>

          <Button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <FaGlobe className="text-white text-[20px]" />
          </Button>

          {/* 🔴 Notifications FIX */}
          <Button className="relative w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <FaBell className="text-white text-[20px]" />

            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-[4px] text-[10px] font-semibold bg-red-500 text-white rounded-full flex items-center justify-center border-2 border-[#0F172A]">
              3+
            </span>
          </Button>

          <Button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <FaCog className="text-white text-[20px]" />
          </Button>

          {/* 💎 PROFILE UPGRADE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-[#C9A227] text-black font-semibold">
                    AD
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={`${inter.className} w-56 bg-[#0F172A] border border-white/10 text-slate-200 p-2`}>

              {/* Profile Header */}
              <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-white/5">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-[#C9A227] text-black font-semibold">
                    AD
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-slate-400">admin@mail.com</p>
                </div>
              </div>

              <DropdownMenuSeparator className="bg-white/10 my-2" />

              <DropdownMenuItem className="gap-2 cursor-pointer rounded-md hover:bg-white/5">
                <FaUser className="text-[14px]" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem className="gap-2 cursor-pointer rounded-md hover:bg-white/5">
                <FaCog className="text-[14px]" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator className="bg-white/10 my-2" />

              <DropdownMenuItem className="gap-2 cursor-pointer rounded-md hover:bg-red-500/10 text-red-400">
                <FaSignOutAlt className="text-[14px]" />
                Logout
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  )
}