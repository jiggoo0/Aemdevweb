/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  activeCategory: TemplateCategory | "all"
  onCategoryChange: (value: TemplateCategory | "all") => void
}

/** * [STRATEGIC DATA]: รายการหมวดหมู่โซลูชันมาตรฐานสากล
 * ออกแบบมาเพื่อให้สอดคล้องกับโครงสร้าง TemplateCategory ในระบบหลัก
 */
const categories: { label: string; value: TemplateCategory | "all" }[] = [
  { label: "ALL SOLUTIONS", value: "all" },
  { label: "READY MADE", value: "ReadyMade" },
  { label: "BUSINESS STRATEGY", value: "Business" },
  { label: "HOTEL & RESORT", value: "Hotel" },
  { label: "SERVICE SOLUTIONS", value: "Service" },
  { label: "ENTERPRISE ASSETS", value: "Digital" },
]

/**
 * TemplateFilter - ระบบเลือกหมวดหมู่โซลูชัน (Strategic Navigation Interface)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การจัดกลุ่มข้อมูลเพื่อให้เข้าถึงโซลูชันที่ต้องการได้อย่างแม่นยำ
 * มาตรฐาน: High-Response Interaction และความสมดุลเชิงสถาปัตยกรรม
 */
export const TemplateFilter: React.FC<TemplateFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav
      aria-label="ตัวเลือกประเภทโซลูชันธุรกิจ"
      className="relative flex flex-wrap items-center justify-center gap-2 py-10 md:gap-4 lg:py-16"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.value

        return (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={cn(
              "group relative flex h-11 items-center justify-center overflow-hidden rounded-2xl px-6 transition-all duration-300 md:h-12 md:px-8",
              "focus:ring-2 focus:ring-emerald-500/20 focus:outline-none",
              isActive ? "text-white" : "text-slate-400 hover:text-slate-950"
            )}
          >
            {/* [INTERACTIVE LAYER]: ตัวระบุสถานะปัจจุบัน (Shared Layout ID) */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 z-0 bg-slate-950 shadow-lg shadow-slate-900/10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* Label Node: ตัวอักษรแสดงหมวดหมู่ที่เน้นความหนักแน่นและทันสมัย */}
            <span className="font-heading relative z-10 text-[9px] font-black tracking-[0.3em] uppercase italic transition-colors md:text-[10px]">
              {cat.label}
            </span>

            {/* Visual Indicator: จุดนำสายตาเพื่อสร้างประสบการณ์การใช้งานที่ลื่นไหล */}
            {!isActive && (
              <span className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-500 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </button>
        )
      })}

      {/* Decorative Infrastructure: องค์ประกอบเสริมเพื่อสร้างความสมดุลเชิงระนาบ */}
      <div className="absolute -bottom-2 hidden items-center gap-3 opacity-10 md:flex">
        <div className="h-px w-12 bg-slate-900" />
        <span className="font-heading text-[7px] font-black tracking-[0.6em] text-slate-900 uppercase italic">
          Strategic Selector
        </span>
        <div className="h-px w-12 bg-slate-900" />
      </div>
    </nav>
  )
}
