/** @format */
import React from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Code2,
  Gauge,
  Zap,
  LucideIcon,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 💎 ServiceCard Props Interface
 */
export interface ServiceCardProps {
  id?: string
  slug: string
  title: string
  description: string
  iconName?: "Rocket" | "ShieldCheck" | "Code2" | "Gauge" | "Zap"
  icon?: LucideIcon
  priceDisplay: string
  features: string[]
  isFeatured?: boolean
  className?: string
}

/**
 * 🗺️ Icon Mapping Dictionary
 */
const iconMap: Record<string, LucideIcon> = {
  Rocket,
  ShieldCheck,
  Code2,
  Gauge,
  Zap,
  Default: Zap,
}

/**
 * 💎 ServiceCard: Luminous Server Edition (v.2026)
 * ออกแบบมาเพื่อสร้างความน่าเชื่อถือและปิดการขายด้วย Visual ที่ทรงพลัง
 * ✅ Optimized: PageSpeed 100 | CSS-Driven transitions
 */
export const ServiceCard = ({
  slug,
  title,
  description,
  iconName,
  icon,
  priceDisplay,
  features,
  isFeatured = false,
  className,
}: ServiceCardProps) => {
  // เลือกใช้ Icon ตามลำดับความสำคัญ (Prop > Mapping > Default)
  const IconComponent =
    icon || (iconName ? iconMap[iconName] || iconMap.Default : iconMap.Default)

  return (
    <Link
      href={`/services/${slug}`}
      className={cn("group relative block h-full outline-none", className)}
      aria-label={`ดูรายละเอียดบริการ ${title}`}
    >
      {/* 🌌 Aurora Glow Effect: แสดงผลเฉพาะแพ็กเกจแนะนำ (Featured) */}
      {isFeatured && (
        <div className="from-aurora-cyan/20 via-aurora-emerald/20 to-aurora-violet/20 pointer-events-none absolute -inset-1 -z-10 rounded-[2.25rem] bg-gradient-to-r opacity-50 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
      )}

      {/* 🏷️ Luminous Popular Badge */}
      {isFeatured && (
        <div className="pointer-events-none absolute -top-4 left-1/2 z-20 -translate-x-1/2">
          <span className="bg-aurora-emerald shadow-aurora-glow inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest whitespace-nowrap text-slate-950 uppercase italic">
            <Sparkles className="h-3 w-3 animate-pulse" /> Popular Choice
          </span>
        </div>
      )}

      <article
        className={cn(
          "glass-card relative flex h-full flex-col overflow-hidden p-8 transition-all duration-700",
          isFeatured
            ? "border-aurora-cyan/40 shadow-luminous bg-white/[0.06]"
            : "hover:border-aurora-cyan/30 hover:shadow-luminous"
        )}
      >
        {/* --- 1. Header: Luminous Icon & Price --- */}
        <div className="mb-8 flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 transition-all duration-500",
              isFeatured
                ? "bg-aurora-cyan/10 text-aurora-cyan shadow-aurora-glow"
                : "group-hover:bg-aurora-cyan/10 group-hover:text-aurora-cyan group-hover:shadow-aurora-glow bg-white/5 text-slate-400"
            )}
          >
            <IconComponent className="h-7 w-7" />
          </div>

          <div className="text-right">
            <p className="font-prompt mb-1 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
              Starting at
            </p>
            <p className="font-prompt text-2xl font-black tracking-tighter text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {priceDisplay}
            </p>
          </div>
        </div>

        {/* --- 2. Body Content --- */}
        <h3 className="font-prompt group-hover:text-aurora-cyan mb-4 text-2xl leading-none font-black tracking-tight text-white uppercase transition-colors duration-500 italic">
          {title}
        </h3>

        <p className="font-anuphan mb-8 line-clamp-2 text-base leading-relaxed font-medium text-slate-400 opacity-85 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>

        <div className="mb-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

        {/* --- 3. Features Checklist --- */}
        <ul className="mb-10 flex-1 space-y-4">
          {features?.slice(0, 4).map((feature, idx) => (
            <li
              key={idx}
              className="font-anuphan group/item flex items-start gap-3 text-sm font-medium text-slate-300 md:text-base"
            >
              <CheckCircle2 className="text-aurora-emerald h-5 w-5 shrink-0 opacity-40 transition-opacity group-hover/item:opacity-100" />
              <span className="leading-tight transition-colors duration-300 group-hover/item:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* --- 4. Footer CTA --- */}
        <div className="mt-auto">
          <div
            className={cn(
              "flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-[11px] font-black tracking-[0.25em] uppercase transition-all duration-500",
              isFeatured
                ? "bg-aurora-cyan shadow-aurora-glow text-slate-950 hover:scale-[1.03] active:scale-95"
                : "group-hover:bg-aurora-cyan group-hover:shadow-aurora-glow border border-white/10 bg-white/5 text-slate-300 group-hover:text-slate-950"
            )}
          >
            View Solution
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ServiceCard
