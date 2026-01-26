/** @format */

import React from "react"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import LineStickyButton from "@/components/shared/LineStickyButton"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
}

/**
 * โครงสร้างหลักของหน้าเว็บไซต์ (Marketing Layout)
 * จัดการส่วนประกอบคงที่และเลเยอร์พื้นหลังทั้งหมด
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-white antialiased",
        "selection:bg-emerald-500/20 selection:text-emerald-900",
        "font-anuphan"
      )}
    >
      {/* 1. เลเยอร์ตกแต่งพื้นหลัง (Background Layers)
          ล็อคค่า -z-20 และ pointer-events-none เพื่อไม่ให้รบกวนการคลิกปุ่มต่างๆ
      */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* จุดกระจายแสง (Glow Effect) */}
        <div className="absolute -top-[5%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.03] blur-[100px]" />

        {/* ลายตารางพื้นหลัง (Grid System) */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.015]" />

        {/* แผ่นกรองพื้นผิว (Noise Filter) เพื่อลดความเรียบของสีพื้น */}
        <div className="absolute inset-0 opacity-[0.01] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>

      {/* 2. ส่วนนำทางหลัก (Main Navigation) */}
      <Navbar />

      {/* 3. พื้นที่เนื้อหา (Main Content)
          เว้นระยะห่างจากด้านบน (pt-16) เพื่อรองรับ Navbar ที่ถูกล็อคตำแหน่งไว้
      */}
      <main
        id="main-content"
        className="relative z-10 flex-1 pt-16 transition-opacity duration-500 ease-in-out md:pt-20"
      >
        {children}
      </main>

      {/* 4. ส่วนท้ายและปุ่มติดต่อสื่อสาร (Footer & Widgets) */}
      <Footer />
      <LineStickyButton />

      {/* 5. ระบบเข้าถึงด่วน (Accessibility Skip Link) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:p-4 focus:text-white"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>
    </div>
  )
}
