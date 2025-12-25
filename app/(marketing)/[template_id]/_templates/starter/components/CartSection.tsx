/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS PRICING (REFACTORED)
// Identity: Production Professional (Stable Grid Architecture)
// Fix: Thai Typography Leading & Responsive Grid Overflow
// ----------------------------------------------------

"use client"

import React from "react"
import { Check, ArrowRight } from "lucide-react"

interface PricingPlan {
  price: string
  label: string
  isRecommended?: boolean
  details: string[]
}

interface CartSectionProps {
  pricing?: {
    starter: PricingPlan
    business: PricingPlan
  }
  themeColor?: string
}

export default function CartSection({
  pricing,
  themeColor = "#1e40af",
}: CartSectionProps) {
  // Safe Access: ป้องกัน Error หากข้อมูล Pricing หายไปหรือไม่ครบ
  if (!pricing || !pricing.starter || !pricing.business) return null

  const plans = [
    { key: "starter", data: pricing.starter },
    { key: "business", data: pricing.business },
  ]

  return (
    <section
      id="pricing"
      className="overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        {/* PRICING_HEADER: ปรับ Leading สำหรับฟอนต์ไทย */}
        <div className="border-b border-slate-200 bg-slate-50/50 p-10 md:p-16">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Investment_Structure
          </span>
          <h2 className="text-4xl font-black uppercase leading-[1.15] tracking-tighter md:text-6xl">
            ราคาโปร่งใส <br />
            ไม่มีค่าใช้จ่ายแฝง
          </h2>
        </div>

        {/* PRICING_GRID: แบ่ง 2 ฝั่งชัดเจน ล็อกความกว้างป้องกันการยืด */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`flex flex-col p-10 transition-all duration-300 md:p-16 ${
                plan.data.isRecommended
                  ? "bg-slate-900 text-white"
                  : "border-b border-slate-200 bg-white text-slate-900 last:border-b-0 md:border-b-0 md:border-r"
              }`}
            >
              <div className="mb-12">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                    plan.data.isRecommended ? "text-blue-400" : "text-slate-400"
                  }`}
                >
                  {plan.data.label}
                </span>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-6xl font-black italic leading-none tracking-tighter md:text-7xl">
                    {plan.data.price}
                  </span>
                  <span className="font-mono text-lg font-bold tracking-tighter opacity-50">
                    THB
                  </span>
                </div>
              </div>

              {/* LIST: ปรับฟอนต์ไทยให้อ่านง่ายและไอคอนตรงแนวบรรทัด */}
              <ul className="mb-16 flex-grow space-y-5">
                {plan.data.details.map((detail, dIdx) => (
                  <li key={dIdx} className="group flex items-start gap-3">
                    <div className="mt-1">
                      <Check
                        size={16}
                        className={
                          plan.data.isRecommended
                            ? "text-blue-400"
                            : "text-blue-600"
                        }
                        strokeWidth={4}
                      />
                    </div>
                    <span className="text-sm font-bold uppercase leading-relaxed tracking-tight opacity-90">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA_BUTTON: เพิ่ม Interactive Feedback */}
              <button
                style={{
                  backgroundColor: plan.data.isRecommended
                    ? themeColor
                    : "transparent",
                  borderColor: plan.data.isRecommended
                    ? "transparent"
                    : "#e2e8f0",
                }}
                className={`flex w-full items-center justify-center gap-3 rounded-none border py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all active:scale-[0.98] ${
                  plan.data.isRecommended
                    ? "text-white shadow-xl shadow-blue-900/20 hover:brightness-110"
                    : "text-slate-900 hover:bg-slate-50"
                }`}
              >
                Get_Started <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
