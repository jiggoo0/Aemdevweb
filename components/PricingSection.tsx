/** @format */
"use client"

import React, { memo } from "react"
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

const PricingSection = () => {
  // ✅ จัดลำดับแผนการลงทุนให้ถูกต้อง (Starter -> Professional -> Maintenance)
  const sortedPlans = [...siteConfig.pricingPlans].sort((a, b) => {
    const order: Record<string, number> = {
      starter: 1,
      professional: 2,
      maintenance: 3,
    }
    return (order[a.id] || 99) - (order[b.id] || 99)
  })

  return (
    <section
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      id="pricing"
    >
      {/* ─── Background Decor: Blueprint Grid ─── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1E3A8A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        {/* ─── Header ─── */}
        <div className="mb-20 flex flex-col justify-between gap-6 border-b-4 border-slate-900 pb-12 text-center md:flex-row md:items-end md:text-left">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-4 py-1.5 shadow-[4px_4px_0px_0px_#F97316]">
              <Sparkles size={14} className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
                Investment Plans v2.0
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-6xl">
              เลือกระดับ <br className="hidden md:block" />
              <span className="text-[#1E3A8A]">การลงทุนที่คุ้มค่า</span>
            </h2>
          </div>
          <div className="hidden pb-2 lg:block">
            <p className="text-right text-sm font-bold uppercase leading-relaxed tracking-widest text-slate-400">
              Transparent Pricing <br />
              <span className="text-[#F97316]">
                No Hidden Fees. 100% Quality.
              </span>
            </p>
          </div>
        </div>

        {/* ─── Pricing Cards Grid ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {sortedPlans.map((plan) => {
            const isStarter = plan.id === "starter"
            const isPro = plan.isRecommended // ตัว Professional 12,900.-

            return (
              <div
                key={plan.id}
                className={cn(
                  "group relative flex flex-col border-4 p-8 transition-all duration-500",
                  isStarter || isPro
                    ? "z-10 scale-[1.05] border-slate-900 bg-white shadow-[16px_16px_0px_0px_#1E3A8A]"
                    : "border-slate-200 bg-white shadow-[8px_8px_0px_0px_#E2E8F0] hover:border-slate-900 hover:shadow-[12px_12px_0px_0px_#F97316]"
                )}
              >
                {/* 🏷️ Badges */}
                {isStarter && (
                  <div className="absolute -top-6 left-6 flex items-center gap-2 bg-[#F97316] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#000]">
                    <Zap size={12} fill="currentColor" /> Flash Sale
                  </div>
                )}
                {isPro && (
                  <div className="absolute -top-6 left-6 flex items-center gap-2 bg-[#1E3A8A] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#000]">
                    <ShieldCheck size={12} /> Most Popular
                  </div>
                )}

                {/* 💰 Plan Info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-[#1E3A8A]">
                    {plan.name}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-1 border-b-2 border-slate-100 pb-6">
                    <span className="text-xl font-black text-[#F97316]">฿</span>
                    <span className="text-6xl font-black tracking-tighter text-slate-900">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="ml-2 text-xs font-black uppercase tracking-widest text-slate-400">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-6 min-h-[3.5rem] text-sm font-bold leading-relaxed text-slate-500">
                    {plan.description}
                  </p>
                </div>

                {/* ✅ Features List */}
                <div className="mb-10 flex-grow space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-slate-900 text-[#F97316]">
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold leading-tight text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 🚀 CTA Button */}
                <Button
                  asChild
                  className={cn(
                    "h-16 rounded-none border-4 text-xs font-black uppercase tracking-[0.2em] transition-all active:scale-95",
                    isStarter || isPro
                      ? "border-slate-900 bg-slate-900 text-white hover:border-[#F97316] hover:bg-[#F97316]"
                      : "border-slate-900 bg-white text-slate-900 hover:bg-slate-900 hover:text-white"
                  )}
                >
                  <Link
                    href={`${siteConfig.contact.lineUrl}?text=สนใจแพ็กเกจ%20${encodeURIComponent(plan.name)}`}
                  >
                    {plan.buttonText || "เริ่มโปรเจกต์เลย"}
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* ─── Trust Footer ─── */}
        <div className="mt-24 grid grid-cols-1 gap-6 border-t-4 border-slate-900 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {[
            { text: "ระบบ SSL ปลอดภัยสูงสุด", icon: <ShieldCheck size={16} /> },
            { text: "รองรับ SEO เต็มรูปแบบ", icon: <Zap size={16} /> },
            { text: "ดูแลหลังการขายโดยทีมงาน", icon: <Sparkles size={16} /> },
            { text: "พร้อมขยายต่อได้ในอนาคต", icon: <ArrowRight size={16} /> },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 border-2 border-slate-200 bg-slate-50 p-4"
            >
              <div className="text-[#F97316]">{item.icon}</div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-900">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(PricingSection)
