/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PRICING & CART SECTION
// Identity: Sales Closer (ส่วนการเลือกแพ็กเกจและราคา)
// Function: แยกกลุ่มเป้าหมาย ชวนช่างไม้และเจ้าของบ้านให้ติดต่อถูกช่องทาง
// ----------------------------------------------------

"use client"

import React from "react"
import { Check, ArrowRight, Home, HardHat, ShieldCheck } from "lucide-react"

interface PricingPlan {
  price: string
  label: string
  isRecommended?: boolean
  details: string[]
}

interface CartSectionProps {
  pricing: {
    starter: PricingPlan
    business: PricingPlan
  }
  themeColor?: string // ✅ ทำเป็น optional พร้อม default value
}

export default function CartSection({
  pricing,
  themeColor = "#7B3F00",
}: CartSectionProps) {
  const plans = [
    {
      key: "starter",
      data: pricing.starter,
      icon: <Home size={24} className="text-slate-400" />,
      target: "สำหรับเจ้าของบ้าน",
    },
    {
      key: "business",
      data: pricing.business,
      icon: <HardHat size={24} style={{ color: themeColor }} />,
      target: "สำหรับช่าง & ผู้รับเหมา",
    },
  ]

  return (
    <section id="pricing" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl border-x border-slate-200 bg-white">
        {/* 🏗️ SECTION_HEADER */}
        <div className="border-b border-slate-200 p-10 text-center md:p-20">
          <span className="mb-4 inline-block font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
            Choose_Your_Requirement
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
            ราคาตรงจาก <span style={{ color: themeColor }}>โรงไม้</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-slate-500">
            เลือกรูปแบบการสั่งซื้อที่ตรงกับความต้องการของคุณ{" "}
            <br className="hidden md:block" />
            เพื่อให้ได้รับข้อเสนอและบริการที่คุ้มค่าที่สุด
          </p>
        </div>

        {/* 📦 PRICING_CARDS_GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <div
              key={plan.key}
              className={`relative flex flex-col p-10 md:p-16 ${
                idx === 0 ? "border-b md:border-b-0 md:border-r" : ""
              } border-slate-200`}
            >
              {/* RECOMMENDED_TAG */}
              {plan.data.isRecommended && (
                <div
                  className="absolute right-10 top-10 flex items-center gap-2 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white"
                  style={{ backgroundColor: themeColor }}
                >
                  <ShieldCheck size={12} /> Recommended
                </div>
              )}

              {/* PLAN_ICON & LABEL */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-50">
                  {plan.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {plan.target}
                  </p>
                  <h3 className="text-xl font-black uppercase text-slate-900">
                    {plan.data.label.replace("_", " ")}
                  </h3>
                </div>
              </div>

              {/* PRICE_DISPLAY */}
              <div className="mb-10">
                <span className="text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
                  {plan.data.price}
                </span>
              </div>

              {/* FEATURES_LIST */}
              <ul className="mb-12 flex-grow space-y-5">
                {plan.data.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base font-medium text-slate-600"
                  >
                    <Check
                      size={18}
                      className="mt-1 shrink-0"
                      style={{ color: themeColor }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA_BUTTON */}
              <button
                className={`flex w-full items-center justify-center gap-3 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                  plan.data.isRecommended
                    ? "text-white shadow-xl shadow-slate-200 hover:brightness-110"
                    : "border border-slate-200 text-slate-900 hover:bg-slate-50"
                }`}
                style={
                  plan.data.isRecommended ? { backgroundColor: themeColor } : {}
                }
              >
                สนใจซื้อใน{plan.data.price} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* 📟 SYSTEM_NOTICE */}
        <div className="border-t border-slate-100 bg-slate-50/50 p-6 text-center">
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
            * ราคาสินค้าอาจมีการเปลี่ยนแปลงตามปริมาณการสั่งซื้อและระยะทางจัดส่ง
            {/* ✅ แก้ไขจุดนี้: ใช้ JSX Comment แทน // เพื่อไม่ให้ ESLint พ่น Error */}{" "}
            โปรดตรวจสอบกับฝ่ายขายอีกครั้ง
          </p>
        </div>
      </div>
    </section>
  )
}
