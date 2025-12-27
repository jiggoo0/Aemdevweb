/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS HEADER (SUKHOTHAI EDITION)
// Identity: Local Professional (เน้นความน่าเชื่อถือและการติดต่อที่รวดเร็ว)
// ----------------------------------------------------

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"

interface HeaderProps {
  themeColor?: string
  contact?: {
    lineId?: string
    phone?: string
    mobile?: string
  }
}

export default function Header({
  themeColor = "#7B3F00", // สีน้ำตาลไม้แก่น
  contact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const params = useParams()
  const pathname = usePathname()

  // ✅ ดึง template_id จาก URL เพื่อสร้าง Link ที่ถูกต้อง
  const templateId = (params?.template_id as string) || "wood-business"

  const navLinks = [
    { name: "หน้าแรก", href: `/${templateId}` },
    { name: "รายการไม้", href: `/${templateId}#products` },
    { name: "ติดต่อเรา", href: `/${templateId}#contact` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // จัดการข้อมูลติดต่อเบื้องต้น
  const displayPhone = contact?.mobile || contact?.phone || "055-xxx-xxx"
  const cleanLineId = contact?.lineId?.replace("@", "") || ""

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* 1. LOGO: แข็งแกร่งสไตล์โรงไม้ (Brutalist Architecture) */}
          <Link
            href={`/${templateId}`}
            className="group flex items-center gap-3 transition-transform active:scale-95"
          >
            <div
              className="flex h-11 w-11 items-center justify-center border-2 border-slate-900 font-black italic text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:rotate-3"
              style={{ backgroundColor: themeColor }}
            >
              ST
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
                สุโขทัยค้าไม้
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Sukhothai_Timber
              </span>
            </div>
          </Link>

          {/* 2. DESKTOP_NAV: สะอาดตาและชัดเจน */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                  pathname === link.href
                    ? "text-slate-900 opacity-100"
                    : "text-slate-500 opacity-60 hover:text-slate-900 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. CONTACT_ACTIONS: เน้น Click-to-Action เพื่อปิดการขาย */}
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href={`tel:${displayPhone}`}
              className="flex items-center gap-2 text-sm font-black text-slate-900 transition-transform hover:scale-105"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                <Phone size={14} style={{ color: themeColor }} />
              </div>
              <span className="tracking-tight">{displayPhone}</span>
            </a>

            <a
              href={`https://line.me/ti/p/~${cleanLineId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: themeColor }}
              className="border-2 border-slate-900 px-7 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95"
            >
              เช็คราคาส่ง
            </a>
          </div>

          {/* MOBILE_MENU_TOGGLE: ปรับแต่งให้กดง่ายด้วยนิ้วโป้ง */}
          <button
            className="flex h-11 w-11 items-center justify-center border-2 border-slate-900 bg-white text-slate-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE_DRAWER: แสดงผลเต็มหน้าจอเพื่อความชัดเจนบนหน้างาน */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[71px] h-screen border-t border-slate-200 bg-white p-8 animate-in fade-in slide-in-from-top-5 lg:hidden">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-slate-900"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 space-y-6 border-t border-slate-100 pt-10">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Quick_Contact
              </p>
              <a
                href={`tel:${displayPhone}`}
                className="flex items-center gap-4 text-3xl font-black italic text-slate-900"
              >
                <Phone size={28} style={{ color: themeColor }} />
                {displayPhone}
              </a>
              <a
                href={`https://line.me/ti/p/~${cleanLineId}`}
                style={{ backgroundColor: themeColor }}
                className="flex w-full items-center justify-center border-2 border-slate-900 py-6 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
              >
                ทัก LINE เช็คราคาส่ง
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
