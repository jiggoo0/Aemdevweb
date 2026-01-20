/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, Search, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

// 🛡️ ข้อมูล Trust Badges ที่เน้นจุดแข็งของแบรนด์นายเอ็มซ่ามากส์
const trustItems = [
  {
    icon: Zap,
    label: "Next.js 16",
    subLabel: "Latest Stack",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
  {
    icon: Search,
    label: "SEO Expert",
    subLabel: "AI-Ready",
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    icon: ShieldCheck,
    label: "Secure Code",
    subLabel: "Industrial",
    color: "text-indigo-500",
    bg: "bg-indigo-500/5",
  },
  {
    icon: BarChart3,
    label: "Score 100",
    subLabel: "PageSpeed",
    color: "text-orange-500",
    bg: "bg-orange-500/5",
  },
]

interface TrustBadgeProps {
  variant?: "horizontal" | "grid"
  className?: string
}

/**
 * 🏗️ TrustBadge Specialist Edition (v2026)
 * [FIXED]: เปลี่ยนเป็น Default Export เพื่อรองรับระบบนำเข้าของหน้า Contact และหน้าอื่นๆ
 * ปรับปรุง Visual Hierarchy ให้ดูพรีเมียมและเน้นความน่าเชื่อถือระดับอุตสาหกรรม
 */
const TrustBadge = ({ variant = "horizontal", className }: TrustBadgeProps) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 md:gap-8",
        variant === "grid" ? "grid grid-cols-2 md:grid-cols-4" : "",
        className
      )}
    >
      {trustItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/50 p-3 pr-6 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5"
        >
          {/* 🧩 Icon Box: Interactive Effect */}
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0F172A] group-hover:text-white",
              item.bg,
              item.color
            )}
          >
            <item.icon className="h-5 w-5" />
          </div>

          {/* 📄 Label Area: Sharp Typography */}
          <div className="flex flex-col">
            <span className="font-prompt text-[11px] font-black tracking-wider text-[#0F172A] uppercase">
              {item.label}
            </span>
            <span className="font-anuphan text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              {item.subLabel}
            </span>
          </div>
        </motion.div>
      ))}

      {/* 🚀 Specialist Indicator (Floating Label) */}
      <div
        className="mx-4 hidden h-10 w-px bg-slate-100 lg:block"
        aria-hidden="true"
      />

      <div className="flex items-center gap-4">
        {/* User Avatars Placeholder (Industrial Partners) */}
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 shadow-sm"
            >
              <div className="h-full w-full animate-pulse rounded-full bg-slate-200" />
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <span className="font-prompt text-[10px] font-black tracking-tighter text-emerald-500 uppercase italic">
            Trusted by SME & Factories
          </span>
          <span className="font-anuphan text-[8px] font-bold tracking-widest text-slate-400 uppercase">
            Verified Specialist V. 2026
          </span>
        </div>
      </div>
    </div>
  )
}

/**
 * ✅ หัวใจสำคัญ: ต้องใช้ Default Export เพื่อให้ตรงตามคำสั่งเรียกใช้ใน Page อื่นๆ
 * และป้องกันปัญหา Element type is invalid (undefined)
 */
export default TrustBadge
