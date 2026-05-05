import Nav from "@/Components/Admin/Nav/Nav"
import Sidebar from "@/Components/Admin/Sidebar/Sidebar"
import Navbar from "@/Components/Navbar/Nav"
import { Inter } from "next/font/google"
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
export const metadata: Metadata = {
  title: "Parfum Expo",
  description: "International Perfume Exhibition 2026",
    icons: {
    icon: "./icon.ico",
  },
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<div className={`${inter.className} flex h-screen bg-[#0B1220] text-slate-200`}>
          
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Nav/>

        {/* Content */}
        <main className="flex-1 p-6 bg-[#020617] overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  )
}