/** @format */
import React from "react"
import { cn } from "@/lib/utils"

/**
 * 💡 Marketing Layout (Modern Tech Version)
 * ออกแบบมาให้เป็น "ผืนผ้าใบ" สำหรับ Sale Page และ Landing Page
 * โดยใช้ระบบแสง Ambient Background แบบ Luminous Tech
 */

// ✅ 1. ย้าย Interface มาไว้แบบไม่ export และตัด className ออกเพื่อแก้ Error TS2344
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans antialiased",
        "selection:bg-emerald-500/30 selection:text-emerald-200"
      )}
    >
      {/* --- Ambient Background Effects --- */}

      {/* 1. Base Subtle Glow (Top Center) - แสงฟุ้งด้านบน */}
      <div
        className="pointer-events-none absolute -top-[10%] left-1/2 h-[500px] w-full max-w-[1000px] -translate-x-1/2 rounded-[100%] bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* 2. Grid Overlay - ลายตาราง Tech Agency */}
      <div
        className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* --- Main Content Area --- */}
      {/* ใช้ div ครอบแทนการส่ง className เข้ามา เพื่อความปลอดภัยของระบบ Type */}
      <div className="relative z-10 flex flex-col">{children}</div>

      {/* 3. Bottom Accent Glow - แสงฟุ้งมุมล่างสร้างมิติความลึก */}
      <div
        className="pointer-events-none absolute right-[0%] -bottom-[5%] h-[300px] w-full max-w-[600px] rounded-[100%] bg-cyan-500/5 blur-[100px]"
        aria-hidden="true"
      />
    </div>
  )
}
