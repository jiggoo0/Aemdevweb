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
  Terminal,
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
      {/* ─── 1. STORY SECTION: THE CRAFTSMAN ─── */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
        {/* Image Area: Brutalist Frame */}
        <div className="relative aspect-[4/5] overflow-hidden border-l-[12px] border-t-[12px] border-[#1E3A8A] shadow-2xl md:border-l-[20px] md:border-t-[20px] lg:col-span-5">
          <Image
            src="https://dpgmfbnzyhnhwzyozoxe.supabase.co/storage/v1/object/public/aemdevweb/About/About.png"
            alt="aemdevweb vision"
            fill
            priority
            className="object-cover grayscale-[20%] transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          />
          {/* Status Badge */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-[#1E3A8A] px-6 py-4 text-white md:px-8 md:py-5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#F97316] shadow-[0_0_10px_#F97316]" />
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]">
              Digital_Architect_v3.0
            </span>
          </div>
        </div>

        {/* Text Content: Philosophy */}
        <div className="space-y-8 md:space-y-12 lg:col-span-7">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 border-b-2 border-[#F97316] pb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1E3A8A] md:text-xs">
              <Sparkles size={14} className="text-[#F97316]" />
              <span>Digital Philosophy</span>
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-tighter text-[#1E3A8A]">
              เปลี่ยนโครงร่าง <br />
              <span className="font-light italic text-slate-500">
                สู่รากฐานที่มั่นคง
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base font-medium leading-relaxed text-slate-700 md:text-xl">
            <p>
              ผมเริ่มต้น{" "}
              <span className="font-black text-[#1E3A8A]">aemdevweb</span>{" "}
              ด้วยพันธกิจเดียวคือการทำลายกำแพงระหว่าง "เทคโนโลยีที่ซับซ้อน" กับ
              "ความสำเร็จของธุรกิจ SME"
            </p>

            <div className="font-medium">
              ผมดูแลงานทุกชิ้นแบบ <span className="italic">Custom-Built</span>{" "}
              เพื่อให้มั่นใจว่าโค้ดทุกบรรทัดและการออกแบบทุกจุด
              จะเป็นฟันเฟืองที่ช่วยทำเงินให้ธุรกิจคุณได้จริง
              <span className="mt-8 block border-l-8 border-[#F97316] bg-[#1E3A8A]/5 py-6 pl-8 font-heading text-xl font-black italic text-[#1E3A8A] md:text-2xl">
                "ความสำเร็จของลูกค้า คือ Metric วัดผลงานที่แท้จริงของผม"
              </span>
            </div>
          </div>

          {/* Value Checklist: Two Column */}
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
            {[
              "High-Performance Core",
              "Direct Engineering Support",
              "Fixed Price Architecture",
              "Long-term Partnership",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-3 border-b border-slate-100 pb-2"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#1E3A8A] text-white transition-all group-hover:scale-110 group-hover:bg-[#F97316]">
                  <Check className="h-3 w-3 stroke-[4]" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-widest text-[#1E3A8A]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. VALUES SECTION: THE PILLARS ─── */}
      <div className="relative overflow-hidden border-[4px] border-[#1E3A8A] bg-[#1E3A8A] shadow-2xl">
        <div className="grid grid-cols-1 gap-[4px] md:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group relative flex flex-col rounded-none border-none bg-white p-10 transition-all duration-500 hover:bg-slate-50 lg:p-14"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center border-2 border-[#1E3A8A] bg-white text-[#1E3A8A] transition-all duration-500 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:shadow-[6px_6px_0px_0px_#F97316]">
                {value.icon}
              </div>
              <h3 className="mb-4 text-xl font-black uppercase tracking-tighter text-[#1E3A8A]">
                {value.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-500">
                {value.description}
              </p>
              {/* Card Index Marker */}
              <span className="absolute bottom-6 right-6 font-mono text-[10px] font-bold text-slate-200 group-hover:text-slate-300">
                0{index + 1}
              </span>
            </Card>
          ))}
        </div>
      </div>

      {/* ─── 3. TRUST BANNER: SERVICE PROTOCOL ─── */}
      <div className="flex flex-col items-center justify-between gap-8 border-l-[12px] border-[#1E3A8A] bg-slate-50 p-8 md:flex-row md:border-l-[20px] md:p-16">
        <div className="flex items-center gap-6">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center border-2 border-slate-200 bg-white shadow-sm md:flex">
            <ShieldCheck className="h-8 w-8 text-[#F97316]" />
          </div>
          <div className="space-y-1">
            <h4 className="flex items-center gap-2 text-xl font-black uppercase tracking-tighter text-[#1E3A8A]">
              <Terminal size={18} className="text-[#F97316]" />
              Engineering Standard
            </h4>
            <p className="text-sm font-bold text-slate-500">
              ทุกเว็บไซต์ถูกสร้างด้วยระเบียบวิธีวิศวกรรม พร้อม Documentation
              ชัดเจน
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center border-t-2 border-slate-200 pt-8 md:items-end md:border-l-2 md:border-t-0 md:pl-12 md:pt-0">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            System Uptime
          </p>
          <p className="text-3xl font-black text-[#1E3A8A]">FAST_RESPONSE</p>
          <p className="mt-1 bg-[#F97316] px-3 py-0.5 text-[10px] font-black italic text-white">
            RESOLVED WITHIN 24H
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(AboutContent)
