/** @format */
"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ArrowRight, Zap } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"
// ✅ นำเข้า Logo ที่เราออกแบบไว้
import Logo from "@/components/logo"

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

  // ✅ 2. Body Scroll Lock (ป้องกันอาการเลื่อนซ้อนบนมือถือ)
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

  // ✅ 3. Navigation Logic
  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          ? "border-b-4 border-[#0f172a] bg-white/95 py-3 shadow-[0_4px_0_0_rgba(15,23,42,0.1)] backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="container relative z-[101] mx-auto flex items-center justify-between px-6">
        {/* ✅ LOGO: เปลี่ยนมาใช้ Brutalist Logo */}
        <Logo className="scale-90 md:scale-100" />

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className={cn(
                "text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#f97316]",
                pathname === item.href
                  ? "text-[#1e3a8a] underline decoration-4 underline-offset-4"
                  : "text-[#0f172a]"
              )}
            >
              {item.title}
            </Link>
          ))}

          {/* ✅ Brutal Start Button */}
          <Link
            href={siteConfig.contact.lineUrl}
            className="group flex items-center gap-2 border-4 border-[#0f172a] bg-[#0f172a] px-6 py-3 text-[11px] font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_#f97316] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Start Project{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </nav>

        {/* MOBILE TOGGLE: ดุดันขึ้นด้วยเส้นหนา */}
        <button
          className="relative z-[110] flex border-4 border-[#0f172a] bg-white p-2 shadow-[3px_3px_0_0_#0f172a] active:scale-90 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-[#f97316]" />
          ) : (
            <Menu className="h-6 w-6 text-[#0f172a]" />
          )}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY: Full Brutalist Mode */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[105] h-screen w-full bg-white transition-all duration-500 ease-in-out lg:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        )}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8">
          <p className="mb-4 text-[12px] font-black tracking-[0.3em] text-[#0f172a]/20">
            AEM_SYSTEM_V{siteConfig.version}
          </p>
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className={cn(
                "border-b-4 border-[#0f172a]/10 py-4 text-5xl font-black uppercase italic tracking-tighter transition-colors",
                pathname === item.href
                  ? "text-[#1e3a8a]"
                  : "text-[#0f172a] hover:text-[#f97316]"
              )}
            >
              {item.title}
            </Link>
          ))}

          <div className="mt-12">
            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-3 border-4 border-[#0f172a] bg-[#1e3a8a] py-6 text-2xl font-black uppercase text-white shadow-[8px_8px_0_0_#f97316]"
            >
              Let's Talk <Zap size={24} fill="currentColor" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
