/** @format */

"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * 🏗️ LineStickyButton Specialist Edition (v2026)
 * ระบบปุ่มติดต่อด่วน (Floating Conversion Tool) สำหรับกลุ่มลูกค้า SME และโรงงาน
 */
const LineStickyButton = () => {
  const [isOpen, setIsOpen] = useState(true)

  // 🧬 ข้อความทักทายระดับพรีเมียม (Conversion Copywriting)
  const greetingText =
    "สวัสดีครับ! สนใจทำเว็บกับนายเอ็มซ่ามากส์ สอบถามประเมินราคาหรือปรึกษาแผนธุรกิจได้ทันทีครับ"

  return (
    <div className="pointer-events-none fixed right-6 bottom-6 z-[999] flex flex-col items-end gap-5">
      {/* 🗨️ Auto-Greeting Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="pointer-events-auto relative mr-2 max-w-[250px] rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] md:max-w-[300px]"
          >
            {/* ❌ Close Interaction */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-xl transition-all hover:scale-110 hover:bg-rose-500 active:scale-90"
              aria-label="Close greeting"
            >
              <X className="h-4 w-4" />
            </button>

            {/* 📄 Content Layer */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">
                  Online Specialist
                </span>
              </div>
              <p className="font-anuphan text-[13px] leading-relaxed font-bold text-slate-500">
                {greetingText}
              </p>
            </div>

            {/* Speech Bubble Notch */}
            <div className="absolute right-10 -bottom-2 h-4 w-4 rotate-45 border-r border-b border-slate-100 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 Main Interaction Button: LINE Ecosystem Connect */}
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

        <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full border-[3px] border-white bg-rose-500 shadow-md" />

        <span className="absolute right-20 scale-0 rounded-xl bg-[#0F172A] px-4 py-2 text-[10px] font-black tracking-widest text-white uppercase transition-all group-hover:scale-100">
          Chat With Me
        </span>
      </motion.a>
    </div>
  )
}

export default LineStickyButton
