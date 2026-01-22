/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap, ArrowRight } from "lucide-react"

// 📂 Logic & Config Architecture
import { mainNav } from "@/constants/navigation"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * 🏗️ Navbar Specialist Edition (v2026)
 * มาพร้อมระบบ Glassmorphism และ Active Link Detection ระดับพรีเมียม
 * ออกแบบมาเพื่อสร้าง Perceived Performance และความน่าเชื่อถือให้แบรนด์
 */
const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 🛡️ [FIXED]: ป้องกัน Hydration Error (ป้องกันความต่างของ HTML ระหว่าง Server และ Client)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔒 ระบบ Auto-close เมื่อมีการนำทาง (Navigation)
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // ถ้ายังไม่ Mount ให้เรนเดอร์ Navbar เปล่าเพื่อรักษา Layout นิ่งๆ ไว้ (กัน Layout Shift)
  if (!isMounted) return <div className="h-20 w-full bg-transparent" />

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] w-full antialiased transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 🏷️ Identity Hub: แบรนด์ AEMDEVWEB */}
        <Link
          href="/"
          className="group font-prompt flex items-center gap-3 text-2xl font-black tracking-tighter text-slate-950 italic select-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600">
            <Zap className="h-6 w-6 fill-emerald-400 text-emerald-400" />
          </div>
          <span className="flex items-center uppercase">
            {siteConfig.name}
            <span className="ml-1 text-emerald-500 italic">DEV</span>
            <span className="ml-3 hidden text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase opacity-60 md:block">
              v.2026
            </span>
          </span>
        </Link>

        {/* 🧭 Desktop Menu: High-Scanning Layout */}
        <div className="hidden items-center gap-10 lg:flex">
          {mainNav?.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-prompt relative text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:text-emerald-500",
                  isActive ? "text-emerald-500" : "text-slate-500",
                  item.disabled && "pointer-events-none opacity-50"
                )}
              >
                {item.name}

                {/* 🚀 Active Indicator (Glow Effect) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -bottom-2.5 left-0 h-0.5 w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Feature Badges */}
                {item.badge && (
                  <span className="absolute -top-3 -right-8 flex h-4 items-center rounded-full bg-emerald-500 px-2 text-[7px] font-black tracking-[0.1em] text-white uppercase shadow-lg">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}

          {/* 🚀 Conversion Hook: Start Project */}
          <Link
            href="/contact"
            className="group font-prompt flex items-center gap-4 rounded-2xl bg-slate-950 px-10 py-4.5 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
          >
            คุยโปรเจกต์
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 📱 Mobile Menu Trigger */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all active:scale-90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🌑 Mobile Navigation Overlay (Framer Motion Optimized) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="shadow-3xl absolute top-full left-0 w-full overflow-hidden border-b border-slate-100 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-8 p-10">
              {mainNav?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-prompt flex items-center justify-between text-3xl font-black tracking-tighter uppercase italic transition-all",
                    pathname === item.href
                      ? "text-emerald-500"
                      : "text-slate-950"
                  )}
                >
                  {item.name}
                  {item.badge && (
                    <span className="rounded-full bg-emerald-500 px-4 py-1 text-[10px] font-black text-white uppercase shadow-md">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <div className="h-[2px] w-full bg-slate-50" />
              <Link
                href="/contact"
                className="font-prompt flex w-full items-center justify-center gap-4 rounded-3xl bg-slate-950 py-6 text-sm font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:bg-emerald-500 active:scale-95"
              >
                เริ่มโปรเจกต์กับ {siteConfig.expert}
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
