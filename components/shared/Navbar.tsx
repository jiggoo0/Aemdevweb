/** @format */
"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * Navbar - ส่วนควบคุมเมนูหลักและจุดเชื่อมต่อบริการ
 * แนวคิด: เน้นความรวดเร็วในการเข้าถึงข้อมูล (High-Performance UI)
 * มาตรฐาน: รองรับเอฟเฟกต์กระจกโปร่งแสงและแสดงผลลื่นไหลที่สุดในปี 2026
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  /**
   * [NAVIGATION]: รายการเมนูที่จัดกลุ่มมาให้ลูกค้าเข้าใจง่ายที่สุด
   */
  const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "บริการ", href: "/services" },
    { name: "เทมเพลต", href: "/templates" },
    { name: "ผลงาน", href: "/case-studies" },
    { name: "บทความ", href: "/blog" },
    { name: "เกี่ยวกับเรา", href: "/about" },
  ]

  // จัดการสถานะ Mounted เพื่อป้องกัน Hydration Error และตรวจจับการเลื่อนหน้าจอ
  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ปิดเมนูมือถืออัตโนมัติเมื่อเปลี่ยนหน้าเว็บ
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "border-b border-slate-100 bg-white/80 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* [IDENTITY]: โลโก้และชื่อแบรนด์ AEMDEVWEB */}
          <Link
            href="/"
            className="group font-heading flex items-center gap-3 text-xl font-black tracking-tighter text-slate-950 uppercase italic"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-emerald-500 transition-all duration-500 group-hover:rotate-12 group-hover:bg-emerald-600 group-hover:text-white">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="transition-colors group-hover:text-emerald-600">
              {siteConfig.project.name}
              <span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* [DESKTOP MENU]: รายการเมนูสำหรับคอมพิวเตอร์ */}
          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (pathname.startsWith(item.href) && item.href !== "/")
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative text-[10px] font-black tracking-[0.3em] uppercase italic transition-all hover:text-emerald-600",
                        isActive ? "text-emerald-600" : "text-slate-400"
                      )}
                    >
                      {item.name}
                      {/* เส้นใต้สถานะ Active: แสดงผลเฉพาะเมื่อ Mounted แล้วเพื่อกัน Mismatch */}
                      {mounted && isActive && (
                        <span
                          className="absolute -bottom-2 left-0 h-[2px] w-full bg-emerald-500"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="h-6 w-px bg-slate-100" />

            {/* ปุ่ม CTA: เริ่มโปรเจกต์ */}
            <Button
              asChild
              variant="default"
              className="h-12 px-8 text-[10px] shadow-2xl shadow-slate-950/5"
            >
              <Link href="/contact" className="flex items-center gap-2">
                เริ่มโปรเจกต์
                <ArrowUpRight size={14} strokeWidth={3} />
              </Link>
            </Button>
          </div>

          {/* [MOBILE TOGGLE]: ปุ่มเปิด/ปิดเมนูมือถือ */}
          <button
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* [OVERLAY MENU]: เมนูมือถือแบบเต็มหน้าจอ */}
      <div
        className={cn(
          "fixed inset-0 z-[105] flex flex-col bg-white p-10 pt-32 transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <ul className="space-y-10">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "font-heading text-5xl font-black tracking-tighter uppercase italic transition-colors hover:text-emerald-600",
                  pathname === item.href ? "text-emerald-600" : "text-slate-950"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-8 pb-10">
          <div className="h-px w-full bg-slate-100" />
          <div className="space-y-6">
            <p className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
              Designed by AEMDEVWEB
            </p>
            <Button
              asChild
              size="lg"
              className="w-full shadow-2xl shadow-emerald-600/20"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2"
              >
                เริ่มโปรเจกต์
                <ArrowUpRight size={18} strokeWidth={3} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
