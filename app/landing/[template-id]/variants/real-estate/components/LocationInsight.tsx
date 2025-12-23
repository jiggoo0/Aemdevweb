/** @format */
import React from "react"
import Image from "next/image"

// 🟢 ปรับ Interface ให้ยืดหยุ่นรองรับข้อมูลทั้ง 2 รูปแบบ
export interface LocationInsightProps {
  insight?: {
    title: string
    content: string
    image?: string
  }
  locations?: {
    id: string
    name: string
    image: string
    description?: string
  }[]
}

export default function LocationInsight({
  insight,
  locations = [],
}: LocationInsightProps) {
  // 1. กรณี Render แบบ Insight เดี่ยว (ส่วนใหญ่ใช้ในหน้า Hero/About ของ Real Estate)
  if (insight) {
    return (
      <section className="py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-6xl">
              {insight.title}
            </h2>
            <p className="border-l-4 border-slate-900 pl-6 text-lg font-bold leading-relaxed text-slate-500">
              {insight.content}
            </p>
          </div>
          {insight.image && (
            /* ✅ ใช้ Next.js Image พร้อมเอฟเฟกต์ Grayscale */
            <div className="relative aspect-video overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
              <Image
                src={insight.image}
                alt={insight.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          )}
        </div>
      </section>
    )
  }

  // 2. กรณี Render แบบรายการสถานที่ (Grid Locations)
  if (locations.length > 0) {
    return (
      <section className="py-20">
        <h2 className="mb-12 text-3xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
          Explore Our Locations
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group border-2 border-slate-900 bg-white p-4 transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
            >
              <div className="relative mb-4 aspect-square overflow-hidden border-2 border-slate-900 bg-slate-50">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-black uppercase italic text-slate-900">
                {loc.name}
              </h3>
              {loc.description && (
                <p className="mt-2 text-sm font-bold leading-relaxed text-slate-500">
                  {loc.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    )
  }

  return null
}
