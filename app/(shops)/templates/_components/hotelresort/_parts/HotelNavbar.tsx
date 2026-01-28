/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, CalendarDays } from "lucide-react"
import { cn } from "@/lib/utils"

interface HotelNavbarProps {
  data: {
    logo: string
    links: { label: string; href: string }[]
    bookingCta: string
  }
}

export const HotelNavbar = ({ data }: HotelNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ตรวจสอบการเลื่อนหน้าจอเพื่อเปลี่ยนสถานะพื้นหลัง
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-40 w-full text-left transition-all duration-500",
        isScrolled
          ? "h-20 border-b border-slate-100 bg-white/90 backdrop-blur-xl"
          : "h-24 bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        {/* 1. Logo: เน้นความเรียบง่ายและดูแพง */}
        <div className="group flex cursor-pointer items-center gap-2">
          <span
            className={cn(
              "font-prompt text-2xl font-black tracking-tighter uppercase italic transition-colors duration-300",
              isScrolled ? "text-slate-950" : "text-white"
            )}
          >
            {data.logo}
            <span className="text-emerald-500">.</span>
          </span>
        </div>

        {/* 2. Desktop Menu: วางระยะห่างให้ดูโปร่งสบายตา */}
        <div className="hidden items-center gap-12 lg:flex">
          {data.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={cn(
                "text-[10px] font-black tracking-[0.3em] uppercase transition-all hover:text-emerald-500",
                isScrolled ? "text-slate-500" : "text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 3. Action Button: ปุ่มจองที่เน้นการปิดการขาย */}
        <div className="flex items-center gap-4">
          <button
            className={cn(
              "hidden items-center gap-3 rounded-full px-8 py-3 text-[10px] font-black tracking-widest uppercase transition-all md:flex",
              isScrolled
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-600"
                : "bg-white text-slate-950 hover:bg-emerald-500 hover:text-white"
            )}
          >
            <CalendarDays size={16} />
            {data.bookingCta}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "p-2 lg:hidden",
              isScrolled ? "text-slate-950" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[-1] bg-slate-950 transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-12">
          {data.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-black tracking-[0.2em] text-white uppercase hover:text-emerald-500"
            >
              {link.label}
            </a>
          ))}
          <button className="rounded-full bg-emerald-500 px-12 py-5 text-xs font-black tracking-widest text-white uppercase">
            {data.bookingCta}
          </button>
        </div>
      </div>
    </nav>
  )
}
