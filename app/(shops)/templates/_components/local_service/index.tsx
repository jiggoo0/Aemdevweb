/** @format */

"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Menu,
  Zap,
  CheckCircle2,
  type LucideIcon, // [FIX]: นำเข้า Type เพื่อล้างพิกัด any
} from "lucide-react";
import { LocalServiceData } from "./schema";

/** * IconMap - วางพิกัดไอคอนจากพิกัดข้อมูลให้เป็นคอมโพเนนต์จริง
 * [FIX]: ระบุประเภทข้อมูล LucideIcon แทนการใช้ any เพื่อความกริบของระบบงาน
 */
const IconMap: Record<string, LucideIcon> = {
  Wrench: Wrench,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
};

/**
 * [Local Service Template]: พิกัดระบบหน้าเว็บสำหรับธุรกิจและบริการท้องถิ่น
 * แนวคิด: เน้นความไวในการติดต่อ โหลดวาร์ป และดูเป็นมืออาชีพที่วางใจได้
 * วางระบบโดย: นายเอ็มซ่ามากส์ (The Accessible Expert)
 */
export default function LocalServiceTemplate({
  data,
}: {
  data: LocalServiceData;
}) {
  // [Safety Shield]: ส่วนป้องกันระบบหน้าขาวหากพิกัดข้อมูลวิ่งมาไม่ครบ
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Optimizing Local Service Data...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. ส่วนแถบนำทาง (Navigation): วางโครงสร้างให้เข้าถึงง่ายและชัดเจน */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-950 uppercase italic">
            <Zap size={22} className="fill-emerald-500 text-emerald-500" />
            {data.navigation?.logo}
          </div>

          <div className="flex items-center gap-6">
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

      {/* 2. ส่วนแนะนำ (Hero Section): เน้นความน่าเชื่อถือและการวางระบบที่กริบ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-40">
        {/* วางพิกัดลายตารางจางๆ เพื่อโชว์ความเนี้ยบของโครงสร้างระบบ */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2 ring-1 ring-emerald-500/20">
            <Star size={16} className="fill-emerald-500 text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
              {data.hero.badge}
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl">
                {data.hero.title} <br />
                <span className="text-emerald-500 italic">
                  {data.hero.highlight}
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                {data.hero.description}
              </p>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <button className="group font-heading flex items-center justify-center gap-4 rounded-2xl bg-emerald-500 px-10 py-5 text-xs font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-slate-950 hover:text-white hover:shadow-2xl active:scale-95">
                  คุยรายละเอียดงาน
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-4 border-white bg-slate-100 shadow-sm"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold tracking-tight text-slate-400 uppercase">
                    บริการที่คนในพื้นที่วางใจ
                  </span>
                </div>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-slate-50 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src={data.hero.image}
                alt={data.hero.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. รายการบริการ (Services Section): แผนงานที่พร้อมดูแลคุณในพื้นที่ */}
      <section id="services" className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-24 max-w-3xl border-l-8 border-emerald-500 pl-8 text-left md:pl-12">
            <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-7xl">
              {data.services?.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* [FIX]: ระบุพิกัดข้อมูล item แทนการใช้ any เพื่อล้าง Warning */}
            {data.services?.items.map(
              (
                item: { icon: string; title: string; desc: string },
                idx: number,
              ) => {
                const Icon = IconMap[item.icon] || Wrench;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-[3rem] border border-white bg-white p-12 shadow-sm transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5"
                  >
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
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

      {/* 4. ส่วนติดต่อ (Contact Section): เริ่มวางระบบได้ทันที */}
      <section id="contact" className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-900/40 md:p-24 lg:p-32">
            <div
              className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
                  <CheckCircle2 size={16} />
                  Local Expert System
                </div>
                <h2 className="font-heading text-5xl leading-[1] font-black tracking-tighter italic md:text-8xl">
                  {data.contact?.title}
                </h2>
              </div>

              <div className="grid gap-12 border-t border-white/10 pt-16 text-left md:grid-cols-3 md:border-t-0 md:pt-0">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-emerald-500">
                    <MapPin size={22} />
                  </div>
                  <p className="text-sm leading-relaxed font-bold text-slate-400">
                    {data.contact?.address}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-emerald-500">
                    <Phone size={22} />
                  </div>
                  <p className="text-xl font-black text-white italic transition-colors hover:text-emerald-400">
                    {data.contact?.phone}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-emerald-500">
                    <Mail size={22} />
                  </div>
                  <p className="text-sm font-bold text-slate-400 transition-colors hover:text-white">
                    {data.contact?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนท้ายหน้า (Footer Signature) */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Speed Local Specialist • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}
