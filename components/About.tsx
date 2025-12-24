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

const AboutContent = () => {
  const values = [
    {
      icon: <Code2 className="h-6 w-6 stroke-[1.5]" />,
      title: "เทคโนโลยีระดับสากล",
      description:
        "เลือกใช้เครื่องมือที่เหมาะสมที่สุดกับธุรกิจคุณ (Optimal Tech Stack) เพื่อให้เว็บไซต์โหลดไว ปลอดภัย และพร้อมขยายตัวได้ในระยะยาว",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "คุยง่ายแบบพาร์ทเนอร์",
      description:
        "ผมเชื่อในการสื่อสารที่ตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ไม่ใช้ศัพท์เทคนิคฟุ่มเฟือย เน้นช่วยแก้ปัญหาให้ธุรกิจจริง",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์ที่ใช้งานจริง",
      description:
        "เว็บไซต์ต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือและเปลี่ยนผู้เข้าชมเป็นลูกค้าให้ธุรกิจตลอด 24 ชม.",
    },
  ]

  return (
    <div className="space-y-24 md:space-y-40">
      {/* ─── 1. STORY SECTION ─── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Area: Responsive Border */}
        <div className="relative aspect-[4/5] overflow-hidden border-l-8 border-t-8 border-blue-600 shadow-2xl md:border-l-[16px] md:border-t-[16px] lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-slate-900 px-6 py-4 text-white md:px-8 md:py-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 md:space-y-12 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-2 border-blue-600 pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 md:text-xs">
              <Sparkles size={14} />
              <span>Our Core Philosophy</span>
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.85] tracking-tighter text-slate-900">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-400">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base font-bold leading-relaxed text-slate-500 md:text-xl">
            <p>
              ผมเริ่มต้น{" "}
              <span className="text-slate-900 underline decoration-blue-600/30">
                aemdevweb
              </span>{" "}
              ด้วยแนวคิดที่ต้องการให้ SME ไทย มีเว็บไซต์มาตรฐานสากล
              ด้วยการคัดเลือกเครื่องมือที่ทรงพลังที่สุดเพื่อให้สอดคล้องกับความต้องการของแต่ละธุรกิจ
            </p>

            <div className="font-medium text-slate-600">
              ดูแลงานทุกชิ้นด้วยตัวเองเหมือนงานฝีมือ (Craftsmanship)
              เพื่อให้มั่นใจว่า
              โครงสร้างระบบที่คุณได้รับจะเป็นฟันเฟืองสำคัญในการขับเคลื่อนธุรกิจ...
              <span className="mt-4 block border-l-4 border-blue-600 bg-blue-50/50 py-2 pl-4 font-black italic text-slate-900">
                "ความภูมิใจของผม คือการได้เห็นธุรกิจคุณเติบโต"
              </span>
            </div>
          </div>

          {/* Value Checklist */}
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            {[
              "มาตรฐานวิศวกรรมระดับสูง",
              "คุยตรงกับคนทำงาน 100%",
              "ราคาชัดเจน โปร่งใสที่สุด",
              "ดูแลเหมือนพาร์ทเนอร์ธุรกิจ",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-slate-900 text-white">
                  <Check className="h-3 w-3 stroke-[4]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-tight text-slate-900">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. VALUES SECTION: BENTO GRID ─── */}
      <div className="overflow-hidden border-2 border-slate-900 bg-slate-900 shadow-2xl">
        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group rounded-none border-none bg-white p-10 transition-all duration-500 hover:bg-slate-50 lg:p-14"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-slate-100 text-slate-900 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
                {value.icon}
              </div>
              <h3 className="mb-4 text-lg font-black uppercase tracking-tighter text-slate-900">
                {value.title}
              </h3>
              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* ─── 3. TRUST BANNER ─── */}
      <div className="flex flex-col items-center justify-between gap-8 border-l-[8px] border-slate-900 bg-slate-100 p-8 md:flex-row md:border-l-[16px] md:p-12">
        <div className="flex items-center gap-6">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center border border-slate-200 bg-white shadow-sm md:flex">
            <ShieldCheck className="h-7 w-7 text-blue-600" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black uppercase tracking-tighter text-slate-900">
              ส่งมอบงานด้วยมาตรฐานวิศวกรรม
            </h4>
            <p className="text-sm font-bold text-slate-500">
              ตรงเวลา พร้อมคู่มือจัดการเว็บไซต์ด้วยตัวเองแบบมืออาชีพ
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center border-t border-slate-300 pt-6 md:items-end md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
            Support Response
          </p>
          <p className="text-2xl font-black text-blue-600">FAST & DIRECT</p>
          <p className="text-[9px] font-bold italic text-slate-400">
            ภายใน 24 ชม.
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutContent)
