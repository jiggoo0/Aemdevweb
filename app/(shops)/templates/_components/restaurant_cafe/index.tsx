/** @format */

"use client";

import React from "react";
import Image from "next/image";
import {
  Utensils,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Star,
  Coffee,
  Menu,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { RestaurantCafeData } from "./schema";

/**
 * [Restaurant & Cafe Template]: พิกัดระบบหน้าเว็บสำหรับร้านอาหารและคาเฟ่รุ่นพรีเมียม
 * แนวคิด: เน้นความสวยงามกระตุ้นความหิว เข้าถึงเมนูง่าย และวางระบบให้โหลดไวระดับปีศาจ
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function RestaurantTemplate({
  data,
}: {
  data: RestaurantCafeData;
}) {
  // [Safety Shield]: ส่วนป้องกันพิกัดหน้าขาวหากพิกัดข้อมูลวิ่งมาไม่ครบ
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <Coffee size={40} className="animate-bounce text-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
          Brewing your experience...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. แถบเมนู (Navigation): วางโครงสร้างให้เรียบหรูและนำทางได้แม่นยำ */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-950 uppercase italic">
            <Zap size={22} className="fill-emerald-500 text-emerald-500" />
            {data.navigation?.logo}
          </div>

          <div className="hidden gap-10 lg:flex">
            {data.navigation?.links.map(
              (link: { label: string; href: string }, i: number) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-xs font-black tracking-widest text-slate-500 uppercase transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-4">
            <button className="font-heading rounded-2xl bg-slate-950 px-6 py-2.5 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic shadow-xl shadow-slate-950/10 transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
              {data.navigation?.cta}
            </button>
            <button
              className="text-slate-900 lg:hidden"
              aria-label="เปิดพิกัดเมนู"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. ส่วนต้อนรับ (Hero Section): พื้นที่หยุดสายตาด้วยภาพและพิกัดงานที่ดึงดูด */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2 ring-1 ring-emerald-500/20">
                <Utensils size={16} className="text-emerald-600" />
                <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
                  Premium Dining Experience
                </span>
              </div>

              <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-[9rem]">
                {data.hero.title} <br />
                <span className="text-emerald-500 italic">
                  {data.hero.highlight}
                </span>
              </h1>

              <p className="max-w-xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                {data.hero.description}
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  href="#menu"
                  className="group font-heading flex h-16 items-center gap-4 rounded-2xl bg-emerald-500 px-10 text-xs font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-slate-950 hover:text-white hover:shadow-2xl active:scale-95"
                >
                  สำรวจเมนูเด็ด
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </a>
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

      {/* 3. รายการเมนู (Menu Section): ล้างพิกัด any เพื่อความเนี้ยบของโครงสร้างระบบ */}
      <section id="menu" className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
              {data.menu?.title}
            </h2>
          </div>

          <div className="space-y-32">
            {/* [FIX]: ระบุพิกัดประเภทข้อมูลหมวดหมู่ให้ชัดเจนเพื่อล้าง Warning บรรทัดที่ 144 */}
            {data.menu?.categories.map(
              (
                category: {
                  name: string;
                  items: {
                    name: string;
                    price: string;
                    desc: string;
                    image: string;
                    isRecommended?: boolean;
                  }[];
                },
                idx: number,
              ) => (
                <div key={idx}>
                  <div className="mb-16 flex items-center gap-6">
                    <h3 className="font-heading text-3xl font-black tracking-widest text-emerald-600 uppercase italic">
                      {category.name}
                    </h3>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div className="grid gap-10 md:grid-cols-2">
                    {/* [FIX]: พิกัดรายการอาหารถูกระบุประเภทข้อมูลผ่าน category.items เรียบร้อยแล้ว */}
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="group relative flex flex-col gap-8 rounded-[3rem] border border-white bg-white p-8 transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 sm:flex-row"
                      >
                        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-[2rem] bg-slate-100 sm:h-40 sm:w-40">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {item.isRecommended && (
                            <div className="absolute top-4 right-4 z-10 rounded-full bg-emerald-500 p-2 text-white shadow-lg shadow-emerald-500/20">
                              <Star size={14} fill="currentColor" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col justify-center">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                              {item.name}
                            </h4>
                            <span className="font-heading text-xl font-black text-emerald-600 italic">
                              {item.price}
                            </span>
                          </div>
                          <p className="mt-4 text-base leading-relaxed font-bold text-slate-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 4. ส่วนข้อมูลการติดต่อ (Contact Section) */}
      <section id="contact" className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-900/40 md:p-24 lg:p-32">
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="space-y-12">
                <h2 className="font-heading text-5xl leading-[1] font-black tracking-tighter italic md:text-8xl">
                  {data.contact?.title}
                </h2>

                <div className="space-y-10 border-t border-white/10 pt-12">
                  <ContactInfo
                    icon={MapPin}
                    label="ที่ตั้งร้าน"
                    value={data.contact?.address}
                  />
                  <ContactInfo
                    icon={Clock}
                    label="เวลาเปิดต้อนรับ"
                    value={data.contact?.hours}
                  />
                  <ContactInfo
                    icon={Phone}
                    label="โทรสำรองโต๊ะ"
                    value={data.contact?.phone}
                  />
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-[3rem] bg-white/5 shadow-inner ring-1 ring-white/10">
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <MapPin size={48} className="text-emerald-500 opacity-20" />
                  <p className="font-heading text-[10px] font-black tracking-widest text-slate-600 uppercase italic">
                    Map Integration Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ลายเซ็นต์ท้ายพิกัดหน้าเว็บ */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Speed Dining System • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}

/**
 * ContactInfo - คอมโพเนนต์ย่อยสำหรับแสดงพิกัดข้อมูลการติดต่อ
 */
function ContactInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="group flex items-start gap-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950">
        <Icon size={22} />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase italic">
          {label}
        </p>
        <p className="text-lg leading-relaxed font-bold text-slate-300 transition-colors group-hover:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
