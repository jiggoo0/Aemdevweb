/** @format */

"use client"

import React from "react"
import { MessageCircle, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * LineStickyButton - ปุ่มติดต่อด่วน (Conversion Hook)
 * แนวคิด: กระตุ้นการทักแชทด้วยระบบบอกสถานะออนไลน์และคำเชิญชวนที่เป็นกันเอง
 * ตัวตน: นายเอ็มซ่ามากส์ (AEMDEVWEB) - ผู้เชี่ยวชาญที่เข้าถึงง่าย
 */
const LineStickyButton = () => {
  // ดึงลิงก์ติดต่อจาก Site Config 2026
  const lineLink = siteConfig?.links?.line || "https://lin.ee/6lgJox0"

  return (
    <div className="group fixed right-6 bottom-6 z-[60] flex flex-col items-end gap-3 md:right-10 md:bottom-10">
      {/* [TOOLTIP] - กล่องคำเชิญชวนแบบกระจกโปร่งแสง (Glassmorphism)
          จะปรากฏขึ้นเมื่อผู้ใช้งานนำเมาส์มาวาง (เฉพาะบนจอใหญ่)
      */}
      <div className="invisible mb-2 translate-x-4 items-center gap-4 rounded-[2rem] border border-white/20 bg-white/80 p-5 opacity-0 shadow-2xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-500 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 lg:flex">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <Zap size={20} className="animate-pulse fill-emerald-600" />
          {/* จุดไฟกะพริบสถานะออนไลน์ (Live Status) */}
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
              Online Expert
            </span>
          </div>
          <div className="font-heading text-sm font-black text-slate-900">
            คุยเรื่องเว็บกับนายเอ็มได้เลย
          </div>
        </div>
      </div>

      {/* [PRIMARY BUTTON] - ปุ่มหลักสไตล์เน้นความแรง (Technical Black & Emerald)
       */}
      <a
        href={lineLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "shadow-3xl relative flex h-16 items-center gap-4 overflow-hidden rounded-[1.5rem] bg-slate-950 px-8 text-white shadow-slate-950/20 transition-all duration-500",
          "hover:scale-105 hover:bg-emerald-600 active:scale-95"
        )}
      >
        {/* ไอคอน Line ที่มีความซ่า (หมุนเมื่อวางเมาส์) */}
        <div className="relative z-10 flex h-8 w-8 items-center justify-center transition-transform duration-500 group-hover:rotate-12">
          <MessageCircle
            size={26}
            fill="currentColor"
            className="text-emerald-400 group-hover:text-white"
          />
        </div>

        {/* ข้อความปุ่ม */}
        <span className="font-heading relative z-10 text-[11px] font-black tracking-[0.2em] uppercase italic">
          Start Project
        </span>

        {/* ลูกศรชี้นำทาง */}
        <ArrowRight
          size={18}
          className="relative z-10 ml-2 text-emerald-500 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white"
        />

        {/* Shine Effect: แสงวิ่งผ่านเพื่อดึงดูดสายตา (Visual Hook) */}
        <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </a>

      {/* จุดบอกสถานะสำหรับมือถือ (แสดงผลถาวรแบบเรียบง่าย) */}
      <div className="mr-4 flex items-center gap-2 lg:hidden">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase italic">
          Expert Available
        </span>
      </div>
    </div>
  )
}

export default LineStickyButton
