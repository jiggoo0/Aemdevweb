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
 * 🏗️ MainLayout — The Foundation of AEMDEVWEB 2026
 * สถาปัตยกรรมหลักที่รวมเรื่อง Design, SEO และ UX เข้าด้วยกัน
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-white antialiased",
        "selection:bg-emerald-500/20 selection:text-emerald-900",
        "font-anuphan" // บังคับใช้ฟอนต์หลักที่อ่านง่ายสำหรับเนื้อหาภาษาไทย
      )}
    >
      {/* 🌌 Background Infrastructure (Layer -20) */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* 🟢 Strategic Glow: จุดนำสายตาให้เนื้อหาตรงกลางเด่นขึ้น */}
        <div className="absolute -top-[5%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.03] blur-[100px]" />

        {/* 📐 Professional Grid: ลายตารางวิศวกรรมสื่อถึงความแม่นยำ */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.015]" />

        {/* 🌑 High-End Texture: ตัวสร้าง Noise เพื่อลดความ "แบน" ของสีพื้นหลัง */}
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

      {/* 🧭 Navigation System */}
      <Navbar />

      {/* 📦 Content Lifecycle: เพิ่ม Padding Top เพื่อหลบ Navbar และลื่นไหลด้วย CSS Transition */}
      <main
        id="main-content"
        className="relative z-10 flex-1 pt-16 transition-opacity duration-500 ease-in-out md:pt-20"
      >
        {children}
      </main>

      {/* ⚫ Information Infrastructure */}
      <Footer />

      {/* 📱 Conversion Point: ทัก Line ได้จากทุกหน้า */}
      <LineStickyButton />

      {/* 🛠️ Accessibility: ข้ามไปยังเนื้อหาหลักสำหรับ Screen Reader */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:p-4 focus:text-white"
      >
        Skip to content
      </a>
    </div>
  )
}
