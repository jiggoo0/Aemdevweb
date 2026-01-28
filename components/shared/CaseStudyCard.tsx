/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, ExternalLink } from "lucide-react"

interface CaseStudyCardProps {
  slug: string
  title: string
  description: string
  image: string
  industry: string
  result?: string
}

/**
 * CaseStudyCard - ส่วนแสดงผลงานที่เน้นผลลัพธ์ทางธุรกิจ
 * แนวคิด: โชว์หลักฐานความสำเร็จด้วยภาพและตัวเลขที่ชัดเจน
 * มาตรฐาน: ปรับจูนความเบาเพื่อให้หน้าเว็บโหลดไวที่สุด (Performance Optimized)
 * โดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const CaseStudyCard = ({
  slug,
  title,
  description,
  image,
  industry,
  result,
}: CaseStudyCardProps) => {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* ส่วนแสดงภาพตัวอย่างผลงาน:
          ใช้สัดส่วน 4:3 เพื่อความสวยงามและสบายตาในทุกอุปกรณ์
      */}
      <Link
        href={`/case-studies/${slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800"
        aria-label={`ดูรายละเอียดผลงานโปรเจกต์ ${title}`}
      >
        <Image
          src={image || "/images/showcase/placeholder.webp"}
          alt={`ผลงานเว็บไซต์ ${title}`}
          fill
          className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Industry Tag: ระบุประเภทธุรกิจแบบโปร่งแสงดูพรีเมียม */}
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/40 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-400 uppercase italic ring-1 ring-white/10 backdrop-blur-xl">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            {industry}
          </div>
        </div>
      </Link>

      {/* ส่วนข้อมูลเนื้อหาและผลลัพธ์ */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <Link href={`/case-studies/${slug}`}>
            <h3 className="font-heading text-2xl leading-tight font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-emerald-400">
              {title}
            </h3>
          </Link>
          <div className="rounded-lg bg-white/5 p-2 text-slate-600 transition-colors group-hover:text-emerald-500">
            <ExternalLink size={16} />
          </div>
        </div>

        <p className="font-body mb-8 line-clamp-2 text-sm leading-relaxed font-bold text-slate-400">
          {description}
        </p>

        {/* ตัวเลขผลลัพธ์ที่วัดผลได้จริง (Business Metrics) */}
        <div className="mt-auto flex items-end justify-between border-t border-white/5 pt-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-500">
              <BarChart3 size={14} className="text-emerald-500/50" />
              <span className="text-[9px] font-black tracking-[0.2em] uppercase italic">
                Project Result
              </span>
            </div>
            <div className="font-heading text-3xl font-black tracking-tighter text-emerald-500 italic">
              {result || "100% Active"}
            </div>
          </div>

          {/* ปุ่มทางเข้าชมรายละเอียดโปรเจกต์ */}
          <Link
            href={`/case-studies/${slug}`}
            className="group/btn relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/5 text-white transition-all hover:bg-emerald-600 hover:text-slate-950 active:scale-95"
          >
            <ArrowRight
              size={22}
              className="relative z-10 transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* แถบสีสถานะงานเมื่อนำเมาส์มาวาง */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full" />
    </article>
  )
}
