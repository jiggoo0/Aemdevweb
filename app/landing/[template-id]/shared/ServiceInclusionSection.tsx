/** @format */
"use client"

import React from "react"
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Search, 
  Globe,
  MessageSquare,
  ArrowUpRight,
  PenTool, // ไอคอนสำหรับงานดีไซน์
  Layers
} from "lucide-react"
import { AEMServicePackage, MultiLangText, isMultiLang } from "../types"

interface ServiceInclusionProps {
  data?: AEMServicePackage
  lang?: "th" | "en"
}

const defaultInclusions = [
  {
    icon: Zap,
    title: { th: "Next.js 15 Engine", en: "Next.js 15 Engine" },
    desc: { th: "สถาปัตยกรรมล่าสุด โหลดไวระดับมิลลิวินาที", en: "Latest architecture with millisecond loading." }
  },
  {
    icon: ShieldCheck,
    title: { th: "Enterprise Security", en: "Enterprise Security" },
    desc: { th: "ติดตั้ง SSL และระบบป้องกันความปลอดภัยมาตรฐานสากล", en: "SSL and global security standards included." }
  },
  {
    icon: Search,
    title: { th: "Technical SEO", en: "Technical SEO" },
    desc: { th: "โครงสร้างถูกต้องตาม Google Core Web Vitals", en: "Optimized for Google Core Web Vitals." }
  },
  {
    icon: Globe,
    title: { th: "Cloud-Native Hosting", en: "Cloud-Native Hosting" },
    desc: { th: "รันบน Edge Network ทั่วโลก เว็บไม่มีวันล่ม", en: "Runs on Global Edge Network for 99.9% uptime." }
  }
]

const ServiceInclusionSection = ({ data, lang = "th" }: ServiceInclusionProps) => {
  const getText = (text: MultiLangText | string) => {
    if (isMultiLang(text)) return text[lang]
    return text
  }

  return (
    <section className="relative overflow-hidden border-y-4 border-slate-900 bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />

      <div className="container mx-auto px-6">
        
        {/* ─── 1. DESIGN FLEX BOX (จุดที่เพิ่มใหม่) ─── */}
        <div className="mb-20 border-[4px] border-dashed border-blue-600 bg-blue-50/50 p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-blue-600">
                <PenTool size={20} />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Design Freedom</span>
              </div>
              <h3 className="text-3xl font-black italic tracking-tighter text-slate-900 md:text-4xl">
                {lang === "th" 
                  ? "เทมเพลตนี้คือ 'ไอเดีย' แต่ 'ดีไซน์จริง' คุณกำหนดเองได้" 
                  : "This template is an 'Idea', but the 'Real Design' is yours to define."}
              </h3>
              <p className="max-w-2xl text-lg font-bold text-slate-600">
                {lang === "th"
                  ? "แบบเว็บไซต์นี้คือตัวอย่างที่เราจัดทำเพื่อนำเสนอโครงสร้างเบื้องต้น หากคุณมี Reference ที่ชอบ หรือต้องการงานออกแบบเฉพาะตัว (Bespoke Design) เราสามารถ Custom ใหม่ให้ตรงตาม Flow ธุรกิจของคุณได้ 100% ครับ"
                  : "This layout is a concept. If you have a specific style or need a bespoke design, we can customize every pixel to match your business flow 100%."}
              </p>
            </div>
            <div className="shrink-0 rounded-full border-4 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <Layers size={40} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 border-2 border-slate-900 bg-blue-600 px-4 py-1 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
              <Cpu size={14} className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                AEM DEV / Engineering Core
              </span>
            </div>
            <h2 className="text-4xl font-black italic tracking-tighter text-slate-900 md:text-6xl">
              มาตรฐานที่คุณจะได้รับ <br />
              <span className="text-blue-600">ทุกแพ็กเกจ</span>
            </h2>
          </div>

          <div className="flex flex-col items-center border-4 border-slate-900 bg-slate-900 p-8 text-white shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] md:items-start">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Support Level</p>
            <p className="text-2xl font-black italic">{data?.supportLevel || "Direct Developer Support"}</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-slate-400">
              <MessageSquare size={14} />
              <span>คุยตรงกับคนเขียนโปรแกรม 100%</span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px border-4 border-slate-900 bg-slate-900 md:grid-cols-2 lg:grid-cols-4">
          {defaultInclusions.map((item, idx) => (
            <div key={idx} className="group bg-white p-10 transition-all hover:bg-blue-50">
              <div className="mb-8 flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-white transition-transform group-hover:-rotate-6 group-hover:bg-blue-600 group-hover:text-white">
                <item.icon size={28} />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase italic tracking-tight text-slate-900">
                {getText(item.title)}
              </h3>
              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {getText(item.desc)}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                <span>Certified Standard</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-b-2 border-slate-100 pb-8 opacity-40">
          <div className="text-[10px] font-black uppercase tracking-[0.5em]">Framework: Next.js 15</div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em]">Infrastructure: Cloud-Native</div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em]">Design: Bespoke / Flexible</div>
        </div>
      </div>
    </section>
  )
}

export default ServiceInclusionSection
