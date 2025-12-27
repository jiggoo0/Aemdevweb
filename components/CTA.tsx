/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/siteConfig"
import {
  PhoneCall,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  PenTool,
} from "lucide-react"

interface CTAProps {
  title?: string
  subtitle?: string
  config?: any
}

export default function CTA({
  // ✅ อัปเดตข้อความ Title และ Subtitle ตามที่คุณต้องการ
  title = "พร้อมให้เราวางโครงสร้าง ความสำเร็จให้คุณหรือยัง?",
  subtitle = "เริ่มปรึกษาโปรเจกต์กับเราวันนี้ เพื่อเปลี่ยนไอเดียของคุณให้เป็นสถาปัตยกรรมดิจิทัลที่แข็งแกร่งและยั่งยืน",
  config,
}: CTAProps) {
  const customNotice = config?.customDesignNotice

  return (
    <section
      className="bg-white px-6 py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden border-[6px] border-slate-900 bg-brand-navy px-8 py-20 shadow-[16px_16px_0px_0px_#1E3A8A] md:px-20 md:py-28">
        {/* ─── 🧩 BACKGROUND LAYER ─── */}
        <div
          className="bg-grid-pattern absolute inset-0 z-0 opacity-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center space-y-14 text-center">
          {/* ─── 🛠️ CUSTOM DESIGN NOTICE ─── */}
          {customNotice && (
            <div className="group relative w-full max-w-3xl border-4 border-dashed border-white/20 bg-white/5 p-8 transition-colors hover:border-brand-blue">
              <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 border-2 border-white/20 bg-brand-navy px-6 py-1">
                <PenTool size={14} className="text-brand-orange" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Bespoke Solution
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-brand-blue">
                  {customNotice.title_th}
                </h3>
                <p className="text-base font-bold leading-relaxed text-slate-300">
                  {customNotice.description_th}
                </p>
                <div className="pt-2 opacity-40">
                  <p className="text-[9px] font-black uppercase italic tracking-[0.2em] text-slate-400">
                    {customNotice.title_en}: {customNotice.description_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 🏷️ BADGE */}
          <div className="inline-flex items-center gap-3 border-2 border-brand-blue bg-brand-blue/10 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(30,58,138,0.5)]">
            <Sparkles className="h-4 w-4 animate-pulse text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">
              Direct Consultation v2.5
            </span>
          </div>

          {/* 📢 MAIN HEADER */}
          <header className="max-w-4xl space-y-10">
            <h2
              id="cta-heading"
              className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-white md:text-8xl"
            >
              {title}
            </h2>
            <p className="mx-auto max-w-2xl border-l-4 border-brand-orange px-8 text-xl font-bold leading-relaxed text-slate-400 md:text-2xl">
              {subtitle}
            </p>
          </header>

          {/* 🚀 ACTION BUTTONS */}
          <div className="flex w-full flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
            <Button
              size="lg"
              className="group h-20 w-full rounded-none border-4 border-slate-900 bg-brand-orange px-12 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[6px_6px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:w-auto"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-4">
                เริ่มปรึกษาโปรเจกต์
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group h-20 w-full rounded-none border-4 border-white bg-transparent px-12 text-sm font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-brand-navy sm:w-auto"
              asChild
            >
              <Link
                href={`tel:${siteConfig.contact.tel}`}
                className="flex items-center gap-4"
              >
                <PhoneCall className="h-5 w-5" />
                โทรหาพาร์ทเนอร์โดยตรง
              </Link>
            </Button>
          </div>

          {/* 🛡️ TRUST FOOTER */}
          <footer className="flex w-full max-w-3xl flex-col items-center gap-10 border-t-4 border-white/10 pt-16">
            <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
              <div className="flex items-center justify-center gap-5 md:justify-end">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-brand-blue bg-brand-blue/20 text-brand-blue">
                  <MessageSquare size={24} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-black uppercase italic tracking-widest text-slate-500">
                    LINE Official
                  </span>
                  <span className="text-xl font-black text-white">
                    {siteConfig.contact.lineId}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-5 md:justify-start">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-emerald-500 bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck size={24} />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] font-black uppercase italic tracking-widest text-slate-500">
                    Integrity Check
                  </span>
                  <span className="text-lg font-black uppercase leading-tight text-white">
                    ดูแลเอง ไม่ผ่านคนกลาง
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 opacity-30">
              <div className="h-[2px] w-12 bg-slate-600" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
                Technical Excellence & Genuine Support
              </p>
              <div className="h-[2px] w-12 bg-slate-600" />
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
