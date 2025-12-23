/** @format */
"use client"

import React, { memo } from "react"
import Image from "next/image"
import {
  Check,
  Code2,
  HeartHandshake,
  Lightbulb,
  Sparkles,
  ShieldCheck,
} from "lucide-react"
import { Card } from "@/components/ui/card"

/**
 * 🏛️ AboutContent Component
 * นำเสนอตัวตนของ aemdevweb ผ่านงานดีไซน์แบบ Industrial Sharp
 * เน้นขอบเหลี่ยม (Rounded-none) และความโปร่งใสในการทำงาน
 */
const AboutContent = () => {
  const values = [
    {
      icon: <Code2 className="h-6 w-6 stroke-[1.5]" />,
      title: "มาตรฐานระดับสากล",
      description:
        "เลือกใช้ Next.js 15 และเทคโนโลยีล่าสุด เพื่อให้เว็บไซต์ของคุณโหลดไว ปลอดภัย และพร้อมขยายตัวตามธุรกิจในอนาคต",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "คุยง่ายแบบพาร์ทเนอร์",
      description:
        "ผมเชื่อในการสื่อสารที่ตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ผมไม่เน้นแค่ขายงาน แต่เน้นช่วยแก้ปัญหาให้ธุรกิจคุณ",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์ที่ใช้งานจริง",
      description:
        "เว็บไซต์ที่ดีต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือ และปิดการขายให้คุณได้ตลอด 24 ชม.",
    },
  ]

  return (
    <div className="space-y-32">
      {/* ─── 1. STORY SECTION: THE ARTISAN PHILOSOPHY ─── */}
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        {/* Image Area: Industrial Frame Style */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-none border-l-[12px] border-t-[12px] border-blue-600 shadow-2xl lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision and craftsmanship"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          {/* Status Label (Industrial Badge) */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-slate-900 px-8 py-5 text-white">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content: Friendly Professional Tone */}
        <div className="space-y-10 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-4 border-blue-600 pb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              <Sparkles size={16} />
              <span>Our Core Philosophy</span>
            </div>
            <h2 className="text-5xl font-black leading-[0.95] tracking-tighter text-slate-900 md:text-8xl">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-400">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

          <div className="space-y-8 text-lg font-bold leading-relaxed text-slate-500 md:text-2xl">
            <p>
              ผมเริ่มต้น <span className="text-slate-900">aemdevweb</span>{" "}
              ด้วยแนวคิดที่ต้องการให้ SME ไทย มีเว็บไซต์ที่มีมาตรฐานสากล
              ในโครงสร้างราคาที่โปร่งใสและคุ้มค่าที่สุด
            </p>

            <p className="font-medium text-slate-600">
              ผมดูแลงานทุกชิ้นด้วยตัวเองเหมือนงานฝีมือ (Craftsmanship)
              เพื่อให้มั่นใจว่าระบบที่คุณได้รับ
              จะเป็นฟันเฟืองสำคัญที่ช่วยขับเคลื่อนธุรกิจของคุณให้เติบโตอย่างมั่นคง
              เพราะผมเชื่อว่า{" "}
              <span className="relative inline-block">
                <span className="relative z-10 px-2 font-black italic text-slate-900">
                  "ความภูมิใจของผม คือการได้เห็นธุรกิจคุณเติบโต"
                </span>
                <span className="absolute bottom-1 left-0 -z-10 h-4 w-full bg-blue-100" />
              </span>
            </p>
          </div>

          {/* Value Checklist (Trust Indicators) */}
          <div className="grid grid-cols-1 gap-6 border-t-2 border-slate-100 pt-10 sm:grid-cols-2">
            {[
              "วิศวกรรมเว็บระดับมาตรฐานสากล",
              "คุยตรงกับคนทำงาน ไม่ผ่านเซลล์",
              "โครงสร้างราคาชัดเจน ไม่มีค่าลับ",
              "ดูแลและซัพพอร์ตเหมือนพาร์ทเนอร์",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-slate-900 text-white">
                  <Check className="h-4 w-4 stroke-[4]" />
                </div>
                <span className="text-sm font-black uppercase tracking-tight text-slate-900">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. VALUES SECTION: BENTO GRID STYLE ─── */}
      <div className="grid grid-cols-1 gap-px border-2 border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-3">
        {values.map((value, index) => (
          <Card
            key={index}
            className="group rounded-none border-none bg-white p-12 transition-all duration-500 hover:bg-slate-50"
          >
            <div className="mb-10 flex h-16 w-16 items-center justify-center bg-slate-100 text-slate-900 ring-1 ring-slate-200 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
              {value.icon}
            </div>
            <h3 className="mb-4 text-xl font-black uppercase tracking-tighter text-slate-900">
              {value.title}
            </h3>
            <p className="text-sm font-bold leading-relaxed text-slate-500">
              {value.description}
            </p>
          </Card>
        ))}
      </div>

      {/* ─── 3. TRUST BANNER: PROFESSIONAL REASSURANCE ─── */}
      <div className="flex flex-col items-center justify-between gap-10 border-l-[12px] border-slate-900 bg-slate-100 p-12 md:flex-row">
        <div className="flex items-center gap-8">
          <div className="hidden h-16 w-16 items-center justify-center bg-white shadow-md md:flex">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900">
              ส่งมอบงานด้วยมาตรฐานวิศวกรรม
            </h4>
            <p className="mt-1 text-base font-bold text-slate-500">
              เราส่งงานตรงเวลา
              พร้อมคู่มือที่ช่วยให้คุณจัดการเว็บไซต์ได้เองอย่างมืออาชีพ
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center border-t border-slate-300 pt-8 md:items-end md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Support Response
          </p>
          <p className="text-3xl font-black text-blue-600">FAST & DIRECT</p>
          <p className="mt-1 text-[10px] font-bold text-slate-400">
            ภายใน 24 ชั่วโมงทุกเคส
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutContent)
