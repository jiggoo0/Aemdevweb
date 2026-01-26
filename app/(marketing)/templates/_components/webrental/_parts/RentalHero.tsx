/** @format */
import React from "react"
import { ArrowRight } from "lucide-react"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface RentalHeroProps {
  data: {
    badge: string
    title: string
    highlight: string
    description: string
    priceLabel: string
    priceValue: string
  }
}

/**
 * RentalHero - ส่วนหัวของระบบเช่าเว็บไซต์
 * ปรับปรุงพิกัด Type และระบบ Font เพื่อความเสถียรของระบบงานปี 2026
 */
export const RentalHero = ({ data }: RentalHeroProps) => (
  <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24 text-white lg:pt-48 lg:pb-40">
    {/* Grid Background Effect: สร้างมิติงานระบบ Cloud */}
    <div
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      aria-hidden="true"
    />
    <div
      className="absolute top-0 right-0 left-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"
      aria-hidden="true"
    />

    <div className="relative z-10 container mx-auto px-6 text-center">
      {/* Badge แสดงสถานะหรือกลุ่มเป้าหมาย */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-indigo-400 uppercase italic">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
        </span>
        {data.badge}
      </div>

      <h1 className="font-heading mb-6 text-5xl leading-[1.1] font-black tracking-tighter text-white uppercase italic lg:text-8xl">
        {data.title} <br />
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          {data.highlight}
        </span>
      </h1>

      <p className="font-body mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-bold text-slate-400 lg:text-xl">
        {data.description}
      </p>

      {/* ส่วนแสดงราคาเริ่มต้นเพื่อปิดการขาย (Conversion Area) */}
      <div className="flex flex-col items-center gap-4">
        <p className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
          {data.priceLabel}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-7xl font-black text-white italic">
            {data.priceValue}
          </span>
          <span className="font-body text-xl font-black text-slate-500 italic">
            บาท/เดือน
          </span>
        </div>

        <button className="font-heading mt-6 flex items-center gap-3 rounded-full bg-indigo-600 px-10 py-5 text-[11px] font-black tracking-[0.2em] text-white uppercase shadow-2xl shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95">
          เริ่มต้นใช้งานเลย <ArrowRight size={18} />
        </button>

        <p className="font-body mt-4 text-[10px] font-bold tracking-wider text-slate-600">
          *ไม่มีข้อผูกมัด ยกเลิกเมื่อไหร่ก็ได้
        </p>
      </div>
    </div>
  </section>
)
