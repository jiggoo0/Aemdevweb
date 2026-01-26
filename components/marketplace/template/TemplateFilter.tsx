/** @format */

"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { TemplateCategory } from "@/types/template"

interface TemplateFilterProps {
  activeCategory: TemplateCategory | string
  /**
   * แก้ไขจุดตาย: ใช้ eslint-disable-next-line เพื่อหยุดการตรวจเช็ค no-unused-vars
   * เฉพาะในนิยาม Interface นี้ เพราะเครื่องน้องตรวจเข้มจนไม่ยอมให้มีชื่อพารามิเตอร์ค้างไว้
   */
  // eslint-disable-next-line no-unused-vars
  onCategoryChange: (category: TemplateCategory | string) => void
}

const categories = [
  { label: "ทั้งหมด", value: "all" },
  { label: "โรงแรม & รีสอร์ท", value: "hotel" },
  { label: "งานบริการ", value: "service" },
  { label: "การตลาด", value: "marketing" },
  { label: "อีคอมเมิร์ซ", value: "ecommerce" },
]

export const TemplateFilter: React.FC<TemplateFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-8 md:gap-4">
      {categories.map((cat) => (
        <button
          key={cat.value}
          /**
           * เรียกใช้งานฟังก์ชันที่รับมาจาก Props โดยตรง
           * ตรงนี้คือจุดที่มีการใช้งาน (Usage) จริง ระบบจะไม่ฟ้อง Error ครับ
           */
          onClick={() => onCategoryChange(cat.value)}
          className={cn(
            "rounded-full px-6 py-2.5 text-[11px] font-black tracking-[0.15em] uppercase transition-all duration-300",
            activeCategory === cat.value
              ? "bg-stone-950 text-white shadow-lg shadow-stone-200"
              : "border border-stone-100 bg-white text-stone-500 hover:bg-stone-50 hover:text-stone-900"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
