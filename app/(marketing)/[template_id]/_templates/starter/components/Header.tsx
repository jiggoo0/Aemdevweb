/** @format */
// ----------------------------------------------------
// 🏥 AI CONTEXT: PRODUCTION PROFESSIONAL HEADER (FIXED)
// ----------------------------------------------------

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Phone, ShieldCheck, Menu, X } from "lucide-react"

interface HeaderProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function Header({
  themeColor = "#0f766e", // Default เป็นสี Teal ตาม Medical Template
  contact,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const params = useParams()
  const pathname = usePathname()

  const templateId = (params?.template_id as string) || "starter"

  const navLinks = [
    { name: "Home", href: `/${templateId}` },
    { name: "Services", href: `/${templateId}/services` },
    { name: "Contact", href: `/${templateId}/contact` },
  ]

  // ตรวจสอบการเลื่อนหน้าจอ
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ FIX: แก้ไข Error "Calling setState synchronously within an effect"
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-slate-100 bg-white/95 py-3 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* 1. BRAND_IDENTITY */}
        <Link
          href={`/${templateId}`}
          className="group flex select-none items-center gap-3"
        >
          <div
            className="flex h-10 w-10 items-center justify-center font-black text-white transition-transform group-hover:scale-105"
            style={{ backgroundColor: themeColor }}
          >
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black uppercase leading-none tracking-tighter text-slate-900">
              AEMDEVWEB<span style={{ color: themeColor }}>.</span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Medical_Systems
            </span>
          </div>
        </Link>

        {/* 2. DESKTOP_NAVIGATION */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-full"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* 3. ACTION_AREA */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${contact?.phone}`}
            className="hidden items-center gap-2 text-slate-500 transition-colors hover:text-slate-900 lg:flex"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50">
              <Phone size={14} style={{ color: themeColor }} />
            </div>
            <span className="font-mono text-sm font-bold tracking-tight">
              {contact?.phone || "02-xxx-xxxx"}
            </span>
          </a>

          <Link
            href={`/${templateId}/contact`}
            style={{ backgroundColor: themeColor }}
            className="hidden items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-teal-900/10 transition-all hover:brightness-110 active:scale-95 sm:flex"
          >
            Appointment <ShieldCheck size={12} />
          </Link>

          <button
            className="p-2 text-slate-900 outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 4. MOBILE_MENU_DRAWER */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full border-t border-slate-50 bg-white p-8 shadow-2xl duration-300 animate-in fade-in slide-in-from-top-2 md:hidden">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-black uppercase tracking-widest ${
                  pathname === link.href ? "text-slate-900" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-slate-50 pt-8">
            <a href={`tel:${contact?.phone}`} className="flex items-center gap-3 font-bold text-slate-600">
              <Phone size={18} style={{ color: themeColor }} /> {contact?.phone || "02-xxx-xxxx"}
            </a>
            <Link
              href={`/${templateId}/contact`}
              style={{ backgroundColor: themeColor }}
              className="w-full py-5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
