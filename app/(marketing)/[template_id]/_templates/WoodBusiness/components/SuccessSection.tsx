/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS SUCCESS SECTION (CTA)
// Identity: Closing Specialist (ส่วนปิดการขาย)
// ----------------------------------------------------

"use client"

import React from "react"
import { MessageSquare, Phone } from "lucide-react" // ✅ ลบ ArrowRight และ Zap ออกเพื่อแก้ Warning

interface SuccessSectionProps {
  themeColor?: string
  contact?: {
    lineId: string
    phone: string
  }
}

export default function SuccessSection({
  themeColor = "#7B3F00", // สีน้ำตาลไม้
  contact,
}: SuccessSectionProps) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:px-10 md:py-36">
          {/* 🧩 DECORATIVE_ELEMENTS: มุมกรอบแบบงานช่างไม้ */}
          <div className="absolute left-0 top-0 h-16 w-16 border-l-4 border-t-4 border-slate-100" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-slate-100" />

          {/* 🏷️ SECTION_BADGE */}
          <div className="mb-12 flex items-center gap-3 border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            พร้อมประเมินราคาหน้างานฟรี
          </div>

          {/* 📢 MAIN_CALL_TO_ACTION */}
          <h2 className="mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.15] tracking-tighter text-slate-900 md:text-7xl">
            อยากได้ไม้ดี <span style={{ color: themeColor }}>ราคาโรงงาน</span>{" "}
            <br />
            ทักแชทคุยกับเราได้เลย
          </h2>

          <p className="mb-14 max-w-2xl text-lg font-medium leading-relaxed text-slate-500">
            ไม่ว่าจะเป็นงานบ้าน งานโครงการ หรือร้านค้าช่วง{" "}
            <br className="hidden md:block" />
            เรายินดีให้คำปรึกษาเรื่องสเปคไม้และบริการจัดส่งทั่วสุโขทัยและจังหวัดใกล้เคียง
          </p>

          {/* ⚡ ACTION_BUTTONS: เน้น LINE และ โทร */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://line.me/ti/p/${contact?.lineId?.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 bg-green-600 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-green-500/20 transition-all hover:bg-green-700 active:scale-95 sm:w-auto"
            >
              <MessageSquare size={20} /> ทัก LINE เช็คราคาส่ง
            </a>

            <a
              href={`tel:${contact?.phone}`}
              className="flex w-full items-center justify-center gap-3 bg-slate-900 px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 active:scale-95 sm:w-auto"
            >
              <Phone size={20} /> โทรคุยกับฝ่ายขาย
            </a>
          </div>

          {/* 📟 SYSTEM_FOOTNOTE: ข้อมูลยืนยันความไว */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              ไม้คัดเกรด_100%
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="flex items-center gap-2">
              ตอบกลับไวภายใน: <span className="text-slate-900">30_นาที</span>
            </div>
            <span className="hidden text-slate-200 sm:block">|</span>
            <div className="flex items-center gap-2">
              บริการส่งทั่ว: <span className="text-slate-900">สุโขทัย</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
