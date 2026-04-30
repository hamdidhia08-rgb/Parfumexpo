"use client"

import * as React from "react"
import { Inter } from "next/font/google"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/Components/ui/chart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const chartData = [
  { date: "2024-06-01", visitors: 120, tickets: 80 },
  { date: "2024-06-02", visitors: 200, tickets: 150 },
  { date: "2024-06-03", visitors: 170, tickets: 120 },
  { date: "2024-06-04", visitors: 240, tickets: 200 },
  { date: "2024-06-05", visitors: 300, tickets: 260 },
  { date: "2024-06-06", visitors: 280, tickets: 220 },
  { date: "2024-06-07", visitors: 350, tickets: 300 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#ffffff",
  },
  tickets: {
    label: "Tickets",
    color: "#C9A227", // 🔥 GOLD
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("7d")

  const filteredData = React.useMemo(() => {
    if (timeRange === "7d") return chartData.slice(-7)
    if (timeRange === "30d") return chartData
    return chartData
  }, [timeRange])

  return (
    <Card className={`${inter.className} mt-6 bg-[#0F172A] border border-white/10 rounded-2xl`}>

      {/* HEADER */}
      <CardHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4">

        <div>
          <CardTitle className="text-white text-lg">
            Perfume Expo Analytics
          </CardTitle>

          <CardDescription className="text-slate-400">
            Visitors & tickets overview
          </CardDescription>
        </div>

        {/* SELECT */}
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-36 bg-white/5 border-white/10 text-white rounded-xl focus:ring-1 focus:ring-white/20">
            <SelectValue placeholder="Select" />
          </SelectTrigger>

          {/* ✅ INTER APPLIED HERE */}
          <SelectContent
            className={`${inter.className} bg-[#0F172A] border border-white/10 text-white rounded-xl shadow-lg shadow-black/30 backdrop-blur-xl`}
          >
            <SelectItem
              value="7d"
              className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer"
            >
              Last 7 days
            </SelectItem>

            <SelectItem
              value="30d"
              className="text-white hover:bg-white/10 focus:bg-white/10 cursor-pointer"
            >
              Last 30 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      {/* CHART */}
      <CardContent className="pt-6">

        <ChartContainer config={chartConfig} className="h-[300px] w-full">

          <AreaChart data={filteredData}>

            {/* GRADIENTS */}
            <defs>
              {/* Visitors (white) */}
              <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.25}/>
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
              </linearGradient>

              {/* Tickets (gold) */}
              <linearGradient id="fillTickets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9A227" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#C9A227" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />

            <XAxis
              dataKey="date"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />

            <ChartTooltip
              content={<ChartTooltipContent indicator="dot" />}
            />

            {/* VISITORS (WHITE) */}
            <Area
              dataKey="visitors"
              type="monotone"
              stroke="#ffffff"
              fill="url(#fillVisitors)"
              strokeWidth={2.5}
            />

            {/* TICKETS (GOLD) */}
            <Area
              dataKey="tickets"
              type="monotone"
              stroke="#C9A227"
              fill="url(#fillTickets)"
              strokeWidth={2.5}
            />

            {/* LEGEND WHITE */}
            <ChartLegend
              content={
                <ChartLegendContent className="text-white [&_*]:text-white flex gap-6 justify-center pt-4" />
              }
            />

          </AreaChart>

        </ChartContainer>

      </CardContent>
    </Card>
  )
}