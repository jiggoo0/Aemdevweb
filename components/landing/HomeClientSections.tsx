/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"

/**
 * 🛰️ HomeClientSections: Luminous Performance Engine (v.2026)
 * รวม Components ที่ทำงานฝั่ง Client เพื่อลด TBT ในหน้าแรก
 * ✅ Strategy: Selective Hydration & SSR-Ready for SEO
 */

// 1. 📊 Impact Stats: ใช้ Loading State ง่ายๆ เพื่อหลอกตาว่าเร็ว
const ImpactStats = dynamic(
  () =>
    import("@/components/sales-engine/ImpactStats").then(
      (mod) => mod.ImpactStats
    ),
  {
    ssr: true, // SEO ต้องการตัวเลข
    loading: () => (
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-5">
              <div className="h-16 w-16 animate-pulse rounded-2xl border border-white/5 bg-white/5 shadow-inner" />
              <div className="h-8 w-24 animate-pulse rounded-lg bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    ),
  }
)

// 2. 💰 Price Estimator: Logic หนัก -> SSR: FALSE เท่านั้น
// ไม่จำเป็นต้องให้ Server Render เพราะ User ต้องกดเล่นเอง
const PriceEstimator = dynamic(
  () =>
    import("@/components/sales-engine/PriceEstimator").then(
      (mod) => mod.PriceEstimator
    ),
  {
    ssr: false, // ⚡ Critical Optimization: ไม่ต้อง Render ฝั่ง Server
    loading: () => (
      <div className="glass-card shadow-luminous mx-auto flex min-h-[500px] w-full max-w-5xl animate-pulse flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5">
        <div className="mb-12 h-10 w-64 rounded-2xl bg-white/10" />
        <div className="w-full max-w-2xl space-y-6 px-10">
          <div className="h-20 w-full rounded-2xl border border-white/5 bg-white/5" />
        </div>
      </div>
    ),
  }
)

// 3. ⭐ Testimonials: SSR: True (เพื่อ SEO)
const Testimonials = dynamic(
  () =>
    import("@/components/landing/Testimonials").then(
      (mod) => mod.Testimonials
    ),
  {
    ssr: true,
    loading: () => (
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card h-80 w-full animate-pulse rounded-[2rem] border border-white/5 bg-white/5" />
      </div>
    ),
  }
)

/**
 * ✅ HomeClientSections Logic
 */
export function HomeClientSections() {
  return (
    <>
      {/* 📊 Section: Success Metrics */}
      <section className="relative z-10 border-y border-white/5 bg-slate-950/20 backdrop-blur-3xl">
        <div className="from-aurora-cyan/5 to-aurora-violet/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-30" />
        <div className="relative py-12 md:py-20">
          <ImpactStats />
        </div>
      </section>

      {/* 💰 Section: Interactive Pricing (Render On Client Only) */}
      <section
        id="pricing"
        className="relative container mx-auto px-4 py-32 lg:py-48 content-visibility-auto"
      >
        {/* Background Ambient Glow */}
        <div className="bg-aurora-cyan/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[100px] will-change-transform" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <span className="text-aurora-cyan font-prompt mb-6 block text-[10px] font-black tracking-[0.3em] uppercase italic">
              Transparent Pricing
            </span>
            <h2 className="text-luminous mb-6 text-4xl uppercase italic md:text-6xl">
              ประเมินราคา<span className="text-aurora-emerald">เบื้องต้น</span>
            </h2>
            <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium text-slate-400">
              เลือกฟีเจอร์ที่ต้องการ แล้วระบบจะคำนวณงบประมาณให้ทันที{" "}
              <br className="hidden md:block" />
              <span className="text-sm text-white/60">
                (งบประมาณจริงอาจปรับเปลี่ยนตามขอบเขตงานของคุณ)
              </span>
            </p>
          </div>

          <PriceEstimator />
        </div>
      </section>

      {/* ⭐ Section: Social Proof & Testimonials */}
      <section className="relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-white/[0.01] pt-32 pb-24 md:rounded-t-[4.5rem] content-visibility-auto">
        <div className="bg-aurora-violet/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px] opacity-40 will-change-transform" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-20 text-center">
            <div className="text-aurora-violet font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
              Customer Voices
            </div>
            <h2 className="text-luminous text-4xl uppercase italic md:text-6xl">
              Voice of <span className="text-slate-500">Success</span>
            </h2>
          </div>

          <Testimonials />
        </div>
      </section>
    </>
  )
}

export default HomeClientSections
