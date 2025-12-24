/** @format */
"use client"

import React from "react"
import Link from "next/link"
// ✅ แก้ไข Path: อ้างอิงจากรูทของโปรเจกต์ตามโครงสร้างไฟล์จริง
import { iconMap } from "@/components/iconMap"
// ✅ แก้ไข Type Import: ดึงจาก data/servicesData.ts ที่มีการนิยาม ServiceItem ไว้
import type { ServiceItem } from "@/data/servicesData"

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Guard Clause: ป้องกัน Runtime Error
  if (!service) return null

  // ✅ Defensive Logic: ตรวจสอบ Icon ก่อนเรียกใช้งาน
  const Icon = (iconMap as any)[service.category] || iconMap.STARTER
  const ArrowIcon = iconMap.ARROW_RIGHT
  const hasPromo = !!service.promoPrice

  return (
    <div className="group relative border-4 border-slate-900 bg-white p-8 shadow-[8px_8px_0px_0px_#0f172a] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
      {/* 🏷️ Promo Badge */}
      {hasPromo && (
        <div className="absolute -right-4 -top-4 z-10 rotate-2 border-4 border-slate-900 bg-[#ff3e3e] px-4 py-1 text-xs font-black uppercase italic text-white shadow-[4px_4px_0px_0px_#000]">
          HOT PROMO
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div className="bg-slate-900 p-3 text-white">
          <Icon size={32} />
        </div>
        <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {`TYPE_${service.category} | ID: ${String(service.id).padStart(3, "0")}`}
        </span>
      </div>

      <h3 className="mb-3 text-2xl font-black uppercase italic tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
        {service.title}
      </h3>

      <p className="mb-6 min-h-[3rem] text-sm font-bold italic leading-relaxed text-slate-500">
        {service.description}
      </p>

      {/* 💰 Price Display */}
      <div className="relative mb-8 overflow-hidden border-l-8 border-slate-900 bg-slate-50 p-5">
        <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-slate-400">
          INVESTMENT PACKAGE
        </p>

        <div className="flex items-baseline gap-2">
          {hasPromo ? (
            <>
              <span className="text-3xl font-black italic text-[#ff3e3e]">
                {service.promoPrice}
              </span>
              <span className="text-sm font-bold text-slate-400 line-through opacity-70">
                {service.price}
              </span>
            </>
          ) : (
            <span className="text-2xl font-black italic text-slate-900">
              {service.price}
            </span>
          )}
        </div>

        <div className="pointer-events-none absolute right-0 top-0 p-1 opacity-5">
          <Icon size={64} />
        </div>
      </div>

      <Link
        href={`/catalog?template=${service.id}`}
        className="group/btn flex items-center justify-center gap-3 border-4 border-slate-900 bg-white py-4 text-lg font-black uppercase italic transition-all hover:bg-slate-900 hover:text-white"
      >
        EXPLORE TEMPLATE
        {ArrowIcon && (
          <ArrowIcon
            className="transition-transform group-hover/btn:translate-x-2"
            size={20}
          />
        )}
      </Link>
    </div>
  )
}
