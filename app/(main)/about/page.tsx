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
        "เลือกใช้เครื่องมือที่เหมาะสมที่สุดกับธุรกิจคุณ เพื่อให้เว็บไซต์โหลดไว ปลอดภัย และพร้อมขยายตัวได้ในระยะยาว",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 stroke-[1.5]" />,
      title: "สื่อสารตรงไปตรงมา",
      description:
        "ปรึกษาได้ทุกขั้นตอนเหมือนเพื่อนคู่คิด ไม่ใช้ศัพท์เทคนิคฟุ่มเฟือย เน้นช่วยแก้ปัญหาให้ธุรกิจจริง",
    },
    {
      icon: <Lightbulb className="h-6 w-6 stroke-[1.5]" />,
      title: "เน้นผลลัพธ์จริง",
      description:
        "เว็บไซต์ต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่ทำงานได้จริง สร้างความน่าเชื่อถือและเปลี่ยนผู้เข้าชมเป็นลูกค้า",
    },
  ]

  return (
    <div className="space-y-24 py-12 md:space-y-40">
      {/* ─── 1. STORY SECTION ─── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Area - ปรับสี Border เป็น Deep Blue และ Accent Orange */}
        <div className="relative aspect-[4/5] overflow-hidden border-l-8 border-t-8 border-[#1E3A8A] shadow-2xl md:border-l-[16px] md:border-t-[16px] lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          />
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-[#1E3A8A] px-6 py-4 text-white md:px-8 md:py-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]">
              Crafting Digital Architecture
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 md:space-y-12 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-2 border-[#F97316] pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1E3A8A] md:text-xs">
              <Sparkles size={14} className="text-[#F97316]" />
              <span>ปรัชญาการทำงาน</span>
            </div>
            <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tighter text-[#1E3A8A]">
              จากโครงร่าง <br />
              <span className="font-light italic text-slate-500">
                สู่ความสำเร็จของคุณ
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base font-medium leading-relaxed text-slate-600 md:text-xl">
            <p>
              ผมเริ่มต้น{" "}
              <span className="font-bold text-[#1E3A8A] underline decoration-[#F97316]/40 underline-offset-4">
                aemdevweb
              </span>{" "}
              ด้วยแนวคิดที่ต้องการให้ SME ไทย มีเว็บไซต์มาตรฐานสากล
              เน้นการใช้งานจริงและสร้างยอดขายได้ต่อเนื่อง
            </p>

            <div className="font-medium text-slate-600">
              ดูแลงานทุกชิ้นด้วยตัวเองเหมือนงานฝีมือ เพื่อให้มั่นใจว่า
              โครงสร้างระบบที่คุณได้รับจะเป็นฟันเฟืองสำคัญในการขับเคลื่อนธุรกิจ...
              <span className="mt-4 block border-l-4 border-[#F97316] bg-[#1E3A8A]/5 py-4 pl-6 font-bold italic text-[#1E3A8A]">
                "ความภูมิใจของผม คือการได้เห็นธุรกิจคุณเติบโต"
              </span>
            </div>
          </div>

          {/* Value Checklist */}
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            {[
              "โครงสร้างเว็บไซต์มั่นคง",
              "คุยตรงกับคนทำงานจริง",
              "ราคาชัดเจน โปร่งใส",
              "ดูแลเหมือนพาร์ทเนอร์ธุรกิจ",
            ].map((item) => (
              <div key={item} className="group flex items-center gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#1E3A8A] text-white transition-colors group-hover:bg-[#F97316]">
                  <Check className="h-3.5 w-3.5 stroke-[4]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-tight text-[#1E3A8A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. VALUES SECTION ─── */}
      <div className="overflow-hidden border-2 border-[#1E3A8A] bg-[#1E3A8A] shadow-2xl">
        <div className="grid grid-cols-1 gap-px md:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group rounded-none border-none bg-white p-10 transition-all duration-500 hover:bg-slate-50 lg:p-14"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center bg-slate-100 text-[#1E3A8A] transition-all duration-500 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:shadow-[6px_6px_0px_0px_#F97316]">
                {value.icon}
              </div>
              <h3 className="mb-4 text-lg font-black uppercase tracking-tighter text-[#1E3A8A]">
                {value.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* ─── 3. TRUST BANNER ─── */}
      <div className="flex flex-col items-center justify-between gap-8 border-l-[8px] border-[#1E3A8A] bg-slate-50 p-8 md:flex-row md:border-l-[16px] md:p-12">
        <div className="flex items-center gap-6">
          <div className="hidden h-14 w-14 shrink-0 items-center justify-center border border-slate-200 bg-white shadow-sm md:flex">
            <ShieldCheck className="h-7 w-7 text-[#F97316]" />
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-black uppercase tracking-tighter text-[#1E3A8A]">
              ส่งมอบงานด้วยมาตรฐานวิศวกรรม
            </h4>
            <p className="text-sm font-bold text-slate-500">
              ตรงเวลา พร้อมคู่มือจัดการเว็บไซต์ด้วยตัวเองแบบมืออาชีพ
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center border-t border-slate-200 pt-6 md:items-end md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
            Support Response
          </p>
          <p className="text-2xl font-black text-[#1E3A8A]">FAST & DIRECT</p>
          <p className="text-[10px] font-bold italic text-[#F97316]">
            ภายใน 24 ชม.
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutContent)
