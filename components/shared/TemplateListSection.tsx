/** @format */

import React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { getAllTemplatesMetadata } from "@/lib/template"
import TemplateCard from "@/components/marketplace/template/TemplateCard"

/**
 * TemplateListSection - พิกัดคลังโครงสร้างเว็บธุรกิจ
 * แผนงาน: จัดแสดงความหลากหลายของระบบงาน เพื่อให้ลูกค้าเลือกพิกัดที่ใกล้เคียงกับธุรกิจตัวเอง
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default function TemplateListSection() {
  // ดึงข้อมูล Metadata ทั้งหมดจากคลังข้อมูลกลางเพื่อเตรียมเรนเดอร์
  const templates = getAllTemplatesMetadata()

  // เลือกมาโชว์ 4 รายการเด่นสำหรับหน้าแรก เพื่อความรวดเร็วในการโหลดข้อมูล
  const displayTemplates = templates.slice(0, 4)

  return (
    <div className="w-full">
      {/* ส่วนหัวเนื้อหา: นำเสนอพิกัดโครงสร้างระบบที่พร้อมใช้งานทันที */}
      <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl border-l-8 border-emerald-500 pl-8">
          <div className="font-heading mb-6 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
            <Sparkles size={14} />
            Ready-to-Scale Assets
          </div>
          <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
            Base <span className="text-emerald-500">Models.</span>
          </h2>
          <p className="font-body mt-8 text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
            งานระบบพื้นฐานที่ถูกออกแบบมาเพื่อการเติบโตอย่างยั่งยืน
            <br className="hidden md:block" />
            ช่วยประหยัดเวลาการวางระบบ
            และเน้นพิกัดความเร็วในการเข้าถึงข้อมูลเป็นสำคัญ
          </p>
        </div>

        <Link
          href="/templates"
          className="font-heading group inline-flex items-center gap-4 rounded-2xl bg-slate-950 px-8 py-4 text-xs font-black tracking-widest text-white uppercase italic shadow-xl shadow-emerald-500/10 transition-all hover:bg-emerald-600 active:scale-95"
        >
          ดูคลังโครงสร้างทั้งหมด
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* พิกัดคุณภาพงานระบบ (Core Work Standards) */}
      <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Technical SEO Optimized",
          "Responsive Structure",
          "Clean Code Standards",
          "Speed Performance Ready",
        ].map((item, i) => (
          <div
            key={`quality-check-${i}`}
            className="flex items-center gap-3 rounded-2xl border border-slate-50 bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
            <span className="font-heading text-[10px] font-black tracking-widest text-slate-600 uppercase italic">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Grid แสดงผลการ์ดโครงสร้าง: จัดระเบียบให้ภาพพรีวิวใหญ่คมชัดและอ่านง่าย */}
      <div className="grid gap-10 md:grid-cols-2">
        {displayTemplates && displayTemplates.length > 0 ? (
          displayTemplates.map((item, index) => (
            <TemplateCard
              key={
                item.slug ? `tpl-node-${item.slug}` : `tpl-fallback-${index}`
              }
              template={item}
            />
          ))
        ) : (
          <div className="col-span-full rounded-[3rem] border-2 border-dashed border-slate-100 py-24 text-center">
            <p className="font-heading text-sm font-bold tracking-widest text-slate-400 uppercase italic">
              ขณะนี้กำลังจัดเตรียมพิกัดโครงสร้างใหม่
              เพื่อให้ได้ระบบงานที่กริบที่สุด...
            </p>
          </div>
        )}
      </div>

      {/* ส่วนท้ายจางๆ เพื่อเสริมมิติงานระดับพรีเมียม (Subtle Branding) */}
      <div className="mt-20 text-center opacity-20 select-none">
        <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Web Structure Model • 2026
        </p>
      </div>
    </div>
  )
}
