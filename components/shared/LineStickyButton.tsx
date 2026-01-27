/** @format */

"use client"

import React from "react"
import { MessageCircle, ArrowRight } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * LineStickyButton - Professional Business Edition
 * พิกัด: ปุ่มติดต่อด่วนแบบติดหนึบ (Conversion Hook)
 * ยุทธศาสตร์: เป็นทางลัดให้เจ้าของธุรกิจเข้าถึงที่ปรึกษาได้ทันทีโดยไม่รบกวนการอ่านเนื้อหา
 */
const LineStickyButton = () => {
  // พิกัดความปลอดภัย: ดึงลิงก์ติดต่อจาก Site Config
  const lineLink = siteConfig?.contact?.line || "#"

  return (
    <div className="group fixed right-8 bottom-8 z-[60] flex flex-col items-end gap-3">
      {/* ส่วนแนะนำ (Contextual Tooltip): ปรากฏเพื่อเชิญชวนอย่างสุภาพ */}
      <div className="invisible mb-2 translate-x-4 items-center gap-4 rounded-2xl border border-slate-50 bg-white p-5 opacity-0 shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 lg:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <MessageCircle size={20} />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
            Status: Available
          </div>
          <div className="font-heading text-sm font-black text-slate-900">
            ปรึกษาแผนงานกับผมได้ทันที
          </div>
        </div>
      </div>

      {/* ตัวปุ่มหลัก (Primary Action): เน้นความเรียบง่ายแต่ทรงพลัง */}
      <a
        href={lineLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative flex h-16 items-center gap-4 overflow-hidden rounded-2xl bg-slate-950 px-7 text-white shadow-2xl transition-all duration-500",
          "hover:scale-105 hover:bg-emerald-600 active:scale-95"
        )}
      >
        {/* ไอคอน Line พร้อมพิกัดเอฟเฟกต์หมุนเล็กน้อยเมื่อ Hover */}
        <div className="relative flex h-8 w-8 items-center justify-center transition-transform duration-500 group-hover:rotate-12">
          <MessageCircle
            size={24}
            fill="currentColor"
            className="text-emerald-400 group-hover:text-white"
          />
        </div>

        {/* ข้อความกำกับ (Label) */}
        <span className="font-heading text-xs font-black tracking-[0.2em] uppercase italic">
          Line Contact
        </span>

        {/* ลูกศรชี้พิกัดทางเลือก */}
        <ArrowRight
          size={18}
          className="ml-2 text-emerald-500 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white"
        />

        {/* Shine Effect: เลเยอร์แสงวิ่งผ่านเพื่อดึงดูดสายตาแบบพรีเมียม */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </a>
    </div>
  )
}

export default LineStickyButton
