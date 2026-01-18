/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { navigation } from "@/constants/navigation"
import Navbar from "@/components/shared/Navbar"
import { Button } from "@/components/ui/button"
import { AemBrandBadge } from "./AemBrandBadge"

/**
 * 🛰️ Header Component: Luminous Navigation Engine (v.2026)
 * ✅ Optimized: Scroll Listener & Z-Index Layering
 * ✅ UX: Mobile Menu with Internal Close Button & Haptic Feedback
 */
export function Header({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // 🖱️ 1. Optimized Scroll Detection with useCallback
  const handleScroll = useCallback(() => {
    const offset = window.scrollY
    const shouldScroll = offset > 20
    setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev))
  }, [])

  // ✅ Fix 1: Asynchronous Scroll Listener Setup
  useEffect(() => {
    // ใช้ requestAnimationFrame เพื่อรอให้ Browser พร้อมวาดเฟรมก่อนเรียก Logic
    // ช่วยลด Load ของ Main Thread และแก้ Error Synchronous Update
    let animationFrameId: number

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    // เรียกครั้งแรกเพื่อ Check state (Initial Check)
    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [handleScroll])

  // 🔒 2. Body Scroll Lock
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    }
  }, [isMobileMenuOpen])

  // 🚩 3. Auto-close menu on route change
  // ✅ Fix 2: Asynchronous State Update
  useEffect(() => {
    // หน่วงเวลาปิดเมนูเล็กน้อยเมื่อเปลี่ยนหน้า เพื่อไม่ให้ชนกับ Lifecycle ของ Router
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  // 📱 4. Haptic Feedback for Mobile
  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(5)
    }
  }

  const toggleMenu = () => {
    triggerHaptic()
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* 🛰️ Header Navigation Bar */}
      <header
        className={cn(
          "pointer-events-none fixed top-0 right-0 left-0 z-[100] transition-all duration-500",
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
                : "bg-transparent py-0"
            )}
          >
            {/* Logo Section */}
            <div className="relative z-[150]">
              <AemBrandBadge
                withText={true}
                className="origin-left scale-90 md:scale-100"
              />
            </div>

            {/* Desktop Navbar */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <Navbar />
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-6 lg:flex">
              <Button
                asChild
                className="btn-luminous shadow-aurora-glow group h-12 px-8 text-sm font-bold"
              >
                <Link href="/contact">
                  เริ่มโปรเจกต์{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle (X / Menu) */}
            <button
              className={cn(
                "relative z-[150] flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 transition-all duration-500 lg:hidden",
                isMobileMenuOpen
                  ? "bg-white text-slate-950"
                  : "bg-white/5 text-white shadow-luminous"
              )}
              onClick={toggleMenu}
              aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
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

      {/* 📱 Mobile Menu Overlay */}
      <div
        className={cn(
          "bg-background/98 fixed inset-0 z-[140] flex flex-col px-8 pt-40 pb-16 backdrop-blur-3xl transition-all duration-700 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-full opacity-0"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Decorative Background */}
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

          {/* ❌ ปุ่มปิดเมนู (Close Button) ท้ายรายการ เพื่อ User-Friendly Experience */}
          <div
            className={cn(
              "pt-6 transition-all duration-700 delay-300",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
          >
            <button
              onClick={toggleMenu}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-6 text-sm font-bold tracking-widest text-slate-400 uppercase transition-all hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              ปิดเมนูหน้าต่างนี้
            </button>
          </div>

          <div
            className={cn(
              "pt-6 transition-all duration-700 delay-500",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
          >
            <Button
              asChild
              className="btn-luminous h-20 w-full text-xl font-black uppercase"
            >
              <Link href="/contact" onClick={triggerHaptic}>
                <Sparkles className="mr-2 h-5 w-5" />
                เริ่มโปรเจกต์กับเรา
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
