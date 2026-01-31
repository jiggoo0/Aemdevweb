/** @format */

"use client";

import React from "react";
import Image from "next/image";

/**
 * ShowcaseTemplate - ข้อมูลพื้นฐานของระบบงานตัวอย่าง
 */
interface ShowcaseTemplate {
  name: string;
  image: string;
  category: string;
}

/**
 * RentalShowcaseProps - การกำหนดพิกัดข้อมูลที่จะส่งเข้ามา
 */
interface RentalShowcaseProps {
  data: {
    title: string;
    description: string;
    templates: ShowcaseTemplate[];
  };
}

/**
 * RentalShowcase - ส่วนจัดแสดงพิกัดระบบงานที่พร้อมออนไลน์
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export const RentalShowcase = ({ data }: RentalShowcaseProps) => {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="font-heading text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
            {data.title}
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-emerald-500" />
          <p className="font-body mx-auto mt-10 max-w-2xl text-lg font-bold text-slate-400 md:text-xl">
            {data.description}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {data.templates.map((template, i) => (
            <div
              key={`${template.name}-${i}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 transition-all duration-700 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <Image
                src={template.image}
                alt={template.name}
                fill
                className="object-cover opacity-50 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
              <div className="absolute inset-x-0 bottom-0 p-10 text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-500/20 backdrop-blur-md">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-heading text-[9px] font-black tracking-widest text-emerald-400 uppercase italic">
                    {template.category}
                  </span>
                </div>
                <h3 className="font-heading text-3xl leading-none font-black tracking-tighter text-white uppercase italic">
                  {template.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
