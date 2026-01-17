/** @format */

import React from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { cn } from "@/lib/utils"

/**
 * 💡 Main Layout Props Interface
 * ✅ Fixed TS2552: แก้ไขปัญหาหาชื่อ 'MainLayoutProps' ไม่เจอ
 */
interface MainLayoutProps {
  children: React.ReactNode
}

/**
 * 💡 Main Layout: Luminous Midnight Architecture
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "bg-background relative flex min-h-screen flex-col font-sans antialiased transition-colors duration-500",
        "selection:bg-aurora-cyan/30 selection:text-aurora-cyan"
      )}
    >
      {/* 🌌 Background layers: ใส่ pointer-events-none เพื่อให้คลิกทะลุไปหาปุ่มได้ */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-bg -top-[20%] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 opacity-[0.15]" />
        <div className="bg-aurora-violet/10 animate-aurora absolute -right-[5%] -bottom-[10%] h-[800px] w-[800px] rounded-full blur-[150px]" />
      </div>

      {/* 🟢 Header Layer: ยกขึ้น z-[100] เพื่อให้กด Navbar ได้เสมอ */}
      <header className="fixed top-0 right-0 left-0 z-[100]">
        <Header />
      </header>

      {/* 📦 Content Area: เลื่อนลงมาเล็กน้อยเพื่อไม่ให้โดน Header บัง */}
      <main className="relative z-10 flex-1 pt-24 lg:pt-28">{children}</main>

      {/* ⚫ Footer Layer */}
      <Footer />

      {/* 🛠️ Luminous Grid Texture: ต้องเป็น pointer-events-none เสมอ */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[url('/grid.svg')] bg-repeat opacity-[0.02] mix-blend-overlay" />

      {/* Subtle Bottom Glow: ปิดรอยต่อระหว่าง Content และ Footer */}
      <div className="from-aurora-cyan/5 pointer-events-none fixed right-0 bottom-0 left-0 z-0 h-40 bg-gradient-to-t to-transparent" />
    </div>
  )
}
