/** @format */
import React from "react"
import Image from "next/image"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface ShowcaseTemplate {
  name: string
  image: string
  category: string
}

interface RentalShowcaseProps {
  data: {
    title: string
    description: string
    templates: ShowcaseTemplate[]
  }
}

/**
 * RentalShowcase - ส่วนแสดงผลงานเทมเพลตในระบบเช่าเว็บ
 * ปรับปรุงพิกัด Type เพื่อความเสถียรของระบบและล้างข้อผิดพลาดจาก ESLint
 */
export const RentalShowcase = ({ data }: RentalShowcaseProps) => (
  <section id="showcase" className="bg-slate-950 py-24 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="font-heading mb-6 text-3xl font-black uppercase italic lg:text-5xl">
        {data.title}
      </h2>
      <p className="font-body mx-auto mb-16 max-w-2xl font-bold text-slate-400">
        {data.description}
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {data.templates.map((template, i) => (
          <div
            key={`${template.name}-${i}`}
            className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-white/5"
          >
            <Image
              src={template.image}
              alt={template.name}
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* เลเยอร์ไล่เฉดสีเพื่อให้ตัวอักษรคมชัด */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-8 text-left">
              <span className="font-heading mb-2 block text-[10px] font-black tracking-widest text-indigo-400 uppercase italic">
                {template.category}
              </span>
              <h3 className="font-heading text-2xl font-black text-white uppercase italic">
                {template.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
