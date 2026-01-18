/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
// siteConfig ถูกลบออกเนื่องจากไม่ได้ใช้งานตามกฎ ESLint
import { navigation } from "@/constants/navigation"
import Navbar from "@/components/shared/Navbar"
import { Button } from "@/components/ui/button"
import { AemBrandBadge } from "./AemBrandBadge"

/**
 * 🛰️ Header Component: Luminous Navigation Engine (v.2026)
 * ✅ แก้ไขปัญหา Cascading Render และ ESLint Unused Variables
 * ✅ ประสิทธิภาพ: ใช้ useCallback และ passive scroll listener เพื่อ PageSpeed 100
 */
export function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // 🖱️ 1. Optimized Scroll Detection
  const handleScroll = useCallback(() => {
    const offset = window.scrollY
    const shouldScroll = offset > 20
    setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev))
  }, [])

  useEffect(() => {
    // ✅ เรียกใช้ครั้งแรกเพื่อตรวจสอบสถานะตอน Mount โดยไม่ทำให้เกิด Render Loop
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // 🔒 2. Body Scroll Lock (ป้องกันการเลื่อนหน้าจอเมื่อเปิดเมนูมือถือ)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    }
  }, [isMobileMenuOpen])

  // 🚩 3. ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยน Path (แก้ไข Cascading Render Error)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    if (isMobileMenuOpen) {
      // ✅ ใช้ setTimeout เพื่อเลื่อนการ setState ออกไปไม่ให้บล็อกจังหวะการเรนเดอร์ของ Path ใหม่
      timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false)
      }, 0)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "pointer-events-none fixed top-0 right-0 left-0 z-[100] transition-all duration-700 ease-in-out",
          isScrolled ? "py-3" : "py-6 md:py-8",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "relative flex items-center justify-between rounded-3xl px-4 transition-all duration-700 ease-out md:rounded-[2.5rem] md:px-8",
              "pointer-events-auto",
              isScrolled
                ? "bg-background/80 shadow-luminous border border-white/10 py-3 backdrop-blur-2xl"
                : "border border-transparent bg-transparent py-0"
            )}
          >
            {/* 1. Logo Brand Identity */}
            <div className="relative z-[110]">
              <AemBrandBadge
                withText={true}
                className="origin-left scale-90 md:scale-100"
              />
            </div>

            {/* 2. Desktop Navigation (Center) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <Navbar />
            </div>

            {/* 3. Desktop CTA */}
            <div className="hidden items-center gap-6 lg:flex">
              <Button
                asChild
                className="btn-luminous shadow-aurora-glow group h-12 px-8 text-sm font-bold"
              >
                <Link href="/contact">
                  เริ่มโปรเจกต์{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </div>

            {/* 4. Mobile Toggle Switch */}
            <button
              className={cn(
                "relative z-[110] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-all duration-500 lg:hidden",
                isMobileMenuOpen
                  ? "bg-white text-slate-950"
                  : "shadow-luminous bg-white/5 text-white"
              )}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 📱 Mobile Menu Overlay (Midnight Tech Style) */}
      <div
        className={cn(
          "bg-background/98 fixed inset-0 z-[90] flex flex-col px-8 pt-40 pb-16 backdrop-blur-3xl transition-all duration-700 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-full opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="aurora-bg pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

        <nav className="no-scrollbar relative z-10 flex flex-1 flex-col space-y-2 overflow-y-auto">
          {navigation.main.map((item, index) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-prompt flex items-center justify-between border-b border-white/5 py-7 text-3xl font-black tracking-tighter uppercase transition-all duration-300",
                  isActive
                    ? "text-aurora-cyan"
                    : "text-slate-500 hover:text-white",
                  isMobileMenuOpen
                    ? "animate-in fade-in slide-in-from-left-4 fill-mode-forwards"
                    : "opacity-0"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-4">
                  {item.name}
                  {item.badge && (
                    <span className="bg-aurora-emerald rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-slate-950">
                      {item.badge}
                    </span>
                  )}
                </span>
                <ChevronRight
                  className={cn(
                    "h-6 w-6 opacity-20",
                    isActive && "text-aurora-cyan opacity-100"
                  )}
                />
              </Link>
            )
          })}

          <div
            className={cn(
              "pt-10 transition-all delay-300 duration-700",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
          >
            <Button
              asChild
              className="btn-luminous h-20 w-full text-xl font-black uppercase"
            >
              <Link href="/contact">เริ่มโปรเจกต์กับเรา</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
