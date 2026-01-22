/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  ImageOff,
  BarChart3,
} from "lucide-react"

interface CaseStudyCardProps {
  title: string
  description: string
  image?: string
  slug: string
  industry: string
  result?: string // เช่น "Performance 100", "LCP 1.2s"
  index?: number
}

/**
 * 🏗️ CaseStudyCard — "High-Performance Showcase"
 * เน้นการโชว์ผลงานพร้อมตัวเลขความสำเร็จ เพื่อดึงดูดลูกค้าที่ต้องการคุณภาพระดับพรีเมียม
 * รองรับการทำงานร่วมกับ Next.js Image และ Framer Motion
 */
const CaseStudyCard = ({
  title,
  description,
  image,
  slug,
  industry,
  result = "Performance 100",
  index = 0,
}: CaseStudyCardProps) => {
  // 🛡️ Image Safety Check
  const imageSrc =
    image && image.trim() !== "" ? image : "/images/showcase/placeholder.webp"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative h-[520px] overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl transition-all duration-500 hover:-translate-y-3"
    >
      {/* 🖼️ Background Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover opacity-50 grayscale-[50%] transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900">
            <ImageOff className="text-slate-700" size={48} />
          </div>
        )}
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
      </div>

      {/* 🏷️ Top Badges (Industry & Result) */}
      <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
          <ShieldCheck size={12} className="text-emerald-400" />
          <span className="text-[10px] font-bold tracking-widest text-white uppercase">
            {industry}
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 ring-1 ring-emerald-500/30 backdrop-blur-md">
          <BarChart3 size={12} className="text-emerald-400" />
          <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
            {result}
          </span>
        </div>
      </div>

      {/* 📝 Content Area */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-10">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic transition-colors duration-500 group-hover:text-emerald-400 md:text-4xl">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-200">
              {description}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-6">
            <Link
              href={`/case-studies/${slug}`}
              className="group/link inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-white uppercase transition-all hover:text-emerald-400"
            >
              Case Study
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
              />
            </Link>

            {/* Micro Interaction: Speed Indicator */}
            <div className="flex items-center gap-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Zap size={14} className="fill-emerald-500 text-emerald-500" />
              <span className="text-[10px] font-black tracking-tighter text-emerald-500 uppercase">
                Fast Launch
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🌑 Emerald Glow Effect on Hover */}
      <div
        className="absolute -inset-1 z-10 bg-gradient-to-tr from-emerald-500/10 to-blue-500/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default CaseStudyCard
