/** @format */

"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TemplateMetadata } from "@/types/template"
import { TemplateCard } from "./TemplateCard"
import { TemplateFilter } from "./TemplateFilter"
import { SearchX } from "lucide-react"

interface TemplateGridProps {
  templates: TemplateMetadata[]
}

/**
 * TemplateGrid - ระบบจัดการพิกัดตารางโครงสร้างเว็บไซต์
 * ทำหน้าที่ควบคุมการแสดงผล การคัดกรอง และการจัดการสถานะความว่างเปล่า (Empty State)
 */
export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  /**
   * ระบบคัดกรองพิกัดข้อมูล (Filtering Engine)
   * ปรับจูนด้วย useMemo เพื่อรีดประสิทธิภาพสูงสุด ลดภาระการคำนวณใหม่โดยไม่จำเป็น
   */
  const filteredTemplates = useMemo(() => {
    if (!templates) return []
    if (activeCategory === "all") return templates
    return templates.filter((template) => template.category === activeCategory)
  }, [activeCategory, templates])

  return (
    <div className="space-y-16">
      {/* 1. ส่วนควบคุมการคัดกรอง (Control Layer) */}
      <TemplateFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* 2. ส่วนจัดแสดงโครงสร้าง (Display Layer) */}
      <AnimatePresence mode="wait">
        {filteredTemplates.length > 0 ? (
          <motion.div
            key={activeCategory} // เปลี่ยน key เพื่อกระตุ้น Animation ทุกครั้งที่ฟิลเตอร์ขยับ
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </motion.div>
        ) : (
          /* 3. ส่วนแจ้งเตือนกรณีพิกัดข้อมูลไม่ตรง (Empty State Layer) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/50 py-32 text-center"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white text-slate-300 shadow-sm ring-1 ring-slate-100">
              <SearchX size={48} strokeWidth={1} />
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-heading text-3xl font-black tracking-tighter text-slate-900 uppercase italic">
                No Structures Found
              </h3>
              <p className="mx-auto max-w-sm text-lg font-bold text-slate-400">
                หมวดหมู่ธุรกิจนี้กำลังอยู่ระหว่างการตรวจสอบมาตรฐานโครงสร้าง{" "}
                <br />
                <span className="text-sm font-medium">
                  ลองเปลี่ยนหมวดหมู่หรือเลือกดูประเภทอื่นก่อนครับ
                </span>
              </p>
            </div>

            {/* ระบบคืนค่าสถานะ (State Reset) */}
            <button
              onClick={() => setActiveCategory("all")}
              className="font-heading mt-12 inline-flex items-center gap-4 rounded-full bg-slate-950 px-12 py-5 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:bg-emerald-600 active:scale-95"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
