/** @format */

"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { ServiceItem } from "@/types"
import IconRenderer from "@/components/shared/IconRenderer"

interface ServiceCardProps {
  data: ServiceItem
  className?: string
}

/**
 * ServiceCard - ส่วนแสดงรายการบริการ (Sales Machine)
 * ตัวตน: เน้นความหนักแน่น (Bold), ตัวเอียง (Italic) และความซิ่งสไตล์นายเอ็มซ่ามากส์
 * เทคนิค: รองรับการส่งข้อมูลไอคอนผ่านชื่อ String เพื่อความลื่นไหลของระบบ
 */
export const ServiceCard = ({ data, className }: ServiceCardProps) => {
  if (!data) return null

  // กำหนดชุดสีตามประเภทบริการที่เลือก
  const themeClasses: Record<string, string> = {
    emerald: "text-emerald-600 group-hover:text-emerald-400",
    orange: "text-orange-600 group-hover:text-orange-400",
    blue: "text-blue-600 group-hover:text-blue-400",
    indigo: "text-indigo-600 group-hover:text-indigo-400",
    rose: "text-rose-600 group-hover:text-rose-400",
    amber: "text-amber-600 group-hover:text-amber-400",
    violet: "text-violet-600 group-hover:text-violet-400",
    slate: "text-slate-600 group-hover:text-slate-400",
  }

  const activeTheme = themeClasses[data.themeColor || "emerald"]

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem]",
        "border border-slate-100 bg-white p-8 transition-all duration-500",
        "hover:border-emerald-500/30 hover:shadow-2xl lg:p-10",
        className
      )}
    >
      {/* ส่วนหัว: ไอคอน และ ข้อมูลกำกับ */}
      <header className="mb-10 flex items-start justify-between">
        <div
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 transition-all duration-500",
            "group-hover:bg-slate-950",
            activeTheme
          )}
        >
          {/* แสดงผลไอคอนผ่านชื่อเพื่อความรวดเร็วและไม่หน่วงเครื่อง */}
          <IconRenderer name={data.iconName} size={32} />
        </div>
        <div className="text-right">
          <p className="font-heading text-[9px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
            Svc ID: {data.id.split("-")[1] || data.id}
          </p>
          <span className="font-heading mt-1 block text-xs font-black tracking-widest text-slate-950 uppercase italic">
            {data.category}
          </span>
        </div>
      </header>

      {/* ส่วนเนื้อหา: จุดเด่นและฟังก์ชันการใช้งาน */}
      <div className="flex-1 space-y-4">
        <h3 className="font-heading text-2xl font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600 md:text-3xl">
          {data.title}
        </h3>
        <p className="font-body text-base leading-relaxed font-bold text-slate-500">
          {data.description}
        </p>

        {/* รายการจุดเด่น (Features) */}
        <div className="space-y-3 pt-6">
          {data.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
              <span className="font-body text-sm font-bold text-slate-600">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ส่วนท้าย: ราคา และ ปุ่มปิดการขาย */}
      <footer className="mt-auto border-t border-slate-50 pt-8">
        <div className="mb-8 flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-4xl font-black text-slate-950 italic">
              ฿{data.priceValue.toLocaleString()}
            </span>
            <span className="font-heading text-[10px] font-black text-slate-400 uppercase italic">
              {data.renewalPrice
                ? `/ ${data.renewalPrice.split("/")[1] || "Year"}`
                : "/ One-time"}
            </span>
          </div>
          {data.promotion && (
            <span className="font-body mt-1 text-xs font-bold text-emerald-600 italic">
              * {data.promotion}
            </span>
          )}
        </div>

        <Link
          href={`/services/${data.slug}`}
          className="group/btn flex items-center justify-between rounded-2xl bg-slate-950 px-8 py-5 text-white transition-all hover:bg-emerald-600 active:scale-95"
        >
          <span className="font-heading text-[11px] font-black tracking-[0.3em] uppercase italic">
            ดูรายละเอียด
          </span>
          <ArrowRight
            size={18}
            className="transition-transform group-hover/btn:translate-x-2"
          />
        </Link>
      </footer>
    </article>
  )
}
