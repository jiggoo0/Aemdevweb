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
// ✅ ลบ import { cn } ออกเนื่องจากไม่ได้ถูกเรียกใช้งาน

interface FloatingElement {
  title: string
  desc?: string
}

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
  floatingElement1?: FloatingElement
  floatingElement2?: FloatingElement
}

const Hero = ({
  badgeText = "Industrial Web Architecture สำหรับธุรกิจไทย",
  headline = (
    <>
      Build Smart, <br />
      <span className="text-brand-blue">Reliable Web</span> <br />
      Solutions
    </>
  ),
  description = "ยกระดับธุรกิจด้วยสถาปัตยกรรมเว็บระดับ Enterprise ที่ออกแบบมาเพื่อความเสถียร ความเร็ว และการเติบโตที่ไร้ขีดจำกัด พร้อมรองรับระบบ Automation เต็มรูปแบบ",
  primaryActionText = "เริ่มสร้างโปรเจกต์",
  primaryActionHref = "/contact",
  secondaryActionText = "บริการของเรา",
  secondaryActionHref = "#services",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "AEMDEVWEB Digital Architecture Workspace",
  trustBadges = [
    "Enterprise Performance",
    "Mobile First Design",
    "Workflow Automation",
  ],
  floatingElement1 = { title: "Mobile Optimized" },
  floatingElement2 = { title: "Secure Architecture" },
}: HeroProps) => {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-background pb-20 pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* ─── 1. Background Architecture ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ─── 2. Content Column ─── */}
          <div className="space-y-10 lg:col-span-7">
            {/* 🏷️ Badge: Brutalist Style */}
            <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <Sparkles size={16} className="animate-pulse text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>

            {/* 📢 Headline */}
            <h1
              id="hero-heading"
              className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl"
            >
              {headline}
            </h1>

            {/* 📝 Description */}
            <p className="max-w-xl border-l-[6px] border-brand-orange pl-8 text-lg font-bold leading-relaxed text-slate-600 md:text-xl">
              {description}
            </p>

            {/* 🚀 CTA Action Group */}
            <div className="flex flex-col gap-5 pt-4 sm:flex-row">
              <Link href={primaryActionHref} className="group">
                <Button
                  size="lg"
                  className="h-16 w-full rounded-none border-4 border-slate-900 bg-slate-900 px-10 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:w-auto"
                >
                  {primaryActionText}
                  <ArrowRight
                    className="ml-3 transition-transform group-hover:translate-x-2"
                    size={18}
                  />
                </Button>
              </Link>

              <Link href={secondaryActionHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 w-full rounded-none border-4 border-slate-900 bg-transparent px-10 text-xs font-black uppercase tracking-[0.2em] text-slate-900 transition-all hover:bg-slate-50 sm:w-auto"
                >
                  {secondaryActionText}
                </Button>
              </Link>
            </div>

            {/* ✅ Trust Indicators */}
            <ul className="flex flex-wrap gap-x-10 gap-y-5 pt-6" role="list">
              {trustBadges.map((badge, index) => (
                <li key={index} className="group flex items-center gap-3">
                  <div className="bg-brand-blue/10 p-1.5 transition-colors group-hover:bg-brand-blue/20">
                    <ShieldCheck size={20} className="text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 3. Visual Showcase Column ─── */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px]">
              {/* Main Image Frame */}
              <div className="relative h-full w-full border-[6px] border-slate-900 bg-white p-4 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-transform duration-700 hover:-translate-y-3">
                <div className="relative h-full w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>

                {/* 📱 Floating Element 1: Mobile */}
                <div className="absolute -left-10 top-1/4 z-20 hidden animate-float items-center gap-4 border-4 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_#2563EB] md:flex">
                  <Smartphone className="text-brand-blue" size={24} />
                  <span className="text-[11px] font-black uppercase tracking-tighter">
                    {floatingElement1.title}
                  </span>
                </div>

                {/* 💻 Floating Element 2: Desktop */}
                <div
                  className="absolute -right-10 bottom-1/4 z-20 hidden animate-float items-center gap-4 border-4 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_#F97316] md:flex"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Monitor className="text-brand-orange" size={24} />
                  <span className="text-[11px] font-black uppercase tracking-tighter">
                    {floatingElement2.title}
                  </span>
                </div>
              </div>

              {/* Decorative Background Grid Layer */}
              <div
                className="absolute -bottom-8 -right-8 -z-10 h-full w-full border-4 border-dashed border-slate-200"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
