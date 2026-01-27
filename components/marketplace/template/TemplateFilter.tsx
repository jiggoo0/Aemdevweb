/** @format */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  /** พิกัดหมวดหมู่ที่กำลังแสดงผล (Current State) */
  activeCategory: TemplateCategory | string

  /** * พิกัดฟังก์ชันสำหรับเปลี่ยนหมวดหมู่ข้อมูล
   * จัดการล้างตัวแปรที่ไม่ได้ใช้งานเพื่อให้โค้ดสะอาดตามมาตรฐาน
   */
  onCategoryChange: (value: string) => void
}

/** * สารบบหมวดหมู่ที่ระบบงานรองรับ
 * คัดเลือกกลุ่มธุรกิจ SME และโรงงานอุตสาหกรรมที่เป็นกลุ่มเป้าหมายหลักของ นายเอ็มซ่ามากส์
 */
const categories = [
  { label: "ALL STRUCTURES", value: "all" },
  { label: "HOTEL & RESORT", value: "hotel" },
  { label: "SERVICE BUSINESS", value: "service" },
  { label: "MARKETING ENGINE", value: "marketing" },
  { label: "E-COMMERCE", value: "ecommerce" },
]

/**
 * TemplateFilter - ระบบควบคุมพิกัดการคัดกรองงานระบบ
 * แนวทาง: เน้นความเรียบง่าย เข้าถึงพิกัดข้อมูลได้ไว และเป็นมิตรต่อผู้ใช้งาน
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const TemplateFilter: React.FC<TemplateFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <nav
      aria-label="ตัวกรองประเภทธุรกิจสำหรับ SME"
      className="flex flex-wrap items-center justify-center gap-3 py-12 md:gap-4"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.value

        return (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            // เพิ่มความกริบด้านการเข้าถึงด้วยพิกัด ARIA labels
            aria-pressed={isActive}
            className={cn(
              "relative overflow-hidden rounded-full px-8 py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500",
              "ring-offset-2 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none",
              isActive
                ? "bg-slate-950 text-white shadow-xl ring-2 shadow-slate-200 ring-slate-950"
                : "border border-slate-100 bg-white text-slate-400 hover:border-emerald-500/30 hover:bg-slate-50 hover:text-slate-950 active:scale-95"
            )}
          >
            {/* เลเยอร์ข้อความพิกัดหมวดหมู่ */}
            <span className="relative z-10 italic">{cat.label}</span>

            {/* พิกัดเอฟเฟกต์แสงจางๆ เมื่อถูกเลือกใช้งาน */}
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
