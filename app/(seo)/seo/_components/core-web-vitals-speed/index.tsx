// @format
// พิกัดข้อมูล: app/(seo)/seo/_components/core-web-vitals-speed/index.tsx
// หน้าที่: แสดงผลรายละเอียดบริการปรับจูนความเร็วระบบระดับสูง (Ultra-Fast Tuning)

import React from "react"
import IconRenderer from "@/components/shared/IconRenderer"
import { siteConfig } from "@/constants/site-config"
import { SeoServiceItem } from "@/types/seo"

interface Props {
  data: SeoServiceItem
}

export default function CoreWebVitalsSpeed({ data }: Props) {
  return (
    <div className="bg-[oklch(1_0_0)] dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. HERO SECTION]: Speed Performance Proof */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        <div className="container-za">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
                Performance Optimized Protocol
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl lg:text-8xl dark:text-[oklch(0.95_0.01_260)]">
                Speed <br />
                <span className="text-[oklch(0.65_0.2_160)]">Optimized.</span>
              </h1>
              <p className="text-xl font-bold text-[oklch(0.45_0.02_260)] md:text-2xl">
                {data.subtitle}
              </p>
              <div className="mt-10">
                <a
                  href={siteConfig.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-za inline-flex items-center gap-3 bg-[oklch(0.2_0.02_260)] text-white shadow-2xl hover:bg-[oklch(0.65_0.2_160)]"
                >
                  <IconRenderer name="Zap" size={18} />
                  จองคิวปรับจูนระบบ
                </a>
              </div>
            </div>

            {/* [PERFORMANCE SCORE NODE] */}
            <div className="relative">
              <div className="aspect-square rounded-full border-[16px] border-[oklch(0.7_0.2_160_/_0.1)] p-8 md:p-16">
                <div className="animate-pulse-slow flex h-full w-full flex-col items-center justify-center rounded-full border-[12px] border-[oklch(0.7_0.2_160)] bg-white shadow-2xl dark:bg-[oklch(0.2_0.02_260)]">
                  <span className="text-8xl font-black text-[oklch(0.7_0.2_160)] md:text-9xl">
                    100
                  </span>
                  <span className="text-xl font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase italic">
                    Speed Score
                  </span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 -translate-y-1/2 space-y-4 md:right-0">
                <div className="depth-card rounded-2xl border border-[oklch(0.7_0.2_160_/_0.3)] bg-white/80 p-4 backdrop-blur-md dark:bg-[oklch(0.2_0.02_260_/_0.8)]">
                  <p className="text-[10px] font-black text-[oklch(0.5_0.02_260)] uppercase italic">
                    LCP Target
                  </p>
                  <p className="text-lg font-black text-[oklch(0.7_0.2_160)]">
                    {"< 0.8s"}
                  </p>
                </div>
                <div className="depth-card rounded-2xl border border-[oklch(0.7_0.2_160_/_0.3)] bg-white/80 p-4 backdrop-blur-md dark:bg-[oklch(0.2_0.02_260_/_0.8)]">
                  <p className="text-[10px] font-black text-[oklch(0.5_0.02_260)] uppercase italic">
                    CLS Goal
                  </p>
                  <p className="text-lg font-black text-[oklch(0.7_0.2_160)]">
                    0.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [2. RISKS SECTION] */}
      <section className="bg-[oklch(0.98_0.01_260)] py-24 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="mb-16 border-l-8 border-[oklch(0.6_0.2_20)] pl-8">
            <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] uppercase italic md:text-5xl dark:text-[oklch(0.95_0.01_260)]">
              Performance{" "}
              <span className="text-[oklch(0.6_0.2_20)]">Risks.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="depth-card border-b-4 border-[oklch(0.6_0.2_20_/_0.3)] bg-white p-8 dark:bg-[oklch(0.18_0.02_260)]"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.95_0.05_20)] text-[oklch(0.6_0.2_20)]">
                  <IconRenderer name="ShieldCheck" size={20} />
                </div>
                <p className="text-sm leading-relaxed font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
