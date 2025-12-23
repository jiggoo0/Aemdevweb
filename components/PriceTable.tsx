/** @format */
"use client"

import React, { memo } from "react"
import {
  Check,
  Sparkles,
  MessageSquare,
  Zap,
  ShieldCheck,
  MoveRight,
  PenTool,
} from "lucide-react"
import { cn } from "@/lib/utils"

const pricingPlans = [
  {
    name: "Starter Package",
    price: "3,900",
    description:
      "ทางเลือกที่คุ้มค่าที่สุดสำหรับพ่อค้าแม่ค้าออนไลน์ที่ต้องการหน้าปิดการขายแบบมืออาชีพ โหลดไว พร้อมรับออเดอร์ทันที",
    features: [
      "1 Landing Page (High Conversion)",
      "รองรับการแสดงผลมือถือ 100%",
      "ปุ่มแชท Line / Messenger / โทร",
      "ติดตั้งระบบเก็บฐานข้อมูลลูกค้า",
      "ฟรี Hosting และ SSL ความปลอดภัยสูง",
    ],
    recommended: false,
  },
  {
    name: "Business Enterprise",
    price: "7,900",
    description:
      "ยกระดับความน่าเชื่อถือด้วยเว็บไซต์โครงสร้างระดับสากล เหมาะสำหรับบริษัท ห้างหุ้นส่วน หรือคลินิกที่ต้องการความมั่นคง",
    features: [
      "Multi-Page (รองรับหลายหน้าบริการ)",
      "เซ็ตอัพ SEO ให้ Google ค้นหาเจอ",
      "ระบบแกลเลอรีผลงาน / รีวิวลูกค้า",
      "ระบบแจ้งเตือนนัดหมายผ่าน Line",
      "วิเคราะห์สถิติผู้เข้าชม (Analytics)",
      "Premium Domain & Hosting สเปกสูง",
    ],
    recommended: true,
  },
]

const PriceTable = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-48"
      id="pricing"
    >
      {/* ─── 0. ARCHITECTURAL BACKGROUND ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1.5px,transparent_1.5px),linear-gradient(to_bottom,#f1f5f9_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] opacity-70" />

      <div className="mx-auto max-w-7xl px-6">
        {/* ─── 1. HEADER SECTION ─── */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]">
            <Sparkles size={16} className="animate-pulse text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 md:text-xs">
              Project Investment Structure
            </span>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="text-5xl font-black leading-[0.85] tracking-tighter text-slate-900 md:text-8xl lg:text-[110px]">
              งบชัดเจน <br />
              <span className="italic text-blue-600 underline decoration-slate-900 decoration-[12px] underline-offset-[14px]">
                ไม่บานปลาย
              </span>
            </h2>
            <p className="max-w-md border-l-[12px] border-blue-600/30 pl-8 text-xl font-bold italic leading-relaxed text-slate-500 md:text-2xl">
              ความโปร่งใสคือมาตรฐานวิศวกรรมของเรา <br />
              <span className="not-italic text-slate-900">
                ดูแลครบจบจนออนไลน์ได้จริง ไม่มีค่าใช้จ่ายแอบแฝง
              </span>
            </p>
          </div>
        </div>

        {/* ─── 2. PRICING GRID ─── */}
        <div className="grid grid-cols-1 gap-px border-[6px] border-slate-900 bg-slate-900 shadow-[20px_20px_0px_0px_rgba(15,23,42,0.05)] md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "group relative flex flex-col bg-white p-8 transition-all duration-500 hover:bg-slate-50 md:p-16 lg:p-20",
                plan.recommended && "bg-blue-50/10"
              )}
            >
              {plan.recommended && (
                <div className="absolute right-0 top-0 border-b-[4px] border-l-[4px] border-slate-900 bg-blue-600 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white md:px-10 md:py-4 md:text-[11px]">
                  Most Popular choice
                </div>
              )}

              <div className="mb-14">
                <h3 className="mb-10 text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 md:gap-4">
                  <span className="text-2xl font-black italic text-blue-600 md:text-4xl">
                    ฿
                  </span>
                  <span className="text-7xl font-black tabular-nums tracking-tighter text-slate-900 transition-colors group-hover:text-blue-600 md:text-9xl">
                    {plan.price}
                  </span>
                  <span className="text-[10px] font-black uppercase italic tracking-[0.2em] text-slate-400 md:text-sm">
                    / Start
                  </span>
                </div>
                <p className="mt-10 text-base font-bold leading-relaxed text-slate-500 md:text-xl">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-14 flex-grow space-y-4">
                <p className="mb-6 text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
                  Project Specifications:
                </p>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 border-b border-slate-100 pb-4 last:border-0"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-emerald-50 text-emerald-600">
                      <Check className="h-3 w-3 stroke-[4]" />
                    </div>
                    <span className="text-base font-black uppercase italic tracking-tight text-slate-800 md:text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "group/btn flex h-20 w-full items-center justify-center gap-4 border-4 border-slate-900 text-[11px] font-black uppercase italic tracking-[0.2em] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:h-24 md:text-sm",
                  plan.recommended
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-900 hover:bg-slate-900 hover:text-white"
                )}
              >
                <MessageSquare size={18} fill="currentColor" />
                เริ่มปรึกษาโปรเจกต์
                <MoveRight
                  size={18}
                  className="transition-transform group-hover/btn:translate-x-3"
                />
              </button>
            </div>
          ))}

          {/* ─── 🛠️ CUSTOM ARCHITECTURE NOTICE ─── */}
          <div className="col-span-1 bg-slate-900 p-8 md:col-span-2 md:p-16">
            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-blue-400">
                  <PenTool size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Bespoke Engineering
                  </span>
                </div>
                <h4 className="text-3xl font-black italic text-white md:text-4xl">
                  ต้องการระบบเฉพาะทาง{" "}
                  <span className="text-blue-500">(Custom Software)</span>{" "}
                </h4>
                <p className="max-w-2xl text-base font-bold text-slate-400 md:text-lg">
                  ออกแบบและเขียนโปรแกรมขึ้นใหม่ (Custom Made) ให้ตรงกับ Flow
                  งานของคุณได้ 100% ไม่ว่าจะเป็นระบบหลังบ้าน หรือการเชื่อมต่อ
                  API พิเศษ
                </p>
              </div>
              <button className="h-20 w-full shrink-0 border-2 border-blue-500 bg-transparent px-10 text-[11px] font-black uppercase tracking-[0.2em] text-blue-500 transition-all hover:bg-blue-500 hover:text-white lg:w-auto">
                คุยงานระบบ Custom
              </button>
            </div>
          </div>
        </div>

        {/* ─── 3. FOOTER GUARANTEE BAR ─── */}
        <div className="mt-20 flex flex-col items-center gap-10">
          <div className="flex flex-wrap items-center justify-center gap-8 border-[6px] border-slate-900 bg-white px-8 py-6 shadow-xl md:gap-12 md:px-12 md:py-8">
            <div className="flex items-center gap-4">
              <ShieldCheck
                className="h-8 w-8 text-blue-600"
                strokeWidth={2.5}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
                Service Guarantee
              </span>
            </div>
            <div className="hidden h-6 w-px bg-slate-200 md:block" />
            <div className="flex items-center gap-4">
              <Zap className="h-8 w-8 text-orange-500" strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">
                Cloud Infrastructure
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-center text-[10px] font-bold italic leading-relaxed text-slate-400 md:text-xs">
            *
            ราคาเริ่มต้นอาจปรับเปลี่ยนตามความซับซ้อนของฟังก์ชันงานวิศวกรรมซอฟต์แวร์{" "}
            <br className="hidden md:block" />
            เพื่อให้ธุรกิจคุณได้รับระบบที่มีประสิทธิภาพสูงสุด
            ปรึกษาได้ฟรีไม่มีค่าใช้จ่ายครับ
          </p>
        </div>
      </div>
    </section>
  )
}

export default memo(PriceTable)
