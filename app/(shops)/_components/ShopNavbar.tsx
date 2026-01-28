/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Zap, ShoppingBag, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ShopNavbar - ส่วนนำทางหลักของโซน Shops.
 * แนวคิด: เข้าถึงง่าย (Fast Access) และโชว์ความโปร่งใสของระบบงาน
 * โดย: นายเอ็มซ่ามากส์ (AEM Engine 2026)
 */
export const ShopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ระบบตรวจจับการเลื่อนหน้าจอเพื่อจูนความใสของแถบเมนู
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "h-20 border-b border-slate-100 bg-white/90 backdrop-blur-xl"
          : "h-24 bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        {/* [ส่วนที่ 1]: อัตลักษณ์ Shops. */}
        <Link
          href="/templates"
          className="group font-heading flex items-center gap-3 text-2xl font-black tracking-tighter text-slate-950 uppercase italic"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-transform group-hover:rotate-6">
            <Zap size={20} fill="currentColor" />
          </div>
          <span>
            Shops<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* [ส่วนที่ 2]: รายการเมนูสำหรับหน้าจอใหญ่ */}
        <div className="hidden items-center gap-12 md:flex">
          <ul className="flex items-center gap-10">
            {["Themes", "Services", "Custom Case"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <button className="group font-heading flex items-center gap-3 rounded-2xl bg-slate-950 px-8 py-3.5 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic shadow-2xl shadow-slate-950/20 transition-all active:scale-95">
            <ShoppingBag size={14} />
            คุยแผนงานธุรกิจ
          </button>
        </div>

        {/* [ส่วนที่ 3]: ปุ่มเปิดเมนูบนมือถือ */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-950 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* [Mobile Overlay]: เมนูด่วนสำหรับมือถือ */}
      <div
        className={cn(
          "fixed inset-0 z-[-1] flex flex-col items-center justify-center bg-white transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        )}
      >
        <ul className="space-y-8 text-center">
          {["Themes", "Services", "Custom Case"].map((item) => (
            <li key={`mob-${item}`}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic hover:text-emerald-500"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <button className="font-heading flex items-center gap-4 rounded-3xl bg-emerald-500 px-12 py-6 text-sm font-black text-slate-950 uppercase italic shadow-2xl">
              <ShoppingBag size={20} />
              คุยงานกับนายเอ็ม
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
