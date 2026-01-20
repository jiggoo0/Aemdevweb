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
 * 🏗️ Header Specialist Edition (v2026)
 * [FIXED]: ปรับปรุงระบบ Render และโครงสร้าง Export ให้เสถียร 100% สำหรับ Next.js 15/16
 * ออกแบบด้วยหลัก Visual Hierarchy เพื่อความพรีเมียมในสไตล์ Industrial Minimalism
 */
export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 🧬 ตรวจจับการ Scroll เพื่อปรับ Glassmorphism Effect (Sticky Navbar)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔒 ระบบปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยน Path
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full antialiased transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* 🏷️ Identity Hub: แบรนด์นายเอ็มซ่ามากส์ (Smart Branding) */}
        <Link
          href="/"
          className="group font-prompt flex items-center gap-2 text-2xl font-black tracking-tighter text-[#0F172A] italic select-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600">
            <Zap className="h-5 w-5 fill-emerald-400 text-emerald-400" />
          </div>
          <span className="flex items-center uppercase">
            {siteConfig.shortName || "AEM"}
            <span className="text-emerald-500">DEV</span>
            <span className="ml-1 hidden text-[8px] font-black tracking-[0.4em] text-slate-400 uppercase opacity-60 md:block">
              Specialist v.16
            </span>
          </span>
        </Link>

        {/* 🧭 Desktop Nav Architecture: High-Scanning Layout */}
        <nav className="hidden items-center gap-10 lg:flex">
          {mainNav?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-prompt relative text-[11px] font-black tracking-[0.25em] uppercase transition-all hover:text-emerald-500",
                pathname === item.href ? "text-emerald-500" : "text-slate-500",
                item.disabled && "pointer-events-none opacity-40"
              )}
            >
              {item.name}
              {/* Active Indicator (Shared Layout Animation) */}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-0.5 w-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                />
              )}
              {/* Feature Badges */}
              {item.badge && (
                <span className="absolute -top-2 -right-7 flex h-4 items-center rounded-full bg-emerald-500/10 px-1.5 text-[7px] font-black tracking-tighter text-emerald-500 uppercase ring-1 ring-emerald-500/20">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* 🚀 Primary Action: ปุ่มปิดการขายระดับพรีเมียม */}
          <Link
            href="/contact"
            className="group font-prompt flex items-center gap-3 rounded-2xl bg-[#0F172A] px-8 py-4 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
          >
            Start Project
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* 📱 Mobile Interaction Trigger */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all active:scale-90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🌑 Mobile Navigation Overlay (Recursive Logic) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full overflow-hidden border-b border-slate-100 bg-white shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-6 p-10">
              {mainNav?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-prompt text-2xl font-black tracking-widest uppercase transition-all",
                    pathname === item.href
                      ? "translate-x-2 text-emerald-500"
                      : "text-slate-900",
                    item.disabled && "pointer-events-none opacity-40"
                  )}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.badge && (
                      <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black tracking-tighter text-white uppercase shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
              <div className="my-4 h-px w-full bg-slate-100" />
              <Link
                href="/contact"
                className="font-prompt flex w-full items-center justify-center gap-4 rounded-3xl bg-emerald-500 py-6 text-sm font-black tracking-[0.2em] text-slate-950 uppercase shadow-xl shadow-emerald-500/30 transition-transform active:scale-95"
              >
                Let's Talk Business
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
