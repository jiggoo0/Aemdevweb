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
  themeColor?: string // เพิ่มเพื่อรับค่าสีจากข้อมูลเทมเพลต
  className?: string
}

// 🔑 เปลี่ยนเป็น Named Export เพื่อป้องกัน Error: Element type is invalid
export function TemplateHero({
  title,
  subtitle,
  image,
  category,
  themeColor = "emerald", // Default เป็น emerald
  className,
}: TemplateHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24",
        className
      )}
    >
      {/* 🎨 Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:50px_50px] opacity-[0.03]" />

        {/* Dynamic Gradient Glows */}
        <div
          className={cn(
            "pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]",
            `bg-${themeColor}-500/20`
          )}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* 1. Category Badge */}
          {category && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge
                variant="outline"
                className={cn(
                  "px-4 py-1 text-sm backdrop-blur-md transition-colors duration-500",
                  `border-${themeColor}-500/30 bg-${themeColor}-500/10 text-${themeColor}-400`
                )}
              >
                ✨ {category} Collection
              </Badge>
            </motion.div>
          )}

          {/* 2. Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 max-w-4xl text-4xl leading-[1.1] font-bold tracking-tight text-balance text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* 3. Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 max-w-2xl text-lg leading-relaxed text-balance text-slate-400"
            >
              {subtitle}
            </motion.p>
          )}

          {/* 4. Hero Image (Browser Mockup) */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
              className="group relative mt-8 w-full max-w-5xl"
            >
              {/* Dynamic Glow Behind Image */}
              <div
                className={cn(
                  "absolute -inset-1 rounded-3xl opacity-30 blur-xl transition duration-1000 group-hover:opacity-50",
                  `bg-${themeColor}-500`
                )}
              />

              {/* Browser Window Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                {/* Browser Bar */}
                <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/50 px-4 py-3 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                    <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                    <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
                  </div>
                  <div className="mx-auto flex h-6 w-1/2 max-w-[300px] items-center justify-center rounded-md bg-slate-800/50 font-mono text-[10px] tracking-tighter text-slate-500">
                    https://aemdevweb.com/preview/
                    {title.toLowerCase().replace(/\s+/g, "-")}
                  </div>
                </div>

                {/* Image Content */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
