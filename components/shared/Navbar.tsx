/** @format */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { X } from "lucide-react" // ✅ เพิ่ม Icon สำหรับปุ่มปิด
import { cn } from "@/lib/utils"
import { navigation } from "@/constants/navigation"

interface NavbarProps {
  className?: string
  onClose?: () => void // ✅ เพิ่ม Prop สำหรับสั่งปิดเมนู
}

/**
 * 🍱 Navbar: User-Friendly Luminous Engine (v.2026)
 * ✅ Feature: Contextual Tooltips
 * ✅ Feature: Magic Pill Animation
 * ✅ Feature: Close Button Integration (แสดงเมื่อจำเป็น)
 */
export default function Navbar({ className, onClose }: NavbarProps) {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!navigation?.main) return null

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(5)
    }
  }

  return (
    <LayoutGroup id="luminous-desktop-nav">
      <nav
        className={cn(
          "shadow-luminous relative flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/40 p-1.5 backdrop-blur-xl",
          className
        )}
        aria-label="เมนูหลัก"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navigation.main.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href)

          if (item.disabled) return (
            <span
              key={item.name}
              className="cursor-not-allowed px-5 py-2.5 text-[10px] font-black tracking-[0.25em] text-slate-700 uppercase opacity-40 select-none"
            >
              {item.name}
            </span>
          )

          return (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                onClick={() => {
                  triggerHaptic()
                  if (onClose) onClose() // ✅ ปิดเมนูเมื่อมีการคลิกลิงก์
                }}
                className={cn(
                  "group relative z-10 block rounded-full px-5 py-2.5 text-[10px] font-black tracking-[0.25em] uppercase outline-none transition-all duration-500",
                  "focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  isActive
                    ? "text-aurora-cyan"
                    : "text-slate-400 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-20 whitespace-nowrap">
                  {item.name}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="shadow-aurora-glow absolute inset-0 z-0 rounded-full border border-aurora-cyan/30 bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {hoveredIndex === index && item.description && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="pointer-events-none absolute top-full left-1/2 z-[120] mt-4 w-52 -translate-x-1/2"
                  >
                    <div className="shadow-luminous relative rounded-xl border border-white/10 bg-slate-900/95 p-3 text-center backdrop-blur-md">
                      <p className="font-anuphan text-[11px] font-medium leading-relaxed text-slate-200">
                        {item.description}
                      </p>
                      <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-slate-900" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        {/* ❌ Close Button: แสดงผลเฉพาะเมื่อมีการส่งฟังก์ชัน onClose เข้ามาเท่านั้น */}
        {onClose && (
          <button
            onClick={() => {
              triggerHaptic()
              onClose()
            }}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:bg-white/10 hover:text-white active:scale-90"
            aria-label="ปิดเมนู"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </nav>
    </LayoutGroup>
  )
}
