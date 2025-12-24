/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // 1. Scroll Effect: ใช้ useCallback เพื่อประสิทธิภาพสูงสุด
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  /**
   * ✅ 2. FIX: react-hooks/exhaustive-deps & set-state-in-effect
   * ใช้ requestAnimationFrame เพื่อแยกการ update state ออกจาก render cycle
   * และใส่ dependencies ให้ครบตามกฎของ React โดยไม่มีปัญหา loop
   */
  useEffect(() => {
    let frameId: number

    if (isOpen) {
      frameId = requestAnimationFrame(() => {
        setIsOpen(false)
      })
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [pathname, isOpen])

  return (
    <>
      {/* ─── MOBILE OVERLAY ─── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-slate-900/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <header
        className={cn(
          "fixed top-0 z-[100] w-full transition-all duration-500",
          scrolled
            ? "border-b-2 border-slate-900 bg-white/95 py-3 shadow-[4px_4px_0px_0px_#0f172a] backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            {/* ─── LOGO ─── */}
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative flex h-11 w-11 items-center justify-center border-2 border-slate-900 bg-blue-600 transition-all duration-500 group-hover:rotate-90 group-hover:shadow-[4px_4px_0px_0px_#0f172a]">
                <Code2
                  size={22}
                  className="-rotate-90 text-white transition-transform duration-500 group-hover:rotate-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black uppercase leading-none tracking-tighter text-slate-900 md:text-2xl">
                  {siteConfig.name}
                </span>
                <div className="mt-1 flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                  <Sparkles size={10} />
                  <span>Creative Engineering</span>
                </div>
              </div>
            </Link>

            {/* ─── DESKTOP NAV ─── */}
            <nav className="hidden items-center border-2 border-slate-900 bg-white p-1 shadow-[4px_4px_0px_0px_#0f172a] lg:flex">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:text-blue-600"
                    )}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </nav>

            {/* ─── ACTION BUTTON ─── */}
            <div className="hidden items-center gap-4 md:flex">
              <Button
                asChild
                className="group h-12 rounded-none border-2 border-slate-900 bg-slate-900 px-8 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-blue-600 hover:shadow-[4px_4px_0px_0px_#0f172a] active:scale-95"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Start Project
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="flex h-12 w-12 items-center justify-center border-2 border-slate-900 bg-white text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ─── MOBILE MENU ─── */}
          {isOpen && (
            <div className="absolute left-6 right-6 top-full mt-4 border-2 border-slate-900 bg-white p-4 shadow-[10px_10px_0px_0px_#0f172a] duration-200 animate-in fade-in zoom-in-95 lg:hidden">
              <div className="flex flex-col space-y-2">
                {siteConfig.navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between border-2 border-slate-900 p-4 text-sm font-black uppercase tracking-widest transition-all",
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-slate-50 text-slate-900 hover:bg-blue-600/10"
                      )}
                    >
                      {link.title}
                      <ArrowRight size={18} />
                    </Link>
                  )
                })}
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="h-14 w-full rounded-none border-2 border-slate-900 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em]"
                >
                  <Link href="/contact">เริ่มคุยงานกันครับ</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
