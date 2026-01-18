/** @format */
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Users, Zap, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    id: 1,
    label: "ลูกค้าที่ไว้วางใจ",
    value: "150+",
    icon: Users,
    desc: "SME และบริษัทชั้นนำ",
    color: "text-aurora-cyan",
    glow: "shadow-[0_0_20px_rgba(122,243,255,0.3)]",
    delay: 0,
  },
  {
    id: 2,
    label: "สร้างยอดขายรวม",
    value: "50M+",
    icon: TrendingUp,
    desc: "จากลูกค้าทั้งหมด",
    color: "text-aurora-emerald",
    glow: "shadow-[0_0_20px_rgba(130,255,180,0.3)]",
    delay: 0.1,
  },
  {
    id: 3,
    label: "Google Score",
    value: "99/100",
    icon: Zap,
    desc: "ความเร็วเฉลี่ย (Mobile)",
    color: "text-aurora-cyan",
    glow: "shadow-[0_0_20px_rgba(122,243,255,0.3)]",
    delay: 0.2,
  },
  {
    id: 4,
    label: "ส่งงานตรงเวลา",
    value: "100%",
    icon: Award,
    desc: "ไม่เคยเท ไม่เคยทิ้งงาน",
    color: "text-aurora-emerald",
    glow: "shadow-[0_0_20px_rgba(130,255,180,0.3)]",
    delay: 0.3,
  },
]

/**
 * 📊 ImpactStats: Luminous Evidence Engine (v.2026)
 * ส่วนแสดงสถิติที่จูนมาเพื่อความน่าเชื่อถือและประสิทธิภาพสูงสุด
 */
export const ImpactStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="relative z-10 container mx-auto px-4">
      {/* 🌌 Luminous Background Decor: Layered behind everything */}
      <div className="bg-aurora-cyan/5 pointer-events-none absolute top-1/2 left-1/2 -z-20 h-full w-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-16">
        {stats.map((stat) => (
          <div key={stat.id} className="group relative text-center">
            {/* 💎 Icon Holder: Modern Glass Style */}
            <div
              className={cn(
                "mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-700",
                "group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/10",
                stat.glow
              )}
            >
              <stat.icon
                className={cn(
                  "h-7 w-7 transition-colors duration-500",
                  stat.color
                )}
              />
            </div>

            {/* ⚡ Value: Luminous Typography with Reflection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: stat.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "mb-3 text-4xl font-black tracking-tighter uppercase md:text-5xl lg:text-6xl",
                "bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              )}
            >
              {stat.value}
            </motion.div>

            {/* 📝 Info Area: Humanistic Friendly Design */}
            <div className="space-y-1">
              <p className="font-prompt group-hover:text-aurora-cyan text-sm font-black tracking-[0.2em] text-white uppercase opacity-90 transition-colors duration-300 md:text-base">
                {stat.label}
              </p>
              <p className="font-anuphan text-xs leading-relaxed font-medium text-slate-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:text-sm">
                {stat.desc}
              </p>
            </div>

            {/* Bottom Glow Indicator */}
            <div className="bg-aurora-cyan absolute -bottom-4 left-1/2 h-0.5 w-0 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:w-12 group-hover:opacity-50" />
          </div>
        ))}
      </div>
    </div>
  )
}
