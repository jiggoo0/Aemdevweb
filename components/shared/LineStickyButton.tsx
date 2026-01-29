/** @format */

"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ArrowRight, Zap, Sparkles } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * LineStickyButton - ช่องทางติดต่อผู้เชี่ยวชาญโดยตรง (The Strategic Access)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Zero-Friction Conversion" เข้าถึงโซลูชันได้รวดเร็วที่สุด
 */
const LineStickyButton = () => {
  const lineLink = siteConfig?.links?.line || "https://lin.ee/6lgJox0"

  return (
    <div className="group fixed right-6 bottom-6 z-[90] flex flex-col items-end gap-4 md:right-12 md:bottom-12">
      {/* [LAYER 1]: DYNAMIC TOOLTIP (แสดงผลเฉพาะบน Desktop) */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          className="invisible mb-2 flex items-center gap-5 rounded-[2.5rem] border border-white/20 bg-white/70 p-6 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-all duration-500 group-hover:visible lg:flex"
        >
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Zap size={22} className="animate-pulse fill-emerald-600" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                System Specialist
              </span>
              <Sparkles size={10} className="text-amber-400" />
            </div>
            <div className="font-heading text-base font-black text-slate-950">
              ปรึกษาแผนงานระบบกับผู้เชี่ยวชาญ
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* [LAYER 2]: PRIMARY INTERACTION BUTTON */}
      <motion.a
        href={lineLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative flex h-20 items-center gap-5 overflow-hidden rounded-[2rem] bg-slate-950 px-10 text-white shadow-2xl transition-all duration-500",
          "hover:bg-emerald-600 hover:shadow-emerald-500/30"
        )}
      >
        {/* สัญลักษณ์การโต้ตอบ */}
        <div className="relative z-10 flex h-10 w-10 items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
          <MessageCircle
            size={30}
            fill="currentColor"
            className="text-emerald-400 transition-colors group-hover:text-white"
          />
        </div>

        {/* ข้อมูลเนื้อหาปุ่ม */}
        <div className="relative z-10 flex flex-col items-start leading-none">
          <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase italic group-hover:text-white/80">
            Access_Node
          </span>
          <span className="font-heading text-lg font-black tracking-widest uppercase italic">
            Start Project
          </span>
        </div>

        {/* สัญลักษณ์นำทาง */}
        <ArrowRight
          size={24}
          strokeWidth={3}
          className="relative z-10 ml-2 text-emerald-500 transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white"
        />

        {/* ระบบเอฟเฟกต์แสงเพื่อความพรีเมียม */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
            delay: 1,
          }}
          className="absolute inset-0 z-0 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </motion.a>

      {/* [LAYER 3]: MOBILE STATUS DISPLAY */}
      <div className="mr-6 flex items-center gap-3 lg:hidden">
        <div className="relative flex h-2 w-2">
          <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <div className="relative h-2 w-2 rounded-full bg-emerald-600" />
        </div>
        <span className="font-heading text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Service Active
        </span>
      </div>
    </div>
  )
}

export default LineStickyButton
