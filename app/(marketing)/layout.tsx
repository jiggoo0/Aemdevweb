/** @format */
import React from "react"
import { cn } from "@/lib/utils"

/**
 * 💡 Marketing Layout: Luminous Canvas (v.2026)
 * ออกแบบมาให้เป็น "ผืนผ้าใบ" ที่ดึงดูดสายตาสำหรับ Sale Page
 * Architecture: Next.js 15.x (App Router) + Tailwind CSS 4.0
 */

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-slate-950 font-sans antialiased transition-colors duration-500",
        "selection:bg-emerald-500/30 selection:text-emerald-200"
      )}
    >
      {/* --- Ambient Background Layers (Layered for Depth) --- */}

      {/* 1. Base Aurora Glow (Top Center) - แสงฟุ้งจากระบบ Aurora */}
      <div
        className="aurora-bg -top-[10%] left-1/2 -z-10 h-[500px] w-full max-w-[1000px] -translate-x-1/2 opacity-[0.12]"
        aria-hidden="true"
      />

      {/* 2. Grid Overlay - ลายตาราง Agency สไตล์ High-Tech */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* --- Main Content Engine --- */}
      <main className="relative z-10 flex min-h-screen flex-col">
        {children}
      </main>

      {/* 3. Bottom Accent Glow - แสงฟุ้งมุมล่างสร้างมิติความลึก (ใช้สี Emerald/Cyan ผสม) */}
      <div
        className="pointer-events-none absolute right-[-10%] -bottom-[5%] -z-10 h-[400px] w-full max-w-[800px] rounded-[100%] bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />
    </div>
  )
}
