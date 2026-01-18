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
 * ✅ Corrected Layering: Header(z-50) > Content(z-10) > Background(-z-20)
 */
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className={cn(
        "bg-background relative flex min-h-svh flex-col font-sans antialiased",
        "selection:bg-aurora-cyan/30 selection:text-aurora-cyan"
      )}
    >
      {/* 🌌 1. Decorative Deep Layer: Background & Effects (-z-20) */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden select-none">
        {/* Main Aurora Glow */}
        <div className="aurora-bg -top-[15%] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 opacity-[0.12] blur-[100px]" />

        {/* Secondary Violet Glow */}
        <div className="bg-aurora-violet/5 absolute -right-[10%] -bottom-[10%] h-[600px] w-[600px] rounded-full blur-[130px]" />

        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02] mix-blend-soft-light" />
      </div>

      {/* 🟢 2. Header Layer: Fixed & Top-most (z-50) */}
      <header className="fixed top-0 right-0 left-0 z-50">
        <Header />
      </header>

      {/* 📦 3. Content Engine: Main Viewport (z-10) */}
      <main id="main-content" className="relative z-10 flex-1 pt-24 lg:pt-32">
        {/* Container wrapper for consistent alignment */}
        <div className="container mx-auto px-4 md:px-6">{children}</div>
      </main>

      {/* ⚫ 4. Footer Layer: Bottom (z-10) */}
      <footer className="bg-background/50 relative z-10 border-t border-white/5 backdrop-blur-md">
        <Footer />
      </footer>

      {/* 🪄 5. Bottom Ambient Glow: Seamless footer transition */}
      <div className="from-aurora-cyan/5 pointer-events-none fixed right-0 bottom-0 left-0 -z-10 h-64 bg-gradient-to-t to-transparent opacity-50" />
    </div>
  )
}
