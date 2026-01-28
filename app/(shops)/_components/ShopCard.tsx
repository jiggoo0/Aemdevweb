/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react" // [FIX]: ลบ Gauge ที่ไม่ได้ใช้งานออก

interface ShopCardProps {
  id: string
  name: string
  category: string
  image: string
  slug: string
  price?: string
  isNew?: boolean
}

/**
 * ShopCard - การแสดงผลรายการพิกัดระบบงานในหน้าร้าน
 * แนวคิด: เน้นความคมชัดของผลงาน และสร้างความน่าเชื่อถือให้พิกัดธุรกิจลูกค้า
 * วางระบบโดย: นายเอ็มซ่ามากส์ (Specialist ผู้วางระบบ)
 */
export const ShopCard = ({
  id,
  name,
  category,
  image,
  slug,
  price = "1,990",
  isNew,
}: ShopCardProps) => {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-4 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/10">
      {/* ส่วนพิกัดรูปภาพพรีวิว: จูนสปีดการโหลดข้อมูลด้วย Next.js Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* ป้ายแจ้งพิกัดสถานะระบบงานใหม่ */}
        {isNew && (
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-slate-950/80 px-4 py-2 backdrop-blur-md">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-heading text-[9px] font-black tracking-widest text-white uppercase italic">
              New Unit
            </span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 backdrop-blur-md">
          <span className="font-heading text-[9px] font-black tracking-widest text-slate-950 uppercase italic">
            ID: {id}
          </span>
        </div>
      </div>

      {/* ส่วนพิกัดข้อมูลรายละเอียด: เน้นความชัดเจน เข้าใจง่าย */}
      <div className="mt-8 flex flex-1 flex-col px-4 pb-4">
        <div className="mb-3 flex items-center gap-2 text-emerald-600">
          <Zap size={12} fill="currentColor" />
          <span className="font-heading text-[10px] font-black tracking-[0.2em] uppercase italic">
            {category}
          </span>
        </div>

        <h3 className="font-heading mb-6 text-2xl leading-none font-black tracking-tighter text-slate-950 uppercase italic">
          {name}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-8">
          <div className="flex flex-col">
            <span className="font-heading text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
              เริ่มแผนงานที่
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-3xl font-black text-slate-950 italic">
                {price}
              </span>
              <span className="font-heading text-[10px] font-black text-slate-400 italic">
                THB
              </span>
            </div>
          </div>

          <Link
            href={`/templates/${slug}`}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition-all hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/20 active:scale-90"
            aria-label={`ดูรายละเอียดพิกัดงาน ${name}`}
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
