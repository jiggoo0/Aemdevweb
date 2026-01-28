/** @format */

import React from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react"

/** * นำเข้าข้อมูลการตั้งค่าและฟังก์ชันดึงข้อมูลเทมเพลต
 */
import { siteConfig } from "@/constants/site-config"
import { getAllTemplatesMetadata } from "@/lib/template"
import TemplateCard from "@/components/marketplace/template/TemplateCard"

/**
 * TemplateListSection - ส่วนแสดงรายการแบบเว็บไซต์สำเร็จรูป (Shops. Preview)
 * แนวทาง: โชว์ความเนี้ยบของงาน เพื่อให้ลูกค้า SME ตัดสินใจเริ่มใช้งานได้ทันที
 * ตัวตน: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function TemplateListSection() {
  /**
   * [DATA FETCHING]: ดึงข้อมูลรายการจากระบบ
   */
  const templates = getAllTemplatesMetadata()

  /**
   * [PERFORMANCE]: เลือกมาแสดงผล 4 รายการเด่นสำหรับหน้าแรก
   * เพื่อรักษาความเร็วในการโหลด (LCP) ให้ดีที่สุดตามมาตรฐานปี 2026
   */
  const displayTemplates = (templates || []).slice(0, 4)

  return (
    <div className="w-full antialiased">
      {/* [HEADER]: นำเสนอแบบเว็บไซต์ที่ซิ่งที่สุดในตลาด */}
      <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
        <div className="max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-16">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2 text-[10px] font-black tracking-[0.4em] text-emerald-700 uppercase italic">
            <Zap size={14} className="fill-emerald-600" />
            Ready-to-Online Themes
          </div>
          <h2 className="font-heading text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
            Business <br />
            <span className="text-emerald-500">Assets.</span>
          </h2>
          <p className="font-body mt-10 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            รวมแบบเว็บไซต์สำเร็จรูปสเปก Next.js 16
            ที่พร้อมให้คุณเริ่มใช้งานได้ทันที เลือกแบบที่ชอบจาก Shops.
            แล้วออนไลน์ได้ภายใน 24 ชม.
          </p>
        </div>

        <Link
          href="/templates"
          className="group inline-flex items-center gap-5 rounded-2xl bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase italic shadow-2xl shadow-slate-950/20 transition-all hover:bg-emerald-600 hover:text-white active:scale-95"
        >
          ดูแบบเว็บไซต์ทั้งหมด
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* [QUALITY CHECKLIST]: มาตรฐานงานสร้างสไตล์นายเอ็ม */}
      <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Search Optimized 2026",
          "Ultra-Fast LCP Performance",
          "Clean Architecture",
          "Conversion-Focused",
        ].map((item, i) => (
          <div
            key={`quality-check-${i}`}
            className="group flex items-center gap-5 rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <CheckCircle2 size={18} strokeWidth={3} />
            </div>
            <span className="font-heading text-[10px] leading-snug font-black tracking-[0.2em] text-slate-800 uppercase italic">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* [GRID]: แสดงผลรายการแบบเว็บไซต์ */}
      <div className="grid gap-12 md:grid-cols-2">
        {displayTemplates.length > 0 ? (
          displayTemplates.map((item, index) => (
            <div
              key={item.slug ? `tpl-${item.slug}` : `tpl-fallback-${index}`}
              className="transition-transform duration-700 hover:-translate-y-3"
            >
              <TemplateCard template={item} />
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/30 py-40 text-center">
            <Sparkles className="mb-8 text-slate-200" size={56} />
            <p className="font-heading text-lg font-black tracking-[0.4em] text-slate-400 uppercase italic">
              กำลังเตรียมข้อมูลชุดใหม่...
            </p>
          </div>
        )}
      </div>

      {/* [FOOTER]: ข้อมูลส่วนท้ายส่วนแสดงผล */}
      <div className="mt-32 border-t border-slate-50 pt-16 text-center">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          Shops. Template Showcase • {siteConfig.project.name}
        </p>
      </div>
    </div>
  )
}
