// @format
// พิกัดข้อมูล: app/(seo)/seo/_components/entity-local-authority/index.tsx
// หน้าที่: แสดงผลรายละเอียดชุดระบบงาน Entity & Local Authority
// มาตรฐาน: Tailwind 4 (OKLCH) | Next.js 16 | Ultra-Deep Level 7
// ควบคุมโดย: นายเอ็มซ่ามากส์

import React from "react";
import IconRenderer from "@/components/shared/IconRenderer";
import { siteConfig } from "@/constants/site-config";
import { SeoServiceItem } from "@/types/seo";
// [FIXED]: ลบการนำเข้า cn ที่ไม่ได้ใช้งานออกเพื่อกำจัด Warning ตามรายงาน Audit

interface Props {
  data: SeoServiceItem;
}

export default function EntityLocalAuthority({ data }: Props) {
  return (
    <div className="bg-[oklch(1_0_0)] selection:bg-[oklch(0.7_0.2_160_/_0.1)] selection:text-[oklch(0.4_0.15_160)] dark:bg-[oklch(0.12_0.02_260)]">
      
      {/* [1. HERO SECTION]: พิกัดนำเสนอกลยุทธ์การครองอันดับพื้นที่ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        <div className="container-za">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
                Local Presence Protocol
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic dark:text-[oklch(0.95_0.01_260)] md:text-7xl">
                Entity <br />
                <span className="text-[oklch(0.65_0.2_160)]">Authority.</span>
              </h1>
              <p className="text-xl font-bold text-[oklch(0.45_0.02_260)] md:text-2xl">
                {data.subtitle}
              </p>
              <div className="mt-10">
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-za inline-flex items-center gap-3 bg-[oklch(0.2_0.02_260)] text-white hover:bg-[oklch(0.65_0.2_160)]"
                >
                  <IconRenderer name="MapPin" size={18} />
                  ปรึกษาพิกัดธุรกิจ
                </a>
              </div>
            </div>

            {/* [TRUST VISUAL]: กราฟิกจำลองการยืนยันพิกัดตัวตน (Verified Entity) */}
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-[2rem] bg-[oklch(0.98_0.01_260)] shadow-2xl dark:bg-[oklch(0.15_0.02_260)]">
                 <div className="flex h-full w-full flex-col items-center justify-center bg-[oklch(0.2_0.02_260)] p-12">
                   <IconRenderer name="ShieldCheck" size={64} className="text-[oklch(0.7_0.2_160)]" />
                   <p className="mt-4 text-2xl font-black uppercase italic text-white">Verified Identity</p>
                   <p className="text-sm font-bold text-[oklch(0.6_0.02_260)]">NAP Data Consistency 100%</p>
                 </div>
              </div>
              <div className="depth-card absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-2xl bg-white/90 backdrop-blur-md dark:bg-[oklch(0.2_0.02_260_/_0.9)]">
                <p className="text-[10px] font-black text-[oklch(0.65_0.2_160)] uppercase italic">Active Nodes</p>
                <p className="text-xl font-black text-[oklch(0.2_0.02_260)] dark:text-white">350+ Points</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [2. RISKS SECTION]: วิเคราะห์จุดเสี่ยงที่ทำให้ตัวตนธุรกิจกระจัดกระจาย */}
      <section className="bg-[oklch(0.98_0.01_260)] py-24 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="mb-16 border-l-8 border-[oklch(0.6_0.2_20)] pl-8">
            <h2 className="text-3xl font-black uppercase italic text-[oklch(0.2_0.02_260)] dark:text-[oklch(0.95_0.01_260)] md:text-5xl">
              Identity <span className="text-[oklch(0.6_0.2_20)]">Risks.</span>
            </h2>
            <p className="mt-4 font-bold text-[oklch(0.45_0.02_260)]">
              จุดเสี่ยงที่ทำให้พิกัดธุรกิจของคุณไม่ถูกรวมเข้ากับผลการค้นหาหลัก
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.painPoints.map((point, i) => (
              <div key={i} className="depth-card bg-white p-8 dark:bg-[oklch(0.18_0.02_260)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_20)] text-[oklch(0.6_0.2_20)]">
                  <IconRenderer name="AlertCircle" size={24} />
                </div>
                <p className="text-sm font-bold leading-relaxed text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [3. SCOPE SECTION]: ขอบเขตการวางรากฐานพิกัดตัวตนพื้นที่ */}
      <section className="py-24">
        <div className="container-za">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <div className="border-l-8 border-[oklch(0.65_0.2_160)] pl-8">
                <h2 className="text-3xl font-black uppercase italic text-[oklch(0.2_0.02_260)] dark:text-[oklch(0.95_0.01_260)] md:text-5xl">
                  Local <span className="text-[oklch(0.65_0.2_160)]">Fixes.</span>
                </h2>
              </div>
              <div className="space-y-8">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.2_160)] text-white shadow-[0_0_20px_oklch(0.65_0.2_160_/_0.4)]">
                      <IconRenderer name="CheckCircle2" size={14} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[oklch(0.2_0.02_260)] dark:text-[oklch(0.9_0.02_260)]">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* [INVESTMENT NODE]: แผนงานการลงทุนและพิกัดความน่าเชื่อถือ */}
            <div className="relative h-fit overflow-hidden rounded-[2.5rem] bg-[oklch(0.2_0.02_260)] p-8 text-white md:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-[oklch(0.65_0.2_160_/_0.1)] p-32 blur-3xl" />
              
              <div className="relative z-10">
                <div className="mb-10">
                  <p className="mb-4 text-sm font-black tracking-widest text-[oklch(0.65_0.2_160)] uppercase italic">
                    Identity Investment
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tighter">{data.pricing.label}</span>
                    <span className="font-bold text-[oklch(0.8_0.02_260)]">{data.pricing.suffix}</span>
                  </div>
                </div>
                <div className="mb-10 space-y-6">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="border-l-2 border-[oklch(0.65_0.2_160_/_0.3)] pl-4">
                      <p className="font-black text-[oklch(0.7_0.15_160)] uppercase tracking-tighter">{benefit.title}</p>
                      <p className="text-sm text-[oklch(0.8_0.02_260)] mt-1">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[oklch(0.65_0.2_160)] py-5 font-black text-[oklch(0.1_0.02_260)] transition-all hover:bg-white"
                >
                  <IconRenderer name="BarChart3" size={20} />
                  เริ่มวางพิกัดตัวตน
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
