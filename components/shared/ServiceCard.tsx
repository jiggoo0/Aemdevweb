/** @format */
"use client"

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

export interface ServiceCardProps {
  id?: string
  slug: string
  title: string
  description: string
  iconName?: string
  icon?: LucideIcon
  priceDisplay: string
  features: string[]
  isFeatured?: boolean
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  ShieldCheck,
  Code2,
  Gauge,
  Zap,
  Default: Zap,
}

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
  const IconComponent =
    icon || (iconName ? iconMap[iconName] || iconMap.Default : iconMap.Default)

  return (
    <Link
      href={`/services/${slug}`}
      className={cn("group relative block h-full", className)}
    >
      {/* 🌌 Aurora Glow behind featured card */}
      {isFeatured && (
        <div className="from-aurora-cyan/20 via-aurora-emerald/20 to-aurora-violet/20 absolute -inset-1 rounded-[2.2rem] bg-gradient-to-r opacity-50 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
      )}

      {/* 🏷️ Luminous Featured Badge */}
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
          <span className="bg-aurora-emerald shadow-aurora-glow inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest whitespace-nowrap text-slate-950 uppercase">
            <Sparkles className="h-3 w-3 animate-pulse" /> Popular Choice
          </span>
        </div>
      )}

      <article
        className={cn(
          "glass-card relative flex h-full flex-col overflow-hidden p-8 transition-all duration-700",
          isFeatured
            ? "border-aurora-cyan/30 shadow-luminous bg-white/10"
            : "hover:border-aurora-cyan/20 hover:shadow-luminous"
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
            <p className="mb-1 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
              Starting at
            </p>
            <p className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              {priceDisplay}
            </p>
          </div>
        </div>

        {/* --- 2. Body: Humanistic Typography --- */}
        <h3 className="font-prompt group-hover:text-aurora-cyan mb-4 text-2xl leading-none font-black tracking-tight text-white uppercase transition-colors">
          {title}
        </h3>

        <p className="font-anuphan mb-8 line-clamp-2 text-base leading-relaxed font-medium text-slate-400 opacity-80 transition-opacity group-hover:opacity-100">
          {description}
        </p>

        <div className="mb-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

        {/* --- 3. Features: Clean & Luminous --- */}
        <ul className="mb-10 flex-1 space-y-4">
          {features?.slice(0, 4).map((feature, idx) => (
            <li
              key={idx}
              className="font-anuphan group/item flex items-start gap-3 text-sm font-medium text-slate-300 md:text-base"
            >
              <CheckCircle2 className="text-aurora-emerald h-5 w-5 shrink-0 opacity-60 transition-opacity group-hover/item:opacity-100" />
              <span className="leading-tight transition-colors group-hover/item:text-white">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* --- 4. Footer: Call to Action --- */}
        <div className="mt-auto">
          <div
            className={cn(
              "flex w-full items-center justify-center gap-3 rounded-2xl py-4 text-sm font-black tracking-widest uppercase transition-all duration-500",
              isFeatured
                ? "bg-aurora-cyan shadow-aurora-glow text-slate-950 hover:scale-105"
                : "group-hover:bg-aurora-cyan group-hover:shadow-aurora-glow border border-white/5 bg-white/5 text-slate-300 group-hover:text-slate-950"
            )}
          >
            View Solution
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ServiceCard
