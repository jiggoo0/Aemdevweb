/** @format */

"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { TemplateMetadata } from "@/types/template"

interface TemplateCardProps {
  template: TemplateMetadata
}

/**
 * แยกส่วนการแปลงชื่อหมวดหมู่ไว้ด้านนอก
 * เพื่อป้องกันการประมวลผลใหม่ทุกครั้งที่ Component ทำการวาดตัวหนังสือ
 */
const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    hotel: "Hotel & Resort",
    service: "Business Service",
    marketing: "Marketing Sale Page",
    ecommerce: "E-Commerce Store",
  }
  return labels[category] || category
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-stone-100 bg-white transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-900/5">
      {/* 1. พื้นที่แสดงรูปภาพ Thumbnail */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={template.thumbnail}
          alt={`ตัวอย่างโครงสร้างเว็บไซต์ธุรกิจ ${template.name}`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* เลเยอร์สีพื้นหลังเมื่อมีการชี้เมาส์ (Hover Overlay) */}
        <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/10" />

        {/* ป้ายกำกับหมวดหมู่ (Category Badge) */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-block rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-black tracking-[0.15em] text-stone-950 uppercase shadow-sm backdrop-blur-md">
            {getCategoryLabel(template.category)}
          </span>
        </div>
      </div>

      {/* 2. ส่วนข้อมูลรายละเอียด */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="flex-1">
          <h3 className="font-prompt text-2xl font-black tracking-tight text-stone-950 transition-colors group-hover:text-emerald-600">
            {template.name}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-stone-500">
            {template.description}
          </p>
        </div>

        {/* 3. ส่วนดำเนินการ (Call to Action) */}
        <div className="mt-8">
          <Link
            href={`/templates/${template.id}`}
            className="flex items-center justify-center gap-3 rounded-2xl bg-stone-950 py-4.5 text-[11px] font-black tracking-[0.2em] text-white uppercase transition-all group-hover:shadow-lg group-hover:shadow-emerald-900/20 after:absolute after:inset-0 hover:bg-emerald-600"
          >
            เปิดดูโครงสร้างจริง
            <ArrowUpRight size={14} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </article>
  )
}
