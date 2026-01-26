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
 * MainLayout - โครงสร้างเลเยอร์หลักของหน้าเว็บไซต์
 * จัดการส่วนประกอบคงที่และระบบพื้นหลัง (Visual Foundation) ของอาณาจักร AEMDEVWEB
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-white antialiased",
        "selection:bg-emerald-100 selection:text-emerald-900",
        "font-body"
      )}
    >
      {/* 1. Visual Foundation (Background Layers)
        ล็อคพิกัด -z-20 และใช้ pointer-events-none เพื่อป้องกันการรบกวน Interactive Elements
      */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* จุดกระจายแสง (Brand Glow Effect) - สร้างมิติให้กึ่งกลางหน้าจอ */}
        <div className="absolute -top-[5%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[100px]" />

        {/* ลายตารางพิกัด (Infrastructure Grid) - สะท้อนความเป็นระบบระเบียบ */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-repeat opacity-[0.02]" />

        {/* แผ่นกรองพื้นผิว (Noise Texture) - เพิ่มความพรีเมียมลดความกระด้างของสีพื้น */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <svg className="h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
      </div>

      {/* 2. ส่วนนำทางหลัก (Navigation Strategy) */}
      <Navbar />

      {/* 3. พื้นที่เนื้อหาหลัก (Main Content Slot)
        คำนวณระยะ Padding Top (pt) ให้สัมพันธ์กับความสูงของ Navbar เพื่อไม่ให้เนื้อหาถูกบัง
      */}
      <main
        id="main-content"
        className="relative z-10 flex-1 pt-16 transition-all duration-500 ease-in-out md:pt-20"
      >
        {children}
      </main>

      {/* 4. ส่วนท้ายและวิดเจ็ตการติดต่อ (Persistence Components) */}
      <Footer />
      <LineStickyButton />

      {/* 5. ระบบเข้าถึงด่วน (Accessibility Strategy)
        Skip Link สำหรับผู้พิการหรือผู้ใช้ Keyboard เพื่อข้ามเมนูไปยังเนื้อหาหลักได้ทันที
      */}
      <a
        href="#main-content"
        className="font-heading sr-only font-bold focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:px-6 focus:py-4 focus:text-slate-950 focus:shadow-2xl focus:outline-none"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>
    </div>
  )
}
