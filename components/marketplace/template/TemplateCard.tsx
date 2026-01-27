/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Eye, Layers } from "lucide-react"
import { TemplateMetadata } from "@/types/template"

interface TemplateCardProps {
  /** พิกัดข้อมูลโครงสร้างจากระบบ Registry */
  template: TemplateMetadata
}

/**
 * TemplateCard - คอมโพเนนต์จัดแสดงพิกัดโครงสร้างระบบ
 * ดีไซน์: เน้นความภูมิฐาน สะอาดตา โชว์ความกริบของงานระบบ
 */
export default function TemplateCard({ template }: TemplateCardProps) {
  // [SAFETY CHECK]: ป้องกันพิกัดข้อมูลว่างหรือไม่มี slug เพื่อไม่ให้ระบบ Routing พัง
  if (!template || !template.slug) {
    console.warn("TemplateCard: ข้อมูลพิกัดไม่ครบถ้วน", template)
    return null
  }

  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5">
      {/* 1. Visual Layer: พรีวิวโครงสร้างเว็บ (ล็อคพิกัดสัดส่วน 16:10) */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-50">
        <Image
          src={template.thumbnail || "/images/templates/placeholder.webp"}
          alt={template.name || "Template Preview"}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Hover Overlay: พิกัดปุ่มสำหรับเจาะลึกระบบงาน */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link
            href={`/templates/${template.slug}`}
            className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[10px] font-black tracking-widest text-slate-950 uppercase italic shadow-2xl transition-transform hover:scale-110 active:scale-95"
          >
            <Eye size={14} className="opacity-50" />
            Live Preview
          </Link>
        </div>
      </div>

      {/* 2. Information Layer: ข้อมูลและพิกัดหมวดหมู่ */}
      <div className="p-8">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-emerald-600 uppercase italic">
            <Layers size={12} className="text-emerald-500" />
            {template.category || "Base Infrastructure"}
          </div>
          {/* สถานะความพร้อมของระบบ (Active Status) */}
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        </div>

        <h3 className="mb-8 text-2xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic">
          {template.name}
        </h3>

        {/* 3. Action Layer: พิกัดการตัดสินใจ */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black tracking-[0.2em] text-slate-300 uppercase italic">
              Infrastructure
            </span>
            <span className="text-[11px] font-bold tracking-tighter text-slate-500 uppercase">
              Ready to Scale
            </span>
          </div>

          <Link
            href={`/templates/${template.slug}`}
            aria-label={`ดูรายละเอียดโครงสร้าง ${template.name}`}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 transition-all group-hover:shadow-lg group-hover:shadow-slate-200 hover:bg-slate-950 hover:text-white"
          >
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
