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
 * MainLayout - รากฐานระบบหลักของ AEMDEVWEB 2026
 * รวบรวมระบบการออกแบบ ระบบงานค้นหา และโครงสร้างการใช้งานสำหรับผู้ใช้
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
      {/* ชั้นข้อมูลรากฐาน: ส่วนตกแต่งพื้นหลังระดับลึก (-z-20) */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* แสงส่องสว่างเชิงกลยุทธ์: เน้นจุดสนใจมาที่เนื้อหาหลักตรงกลางหน้าเว็บ */}
        <div className="absolute -top-[5%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/[0.03] blur-[100px]" />

        {/* ลายตารางระดับงานเทคนิค: สร้างความรู้สึกถึงความแม่นยำและประณีต */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.015]" />

        {/* พื้นผิวระดับพรีเมียม: ใช้ระบบจัดการสัญญาณรบกวนเพื่อป้องกันพื้นหลังดูเรียบจนเกินไป */}
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

      {/* ระบบนำทางหลัก */}
      <Navbar />

      {/* วงจรการแสดงผลเนื้อหา: จัดการระยะห่างสำหรับแถบหัวหน้าเว็บที่คงที่และการเปลี่ยนผ่านที่นุ่มนวล */}
      <main
        id="main-content"
        className="relative z-10 flex-1 pt-16 transition-opacity duration-500 ease-in-out md:pt-20"
      >
        {children}
      </main>

      {/* รากฐานข้อมูลส่วนท้ายหน้า */}
      <Footer />

      {/* ปุ่มติดต่อด่วน: เพิ่มโอกาสการเข้าถึงพิกัดการสื่อสารได้จากทุกหน้า */}
      <LineStickyButton />

      {/* ระบบช่วยเหลือผู้พิการ: ลิงก์ข้ามไปยังเนื้อหาหลักสำหรับตัวอ่านหน้าจอ */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-emerald-500 focus:p-4 focus:text-white"
      >
        Skip to content
      </a>
    </div>
  )
}
