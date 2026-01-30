/** @format */

"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import LineStickyButton from "@/components/shared/LineStickyButton"

/**
 * MainLayout: โครงสร้างพื้นฐานระดับระบบ (Specialist Infrastructure)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: Seamless UX & Visual Hierarchy 2026
 * มาตรฐาน: Tailwind 4 OKLCH | Ultra-Deep Level 7
 * ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="selection:bg-brand-primary/10 selection:text-brand-depth relative flex min-h-screen flex-col bg-[oklch(1_0_0)] antialiased dark:bg-[oklch(0.12_0.02_260)] dark:selection:text-white">
      
      {/* [SYSTEM ACCESSIBILITY]: พิกัดทางลัดข้ามเนื้อหา (Skip to Content) 
          ออกแบบมาเพื่อรองรับการใช้งานผ่าน Keyboard ตามมาตรฐานสากล
      */}
      <a
        href="#main-content"
        className="focus:bg-brand-depth focus:text-brand-primary focus:shadow-node focus:ring-brand-primary/50 dark:focus:bg-brand-surface dark:focus:text-brand-depth sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[1000] focus:rounded-2xl focus:px-8 focus:py-4 focus:text-[10px] focus:font-black focus:tracking-widest focus:uppercase focus:italic focus:ring-2"
      >
        ข้ามไปยังพิกัดเนื้อหาหลัก
      </a>

      {/* [LAYER 1]: ระบบนำทางยุทธศาสตร์ (Strategic Navbar) */}
      <Navbar />

      {/* [LAYER 2]: พิกัดแสดงผลเนื้อหาพร้อมระบบ Page Transition
          จูนสมรรถนะ: ใช้ pathname เป็น key เพื่อให้ AnimatePresence ทำการ Re-render 
          และแสดงแอนิเมชันทุกครั้งที่มีการเปลี่ยนโหนด URL
      */}
      

      <main id="main-content" className="flex-1 outline-none">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* [LAYER 3]: ศูนย์กลางการสื่อสารแบบลอยตัว (Floating Interaction Node) */}
      <div className="fixed right-8 bottom-8 z-[90] transition-transform hover:scale-110 active:scale-90 md:right-12 md:bottom-12">
        <div className="shadow-aurora rounded-full">
          <LineStickyButton />
        </div>
      </div>

      {/* [LAYER 4]: รากฐานข้อมูลท้ายระบบ (Footer Node) */}
      <Footer />

      {/* Infrastructure Details: ลายเส้นพิกัดโครงสร้างระบบระดับ 7 */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02] dark:invert"
        aria-hidden="true"
      />
    </div>
  )
}
