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
  config?: any // รับข้อมูล TemplateData เพื่อแสดง Custom Notice
}

export default function CTA({
  title = "พร้อมยกระดับธุรกิจของคุณ สู่มาตรฐานใหม่หรือยังครับ?",
  subtitle = "ไม่ว่าจะเป็นร้านอาหาร หรือบริษัท หจก. ผมยินดีให้คำปรึกษาฟรีแบบพาร์ทเนอร์ พร้อมช่วยวางแผนให้คุ้มค่ากับงบประมาณที่สุด",
  config,
}: CTAProps) {
  // ดึงข้อมูล Custom Design Notice ถ้ามี
  const customNotice = config?.customDesignNotice

  return (
    <div className="bg-white px-6 py-24 md:py-32">
      <section className="relative mx-auto max-w-7xl overflow-hidden border-4 border-brand-navy bg-brand-navy px-8 py-20 shadow-enterprise-lg md:px-20 md:py-28">
        <div
          className="absolute inset-0 z-0 bg-industrial-grid opacity-20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center space-y-14 text-center">
          {/* ✅ CUSTOM DESIGN NOTICE BLOCK */}
          {customNotice && (
            <div className="group relative w-full max-w-3xl border-2 border-dashed border-white/20 bg-white/5 p-8 transition-colors hover:border-brand-blue/50">
              <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 bg-brand-navy px-4">
                <PenTool size={14} className="text-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  Bespoke Solution
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-brand-blue">
                  {customNotice.title_th}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-slate-300">
                  {customNotice.description_th}
                </p>
                <div className="pt-2">
                  <p className="text-[10px] font-bold uppercase italic tracking-widest text-slate-500 opacity-60">
                    {customNotice.title_en}: {customNotice.description_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="inline-flex items-center gap-3 border-2 border-brand-blue bg-brand-blue/10 px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(59,130,246,0.3)]">
            <Sparkles className="h-4 w-4 text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">
              Direct Consultation v2.0
            </span>
          </div>

          <header className="max-w-4xl space-y-8">
            <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter text-white md:text-7xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl border-l-2 border-brand-blue/30 px-6 text-lg font-bold leading-relaxed text-slate-400 md:text-xl">
              {subtitle}
            </p>
          </header>

          <div className="flex w-full flex-col items-center justify-center gap-6 pt-6 sm:flex-row">
            <Button
              size="lg"
              className="h-18 group w-full rounded-none border-2 border-brand-blue bg-brand-blue px-12 text-xs font-black uppercase tracking-[0.3em] text-white shadow-brutal-blue transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:w-auto"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-4">
                เริ่มคุยรายละเอียดงาน
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-18 group w-full rounded-none border-2 border-white bg-transparent px-12 text-xs font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-brand-navy sm:w-auto"
              asChild
            >
              <Link
                href={`tel:${siteConfig.contact.tel}`}
                className="flex items-center gap-4"
              >
                <PhoneCall className="h-5 w-5" />
                โทรปรึกษาผมโดยตรง
              </Link>
            </Button>
          </div>

          <footer className="flex w-full max-w-2xl flex-col items-center gap-8 border-t-2 border-white/5 pt-12">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center gap-4 md:justify-end">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-blue bg-brand-blue/10">
                  <MessageSquare size={18} className="text-brand-blue" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] font-black uppercase italic tracking-widest text-slate-500">
                    LINE Official
                  </span>
                  <span className="text-sm font-black text-white">
                    {siteConfig.contact.lineId}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-emerald-500/50 bg-emerald-500/10">
                  <ShieldCheck size={18} className="text-emerald-500" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] font-black uppercase italic tracking-widest text-slate-500">
                    Integrity Check
                  </span>
                  <span className="text-sm font-black uppercase text-white">
                    ดูแลเอง ไม่ผ่านคนกลาง
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
              Technical Excellence & Genuine Support
            </p>
          </footer>
        </div>
      </section>
    </div>
  )
}
