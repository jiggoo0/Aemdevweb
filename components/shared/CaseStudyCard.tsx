/** @format */

"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react"

interface CaseStudyCardProps {
  slug: string
  title: string
  description: string
  image: string
  industry: string
  result?: string
  index?: number
}

/**
 * CaseStudyCard - ส่วนนำเสนอผลลัพธ์ความสำเร็จ (Strategic Success Node)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านกรณีศึกษาที่ประสบความสำเร็จจริง
 * มาตรฐาน: ความเร็วการโต้ตอบระดับสูงและการแสดงผลที่แม่นยำ
 */
export const CaseStudyCard = ({
  slug,
  title,
  description,
  image,
  industry,
  result,
  index = 0,
}: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="group flex flex-col overflow-hidden rounded-[3rem] border border-white/5 bg-slate-950 p-3 transition-all duration-700 hover:border-emerald-500/40 hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.2)]"
    >
      {/* 1. VISUAL PORTAL: ส่วนแสดงภาพผลงานที่โดดเด่น */}
      <Link
        href={`/case-studies/${slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-900"
      >
        <Image
          src={image || "/images/showcase/placeholder.webp"}
          alt={`AEMDEVWEB Business Case: ${title}`}
          fill
          className="object-cover opacity-50 transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/60 px-5 py-2 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase italic ring-1 ring-white/10 backdrop-blur-xl">
            <Sparkles size={10} className="animate-pulse" />
            {industry}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </Link>

      {/* 2. DATA HUB: ข้อมูลเชิงกลยุทธ์และผลลัพธ์ทางธุรกิจ */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <header className="mb-6 flex items-start justify-between gap-6">
          <Link href={`/case-studies/${slug}`} className="flex-1">
            <h3 className="font-heading text-3xl leading-[0.95] font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-emerald-400">
              {title}
            </h3>
          </Link>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-500 transition-all group-hover:rotate-12 group-hover:bg-emerald-500 group-hover:text-slate-950">
            <ExternalLink size={18} strokeWidth={2.5} />
          </div>
        </header>

        <p className="font-body mb-10 line-clamp-2 text-base leading-relaxed font-bold text-slate-400 transition-colors group-hover:text-slate-300">
          {description}
        </p>

        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 rounded-full bg-emerald-500/30" />
              <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase italic">
                Strategic Growth
              </span>
            </div>
            <div className="font-heading text-4xl font-black tracking-tighter text-emerald-500 italic md:text-5xl">
              {result || "Performance Optimized"}
            </div>
          </div>

          <Link
            href={`/case-studies/${slug}`}
            className="group/btn relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-white transition-all hover:bg-emerald-500 hover:text-slate-950 active:scale-90"
            aria-label={`Explore ${title} business case`}
          >
            <ArrowRight
              size={24}
              strokeWidth={3}
              className="relative z-10 transition-transform group-hover/btn:translate-x-1"
            />
            <div className="absolute inset-0 z-0 bg-emerald-500 opacity-0 blur-xl transition-opacity group-hover/btn:opacity-30" />
          </Link>
        </div>
      </div>

      {/* เส้นเน้นความเร็วระดับเสถียรสูงสุด */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-1000 ease-in-out group-hover:w-full" />
    </motion.article>
  )
}
