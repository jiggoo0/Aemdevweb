/** @format */

"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * Navbar - แถบนำทางหลักของ นายเอ็มซ่ามากส์
 * พิกัด: ส่วนสื่อสารที่เน้นความโปร่งใสและเข้าถึงข้อมูลได้ไว
 * แนวทาง: ใช้ภาษาไทยที่เข้าใจง่าย เรียบง่ายแต่ดูแพง สไตล์คนทำงานเทคนิคคุยกับเจ้าของธุรกิจ
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // พิกัดอ้างอิงสำหรับระบบปิดเมนูอัตโนมัติ (Click Outside)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // รายการนำทางหลัก - ปรับชื่อเป็นภาษาไทยที่กระชับและดูดี
  const mainNavLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "รู้จักเรา", href: "/about" },
    { name: "งานบริการ", href: "/services" },
    { name: "โครงสร้างเว็บ", href: "/templates" },
    { name: "ผลงาน", href: "/case-studies" },
    { name: "คลังความรู้", href: "/blog" },
  ]

  // 1. ตรวจสอบการเลื่อนหน้าจอเพื่อปรับสถานะแถบนำทาง
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2. ระบบจัดการความสะดวกเมื่อเปิดเมนูบนมือถือ
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.addEventListener("keydown", handleEscKey)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  // 3. ปิดเมนูเมื่อมีการเปลี่ยนหน้า
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "border-b border-slate-100 bg-white/90 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* ส่วนชื่อแบรนด์ - เพิ่มจุดเพื่อความเท่และเป็นระเบียบ */}
          <Link
            href="/"
            className="group font-heading flex items-center gap-2 text-xl font-black tracking-tighter text-slate-900 uppercase italic"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-emerald-500 transition-transform group-hover:rotate-6">
              <Sparkles size={18} fill="currentColor" />
            </div>
            <span className="transition-colors group-hover:text-emerald-600">
              {siteConfig.project.name}
              <span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* รายการเมนูสำหรับคอมพิวเตอร์ (Desktop) */}
          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-8 text-[10px] font-black tracking-[0.2em] uppercase italic">
              {mainNavLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-all hover:text-emerald-600",
                      pathname === item.href
                        ? "text-emerald-600 underline decoration-emerald-500/30 underline-offset-8"
                        : "text-slate-400"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-slate-100" />

            {/* ปุ่มปรึกษางานหลัก */}
            <Button
              asChild
              className="font-heading h-12 rounded-2xl bg-slate-950 px-7 text-[10px] font-black tracking-widest text-white uppercase shadow-xl shadow-slate-950/5 transition-all hover:bg-emerald-600 active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-2">
                ปรึกษางานระบบ
                <ArrowUpRight size={14} strokeWidth={3} />
              </Link>
            </Button>
          </div>

          {/* ปุ่มเมนูสำหรับมือถือ */}
          <button
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="เปิดเมนู"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* เมนูแบบเต็มจอสำหรับมือถือ (Mobile Overlay) */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        )}
      >
        <div className="flex h-full flex-col p-8 pt-32">
          <ul className="space-y-8">
            {mainNavLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-heading text-4xl font-black tracking-tighter uppercase italic transition-colors hover:text-emerald-600",
                    pathname === item.href
                      ? "text-emerald-600"
                      : "text-slate-900"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-8">
            <div className="h-px bg-slate-100" />
            <div className="space-y-5">
              <p className="font-body text-sm font-bold text-slate-400">
                เริ่มวางแผนงานกับพี่เอ็มซ่ามากส์
              </p>
              <Button
                asChild
                className="font-heading h-16 w-full rounded-2xl bg-emerald-600 text-base font-black tracking-widest text-white uppercase italic shadow-2xl shadow-emerald-600/20 active:scale-[0.98]"
              >
                <Link href="/contact">คุยกับผู้เชี่ยวชาญ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
