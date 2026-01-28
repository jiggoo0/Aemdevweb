/** @format */

"use client"

import React from "react"
import {
  Zap,
  Target,
  MessageSquare,
  ArrowRight,
  Star,
  Menu,
  type LucideIcon,
} from "lucide-react"
// [FIX]: เปลี่ยนพิกัดการนำเข้าให้ตรงตามแผนงานยิงแอด (Facebook Ads Expert)
import { FacebookAdsData } from "./schema"

/** * IconMap - วางพิกัดไอคอนให้สอดคล้องกับพิกัดข้อมูลใน data.ts */
const IconMap: Record<string, LucideIcon> = {
  Zap,
  Target,
  MessageSquare,
}

/**
 * FacebookAdsExpertTemplate - ระบบหน้าเว็บพิกัดยิงแอดตรงสเปกแรง
 * แนวคิด: เน้นการหยุดนิ้วลูกค้า วางพิกัดปุ่มติดต่อให้เด่น และวางระบบให้โหลดไวระดับวินาที
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function FacebookAdsExpertTemplate({
  data,
}: {
  data: FacebookAdsData
}) {
  // [Safety Shield]: ส่วนป้องกันระบบหน้าขาวหากพิกัดข้อมูลวิ่งมาไม่ครบ
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Optimizing Ad-Unit Data...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10">
      {/* 1. ส่วนแถบนำทาง (Navbar): เน้นความเรียบและปุ่ม CTA ที่ชัดเจน */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-950 uppercase italic">
            <Zap size={22} className="fill-emerald-500 text-emerald-500" />
            {data.navigation?.logo}
          </div>

          <div className="flex items-center gap-4">
            <button className="font-heading rounded-2xl bg-slate-950 px-6 py-2.5 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic shadow-xl shadow-slate-950/10 transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
              {data.navigation?.cta}
            </button>
            <button
              className="text-slate-900 md:hidden"
              aria-label="เปิดพิกัดเมนู"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. ส่วนต้อนรับ (Hero Section): วางพิกัดหยุดลูกค้าด้วยข้อเสนอที่แม่นยำ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        {/* วางพิกัดลายพื้นหลังจางๆ เพื่อโชว์ความเนี้ยบของโครงสร้างระบบ */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 text-center">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-2 ring-1 ring-emerald-500/20">
            <Target size={16} className="text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-widest text-white uppercase italic">
              {data.hero.badge}
            </span>
          </div>

          <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-[11rem]">
            {data.hero.title} <br />
            <span className="text-emerald-500 italic">
              {data.hero.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-12 max-w-xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            {data.hero.description}
          </p>

          <div className="mt-16 flex justify-center">
            <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-emerald-500 px-12 text-sm font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
              เริ่มจูนพิกัดยอดขาย
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. ส่วนรายการจุดเด่น (Highlights Section): ขยี้สิ่งที่สายยิงแอดต้องการ */}
      <section className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {data.highlights?.items?.map(
              (
                item: { icon: string; title: string; desc: string },
                i: number
              ) => {
                const Icon = IconMap[item.icon] || Zap
                return (
                  <div
                    key={i}
                    className="group relative rounded-[3rem] border border-white bg-white p-12 shadow-sm transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5"
                  >
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading mb-6 text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed font-bold text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* 4. ส่วนท้ายหน้าเว็บ (Footer): สรุปความเป็นแบรนด์ Specialist */}
      <footer className="py-20 text-center opacity-30 select-none">
        <div className="mb-8 flex justify-center gap-6 grayscale">
          <Star size={20} />
          <Target size={20} />
          <Star size={20} />
        </div>
        <p className="font-heading text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          Conversion-Focused System • AEM Engine v2026
        </p>
      </footer>
    </div>
  )
}
