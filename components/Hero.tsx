/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Smartphone,
  Monitor,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

const Hero = ({
  badgeText = "Website Solution สำหรับธุรกิจไทยโดยเฉพาะ",
  headline = (
    <>
      สร้างเว็บไซต์ที่เป็น <br />
      <span className="italic text-blue-600">พนักงานขายเบอร์ 1</span>
    </>
  ),
  description = "เปลี่ยนหน้าเว็บธรรมดาให้เป็นเครื่องมือผลิตยอดขายที่ทำงาน 24 ชั่วโมง ด้วยสถาปัตยกรรมระดับสากลที่โหลดไว มั่นคง และออกแบบมาเพื่อปิดการขายสำหรับ SME โดยเฉพาะ",
  primaryActionText = "เริ่มสร้างโปรเจกต์ของคุณ",
  primaryActionHref = "/services",
  secondaryActionText = "ดูราคาและแพ็กเกจ",
  secondaryActionHref = "/services#pricing",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "aemdevweb digital architecture workspace",
  trustBadges = [
    "High-Performance Speed",
    "สวยเป๊ะทุกหน้าจอมือถือ",
    "โครงสร้างรองรับ Google (SEO)",
  ],
  floatingElement1 = { title: "Mobile Optimized", desc: "สวยงามทุกหน้าจอ" },
  floatingElement2 = { title: "Secure & Stable", desc: "ระบบมั่นคง ปลอดภัย" },
}) => {
  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40">
      {/* ─── 1. ADVANCED BLUEPRINT GRID ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:200px_200px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ─── 2. CONTENT AREA ─── */}
          <div className="space-y-10 lg:col-span-7">
            {/* Brand Badge: Neobrutalism Style */}
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Sparkles size={14} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>

            {/* Headline: Fluid & Powerful */}
            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900">
              {headline}
            </h1>

            {/* Description: High Contrast */}
            <p className="max-w-xl border-l-4 border-blue-600 pl-6 text-base font-bold leading-relaxed text-slate-500 md:text-xl">
              {description}
            </p>

            {/* CTA Buttons: Industrial Interactions */}
            <div className="flex flex-col gap-5 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative h-16 overflow-hidden rounded-none bg-blue-600 px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#0f172a] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
                asChild
              >
                <Link href={primaryActionHref} className="flex items-center">
                  {primaryActionText}
                  <ArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-16 rounded-none border-2 border-slate-900 bg-transparent px-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-95"
                asChild
              >
                <Link href={secondaryActionHref}>{secondaryActionText}</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-10 gap-y-5 pt-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100"
                >
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── 3. SHOWCASE AREA ─── */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px]">
              {/* Main Image Block */}
              <div className="relative h-full w-full border-4 border-slate-900 bg-white p-3 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>

                {/* Floating Elements (Responsive Hidden) */}
                <div className="absolute -left-6 bottom-20 z-20 hidden items-center gap-4 border-4 border-slate-900 bg-white p-4 shadow-[6px_6px_0px_0px_#2563eb] md:flex">
                  <Smartphone className="text-blue-600" />
                  <span className="text-xs font-black uppercase tracking-tighter">
                    {floatingElement1.title}
                  </span>
                </div>

                <div className="absolute -right-6 top-20 z-20 hidden items-center gap-4 border-4 border-slate-900 bg-white p-4 shadow-[6px_6px_0px_0px_#0f172a] md:flex">
                  <Monitor className="text-slate-900" />
                  <span className="text-xs font-black uppercase tracking-tighter">
                    {floatingElement2.title}
                  </span>
                </div>
              </div>

              {/* Blueprint Frame Decor */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-2 border-dashed border-blue-600/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
