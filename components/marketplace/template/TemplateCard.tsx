/** @format */

"use client"

import React, { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Gauge } from "lucide-react"
import { TemplateMetadata } from "@/types/template"

interface TemplateCardProps {
  template: TemplateMetadata
}

/**
 * getCategoryLabel: แปลงพิกัดหมวดหมู่เป็นชื่อทางการ
 * จัดการกลุ่มธุรกิจหลักของ AEMDEVWEB ให้ชัดเจน
 */
const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    hotel: "Hotel & Resort",
    service: "Service Business",
    marketing: "Sale Page Expert",
    ecommerce: "E-Commerce Store",
    business: "Business Structure",
  }
  return labels[category?.toLowerCase()] || "Technical Structure"
}

/**
 * TemplateCard: ส่วนแสดงพิกัดโครงสร้างเว็บไซต์ในคลัง (Marketplace)
 * เน้นการโชว์ศักยภาพความเร็ว (Performance) และการเข้าถึงข้อมูลเชิงวิศวกรรม
 */
export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  // คำนวณพิกัดป้ายกำกับไว้ล่วงหน้าเพื่อลดภาระ CPU ขณะเลื่อนหน้าจอ (Scrolling)
  const categoryLabel = useMemo(
    () => getCategoryLabel(template.category),
    [template.category]
  )

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-slate-100 bg-white transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/5">
      {/* 1. ส่วนจัดแสดงรูปภาพ (Visual Thumbnail Layer) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={template.thumbnail}
          alt={`โครงสร้างเว็บไซต์ธุรกิจ ${template.name}`}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay ไล่เฉดสีเพิ่มมิติความพรีเมียม (Industrial Overlay) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* ป้ายพิกัดหมวดหมู่ธุรกิจ */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-block rounded-full bg-white/95 px-5 py-2 text-[9px] font-black tracking-[0.2em] text-slate-950 uppercase shadow-sm ring-1 ring-slate-900/5 backdrop-blur-md">
            {categoryLabel}
          </span>
        </div>

        {/* พิกัดตัวบ่งชี้ประสิทธิภาพ (Performance Badge) */}
        <div className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
          <Gauge size={18} strokeWidth={2.5} />
        </div>
      </div>

      {/* 2. ส่วนข้อมูลพิกัดเทคนิค (Technical Content Layer) */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-emerald-500 transition-all group-hover:w-12" />
            <span className="text-[9px] font-black tracking-widest text-emerald-600 uppercase">
              Verified Structure
            </span>
          </div>

          <h3 className="font-prompt text-2xl font-black tracking-tighter text-slate-950 transition-colors group-hover:text-emerald-600">
            {template.name}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-slate-500">
            {template.description}
          </p>
        </div>

        {/* 3. ส่วนดำเนินการ (Conversion/CTA Layer) */}
        <div className="mt-10">
          <Link
            href={`/templates/${template.id}`}
            className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-950 py-5 text-[10px] font-black tracking-[0.2em] text-white uppercase transition-all group-hover:shadow-xl group-hover:shadow-emerald-900/20 hover:bg-emerald-600 active:scale-95"
          >
            <span className="relative z-10">วิเคราะห์โครงสร้างจริง</span>
            <ArrowUpRight
              size={14}
              strokeWidth={3}
              className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />

            {/* เอฟเฟกต์แสงวิ่งผ่านเพื่อความว้าว (Glow Shine Effect) */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        </div>
      </div>
    </article>
  )
}
