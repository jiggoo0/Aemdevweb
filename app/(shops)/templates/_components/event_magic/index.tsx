/** @format */

import React from "react"
import {
  Calendar,
  MapPin,
  Camera,
  Clock,
  Heart,
  ArrowRight,
  CheckCircle2,
  Menu,
  Zap,
  type LucideIcon, // [FIX]: นำเข้า Type เพื่อล้างพิกัด any
} from "lucide-react"
import { EventMagicData } from "./schema"
// [FIX]: ลบการนำเข้า cn ออกเนื่องจากไม่ได้ใช้งานจริงในไฟล์นี้ เพื่อล้างพิกัด Warning

/**
 * EventMagicTemplate - ระบบหน้าเว็บงานอีเวนต์ (Celebration Edition)
 * แนวคิด: สวยสะกดตา วางระบบให้โหลดไวระดับปีศาจ เพื่อบันทึกช่วงเวลาสำคัญ
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function EventMagicTemplate({ data }: { data: EventMagicData }) {
  // ตรวจสอบความเรียบร้อยของพิกัดข้อมูลก่อนเริ่มงาน
  if (!data?.hero) return null

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. แถบเมนู (Navigation): วางโครงสร้างให้เรียบหรูและเข้าถึงส่วนสำคัญได้ทันที */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-950 italic">
            <Zap size={22} className="fill-emerald-500 text-emerald-500" />
            {data.navigation.logo}
          </div>

          <div className="flex items-center gap-4">
            <button className="font-heading rounded-2xl bg-slate-950 px-6 py-2.5 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic shadow-xl shadow-slate-950/20 transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
              {data.navigation.cta}
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

      {/* 2. ส่วนแนะนำ (Hero Section): พื้นที่หยุดสายตาแขกผู้มีเกียรติ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        {/* วางพิกัดลายพื้นหลังจางๆ เพื่อเพิ่มมิติของงานระบบ */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 text-center">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2 ring-1 ring-emerald-500/20">
            <Heart size={16} className="fill-emerald-500 text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-widest text-emerald-700 uppercase italic">
              A Special Moment v2026
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

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <InfoBadge icon={Calendar} label={data.hero.date} />
            <InfoBadge icon={MapPin} label={data.hero.location} />
          </div>
        </div>
      </section>

      {/* 3. ส่วนแสดงภาพความทรงจำ (Gallery Showcase) */}
      <section className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex items-end justify-between border-b border-slate-200 pb-12">
            <div className="max-w-2xl">
              <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
                {data.gallery.title}
              </h2>
            </div>
            <Camera
              className="mb-4 hidden text-emerald-500 md:block"
              size={48}
              strokeWidth={1.5}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.gallery.images.map((img: { alt: string }, i: number) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-white shadow-2xl transition-all duration-700 hover:-translate-y-4"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                <div className="flex h-full w-full items-center justify-center bg-slate-200 p-12 text-center">
                  <p className="font-heading text-[11px] font-black tracking-widest text-slate-400 uppercase italic">
                    {img.alt}
                  </p>
                </div>

                <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ส่วนลำดับเหตุการณ์สำคัญ (Timeline) */}
      <section className="py-32 lg:py-48">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 italic md:text-8xl">
              {data.details.title}
            </h2>
          </div>

          <div className="relative space-y-12">
            <div className="absolute top-0 left-[2.75rem] hidden h-full w-px bg-slate-100 md:block" />

            {data.details.items.map(
              (item: { time: string; activity: string }, i: number) => (
                <div
                  key={i}
                  className="group relative flex flex-col gap-6 rounded-[2.5rem] border border-slate-50 bg-white p-8 transition-all hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 md:flex-row md:items-center md:gap-12 md:p-12"
                >
                  <div className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Clock size={28} />
                  </div>
                  <div className="space-y-2">
                    <span className="font-heading text-sm font-black tracking-[0.3em] text-emerald-500 uppercase italic">
                      {item.time}
                    </span>
                    <h3 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                      {item.activity}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 5. ส่วนปิดการขายท้ายหน้า (CTA): เริ่มวางพิกัดวันสำคัญของคุณ */}
      <section className="bg-slate-950 py-32 lg:py-48">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-400 uppercase italic">
            Ready to share your story?
          </p>
          <h2 className="font-heading mt-10 text-6xl leading-[1] font-black tracking-tighter italic md:text-9xl">
            เริ่มวางระบบ <br />
            <span className="text-emerald-500 underline decoration-emerald-500/20">
              วันสำคัญของคุณ
            </span>
          </h2>
          <div className="mt-20 flex justify-center">
            <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-emerald-500 px-12 text-sm font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95">
              คุยโปรเจกต์กับนายเอ็ม
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ส่วนท้าย (Footer Signature) */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Speed Event System • AEM Engine 2026
        </p>
      </footer>
    </div>
  )
}

/**
 * InfoBadge - คอมโพเนนต์ย่อยสำหรับแสดงข้อมูลHero
 * [FIX]: ล้างพิกัด any โดยระบุสัญญาข้อมูลพิกัดไอคอนให้ชัดเจน
 */
function InfoBadge({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-8 py-4 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-xl hover:ring-emerald-500/20">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-emerald-600 transition-colors">
        <Icon size={20} />
      </div>
      <span className="text-sm font-black tracking-wider text-slate-950 uppercase italic">
        {label}
      </span>
    </div>
  )
}
