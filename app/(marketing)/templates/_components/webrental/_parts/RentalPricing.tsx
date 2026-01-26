/** @format */
import React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/* นิยามพิกัดข้อมูล (Type Definitions) เพื่อล้าง Warning: no-explicit-any          */
/* -------------------------------------------------------------------------- */

interface PricingTier {
  name: string
  price: string
  features: string[]
  buttonText: string
  isPopular?: boolean
}

interface RentalPricingProps {
  data: {
    title: string
    tiers: PricingTier[]
  }
}

/**
 * RentalPricing - ส่วนแสดงตารางราคาในระบบเช่าเว็บ
 * ปรับปรุงระบบ Type และพิกัดฟอนต์เพื่อความเป็นระเบียบระดับงาน Specialist
 */
export const RentalPricing = ({ data }: RentalPricingProps) => (
  <section id="pricing" className="bg-slate-50 py-24">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="font-heading text-3xl font-black text-slate-900 uppercase italic lg:text-5xl">
          {data.title}
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-3">
        {data.tiers.map((tier, i) => (
          <div
            key={`${tier.name}-${i}`}
            className={cn(
              "relative rounded-[2rem] border p-8 transition-all duration-500",
              tier.isPopular
                ? "z-10 scale-105 border-indigo-500 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
                : "border-slate-100 bg-white shadow-sm hover:shadow-xl"
            )}
          >
            {tier.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500 px-6 py-1.5 text-[10px] font-black tracking-widest text-white uppercase italic">
                Most Popular
              </div>
            )}

            <h3 className="font-heading mb-2 text-lg font-black text-slate-900 uppercase italic">
              {tier.name}
            </h3>

            <div className="mb-6 flex items-baseline gap-1">
              <span className="font-heading text-4xl font-black text-slate-900 italic">
                {tier.price}
              </span>
              <span className="font-body text-sm font-bold text-slate-400">
                /เดือน
              </span>
            </div>

            <ul className="mb-8 space-y-4">
              {tier.features.map((feature, j) => (
                <li
                  key={`${tier.name}-feat-${j}`}
                  className="font-body flex items-center gap-3 text-sm font-bold text-slate-600"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={cn(
                "font-heading w-full rounded-2xl py-5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 active:scale-95",
                tier.isPopular
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 hover:bg-indigo-700"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-950 hover:text-white"
              )}
            >
              {tier.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
)
