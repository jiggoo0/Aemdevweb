// @format
// พิกัดข้อมูล: app/(seo)/seo/_components/technical-structure-audit/index.tsx
// หน้าที่: แสดงผลรายละเอียดชุดระบบงาน Technical Audit

import React from "react";
import IconRenderer from "@/components/shared/IconRenderer";
import { siteConfig } from "@/constants/site-config";
import { SeoServiceItem } from "@/types/seo";

interface Props {
  data: SeoServiceItem;
}

export default function TechnicalAudit({ data }: Props) {
  return (
    <div className="bg-[oklch(1_0_0)] dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. HERO SECTION] */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        <div className="container-za">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
              Infrastructure Audit Protocol
            </div>
            <h1 className="mt-6 text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl dark:text-[oklch(0.95_0.01_260)]">
              Technical <br />
              <span className="text-[oklch(0.65_0.2_160)]">Structure.</span>
            </h1>
            <p className="mt-8 text-xl font-bold text-[oklch(0.45_0.02_260)] md:text-2xl">
              {data.subtitle}
            </p>
            <div className="mt-10">
              <a
                href={siteConfig.links.line}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-za inline-flex items-center gap-3 bg-[oklch(0.2_0.02_260)] text-white shadow-xl hover:bg-[oklch(0.65_0.2_160)]"
              >
                <IconRenderer name="Zap" size={18} />
                ตรวจสอบพิกัดระบบทันที
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* [2. RISKS SECTION] */}
      <section className="bg-[oklch(0.98_0.01_260)] py-24 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="mb-16 border-l-8 border-[oklch(0.6_0.2_20)] pl-8">
            <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] uppercase italic md:text-5xl dark:text-[oklch(0.95_0.01_260)]">
              System <span className="text-[oklch(0.6_0.2_20)]">Risks.</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="depth-card border-b-4 border-[oklch(0.6_0.2_20_/_0.2)] bg-white p-8 dark:bg-[oklch(0.18_0.02_260)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[oklch(0.95_0.05_20)] text-[oklch(0.6_0.2_20)]">
                  <IconRenderer name="AlertCircle" size={24} />
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
  );
}
