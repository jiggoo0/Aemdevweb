/** @format */
"use client"

import React, { memo } from "react"
import Link from "next/link"
import {
  Check,
  Sparkles,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Zap,
  Clock,
} from "lucide-react"

// 🟢 แก้ไข Path: ดึงข้อมูลจากจุดรวมศูนย์ใหม่
import { servicesData, getServiceIcon } from "@/data/servicesData"

// 🟢 แก้ไข Path: ชี้ไปที่ components/iconMap.ts (ตามที่เราย้ายไปที่ root components)
import { resolveServiceIcon } from "@/components/iconMap"

const ServicesPageClient = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50/50 py-24 md:py-40">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl space-y-10">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                คุณภาพระดับสากล ในราคาที่ SME เข้าถึงง่าย
              </span>
            </div>

            <h1 className="text-5xl font-black italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              แผนงานที่ <span className="text-blue-600">พอดี</span> <br />
              <span className="underline decoration-blue-600 decoration-8 underline-offset-[12px]">
                กับขนาดธุรกิจคุณ
              </span>
            </h1>

            <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              ไม่ต้องจ่ายแพงเกินความจำเป็นครับ ผมออกแบบแพ็กเกจตามการใช้งานจริง
              เพื่อให้คุณได้ระบบที่ช่วยปิดการขายได้แม่นยำที่สุด
              ในงบประมาณที่คุ้มค่า
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. PRICING GRID ─── */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-px border-[6px] border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => {
              /** * 🟢 ปรับการเรียกใช้ Icon:
               * ใช้ resolveServiceIcon หรือ getServiceIcon ที่เราเตรียมไว้ใน data
               */
              const Icon = resolveServiceIcon(service.icon) || Zap

              return (
                <div
                  key={service.id}
                  className="group flex flex-col bg-white p-8 transition-all duration-500 hover:bg-slate-50 md:p-12"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <div className="border-4 border-slate-900 bg-slate-900 p-5 text-white shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon size={32} />
                    </div>
                    {service.isHot && (
                      <span className="bg-orange-500 px-4 py-1.5 text-[10px] font-black uppercase italic text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] ring-2 ring-slate-900">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                      {service.targetGroup}
                    </span>
                    <h3 className="mt-3 text-3xl font-black uppercase italic tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mb-8 text-5xl font-black italic tracking-tighter text-slate-900">
                    {service.priceTag.replace("เริ่มต้น ", "")}
                  </div>

                  <p className="mb-10 text-base font-bold leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <div className="mb-12 flex-grow space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                      Included Features:
                    </p>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-emerald-50 text-emerald-600">
                          <Check size={14} className="stroke-[4]" />
                        </div>
                        <span className="text-sm font-bold text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/landing/${service.slug}`}
                    className="flex h-20 w-full items-center justify-center bg-slate-900 text-sm font-black uppercase italic tracking-[0.2em] text-white transition-all hover:-translate-y-1 hover:bg-blue-600 active:scale-95"
                  >
                    ดูรายละเอียดเทมเพลต
                    <MoveRight
                      size={20}
                      className="ml-4 transition-transform group-hover:translate-x-3"
                    />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. VALUE PROPOSITION ─── */}
      <section className="relative overflow-hidden border-y-[6px] border-slate-900 bg-slate-900 py-24 text-white md:py-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Engineering Speed",
                desc: "เราใช้เทคโนโลยี Next.js 15 เพื่อให้เว็บคุณโหลดไวระดับเสี้ยววินาที เพราะความไวคือโอกาสในการขาย",
              },
              {
                icon: ShieldCheck,
                title: "Secure Architecture",
                desc: "ระบบความปลอดภัยมาตรฐานสูง พร้อมการสำรองข้อมูลที่มั่นใจได้ เว็บไม่ค้าง ไม่ล่มในช่วงนาทีทอง",
              },
              {
                icon: Clock,
                title: "Direct Partnership",
                desc: "ดูแลหลังการขายโดยทีมพัฒนาโดยตรง ปรึกษาได้ตลอดอายุการใช้งาน ไม่ทิ้งงานแน่นอนครับ",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group space-y-8 border-l-4 border-blue-600/30 pl-10 transition-all hover:border-blue-600"
              >
                <div className="inline-block bg-white/5 p-4 transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <item.icon className="text-blue-500" size={48} />
                </div>
                <h4 className="text-4xl font-black uppercase italic tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-xl font-bold leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. FINAL CTA ─── */}
      <section className="relative py-32 text-center md:py-48">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-8xl">
            เริ่มสร้างโครงสร้าง <br />
            <span className="text-blue-600">ความสำเร็จไปพร้อมกัน</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl font-bold text-slate-500 md:text-2xl">
            ผมยินดีให้คำปรึกษาฟรีทุกโปรเจกต์ คุยงานตรงไปตรงมา
            ใช้งบประมาณของคุณให้เกิดความคุ้มค่าสูงสุดครับ
          </p>
          <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-24 items-center bg-blue-600 px-16 text-lg font-black uppercase italic tracking-[0.2em] text-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-2 hover:bg-slate-900 hover:shadow-none"
            >
              <MessageCircle size={24} className="mr-4" />
              ปรึกษาโปรเจกต์ฟรี
            </Link>
            <a
              href="tel:0812345678"
              className="flex h-24 items-center border-[4px] border-slate-900 bg-white px-16 text-lg font-black uppercase italic tracking-[0.2em] text-slate-900 transition-all hover:-translate-y-2 hover:bg-slate-900 hover:text-white"
            >
              โทรคุยด่วน
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(ServicesPageClient)
