/** @format */

"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TemplateMetadata, TemplateCategory } from "@/types/template"
import TemplateCard from "./TemplateCard"
import { TemplateFilter } from "./TemplateFilter"
import { SearchX, RefreshCcw } from "lucide-react"

interface TemplateGridProps {
  templates: TemplateMetadata[]
}

/**
 * TemplateGrid - ระบบบริหารจัดการรายการโซลูชันเชิงโครงสร้าง (Strategic Asset Grid)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: ความแม่นยำในการจัดการข้อมูลด้วย useMemo และความลื่นไหลระดับสูงสุด
 * มาตรฐาน: การเพิ่มประสิทธิภาพสมรรถนะเพื่อการตอบสนองที่ฉับไว (High-Response)
 */
export const TemplateGrid: React.FC<TemplateGridProps> = ({ templates }) => {
  const [activeCategory, setActiveCategory] = useState<
    TemplateCategory | "all"
  >("all")

  // [STRATEGIC FILTERING]: ระบบคัดกรองข้อมูลเพื่อลดภาระการประมวลผล (Computational Efficiency)
  const filteredTemplates = useMemo(() => {
    if (!templates) return []
    if (activeCategory === "all") return templates
    return templates.filter((template) => template.category === activeCategory)
  }, [activeCategory, templates])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="space-y-12 lg:space-y-20">
      <TemplateFilter
        activeCategory={activeCategory}
        onCategoryChange={(cat) =>
          setActiveCategory(cat as TemplateCategory | "all")
        }
      />

      <AnimatePresence mode="wait">
        {filteredTemplates.length > 0 ? (
          <motion.div
            key={activeCategory}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredTemplates.map((template, idx) => (
              <motion.div
                key={template.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <TemplateCard template={template} priority={idx < 3} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ส่วนแสดงผลกรณีไม่พบข้อมูลในหมวดหมู่ที่เลือก (Empty State Strategy) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/40 py-32 text-center"
          >
            <div className="relative mb-10">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500/10" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-white text-slate-200 shadow-xl ring-1 ring-slate-100">
                <SearchX size={40} strokeWidth={1} />
              </div>
            </div>

            <div className="space-y-4 px-6">
              <h3 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic">
                System <span className="text-emerald-500">Standby.</span>
              </h3>
              <p className="font-body mx-auto max-w-sm text-lg font-bold text-slate-400">
                ขณะนี้กำลังจัดเตรียมโซลูชันเพิ่มเติมในหมวดหมู่นี้ <br />
                ท่านสามารถรับชมโซลูชันอื่นเพื่อตรวจสอบประสิทธิภาพระบบเบื้องต้น
              </p>
            </div>

            <button
              onClick={() => setActiveCategory("all")}
              className="group font-heading mt-12 inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-10 py-5 text-[10px] font-black tracking-[0.3em] text-white uppercase italic shadow-2xl transition-all hover:bg-emerald-600 active:scale-95"
            >
              <RefreshCcw
                size={14}
                className="transition-transform group-hover:rotate-180"
              />
              Reset Strategic Filter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
