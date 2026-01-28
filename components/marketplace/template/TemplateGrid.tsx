/** @format */

"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TemplateMetadata } from "@/types/template"
// นำเข้าส่วนประกอบการ์ดและตัวกรองตามระบบที่วางไว้
import TemplateCard from "./TemplateCard"
import { TemplateFilter } from "./TemplateFilter"
import { SearchX } from "lucide-react"

interface TemplateGridProps {
  templates: TemplateMetadata[]
}

/**
 * TemplateGrid - ส่วนจัดการตารางแสดงผลแบบเว็บไซต์
 * แนวคิด: บริหารจัดการการแสดงผลและการเลือกหมวดหมู่ให้ใช้งานง่ายและเร็วที่สุด
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  /**
   * ระบบคัดกรองข้อมูล (Filtering Engine)
   * ใช้ useMemo เพื่อป้องกันการประมวลผลซ้ำ ช่วยให้เว็บทำงานได้ไวระดับปีศาจ
   */
  const filteredTemplates = useMemo(() => {
    if (!templates) return []
    if (activeCategory === "all") return templates
    return templates.filter((template) => template.category === activeCategory)
  }, [activeCategory, templates])

  return (
    <div className="space-y-16">
      {/* ส่วนควบคุม: เลือกหมวดหมู่ธุรกิจที่ต้องการ */}
      <TemplateFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* ส่วนแสดงผล: รายการเว็บไซต์ที่ผ่านการคัดกรอง */}
      <AnimatePresence mode="wait">
        {filteredTemplates.length > 0 ? (
          <motion.div
            key={activeCategory} // เล่นอนิเมชั่นใหม่ทุกครั้งที่เปลี่ยนหมวดหมู่
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id || template.slug}
                template={template}
              />
            ))}
          </motion.div>
        ) : (
          /* กรณีไม่พบข้อมูล: แสดงสถานะแจ้งเตือนที่ดูเป็นมืออาชีพ */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/50 py-32 text-center"
          >
            <div className="flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-white text-slate-300 shadow-sm ring-1 ring-slate-100">
              <SearchX size={48} strokeWidth={1} />
            </div>

            <div className="mt-12 space-y-4">
              <h3 className="font-heading text-3xl font-black tracking-tighter text-slate-900 uppercase italic">
                No Results <span className="text-emerald-500">Found.</span>
              </h3>
              <p className="font-body mx-auto max-w-sm text-lg font-bold text-slate-400">
                เรากำลังเตรียมระบบสำหรับหมวดหมู่นี้อยู่ครับ
                <br />
                <span className="text-sm font-medium">
                  ลองเลือกดูหมวดอื่น หรือกดรีเซ็ตตัวกรองก่อนได้ครับ
                </span>
              </p>
            </div>

            {/* ปุ่มรีเซ็ต: คืนค่าการค้นหาทั้งหมด */}
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
