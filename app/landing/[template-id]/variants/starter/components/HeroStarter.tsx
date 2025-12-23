/** @format */
import React from "react"
import Image from "next/image"
import { MultiLangText } from "../../../types"

/**
 * 🟢 ปรับ Interface ให้รองรับ Props จาก Template.tsx
 */
export interface HeroStarterProps {
  title: string | MultiLangText
  subtitle: string | MultiLangText
  image?: string
  blueprintGrid?: boolean
  primaryColor?: string
  t: (content: string | MultiLangText | undefined) => string
}

export default function HeroStarter({
  title,
  subtitle,
  image,
  blueprintGrid = true,
  primaryColor = "#000000",
  t,
}: HeroStarterProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Decor: Blueprint Grid */}
      {blueprintGrid && (
        <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <div className="[background-image:grid:1px_solid_black] h-full w-full bg-[size:40px_40px]" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
                {t(title)}
              </h1>
              <p className="text-xl font-medium leading-relaxed text-slate-500">
                {t(subtitle)}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: primaryColor }}
              >
                Get Started Now
              </button>
              <button className="border-2 border-slate-900 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Content with Modern Frame */}
          <div className="relative">
            <div
              className="absolute -bottom-6 -right-6 h-full w-full border-2 border-dashed"
              style={{ borderColor: `${primaryColor}33` }}
            />
            {/* ✅ เปลี่ยนเป็น Next.js Image Component */}
            <div className="relative aspect-square overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
              <Image
                src={image || "/api/placeholder/800/800"}
                alt="Hero Visual"
                fill
                priority // สำคัญ: โหลดรูปนี้ทันทีเพราะอยู่ส่วนบนสุดของหน้า
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
