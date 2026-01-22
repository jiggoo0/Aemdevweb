/** @format */

import React from "react"
import { cn } from "@/lib/utils"

interface MarketingLayoutProps {
  children: React.ReactNode
}

/**
 * 💡 Marketing Layout: Luminous Canvas (Clean Edition)
 * สถาปัตยกรรมพื้นหลังแบบ Layered Depth ที่เน้นความสะอาดและประสิทธิภาพ
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-[#020617] font-sans antialiased",
        "selection:bg-emerald-500/30 selection:text-emerald-200"
      )}
    >
      {/* --- Ambient Background Infrastructure --- */}

      {/* 1. Base Aurora Glow - แสงฟุ้งกึ่งกลางหน้าจอ */}
      <div
        className="pointer-events-none absolute -top-[10%] left-1/2 -z-10 h-[600px] w-full max-w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* 2. Grid Overlay - ตาราง Blueprint สไตล์วิศวกรรม */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_90%)] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* --- Main Content Engine --- */}
      {/* 🛠️ ออกแบบมาให้ยืดหยุ่น โดยคุมความกว้างสูงสุดไว้ที่ 1920px (Ultra-wide Safety) */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1920px] flex-col">
        {children}
      </main>

      {/* --- Bottom Decoration --- */}

      {/* 3. Decorative Flare - แสงเหลือบมุมขวาล่าง */}
      <div
        className="pointer-events-none absolute -right-[5%] -bottom-[5%] -z-10 h-[400px] w-[400px] rounded-full bg-emerald-600/5 blur-[120px]"
        aria-hidden="true"
      />
    </div>
  )
}
