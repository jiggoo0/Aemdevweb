/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"

/**
 * 🚀 HomeClientSections: Luminous Performance Engine
 * ทำหน้าที่โหลด Component ที่มี Client Logic หนักๆ แบบ Lazy Loading (Deferred)
 * ช่วยลดค่า TBT (Total Blocking Time) ให้หน้าแรกโหลดเสร็จไวที่สุด
 */

// 1. 🏗️ Impact Stats: โหลดแบบไม่ต้องรอ (Priority Low)
const ImpactStats = dynamic(
  () =>
    import("@/components/sales-engine/ImpactStats").then(
      (mod) => mod.ImpactStats
    ),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto h-32 w-full animate-pulse rounded-xl bg-white/5" />
    ),
  }
)

// 2. 💰 Price Estimator: Logic หนักสุด แยกออกมาเพื่อไม่ให้บล็อก Main Thread
const PriceEstimator = dynamic(
  () =>
    import("@/components/sales-engine/PriceEstimator").then(
      (mod) => mod.PriceEstimator
    ),
  {
    ssr: false,
    loading: () => (
      <div className="glass-card mx-auto h-[600px] w-full max-w-5xl animate-pulse rounded-[2.5rem] bg-white/5" />
    ),
  }
)

// 3. ⭐ Testimonials: โหลดท้ายสุด
const Testimonials = dynamic(
  () =>
    import("@/components/landing/Testimonials").then((mod) => mod.Testimonials),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto h-[500px] w-full animate-pulse rounded-3xl bg-white/5" />
    ),
  }
)

export default function HomeClientSections() {
  return (
    <>
      {/* 📊 Section 4: Impact Statistics (Banner Style) */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-24 backdrop-blur-3xl">
        <div className="from-aurora-cyan/5 to-aurora-violet/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-50" />
        <div className="relative">
          <ImpactStats />
        </div>
      </section>

      {/* 💰 Section 8: Calculator & Pricing */}
      <section
        id="pricing"
        className="relative container mx-auto px-4 py-32 lg:py-48"
      >
        {/* Background Glow for Pricing */}
        <div className="bg-aurora-cyan/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <span className="text-aurora-cyan mb-6 block text-[10px] font-black tracking-[0.3em] uppercase">
              Transparent Pricing
            </span>
            <h2 className="text-luminous mb-6 text-4xl uppercase md:text-6xl">
              ประเมินราคา<span className="text-aurora-emerald">เบื้องต้น</span>
            </h2>
            <p className="font-anuphan mx-auto max-w-2xl text-lg text-slate-400">
              เลือกฟีเจอร์ที่ต้องการ แล้วระบบจะคำนวณงบประมาณให้ทันที
              (ราคาจริงอาจปรับเปลี่ยนตามขอบเขตงาน)
            </p>
          </div>

          <PriceEstimator />
        </div>
      </section>

      {/* ⭐ Section 9: Client Testimonials */}
      <section className="relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-white/[0.01] py-32 md:rounded-t-[4.5rem]">
        {/* Decor */}
        <div className="bg-aurora-violet/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-luminous text-3xl uppercase md:text-5xl">
              Voice of <span className="text-slate-500">Success</span>
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  )
}
