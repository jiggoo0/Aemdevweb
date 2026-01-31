/** @format */

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions)                                           */
/* -------------------------------------------------------------------------- */

interface ShopHeroProps {
  data: {
    title: string;
    description: string;
    cta: string;
    image: string;
  };
}

/**
 * ShopHero - พิกัดส่วนหัวหลักของระบบ ShopMasterPro
 * เน้นการสร้าง First Impression ที่ดีด้วยความเร็วและการจัดวางที่เป็นระเบียบ
 */
export const ShopHero = ({ data }: ShopHeroProps) => (
  <section className="relative overflow-hidden bg-slate-50 pt-12 pb-24 lg:pt-20 lg:pb-40">
    {/* ลายตารางจางๆ เพื่อเพิ่มมิติงานระบบ (Grid Pattern) */}
    <div
      className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
      aria-hidden="true"
    />

    <div className="container mx-auto grid items-center gap-16 px-6 lg:grid-cols-2">
      {/* 1. พิกัดเนื้อหาและปุ่มนำทาง (Content & CTA) */}
      <div className="relative z-10 space-y-10 text-left">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2">
          <span className="font-heading text-[10px] font-black tracking-widest text-orange-700 uppercase italic">
            New Collection 2026
          </span>
        </div>

        <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
          {data.title}
        </h1>

        <p className="font-body max-w-lg text-xl leading-relaxed font-bold text-slate-500">
          {data.description}
        </p>

        <button className="group font-heading flex items-center gap-4 bg-slate-950 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl transition-all hover:-translate-y-1 hover:bg-orange-600 active:scale-95">
          {data.cta}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-2"
          />
        </button>
      </div>

      {/* 2. พิกัดรูปภาพหลัก (Hero Visual): เน้นความคมชัดและการโหลดที่รวดเร็ว */}
      <div className="relative aspect-square overflow-hidden rounded-[4rem] border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] md:rounded-[6rem]">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-110"
          priority // ตั้งค่าเป็น Priority เพื่อให้โหลดได้ไวที่สุดในหน้าพรีวิว
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </section>
);
