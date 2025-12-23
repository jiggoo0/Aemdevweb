/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Sparkles,
  ShieldCheck,
} from "lucide-react"

/** * 🛠️ Define Interface with strict typing
 * แยกส่วนประกอบเนื้อหาเพื่อให้ง่ายต่อการจัดการผ่าน Data File
 */
interface HeroProps {
  badgeText?: string
  headline?: React.ReactNode
  description?: string
  primaryActionText?: string
  primaryActionHref?: string
  secondaryActionText?: string
  secondaryActionHref?: string
  imageSrc?: string
  imageAlt?: string
  trustBadges?: string[]
  floatingElement1?: { title: string; desc: string }
  floatingElement2?: { title: string; desc: string }
}

/**
 * 🏛️ Hero Component (Refactored Version)
 * ใช้ Industrial Sharp Design: ขอบเหลี่ยม, Blueprint Grid, และ Typography ที่ทรงพลัง
 */
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
}: HeroProps) => {
  return (
    <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40">
      {/* ─── 1. ARCHITECTURAL BACKGROUND (Blueprint Grid) ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      {/* Cinematic Glow Effects (เพิ่มมิติให้กับหน้าเว็บ) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[900px] w-[900px] translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-500/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          {/* ─── 2. CONTENT AREA (Left Column) ─── */}
          <div className="space-y-12 lg:col-span-7">
            {/* Brand Badge */}
            <div className="group inline-flex items-center gap-3 border-l-4 border-blue-600 bg-white px-6 py-3 shadow-sm transition-all hover:shadow-md">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>

            {/* Headline: ใช้ font-black และ tracking-tighter ตามจริต Industrial Look */}
            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-7xl lg:text-[100px]">
              {headline}
            </h1>

            {/* Sub-headline / Description */}
            <p className="max-w-xl border-l-8 border-slate-100 pl-8 text-lg font-bold leading-relaxed text-slate-500 transition-colors hover:border-blue-100 md:text-2xl">
              {description}
            </p>

            {/* CTA Buttons: เน้นปุ่มเหลี่ยม (No border-radius) ตามคอนเซปต์โปรเจกต์ */}
            <div className="flex flex-col gap-5 pt-6 sm:flex-row">
              <Button
                size="lg"
                className="group relative h-20 overflow-hidden rounded-none bg-blue-600 px-12 text-sm font-black uppercase tracking-[0.25em] text-white shadow-[10px_10px_0px_0px_#0f172a] transition-all hover:-translate-y-1 hover:bg-slate-900 hover:shadow-none active:scale-95"
                asChild
              >
                <Link href={primaryActionHref} className="flex items-center">
                  <span className="relative z-10">{primaryActionText}</span>
                  <ArrowRight className="relative z-10 ml-4 transition-transform group-hover:translate-x-3" />
                  <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-20 rounded-none border-[3px] border-slate-900 bg-transparent px-12 text-sm font-black uppercase tracking-[0.25em] text-slate-900 transition-all hover:bg-slate-900 hover:text-white active:scale-95"
                asChild
              >
                <Link href={secondaryActionHref}>{secondaryActionText}</Link>
              </Button>
            </div>

            {/* Trust Badges Section */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-10">
              {trustBadges.map((badge, index) => (
                <div key={index} className="group flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <ShieldCheck className="h-4 w-4 stroke-[3px]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-900">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── 3. SHOWCASE AREA (Right Column) ─── */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px]">
              {/* Frame & Image Container */}
              <div className="relative h-full w-full border-4 border-slate-900 bg-white p-4 shadow-2xl">
                <div className="relative h-full w-full overflow-hidden bg-slate-100 transition-all duration-1000 hover:scale-[1.02]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority // เพิ่มลำดับความสำคัญในการโหลด (LCP Optimization)
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 transition-opacity duration-700 hover:opacity-100" />
                </div>

                {/* Floating Meta Box 1 (Mobile Focus) */}
                <div className="absolute -left-8 bottom-24 z-30 hidden items-center gap-5 border-4 border-slate-900 bg-white p-5 shadow-[8px_8px_0px_0px_#2563eb] transition-transform hover:-translate-y-2 md:flex">
                  <div className="bg-blue-600 p-3 text-white">
                    <Smartphone size={24} strokeWidth={2.5} />
                  </div>
                  <div className="pr-4">
                    <div className="mb-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Standard
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      {floatingElement1.title}
                    </div>
                  </div>
                </div>

                {/* Floating Meta Box 2 (Reliability Focus) */}
                <div className="absolute -right-8 top-24 z-30 hidden items-center gap-5 border-4 border-slate-900 bg-white p-5 shadow-[8px_8px_0px_0px_#0f172a] transition-transform hover:-translate-y-2 md:flex">
                  <div className="bg-slate-900 p-3 text-white">
                    <Monitor size={24} strokeWidth={2.5} />
                  </div>
                  <div className="pr-4">
                    <div className="mb-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                      Performance
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      {floatingElement2.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Dashed Frame */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border-[3px] border-dashed border-blue-600/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ใช้ memo เพื่อลดการ Re-render โดยไม่จำเป็น
export default memo(Hero)
