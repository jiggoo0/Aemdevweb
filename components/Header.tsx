/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Code2, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // ✅ 1. Optimized Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ 2. Body Scroll Lock
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "unset"
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen])

  // ✅ 3. Navigation Logic (Event-based instead of Effect-based)
  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // ปิดเมนูก่อนเสมอเพื่อป้องกันปัญหา UI ค้าง
      setIsOpen(false)

      if (href.startsWith("/#")) {
        e.preventDefault()
        const targetId = href.replace("/#", "")

        if (pathname === "/") {
          document
            .getElementById(targetId)
            ?.scrollIntoView({ behavior: "smooth" })
        } else {
          router.push("/")
          setTimeout(() => {
            document
              .getElementById(targetId)
              ?.scrollIntoView({ behavior: "smooth" })
          }, 150)
        }
      }
    },
    [pathname, router]
  )

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300",
        scrolled
          ? "border-b-4 border-slate-900 bg-white/95 py-4 shadow-[0_4px_0_0_rgba(15,23,42,0.1)] backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container relative z-[101] mx-auto flex items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)} // ปิดเมนูเมื่อกด Logo
          className="group flex items-center gap-2 outline-none"
        >
          <div className="bg-slate-900 p-2 shadow-[3px_3px_0_0_#F97316] transition-transform group-hover:-rotate-12 group-hover:bg-[#1E3A8A]">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
            {siteConfig.name}
            <span className="text-[#F97316]">.</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className={cn(
                "text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#F97316]",
                pathname === item.href ? "text-[#1E3A8A]" : "text-slate-600"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Link
            href={siteConfig.contact.lineUrl}
            className="group flex items-center gap-2 border-2 border-slate-900 bg-slate-900 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_#F97316] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Start Project <ArrowRight size={14} />
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="relative z-[110] flex border-2 border-slate-900 bg-white p-2 active:scale-90 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#F97316]" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[105] h-screen w-full bg-white transition-all duration-500 ease-in-out lg:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2 px-8 pt-32">
          <p className="mb-4 font-mono text-[10px] font-black tracking-[0.3em] text-slate-300">
            NAV_SYSTEM_V{siteConfig.version}
          </p>
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className={cn(
                "border-b-2 border-slate-50 py-4 text-4xl font-black uppercase italic tracking-tighter transition-colors",
                pathname === item.href
                  ? "text-[#1E3A8A]"
                  : "text-slate-900 hover:text-[#F97316]"
              )}
            >
              {item.title}
            </Link>
          ))}

          <div className="mt-10 space-y-4">
            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-3 bg-[#1E3A8A] py-6 text-xl font-black uppercase text-white shadow-[8px_8px_0_0_#F97316]"
            >
              Contact via LINE <Zap size={20} fill="currentColor" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
