/** @format */

"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { mainNav } from "@/constants/navigation"
import { cn } from "@/lib/utils"

/**
 * Navbar - อินเทอร์เฟซการนำเสนอส่วนควบคุม (The Navigation Interface)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: ความเรียบหรูที่มาพร้อมกับการใช้งานที่ลื่นไหล
 * มาตรฐาน: รองรับมาตรฐานการแสดงผลระดับสูงสุดและตอบสนองฉับไว
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // ระบบตรวจจับการเลื่อนหน้าจอเพื่อปรับเปลี่ยนสถานะแถบนำทาง
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ฟังก์ชันจัดการการปิดเมนูและคืนค่าการเลื่อนหน้าจอ
  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto"
    }
  }, [])

  // ฟังก์ชันสลับสถานะเมนูสำหรับอุปกรณ์เคลื่อนที่
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev
      if (typeof document !== "undefined") {
        document.body.style.overflow = newState ? "hidden" : "auto"
      }
      return newState
    })
  }, [])

  // ระบบปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนเส้นทาง
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "border-b border-slate-100 bg-white/95 py-4 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* [1. BRAND IDENTITY]: อัตลักษณ์ความเชี่ยวชาญของแบรนด์ */}
          <Link
            href="/"
            className="group font-heading flex items-center gap-1.5 text-2xl font-black tracking-tighter text-slate-950 uppercase italic"
          >
            <span className="transition-all duration-300 group-hover:text-emerald-600">
              AEM
            </span>
            <span className="text-emerald-600">DEV</span>
            <span className="transition-all duration-300 group-hover:text-emerald-600">
              WEB
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-600 group-hover:animate-pulse" />
          </Link>

          {/* [2. DESKTOP NAVIGATION]: ระบบเมนูสำหรับหน้าจอขนาดใหญ่ */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-4">
              {mainNav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-heading relative rounded-xl px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase italic transition-all",
                        isActive
                          ? "bg-slate-50 text-slate-950"
                          : "text-slate-500 hover:bg-emerald-50/50 hover:text-emerald-600"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-xl bg-slate-100/50"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="h-4 w-px bg-slate-200" />

            <Button
              asChild
              className={cn(
                "h-11 rounded-2xl px-8 text-[11px] font-black tracking-widest uppercase italic transition-all active:scale-95",
                "bg-slate-950 text-white shadow-xl shadow-slate-950/10",
                "hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-emerald-600/30"
              )}
            >
              <Link href="/contact" className="flex items-center gap-3">
                START PROJECT
                <ArrowUpRight size={14} strokeWidth={3} />
              </Link>
            </Button>
          </div>

          {/* [3. MOBILE TOGGLE]: ปุ่มควบคุมสำหรับอุปกรณ์เคลื่อนที่ */}
          <button
            aria-label="Toggle Menu"
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all active:scale-90 lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* [4. MOBILE OVERLAY]: อินเทอร์เฟซการนำทางสำหรับอุปกรณ์เคลื่อนที่ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* พื้นหลังโปร่งแสงพร้อมระบบปิดเมื่อสัมผัสพื้นที่ว่าง */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[104] bg-slate-950/20 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-0 top-0 z-[105] flex flex-col bg-white p-6 pt-32 shadow-2xl lg:hidden"
            >
              {/* ลายเส้นโครงสร้างเชิงระบบจางๆ เพื่อเพิ่มมิติความประณีต */}
              <div
                className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-5"
                aria-hidden="true"
              />

              <div className="mb-12 flex items-center gap-3">
                <Terminal size={16} className="text-emerald-600" />
                <span className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
                  Navigation Menu
                </span>
              </div>

              <ul className="flex flex-col gap-4">
                {mainNav.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "font-heading flex items-center justify-between rounded-3xl p-6 text-4xl font-black tracking-tighter uppercase italic transition-all",
                        pathname === item.href
                          ? "bg-emerald-50 text-emerald-600"
                          : "text-slate-950 hover:bg-slate-50"
                      )}
                    >
                      {item.name}
                      <ArrowUpRight
                        size={28}
                        className={
                          pathname === item.href ? "opacity-100" : "opacity-20"
                        }
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pb-6">
                <Button
                  asChild
                  className="h-20 w-full rounded-[2.5rem] bg-slate-950 text-xl font-black tracking-widest text-white uppercase italic shadow-2xl transition-all active:scale-95"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-4"
                  >
                    START PROJECT <ArrowUpRight size={24} strokeWidth={3} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
