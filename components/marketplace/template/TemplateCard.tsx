/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Eye, Layers, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { TemplateMetadata } from "@/types/template"

interface TemplateCardProps {
  /** ข้อมูลโครงสร้างเทมเพลตจากระบบ */
  template: TemplateMetadata
  /** คลาสเพิ่มเติมสำหรับการจัดวางเลย์เอาต์ */
  className?: string
}

/**
 * TemplateCard - คอมโพเนนต์แสดงตัวอย่างแบบเว็บไซต์ (Shops. Engine Edition)
 * แนวคิด: โชว์ความเนี้ยบของโครงสร้างเว็บเช่าสเปกปีศาจ เพื่อปิดการขายด้วยภาพที่ดึงดูด
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB Infrastructure)
 */
export default function TemplateCard({
  template,
  className,
}: TemplateCardProps) {
  // [SAFETY CHECK]: ป้องกันข้อมูลไม่ครบถ้วนจนเกิด Error
  if (!template || !template.slug) {
    console.warn("TemplateCard: ข้อมูลไม่ครบถ้วนสำหรับ Slug", template?.slug)
    return null
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-4 transition-all duration-500",
        "hover:border-emerald-500/20 hover:shadow-2xl",
        className
      )}
    >
      {/* 1. Visual Layer: ตัวอย่างหน้าตาเว็บ (ล็อคสัดส่วน 16:10 เพื่อความสวยงาม) */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-50">
        <Image
          src={template.thumbnail || "/images/templates/placeholder.webp"}
          alt={`ตัวอย่างแบบเว็บไซต์ ${template.name}`}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Category Tag: ป้ายกำกับหมวดหมู่แบบโปร่งแสงดูพรีเมียม */}
        <div className="absolute top-5 left-5 z-10">
          <span className="font-heading flex items-center gap-2 rounded-full bg-slate-950/40 px-4 py-2 text-[9px] font-black tracking-widest text-emerald-400 uppercase italic ring-1 ring-white/10 backdrop-blur-xl">
            <Zap size={10} className="fill-emerald-400" />
            {template.category || "Standard Unit"}
          </span>
        </div>

        {/* Hover Overlay: ปุ่มสำหรับดูรายละเอียดแบบเจาะลึก (Live Preview) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Link
            href={`/templates/${template.slug}`}
            className="font-heading flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-[10px] font-black tracking-[0.2em] text-slate-950 uppercase italic shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <Eye size={16} strokeWidth={3} />
            ดูตัวอย่างเว็บ
          </Link>
        </div>
      </div>

      {/* 2. Information Layer: ชื่อและระดับมาตรฐานของเว็บ */}
      <div className="p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="font-heading flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
            <Layers size={14} className="text-emerald-500" />
            Standard Structure
          </div>
          {/* สถานะความพร้อมออนไลน์ (Active Status) */}
          <div className="flex items-center gap-2">
            <span className="font-heading text-[9px] font-black text-emerald-600 uppercase italic">
              Ready
            </span>
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
        </div>

        <h3 className="font-heading mb-8 text-3xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic transition-colors group-hover:text-emerald-600 md:text-4xl">
          {template.name}
        </h3>

        {/* 3. Specs & Action: ข้อมูลเทคนิคและปุ่มเข้าถึง */}
        <div className="flex items-end justify-between border-t border-slate-50 pt-8">
          <div className="space-y-1">
            <div className="font-heading text-[9px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
              Engine Tech 2026
            </div>
            <div className="font-body flex gap-3 text-[11px] font-bold text-slate-500">
              <span className="text-slate-900">Next.js 16</span>
              <span className="text-slate-200">|</span>
              <span className="text-emerald-600">LCP &lt; 0.8s</span>
            </div>
          </div>

          <Link
            href={`/templates/${template.slug}`}
            aria-label={`ดูรายละเอียดแบบเว็บไซต์ ${template.name}`}
            className="group/btn flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-slate-950 text-white transition-all hover:bg-emerald-600 hover:text-slate-950 hover:shadow-xl hover:shadow-emerald-500/20 active:scale-90"
          >
            <ArrowRight
              size={24}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* เส้นบอกระดับความเร็ว (Visual Speed Indicator) ที่จะกางออกเมื่อ Hover */}
      <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-emerald-500 transition-all duration-700 ease-in-out group-hover:w-full" />
    </div>
  )
}
