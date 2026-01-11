/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight, CalendarCheck, ShieldCheck, Star } from "lucide-react"

interface HeroProps {
  data: {
    title: string
    subtitle: string
    cta: string
    image: string
  }
}

export default function ClinicHero({ data }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-50">
      {/* ─── BACKGROUND DECORATION ─── */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-sky-200 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto grid min-h-[90vh] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* ─── LEFT CONTENT ─── */}
        <div
          className={`space-y-8 transition-all duration-1000 ${
            mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
            <ShieldCheck size={18} />
            <span>มาตรฐานการรักษาระดับสากล</span>
          </div>

          <h1 className="text-5xl font-extrabold leading-[1.15] text-slate-900 md:text-6xl lg:text-7xl">
            {data.title.split(",")[0]} <br />
            <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
              {data.title.split(",")[1] || "Health, Our Priority"}
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            {data.subtitle}
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <button
              onClick={() =>
                document
                  .getElementById("appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-sky-200 transition-all hover:bg-sky-700 hover:shadow-2xl active:scale-95"
            >
              <CalendarCheck size={22} />
              {data.cta}
              <ChevronRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </button>

            <div className="flex items-center gap-3 px-2">
              <div className="flex -space-x-3">
                {[11, 12, 13].map((imgId) => (
                  <div
                    key={imgId}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200 shadow-sm"
                  >
                    {/* ✅ ปิดการแจ้งเตือน lint เนื่องจากเป็นรูปภาพภายนอกที่ไม่ต้องการตั้งค่าใน next.config.js */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/100?img=${imgId}`}
                      alt="Verified Patient"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-orange-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-bold text-slate-900">
                  รีวิวจากคนไข้จริง 4.9/5
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT CONTENT ─── */}
        <div
          className={`relative flex justify-center transition-all delay-300 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="relative h-[500px] w-full max-w-[500px] overflow-hidden rounded-[3rem] shadow-2xl lg:h-[600px]">
            <Image
              src={data.image}
              alt="Medical Professional Specialist"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Medical Excellence
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    ทีมแพทย์ผู้เชี่ยวชาญเฉพาะทาง
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -top-6 h-24 w-24 animate-bounce rounded-full bg-emerald-400/20 blur-xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-400/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
