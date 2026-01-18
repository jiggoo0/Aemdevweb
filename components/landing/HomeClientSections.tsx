/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"

// 1. 🏗️ Impact Stats Loading Skeleton
const ImpactStats = dynamic(
  () => import("@/components/sales-engine/ImpactStats").then((mod) => mod.ImpactStats),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <div className="h-14 w-14 animate-pulse rounded-2xl bg-white/5" />
              <div className="h-8 w-24 animate-pulse rounded-lg bg-white/5" />
              <div className="h-4 w-32 animate-pulse rounded-lg bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    ),
  }
)

// 2. 💰 Price Estimator Loading Skeleton (Height Fixed: 600px)
const PriceEstimator = dynamic(
  () => import("@/components/sales-engine/PriceEstimator").then((mod) => mod.PriceEstimator),
  {
    ssr: false,
    loading: () => (
      <div className="glass-card mx-auto flex h-[600px] w-full max-w-5xl animate-pulse flex-col items-center justify-center border border-white/10 bg-white/5 rounded-[2.5rem]">
        <div className="mb-8 h-8 w-48 rounded-xl bg-white/10" />
        <div className="w-full space-y-6 px-12">
          <div className="h-20 w-full rounded-2xl bg-white/5" />
          <div className="h-20 w-full rounded-2xl bg-white/5" />
          <div className="h-20 w-full rounded-2xl bg-white/5" />
        </div>
      </div>
    ),
  }
)

// 3. ⭐ Testimonials Loading Skeleton
const Testimonials = dynamic(
  () => import("@/components/landing/Testimonials").then((mod) => mod.Testimonials),
  {
    ssr: false,
    loading: () => (
      <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="glass-card h-80 w-full animate-pulse rounded-[2rem] bg-white/5 p-10 mb-8 border border-white/5" />
        ))}
      </div>
    ),
  }
)

export default function HomeClientSections() {
  return (
    <>
      {/* 📊 Section 4: Impact Statistics */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.01] py-24 backdrop-blur-3xl">
        <div className="from-aurora-cyan/5 to-aurora-violet/5 absolute inset-0 bg-gradient-to-r via-transparent opacity-30" />
        <ImpactStats />
      </section>

      {/* 💰 Section 8: Pricing Engine */}
      <section id="pricing" className="relative container mx-auto px-4 py-32 lg:py-48">
        <div className="bg-aurora-cyan/10 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]" />
        
        <div className="mx-auto max-w-5xl">
          <div className="mb-20 text-center">
            <span className="text-aurora-cyan font-prompt mb-6 block text-[10px] font-black tracking-[0.3em] uppercase italic">
              Transparent Pricing
            </span>
            <h2 className="text-luminous mb-6 text-4xl uppercase md:text-6xl italic">
              ประเมินราคา<span className="text-aurora-emerald">เบื้องต้น</span>
            </h2>
            <p className="font-anuphan mx-auto max-w-2xl text-lg text-slate-400 font-medium">
              เลือกฟีเจอร์ที่ต้องการ แล้วระบบจะคำนวณงบประมาณให้ทันที <br className="hidden md:block" />
              <span className="text-white/60 text-sm">(งบประมาณจริงอาจปรับเปลี่ยนตามขอบเขตงาน)</span>
            </p>
          </div>
          <PriceEstimator />
        </div>
      </section>

      {/* ⭐ Section 9: Testimonials */}
      <section className="relative overflow-hidden rounded-t-[3rem] border-t border-white/10 bg-white/[0.01] py-32 md:rounded-t-[4.5rem]">
        <div className="bg-aurora-violet/10 absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px] opacity-50" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="mb-20 text-center">
             <div className="text-aurora-violet font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
                Customer Voices
              </div>
            <h2 className="text-luminous text-4xl uppercase md:text-6xl italic">
              Voice of <span className="text-slate-500">Success</span>
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  )
}
