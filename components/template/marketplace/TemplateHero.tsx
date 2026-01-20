/** @format */

"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TemplateHeroProps {
  title: string
  subtitle?: string
  image?: string
  category?: string
  themeColor?: string
  className?: string
}

// ✅ [FIXED]: แยก Styles ออกมาภายนอกเพื่อป้องกัน Error TS7022 และ TS2448
const THEME_VARIANTS = {
  emerald: {
    glow: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    bgBadge: "bg-emerald-500/10",
    text: "text-emerald-400",
    shadow: "bg-emerald-500",
    bar: "bg-emerald-500/20",
  },
  blue: {
    glow: "bg-sky-500/20",
    border: "border-sky-500/30",
    bgBadge: "bg-sky-500/10",
    text: "text-sky-400",
    shadow: "bg-sky-500",
    bar: "bg-sky-500/20",
  },
  rose: {
    glow: "bg-rose-500/20",
    border: "border-rose-500/30",
    bgBadge: "bg-rose-500/10",
    text: "text-rose-400",
    shadow: "bg-rose-500",
    bar: "bg-rose-500/20",
  },
  indigo: {
    glow: "bg-indigo-500/20",
    border: "border-indigo-500/30",
    bgBadge: "bg-indigo-500/10",
    text: "text-indigo-400",
    shadow: "bg-indigo-500",
    bar: "bg-indigo-500/20",
  },
  amber: {
    glow: "bg-amber-500/20",
    border: "border-amber-500/30",
    bgBadge: "bg-amber-500/10",
    text: "text-amber-400",
    shadow: "bg-amber-500",
    bar: "bg-amber-500/20",
  },
  slate: {
    glow: "bg-slate-500/20",
    border: "border-slate-500/30",
    bgBadge: "bg-slate-500/10",
    text: "text-slate-400",
    shadow: "bg-slate-500",
    bar: "bg-slate-500/20",
  },
} as const

/**
 * 🚀 TemplateHero Specialist Edition
 * ออกแบบมาเพื่อสร้าง Impact แรกพบ (First Impression)
 * ใช้โครงสร้างสถาปัตยกรรมความเร็วสูง โหลดไวในพริบตา
 */
export const TemplateHero = ({
  title,
  subtitle,
  image,
  category,
  themeColor = "emerald",
  className,
}: TemplateHeroProps) => {
  // ✅ [FIXED]: เรียกใช้จาก THEME_VARIANTS โดยตรง
  const themeStyles =
    THEME_VARIANTS[themeColor as keyof typeof THEME_VARIANTS] ||
    THEME_VARIANTS.emerald

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-24",
        className
      )}
    >
      {/* 🏗️ Infrastructure Layer: ระบบแสงและเงาสไตล์ Industrial */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:60px_60px] opacity-[0.04]" />
        <div
          className={cn(
            "pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-[140px]",
            themeStyles.glow
          )}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* 1. Category Badge: ตัวระบุหมวดหมู่สถาปัตยกรรม */}
          {category && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <Badge
                variant="outline"
                className={cn(
                  "rounded-full px-8 py-2.5 text-[11px] font-black tracking-[0.3em] uppercase backdrop-blur-xl",
                  themeStyles.border,
                  themeStyles.bgBadge,
                  themeStyles.text
                )}
              >
                ✨ {category} Collection
              </Badge>
            </motion.div>
          )}

          {/* 2. Main Title: หัวข้อดุดัน สไตล์ AEMDevWeb */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-prompt mb-8 max-w-6xl text-5xl leading-[1] font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-9xl"
          >
            {title}
          </motion.h1>

          {/* 3. Subtitle: ภาษาที่แปลเทคเป็นผลลัพธ์ธุรกิจ */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-anuphan mb-14 max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {/* 4. Browser Mockup Showcase: จุดขายความเร็วระดับ Specialist */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="group relative mt-16 w-full max-w-7xl"
            >
              {/* Aura Glow Effect */}
              <div
                className={cn(
                  "absolute -inset-4 rounded-[3rem] opacity-40 blur-3xl transition duration-1000 group-hover:opacity-60",
                  themeStyles.shadow
                )}
              />

              {/* Specialist Browser Window */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl backdrop-blur-md">
                {/* Toolbar */}
                <div className="flex items-center gap-3 border-b border-white/5 bg-slate-950/90 px-8 py-5">
                  <div className="flex gap-2.5">
                    <div className="h-3.5 w-3.5 rounded-full border border-red-500/50 bg-red-500/20" />
                    <div className="h-3.5 w-3.5 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                    <div className="h-3.5 w-3.5 rounded-full border border-green-500/50 bg-green-500/20" />
                  </div>
                  <div
                    className={cn(
                      "mx-auto flex h-9 w-full max-w-lg items-center justify-center rounded-xl font-mono text-[11px] text-slate-500 italic",
                      themeStyles.bar
                    )}
                  >
                    https://www.aemdevweb.com/preview/
                    {title.toLowerCase().replace(/\s+/g, "-")}
                  </div>
                </div>

                {/* Main Visual Content (LCP Optimized) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-[2000ms] group-hover:scale-105"
                    sizes="(max-width: 1400px) 100vw, 1400px"
                  />
                  {/* Speed Badge: เครื่องหมายยืนยันความแรง */}
                  <div className="absolute right-8 bottom-8">
                    <div className="rounded-full border border-white/10 bg-slate-950/80 px-5 py-2 backdrop-blur-md">
                      <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                        99/100 LCP PERFORMANCE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
