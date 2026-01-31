// @format
// พิกัดข้อมูล: app/(seo)/seo/_components/ecommerce-conversion-seo/index.tsx
// หน้าที่: แสดงผลรายละเอียดชุดระบบงาน Ecommerce Conversion

import React from "react";
import IconRenderer from "@/components/shared/IconRenderer";
import { siteConfig } from "@/constants/site-config";
import { SeoServiceItem } from "@/types/seo";

interface Props {
  data: SeoServiceItem;
}

export default function EcommerceConversionSeo({ data }: Props) {
  return (
    <div className="bg-[oklch(1_0_0)] dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. HERO SECTION]: Commercial Logic */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        <div className="container-za">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
                Commercial Search Performance
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl dark:text-[oklch(0.95_0.01_260)]">
                Ecommerce <br />
                <span className="text-[oklch(0.65_0.2_160)]">Conversion.</span>
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
                  <IconRenderer name="Zap" size={18} />
                  วางระบบร้านค้าออนไลน์
                </a>
              </div>
            </div>

            {/* [CONVERSION VISUAL]: ระบบจำลองการเติบโต (Sales Logic) */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-[oklch(0.2_0.02_260)] p-1 shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[1.4rem] bg-[oklch(0.25_0.02_260)] p-12">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[oklch(0.65_0.2_160_/_0.1)] text-[oklch(0.65_0.2_160)]">
                    <IconRenderer name="BarChart3" size={48} />
                  </div>
                  <p className="text-4xl font-black text-white">+85%</p>
                  <p className="mt-2 text-center text-sm font-bold tracking-widest text-[oklch(0.6_0.02_260)] uppercase">
                    Conversion Visibility Optimized
                  </p>
                </div>
              </div>
              <div className="depth-card absolute -right-6 -bottom-6 rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md dark:bg-[oklch(0.2_0.02_260_/_0.9)]">
                <p className="text-[10px] font-black text-[oklch(0.65_0.2_160)] uppercase italic">
                  Merchant Status
                </p>
                <p className="text-xl font-black text-[oklch(0.2_0.02_260)] dark:text-white">
                  Active Feed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [2. RISKS SECTION]: Sales Barriers Analysis */}
      <section className="bg-[oklch(0.98_0.01_260)] py-24 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="mb-16 border-l-8 border-[oklch(0.6_0.2_20)] pl-8">
            <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] uppercase italic md:text-5xl dark:text-[oklch(0.95_0.01_260)]">
              Sales <span className="text-[oklch(0.6_0.2_20)]">Barriers.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="depth-card border-b-4 border-[oklch(0.6_0.2_20_/_0.2)] bg-white p-8 dark:bg-[oklch(0.18_0.02_260)]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.95_0.05_20)] text-[oklch(0.6_0.2_20)]">
                  <IconRenderer name="AlertCircle" size={20} />
                </div>
                <p className="text-sm leading-relaxed font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [3. FAQ SECTION] */}
      <section className="bg-[oklch(1_0_0)] py-24 dark:bg-[oklch(0.12_0.02_260)]">
        <div className="container-za max-w-3xl">
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[oklch(0.9_0.02_260)] bg-[oklch(0.99_0.005_260)] p-8 dark:border-[oklch(0.3_0.02_260)] dark:bg-[oklch(0.14_0.01_260)]"
              >
                <p className="text-lg font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
                  Q: {item.question}
                </p>
                <p className="mt-4 leading-relaxed font-bold text-[oklch(0.45_0.02_260)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
