"use client";

import React from "react";
import { Inter } from "next/font/google";
import {
  ArrowUp,
  ArrowDown,
  Users,
  Building,
  DollarSign,
  Sparkles,
  Ticket ,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Overview: React.FC = () => {
  const data = [
    {
      label: "Total Visitors",
      number: "1,245",
      trend: "up",
      icon: <Users size={22} />,
      bg: "bg-sky-500",
      trendText: "Increase in visitors",
    },
    {
      label: "Exhibiting Companies",
      number: "86",
      trend: "up",
      icon: <Building size={22} />,
      bg: "bg-emerald-500",
      trendText: "More companies joined",
    },
    {
    label: "Tickets Sold",
    number: "3,420",
    trend: "up",
    icon: <Ticket size={22} />,
    bg: "bg-[#C9A227]",
    trendText: "Increase in ticket sales",
    },
    {
      label: "Popular Fragrances",
      number: "127",
      trend: "down",
      icon: <Sparkles size={22} />,
      bg: "bg-rose-500",
      trendText: "Slight decrease in demand",
    },
  ];

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-4 w-full ${inter.className}`}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className="relative bg-[#0F172A] border border-white/10 rounded-xl p-4 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20 overflow-hidden"
        >
          {/* LEFT CONTENT */}
          <div className="w-4/5 z-10 flex flex-col justify-between h-full">

            {/* LABEL */}
            <div className="text-sm font-medium text-slate-400 leading-tight">
              {item.label}
            </div>

            {/* VALUE */}
            <div className="text-2xl font-semibold mt-1 text-white">
              {item.number}
            </div>

            {/* TREND */}
            <div className="flex items-center mt-2">
              {item.trend === "up" ? (
                <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-2">
                  <ArrowUp size={13} />
                </div>
              ) : (
                <div className="h-5 w-5 rounded-full bg-rose-500 text-white flex items-center justify-center mr-2">
                  <ArrowDown size={13} />
                </div>
              )}
              <span className="text-xs text-slate-400">
                {item.trendText}
              </span>
            </div>
          </div>

          {/* ICON */}
          <div
            className={`flex items-center justify-center h-12 w-12 rounded-xl ${item.bg} text-white z-10 shadow-md`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;