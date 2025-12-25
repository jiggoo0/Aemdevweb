/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Final Call to Action)
// Design: High-Contrast Minimalist, Grid-Stable
// ----------------------------------------------------

"use client"

import React from "react"
import { MessageSquare, ArrowRight, Zap } from "lucide-react"

interface SuccessSectionProps {
  themeColor?: string
  contact?: {
    lineId: string
  }
}

export default function SuccessSection({
  themeColor = "#1e40af",
  contact,
}: SuccessSectionProps) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:px-10 md:py-36">
          {/* 🧩 DECORATIVE_BACKGROUND_ELEMENTS */}
          <div className="absolute left-0 top-0 h-20 w-20 border-l border-t border-slate-100" />
          <div className="absolute bottom-0 right-0 h-20 w-20 border-b border-r border-slate-100" />

          {/* 🏷️ SECTION_BADGE */}
          <div className="mb-12 flex items-center gap-3 border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            <Zap size={12} className="text-yellow-500" /> Next_Step_Execution
          </div>

          {/* 📢 HEADLINE: Direct Thai UX Focus */}
          <h2 className="mb-10 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-8xl">
            เริ่มสร้างความต่าง <br />
            <span style={{ color: themeColor }} className="italic">
              ให้ธุรกิจวันนี้
            </span>
          </h2>

          {/* 📝 SUB-COPY */}
          <p className="mb-14 max-w-2xl text-lg font-bold uppercase leading-relaxed tracking-tight text-slate-500 md:text-xl">
            ไม่ต้องเสียเวลากับระบบที่ซับซ้อน ให้เราดูแลเรื่องเทคนิคทั้งหมดแทนคุณ
            เพื่อให้คุณโฟกัสกับการขยายธุรกิจได้อย่างเต็มที่
          </p>

          {/* ⚡ ACTION_GROUP: ปุ่มกดที่ออกแบบมาเพื่อ Conversion */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={`https://line.me/ti/p/${contact?.lineId || "@aemdev"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#00b900] px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-green-500/10 transition-all hover:brightness-105 active:scale-95"
            >
              <MessageSquare size={20} /> ทักแชทสอบถามทันที
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center gap-3 bg-slate-900 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 active:scale-95"
            >
              ดูผลงานที่ผ่านมา <ArrowRight size={20} />
            </button>
          </div>

          {/* 📟 SYSTEM_FOOTNOTE: เพิ่มความน่าเชื่อถือทางเทคนิค */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Project_Inquiry_Open
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="flex items-center gap-2">
              Response_Time: <span className="text-slate-900">&lt; 30_Min</span>
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="font-black text-slate-900">Ready_to_Start</div>
          </div>
        </div>
      </div>
    </section>
  )
}
