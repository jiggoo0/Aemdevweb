/** @format */
import React from "react"
import Image from "next/image"

/**
 * 🟢 แก้ไข Interface: เพิ่ม primaryColor และระบุโครงสร้าง Item ให้ชัดเจน
 * เพื่อแก้ปัญหา TS2322 ใน Cafe Template
 */
export interface MenuItem {
  id?: string | number
  name: string
  description?: string
  price: string | number
  image?: string
  category?: string
}

export interface MenuHighlightProps {
  items: MenuItem[]
  primaryColor?: string
}

export default function MenuHighlight({
  items = [],
  primaryColor = "#eab308",
}: MenuHighlightProps) {
  if (!items.length) return null

  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-12"
              style={{ backgroundColor: primaryColor }}
            />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
              Selected Menu
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-6xl">
            Signature Highlights
          </h2>
        </div>
        <div className="mx-8 mb-4 hidden h-[1px] flex-grow border-t-2 border-dashed border-slate-200 md:block" />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group flex items-start gap-6 border-b-2 border-slate-50 pb-8 transition-colors hover:border-slate-900"
          >
            {/* ✅ เปลี่ยนเป็น Next.js Image Component */}
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:-translate-y-1">
              <Image
                src={item.image || "/api/placeholder/200/200"}
                alt={item.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            {/* Item Details */}
            <div className="flex-grow">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">
                  {item.name}
                </h3>
                <div className="flex-grow border-b-2 border-dotted border-slate-200" />
                <span
                  className="text-xl font-black tabular-nums"
                  style={{ color: primaryColor }}
                >
                  {typeof item.price === "number"
                    ? `${item.price}.-`
                    : item.price}
                </span>
              </div>

              {item.description && (
                <p className="mt-2 text-sm font-bold leading-relaxed text-slate-500">
                  {item.description}
                </p>
              )}

              {item.category && (
                <span className="mt-3 inline-block bg-slate-100 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-slate-500">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="mt-16 flex items-center justify-center gap-4 opacity-20">
        <div className="h-[1px] w-20 bg-slate-900" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">
          Premium Quality Beans
        </span>
        <div className="h-[1px] w-20 bg-slate-900" />
      </div>
    </section>
  )
}
