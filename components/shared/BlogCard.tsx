/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Hash, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
// ตรวจสอบว่ามี Type Definition นี้อยู่จริง หรือถ้าไม่มีให้สร้าง Interface ภายในไฟล์ได้เลย
import { type BlogPostProps } from "@/types"

/**
 * 📝 BlogCard: Luminous Server Edition (v.2026)
 * ปรับปรุงโครงสร้างเพื่อรองรับ SEO และความเร็วในการแสดงผลสูงสุด
 * ✅ Optimized: Next.js 15.x + Tailwind CSS 4.0
 */
export function BlogCard({
  slug,
  title,
  description,
  coverImage,
  date,
  category,
  readingTime = "5 min read",
  className,
}: BlogPostProps & { className?: string }) {
  // Format Date Logic (Safe Handling)
  const formattedDate = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn("group block h-full outline-none", className)}
    >
      <article className="glass-card hover:border-aurora-cyan/30 hover:shadow-luminous relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-700 hover:-translate-y-3">
        {/* --- 1. Image Section: Luminous Overlay (Optimized LCP) --- */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
            // ✅ Sizes Optimization: ตรงตาม Breakpoints ของ Tailwind Grid
            // Mobile (1 col) -> 100vw
            // Tablet (2 cols) -> 50vw
            // Desktop (3 cols) -> 33vw
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Gradient Shade: เพิ่มมิติความลึกเพื่อให้ Badge อ่านง่าย */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />

          {/* Category Badge: Luminous Glass Style */}
          <div className="absolute top-5 left-5 z-10">
            <span className="text-aurora-cyan shadow-aurora-glow inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-xl transition-all group-hover:border-white/20">
              <Hash className="h-3 w-3" />
              {category || "Insight"}
            </span>
          </div>
        </div>

        {/* --- 2. Content Section: Humanistic Typography --- */}
        <div className="flex flex-1 flex-col p-8 md:p-10">
          {/* Meta Info: Minimal & Bright */}
          <div className="mb-6 flex items-center gap-5 text-[10px] font-black tracking-[0.25em] text-slate-500 uppercase">
            <div className="group-hover:text-aurora-emerald flex items-center gap-2 transition-colors duration-500">
              <Calendar className="text-aurora-emerald/60 h-3.5 w-3.5" />
              <time dateTime={date}>{formattedDate}</time>
            </div>
            <div className="group-hover:text-aurora-cyan flex items-center gap-2 transition-colors duration-500">
              <Clock className="text-aurora-cyan/60 h-3.5 w-3.5" />
              <span>{readingTime}</span>
            </div>
          </div>

          {/* Title: Strong Luminous Style (Prompt Font) */}
          <h3 className="font-prompt group-hover:text-aurora-cyan mb-4 line-clamp-2 text-2xl leading-[1.2] font-black tracking-tighter text-white uppercase italic transition-colors duration-500">
            {title}
          </h3>

          {/* Description: Friendly Anuphan Font */}
          <p className="font-anuphan mb-8 line-clamp-3 flex-1 text-base leading-relaxed font-medium text-slate-400 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {description}
          </p>

          {/* --- 3. Action Link: Luminous Footer --- */}
          <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
            <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase transition-all duration-500 group-hover:text-white">
              Read Insight{" "}
              <Sparkles className="text-aurora-cyan h-3 w-3 animate-pulse opacity-0 group-hover:opacity-100" />
            </span>
            <div className="group-hover:bg-aurora-cyan group-hover:shadow-aurora-glow flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:text-slate-950">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
