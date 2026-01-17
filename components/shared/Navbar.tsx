/** @format */

"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navigation } from "@/constants/navigation"

interface NavbarProps {
  className?: string
}

/**
 * 🧭 Navbar: Luminous Navigation Engine
 * ✅ Optimized: ลดค่า Stiffness เพื่อลด TBT ตามรายงาน PageSpeed Insights
 */
export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "shadow-luminous flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl",
        className
      )}
      aria-label="Main Navigation"
    >
      {navigation.main.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)

        const isExternal = item.external || item.href.startsWith("http")

        return (
          <Link
            key={item.name}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              "group relative rounded-full px-5 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 outline-none",
              isActive
                ? "text-aurora-cyan"
                : "text-slate-500 hover:text-slate-200"
            )}
          >
            {/* ✅ Layer 2: Text & Icons */}
            <span className="relative z-20 flex items-center gap-2">
              {item.name}
              {isExternal && (
                <ExternalLink className="group-hover:text-aurora-cyan h-3 w-3 opacity-40 transition-all group-hover:opacity-100" />
              )}
            </span>

            {/* 🏷️ Luminous Badge */}
            {item.badge && (
              <span className="from-aurora-violet to-aurora-cyan shadow-aurora-glow absolute -top-1 -right-1 z-30 flex h-4 min-w-[1.2rem] animate-pulse items-center justify-center rounded-full bg-gradient-to-r px-1.5 text-[7px] font-black tracking-tighter text-slate-950">
                {item.badge}
              </span>
            )}

            {/* ✅ Layer 1: Hover Background */}
            <span className="pointer-events-none absolute inset-0 z-10 rounded-full bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

            {/* ✅ Layer 0: Active Pill (Optimized Spring) */}
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="border-aurora-cyan/30 shadow-aurora-glow absolute inset-0 z-0 rounded-full border bg-white/10"
                transition={{
                  type: "spring",
                  stiffness: 260, // ✅ ลดจาก 380 เพื่อลดภาระการประมวลผลของ CPU
                  damping: 20,
                  mass: 0.5,
                }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
