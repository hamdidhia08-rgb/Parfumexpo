"use client"

import { useState } from "react"
import { Inter } from "next/font/google"
import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { format, parse, startOfWeek, getDay } from "date-fns"
import enUS from "date-fns/locale/en-US"
import { CalendarDays } from "lucide-react"
import { Card } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

import { Plus } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

const locales = {
  "en-US": enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

export default function EventPage() {
  const [events, setEvents] = useState<any[]>([
    {
      title: "Perfume Expo Opening",
      start: new Date(2026, 3, 10, 10, 0),
      end: new Date(2026, 3, 10, 12, 0),
    },
    {
      title: "VIP Meeting - Ajmal",
      start: new Date(2026, 3, 12, 14, 0),
      end: new Date(2026, 3, 12, 16, 0),
    },
  ])

  const [open, setOpen] = useState(false)

  const [form, setForm] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
    priority: "medium",
  })

  const handleAddEvent = () => {
    if (!form.title || !form.start || !form.end) return

    setEvents([
      ...events,
      {
        title: `${form.title} (${form.priority})`,
        start: new Date(form.start),
        end: new Date(form.end),
      },
    ])

    setOpen(false)

    setForm({
      title: "",
      description: "",
      start: "",
      end: "",
      priority: "medium",
    })
  }

  const handleSelectSlot = ({ start, end }: any) => {
    setForm({
      ...form,
      start: start.toISOString().slice(0, 16),
      end: end.toISOString().slice(0, 16),
    })
    setOpen(true)
  }

  return (
    <div className={`${inter.className} p-6`}>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-white text-xl font-semibold">
          Event Calendar
        </h1>

     <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button className="bg-[#C9A227] hover:bg-[#b89a1f] text-black h-9">
      <Plus className="w-4 h-4 mr-2" />
      Add Event
    </Button>
  </DialogTrigger>

  <DialogContent
    className={`${inter.className} bg-[#0B1220] border border-white/10 text-white rounded-2xl max-w-2xl p-7 shadow-2xl shadow-black/40`}
  >

    {/* HEADER */}
    <DialogHeader>
      <DialogTitle className="text-xl font-semibold tracking-tight">
        Create New Event
      </DialogTitle>
      <p className="text-sm text-slate-400">
        Add a new event to your calendar
      </p>
    </DialogHeader>

    {/* FORM */}
    <div className="space-y-5 mt-6">

      {/* TITLE */}
      <div>
        <label className="text-sm text-slate-400 mb-1 block">
          Event Name
        </label>
        <Input
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="bg-white/5 border-white/10 text-white h-10 focus:ring-1 focus:ring-[#C9A227]/40"
          placeholder="Perfume Expo..."
        />
      </div>

      {/* DESCRIPTION */}
      <div>
        <label className="text-sm text-slate-400 mb-1 block">
          Description
        </label>
        <Textarea
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="bg-white/5 border-white/10 text-white min-h-[90px] focus:ring-1 focus:ring-[#C9A227]/40"
          placeholder="Write details about this event..."
        />
      </div>

    {/* DATES */}
<div className="grid grid-cols-2 gap-4">

  {/* START */}
  <div className="space-y-1">
    <label className="text-xs text-slate-400">
      Start Date
    </label>

    <div className="relative">
      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

      <Input
        type="date"
        value={form.start}
        onChange={(e) =>
          setForm({ ...form, start: e.target.value })
        }
        className="pl-9 bg-white/5 border-white/10 text-white h-10 focus:ring-1 focus:ring-[#C9A227]/40"
      />
    </div>
  </div>

  {/* END */}
  <div className="space-y-1">
    <label className="text-xs text-slate-400">
      End Date
    </label>

    <div className="relative">
      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

      <Input
        type="date"
        value={form.end}
        onChange={(e) =>
          setForm({ ...form, end: e.target.value })
        }
        className="pl-9 bg-white/5 border-white/10 text-white h-10 focus:ring-1 focus:ring-[#C9A227]/40"
      />
    </div>
  </div>

</div>

      {/* PRIORITY (UPGRADED 🔥) */}
      <div>
        <label className="text-sm text-slate-400 mb-2 block">
          Priority
        </label>

        <Select
          value={form.priority}
          onValueChange={(value) =>
            setForm({ ...form, priority: value })
          }
        >
          <SelectTrigger className="bg-white/5 border-white/10 text-white h-10">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>

          <SelectContent className={`${inter.className} bg-[#0B1220] border border-white/10 text-white rounded-xl`}>

            <SelectItem value="low">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Low Priority
              </div>
            </SelectItem>

            <SelectItem value="medium">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                Medium Priority
              </div>
            </SelectItem>

            <SelectItem value="high">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                High Priority
              </div>
            </SelectItem>

          </SelectContent>
        </Select>

        {/* PREVIEW BADGE */}
        <div className="mt-3">
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              form.priority === "low"
                ? "bg-emerald-500/10 text-emerald-400"
                : form.priority === "medium"
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {form.priority.toUpperCase()} PRIORITY
          </span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-3 pt-4 border-t border-white/10">

        <Button
          variant="ghost"
          onClick={() => setOpen(false)}
          className="text-slate-400 hover:text-white"
        >
          Cancel
        </Button>

        <Button
          onClick={handleAddEvent}
          className="bg-[#C9A227] hover:bg-[#b89a1f] text-black px-5"
        >
          Create Event
        </Button>

      </div>

    </div>
  </DialogContent>
</Dialog>
      </div>

      {/* CALENDAR */}
      <Card className="bg-[#0B1220]/70 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-xl shadow-black/20">

        <div className="h-[620px] text-white">

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            onSelectSlot={handleSelectSlot}
            popup
            views={["month"]}
            defaultView="month"
            components={{
              toolbar: (props) => (
                <div className="flex items-center justify-between mb-4">

                  <div className="flex gap-2">
                    {["TODAY", "PREV", "NEXT"].map((action) => (
                      <button
                        key={action}
                        onClick={() =>
                          props.onNavigate(action as any)
                        }
                        className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-slate-300 transition"
                      >
                        {action === "TODAY"
                          ? "Today"
                          : action === "PREV"
                          ? "Back"
                          : "Next"}
                      </button>
                    ))}
                  </div>

                  <span className="text-white font-semibold">
                    {props.label}
                  </span>

                  <div />
                </div>
              ),
            }}
          />

        </div>
      </Card>
    </div>
  )
}