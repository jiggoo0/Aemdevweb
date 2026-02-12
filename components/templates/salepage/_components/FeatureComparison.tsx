/**
 * [COMPONENT]: FEATURE_COMPARISON v17.9.2 (VALUE_PROPOSITION)
 * [STRATEGY]: Logical Contrast | High-Visibility | ROI-Centric
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { Check, X, ShieldCheck } from "lucide-react";
import type { ServiceFeature } from "@/types";

interface FeatureComparisonProps {
  readonly features?: readonly ServiceFeature[];
}

export function FeatureComparison({ features }: FeatureComparisonProps) {
  // [DATA]: เปรียบเทียบจุดเด่นของ AEM กับ ตลาดทั่วไป
  const comparisonItems = [
    {
      label: "ความเร็วในการโหลด (Core Web Vitals)",
      aem: true,
      others: false,
      detail: "โหลดเสร็จใน < 1 วินาที",
    },
    {
      label: "โครงสร้าง Technical SEO ระดับสูง",
      aem: true,
      others: false,
      detail: "รองรับ AI-Search 2026",
    },
    {
      label: "ระบบความปลอดภัย (Security)",
      aem: true,
      others: "limited",
      detail: "ป้องกันการ Hack 100%",
    },
    {
      label: "Mobile-First Infrastructure",
      aem: true,
      others: true,
      detail: "ใช้งานลื่นไหลบนมือถือ",
    },
    {
      label: "การดูแลหลังการขาย (Tech Support)",
      aem: true,
      others: false,
      detail: "วิศวกรดูแลโดยตรง 24/7",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          ทำไมต้องจ้าง{" "}
          <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
            AEMDEVWEB
          </span>{" "}
          ?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          ไม่ใช่แค่ทำเว็บให้จบ แต่คือการลงทุนใน "สินทรัพย์ดิจิทัล" ที่สร้างรายได้จริง
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-6 text-sm font-bold tracking-wider text-slate-500 uppercase">
                คุณสมบัติ
              </th>
              <th className="bg-rose-50/50 p-6 text-center text-sm font-bold tracking-wider text-rose-600 uppercase">
                AEM Solution
              </th>
              <th className="p-6 text-center text-sm font-bold tracking-wider text-slate-400 uppercase">
                จ้างราคาถูกทั่วไป
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="group transition-colors hover:bg-slate-50/50">
                <td className="p-6">
                  <p className="font-bold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                </td>
                <td className="bg-rose-50/30 p-6 text-center">
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </div>
                </td>
                <td className="p-6 text-center">
                  {item.others === true ? (
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-400">
                      <Check className="h-5 w-5" strokeWidth={3} />
                    </div>
                  ) : item.others === "limited" ? (
                    <span className="text-xs font-bold text-slate-400">บางส่วน</span>
                  ) : (
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-300">
                      <X className="h-5 w-5" strokeWidth={3} />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* [TRUST_FOOTER]: ตอกย้ำความเชื่อมั่นท้ายตาราง */}
        <div className="bg-slate-900 p-6 text-center text-white">
          <div className="mb-2 flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span className="font-bold">คุ้มค่ากว่าในระยะยาว (High ROI)</span>
          </div>
          <p className="text-sm text-slate-400">
            เราเน้นการแก้ปัญหาที่ต้นเหตุด้วยวิศวกรรม เพื่อให้เว็บของคุณทำงานแทนคุณได้จริง
          </p>
        </div>
      </div>

      {/* [ADDITIONAL_FEATURES]: วนลูปข้อมูลจาก Registry จริง */}
      {features && (
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-100 p-6 transition-all hover:border-rose-100 hover:bg-rose-50/20"
            >
              <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
