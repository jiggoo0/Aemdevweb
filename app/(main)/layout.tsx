/** @format */

"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import LineStickyButton from "@/components/shared/LineStickyButton"

/**
 * MainLayout - โครงสร้างพื้นฐานระดับระบบ (System Infrastructure)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความลื่นไหลของประสบการณ์ผู้ใช้งาน (User Experience)
 * มาตรฐาน: การเข้าถึงข้อมูลระดับสากลและประสิทธิภาพการแสดงผลระดับสูงสุด
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      
      {/* [SYSTEM ACCESSIBILITY]: ระบบทางลัดเพื่อการเข้าถึงพิกัดข้อมูลหลักอย่างรวดเร็ว */}
      <a
        href="#main-content"
        className="focus:font-heading sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-[1000] focus:rounded-2xl focus:bg-slate-950 focus:px-8 focus:py-4 focus:text-[10px] focus:font-black focus:tracking-widest focus:text-emerald-500 focus:uppercase focus:italic focus:shadow-node focus:ring-2 focus:ring-emerald-500/50"
      >
        ข้ามไปยังพิกัดเนื้อหาหลัก
      </a>

      {/* [LAYER 1]: ส่วนนำทางหลัก (Navigation Protocol) */}
      <Navbar />

      {/* [LAYER 2]: ส่วนแสดงผลเนื้อหาพร้อมพิกัดการเปลี่ยนผ่านที่ลื่นไหล
          ใช้ AnimatePresence เพื่อจัดการจังหวะการแสดงผลของแต่ละหน้าอย่างประณีต
      */}
      <main id="main-content" className="flex-1 outline-none">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* [LAYER 3]: ศูนย์กลางการติดต่อสื่อสาร (Interaction Node) */}
      <div className="fixed right-8 bottom-8 z-[90] md:right-12 md:bottom-12 shadow-aurora rounded-full">
        <LineStickyButton />
      </div>

      {/* [LAYER 4]: ส่วนสรุปพิกัดข้อมูลและบริการท้ายหน้า (Footer) */}
      <Footer />

      {/* รายละเอียดพื้นหลัง: ลายเส้นพิกัดโครงสร้างระบบระดับ 7 เพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.015]"
        aria-hidden="true"
      />
    </div>
  )
}
