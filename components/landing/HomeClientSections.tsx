/** @format */
"use client"

import React from "react"
import dynamic from "next/dynamic"

/**
 * 🚀 HomeClientSections: Luminous Performance Engine (Fix: Named Export)
 * ✅ แก้ไข Error: Element type is invalid โดยการระบุ Property ในการ Import
 */

// 1. 🏗️ Dynamic Imports: ต้องระบุ .then(mod => mod.ComponentName)
const PriceEstimator = dynamic(
  () =>
    import("@/components/sales-engine/PriceEstimator").then(
      (mod) => mod.PriceEstimator
    ),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] w-full animate-pulse rounded-[3rem] bg-white/5" />
    ),
  }
)

const Testimonials = dynamic(
  () =>
    import("@/components/landing/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false }
)

const ImpactStats = dynamic(
  () =>
    import("@/components/sales-engine/ImpactStats").then(
      (mod) => mod.ImpactStats
    ),
  { ssr: false }
)

export default function HomeClientSections() {
  return (
    <>
      {/* 📊 ส่วนที่ 4: Impact Stats */}
      <section className="shadow-luminous relative z-10 border-y border-white/5 bg-white/[0.03] py-24 backdrop-blur-3xl">
        <ImpactStats />
      </section>

      {/* 💰 ส่วนที่ 8: Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-aurora-cyan mb-4 block text-[10px] font-black tracking-[0.3em] uppercase">
              Transparent Pricing
            </span>
            <h2 className="text-luminous text-3xl tracking-tighter uppercase md:text-6xl">
              ประเมินราคาเบื้องต้น
            </h2>
          </div>
          <PriceEstimator />
        </div>
      </section>

      {/* ⭐ ส่วนที่ 9: Testimonials */}
      <section className="rounded-t-4xl border-t border-white/5 bg-white/[0.01] py-32">
        <Testimonials />
      </section>
    </>
  )
}
