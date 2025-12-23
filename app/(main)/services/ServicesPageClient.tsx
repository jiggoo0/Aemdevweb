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

import { servicesData, getServiceIcon } from "@/data/servicesData"

const ServicesPageClient = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO: INDUSTRIAL BLUEPRINT ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50/50 py-24 md:py-40">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-4xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                AEMDEVWEB / SERVICE_SPECIFICATIONS
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black italic leading-[0.85] tracking-tighter text-slate-900">
              แผนงานที่{" "}
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-8">
                พอดี
              </span>{" "}
              <br />
              กับขนาดธุรกิจคุณ
            </h1>

            <p className="max-w-2xl border-l-[12px] border-blue-600 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              เราออกแบบสถาปัตยกรรมเว็บตามการใช้งานจริง
              เพื่อให้คุณได้ระบบที่ช่วยปิดการขายได้แม่นยำที่สุด
              ในงบประมาณที่คุ้มค่า
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. PRICING GRID: BENTO SHARP ─── */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-1 border-[6px] border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => {
              // 🟢 แก้ไข: ใช้ getServiceIcon(service.icon) เพื่อดึง Icon ที่ถูกต้องตาม Type
              const Icon = getServiceIcon(service.icon)

              return (
                <div
                  key={service.id}
                  className="group flex flex-col bg-white p-8 transition-all duration-500 hover:bg-slate-50 md:p-12"
                >
                  <div className="mb-14 flex items-start justify-between">
                    <div className="border-4 border-slate-900 bg-slate-900 p-5 text-white shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all group-hover:bg-blue-600 group-hover:shadow-none">
                      <Icon size={32} strokeWidth={2.5} />
                    </div>
                    {service.isHot && (
                      <span className="bg-orange-500 px-4 py-2 text-[10px] font-black uppercase italic text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <div className="mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                      {service.targetGroup}
                    </span>
                    <h3 className="mt-2 text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-4xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* 🟢 แก้ไข: จัดการการแสดงผลราคาให้รองรับ Tabular Nums */}
                  <div className="mb-8 text-5xl font-black italic tabular-nums tracking-tighter text-slate-900">
                    {service.priceTag.includes("เริ่มต้น")
                      ? `฿${service.priceTag.replace("เริ่มต้น ", "")}`
                      : service.priceTag}
                  </div>

                  <p className="mb-10 text-base font-bold leading-relaxed text-slate-500">
                    {service.description}
                  </p>

                  <div className="mb-14 flex-grow space-y-4 border-t-2 border-slate-100 pt-8">
                    <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                      Standard Specifications:
                    </p>
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Check
                          size={16}
                          className="shrink-0 stroke-[4] text-emerald-500"
                        />
                        <span className="text-sm font-black text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/landing/${service.slug}`}
                    className="flex h-20 w-full items-center justify-center border-4 border-slate-900 bg-slate-900 text-[11px] font-black uppercase italic tracking-[0.2em] text-white transition-all hover:bg-blue-600 active:scale-95"
                  >
                    Preview Architecture
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

      {/* ─── 3. VALUE PROPOSITION: INDUSTRIAL STRENGTH ─── */}
      <section className="relative overflow-hidden border-y-[6px] border-slate-900 bg-slate-900 py-24 text-white md:py-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Engineering Speed",
                desc: "Next.js 15 โหลดไวระดับเสี้ยววินาที เพราะความไวคือโอกาสในการขายที่ SME ไม่ควรพลาด",
              },
              {
                icon: ShieldCheck,
                title: "Secure & Stable",
                desc: "สถาปัตยกรรมความปลอดภัยสูง มั่นใจได้ว่าเว็บไม่ล่มในช่วงนาทีทองของธุรกิจคุณ",
              },
              {
                icon: Clock,
                title: "Direct Support",
                desc: "คุยตรงกับทีมพัฒนา ไม่ผ่านเซลล์ ปรึกษาได้ตลอดอายุการใช้งาน ดูแลแบบพาร์ทเนอร์จริงจัง",
              },
            ].map((item, i) => (
              <div key={i} className="group space-y-8">
                <div className="inline-block border-2 border-blue-500/30 p-4 transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon size={40} />
                </div>
                <h4 className="text-3xl font-black uppercase italic tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-lg font-bold leading-relaxed text-slate-400 group-hover:text-slate-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. FINAL CTA ─── */}
      <section className="bg-white py-32 md:py-48">
        <div className="mx-auto max-w-5xl space-y-16 px-6 text-center">
          <h2 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-slate-900 md:text-8xl lg:text-[110px]">
            BUILD YOUR <br />
            <span className="text-blue-600">SUCCESS FRAMEWORK</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="flex h-24 w-full items-center justify-center bg-blue-600 px-12 text-[13px] font-black uppercase italic tracking-[0.2em] text-white shadow-[10px_10px_0px_0px_rgba(15,23,42,1)] transition-all hover:-translate-y-2 hover:bg-slate-900 active:translate-y-0 sm:w-auto"
            >
              <MessageCircle size={24} className="mr-4" />
              Start Project Inquiry
            </Link>
            <a
              href="tel:0812345678"
              className="flex h-24 w-full items-center justify-center border-[4px] border-slate-900 bg-white px-12 text-[13px] font-black uppercase italic tracking-[0.2em] text-slate-900 transition-all hover:-translate-y-2 hover:bg-slate-900 hover:text-white sm:w-auto"
            >
              Call Direct Support
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(ServicesPageClient)
