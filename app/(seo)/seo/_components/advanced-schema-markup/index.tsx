/** @format */

// พิกัดข้อมูล: app/(seo)/seo/_components/advanced-schema-markup/index.tsx
// หน้าที่: แสดงผลรายละเอียดบริการ Advanced Semantic Structure (Schema Markup)
// มาตรฐาน: Ultra-Deep Level 7 | Zero Warning | Tailwind 4 OKLCH
// ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์

import React from "react"
import IconRenderer from "@/components/shared/IconRenderer"
import { SeoServiceItem } from "@/types/seo"

interface Props {
  data: SeoServiceItem
}

/**
 * AdvancedSchema: เครื่องยนต์นำเสนอโครงสร้างข้อมูลระดับลึก
 */
export default function AdvancedSchema({ data }: Props) {
  return (
    <div className="bg-[oklch(1_0_0)] antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. HERO SECTION]: พิกัดประกาศยุทธศาสตร์ Semantic Data */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48">
        {/* Background Decorative Node */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[oklch(0.65_0.2_160)]/5 blur-[120px]" />
        
        <div className="container-za">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-[oklch(0.96_0.04_160)] px-5 py-2 text-[10px] font-black tracking-[0.3em] text-[oklch(0.5_0.15_160)] uppercase italic shadow-sm">
              <div className="h-2 w-2 animate-ping rounded-full bg-[oklch(0.5_0.15_160)]" />
              Data Semantic Protocol
            </div>
            
            <h1 className="font-heading mt-8 text-6xl leading-[0.9] font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-8xl dark:text-white">
              Advanced <br />
              <span className="text-[oklch(0.65_0.2_160)]">Schema Markup.</span>
            </h1>
            
            <div className="mt-10 border-l-4 border-[oklch(0.65_0.2_160)] pl-8">
              <p className="font-body text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl dark:text-[oklch(0.7_0.02_260)]">
                {data.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [2. ANALYSIS SECTION]: โหนดวิเคราะห์ปัญหาเชิงโครงสร้าง */}
      
      <section className="bg-[oklch(0.98_0.01_260)] py-24 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.painPoints.map((point, i) => (
              <div
                key={i}
                className="depth-card group bg-white p-10 transition-all hover:border-[oklch(0.65_0.2_160)]/40 dark:bg-[oklch(0.18_0.02_260)]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-[oklch(0.95_0.05_20)] text-[oklch(0.6_0.2_20)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <IconRenderer name="ShieldCheck" size={28} />
                </div>
                <p className="font-body text-lg leading-relaxed font-bold text-[oklch(0.3_0.02_260)] dark:text-[oklch(0.8_0.02_260)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [3. FAQ SECTION]: ระบบตอบโต้คำถามระดับเทคนิค (Specialist Inquiry) */}
      <section className="bg-[oklch(1_0_0)] py-24 dark:bg-[oklch(0.12_0.02_260)]">
        <div className="container-za max-w-4xl">
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-4xl font-black tracking-tight text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white md:text-5xl">
              System <span className="text-[oklch(0.65_0.2_160)]">Inquiry.</span>
            </h2>
            <div className="h-1 w-20 rounded-full bg-[oklch(0.65_0.2_160)]/20" />
          </div>

          <div className="grid gap-6">
            {data.faq.map((item, i) => (
              <div
                key={i}
                className="group rounded-[2.5rem] border border-[oklch(0.9_0.02_260)] p-10 transition-colors hover:border-[oklch(0.65_0.2_160)]/30 dark:border-white/5 dark:bg-white/[0.02]"
              >
                <div className="flex items-start gap-4">
                  <span className="font-heading text-2xl font-black text-[oklch(0.65_0.2_160)] italic">Q:</span>
                  <p className="font-heading mt-1 text-xl font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
                    {item.question}
                  </p>
                </div>
                <div className="mt-6 flex items-start gap-4 pl-10 border-l border-[oklch(0.9_0.02_260)] dark:border-white/10">
                  <p className="font-body text-lg leading-relaxed font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.6_0.02_260)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Branding Footer */}
      <footer className="mt-20 py-20 text-center opacity-20 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
          AEMDEVWEB • SEMANTIC ENGINE v2026
        </p>
      </footer>
    </div>
  )
}
