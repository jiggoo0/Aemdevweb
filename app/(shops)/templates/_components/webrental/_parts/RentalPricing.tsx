/** @format */

import React from "react";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * PricingTier - รูปแบบข้อมูลสำหรับแพ็กเกจราคา
 */
interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

/**
 * RentalPricingProps - การกำหนดข้อมูลที่จะส่งเข้ามาในส่วนตารางราคา
 */
interface RentalPricingProps {
  data: {
    title: string;
    tiers: PricingTier[];
  };
}

/**
 * RentalPricing - ส่วนตารางราคาและแผนการเช่าเว็บไซต์
 * แนวคิด: เน้นความโปร่งใสของราคา และการเปรียบเทียบความคุ้มค่าที่เข้าใจง่ายที่สุด
 * โดย: นายเอ็มซ่ามากส์ (Specialist & Web Architect)
 */
export const RentalPricing = ({ data }: RentalPricingProps) => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-40"
    >
      {/* ลายตารางพื้นหลังจางๆ เพื่อเพิ่มความเนี้ยบสไตล์ Modern UI */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* หัวข้อส่วนราคา: เน้นความชัดเจนและดูเป็นมืออาชีพ */}
        <div className="mb-20 text-center">
          <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
            {data.title}
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-emerald-500" />
        </div>

        {/* ตารางเปรียบเทียบแผนงาน (Pricing Cards) */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-3">
          {data.tiers.map((tier, i) => (
            <div
              key={`${tier.name}-${i}`}
              className={cn(
                "group relative flex flex-col rounded-[3rem] border p-10 transition-all duration-500",
                tier.isPopular
                  ? "shadow-3xl z-10 scale-105 border-emerald-500 bg-white shadow-emerald-500/10"
                  : "border-slate-200 bg-white/80 backdrop-blur-sm hover:border-slate-300 hover:bg-white",
              )}
            >
              {/* ป้ายกำกับสำหรับแผนที่แนะนำเป็นพิเศษ */}
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-emerald-600 px-6 py-2 shadow-xl shadow-emerald-600/20">
                  <Star size={12} className="fill-white text-white" />
                  <span className="font-heading text-[10px] font-black tracking-[0.3em] text-white uppercase italic">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-10">
                <h3 className="font-heading mb-4 text-xl font-black tracking-tight text-slate-950 uppercase italic">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-6xl font-black tracking-tighter text-slate-950 italic">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm font-bold tracking-widest text-slate-400 uppercase">
                    / เดือน
                  </span>
                </div>
              </div>

              {/* รายการสิ่งที่จะได้รับในแผนงานนี้ */}
              <ul className="mb-12 flex-1 space-y-5">
                {tier.features.map((feature, j) => (
                  <li
                    key={`${tier.name}-feat-${j}`}
                    className="font-body flex items-start gap-4 text-sm leading-tight font-bold text-slate-600"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ปุ่มเลือกแผนงาน: ตอบสนองฉับไวทุกการคลิก */}
              <button
                className={cn(
                  "font-heading w-full rounded-2xl py-6 text-[11px] font-black tracking-[0.3em] uppercase italic transition-all duration-300 active:scale-95",
                  tier.isPopular
                    ? "bg-emerald-600 text-white shadow-2xl shadow-emerald-600/20 hover:bg-slate-950"
                    : "bg-slate-950 text-white hover:bg-emerald-600",
                )}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* หมายเหตุเพิ่มเติมเรื่องงบประมาณ */}
        <div className="mt-20 text-center">
          <p className="font-body text-[10px] font-bold tracking-tight text-slate-400 uppercase italic">
            *
            ราคานี้รวมค่าเซิร์ฟเวอร์และการดูแลระบบให้คุณอุ่นใจเรียบร้อยแล้วครับ
          </p>
        </div>
      </div>
    </section>
  );
};
