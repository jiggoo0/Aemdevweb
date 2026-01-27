/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3 } from "lucide-react"

/**
 * CaseStudyCard - ส่วนจัดแสดงพิกัดผลงานจริง
 * แนวทางการวางพิกัด: ดันตัวเลขผลลัพธ์ (Result) ให้โดดเด่นเพื่อสร้างแรงดึงดูดแก่กลุ่ม SME
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export const CaseStudyCard = ({
  slug,
  title,
  description,
  image,
  industry,
  result,
}: {
  slug: string
  title: string
  description: string
  image: string
  industry: string
  result?: string
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* 1. พิกัดภาพหน้าปกผลงาน (Visual Evidence) */}
      <Link
        href={`/case-studies/${slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden"
      >
        <Image
          src={image || "/images/showcase/placeholder.webp"}
          alt={title}
          fill
          className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* ป้ายระบุกลุ่มธุรกิจ (Industry Tag) */}
        <div className="absolute top-6 left-6">
          <span className="font-heading rounded-full bg-emerald-500/90 px-4 py-1.5 text-[9px] font-black tracking-widest text-white uppercase italic backdrop-blur-md">
            {industry}
          </span>
        </div>
      </Link>

      {/* 2. พิกัดข้อมูลและผลลัพธ์ (Impact Content) */}
      <div className="flex flex-1 flex-col p-10">
        <h3 className="font-heading mb-4 text-2xl leading-tight font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-emerald-400">
          {title}
        </h3>
        <p className="font-body mb-8 line-clamp-2 text-sm leading-relaxed font-medium text-slate-400">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
          {/* พิกัดแสดงตัวเลขความสำเร็จ (Performance Metrics) */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-emerald-500/50">
              <BarChart3 size={14} />
              <span className="text-[9px] font-black tracking-widest uppercase italic">
                Result Impact
              </span>
            </div>
            <span className="font-heading text-2xl font-black text-emerald-500 italic">
              {result || "100%"}
            </span>
          </div>

          {/* ปุ่มนำทางไปดูพิกัดงานฉบับเต็ม */}
          <Link
            href={`/case-studies/${slug}`}
            className="group/btn flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white transition-all hover:bg-emerald-600 hover:text-slate-950 active:scale-95"
            aria-label={`อ่านรายละเอียดงาน ${title}`}
          >
            <ArrowRight
              size={22}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
