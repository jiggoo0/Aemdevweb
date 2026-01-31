/** @format */

"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Zap,
  Search,
  Lock,
  ArrowRight,
  Play,
  CheckCircle2,
  Menu,
  type LucideIcon, // [FIX]: นำเข้าพิกัดประเภทข้อมูลเพื่อล้าง any
} from "lucide-react";
// [FIX]: เปลี่ยนพิกัดนำเข้าให้ถูกต้องตามพิกัดของรุ่นโปร เพื่อล้าง Error TS2305
import { CorporateProData } from "./schema";

/** * IconMap - วางพิกัดไอคอนจากพิกัดข้อมูลให้เป็นคอมโพเนนต์จริง
 * [FIX]: ระบุประเภทข้อมูล LucideIcon แทนการใช้ any เพื่อความกริบของระบบงาน
 */
const IconMap: Record<string, LucideIcon> = {
  Target,
  Zap,
  Search,
  Lock,
};

/**
 * CorporateProTemplate - พิกัดระบบหน้าเว็บธุรกิจรุ่นท็อปสเปกแรง
 * แนวคิด: เน้นความภูมิฐาน โชว์ผลลัพธ์ที่ชัดเจน และวางระบบให้โหลดไวระดับเสี้ยววินาที
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function CorporateProTemplate({
  data,
}: {
  data: CorporateProData;
}) {
  // [Safety Check]: ตรวจสอบพิกัดข้อมูลก่อนเริ่มทำงาน
  if (!data?.hero) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. ส่วนนำทาง (Navigation): เน้นความพรีเมียมและเข้าถึงง่าย */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-2xl">
        <div className="container mx-auto flex h-24 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-slate-950 italic">
            <Zap size={24} className="fill-emerald-500 text-emerald-500" />
            {data.navigation.logo}
          </div>

          <div className="hidden items-center gap-10 lg:flex">
            {data.navigation.links.map(
              (link: { label: string; href: string }, i: number) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm font-bold text-slate-500 transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="font-heading hidden rounded-2xl bg-slate-950 px-8 py-3 text-[11px] font-black tracking-widest text-emerald-500 uppercase italic transition-all hover:shadow-2xl hover:shadow-emerald-500/20 active:scale-95 sm:block">
              {data.navigation.cta}
            </button>
            <button
              className="text-slate-900 lg:hidden"
              aria-label="เปิดพิกัดเมนู"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. ส่วนแนะนำ (Hero Section): เน้นการหยุดสายตาด้วยพิกัดตัวเลขความสำเร็จ */}
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-56 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-2 shadow-xl">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-white uppercase italic">
              {data.hero.badge}
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-9xl">
                {data.hero.title} <br />
                <span className="text-emerald-500 italic">
                  {data.hero.highlight}
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                {data.hero.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="group font-heading flex h-16 items-center gap-4 rounded-2xl bg-emerald-500 px-10 text-xs font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-slate-950 hover:text-white hover:shadow-2xl active:scale-95">
                  {data.hero.primaryCTA}
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <button className="font-heading flex h-16 items-center gap-4 rounded-2xl border-2 border-slate-100 px-10 text-xs font-black tracking-widest text-slate-950 uppercase italic transition-all hover:border-slate-950 active:scale-95">
                  <Play size={18} className="fill-slate-950" />
                  {data.hero.secondaryCTA}
                </button>
              </div>
            </div>

            {/* ส่วนพิกัดสถิติ (Stats List) */}
            <div className="space-y-10">
              {data.stats.map(
                (
                  stat: { value: string; suffix: string; label: string },
                  i: number,
                ) => (
                  <div
                    key={i}
                    className="flex items-end gap-6 border-b border-slate-100 pb-8 transition-colors hover:border-emerald-500/30"
                  >
                    <span className="font-heading text-7xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
                      {stat.value}
                      {stat.suffix}
                    </span>
                    <div className="mb-3 space-y-1">
                      <div className="h-1 w-8 bg-emerald-500" />
                      <span className="font-heading block text-[11px] font-black tracking-widest text-slate-400 uppercase italic">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. รายการบริการ (Services): แผนงานที่ช่วยให้ธุรกิจคุณเดินหน้าได้ไว */}
      <section id="services" className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-12">
            <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
              {data.services.title}
            </h2>
            <p className="mt-8 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              {data.services.subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.services.items.map(
              (
                item: { icon: string; title: string; desc: string },
                i: number,
              ) => {
                const Icon = IconMap[item.icon] || Zap;
                return (
                  <div
                    key={i}
                    className="group relative rounded-[2.5rem] bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
                  >
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading mb-4 text-2xl font-black text-slate-950 italic">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed font-bold text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* 4. ส่วนแสดงผลงาน (Work Showcase) */}
      <section id="showcase" className="py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-7xl">
                {data.showcase.title}
              </h2>
              <p className="mt-6 text-xl font-bold text-slate-400">
                {data.showcase.description}
              </p>
            </div>
            <div className="mx-12 mb-4 hidden h-px flex-1 bg-slate-100 md:block" />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {data.showcase.items.map(
              (
                item: { image: string; title: string; category: string },
                i: number,
              ) => (
                <div
                  key={i}
                  className="group relative aspect-[16/10] overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-10 left-10 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-heading text-[10px] font-black tracking-widest text-emerald-500 uppercase italic">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-3xl font-black tracking-tighter text-white uppercase italic">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 5. ส่วนปิดการขาย (Call to Action) */}
      <section id="contact" className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-center text-white shadow-2xl shadow-slate-900/40 md:p-32">
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

            <div className="relative z-10">
              <h2 className="font-heading mx-auto max-w-4xl text-5xl leading-[1] font-black tracking-tighter italic md:text-8xl lg:text-9xl">
                Ready to <br />
                <span className="text-emerald-500">Upgrade?</span>
              </h2>
              <p className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-400 md:text-2xl">
                เปลี่ยนโฉมธุรกิจของคุณให้ซิ่งและเนี้ยบที่สุด
                พร้อมลุยตลาดออนไลน์แบบมืออาชีพได้ตั้งแต่วันนี้ครับ
              </p>
              <div className="mt-16 flex justify-center">
                <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-emerald-500 px-16 text-sm font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
                  เริ่มวางระบบงานกับนายเอ็ม
                  <CheckCircle2
                    size={24}
                    className="transition-transform group-hover:rotate-12"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ลายเซ็นต์พิกัดท้ายหน้าเว็บ */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Speed Business Portfolio • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}
