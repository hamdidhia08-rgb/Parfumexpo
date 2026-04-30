"use client"

import { Inter } from "next/font/google"
import { useState, useEffect } from "react"
import { Card } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Button } from "@/Components/ui/button"
import {
  Search,
  Plus,
  MoreVertical,
  Download,
  Eye,
  Pencil,
  Trash,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

const inter = Inter({ subsets: ["latin"] })

const companies = [
  {
    name: "Ajmal Perfumes",
    email: "support@ajmalperfume.com",
    country: "United Arab Emirates",
    sector: "Perfume",
    source: "Instagram",
    status: "Active",
  },
  {
    name: "Arabian Oud",
    email: "sales@arabianoud.com",
    country: "Saudi Arabia",
    sector: "Perfume",
    source: "Manual",
    status: "Active",
  },
  {
    name: "Rasasi Perfumes",
    email: "info@rasasi.com",
    country: "United Arab Emirates",
    sector: "Essence",
    source: "TikTok",
    status: "Active",
  },
  {
    name: "Swiss Arabian",
    email: "contact@swissarabian.com",
    country: "United Arab Emirates",
    sector: "Perfume",
    source: "Instagram",
    status: "Pending",
  },
  {
    name: "Abdul Samad Al Qurashi",
    email: "info@asqgrp.com",
    country: "Saudi Arabia",
    sector: "Essence",
    source: "Manual",
    status: "Active",
  },
  {
    name: "Al Haramain Perfumes",
    email: "sales@alharamainperfumes.com",
    country: "United Arab Emirates",
    sector: "Perfume",
    source: "TikTok",
    status: "Active",
  },
  {
    name: "Oud Elite",
    email: "info@oudelite.com",
    country: "Saudi Arabia",
    sector: "Essence",
    source: "Instagram",
    status: "Inactive",
  },
  {
    name: "Al Jazeera Perfumes",
    email: "support@aljazeeraperfumes.com",
    country: "Qatar",
    sector: "Cosmetic",
    source: "Manual",
    status: "Active",
  },
  {
    name: "Khaltat Blends",
    email: "hello@khaltat.com",
    country: "United Arab Emirates",
    sector: "Perfume",
    source: "TikTok",
    status: "Pending",
  },
  {
    name: "Dar Al Teeb",
    email: "info@daralteeb.com",
    country: "Kuwait",
    sector: "Cosmetic",
    source: "Instagram",
    status: "Active",
  },
]

// ✅ STATUS BADGE (INCHANGÉ)
function StatusBadge({ status }: { status: string }) {
  const styles = {
    Active: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      dot: "bg-emerald-400",
    },
    Pending: {
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      dot: "bg-yellow-400",
    },
    Inactive: {
      text: "text-red-400",
      bg: "bg-red-500/10",
      dot: "bg-red-400",
    },
  }

  const s = styles[status as keyof typeof styles]

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium ${s.bg} ${s.text}`}
    >
      <span className={`w-2 h-2 rounded-full ${s.dot}`} />
      {status}
    </span>
  )
}

// ✅ SKELETON (IDENTIQUE)
const SkeletonRow = () => (
  <div className="grid grid-cols-[2fr_2fr_1.2fr_1.5fr_1fr_70px] items-center px-6 py-4 animate-pulse">

    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-white/10" />
      <div className="w-24 h-3 bg-white/10 rounded" />
    </div>

    <div className="w-32 h-3 bg-white/10 rounded" />
    <div className="w-20 h-3 bg-white/10 rounded" />
    <div className="w-28 h-3 bg-white/10 rounded" />
    <div className="w-16 h-6 bg-white/10 rounded-md" />

    <div className="flex justify-end">
      <div className="w-6 h-6 bg-white/10 rounded" />
    </div>
  </div>
)

export default function CompaniesTable() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200)
  }, [])

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Card className={`${inter.className} mt-6 bg-[#0B1220] border border-white/5 rounded-2xl`}>

      {/* HEADER */}
      <div className="flex items-center justify-between p-6 border-b border-white/5">

        <h2 className="text-white text-lg font-semibold">
          Companies List
        </h2>

        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 w-[200px] bg-white/[0.04] border-white/10 text-white placeholder:text-slate-500"
            />
          </div>

          {/* EXPORT */}
          <Button className="h-9 px-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>

          {/* ADD */}
          <Button className="h-9 px-3 bg-[#C9A227] hover:bg-[#b89a1f] text-black font-medium flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add
          </Button>

        </div>
      </div>

      {/* TABLE */}
      <div className="divide-y divide-white/5">

        {/* HEADER */}
     <div className="grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_70px] px-6 py-3 text-xs text-slate-400 uppercase tracking-wide bg-white/[0.02]">
        <div>Company</div>
        <div>Email</div>
        <div>Country</div>
        <div>Sector</div>
        <div>Status</div>
        <div className="text-right">Action</div>
        </div>

        {/* ROWS */}
      {loading
  ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
  : filtered.map((company, i) => (
 <div
  key={i}
  className="grid grid-cols-[2fr_2fr_1.5fr_1fr_1fr_70px] items-center px-6 py-4 hover:bg-white/[0.03] transition"
>

        {/* COMPANY */}
        <div className="flex items-center gap-3">
          <span className="text-white text-sm font-medium">
            {company.name}
          </span>
        </div>

        {/* EMAIL */}
        <div className="text-slate-400 text-sm truncate">
          {company.email}
        </div>

        {/* COUNTRY */}
        <div className="text-slate-300 text-sm">
          {company.country}
        </div>

        {/* SECTOR */}
        <div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-300">
            {company.sector}
          </span>
        </div>

        {/* STATUS */}
        <div className="flex items-center">
          <StatusBadge status={company.status} />
        </div>

        {/* ACTION */}
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md hover:bg-white/10 transition">
                <MoreVertical className="w-4 h-4 text-slate-400 hover:text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className={`${inter.className} w-40 bg-[#0F172A] border border-white/10 rounded-xl shadow-lg shadow-black/40 p-1`}
            >
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10">
                <Eye className="w-4 h-4" />
                View
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10">
                <Pencil className="w-4 h-4" />
                Edit
              </DropdownMenuItem>

              <div className="my-1 h-px bg-white/10" />

              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10">
                <Trash className="w-4 h-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </div>
    ))}

      </div>

 {/* FOOTER */}
<div className="flex items-center justify-between px-6 py-4 border-t border-white/5 text-sm">

  {/* LEFT */}
  <span className="text-slate-400">
    Showing <span className="text-white font-medium">{filtered.length}</span> companies
  </span>

  {/* RIGHT PAGINATION */}
  <div className="flex items-center gap-1">

    {/* PREV */}
    <button className="px-2.5 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition">
      ‹
    </button>

    {/* PAGE 1 (ACTIVE) */}
    <button className="px-3 py-1.5 rounded-md bg-white text-[#0C1322] font-medium shadow-sm">
      1
    </button>

    {/* PAGE 2 */}
    <button className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition">
      2
    </button>

    {/* PAGE 3 */}
    <button className="px-3 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition">
      3
    </button>

    {/* NEXT */}
    <button className="px-2.5 py-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition">
      ›
    </button>

  </div>
</div>

    </Card>
  )
}