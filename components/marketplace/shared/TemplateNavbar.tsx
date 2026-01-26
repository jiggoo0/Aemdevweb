/** @format */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  /** พิกัดหมวดหมู่ที่กำลังแสดงผล (Current State) */
  activeCategory: TemplateCategory | string

  /** * [FIXED]: ปรับนิยามพิกัด Function Type
   * ตัดชื่อพารามิเตอร์ออกเพื่อให้ผ่านมาตรฐาน Lint ที่เข้มงวดที่สุด
   */
  onCategoryChange: (value: TemplateCategory | string) => void
}

/** * นิยามพิกัดหมวดหมู่ที่ระบบรองรับ
 * ปรับจูน Label ให้เหมาะสมกับกลุ่มเป้าหมาย SME และงาน Specialist
 */
const categories: { label: string; value: TemplateCategory | "all" }[] = [
  { label: "ทั้งหมด", value: "all" },
  { label: "โรงแรม & รีสอร์ท", value: "hotel" },
  { label: "งานบริการ", value: "service" },
  { label: "การตลาด", value: "marketing" },
  { label: "อีคอมเมิร์ซ", value: "ecommerce" },
]

/**
 * TemplateFilter - ระบบควบคุมพิกัดการคัดกรอง (Filter Navigation)
 * เน้นความแม่นยำและการตอบสนองเชิงระบบ (UI/UX Responsiveness)
 */
export const TemplateFilter: React.FC<TemplateFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav
      aria-label="ตัวกรองประเภทธุรกิจ"
      className="flex flex-wrap items-center justify-center gap-2 py-12 md:gap-4"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.value

        return (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            // จัดการพิกัด Accessibility เพื่อรักษาคะแนน Performance & SEO
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "font-heading relative overflow-hidden rounded-full px-8 py-3 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
              isActive
                ? "bg-slate-950 text-white shadow-2xl ring-2 shadow-slate-200 ring-slate-950 ring-offset-2"
                : "border border-slate-100 bg-white text-slate-400 hover:border-emerald-500/30 hover:bg-slate-50 hover:text-slate-950 active:scale-95"
            )}
          >
            {/* 1. ส่วนแสดงผลข้อความ (Content Layer) */}
            <span className="relative z-10">{cat.label}</span>

            {/* 2. ส่วนตกแต่งสถานะทำงาน (Active State Layer) */}
            {isActive && (
              <div
                className="absolute inset-0 z-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"
                aria-hidden="true"
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
