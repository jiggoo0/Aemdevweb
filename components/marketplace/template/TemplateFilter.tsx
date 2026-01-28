/** @format */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  /** หมวดหมู่ที่กำลังแสดงผลอยู่ตอนนี้ */
  activeCategory: TemplateCategory | string

  /** ฟังก์ชันสำหรับเปลี่ยนกลุ่มข้อมูลที่ต้องการดู */
  onCategoryChange: (value: string) => void
}

/** * รายการหมวดหมู่ธุรกิจที่ระบบรองรับ
 * เน้นกลุ่มธุรกิจ SME และกลุ่มที่ต้องการทำยอดขายออนไลน์โดยเฉพาะ
 */
const categories = [
  { label: "ALL STRUCTURES", value: "all" },
  { label: "HOTEL & RESORT", value: "hotel" },
  { label: "SERVICE BUSINESS", value: "service" },
  { label: "MARKETING ENGINE", value: "marketing" },
  { label: "E-COMMERCE", value: "ecommerce" },
]

/**
 * TemplateFilter - ระบบเลือกประเภทเว็บไซต์
 * แนวคิด: เน้นความเรียบง่าย กดง่าย และเปลี่ยนข้อมูลได้ทันที
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const TemplateFilter: React.FC<TemplateFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav
      aria-label="ตัวเลือกประเภทธุรกิจสำหรับ SME"
      className="flex flex-wrap items-center justify-center gap-3 py-12 md:gap-4"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.value

        return (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            // เพิ่มความเนี้ยบด้าน Accessibility ให้ระบบอ่านหน้าจอเข้าใจ
            aria-pressed={isActive}
            className={cn(
              "relative overflow-hidden rounded-full px-8 py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
              "ring-offset-2 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none",
              isActive
                ? "scale-105 bg-slate-950 text-white shadow-xl ring-2 shadow-slate-200 ring-slate-950"
                : "border border-slate-100 bg-white text-slate-400 hover:border-emerald-500/30 hover:bg-slate-50 hover:text-slate-950 active:scale-95"
            )}
          >
            {/* ข้อความชื่อหมวดหมู่ */}
            <span className="relative z-10 italic">{cat.label}</span>

            {/* เอฟเฟกต์แสงจางๆ ด้านหลังเมื่อปุ่มถูกเลือก */}
            {isActive && (
              <div
                className="absolute inset-0 z-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-50"
                aria-hidden="true"
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
