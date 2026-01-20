/** @format */

import React from "react"
import { cn } from "@/lib/utils"

/**
 * 💡 Marketing Layout: Luminous Canvas Specialist Edition (v.2026)
 * ออกแบบมาเพื่อเป็น "ผืนผ้าใบ" ที่สร้างอารมณ์ร่วมให้กับกลุ่ม Sale Page
 * Focus: High-Conversion Design สำหรับ SME และโรงงานอุตสาหกรรม
 */

interface MarketingLayoutProps {
  children: React.ReactNode
}

/**
 * 🧬 MarketingLayout Engine
 * สถาปัตยกรรม Layout ที่ใช้แสงและเงาเพื่อสร้างมิติความลึก (Depth)
 * รองรับการแสดงผลแบบ High-End Industrial Minimalism
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-[#020617] font-sans antialiased",
        "selection:bg-emerald-500/30 selection:text-emerald-200"
      )}
    >
      {/* --- Ambient Background Infrastructure (Layered for Depth) --- */}

      {/* 1. Base Aurora Glow (Top Center) - แสงฟุ้งสไตล์ Specialist */}
      <div
        className="pointer-events-none absolute -top-[10%] left-1/2 -z-10 h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* 2. Grid Overlay - ลายตารางแบบวิศวกรรมความละเอียดสูง */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] bg-center opacity-[0.04]"
        aria-hidden="true"
      />

      {/* --- Main Marketing Engine --- */}
      <main className="relative z-10 flex min-h-screen flex-col">
        {children}
      </main>

      {/* 3. Bottom Accent Glow - แสงฟุ้งมุมล่างเพื่อมิติความลึก (Industrial Emerald) */}
      <div
        className="pointer-events-none absolute -right-[10%] -bottom-[10%] -z-10 h-[500px] w-full max-w-[900px] rounded-full bg-emerald-600/5 blur-[150px]"
        aria-hidden="true"
      />

      {/* 4. Side Subtle Flare - แสงเหลือบด้านข้างเพื่อลดความกระด้างของสีพื้นหลัง */}
      <div
        className="pointer-events-none absolute top-1/4 left-0 -z-10 h-64 w-32 bg-emerald-500/5 blur-[100px]"
        aria-hidden="true"
      />
    </div>
  )
}
