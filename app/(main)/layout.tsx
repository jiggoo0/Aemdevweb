/** @format */
"use client"

import React, { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // ✅ Reset scroll position เมื่อเปลี่ยนหน้า
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-white selection:bg-[#1E3A8A] selection:text-white">
      {/* ─── 1. Navigation (Fixed Header) ─── */}
      <Header />

      {/* ─── 2. Main Content Area ─── */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1], // Smooth ease-out
          }}
          className="flex-grow focus:outline-none"
          id="main-content"
          role="main"
        >
          {/* Padding-top จัดการให้พอดีกับ Header (ปกติ ~80px) 
              min-h ใช้การลบความสูง Header และ Footer โดยประมาณ 
          */}
          <div className="relative min-h-[calc(100vh-80px)]">{children}</div>
        </motion.main>
      </AnimatePresence>

      {/* ─── 3. Pre-Footer Call to Action (Global Layer) ─── */}
      {/* ปิดแสดงในหน้าติดต่อสอบถาม เพื่อลดความซ้ำซ้อน */}
      {!pathname.includes("/contact") && (
        <aside className="border-t-[6px] border-slate-900 bg-slate-50 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h3 className="font-heading text-3xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
              เริ่มสร้างเว็บไซต์ <br className="md:hidden" />
              <span className="text-[#1E3A8A]">ที่ยกระดับธุรกิจของคุณ</span>
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-lg font-bold text-slate-500">
              ปรึกษาแนวทางการทำเว็บไซต์และประเมินงบประมาณฟรี ไม่มีค่าใช้จ่าย
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <button className="h-16 bg-slate-900 px-12 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                  เริ่มปรึกษาโปรเจกต์
                </button>
              </Link>
            </div>
          </div>
        </aside>
      )}

      {/* ─── 4. Footer ─── */}
      <Footer />

      {/* ─── 5. Safari/Mobile UX Optimization ─── */}
      <div className="h-[env(safe-area-inset-bottom)] w-full bg-slate-900" />
    </div>
  )
}
