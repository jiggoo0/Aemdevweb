/** @format */

"use client";

import React from "react";
import {
  Zap,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Star,
  Menu,
  type LucideIcon, // [FIX]: นำเข้าประเภทข้อมูลเพื่อล้างพิกัด any
} from "lucide-react";
import { SalePageData } from "./schema";

/** * IconMap - ตัวช่วยแปลงชื่อไอคอนจากพิกัดข้อมูลให้เป็นคอมโพเนนต์จริง
 * [FIX]: ระบุประเภทข้อมูล LucideIcon แทนการใช้ any เพื่อความกริบของระบบงาน
 */
const IconMap: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  MessageSquare,
};

/**
 * [Sale Page Template]: ระบบปิดการขายหน้าเดียวสเปกแรง
 * แนวคิด: เน้นการปิดการขายที่รวดเร็ว ขยี้จุดเด่นให้ชัดเจน และวางระบบให้โหลดไวระดับเสี้ยววินาที
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function SalePageTemplate({ data }: { data: SalePageData }) {
  // [Safety Shield]: ส่วนป้องกันหน้าขาวหากพิกัดข้อมูลวิ่งมาไม่ทัน
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Powering up Sale System...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. ส่วนแถบนำทาง (Navigation): เน้นปุ่มสั่งซื้อให้เห็นชัดที่สุดในพิกัดเดียว */}
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

      {/* 2. ส่วนต้อนรับ (Hero Section): พื้นที่หยุดสายตาเพื่อเปลี่ยนคนดูให้เป็นยอดขาย */}
      <section className="relative overflow-hidden pt-32 pb-20 text-center lg:pt-56 lg:pb-32">
        {/* วางพิกัดลายตารางจางๆ เพื่อโชว์ความเนี้ยบของโครงสร้างระบบงาน */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2 ring-1 ring-emerald-500/20">
            <Sparkles size={16} className="animate-pulse text-emerald-600" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
              {data.hero.badge}
            </span>
          </div>

          <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-[9rem]">
            {data.hero.title} <br />
            <span className="text-emerald-500 italic">
              {data.hero.highlight}
            </span>
          </h1>

          <p className="mx-auto mt-12 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            {data.hero.description}
          </p>

          <div className="mt-16 flex justify-center">
            <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-emerald-500 px-12 text-sm font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
              {data.ctaSection?.buttonText || "สั่งจองพิกัดงานวันนี้"}
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. รายการจุดเด่น (Benefits Section): อธิบายสิ่งที่ลูกค้าจะได้รับแบบเน้นๆ */}
      <section className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex flex-col items-center text-center">
            <div className="mb-6 flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-emerald-500 text-emerald-500"
                />
              ))}
            </div>
            <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
              {data.benefits?.title}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {data.benefits?.items?.map(
              (
                item: { icon: string; title: string; desc: string },
                idx: number,
              ) => {
                const Icon = IconMap[item.icon] || Zap;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-[3rem] border border-white bg-white p-12 shadow-sm transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5"
                  >
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading mb-6 text-3xl font-black text-slate-950 italic">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed font-bold text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* 4. ปุ่มลอยตัวปิดการขาย (Sticky CTA): กระตุ้นการตัดสินใจได้กริบที่สุด */}
      <div className="fixed bottom-10 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-6">
        <div className="flex items-center justify-between gap-6 rounded-[2.5rem] bg-slate-950/90 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-2xl">
          <div className="hidden pl-6 sm:block">
            <p className="font-heading text-[10px] font-black tracking-widest text-emerald-400 uppercase italic">
              Limited Special Offer
            </p>
            <p className="font-body text-xs font-bold text-white">
              จูนแผนงานพร้อมรันยอดขายใน 24 ชม.
            </p>
          </div>
          <button className="group font-heading flex flex-1 items-center justify-center gap-3 rounded-2xl bg-emerald-500 py-5 text-[11px] font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-white active:scale-95 sm:flex-initial sm:px-10">
            {data.navigation?.cta}
            <MessageSquare
              size={16}
              className="transition-transform group-hover:rotate-12"
            />
          </button>
        </div>
      </div>

      {/* ลายเซ็นต์ท้ายพิกัดหน้าเว็บ: ตอกย้ำความซิ่งมาตรฐานปี 2026 */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Sales System • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}
