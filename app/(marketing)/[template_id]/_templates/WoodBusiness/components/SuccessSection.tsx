/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS SUCCESS SECTION (CTA)
// Identity: Closing Specialist (ส่วนปิดการขายสไตล์โรงไม้สุโขทัย)
// ----------------------------------------------------

"use client"

import React from "react"
import { MessageSquare, Phone } from "lucide-react"

interface SuccessSectionProps {
  themeColor?: string
  contact?: {
    lineId?: string
    phone?: string
    mobile?: string
  }
}

export default function SuccessSection({
  themeColor = "#7B3F00", // สีน้ำตาลไม้แก่น
  contact,
}: SuccessSectionProps) {
  // จัดการข้อมูลติดต่อ (ใช้ mobile เป็นลำดับแรกสำหรับการโทร)
  const displayPhone = contact?.mobile || contact?.phone || "08x-xxx-xxxx"
  const cleanLineId = contact?.lineId?.replace("@", "")

  return (
    <section
      id="contact"
      className="overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="relative flex flex-col items-center px-6 py-24 text-center md:px-10 md:py-36">
          {/* 🧩 DECORATIVE_ELEMENTS: มุมกรอบเล็งไม้สไตล์ช่างวัดระยะ */}
          <div className="absolute left-0 top-0 h-16 w-16 border-l-4 border-t-4 border-slate-100" />
          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-slate-100" />

          {/* 🏷️ SECTION_BADGE */}
          <div className="mb-12 flex items-center gap-3 border border-slate-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 shadow-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
            พร้อมประเมินราคาหน้างานฟรี
          </div>

          {/* 📢 MAIN_CALL_TO_ACTION */}
          <h2 className="mb-8 max-w-4xl text-4xl font-black uppercase leading-[1.1] tracking-tighter text-slate-900 md:text-7xl">
            อยากได้ไม้ดี <span style={{ color: themeColor }}>ราคาโรงงาน</span>{" "}
            <br />
            ทักแชทคุยกับเราได้เลย
          </h2>

          <p className="mb-14 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
            ไม่ว่าจะเป็นงานบ้าน งานโครงการ หรือร้านค้าช่วง{" "}
            <br className="hidden md:block" />
            เรายินดีให้คำปรึกษาเรื่องสเปคไม้และบริการจัดส่งทั่วสุโขทัยและจังหวัดใกล้เคียง
          </p>

          {/* ⚡ ACTION_BUTTONS: Brutalist Style Buttons */}
          <div className="flex w-full max-w-xl flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={`https://line.me/ti/p/~${cleanLineId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-4 bg-[#06C755] px-10 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:brightness-110 active:scale-95 sm:w-auto"
            >
              <MessageSquare size={20} /> ทัก LINE เช็คราคาส่ง
            </a>

            <a
              href={`tel:${displayPhone}`}
              className="flex w-full items-center justify-center gap-4 bg-slate-900 px-10 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:bg-slate-800 active:scale-95 sm:w-auto"
            >
              <Phone size={20} /> โทรคุยกับฝ่ายขาย
            </a>
          </div>

          {/* 📟 SYSTEM_FOOTNOTE: ข้อมูลยืนยันความไว */}
          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              ไม้คัดเกรด_100%
            </div>
            <div className="hidden h-4 w-[1px] bg-slate-200 sm:block" />
            <div className="flex items-center gap-2">
              ตอบกลับไวภายใน: <span className="text-slate-900">30_นาที</span>
            </div>
            <div className="hidden h-4 w-[1px] bg-slate-200 sm:block" />
            <div className="flex items-center gap-2">
              บริการส่งทั่ว: <span className="text-slate-900">สุโขทัย</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
