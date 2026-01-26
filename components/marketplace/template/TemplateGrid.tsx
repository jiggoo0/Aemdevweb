/** @format */

"use client"

import React, { useState } from "react"
import { TemplateMetadata } from "@/types/template"
import { TemplateCard } from "./TemplateCard"
import { TemplateFilter } from "./TemplateFilter"

interface TemplateGridProps {
  templates: TemplateMetadata[]
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // ระบบคัดกรองข้อมูลตามหมวดหมู่ที่เลือก
  const filteredTemplates = templates.filter((template) => {
    if (activeCategory === "all") return true
    return template.category === activeCategory
  })

  return (
    <div className="space-y-12">
      {/* 1. ส่วนตัวกรองหมวดหมู่ */}
      <TemplateFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 2. ส่วนแสดงผลรายการ (Conditional Rendering) */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      ) : (
        /* 3. กรณีไม่พบข้อมูล (Empty State) */
        <div className="flex flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-slate-100 py-24 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
            {/* สามารถใส่ Lucide Icon เช่น SearchX ที่นี่ */}
            <span className="text-4xl font-black">?</span>
          </div>

          <h3 className="font-prompt mt-8 text-xl font-black text-slate-900">
            ไม่พบโครงสร้างที่ต้องการ
          </h3>
          <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-slate-500">
            ลองเปลี่ยนหมวดหมู่ หรือค้นหาธุรกิจประเภทอื่นดูครับ
          </p>

          {/* ปุ่ม Reset เพื่อให้ผู้ใช้งานกลับไปดูข้อมูลทั้งหมดได้ทันที */}
          <button
            onClick={() => setActiveCategory("all")}
            className="font-prompt mt-8 rounded-full bg-slate-950 px-8 py-3 text-[11px] font-black tracking-widest text-white uppercase transition-all hover:bg-emerald-600 active:scale-95"
          >
            แสดงโครงสร้างทั้งหมด
          </button>
        </div>
      )}
    </div>
  )
}
