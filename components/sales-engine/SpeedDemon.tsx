/** @format */
"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Zap,
  Trophy,
  Search,
  Smartphone,
  Gauge,
  type LucideIcon,
} from "lucide-react"

interface MetricItem {
  id: string
  label: string
  score: number
  icon: LucideIcon
  color: string
  delay: number
}

interface ScoreCardProps {
  metric: MetricItem
  isInView: boolean
}

const metrics: MetricItem[] = [
  {
    id: "performance",
    label: "Performance",
    score: 100,
    icon: Zap,
    color: "var(--aurora-cyan)",
    delay: 0,
  },
  {
    id: "accessibility",
    label: "Accessibility",
    score: 100,
    icon: Smartphone,
    color: "var(--aurora-emerald)",
    delay: 0.2,
  },
  {
    id: "seo",
    label: "SEO Support",
    score: 100,
    icon: Search,
    color: "var(--aurora-violet)",
    delay: 0.4,
  },
  {
    id: "best-practices",
    label: "Best Practices",
    score: 100,
    icon: Trophy,
    color: "var(--aurora-emerald)",
    delay: 0.6,
  },
]

/**
 * ⚡ SpeedDemon: Luminous Performance Showcase
 * ออกแบบมาเพื่อโชว์คะแนน PageSpeed 100 และความไวระดับปีศาจ
 */
export const SpeedDemon = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-background relative overflow-hidden py-32" ref={ref}>
      {/* 🌌 Luminous Background Decor: Layered behind everything */}
      <div className="aurora-bg pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="border-aurora-cyan/30 text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border bg-white/5 px-5 py-2 text-xs font-black tracking-[0.3em] uppercase backdrop-blur-xl"
          >
            <Gauge className="h-4 w-4 animate-pulse" />
            <span>Google PageSpeed Score</span>
          </motion.div>

          <h2 className="text-luminous mb-8 text-4xl tracking-tighter uppercase md:text-7xl">
            ความเร็วระดับ <span className="text-aurora-emerald">ปีศาจ</span>
          </h2>
          <p className="font-anuphan text-xl leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
            อย่าปล่อยให้ลูกค้าหลุดมือเพราะเว็บโหลดช้า เราการันตีคะแนน
            Performance ระดับท็อป{" "}
            <span className="font-bold text-white">(90-100)</span>{" "}
            เพื่อดันอันดับ SEO และยอดขาย
          </p>
        </div>

        {/* --- SCORE CARDS GRID --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <ScoreCard key={metric.id} metric={metric} isInView={isInView} />
          ))}
        </div>

        {/* --- PERFORMANCE COMPARISON BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card group shadow-luminous relative mt-20 overflow-hidden border-white/10 p-10 md:p-14"
        >
          {/* Ambient Glow behind bar */}
          <div className="bg-aurora-cyan/5 pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 blur-[80px]" />

          <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">
              ผลทดสอบความเร็ว (Load Time)
            </h3>
            <span className="rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
              ทดสอบผ่านเครือข่าย 4G Mobile
            </span>
          </div>

          <div className="space-y-12">
            {/* Competitor Bar (WordPress) */}
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">
                <span>เว็บไซต์ทั่วไป (WordPress / CMS)</span>
                <span className="text-rose-500">4.5s (ช้าจนลูกค้าหนี)</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full border border-white/5 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "85%" } : {}}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
                  className="h-full bg-rose-500/30"
                />
              </div>
            </div>

            {/* AemDevWeb Bar (Next.js 15) */}
            <div className="space-y-4">
              <div className="text-aurora-emerald flex justify-between text-[10px] font-black tracking-[0.25em] uppercase">
                <span className="flex items-center gap-2">
                  AemDevWeb Engine (v.2026){" "}
                  <Zap className="h-3.5 w-3.5 animate-pulse fill-current" />
                </span>
                <span className="text-white drop-shadow-[0_0_10px_rgba(122,243,255,0.5)]">
                  0.8s (เร็วระดับปีศาจ)
                </span>
              </div>
              <div className="shadow-aurora-glow relative h-6 w-full overflow-hidden rounded-full border border-white/5 bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "18%" } : {}}
                  transition={{ duration: 1.2, ease: "circOut", delay: 1.4 }}
                  className="from-aurora-cyan to-aurora-emerald absolute top-0 left-0 h-full bg-gradient-to-r"
                />
                {/* Sonic Pulse Effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={isInView ? { x: "400%" } : {}}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                    delay: 2.5,
                  }}
                  className="absolute top-0 h-full w-1/4 -skew-x-[30deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * 🧩 ScoreCard: Individual Metric Display
 */
const ScoreCard = ({ metric, isInView }: ScoreCardProps) => {
  return (
    <div className="glass-card group hover:border-aurora-cyan/30 relative flex flex-col items-center justify-center p-10 text-center transition-all duration-500 hover:-translate-y-3">
      {/* Hover Light Decor */}
      <div className="aurora-bg pointer-events-none absolute top-0 left-0 h-20 w-20 opacity-0 transition-opacity duration-700 group-hover:opacity-10" />

      <div className="relative mb-8 h-28 w-28">
        <svg
          className="h-full w-full -rotate-90 transform"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={metric.color}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.5, ease: "circOut", delay: metric.delay }}
            style={{ filter: `drop-shadow(0 0 10px ${metric.color})` }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black tracking-tighter text-white drop-shadow-sm">
            {metric.score}
          </span>
          <metric.icon className="mt-1 h-3.5 w-3.5 text-white/40 transition-colors duration-500 group-hover:text-white" />
        </div>
      </div>

      <h3 className="text-[10px] font-black tracking-[0.35em] text-slate-500 uppercase transition-colors duration-500 group-hover:text-slate-300">
        {metric.label}
      </h3>
    </div>
  )
}

export default SpeedDemon
