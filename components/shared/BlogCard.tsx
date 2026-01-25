/** @format */

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronRight } from "lucide-react"

// ส่วนจัดการตรรกะและโครงสร้างระบบ
import { cn } from "@/lib/utils"

/**
 * BlogCard - หน้าด่านความรู้สู่กลุ่มธุรกิจ SME และโรงงาน
 * ออกแบบมาเพื่อสะท้อนความประณีตและการใส่ใจในเนื้อหาเชิงเทคนิค
 */

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  thumbnail: string
  tags?: string[]
  className?: string
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  thumbnail,
  tags = [],
  className,
}: BlogCardProps) {
  // การจัดการข้อความประกอบภาพเพื่อคะแนนการค้นหาที่ดีที่สุด
  const imageAlt =
    title && title.trim() !== ""
      ? title
      : "เทคนิคการพัฒนาเว็บไซต์โดย นายเอ็มซ่ามากส์"

  // การแสดงผลวันที่รูปแบบไทยเพื่อให้กลุ่มเป้าหมายอ่านข้อมูลได้ง่าย
  const formattedDate = date
    ? new Date(date).toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "เร็วๆ นี้"

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500",
        "hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5",
        className
      )}
    >
      {/* ชั้นเลเยอร์แสดงรูปภาพปก: ปรับแต่งการโหลดตามมาตรฐาน Next.js 16 */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
        <Image
          src={thumbnail || "/images/blog/placeholder.webp"}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* ระบบการไล่ระดับสีเพื่อเพิ่มมิติความพรีเมียมให้ภาพปก */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* ส่วนแสดงป้ายกำกับหมวดหมู่บทความ */}
        {tags.length > 0 && (
          <div className="absolute top-6 left-6 z-10">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[9px] font-black tracking-[0.25em] text-white uppercase shadow-xl backdrop-blur-md">
              {tags[0]}
            </span>
          </div>
        )}
      </div>

      {/* ชั้นเลเยอร์รายละเอียดเนื้อหาและตัวอักษร */}
      <div className="flex flex-1 flex-col p-8 lg:p-10">
        {/* ส่วนแสดงบันทึกข้อมูลทางเทคนิค */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase italic">
            <Calendar size={12} className="text-emerald-500" />
            {formattedDate}
          </div>
          <div
            className="h-1 w-1 rounded-full bg-slate-200"
            aria-hidden="true"
          />
          <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
            Specialist Perspectives
          </span>
        </div>

        {/* หัวข้อบทความ: เน้นการสื่อสารที่ชัดเจนและมีพลัง */}
        <h3 className="font-prompt mb-5 line-clamp-2 text-2xl leading-[1.15] font-black tracking-tighter text-slate-900 uppercase italic transition-colors duration-300 group-hover:text-emerald-500">
          {title || "กำลังประมวลผลข้อมูล..."}
        </h3>

        {/* เนื้อหาเกริ่นนำเพื่อดึงดูดกลุ่มเจ้าของกิจการและโรงงาน */}
        <p className="font-anuphan mb-10 line-clamp-3 flex-1 text-[15px] leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-600">
          {excerpt ||
            "พี่เตรียมข้อมูลเชิงเทคนิคที่จะช่วยให้โครงการของน้องเติบโตด้วยเทคโนโลยีรุ่นล่าสุดและการจัดการระบบงานที่ถูกต้องไว้ให้แล้วครับ"}
        </p>

        {/* ส่วนท้ายเพื่อกระตุ้นการเข้าถึงเนื้อหาตัวเต็ม */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-8">
          <div className="flex items-center gap-2">
            <span className="font-prompt text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all duration-300 group-hover:tracking-[0.5em] group-hover:text-slate-950">
              อ่านเนื้อหาเต็มๆ
            </span>
          </div>

          <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-50 text-slate-950 shadow-inner transition-all duration-500 group-hover:rotate-[12deg] group-hover:bg-slate-950 group-hover:text-white group-hover:shadow-xl group-hover:shadow-slate-900/20">
            <ChevronRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
