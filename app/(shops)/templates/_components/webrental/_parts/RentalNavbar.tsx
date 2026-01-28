/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * RentalNavbarProps - กำหนดข้อมูลที่จำเป็นสำหรับแถบเมนู
 */
interface RentalNavbarProps {
  data: {
    logo: string
    cta: string
    links: { label: string; href: string }[]
  }
}

/**
 * RentalNavbar - ส่วนแถบเมนูนำทางด้านบน
 * แนวคิด: เน้นความรวดเร็วในการเข้าถึงข้อมูล และดีไซน์ที่ดูโปร่งใสเนี้ยบกริบ
 * โดย: นายเอ็มซ่ามากส์ (Specialist & Web Architect)
 */
export const RentalNavbar = ({ data }: RentalNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ระบบตรวจจับการเลื่อนหน้าจอเพื่อปรับการแสดงผลแถบเมนู (Scroll Engine)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ปิดเมนูบนมือถือเมื่อมีการคลิกนำทาง
  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "h-20 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl"
          : "h-28 bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6 lg:px-12">
        {/* [ส่วนที่ 1]: โลโก้และอัตลักษณ์แบรนด์ */}
        <Link
          href="#home"
          className="group font-heading flex items-center gap-3 text-2xl font-black tracking-tighter text-white uppercase italic"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-600/20 transition-transform group-hover:rotate-6">
            <Zap size={20} fill="currentColor" />
          </div>
          <span className="transition-colors group-hover:text-emerald-400">
            {data.logo}
            <span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* [ส่วนที่ 2]: ชุดลิงก์นำทางสำหรับหน้าจอขนาดใหญ่ */}
        <div className="hidden items-center gap-12 lg:flex">
          <ul className="flex items-center gap-10">
            {data.links.map((link, i) => (
              <li key={`nav-item-${i}`}>
                <Link
                  href={link.href}
                  className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-all hover:tracking-[0.4em] hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ปุ่มปิดการขายหลัก (Call to Action) */}
          <button className="group font-heading inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-3.5 text-[10px] font-black tracking-widest text-slate-950 uppercase italic shadow-xl shadow-white/5 transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
            {data.cta}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* [ส่วนที่ 3]: ปุ่มเปิด-ปิดเมนูสำหรับมือถือ */}
        <button
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* [Mobile Menu]: ระบบนำทางแบบเต็มหน้าจอสำหรับมือถือ */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-950 transition-all duration-700 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        {/* ลายตารางพื้นหลังจางๆ เพื่อเพิ่มความเนี้ยบ */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

        <div className="relative z-10 flex flex-col items-center gap-12 text-center">
          <ul className="space-y-8">
            {data.links.map((link, i) => (
              <li key={`mob-nav-${i}`}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="font-heading text-4xl font-black tracking-tighter text-white uppercase italic transition-colors hover:text-emerald-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="font-heading mt-8 flex items-center gap-4 rounded-[2rem] bg-emerald-600 px-12 py-6 text-lg font-black tracking-widest text-white uppercase italic shadow-2xl shadow-emerald-600/20">
            {data.cta}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}
