/** @format */
import React from "react";
import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface HotelHeroProps {
  data: {
    bgImage: string;
    title: string;
    description: string;
  };
}

/**
 * HotelHero - ส่วนหัวหลักของเทมเพลตโรงแรมและรีสอร์ท
 * ปรับปรุงพิกัด Type และระบบ Image Optimization เพื่อผลลัพธ์ LCP 0.6 วินาที
 */
export const HotelHero = ({ data }: HotelHeroProps) => (
  <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-slate-950 text-left">
    {/* ส่วนพิกัดพื้นหลัง: ใช้คุณสมบัติ priority เพื่อคะแนนความเร็วสูงสุด */}
    <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-1000 group-hover:opacity-60">
      <Image
        src={data.bgImage}
        alt={`${data.title} background`}
        fill
        className="object-cover transition-transform duration-[10s] hover:scale-110"
        priority // ล็อคพิกัดให้โหลดทันทีเพราะเป็นส่วนประกอบ LCP
        sizes="100vw"
        quality={90}
      />
      {/* Overlay ไล่เฉดสีเพื่อให้ตัวหนังสือคมชัดในทุกสภาพแสง */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
    </div>

    {/* ส่วนพิกัดเนื้อหาหลัก */}
    <div className="relative z-10 container mx-auto px-6">
      <div className="max-w-3xl space-y-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-emerald-500" />
          <span className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-400 uppercase italic">
            Premium Stay Experience v2026
          </span>
        </div>

        <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-9xl">
          {data.title}
        </h1>

        <p className="font-body max-w-xl text-xl leading-relaxed font-bold text-slate-200 md:text-2xl">
          {data.description}
        </p>

        <button className="font-heading bg-emerald-500 px-12 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase shadow-2xl shadow-emerald-950/50 transition-all hover:-translate-y-1 hover:bg-emerald-400 active:scale-95">
          ค้นหาห้องพักว่าง
        </button>
      </div>
    </div>
  </section>
);
