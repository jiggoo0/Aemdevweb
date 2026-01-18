/** @format */

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface AemBrandBadgeProps {
  className?: string
  withText?: boolean
}

/**
 * 💎 AemBrandBadge: The Kinetic Identity (Server-Optimized v.2026)
 * Refactored to native CSS animations for 100/100 PageSpeed score.
 */
export function AemBrandBadge({
  className,
  withText = true,
}: AemBrandBadgeProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group relative flex items-center gap-3 outline-none select-none md:gap-4",
        className
      )}
      aria-label="AemDevWeb Home"
    >
      {/* 🌌 1. The Kinetic Core (Logo) */}
      <div className="relative h-11 w-11 md:h-12 md:w-12">
        {/* Deep Ambient Glow: Layered behind everything */}
        <div className="bg-aurora-cyan/20 group-hover:bg-aurora-cyan/40 absolute inset-0 -z-10 rounded-full blur-2xl transition-all duration-700" />

        {/* Rotating border box using native CSS animation */}
        <div
          className="absolute inset-0 rounded-xl border border-white/10 bg-slate-950/50 backdrop-blur-sm transition-transform duration-[20s] group-hover:rotate-90"
          style={{ animation: "aurora 15s ease-in-out infinite" }}
        />

        <div className="relative flex h-full w-full items-center justify-center">
          {/* A Lettermark Engine */}
          <div className="relative">
            <span className="font-prompt text-2xl font-black tracking-tighter text-white italic transition-transform duration-500 group-hover:scale-110">
              A
            </span>
            {/* The "Dev Line" Accelerator: Use animate-pulse instead of framer-motion */}
            <div className="bg-aurora-cyan absolute -right-1 -bottom-1 h-2 w-2 animate-pulse rounded-full shadow-[0_0_15px_#7af3ff]" />
          </div>
        </div>

        {/* Orbit Ring (Show on Hover) */}
        <div className="border-aurora-cyan/0 group-hover:border-aurora-cyan/20 absolute inset-[-4px] rounded-xl border transition-all duration-700 group-hover:rotate-45" />
      </div>

      {/* ✍️ 2. The High-End Typography */}
      {withText && (
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden">
            {/* Native fade-in-up */}
            <div className="animate-in fade-in slide-in-from-bottom-2 fill-mode-forwards flex items-center duration-700">
              <span className="font-prompt text-xl font-black tracking-tighter text-white uppercase italic md:text-2xl">
                Aem
                <span className="text-aurora-cyan relative ml-0.5 inline-block">
                  Dev
                  {/* Underline Flow */}
                  <div className="from-aurora-cyan to-aurora-emerald absolute -bottom-1 left-0 h-[3px] w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full" />
                </span>
                <span className="text-slate-500 transition-colors duration-500 group-hover:text-white">
                  Web
                </span>
              </span>
            </div>
          </div>

          <div className="mt-0.5 flex items-center gap-2 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-aurora-cyan h-px w-3" />
            <span className="font-anuphan text-aurora-emerald text-[9px] font-black tracking-[0.4em] uppercase">
              Luminous Engine
            </span>
          </div>
        </div>
      )}

      {/* ⚡ 3. Global Scanline Effect (Subtle) */}
      <div className="from-aurora-cyan/0 via-aurora-cyan/5 to-aurora-cyan/0 pointer-events-none absolute -inset-x-4 -inset-y-2 bg-gradient-to-r opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
    </Link>
  )
}
