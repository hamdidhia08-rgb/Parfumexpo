"use client"

import { Inter } from "next/font/google"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { MoreVertical, Download, Upload } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    status: "Active",
    avatar: "/images/user/user2.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "Pending",
    avatar: "/images/user/img5.jpg",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "Inactive",
    avatar: "/images/user/user1.png",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "Active",
    avatar: "/images/user/img6.jpg",
  },
]

function StatusBadge({ status }: { status: string }) {
  const colors = {
    Active: "bg-emerald-500",
    Pending: "bg-yellow-400",
    Inactive: "bg-red-500",
  }

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <span className={`w-2.5 h-2.5 rounded-full ${colors[status as keyof typeof colors]}`} />
      {status}
    </div>
  )
}

export default function RecentSignupCard() {
  return (
    <Card className={`${inter.className} bg-[#0F172A] border border-white/10 rounded-2xl`}>

      {/* HEADER */}
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg">
          Recent New Signup
        </CardTitle>

        <div className="flex gap-2">
          <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10">
            <Upload className="w-4 h-4 mr-2" />
            Import
          </Button>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="space-y-4 mt-3">
{/* HEADER TABLE */}
<div className="grid grid-cols-[1.5fr_2fr_1fr] gap-x-6 text-sm text-slate-400 px-2">
  <span>Name</span>
  <span>Email</span>
  <span className="text-left">Status</span>
</div>

{/* USERS */}
{users.map((user, index) => (
  <div
    key={index}
    className="grid grid-cols-[1.5fr_2fr_1fr] items-center gap-x-6 px-2 py-3 rounded-xl hover:bg-white/5 transition"
  >

    {/* NAME */}
    <div className="flex items-center gap-3 min-w-0">
      <Image
        src={user.avatar}
        alt={user.name}
        width={36}
        height={36}
        className="rounded-full object-cover"
      />
      <span className="text-white text-sm font-medium truncate">
        {user.name}
      </span>
    </div>

    {/* EMAIL */}
    <div className="text-slate-400 text-sm truncate">
      {user.email}
    </div>

    {/* STATUS */}
    <div className="flex justify-first">
      <StatusBadge status={user.status} />
    </div>

  </div>
))}

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-4 text-sm text-slate-400">
          <span>Showing 4 results</span>

          <div className="flex gap-2">
            <Button size="icon" variant="ghost" className="hover:bg-white/10">
              ‹
            </Button>
            <Button size="icon" className="bg-yellow-600 text-white">
              1
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-white/10">
              2
            </Button>
            <Button size="icon" variant="ghost" className="hover:bg-white/10">
              ›
            </Button>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}