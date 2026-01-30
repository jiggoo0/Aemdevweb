/** @format */

"use client"

import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { mainNav } from "@/constants/navigation"
import { cn } from "@/lib/utils"

/**
 * Navbar: เครื่องยนต์นำทางยุทธศาสตร์ (Strategic Navigation Engine)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // [SCROLL PROTOCOL]: ตรวจสอบการเลื่อนหน้าจอเพื่อปรับเปลี่ยนสภาพผิว (Surface)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // [MENU CONTROL]: ระบบจัดการสถานะเมนู Mobile พร้อมการล็อก Scroll
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const newState = !prev
      if (typeof document !== "undefined") {
        document.body.style.overflow = newState ? "hidden" : "auto"
      }
      return newState
    })
  }, [])

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto"
    }
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-full transition-all duration-500",
        isScrolled
          ? "border-b border-[oklch(0.9_0.02_260)] bg-[oklch(1_0_0_/_0.8)] py-4 backdrop-blur-xl dark:border-white/5 dark:bg-[oklch(0.12_0.02_260_/_0.8)]"
          : "bg-transparent py-8"
      )}
    >
      <div className="container-za">
        <nav className="flex items-center justify-between">
          
          {/* [BRAND IDENTITY]: พิกัดอัตลักษณ์แบรนด์ */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-black tracking-tighter text-brand-depth uppercase italic dark:text-white"
          >
            <span className="group-hover:text-brand-primary transition-all duration-300">
              AEM<span className="text-brand-primary">DEV</span>WEB
            </span>
            <div className="bg-brand-primary h-2 w-2 rounded-full group-hover:animate-ping" />
          </Link>

          {/* [DESKTOP NAVIGATION]: พิกัดการนำทางสำหรับจอภาพขนาดใหญ่ */}
          <div className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-2">
              {mainNav.map((item) => {
                // [ACTIVE STATE LOGIC]: ตรวจสอบพิกัด URL ปัจจุบัน
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)

                return (
                  <li key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-black tracking-[0.25em] uppercase italic transition-all duration-300",
                        isActive
                          ? "text-brand-primary"
                          : "hover:text-brand-primary text-[oklch(0.4_0.02_260)] dark:text-[oklch(0.7_0.02_260)]"
                      )}
                    >
                      {item.name}
                      {item.badge && (
                        <span className="bg-brand-primary rounded-full px-1.5 py-0.5 text-[7px] font-black text-white">
                          {item.badge}
                        </span>
                      )}

                      {/* [MOTION PILL]: แอนิเมชันระบุตำแหน่งที่กำลังเข้าถึง */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-xl bg-[oklch(0.65_0.2_160_/_0.08)]"
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

            <div className="h-5 w-px bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.3_0.02_260)]" />

            <Button
              asChild
              className="btn-za bg-brand-depth h-11 text-white shadow-node hover:bg-brand-primary dark:bg-brand-surface dark:text-brand-depth"
            >
              <Link href="/contact" className="flex items-center gap-3">
                START PROJECT <ArrowUpRight size={14} strokeWidth={3} />
              </Link>
            </Button>
          </div>

          {/* [MOBILE TOGGLE] */}
          <button
            onClick={toggleMobileMenu}
            className="bg-brand-depth flex h-11 w-11 items-center justify-center rounded-2xl text-white active:scale-90 dark:bg-brand-surface dark:text-brand-depth lg:hidden"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* [MOBILE OVERLAY]: ระบบแสดงผลเมนูสำหรับอุปกรณ์พกพา */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="bg-brand-depth/20 fixed inset-0 z-[104] backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="dark:bg-brand-depth fixed inset-y-0 right-0 z-[105] flex w-[85%] flex-col bg-white p-8 pt-32 shadow-2xl lg:hidden"
            >
              <div className="border-brand-primary mb-12 flex items-center gap-3 border-l-4 pl-4">
                <BookOpen size={18} className="text-brand-primary" />
                <span className="text-[10px] font-black tracking-[0.4em] text-[oklch(0.5_0.02_260)] uppercase italic">
                  Explore Nodes
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl p-6 text-3xl font-black tracking-tighter uppercase italic transition-all",
                        pathname.startsWith(item.href) &&
                          (item.href !== "/" || pathname === "/")
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-brand-depth dark:text-white"
                      )}
                    >
                      {item.name}
                      <ArrowUpRight size={24} className="opacity-20" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pb-10">
                <Button
                  asChild
                  className="bg-brand-primary h-20 w-full rounded-3xl text-xl font-black uppercase italic shadow-aurora"
                >
                  <Link href="/contact">HIRE SPECIALIST</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
