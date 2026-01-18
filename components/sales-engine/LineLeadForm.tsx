/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/constants/site-config"

interface LineLeadFormProps {
  variant?: "button" | "card" | "minimal"
  label?: string
  className?: string
  showIcon?: boolean
}

/**
 * 🟢 LineLeadForm: High-Conversion Closing Engine
 * ตัวแปรสำคัญที่ใช้ปิดการขายผ่าน Line OA
 * ✅ Optimized: ใช้ Next/Link และเพิ่ม Micro-interactions เพื่อ CTR สูงสุด
 */
export function LineLeadForm({
  variant = "button",
  label = "ปรึกษาโปรเจกต์ฟรี",
  className,
  showIcon = true,
}: LineLeadFormProps) {
  // 🔗 URL สำหรับปิดการขาย (Fallback to '#' if undefined)
  const lineUrl = siteConfig.links.line || "#"

  // 1. Minimal Variant (Text Link)
  if (variant === "minimal") {
    return (
      <Link
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white",
          className
        )}
      >
        <span className="decoration-aurora-cyan/50 decoration-2 underline-offset-4 group-hover:underline">
          {label}
        </span>
        <ArrowRight className="text-aurora-cyan h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    )
  }

  // 2. Card Variant (Sidebar / Section Insert)
  if (variant === "card") {
    return (
      <div
        className={cn(
          "glass-card group hover:border-aurora-emerald/30 relative overflow-hidden p-8 text-center transition-all duration-500 hover:shadow-luminous",
          className
        )}
      >
        <div className="bg-aurora-emerald/10 absolute -top-10 -right-10 h-32 w-32 blur-3xl transition-opacity group-hover:opacity-100" />
        <div className="relative z-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner">
            <MessageCircle className="text-aurora-emerald h-7 w-7" />
          </div>
          <h3 className="font-prompt mb-2 text-xl font-black text-white uppercase italic">
            พร้อมเริ่มโปรเจกต์หรือยัง?
          </h3>
          <p className="font-anuphan mb-6 text-sm font-medium text-slate-400">
            คุยโจทย์ธุรกิจกับพี่เอ็มได้โดยตรง พร้อมประเมินราคาเบื้องต้นทันที
          </p>
          <Link
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous flex w-full items-center justify-center gap-2 shadow-lg"
          >
            {label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    )
  }

  // 3. Default: Main CTA Button
  return (
    <Link
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-luminous shadow-aurora-glow group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden px-8 text-base font-black tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-95",
        className
      )}
    >
      {/* Shine Effect Animation */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:animate-shine" />

      {showIcon && (
        <MessageCircle className="h-5 w-5 fill-current transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
      )}
      <span className="relative uppercase">{label}</span>
      <Sparkles className="text-aurora-cyan h-4 w-4 animate-pulse opacity-70" />
    </Link>
  )
}
