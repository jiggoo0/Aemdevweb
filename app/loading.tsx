/** @format */
import React from "react"
import { Zap, Sparkles } from "lucide-react"

/**
 * ⏳ Luminous Loading Screen - 2026 Edition (Performance Optimized)
 * ออกแบบมาเพื่อให้ลูกค้ารู้สึกถึงความเร็ว (Unlink-TH Engine Style)
 */
export default function Loading() {
  return (
    <div
      className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
      aria-busy="true"
      aria-label="กำลังโหลดข้อมูล"
    >
      {/* 🌌 Aurora Ambient Background - เลเยอร์แสงหลังสุด (Static on Mobile) */}
      <div className="aurora-bg top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]" />

      {/* 🚀 Loading Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 1. Luminous Energy Core - ใช้ CSS Animations ระดับ Native */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          {/* External Pulse Glow (วงแหวนกระจายแสง) */}
          <div className="bg-aurora-cyan/20 absolute inset-0 animate-pulse rounded-full duration-[2000ms]" />

          {/* Core Spinning Ring (วงแหวนหลัก) */}
          <div className="border-t-aurora-cyan shadow-aurora-glow h-24 w-24 animate-spin rounded-full border-[3px] border-white/5" />

          {/* Central Brand Icon (จุดกึ่งกลางส่องแสง) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Zap className="fill-aurora-emerald h-8 w-8 animate-pulse text-white drop-shadow-[0_0_15px_rgba(130,255,180,0.6)]" />
              <Sparkles className="text-aurora-cyan absolute -top-4 -right-4 h-4 w-4 animate-bounce opacity-50" />
            </div>
          </div>
        </div>

        {/* 2. Brand Identity - Typography พรีเมียม */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mt-12 text-center duration-1000">
          <h3 className="font-prompt text-2xl leading-none font-black tracking-tighter text-white uppercase">
            AEM
            <span className="text-aurora-cyan drop-shadow-[0_0_10px_rgba(122,243,255,0.4)]">
              DEVWEB
            </span>
          </h3>
          <p className="font-anuphan mt-4 animate-pulse text-lg font-medium text-slate-400 opacity-80">
            รอสักครู่ครับ พี่เอ็มกำลังเตรียมข้อมูลให้...
          </p>
        </div>

        {/* 3. Luminous Progress Bars - จำลองความไวระดับปีศาจ */}
        <div className="mt-10 w-56 space-y-3 opacity-60">
          <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/5 bg-white/5">
            {/* Shimmer Effect คุมผ่านคลาส animate-pulse เพื่อประหยัด CPU */}
            <div className="from-aurora-cyan to-aurora-emerald h-full w-2/3 animate-pulse bg-gradient-to-r" />
          </div>
          <div className="mx-auto h-1 w-3/4 overflow-hidden rounded-full bg-white/5">
            <div className="from-aurora-violet to-aurora-cyan h-full w-1/2 animate-pulse bg-gradient-to-r delay-300" />
          </div>
        </div>
      </div>

      {/* 🎨 Background Texture - ลายตาราง Luminous Mix-blend */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.02]"
        aria-hidden="true"
      />
    </div>
  )
}
