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
 * ปรับปรุง: ใช้ Named Export เพื่อแก้ปัญหา Import error ใน Page.tsx
 */
export function LineLeadForm({
  variant = "button",
  label = "ปรึกษาโปรเจกต์ฟรี",
  className,
  showIcon = true,
}: LineLeadFormProps) {
  // 🔗 URL สำหรับปิดการขาย
  const lineUrl = siteConfig.links.line || "#"

  if (variant === "minimal") {
    return (
      <Link
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "hover:text-aurora-cyan inline-flex items-center gap-2 text-sm font-bold transition-colors",
          className
        )}
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    )
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "glass-card group hover:border-aurora-emerald/30 relative overflow-hidden p-8 text-center transition-all",
          className
        )}
      >
        <div className="aurora-bg -top-10 -right-10 h-32 w-32 opacity-10" />
        <div className="relative z-10">
          <MessageCircle className="text-aurora-emerald mx-auto mb-4 h-12 w-12" />
          <h3 className="mb-2 text-xl font-bold text-white">
            พร้อมเริ่มโปรเจกต์หรือยัง?
          </h3>
          <p className="font-anuphan mb-6 text-sm text-slate-400">
            คุยโจทย์ธุรกิจกับพี่เอ็มได้โดยตรง พร้อมประเมินราคาเบื้องต้นทันที
          </p>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luminous w-full shadow-lg"
          >
            {label}
          </a>
        </div>
      </div>
    )
  }

  // Default: Button Variant
  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-luminous shadow-aurora-glow group inline-flex h-14 items-center justify-center gap-3 px-8 text-base font-black tracking-wider transition-all hover:scale-105 active:scale-95",
        className
      )}
    >
      {showIcon && (
        <MessageCircle className="h-5 w-5 fill-current transition-transform group-hover:rotate-12" />
      )}
      <span className="uppercase">{label}</span>
      <Sparkles className="h-4 w-4 animate-pulse opacity-50" />
    </a>
  )
}
