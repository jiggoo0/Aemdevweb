/** @format */
import React from "react"

// 🟢 แก้ไข Interface ให้ยืดหยุ่น: รองรับทั้ง Array และ Record (Object)
export interface OpeningHoursProps {
  hours: { day: string; time: string }[] | Record<string, string>
  primaryColor?: string
}

export default function OpeningHours({
  hours = [],
  primaryColor = "#000000",
}: OpeningHoursProps) {
  /**
   * 🟢 Normalizer: แปลงข้อมูลทุกรูปแบบให้เป็น Array มาตรฐาน
   * เพื่อให้การ Render ด้านล่างเสถียร 100%
   */
  const normalizedHours = Array.isArray(hours)
    ? hours
    : Object.entries(hours).map(([day, time]) => ({
        day: day.charAt(0).toUpperCase() + day.slice(1),
        time: time,
      }))

  if (!normalizedHours.length) return null

  return (
    <section className="rounded-2xl border-2 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 w-8" style={{ backgroundColor: primaryColor }} />
        <h2 className="text-xl font-black uppercase tracking-widest text-slate-900">
          Opening Hours
        </h2>
      </div>

      <div className="space-y-4">
        {normalizedHours.map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-between border-b-2 border-slate-50 pb-3 transition-colors hover:border-slate-900"
          >
            <span className="text-sm font-black uppercase tracking-tight text-slate-500 group-hover:text-slate-900">
              {item.day}
            </span>
            <span className="text-sm font-bold tabular-nums text-slate-900">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* 🟢 System Status Watermark */}
      <div className="mt-8 flex items-center gap-2 opacity-20">
        <div className="h-1 w-1 animate-pulse rounded-full bg-slate-900" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Service Operational
        </span>
      </div>
    </section>
  )
}
