/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FacebookAdsData } from "./data"
// [FIXED]: ตัด Users และ Menu ออกเนื่องจากไม่ได้ถูกเรียกใช้งานใน Component
import { CheckCircle2, TrendingUp, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export const FacebookAdsTemplate = ({ data }: { data: FacebookAdsData }) => {
  const { navbar, expert, stats, services, cta } = data
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="thai-font-smoothing w-full bg-white font-sans text-blue-950">
      {/* NAVBAR */}
      <nav
        className={cn(
          "fixed top-0 z-[100] w-full transition-all duration-300",
          isScrolled
            ? "bg-white/90 py-4 shadow-sm backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-xl font-black tracking-tight text-blue-600">
            {navbar.logo}
          </div>
          <div className="flex items-center gap-6">
            <button className="hidden text-sm font-bold text-slate-600 transition-colors hover:text-blue-600 lg:block">
              ผลลัพธ์ที่ผ่านมา
            </button>
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-xs font-black tracking-widest text-white uppercase shadow-lg shadow-blue-200 transition hover:bg-blue-700">
              {navbar.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO & PROFILE */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
            <div className="order-2 lg:order-1 lg:w-3/5">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                <Target size={12} /> ยิงโฆษณาแบบมืออาชีพ
              </div>
              <h1 className="font-prompt text-5xl leading-[1.1] font-black md:text-7xl lg:text-8xl">
                {expert.name}
              </h1>
              <p className="mt-4 text-xl font-bold text-blue-600 md:text-2xl">
                {expert.title}
              </p>
              <p className="mt-8 text-lg leading-relaxed text-slate-500 md:text-xl lg:max-w-xl">
                {expert.bio}
              </p>
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <p className="text-3xl font-black text-blue-600">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-2/5">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[3rem] border-8 border-white shadow-2xl lg:max-w-none">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-prompt text-4xl leading-tight font-black text-blue-950 md:text-6xl">
              {services.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.items.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-slate-100 bg-slate-50 p-10 transition-all hover:bg-white hover:shadow-2xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform group-hover:scale-110">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-black text-blue-950">
                  {item.title}
                </h3>
                <p className="mt-4 font-bold text-blue-600">{item.desc}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 py-24 text-center text-white md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="font-prompt mx-auto max-w-3xl text-4xl leading-tight font-black md:text-6xl">
            {cta.title}
          </h2>
          <p className="mt-6 text-lg opacity-90 md:text-xl">{cta.subtitle}</p>
          <button className="mt-12 inline-flex h-20 min-w-[300px] items-center justify-center rounded-full bg-white px-12 text-sm font-black tracking-widest text-blue-600 uppercase shadow-xl transition-all hover:scale-105 active:scale-95">
            {cta.buttonText}
          </button>
          <div className="mt-10 flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
              <CheckCircle2 size={14} /> วิเคราะห์แผนฟรี
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
              <CheckCircle2 size={14} /> ไม่มีข้อผูกมัด
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 text-center text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
        © 2026 {navbar.logo} . powered by aemdevweb technical engine
      </footer>
    </div>
  )
}
