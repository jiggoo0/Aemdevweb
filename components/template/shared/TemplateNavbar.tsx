/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap, ArrowLeft, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 🧭 TemplateNavbar Specialist Edition
 * ออกแบบมาเพื่อหน้า Marketplace โดยเฉพาะ เน้นความลื่นไหลและผลลัพธ์เชิงธุรกิจ
 */
export const TemplateNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // ใช้ความเร็วในการประมวลผลของ Browser ตรวจสอบตำแหน่ง Scroll
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "border-b border-white/5 bg-slate-950/80 py-4 shadow-2xl backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 🚀 Brand Identity & Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group font-prompt flex items-center gap-2 text-2xl font-black tracking-tighter text-white italic"
          >
            <Zap className="h-6 w-6 fill-emerald-500 text-emerald-500 transition-transform group-hover:scale-125 group-hover:rotate-12" />
            <span>
              AEM<span className="text-emerald-500">DEV</span>
            </span>
          </Link>

          <div className="hidden h-6 w-px bg-white/10 md:block" />

          <Link
            href="/templates"
            className={cn(
              "hidden items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase transition-colors md:flex",
              pathname.startsWith("/templates")
                ? "text-emerald-500"
                : "text-slate-400 hover:text-white"
            )}
          >
            <LayoutGrid className="h-3 w-3" />
            Specialist Marketplace
          </Link>
        </div>

        {/* 🎯 High-Performance CTA Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-all hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-3 w-3" />
            Home
          </Link>

          <Link
            href="https://lin.ee/SVMBEJ8"
            className="hidden rounded-full bg-emerald-500 px-6 py-2.5 text-[10px] font-black tracking-widest text-slate-950 uppercase transition-all hover:scale-105 hover:bg-white active:scale-95 md:block"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
