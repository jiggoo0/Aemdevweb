/** @format */

"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * LineStickyButton - ปุ่มติดต่อสื่อสารผ่านระบบ Line
 * วางพิกัดคงที่ (Fixed) เพื่อให้ผู้ใช้งานเข้าถึงช่องทางปรึกษาได้ทุกขณะ
 * ปรับปรุงระบบแอนิเมชันให้ลดการประมวลผลซ้ำซ้อน
 */
const LineStickyButton = () => {
  const [isOpen, setIsOpen] = useState(true)

  // พิกัดข้อความทักทายเบื้องต้นเพื่อเปิดการสนทนา
  const greetingText =
    "สวัสดีครับ ปรึกษาเรื่องการวางระบบเว็บไซต์หรือประเมินราคาพิกัดงานกับผมได้ทันทีครับ"

  return (
    <div className="pointer-events-none fixed right-6 bottom-6 z-[999] flex flex-col items-end gap-5">
      {/* 1. กล่องข้อความทักทาย (Greeting Bubble) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="pointer-events-auto relative mr-2 max-w-[250px] rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] md:max-w-[300px]"
          >
            {/* ปุ่มปิดพิกัดข้อความทักทาย */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-xl transition-all hover:scale-110 hover:bg-rose-500 active:scale-90"
              aria-label="ปิดข้อความทักทาย"
            >
              <X className="h-4 w-4" />
            </button>

            {/* รายละเอียดพิกัดข้อมูลเจ้าหน้าที่ */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
                  เจ้าหน้าที่ออนไลน์
                </span>
              </div>
              <p className="font-body text-[13px] leading-relaxed font-bold text-slate-500">
                {greetingText}
              </p>
            </div>

            {/* ส่วนประกอบฐานกล่องข้อความ */}
            <div className="absolute right-10 -bottom-2 h-4 w-4 rotate-45 border-r border-b border-slate-100 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ปุ่มกดเชื่อมต่อระบบ Line: ดึงพิกัดจาก siteConfig.links */}
      <motion.a
        href={siteConfig.links?.line || "#"}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="group pointer-events-auto relative flex h-16 w-16 items-center justify-center rounded-[1.8rem] bg-[#06C755] text-white shadow-[0_25px_50px_-12px_rgba(6,199,85,0.5)] transition-all"
      >
        <span className="absolute inset-0 animate-ping rounded-[1.8rem] bg-[#06C755] opacity-20" />

        <MessageCircle className="h-8 w-8 fill-current transition-transform duration-700 group-hover:rotate-[360deg]" />

        {/* จุดแจ้งเตือนสถานะออนไลน์ */}
        <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full border-[3px] border-white bg-rose-500 shadow-md" />

        {/* ป้ายกำกับคำสั่ง (Label) */}
        <span className="font-heading absolute right-20 scale-0 rounded-xl bg-[#0F172A] px-4 py-2 text-[10px] font-black tracking-widest text-white uppercase italic transition-all group-hover:scale-100">
          ปรึกษางาน
        </span>
      </motion.a>
    </div>
  )
}

export default LineStickyButton
