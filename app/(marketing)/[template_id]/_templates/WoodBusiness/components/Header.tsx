/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS HEADER (SUKHOTHAI EDITION)
// Identity: Local Professional (เน้นความน่าเชื่อถือและการติดต่อที่รวดเร็ว)
// ----------------------------------------------------

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react" // ✅ ลบ ShieldCheck และ MessageCircle ออกเพื่อแก้ Warning

interface HeaderProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function Header({
  themeColor = "#7B3F00", // สีน้ำตาลไม้
  contact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const params = useParams()
  const pathname = usePathname()

  // กำหนด ID พื้นฐานเป็น starter หากไม่มี params
  const templateId = (params?.template_id as string) || "WoodBusiness"

  const navLinks = [
    { name: "หน้าแรก", href: `/${templateId}` },
    { name: "รายการไม้", href: `/${templateId}/products` },
    { name: "ติดต่อเรา", href: `/${templateId}/contact` },
  ]

  // ตรวจสอบการเลื่อนหน้าจอเพื่อปรับพื้นหลัง Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/90 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* 1. LOGO: ชื่อร้านพร้อมไอคอนยืนยันคุณภาพ */}
          <Link
            href={`/${templateId}`}
            className="group flex items-center gap-2"
          >
            <div
              className="flex h-10 w-10 items-center justify-center font-black italic text-white transition-transform group-hover:rotate-3"
              style={{ backgroundColor: themeColor }}
            >
              ST
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black uppercase tracking-tighter text-slate-900">
                สุโขทัยค้าไม้
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Sukhothai_Timber
              </span>
            </div>
          </Link>

          {/* 2. DESKTOP_NAV: เมนูสำหรับหน้าจอคอมพิวเตอร์ */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-slate-900 ${
                  pathname === link.href ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. CONTACT_ACTIONS: เบอร์โทรและปุ่ม LINE */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href={`tel:${contact?.phone}`}
              className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:opacity-80"
            >
              <Phone size={18} style={{ color: themeColor }} />
              {contact?.phone || "055-xxx-xxx"}
            </a>
            <Link
              href={`https://line.me/ti/p/${contact?.lineId?.replace("@", "")}`}
              target="_blank"
              style={{ backgroundColor: themeColor }}
              className="px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
            >
              สอบถามราคาส่ง
            </Link>
          </div>

          {/* MOBILE_MENU_BUTTON */}
          <button
            className="text-slate-900 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE_MENU_DRAWER */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full border-t border-slate-100 bg-white p-8 shadow-2xl animate-in fade-in slide-in-from-top-2 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-black uppercase tracking-tighter ${
                  pathname === link.href ? "text-slate-900" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-slate-50 pt-6">
              <a
                href={`tel:${contact?.phone}`}
                className="flex items-center gap-3 text-lg font-bold text-slate-700"
              >
                <Phone size={20} style={{ color: themeColor }} />
                {contact?.phone}
              </a>
              <Link
                href={`https://line.me/ti/p/${contact?.lineId?.replace("@", "")}`}
                style={{ backgroundColor: themeColor }}
                className="w-full py-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg"
              >
                ทัก LINE เช็คราคาไม้
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
