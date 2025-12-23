/** @format */
import React from "react"
import Image from "next/image"

/**
 * 🟢 แก้ไข Interface: ปรับชื่อ Property ให้ตรงกับข้อมูลที่ส่งมาจาก template.tsx
 */
export interface BeforeAfterItem {
  before: string
  after: string
  label?: string
}

export interface BeforeAfterProps {
  beforeAfter: BeforeAfterItem[]
  primaryColor?: string
}

export default function BeforeAfter({
  beforeAfter = [],
  primaryColor = "#0ea5e9", // Default เป็นสีฟ้าคลินิก
}: BeforeAfterProps) {
  if (!beforeAfter || beforeAfter.length === 0) return null

  return (
    <section className="py-16">
      {/* --- Section Header --- */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
          Real Results
        </h2>
        <div
          className="mx-auto mt-4 h-1.5 w-20"
          style={{ backgroundColor: primaryColor }}
        />
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Case Studies & Treatment Gallery
        </p>
      </div>

      {/* --- Comparison Grid --- */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {beforeAfter.map((item, idx) => (
          <div key={idx} className="group relative">
            {/* Comparison Container */}
            <div className="relative flex gap-1 overflow-hidden border-2 border-slate-900 bg-slate-900 p-1 shadow-[10px_10px_0px_0px_rgba(15,23,42,0.05)] transition-all hover:shadow-[10px_10px_0px_0px_rgba(15,23,42,0.1)]">
              {/* ✅ Before Image with Next.js Image */}
              <div className="relative aspect-square w-1/2 overflow-hidden">
                <Image
                  src={item.before || "/api/placeholder/400/400"}
                  alt="Before treatment"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 z-10 bg-slate-900/80 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                  Before
                </div>
              </div>

              {/* ✅ After Image with Next.js Image */}
              <div className="relative aspect-square w-1/2 overflow-hidden">
                <Image
                  src={item.after || "/api/placeholder/400/400"}
                  alt="After treatment"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-2 right-2 z-10 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-white backdrop-blur-sm"
                  style={{ backgroundColor: primaryColor }}
                >
                  After
                </div>
              </div>
            </div>

            {/* Case Label */}
            {item.label && (
              <div className="mt-4 border-l-4 border-slate-900 pl-4">
                <h4 className="text-lg font-black uppercase italic tracking-tight text-slate-900">
                  {item.label}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trust Disclaimer */}
      <div className="mt-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          * Results may vary depending on individual conditions
        </p>
      </div>
    </section>
  )
}
