/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface RentalNavbarProps {
  data: {
    logo: string
    cta: string
    links: { label: string; href: string }[]
  }
}

export const RentalNavbar = ({ data }: RentalNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // พิกัดระบบตรวจจับการเลื่อนหน้าจอเพื่อปรับระนาบ Navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "h-20 border-b border-white/5 bg-slate-950/90 backdrop-blur-xl"
          : "h-24 bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        {/* พิกัดแบรนด์: เน้นความชัดเจนของโลโก้ */}
        <div className="font-heading text-2xl font-black tracking-tighter text-white uppercase italic">
          {data.logo}
          <span className="text-indigo-500">.</span>
        </div>

        {/* เมนูหลักสำหรับหน้าจอขนาดใหญ่ */}
        <div className="hidden items-center gap-10 lg:flex">
          {data.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="font-body text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <button className="font-heading flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-[10px] font-black tracking-[0.2em] text-white uppercase italic transition-all hover:bg-indigo-500 active:scale-95">
            {data.cta} <ArrowRight size={14} />
          </button>
        </div>

        {/* ปุ่มสลับเมนูสำหรับมือถือ */}
        <button
          className="p-2 text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ระบบเมนูมือถือแบบ Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[-1] flex flex-col items-center justify-center bg-slate-950 transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-10">
          {data.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading text-2xl font-black tracking-widest text-white uppercase italic"
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-4 rounded-full bg-indigo-600 px-12 py-5 text-xs font-black tracking-widest text-white uppercase italic">
            {data.cta}
          </button>
        </div>
      </div>
    </nav>
  )
}
