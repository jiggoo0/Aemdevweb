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
  badgeText = "รับทำเว็บไซต์สำหรับบริษัทและ หจก. ทั่วไทย",
  headline = (
    <>
      สร้างเว็บไซต์ <br />
      <span className="text-[#1E3A8A]">ที่ใช้งานได้จริง</span> <br />
      เพื่อธุรกิจของคุณ
    </>
  ),
  description = "เราสร้างเว็บไซต์ที่เน้นความเร็ว เปิดง่ายในมือถือ และดูน่าเชื่อถือ เพื่อให้ธุรกิจของคุณเข้าถึงลูกค้าได้มากกว่าเดิม และปิดการขายได้ง่ายขึ้น",
  primaryActionText = "คุยงาน / ขอใบเสนอราคา",
  primaryActionHref = "/contact",
  secondaryActionText = "ดูตัวอย่างหน้าเว็บ",
  secondaryActionHref = "#services",
  imageSrc = "https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/Hero/Hero.png",
  imageAlt = "ผลงานการออกแบบเว็บไซต์โดย AEMDEV",
  trustBadges = [
    "เปิดเว็บไว ไม่รอนาน",
    "ใช้ได้ดีทั้งมือถือและคอม",
    "ดูแลหลังการขายโดยตรง",
  ],
  floatingElement1 = { title: "เปิดไวในมือถือ" },
  floatingElement2 = { title: "ระบบเสถียร 100%" },
}: HeroProps) => {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pb-20 pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      {/* ─── 1. พื้นหลัง (Background) ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E3A8A]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* ─── 2. ส่วนข้อความนำเสนอ (Content Column) ─── */}
          <div className="space-y-10 lg:col-span-7">
            {/* 🏷️ Badge: ป้ายบอกบริการ */}
            <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#0f172a]">
              <Sparkles size={16} className="animate-pulse text-[#F97316]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 md:text-xs">
                {badgeText}
              </span>
            </div>

            {/* 📢 หัวข้อ (Headline) */}
            <h1
              id="hero-heading"
              className="text-5xl font-black uppercase leading-[0.95] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl"
            >
              {headline}
            </h1>

            {/* 📝 คำอธิบาย (Description) */}
            <p className="max-w-xl border-l-[6px] border-[#F97316] pl-8 text-lg font-bold leading-relaxed text-slate-600 md:text-xl">
              {description}
            </p>

            {/* 🚀 ปุ่มดำเนินการ (CTA Group) */}
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

            {/* ✅ จุดเด่น 3 อย่าง (Trust Indicators) */}
            <ul className="flex flex-wrap gap-x-10 gap-y-5 pt-6" role="list">
              {trustBadges.map((badge, index) => (
                <li key={index} className="group flex items-center gap-3">
                  <div className="bg-[#1E3A8A]/10 p-1.5 transition-colors group-hover:bg-[#1E3A8A]/20">
                    <ShieldCheck size={20} className="text-[#1E3A8A]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 3. ส่วนโชว์รูปภาพ (Visual Column) ─── */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px]">
              {/* กรอบรูปสไตล์ Brutalist */}
              <div className="relative h-full w-full border-[6px] border-slate-900 bg-white p-4 shadow-[12px_12px_0px_0px_#0f172a] transition-transform duration-700 hover:-translate-y-3">
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

                {/* กล่องลอยโชว์จุดเด่น 1 */}
                <div className="absolute -left-10 top-1/4 z-20 hidden animate-float items-center gap-4 border-4 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_#1E3A8A] md:flex">
                  <Smartphone className="text-[#1E3A8A]" size={24} />
                  <span className="text-[11px] font-black uppercase tracking-tighter text-slate-900">
                    {floatingElement1.title}
                  </span>
                </div>

                {/* กล่องลอยโชว์จุดเด่น 2 */}
                <div
                  className="absolute -right-10 bottom-1/4 z-20 hidden animate-float items-center gap-4 border-4 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_#F97316] md:flex"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Monitor className="text-[#F97316]" size={24} />
                  <span className="text-[11px] font-black uppercase tracking-tighter text-slate-900">
                    {floatingElement2.title}
                  </span>
                </div>
              </div>

              {/* เส้นประประดับ */}
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
