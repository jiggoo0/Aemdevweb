/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"
import { navigation } from "@/constants/navigation"

import Navbar from "@/components/shared/Navbar"
import { Button } from "@/components/ui/button"
import { AemBrandBadge } from "./AemBrandBadge"

interface HeaderProps {
  className?: string
}

/**
 * 🧭 Header: Luminous Navigation Engine
 * ระบบ Header ที่รองรับทั้ง Desktop และ Mobile พร้อมการจัดการ Scroll Interaction
 */
export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // 🖱️ 1. ระบบตรวจจับการ Scroll เพื่อเปลี่ยนดีไซน์ Header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔒 2. ล็อกการ Scroll ของ Body เมื่อเปิดเมนูมือถือ
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    }
    return () => {
      if (typeof document !== "undefined")
        document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // 🚩 3. ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนหน้า (Pathname Change)
  useEffect(() => {
    if (isMobileMenuOpen) {
      const timeoutId = setTimeout(() => {
        setIsMobileMenuOpen(false)
      }, 0)
      return () => clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]) // ✅ ปิด Warning เพื่อให้ทำงานเฉพาะตอนเปลี่ยนหน้าเท่านั้น

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[60] transition-all duration-700",
          isScrolled ? "py-3" : "py-6 md:py-8",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "relative flex items-center justify-between rounded-3xl px-4 transition-all duration-700 md:rounded-[2rem] md:px-8",
              isScrolled
                ? "bg-background/60 shadow-luminous border border-white/10 py-3 backdrop-blur-2xl"
                : "bg-transparent py-0"
            )}
          >
            {/* 1. Logo Brand */}
            <AemBrandBadge
              withText={true}
              className="origin-left scale-90 md:scale-100"
            />

            {/* 2. Desktop Navigation (Center) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
              <Navbar />
            </div>

            {/* 3. CTA Action Buttons */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link
                href={siteConfig.links.line}
                target="_blank"
                className="hover:text-aurora-cyan text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors"
              >
                Line Official
              </Link>

              <Button
                asChild
                className="btn-luminous shadow-aurora-glow h-12 px-8 text-sm"
              >
                <Link href="/contact">
                  เริ่มโปรเจกต์{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* 4. Mobile Toggle Hamburger */}
            <button
              className="shadow-luminous relative z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
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

      {/* 📱 Mobile Menu Overlay Layer */}
      <div
        className={cn(
          "bg-background/95 fixed inset-0 z-50 flex flex-col px-8 pt-36 pb-16 backdrop-blur-3xl transition-all duration-700 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-full opacity-0"
        )}
      >
        <div className="aurora-bg top-1/2 left-1/2 h-[500px] w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.1]" />

        <div className="no-scrollbar relative z-10 flex flex-1 flex-col space-y-4 overflow-y-auto">
          {navigation.main.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-prompt flex items-center justify-between border-b border-white/5 py-8 text-4xl font-black tracking-tighter uppercase transition-all",
                  isActive
                    ? "text-aurora-cyan"
                    : "text-slate-500 hover:text-white"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {item.badge && (
                  <span className="bg-aurora-emerald rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-slate-950">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
