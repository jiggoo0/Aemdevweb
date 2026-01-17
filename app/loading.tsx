/** @format */
import React from "react"
import { Zap, Sparkles } from "lucide-react"

/**
 * ⏳ Luminous Loading Screen - 2026 Edition
 * ออกแบบมาเพื่อให้ลูกค้ารู้สึกถึงความเร็วและความใส่ใจ (Humanistic Tech)
 * ฉีกความหมองด้วย Aurora Glow และ Animation ที่นุ่มนวล
 */
export default function Loading() {
  return (
    <div className="bg-background fixed inset-0 z-[100] flex flex-col items-center justify-center transition-colors duration-500">
      {/* 🌌 Aurora Ambient Background - สร้างบรรยากาศสว่างนวลตา */}
      <div className="aurora-bg top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15]" />

      {/* 🚀 Loading Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 1. Luminous Energy Core - วงกลมพลังงานออโรร่า */}
        <div className="relative flex h-32 w-32 items-center justify-center">
          {/* External Pulse Glow (วงแหวนกระจายแสง) */}
          <div className="bg-aurora-cyan/20 absolute inset-0 animate-ping rounded-full duration-[2000ms]"></div>

          {/* Core Spinning Ring (วงแหวนหลัก) */}
          <div className="border-t-aurora-cyan shadow-aurora-glow h-24 w-24 animate-spin rounded-full border-[3px] border-white/5"></div>

          {/* Central Brand Icon (จุดกึ่งกลางส่องแสง) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Zap className="fill-aurora-emerald h-8 w-8 animate-pulse text-white drop-shadow-[0_0_15px_rgba(130,255,180,0.6)]" />
              <Sparkles className="text-aurora-cyan absolute -top-4 -right-4 h-4 w-4 animate-bounce opacity-50" />
            </div>
          </div>
        </div>

        {/* 2. Brand Identity - Typography สว่างพรีเมียม */}
        <div className="mt-12 text-center">
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

        {/* 3. Luminous Progress Bars - จำลองการโหลดแบบ High-Tech */}
        <div className="mt-10 w-56 space-y-3">
          <div className="h-1.5 w-full overflow-hidden rounded-full border border-white/5 bg-white/5">
            <div className="from-aurora-cyan to-aurora-emerald h-full w-2/3 animate-[shimmer_2s_infinite] bg-gradient-to-r opacity-40"></div>
          </div>
          <div className="mx-auto h-1 w-3/4 overflow-hidden rounded-full bg-white/5">
            <div className="from-aurora-violet to-aurora-cyan h-full w-1/2 animate-[shimmer_2.5s_infinite] bg-gradient-to-r opacity-30"></div>
          </div>
        </div>
      </div>

      {/* 🎨 Background Texture - ลายตารางจางๆ แบบ Luminous */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.02] mix-blend-screen"
        aria-hidden="true"
      />
    </div>
  )
}
