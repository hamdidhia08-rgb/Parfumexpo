"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Calendar,
  Settings,
  LogOut,
  Building,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    href: "/Admin",
    icon: LayoutDashboard,
  },
  {
    title: "Visitors List",
    href: "/Admin/users",
    icon: Users,
  },
  {
    title: "Companies List",
    href: "/Admin/Companies",
    icon: Building,
  },
  {
    title: "Events",
    href: "/Admin/events",
    icon: Calendar,
  },
  {
    title: "Settings",
    href: "/Admin/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-[#0B1220] via-[#0F172A] to-[#020617] border-r border-white/5 flex flex-col justify-between p-4">
      
      {/* TOP */}
      <div>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 mb-10 group">
          
          <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/20">
            <Image
              src="/images/icon.png"
              alt="Logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <span className="text-xl font-semibold tracking-tight text-white">
            Parfum Expo
            <span className="text-[#C9A227]">.</span>
          </span>

        </Link>
    <div className="px-4 mb-4 mt-2">
        <p className="text-[11px] tracking-widest uppercase text-slate-500 font-semibold mb-2">
            Navigation
        </p>
        <div className="w-full h-px bg-white/5"></div>
        </div>
        {/* MENU */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
      <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "group flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold tracking-tight transition-all duration-300 ease-in-out cursor-pointer",
                  
                  isActive
                    ? "bg-white text-[#0C1322] shadow-md shadow-black/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5 hover:translate-x-1"
                )}
              >
                {/* ICON */}
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-all duration-300 ease-in-out",
                    isActive
                      ? "text-[#0C1322]"
                      : "text-slate-400 group-hover:text-white group-hover:scale-110"
                  )}
                />

                {/* TEXT */}
                <span>
                  {item.title}
                </span>

                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <div className="ml-auto w-1.5 h-6 rounded-full bg-[#C9A227] transition-all duration-300" />
                )}
              </div>
            </Link>
            )
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="space-y-4">

        {/* USER CARD */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/5">
          
          <div className="w-9 h-9 rounded-full bg-[#C9A227] flex items-center justify-center text-black text-sm font-semibold">
            AD
          </div>

          <div>
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-slate-400">admin@mail.com</p>
          </div>
        </div>

        {/* LOGOUT (NO RED) */}
        <button
          className="flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </div>
    </aside>
  )
}