/** @format */
import React from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
}

/**
 * 💡 Main Layout: Luminous Midnight Architecture (v.2026 Optimized)
 * ✅ Corrected Layering Strategy: 
 * 1. Header (z-50) - บนสุดเพื่อให้เมนูใช้งานได้เสมอ
 * 2. Content Engine (z-10) - ส่วนเนื้อหาหลัก
 * 3. Decorative Layer (-z-20) - พื้นหลังและแสง Aurora ป้องกันการบังเนื้อหา
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "bg-background relative flex min-h-svh flex-col font-sans antialiased",
        "selection:bg-aurora-cyan/30 selection:text-aurora-cyan"
      )}
    >
      {/* 🌌 1. Decorative Deep Layer: พื้นหลังและเอฟเฟกต์แสง (-z-20) */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none">
        {/* Main Aurora Glow: แสงหลักจูนมาเพื่อความสบายตาขณะอ่าน */}
        <div className="aurora-bg -top-[15%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 opacity-[0.12] blur-[100px]" />

        {/* Secondary Violet Glow: เพิ่มมิติ Midnight Violet ที่มุมล่าง */}
        <div className="bg-aurora-violet/5 absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full blur-[130px]" />

        {/* Subtle Grid Texture: ความโปร่งแสง 2% เพื่อความพรีเมียม */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02] mix-blend-soft-light" />
      </div>

      {/* 🟢 2. Header Layer: ชั้นบนสุด (z-50) */}
      <header className="fixed top-0 right-0 left-0 z-50">
        <Header />
      </header>

      {/* 📦 3. Content Engine: ชั้นเนื้อหาหลัก (z-10) */}
      <main id="main-content" className="relative z-10 flex-1 pt-24 lg:pt-32">
        {/* Container wrapper: รักษาแนวเนื้อหาให้ตรงกันทั่วทั้งเว็บ */}
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      </main>

      {/* ⚫ 4. Footer Layer: ชั้นท้ายหน้า (z-10) */}
      <footer className="bg-background/50 relative z-10 border-t border-white/5 backdrop-blur-md">
        <Footer />
      </footer>

      {/* 🪄 5. Bottom Ambient Glow: แสงจางๆ เพื่อปิดรอยต่อฟุตเตอร์ */}
      <div className="from-aurora-cyan/5 pointer-events-none fixed right-0 bottom-0 left-0 -z-10 h-64 bg-gradient-to-t to-transparent opacity-50" />
    </div>
  )
}
