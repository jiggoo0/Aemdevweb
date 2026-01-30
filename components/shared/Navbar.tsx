/** @format */

"use client"

import * as React from "react"
import { useState, useEffect, useCallback, useId } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X, ArrowUpRight, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { mainNav } from "@/constants/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuId = useId()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      if (!isScrolled) setIsScrolled(true)
    } else {
      if (isScrolled) setIsScrolled(false)
    }
  })

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev
      if (typeof document !== "undefined") {
        document.body.style.overflow = next ? "hidden" : ""
      }
      return next
    })
  }, [])

  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }, [pathname])

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 z-[100] w-full transition-all duration-500",
          isScrolled
            ? "bg-[oklch(1_0_0_/_0.8)] py-3 blur-shadow backdrop-blur-xl dark:bg-[oklch(0.12_0.02_260_/_0.8)]"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-za">
          <nav role="navigation" aria-label="Main Navigation" className="flex items-center justify-between">
            
            {/* [BRAND IDENTITY NODE] */}
            <Link 
              href="/" 
              className="group flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
              aria-label="AEMDEVWEB Home"
            >
              <div className="bg-brand-primary flex h-9 w-9 items-center justify-center rounded-xl transition-transform group-hover:rotate-12 group-focus:rotate-12">
                <Shield size={20} className="text-brand-depth fill-current" />
              </div>
              <span className="font-heading text-xl font-black tracking-tighter text-brand-depth uppercase italic dark:text-white">
                AEM<span className="text-brand-primary">DEV</span>WEB
              </span>
            </Link>

            {/* [DESKTOP NAVIGATION HUB] */}
            <div className="hidden items-center gap-8 lg:flex">
              <ul className="flex items-center gap-1" role="list">
                {mainNav.map((item) => {
                  const isActive = pathname.startsWith(item.href) && (item.href !== "/" || pathname === "/")
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase italic transition-all outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
                          isActive
                            ? "text-brand-primary"
                            : "text-[oklch(0.4_0.02_260)] hover:text-brand-depth dark:text-[oklch(0.7_0.02_260)] dark:hover:text-white"
                        )}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="bg-brand-primary absolute bottom-0 left-4 h-0.5 w-4 rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="h-4 w-px bg-[oklch(0.9_0.02_260)] dark:bg-white/10" aria-hidden="true" />

              <Button asChild className="btn-za bg-brand-depth h-10 px-6 text-white dark:bg-white dark:text-brand-depth">
                <Link href="/contact" className="gap-2 text-[10px]">
                  START PROJECT <ArrowUpRight size={14} />
                </Link>
              </Button>
            </div>

            {/* [MOBILE CONTROL] */}
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="bg-brand-depth relative z-[110] flex h-10 w-10 items-center justify-center rounded-xl text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-primary dark:bg-white dark:text-brand-depth lg:hidden"
            >
              <AnimatePresence mode="wait">
                {isOpen ? <X size={20} key="close" /> : <Menu size={20} key="menu" />}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* [MOBILE OVERLAY PROTOCOL] */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-brand-depth/40 fixed inset-0 z-[105] backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white p-6 pt-24 pb-12 shadow-2xl dark:bg-[oklch(0.15_0.02_260)]"
            >
              <div className="container-za flex flex-col gap-4">
                {mainNav.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-2xl p-5 text-2xl font-black tracking-tighter uppercase italic transition-all",
                        pathname.startsWith(item.href) && (item.href !== "/" || pathname === "/")
                          ? "bg-brand-primary text-brand-depth"
                          : "bg-slate-50 text-brand-depth dark:bg-white/5 dark:text-white"
                      )}
                    >
                      {item.name}
                      <ArrowUpRight size={20} className="opacity-40" />
                    </Link>
                  </motion.div>
                ))}
                
                {/* [STRATEGIC REFACTOR]: ปุ่มสีดำตัดขาวตามสั่ง */}
                <Button 
                    asChild 
                    className="mt-6 h-20 w-full rounded-[2rem] bg-black text-xl font-black uppercase italic text-white shadow-2xl transition-transform active:scale-95 dark:bg-brand-primary dark:text-brand-depth"
                >
                  <Link href="/contact" className="flex items-center justify-center gap-4">
                    HIRE SPECIALIST <ArrowUpRight size={24} strokeWidth={3} />
                  </Link>
                </Button>
              </div>
            </motion.div>
            {/* Click to close area */}
            <div className="flex-1 h-full" onClick={toggleMenu} aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
