/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS PRICING & CART SECTION (REFACTORED)
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
  themeColor?: string
  // ✅ เก็บ Interface ไว้เพื่อให้เข้ากันได้กับ Props ที่ส่งมาจากหน้า Template หลัก
  products?: any
}

export default function CartSection({
  pricing,
  themeColor = "#7B3F00",
  // ✅ แก้ไข: ลบ products ออกจากตรงนี้เพื่อเคลียร์ 'no-unused-vars'
  // เนื่องจากเราไม่ได้นำข้อมูลสินค้ามา Render ในส่วนของตารางราคา
}: CartSectionProps) {
  const plans = [
    {
      key: "starter",
      data: pricing.starter,
      icon: <Home size={22} className="text-slate-400" />,
      target: "สำหรับเจ้าของบ้าน",
      buttonText: "เช็คราคาสินค้าปลีก",
    },
    {
      key: "business",
      data: pricing.business,
      icon: <HardHat size={22} style={{ color: themeColor }} />,
      target: "สำหรับช่าง & ผู้รับเหมา",
      buttonText: "ขอใบเสนอราคาส่ง",
    },
  ]

  const scrollToContact = () => {
    const targetSection = document.getElementById("contact")
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="border-t border-slate-100 bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span
            className="mb-4 inline-block font-mono text-[10px] font-black uppercase tracking-[0.4em]"
            style={{ color: themeColor }}
          >
            Pricing_Strategy
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            ราคาตรงจาก <span className="text-slate-400">โรงไม้ถึงมือคุณ</span>
          </h2>
          <div
            className="mx-auto mt-6 h-1 w-20 rounded-full"
            style={{ backgroundColor: themeColor }}
          />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className="group relative flex flex-col border border-slate-100 bg-white p-12 transition-all duration-500 hover:border-transparent hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              {plan.data.isRecommended && (
                <div
                  className="absolute -top-3 right-8 flex items-center gap-2 rounded-full px-4 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-lg"
                  style={{ backgroundColor: themeColor }}
                >
                  <ShieldCheck size={12} /> Recommended
                </div>
              )}

              <div className="mb-10 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-white group-hover:shadow-inner">
                  {plan.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {plan.target}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900">
                    {plan.data.label.replace("_", " ")}
                  </h3>
                </div>
              </div>

              <div className="mb-10">
                <div className="text-4xl font-bold tracking-tighter text-slate-900 md:text-5xl">
                  {plan.data.price}
                </div>
                <p className="mt-2 text-xs font-medium italic text-slate-400">
                  *ราคานี้ไม่รวมค่าจัดส่งตามระยะทาง
                </p>
              </div>

              <ul className="mb-12 flex-grow space-y-5">
                {plan.data.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0"
                      style={{ color: themeColor }}
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`flex w-full items-center justify-center gap-3 rounded-xl py-5 text-[11px] font-bold uppercase tracking-widest transition-all active:scale-[0.98] ${
                  plan.data.isRecommended
                    ? "text-white shadow-xl hover:brightness-110"
                    : "border border-slate-200 text-slate-600 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
                style={
                  plan.data.isRecommended ? { backgroundColor: themeColor } : {}
                }
              >
                {plan.buttonText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
            หมายเหตุ:
            ราคาสินค้าไม้แปรรูปอาจเปลี่ยนแปลงตามปริมาณสต็อกและกลไกตลาดหน้าโรงงาน
          </p>
        </div>
      </div>
    </section>
  )
}
