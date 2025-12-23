/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, MessageCircle, Phone } from "lucide-react"

/**
 * 🟢 แก้ไข: เพิ่ม 'export' เพื่อให้ไฟล์ shared/index.ts สามารถดึงไปใช้ได้
 * และแก้ปัญหา TS2614 (Module has no exported member 'NavbarProps')
 */
export interface NavbarProps {
  brandName: string
  primaryColor?: string
  lineId?: string
  phone?: string
  defaultLanguage?: "th" | "en"
}

export default function Navbar({
  brandName,
  primaryColor = "#000000",
  lineId,
  phone,
  defaultLanguage = "th",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // จัดการ Effect ตอน Scroll เพื่อเปลี่ยนสีพื้นหลัง
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: defaultLanguage === "th" ? "หน้าแรก" : "Home", href: "#home" },
    {
      label: defaultLanguage === "th" ? "บริการ" : "Services",
      href: "#services",
    },
    {
      label: defaultLanguage === "th" ? "ผลงาน" : "Portfolio",
      href: "#portfolio",
    },
    {
      label: defaultLanguage === "th" ? "ติดต่อ" : "Contact",
      href: "#contact",
    },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b-2 border-slate-900 bg-white py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-1"
              style={{ backgroundColor: primaryColor }}
            />
            <span className="text-2xl font-black uppercase italic tracking-tighter text-slate-900">
              {brandName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            {lineId && (
              <a
                href={`https://line.me/ti/p/${lineId.replace("@", "")}`}
                target="_blank"
                className="flex items-center gap-2 border-2 border-slate-900 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
              >
                <MessageCircle size={14} />
                Add Line
              </a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-slate-900 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b-2 border-slate-900 bg-white p-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-black uppercase italic text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {lineId && (
                <a
                  href={`https://line.me/ti/p/${lineId.replace("@", "")}`}
                  className="flex items-center justify-center gap-2 border-2 border-slate-900 bg-emerald-500 py-3 text-[10px] font-black uppercase tracking-widest text-white"
                >
                  <MessageCircle size={16} /> LINE
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 border-2 border-slate-900 bg-slate-900 py-3 text-[10px] font-black uppercase tracking-widest text-white"
                >
                  <Phone size={16} /> CALL
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
