/** @format */
"use client"

import React from "react"
import Image from "next/image"
import { MultiLangText } from "@/app/landing/[template-id]/types"

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
    <section className="relative overflow-hidden bg-white py-16 lg:py-28">
      {/* 🏗️ Engineering Grid Layer */}
      {blueprintGrid && (
        <div
          className="absolute inset-0 z-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* 📝 Text Content Layer */}
          <div className="max-w-2xl space-y-10">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-block border-2 border-slate-900 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                {t({
                  th: "เทมเพลตมาตรฐานอุตสาหกรรม",
                  en: "Industrial Standard",
                })}
              </div>

              <h1 className="text-6xl font-black italic leading-[0.95] tracking-tighter text-slate-900 md:text-8xl">
                {t(title)}
              </h1>

              <p className="border-l-4 border-slate-900 pl-6 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                {t(subtitle)}
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <button
                className="group relative px-10 py-5 text-base font-black uppercase italic tracking-tighter text-white transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
                style={{ backgroundColor: primaryColor }}
              >
                {t({ th: "เริ่มโปรเจกต์ของคุณ", en: "Launch Project" })}
              </button>

              <button className="border-4 border-slate-900 px-10 py-5 text-base font-black uppercase italic tracking-tighter text-slate-900 transition-all hover:bg-slate-900 hover:text-white">
                {t({ th: "ดูรายละเอียด", en: "View Details" })}
              </button>
            </div>
          </div>

          {/* 🖼️ Visual Content Layer */}
          <div className="relative">
            {/* Blueprint Frame Decoration */}
            <div
              className="absolute -bottom-8 -left-8 -right-8 -top-8 z-0 hidden border-[1px] border-dashed border-slate-300 lg:block"
              style={{
                backgroundImage: `radial-gradient(${primaryColor}22 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden border-4 border-slate-900 bg-slate-100 shadow-[30px_30px_0px_0px_rgba(15,23,42,0.08)] md:aspect-square">
              <Image
                src={
                  image ||
                  "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?q=80"
                }
                alt="Engineering Visual"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[0.2] transition-transform duration-700 hover:scale-110 hover:grayscale-0"
              />

              {/* Overlay Label */}
              <div className="absolute bottom-6 right-6 bg-slate-900 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                Ref: AEM-INFRA-V1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
