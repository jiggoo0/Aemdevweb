/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navigation } from "@/constants/navigation"

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "shadow-luminous flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl",
        className
      )}
    >
      {navigation.main.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href)

        // 🚫 เช็คสถานะ Disabled
        if (item.disabled) {
          return (
            <span
              key={item.name}
              className="cursor-not-allowed px-5 py-2.5 text-[10px] font-black tracking-[0.25em] text-slate-700 uppercase opacity-50"
            >
              {item.name}
            </span>
          )
        }

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "group relative rounded-full px-5 py-2.5 text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-500 outline-none",
              isActive
                ? "text-aurora-cyan"
                : "text-slate-500 hover:text-slate-200"
            )}
          >
            {/* Layer 2: Text */}
            <span className="pointer-events-none relative z-20">
              {item.name}
            </span>

            {/* Layer 1: Hover Glow */}
            <span className="pointer-events-none absolute inset-0 z-10 rounded-full bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />

            {/* Layer 0: Active Pill */}
            {isActive && (
              <motion.span
                layoutId="nav-active-pill"
                className="border-aurora-cyan/30 shadow-aurora-glow absolute inset-0 z-0 rounded-full border bg-white/10"
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
