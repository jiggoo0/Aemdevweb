/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Calendar } from "lucide-react"
import { clinicConfig } from "../config"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ตรวจจับการเลื่อนหน้าจอเพื่อเปลี่ยนสไตล์ Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "หน้าแรก", href: "#" },
    { name: "บริการ", href: "#services" },
    { name: "รีวิว", href: "#testimonials" },
    { name: "คำถามที่พบบ่อย", href: "#faq" },
    { name: "ติดต่อเรา", href: "#location" },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* --- Logo --- */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-200">
              <span className="text-xl font-black">A</span>
            </div>
            <span
              className={`text-xl font-bold tracking-tighter ${isScrolled ? "text-slate-900" : "text-slate-900 md:text-white lg:text-slate-900"}`}
            >
              {clinicConfig.name}
            </span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-slate-600 transition-colors hover:text-sky-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-6 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-6">
              <a
                href={`tel:${clinicConfig.content.contact.phone}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <Phone size={16} />
                </div>
                {clinicConfig.content.contact.phone}
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("appointment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-full bg-sky-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-100 transition-all hover:bg-sky-700 hover:shadow-sky-200 active:scale-95"
              >
                <Calendar size={16} />
                นัดหมายแพทย์
              </button>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="rounded-lg p-2 text-slate-900 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* --- Mobile Navigation Menu --- */}
      <div
        className={`absolute left-0 right-0 top-full bg-white p-6 shadow-2xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-10 opacity-0"
        }`}
      >
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-bold text-slate-900 hover:text-sky-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t pt-8">
          <button
            onClick={() => {
              document
                .getElementById("appointment")
                ?.scrollIntoView({ behavior: "smooth" })
              setIsMobileMenuOpen(false)
            }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 py-4 text-lg font-bold text-white shadow-xl shadow-sky-100"
          >
            <Calendar size={20} />
            นัดหมายแพทย์ด่วน
          </button>
        </div>
      </div>
    </header>
  )
}
