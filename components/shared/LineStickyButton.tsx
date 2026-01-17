/** @format */
"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

interface LineStickyButtonProps {
  className?: string
}

export const LineStickyButton = ({ className }: LineStickyButtonProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed right-6 bottom-6 z-50 flex flex-col items-end gap-2", // Container ลอย
        className
      )}
    >
      {/* 💬 Tooltip Message: เด้งขึ้นมาทักทายลูกค้า (Delay 2s) */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
          className="pointer-events-auto relative mr-1"
        >
          <div className="font-prompt relative rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-xl shadow-slate-950/50">
            <span className="relative z-10">ปรึกษาพี่เอ็มฟรี! 🟢</span>

            {/* Arrow Pointer */}
            <div className="absolute right-6 -bottom-1.5 h-3 w-3 rotate-45 border-r border-b border-slate-700 bg-slate-900" />

            {/* Glow Effect */}
            <div className="absolute inset-0 animate-pulse rounded-xl bg-emerald-500/10" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 🟢 Main Line Button */}
      <div className="group pointer-events-auto relative">
        {/* Pulse Effect (เรียกร้องความสนใจ) */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06C755] opacity-20 duration-1000" />

        <motion.a
          href={siteConfig.links.line}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative flex items-center justify-center rounded-full",
            "h-14 w-14 md:h-16 md:w-16", // Responsive Size
            "bg-[#06C755] text-white", // LINE Green Color
            "shadow-[0_4px_14px_0_rgba(6,199,85,0.39)] hover:shadow-[0_6px_20px_rgba(6,199,85,0.5)]",
            "border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
          )}
          aria-label="ติดต่อสอบถามผ่าน Line"
        >
          {/* Icon */}
          <MessageCircle className="h-7 w-7 fill-white/20 md:h-8 md:w-8" />

          {/* 🔴 Notification Badge (จิตวิทยา: คนเห็นเลขแจ้งเตือนแล้วอยากกด) */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-500 text-[10px] font-bold text-white shadow-sm md:h-6 md:w-6 md:text-xs">
            1
          </span>
        </motion.a>
      </div>
    </div>
  )
}
