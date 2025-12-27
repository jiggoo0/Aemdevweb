/** @format */
"use client"

import React, { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()

  // Reset scroll position เมื่อเปลี่ยนหน้า (สำคัญสำหรับ Single Page Application)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-white selection:bg-brand-blue selection:text-white">
      {/* ─── 1. Navigation (Fixed with High Z-Index) ─── */}
      <Header />

      {/* ─── 2. Main Content Area ─── */}
      {/* pt-[80px] เพื่อป้องกันคอนเทนต์จมใต้ Header ที่เป็น Fixed */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1], // Custom Cubic Bezier เพื่อความหรูหรา
          }}
          className="flex-grow focus:outline-none"
          id="main-content"
          role="main"
        >
          {/* จัดการขอบเขตเนื้อหาให้ยืดหยุ่นทุกหน้าจอ */}
          <div className="relative min-h-[calc(100vh-80px)] pt-20 md:pt-24">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>

      {/* ─── 3. Global CTA Layer (Conditional Rendering) ─── */}
      {/* แสดงเฉพาะหน้าที่ไม่ใช่ Contact และเน้นให้เป็นระนาบเดียวกับดีไซน์ใหม่ */}
      {pathname !== "/contact" && (
        <aside className="border-t-4 border-slate-900 bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 md:text-4xl">
              พร้อมให้เราวางโครงสร้าง <br className="md:hidden" />
              <span className="text-brand-blue">ความสำเร็จให้คุณหรือยัง?</span>
            </h3>
            <div className="mt-8">
              <button className="bg-slate-900 px-10 py-4 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                เริ่มปรึกษาโปรเจกต์
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ─── 4. Footer ─── */}
      <Footer />

      {/* ─── 5. Mobile Mobile Bottom Gap (สำหรับ iOS Safari Toolbar) ─── */}
      <div className="h-[env(safe-area-inset-bottom)] w-full bg-slate-900" />
    </div>
  )
}
