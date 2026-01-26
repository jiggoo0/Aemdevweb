/** @format */
import React from "react"
import Image from "next/image"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface ShopHeroProps {
  data: {
    title: string
    description: string
    cta: string
    image: string
  }
}

/**
 * ShopHero - ส่วนหัวหลักของระบบ ShopMasterPro
 * ปรับปรุงพิกัด Type และระบบ Font ให้เป็นมาตรฐาน Specialist 2026
 */
export const ShopHero = ({ data }: ShopHeroProps) => (
  <section className="relative overflow-hidden bg-slate-50 pt-12 pb-24 lg:pt-20 lg:pb-40">
    <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
      {/* ส่วนพิกัดเนื้อหาและปุ่มกระตุ้นยอดขาย (CTA) */}
      <div className="relative z-10 space-y-10 text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
          <span className="font-heading text-[10px] font-black tracking-widest text-orange-700 uppercase italic">
            New Arrival 2026
          </span>
        </div>

        <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
          {data.title}
        </h1>

        <p className="font-body max-w-lg text-xl leading-relaxed font-bold text-slate-500">
          {data.description}
        </p>

        <button className="font-heading bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:-translate-y-1 hover:bg-orange-600 active:scale-95">
          {data.cta}
        </button>
      </div>

      {/* ส่วนพิกัดรูปภาพ Hero: ล็อคพิกัดอัตราส่วนและเงา (Shadow) แบบพรีเมียม */}
      <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] md:rounded-[6rem]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-110"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
)
