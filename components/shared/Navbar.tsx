/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

import { mainNav } from "@/constants/navigation"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * Navbar - ระบบนำทางหลักพิกัดความเร็วสูง
 * ออกแบบโครงสร้างมาเพื่อการนำทางที่ลื่นไหลและรองรับการทำ SEO Entity Linking
 */
const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // 1. จัดการพิกัดการตรวจจับการเลื่อนหน้าจอ (Scroll Detection)
  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2. ปิดเมนูมือถืออัตโนมัติเมื่อมีการเปลี่ยนเส้นทาง (Route Change)
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // ป้องกันอาการ Hydration Mismatch (ทักตรงๆ: จุดนี้สำคัญมากสำหรับ Next.js Client Component)
  if (!isMounted)
    return <div className="h-20 w-full bg-transparent" aria-hidden="true" />

  return (
    <nav
      role="navigation"
      aria-label="เมนูนำทางหลัก"
      className={cn(
        "fixed top-0 z-[100] w-full antialiased transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/80 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 3. ส่วนอัตลักษณ์แบรนด์ (Brand Identity) */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-2xl font-black tracking-tighter text-slate-950 italic select-none"
        >
          <div className="relative flex h-11 w-11 items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Image
              src="/images/logo-circuit.png"
              alt={`พิกัดข้อมูลโดย ${siteConfig.expert.name}`}
              width={44}
              height={44}
              priority
              className="object-contain"
            />
          </div>
          <span className="font-heading flex items-center uppercase">
            {siteConfig.project.shortName}
            <span className="ml-1 text-emerald-500 italic">DEV</span>
            <span className="ml-3 hidden text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase opacity-60 md:block">
              2026
            </span>
          </span>
        </Link>

        {/* 4. รายการเมนูสำหรับคอมพิวเตอร์ (Desktop Menu) */}
        <div className="hidden items-center gap-10 lg:flex">
          {mainNav?.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-heading relative text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:text-emerald-500",
                  isActive ? "text-emerald-500" : "text-slate-500",
                  item.disabled && "pointer-events-none opacity-50"
                )}
              >
                {item.name}
                {/* พิกัดเส้นใต้เรืองแสงแสดงสถานะปัจจุบัน (Active Indicator) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -bottom-2.5 left-0 h-0.5 w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* พิกัดป้ายแจ้งเตือน (Badge) */}
                {item.badge && (
                  <span className="absolute -top-3 -right-8 flex h-4 items-center rounded-full bg-emerald-500 px-2 text-[7px] font-black tracking-[0.1em] text-white uppercase shadow-lg">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}

          {/* ปุ่ม CTA หลักดึงข้อมูลจาก siteConfig */}
          <Link
            href="/contact"
            className="group font-heading flex items-center gap-4 rounded-2xl bg-slate-950 px-10 py-4.5 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
          >
            {siteConfig.cta.main}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 5. ปุ่มเปิดเมนูสำหรับอุปกรณ์เคลื่อนที่ (Mobile Toggle) */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all active:scale-90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 6. แผงเมนูสำหรับมือถือ (Mobile Navigation Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full overflow-hidden border-b border-slate-100 bg-white/95 shadow-xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-8 p-10">
              {mainNav?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-heading flex items-center justify-between text-3xl font-black tracking-tighter uppercase italic transition-all",
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
                className="font-heading flex w-full items-center justify-center gap-4 rounded-3xl bg-slate-950 py-6 text-sm font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:bg-emerald-500 active:scale-95"
              >
                {siteConfig.cta.main}
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
