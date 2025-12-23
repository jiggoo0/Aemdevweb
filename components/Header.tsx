/** @format */
"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500",
        scrolled
          ? "border-b-2 border-brand-navy bg-white/95 py-3 shadow-enterprise-sm backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          {/* ─── LOGO: INDUSTRIAL BLOCK ─── */}
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex h-11 w-11 items-center justify-center border-2 border-brand-navy bg-brand-blue transition-all duration-500 group-hover:rotate-90 group-hover:shadow-enterprise-sm">
              <Code2
                size={22}
                className="-rotate-90 text-white transition-transform duration-500 group-hover:rotate-0"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black uppercase tracking-tighter text-brand-navy md:text-2xl">
                {siteConfig.name}
              </span>
              <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand-blue">
                <Sparkles size={10} />
                <span>Creative Engineering</span>
              </div>
            </div>
          </Link>

          {/* ─── DESKTOP NAVIGATION: MODULAR DESIGN ─── */}
          <nav className="hidden items-center border-2 border-brand-navy bg-white p-1 shadow-enterprise-sm lg:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = mounted ? pathname === link.href : false
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300",
                    isActive
                      ? "bg-brand-navy text-white"
                      : "text-slate-500 hover:text-brand-blue"
                  )}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>

          {/* ─── ACTION BUTTON: SHARP & ROBUST ─── */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              asChild
              className="h-12 rounded-none border-2 border-brand-navy bg-brand-navy px-8 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-brand-blue hover:shadow-enterprise-sm active:scale-95"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Start Project
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-12 w-12 items-center justify-center border-2 border-brand-navy bg-white text-brand-navy shadow-enterprise-sm transition-all active:translate-x-1 active:translate-y-1 active:shadow-none lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ─── MOBILE MENU: FULL BRUTALISM ─── */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 border-b-4 border-brand-navy bg-white p-6 shadow-enterprise-lg animate-in slide-in-from-top-2 lg:hidden">
            <div className="flex flex-col space-y-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = mounted ? pathname === link.href : false
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between border-2 border-brand-navy p-5 text-sm font-black uppercase tracking-widest transition-all",
                      isActive
                        ? "bg-brand-blue text-white"
                        : "bg-slate-50 text-brand-navy hover:bg-brand-blue/10"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                    <ArrowRight size={18} />
                  </Link>
                )
              })}
            </div>

            <div className="mt-8">
              <Button
                asChild
                className="h-16 w-full rounded-none border-2 border-brand-navy bg-brand-navy text-xs font-black uppercase tracking-[0.3em]"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact">เริ่มคุยงานกันครับ</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
