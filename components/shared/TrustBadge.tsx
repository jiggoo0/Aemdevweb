/** @format */
"use client"

import React from "react"
import { cn } from "@/lib/utils"
import {
  Briefcase,
  Building2,
  Globe2,
  LayoutTemplate,
  ShieldCheck,
  Zap,
  LucideIcon,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"

interface Brand {
  name: string
  icon: LucideIcon
}

/**
 * 🛡️ TrustBadge: Luminous Edition
 * ยกระดับความน่าเชื่อถือด้วยระบบแสง Aurora และ Weightless Design
 */
export function TrustBadge({ className }: { className?: string }) {
  const brands: Brand[] = [
    { name: "TechGrowth", icon: Zap },
    { name: "SME Inter", icon: Globe2 },
    { name: "BuildPlus", icon: Building2 },
    { name: "SecurePay", icon: ShieldCheck },
    { name: "DesignLab", icon: LayoutTemplate },
    { name: "ConsultPro", icon: Briefcase },
  ]

  return (
    <section
      className={cn(
        "bg-background relative w-full overflow-hidden border-y border-white/5 py-16",
        className
      )}
    >
      {/* 🌌 Aurora Ambient Light: แสงจางๆ เพื่อลบความหมองของ Section */}
      <div className="aurora-bg top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Label: ใช้ฟอนต์พรีเมียมสไตล์ Luminous */}
        <div className="mb-12 flex flex-col items-center">
          <div className="text-aurora-cyan shadow-aurora-glow mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Verified Partners
          </div>
          <p className="font-anuphan text-center text-sm font-medium tracking-wide text-slate-500 opacity-80 md:text-base">
            ได้รับความไว้วางใจจากธุรกิจชั้นนำกว่า{" "}
            <span className="font-bold text-white">50+ แห่ง</span> ทั่วประเทศ
          </p>
        </div>

        {/* 🔄 Luminous Logo Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => {
            const Icon = brand.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group flex cursor-default flex-col items-center justify-center gap-4 transition-all duration-500"
              >
                <div className="relative">
                  {/* High-Performance Glow on Hover */}
                  <div className="bg-aurora-cyan/20 absolute inset-0 scale-150 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Glass Box for Icon */}
                  <div className="shadow-luminous group-hover:border-aurora-cyan/40 relative flex h-16 w-16 transform items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/10">
                    <Icon
                      className="group-hover:text-aurora-cyan h-8 w-8 text-slate-500 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Brand Name: ใช้ Anuphan เพื่อความนุ่มนวล */}
                <span className="font-anuphan text-xs font-black tracking-[0.2em] text-slate-500 uppercase transition-colors group-hover:text-white">
                  {brand.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
