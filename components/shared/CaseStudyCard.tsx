/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Zap, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// 🎨 Theme Configuration (Defined outside for performance)
const themeConfig = {
  "aurora-cyan": {
    border: "hover:border-aurora-cyan/40",
    text: "text-aurora-cyan",
    hoverTitle: "group-hover:text-aurora-cyan",
    bg: "bg-aurora-cyan",
    fill: "fill-aurora-cyan",
    glow: "group-hover:shadow-aurora-glow",
  },
  "aurora-violet": {
    border: "hover:border-aurora-violet/40",
    text: "text-aurora-violet",
    hoverTitle: "group-hover:text-aurora-violet",
    bg: "bg-aurora-violet",
    fill: "fill-aurora-violet",
    glow: "group-hover:shadow-[0_0_50px_-10px_oklch(0.68_0.15_280_/_0.25)]",
  },
  "aurora-emerald": {
    border: "hover:border-aurora-emerald/40",
    text: "text-aurora-emerald",
    hoverTitle: "group-hover:text-aurora-emerald",
    bg: "bg-aurora-emerald",
    fill: "fill-aurora-emerald",
    glow: "group-hover:shadow-[0_0_50px_-10px_oklch(0.84_0.15_155_/_0.25)]",
  },
}

interface CaseStudyCardProps {
  title: string
  slug: string
  category: string
  image: string
  stats: { label: string; value: string }
  themeColor?: keyof typeof themeConfig
  priority?: boolean // ✅ Control LCP Loading Strategy
}

/**
 * 🏆 CaseStudyCard: Luminous Showcase Engine (v.2026)
 * Architecture: Next.js 15.x + Tailwind CSS 4.0
 * Concept: High-Conversion Visual Trust
 */
export function CaseStudyCard({
  title,
  slug,
  category,
  image,
  stats,
  themeColor = "aurora-cyan",
  priority = false,
}: CaseStudyCardProps) {
  const currentTheme = themeConfig[themeColor]

  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group bg-background shadow-luminous relative block overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:-translate-y-2",
        currentTheme.border
      )}
    >
      {/* 🖼️ Premium Image Layer (LCP Optimized) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        {/* Luminous Overlay: การไล่เฉดสีเพื่อให้ข้อความโดดเด่น */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-95" />
      </div>

      {/* ✨ Luminous Info Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-[75%] space-y-4">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-[10px] font-black tracking-[0.25em] uppercase backdrop-blur-xl transition-all duration-500 shadow-luminous",
                currentTheme.text,
                "group-hover:text-white group-hover:border-white/20"
              )}
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              {category}
            </span>
            <h3
              className={cn(
                "font-prompt text-3xl leading-[1.1] font-black tracking-tighter text-white uppercase transition-colors duration-500 md:text-4xl italic",
                currentTheme.hoverTitle
              )}
            >
              {title}
            </h3>
          </div>

          {/* ⚡ Performance Badge (Trust Signal) */}
          <div
            className={cn(
              "min-w-[110px] rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10",
              currentTheme.glow
            )}
          >
            <p className="font-anuphan mb-1.5 flex items-center justify-center gap-1.5 text-[9px] font-black tracking-widest text-slate-400 uppercase">
              <Zap
                className={cn(
                  "h-3 w-3 animate-pulse",
                  currentTheme.text,
                  currentTheme.fill
                )}
              />{" "}
              {stats.label}
            </p>
            <p className="font-prompt text-2xl font-black tracking-tighter text-white italic">
              {stats.value}
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 Floating Action Button */}
      <div
        className={cn(
          "shadow-aurora-glow absolute top-8 right-8 flex h-12 w-12 translate-y-6 scale-75 items-center justify-center rounded-2xl text-slate-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
          currentTheme.bg
        )}
      >
        <ArrowUpRight className="h-6 w-6 stroke-[3px]" />
      </div>

      {/* Bottom Glow Line Engine */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          currentTheme.bg
        )}
      />
    </Link>
  )
}
