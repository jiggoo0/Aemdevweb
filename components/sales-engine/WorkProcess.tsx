/** @format */

import React from "react"
import { siteConfig } from "@/constants/site-config"
import {
  Code2,
  Rocket,
  CheckCircle,
  MessageSquareQuote,
  LayoutDashboard,
} from "lucide-react"

/**
 * 🛠️ WorkProcess: ขั้นตอนการทำงาน (Speed Launch Strategy)
 * [FIXED]: ลบ Unused Variable 'Search' ออกเพื่อให้ผ่านการ Linting 100%
 */

const processes = [
  {
    title: "Consult & Strategy",
    description:
      "พูดคุยเป้าหมายธุรกิจ วิเคราะห์ Keyword และวางแผน Technical SEO ให้รองรับ Google AI",
    icon: <MessageSquareQuote className="h-6 w-6" />,
    color: "bg-blue-600",
  },
  {
    title: "Structure & UI Design",
    description:
      "วางโครงสร้างเว็บไซต์ (Sitemap) และออกแบบ UX/UI ที่เน้นการปิดการขาย (Conversion Focus)",
    icon: <LayoutDashboard className="h-6 w-6" />,
    color: "bg-indigo-600",
  },
  {
    title: "High-Performance Dev",
    description:
      "พัฒนาด้วย Next.js และ TypeScript มั่นใจได้ในความเสถียรและความเร็วระดับ Performance 100",
    icon: <Code2 className="h-6 w-6" />,
    color: "bg-emerald-600",
  },
  {
    title: "Final Audit & Launch",
    description:
      "ตรวจสอบ Core Web Vitals, ทำ Schema Markup และส่งมอบงานพร้อมสอนใช้งานระบบ CMS",
    icon: <Rocket className="h-6 w-6" />,
    color: "bg-rose-600",
  },
]

const WorkProcess = () => {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 selection:bg-emerald-500/10">
      <div className="mx-auto max-w-6xl">
        {/* --- Section Header Specialist Style --- */}
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl border-l-8 border-emerald-500 pl-8">
            <h2 className="font-prompt mb-3 text-sm font-black tracking-[0.4em] text-emerald-600 uppercase italic">
              Our Process
            </h2>
            <p className="font-prompt text-4xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              Standard <br />
              <span className="text-slate-400">Workflow.</span>
            </p>
            <p className="font-anuphan mt-6 text-xl font-bold text-slate-500">
              ขั้นตอนการทำงานที่กระชับ จากไอเดียสู่เว็บไซต์ที่สร้างรายได้จริง
            </p>
          </div>

          <div className="hidden md:block">
            <div className="font-prompt flex items-center gap-4 border-l-4 border-slate-100 pl-6 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
              <span>EST. 2026</span>
              <span className="text-emerald-500">Speed Launch Protocol</span>
            </div>
          </div>
        </div>

        {/* --- Process Steps Grid --- */}
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* เส้นเชื่อมต่อ Linear (Desktop Only) */}
          <div className="absolute top-12 left-0 -z-10 hidden h-px w-full bg-slate-100 lg:block" />

          {processes.map((step, index) => (
            <div key={index} className="group relative">
              {/* Step Number & Icon Architecture */}
              <div className="mb-8 flex items-center justify-between">
                <div
                  className={`h-16 w-16 rounded-2xl ${step.color} flex items-center justify-center text-white shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {step.icon}
                </div>
                <span className="font-prompt text-6xl font-black text-slate-50 italic transition-colors group-hover:text-slate-100">
                  0{index + 1}
                </span>
              </div>

              {/* Step Content */}
              <h3 className="font-prompt mb-4 text-xl font-black tracking-tight text-slate-900 uppercase italic transition-colors group-hover:text-emerald-600">
                {step.title}
              </h3>
              <p className="font-anuphan text-base leading-relaxed font-bold text-slate-500">
                {step.description}
              </p>

              {/* Technical Indicator Dot (Desktop) */}
              <div className="absolute top-12 -left-2 hidden h-4 w-4 rounded-full border-4 border-white bg-slate-200 transition-all duration-500 group-hover:scale-125 group-hover:bg-emerald-500 lg:block" />
            </div>
          ))}
        </div>

        {/* --- Conversion Hook Box --- */}
        <div className="shadow-3xl relative mt-24 overflow-hidden rounded-[3rem] bg-slate-900 p-10 text-white md:p-16">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Rocket size={200} />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="font-prompt mb-3 text-3xl font-black tracking-tighter uppercase italic md:text-4xl">
                พร้อมเริ่มโปรเจกต์ของคุณหรือยัง?
              </h4>
              <p className="font-anuphan text-lg font-bold text-slate-400">
                คุยตรงกับ Specialist จบงานไว ไม่ผ่านคนกลาง มั่นใจในผลลัพธ์
              </p>
            </div>

            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto"
            >
              <button className="font-prompt group flex w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-12 py-5 text-lg font-black tracking-widest text-slate-900 uppercase italic transition-all hover:scale-105 hover:bg-white active:scale-95 md:w-auto">
                <CheckCircle
                  size={22}
                  className="transition-transform group-hover:rotate-12"
                />
                {siteConfig.cta.main}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
