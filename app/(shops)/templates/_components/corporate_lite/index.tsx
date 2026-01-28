/** @format */

"use client"

import React from "react"
import Image from "next/image"
import {
  Users,
  Settings,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Zap,
  Menu,
  type LucideIcon, // [FIX]: นำเข้าพิกัดประเภทข้อมูลเพื่อล้าง any
} from "lucide-react"
import { CorporateLiteData } from "./schema"
// [FIX]: ลบการนำเข้า cn ออกเนื่องจากไม่ได้ใช้งานจริงเพื่อล้าง Warning

/** * IconMap - ตัวแปลงชื่อไอคอนจากฐานข้อมูลเป็นคอมโพเนนต์จริง
 * [FIX]: ระบุประเภทข้อมูล LucideIcon แทนการใช้ any เพื่อความกริบของระบบงาน
 */
const IconMap: Record<string, LucideIcon> = {
  Users: Users,
  Settings: Settings,
  TrendingUp: TrendingUp,
}

/**
 * CorporateLiteTemplate - แผนงานเว็บไซต์ธุรกิจรุ่นเริ่มต้น (Starter Pro)
 * แนวคิด: เน้นความภูมิฐานที่มาพร้อมความเร็ว วางระบบให้โหลดไวระดับปีศาจเพื่อ SME ยุคใหม่
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function CorporateLiteTemplate({
  data,
}: {
  data: CorporateLiteData
}) {
  // [Safety Check]: ตรวจสอบความเรียบร้อยของพิกัดข้อมูลก่อนเรนเดอร์
  if (!data?.hero) return null

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. Navigation: แถบเมนูที่เน้นความโปร่งและเข้าถึงง่าย */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-slate-950 italic">
            <Zap size={22} className="fill-emerald-500 text-emerald-500" />
            {data.navigation.logo}
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {data.navigation.links.map(
              (link: { label: string; href: string }, i: number) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-xs font-black tracking-widest text-slate-500 uppercase transition-colors hover:text-emerald-600"
                >
                  {link.label}
                </a>
              )
            )}
            <button className="rounded-xl bg-slate-950 px-8 py-3 text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase italic shadow-xl shadow-slate-950/20 transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
              {data.navigation.cta || "Get Started"}
            </button>
          </div>

          <button
            className="text-slate-900 md:hidden"
            aria-label="เปิดพิกัดเมนู"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* 2. Hero Section: ส่วนหยุดสายตาเพื่อเปลี่ยนคนดูให้เป็นลูกค้า */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-2">
              <CheckCircle2 size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase italic">
                Verified Business Model
              </span>
            </div>

            <h1 className="font-heading text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl">
              {data.hero.title} <br />
              <span className="text-emerald-500 italic">
                {data.hero.highlight}
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed font-bold text-slate-500 md:text-2xl">
              {data.hero.description}
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <button className="group font-heading flex items-center justify-center gap-4 rounded-2xl bg-emerald-500 px-10 py-5 text-xs font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-slate-950 hover:text-white hover:shadow-2xl active:scale-95">
                ดูแผนงานบริการ
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
                  Trusted by SME Leaders
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
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-40" />
          </div>
        </div>

        {/* ส่วนตกแต่งพื้นหลังจางๆ */}
        <div className="absolute top-0 right-0 -z-0 h-full w-1/3 translate-x-1/3 rounded-full bg-emerald-50/50 blur-[120px]" />
      </section>

      {/* 3. Services Section: รายการงานบริการที่เน้นผลลัพธ์ */}
      <section id="services" className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-2xl border-l-8 border-emerald-500 pl-8 md:pl-12">
            <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 italic md:text-6xl">
              {data.services.title}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.services.items.map(
              (
                item: { icon: string; title: string; desc: string },
                i: number
              ) => {
                const Icon = IconMap[item.icon] || Settings
                return (
                  <div
                    key={i}
                    className="group relative rounded-[2.5rem] border border-white bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5"
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-4 text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed font-bold text-slate-400">
                      {item.desc}
                    </p>

                    {/* เส้นตกแต่งที่แสดงผลเมื่อ Hover */}
                    <div className="mt-8 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </section>

      {/* 4. Contact Section: ส่วนจบที่ทรงพลังเพื่อเริ่มแผนงาน */}
      <section id="contact" className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-900/40 md:p-24 lg:p-32">
            {/* Grid Pattern Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

            <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
                  <CheckCircle2 size={16} />
                  Ready to Start
                </div>
                <h2 className="font-heading text-5xl leading-[1] font-black tracking-tighter italic md:text-8xl">
                  {data.contact.title}
                </h2>
              </div>

              <div className="grid gap-8 border-t border-white/10 pt-16 md:grid-cols-3 md:border-t-0 md:pt-0">
                <ContactInfo
                  icon={Mail}
                  label="Email Address"
                  value={data.contact.email}
                />
                <ContactInfo
                  icon={Phone}
                  label="Contact Number"
                  value={data.contact.phone}
                />
                <ContactInfo
                  icon={MapPin}
                  label="Office Location"
                  value={data.contact.address}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนท้าย (Footer Signature) */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Business System • AEM Engine v2026
        </p>
      </footer>
    </div>
  )
}

/**
 * ContactInfo - คอมโพเนนต์ย่อยสำหรับแสดงพิกัดข้อมูลการติดต่อ
 * [FIX]: ล้างพิกัด any โดยระบุประเภทข้อมูล LucideIcon ให้กริบที่สุด
 */
function ContactInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon
  label: string
  value: string
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-slate-500 uppercase italic">
        <Icon size={14} className="text-emerald-500" />
        {label}
      </div>
      <p className="text-sm font-bold text-white transition-colors hover:text-emerald-400">
        {value}
      </p>
    </div>
  )
}
