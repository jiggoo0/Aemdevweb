/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap, ArrowRight } from "lucide-react"

import { mainNav } from "@/constants/navigation"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * Header Specialist Edition (v2026)
 * Engineered with Visual Hierarchy for Industrial Minimalism.
 * Implements Hydration safety and high-performance micro-interactions.
 */
export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Hydration Safety: Ensures client-side readiness before animation rendering
  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation Guard: Automatically closes mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent Layout Shift during hydration phase
  if (!isMounted) return <div className="h-20 w-full bg-transparent" />

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full antialiased transition-all duration-500",
        isScrolled
          ? "border-b border-slate-200/50 bg-white/90 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Brand Identity: AEMDEVWEB Industrial Logo Logic */}
        <Link
          href="/"
          className="group font-prompt flex items-center gap-3 text-2xl font-black tracking-tighter text-[#0F172A] italic select-none"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600">
            <Zap className="h-6 w-6 fill-emerald-400 text-emerald-400" />
          </div>
          <span className="flex items-center uppercase">
            {siteConfig.name}
            <span className="ml-1 text-emerald-500 italic">DEV</span>
            <span className="ml-3 hidden text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase opacity-60 md:block">
              Industrial Specialist v.16
            </span>
          </span>
        </Link>

        {/* Desktop Navigation: High-Scanning Layout */}
        <nav className="hidden items-center gap-10 lg:flex">
          {mainNav?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-prompt relative text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:text-emerald-500",
                pathname === item.href ? "text-emerald-500" : "text-slate-500",
                item.disabled && "pointer-events-none opacity-40"
              )}
            >
              {item.name}

              {/* Active State Indicator: Spring Animation with Glow Effect */}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2.5 left-0 h-0.5 w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Contextual Badges */}
              {item.badge && (
                <span className="absolute -top-3 -right-8 flex h-4 items-center rounded-full bg-emerald-500 px-2 text-[7px] font-black tracking-tighter text-white uppercase shadow-lg">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}

          {/* Primary Action: High-Conversion Lead Capture */}
          <Link
            href="/contact"
            className="group font-prompt flex items-center gap-4 rounded-2xl bg-[#0F172A] px-10 py-4.5 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all duration-500 hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/30 active:scale-95"
          >
            Start Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </nav>

        {/* Mobile Interaction Trigger */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm transition-all active:scale-90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Interface: Glassmorphism Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="shadow-3xl absolute top-full left-0 w-full overflow-hidden border-b border-slate-100 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-8 p-12">
              {mainNav?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-prompt text-3xl font-black tracking-tighter uppercase italic transition-all",
                    pathname === item.href
                      ? "translate-x-2 text-emerald-500"
                      : "text-slate-950",
                    item.disabled && "pointer-events-none opacity-40"
                  )}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.badge && (
                      <span className="rounded-full bg-emerald-500 px-4 py-1 text-[10px] font-black tracking-tighter text-white uppercase shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
              <div className="h-[2px] w-full bg-slate-50" />
              <Link
                href="/contact"
                className="font-prompt flex w-full items-center justify-center gap-4 rounded-3xl bg-slate-950 py-6 text-sm font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:bg-emerald-500 active:scale-95"
              >
                ปรึกษาโปรเจกต์กับผม
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
