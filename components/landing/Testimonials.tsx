/** @format */
"use client"

import React from "react"
import { Star, Quote, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
// ตรวจสอบให้แน่ใจว่าได้ทำการ Export testimonials จาก constants แล้ว
import { testimonials } from "@/constants/testimonials/testimonials"

/**
 * ⭐ Testimonials Component: Luminous Edition (v.2026)
 * จัดการส่วนรีวิวลูกค้าให้ดูพรีเมียมและโหลดไวด้วยระบบ Modern Masonry
 */
export const Testimonials = () => {
  return (
    <section className="bg-background relative overflow-hidden py-32">
      {/* 🌌 Aurora Ambient Background: แสงฟุ้งจางๆ เลเยอร์หลังสุด */}
      <div className="aurora-bg top-1/2 left-1/2 -z-10 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section: Luminous Typography */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-2xl">
            <Sparkles className="h-4 w-4 animate-pulse" /> Real Success Stories
          </div>
          <h2 className="text-luminous mb-8 text-5xl uppercase md:text-7xl">
            Trusted by <br />{" "}
            <span className="text-aurora-emerald">Industry Leaders</span>
          </h2>
          <p className="font-anuphan text-xl leading-relaxed font-medium text-slate-400 opacity-90 md:text-2xl">
            ความภูมิใจของเรา
            คือการได้เห็นธุรกิจของคุณเติบโตด้วยเทคโนโลยีที่เหนือกว่า
          </p>
        </div>

        {/* Testimonials Grid: Optimized Modern Masonry */}
        <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={cn(
                "glass-card group relative break-inside-avoid p-10 transition-all duration-700",
                "hover:shadow-luminous hover:border-aurora-cyan/30 hover:-translate-y-3"
              )}
            >
              {/* Decorative Quote Icon: Aurora Accent */}
              <Quote className="text-aurora-cyan/5 group-hover:text-aurora-cyan/15 absolute top-10 right-10 h-12 w-12 transition-colors duration-500" />

              {/* Stars Score: Luminous Emerald Effect */}
              <div className="mb-8 flex gap-1.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-aurora-emerald text-aurora-emerald h-4 w-4 drop-shadow-[0_0_8px_rgba(130,255,180,0.5)]"
                  />
                ))}
              </div>

              {/* Content Block */}
              <blockquote className="font-anuphan mb-10 text-xl leading-relaxed font-medium text-slate-200 italic opacity-90 transition-opacity group-hover:opacity-100">
                "{item.content}"
              </blockquote>

              {/* Author Profile: Luminous Style */}
              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="from-aurora-cyan to-aurora-violet shadow-aurora-glow h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-tr p-[1.5px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[calc(1rem+1px)] bg-slate-900 text-lg font-black text-white uppercase">
                    {item.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="group-hover:text-aurora-cyan text-lg font-bold tracking-tight text-white transition-colors duration-300">
                    {item.author}
                  </p>
                  <p className="text-aurora-emerald/70 mt-1 text-[10px] font-black tracking-[0.25em] uppercase">
                    {item.role}
                    {item.company && (
                      <span className="mx-1 text-slate-600">•</span>
                    )}{" "}
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
