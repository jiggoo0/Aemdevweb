/** @format */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Code2 } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Catalog", href: "/catalog" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-slate-900 bg-white shadow-[0_4px_0_0_rgba(15,23,42,1)]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="bg-slate-900 p-1.5 transition-transform group-hover:-rotate-6">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
            {siteConfig.name}
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-black uppercase tracking-widest transition-colors hover:text-blue-600 ${
                isActive(item.href) ? "text-blue-600" : "text-slate-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border-2 border-slate-900 bg-slate-900 px-5 py-2 text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0_0_#2563eb] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="block border-2 border-slate-900 bg-white p-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <div
          key={pathname}
          className="fixed inset-0 top-[84px] z-40 h-screen w-full bg-white md:hidden"
        >
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-black uppercase italic tracking-tighter transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-slate-900 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}