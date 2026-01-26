/** @format */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  /** พิกัดหมวดหมู่ที่กำลังแสดงผล (Current State) */
  activeCategory: TemplateCategory | string

  /** * [FIXED]: ตัดชื่อ 'arg' ออก เหลือเพียงพิกัด Type อย่างเดียว
   * เพื่อจัดการ Error no-unused-vars 14:22 ให้หายขาด 100%
   */
  onCategoryChange: (category: TemplateCategory | string) => void
}

/** * นิยามพิกัดหมวดหมู่ที่ระบบรองรับ
 * ออกแบบมาเพื่อกลุ่มธุรกิจ SME และโรงงานอุตสาหกรรมโดยเฉพาะ
 */
const categories = [
  { label: "ทั้งหมด", value: "all" },
  { label: "โรงแรม & รีสอร์ท", value: "hotel" },
  { label: "งานบริการ", value: "service" },
  { label: "การตลาด", value: "marketing" },
  { label: "อีคอมเมิร์ซ", value: "ecommerce" },
]

/**
 * TemplateFilter - ระบบควบคุมพิกัดการคัดกรอง (Filter Navigation)
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
            // จัดการพิกัดการเข้าถึงเพื่อคะแนน Accessibility
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "font-heading relative overflow-hidden rounded-full px-8 py-3 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
              isActive
                ? "bg-slate-950 text-white shadow-2xl ring-2 shadow-slate-200 ring-slate-950 ring-offset-2"
                : "border border-slate-100 bg-white text-slate-400 hover:border-emerald-500/30 hover:bg-slate-50 hover:text-slate-950 active:scale-95"
            )}
          >
            {/* 1. เลเยอร์ข้อความ (Typography Layer) */}
            <span className="relative z-10">{cat.label}</span>

            {/* 2. เอฟเฟกต์แสงเงาเมื่อ Active (Infrastructure Glow) */}
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
