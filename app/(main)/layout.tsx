/** @format */
import React from "react"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "bg-slate-950 relative flex min-h-svh flex-col font-sans antialiased text-slate-50",
        "selection:bg-aurora-cyan/30 selection:text-aurora-cyan"
      )}
    >
      {/* 🌌 Background Decor */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none">
        <div className="aurora-bg -top-[15%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 opacity-[0.12] blur-[100px]" />
        <div className="bg-aurora-violet/5 absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02] mix-blend-soft-light" />
      </div>

      {/* 🟢 Header: เรียกใช้โดยตรง (z-index ถูกคุมใน Header.tsx แล้ว) */}
      <Header />

      {/* 📦 Content */}
      <main id="main-content" className="relative z-10 flex-1">
        {children}
      </main>

      {/* ⚫ Footer */}
      <footer className="bg-slate-950/50 relative z-10 border-t border-white/5 backdrop-blur-md">
        <Footer />
      </footer>
    </div>
  )
}
