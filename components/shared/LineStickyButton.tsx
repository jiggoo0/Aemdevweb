/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { MessageCircle, Sparkles } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

interface LineStickyButtonProps {
  className?: string
}

/**
 * 🟢 LineStickyButton: Luminous Conversion Engine (v.2026)
 * ออกแบบมาเพื่อกระตุ้นยอดขาย (Conversion) โดยไม่รบกวน UX หลัก
 */
export const LineStickyButton = ({ className }: LineStickyButtonProps) => {
  const [showTooltip, setShowTooltip] = useState(false)

  // ⏱️ จังหวะการทักทายลูกค้า (Delay 2s เพื่อไม่ให้แย่งซีน Hero)
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none fixed right-6 bottom-6 z-[100] flex flex-col items-end gap-3",
        className
      )}
    >
      {/* 💬 Tooltip Message: เด้งขึ้นมาทักทายลูกค้าแบบ Native CSS Animation */}
      {showTooltip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 fill-mode-forwards pointer-events-auto relative mr-1 duration-700 ease-out">
          <div className="font-prompt relative rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-2.5 text-xs font-bold text-white shadow-2xl backdrop-blur-xl">
            <span className="relative z-10 flex items-center gap-2">
              ปรึกษาพี่เอ็มฟรี!{" "}
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </span>

            {/* Arrow Pointer: ปรับให้เนียนตาขึ้น */}
            <div className="absolute right-6 -bottom-1 h-3 w-3 rotate-45 border-r border-b border-white/10 bg-slate-900/90" />

            {/* Subtle Sparkle Decor */}
            <Sparkles className="text-aurora-cyan absolute -top-2 -left-2 h-4 w-4 animate-bounce opacity-40" />
          </div>
        </div>
      )}

      {/* 🟢 Main Line Button Container */}
      <div className="group pointer-events-auto relative">
        {/* Pulse Effect: เรียกร้องความสนใจแบบนุ่มนวล (Soft Ambient Pulse) */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#06C755] opacity-20 duration-1000" />

        <a
          href={siteConfig.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex items-center justify-center rounded-full transition-all duration-500",
            "h-16 w-16 md:h-18 md:w-18", // ปรับขนาดให้กดง่ายขึ้น (Mobile-first)
            "bg-[#06C755] text-white",
            "shadow-[0_10px_30px_-5px_rgba(6,199,85,0.4)] hover:shadow-[0_15px_40px_-5px_rgba(6,199,85,0.6)]",
            "border-2 border-white/20 hover:scale-110 active:scale-95"
          )}
          aria-label="ติดต่อสอบถามผ่าน Line"
        >
          {/* Icon: ใช้ Fill เพื่อความพรีเมียม */}
          <MessageCircle className="h-8 w-8 fill-white/10 md:h-9 md:w-9" />

          {/* 🔴 Notification Badge: จิตวิทยาการแจ้งเตือน (Hot Leads) */}
          <span className="animate-in zoom-in absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-950 bg-red-500 text-[10px] font-black text-white shadow-lg duration-500">
            1
          </span>
        </a>

        {/* Luminous Glow Behind Button */}
        <div className="bg-aurora-emerald/20 absolute inset-0 -z-10 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </div>
  )
}
