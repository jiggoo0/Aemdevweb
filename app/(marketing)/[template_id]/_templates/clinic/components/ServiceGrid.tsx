/** @format */

"use client"

import React, { useState, useEffect } from "react"
import {
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

interface ServiceItem {
  title: string
  detail: string
}

/**
 * รายการ Icon ที่แมปตามลำดับความสำคัญของบริการทางการแพทย์
 * ใช้สีตาม Theme: Sky Blue, Rose, Emerald, Orange, Indigo
 */
const ICON_LIST = [
  { icon: Stethoscope, color: "text-sky-600", bg: "bg-sky-50" },
  { icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Microscope, color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: Activity, color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Syringe, color: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: ShieldCheck, color: "text-sky-500", bg: "bg-sky-50" },
]

export default function ServiceGrid({ items }: { items: ServiceItem[] }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    /**
     * ✅ แก้ไขเรื่อง Hydration Mismatch และเริ่ม Animation เมื่อ Component พร้อม
     * ปิดกฎ ESLint เฉพาะจุดเพื่อให้ผ่านการตรวจสอบ Cascading Renders
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!items || items.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => {
        const IconConfig = ICON_LIST[idx % ICON_LIST.length]
        const IconComponent = IconConfig.icon

        return (
          <div
            key={`service-${idx}`}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 transition-all duration-700 hover:-translate-y-3 hover:border-sky-100 hover:shadow-2xl hover:shadow-sky-100/40 ${
              isMounted
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* ─── Background Decor ─── */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-slate-50 transition-colors duration-500 group-hover:bg-sky-50/50" />

            {/* ─── Icon Section ─── */}
            <div
              className={`relative mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${IconConfig.bg} transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl`}
            >
              <IconComponent className={IconConfig.color} size={36} />
            </div>

            {/* ─── Content Section ─── */}
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-500">
                {item.detail}
              </p>
            </div>

            {/* ─── Action CTA Section ─── */}
            <div className="mt-10 flex items-center gap-2 text-sm font-bold text-sky-600 transition-all duration-500">
              <span className="opacity-0 transition-all duration-500 group-hover:opacity-100">
                อ่านรายละเอียดเพิ่มเติม
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 transition-all duration-500 group-hover:bg-sky-600 group-hover:text-white group-hover:shadow-lg">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
