/**
 * [ROUTE PAGE]: ABOUT_US v17.5.1 (FIXED_PROPS)
 * [STRATEGY]: Personal Branding | Technical Authority | Business Vision
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Engines ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
// [FIX]: Use System Hero Engine for consistency with Service Templates
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";

import { SITE_CONFIG } from "@/constants/site-config";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/schema";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * [METADATA]: เน้นความน่าเชื่อถือของผู้เชี่ยวชาญ (E-E-A-T)
 */
export const metadata: Metadata = {
  title: `เกี่ยวกับเรา | ${SITE_CONFIG.brandName} - Technical SEO & Web Architect`,
  description: `รู้จักกับทีม AEMDEVWEB และคุณ${SITE_CONFIG.expert.legalNameThai} ผู้อยู่เบื้องหลังความสำเร็จของธุรกิจออนไลน์ด้วยโครงสร้างเว็บไซต์มาตรฐานสากล`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  /* [SEO STRATEGY]: Graph-Based Schema Injection */
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  // [CONTENT]: Core Values ที่สะท้อนจุดยืน "Strategic Partner"
  const coreValues = [
    {
      title: "Business-First Engineering",
      description:
        "เราไม่ได้แค่เขียนโค้ด แต่เราเขียน 'กลไกทางธุรกิจ' ทุกบรรทัดต้องตอบโจทย์เรื่องยอดขาย การตลาด และการเติบโตของลูกค้าครับ",
      icon: "TrendingUp",
    },
    {
      title: "Transparent Partnership",
      description:
        "ความจริงใจคือหัวใจของเรา เราสื่อสารตรงไปตรงมา ไม่หมกเม็ด สเปคไหนได้บอกได้ สเปคไหนไม่ได้เราแนะนำทางเลือกที่ดีกว่าเสมอ",
      icon: "ShieldCheck",
    },
    {
      title: "Future-Proof Technology",
      description:
        "เราเลือกใช้ Tech Stack ระดับโลก (Next.js) เพื่อให้เว็บไซต์ของคุณรองรับการเปลี่ยนแปลงของ Google และ AI Search ในอนาคต",
      icon: "Cpu",
    },
  ];

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: Vision Statement */}
      <HeroEngine
        title={
          <>
            มากกว่าคนทำเว็บไซต์
            <br />
            คือ <span className="text-brand-primary">"คู่คิดทางเทคนิค"</span> ของธุรกิจคุณ
          </>
        }
        subtitle={`"ในโลกที่ใครก็ทำเว็บได้ ความท้าทายไม่ใช่การสร้างเว็บให้เสร็จ แต่คือการสร้างเว็บที่ 'ขายของได้จริง' และ 'เติบโตยั่งยืน' ผมจึงก่อตั้ง ${SITE_CONFIG.brandName} เพื่อเป็นมาตรฐานใหม่ให้กับวงการครับ"`}
        // [FIX]: Updated props to match System Hero Engine (primaryHref instead of primaryActionHref)
        primaryActionLabel="ปรึกษาแนวทางธุรกิจ"
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel="ดูผลงานของเรา"
        secondaryHref="/case-studies"
        align="center" // Center alignment for vision statement
      />

      {/* 02. SPECIALIST NODE: The Man Behind The Brand */}
      <section className="relative overflow-hidden py-24 transition-colors duration-500 md:py-32">
        {/* Ambient Background */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="ambient-aura absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* 2.1 Visual Profile Interface */}
            <div className="relative mx-auto h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
              <div className="bg-brand-primary/10 absolute inset-0 rounded-[3rem] opacity-[var(--ambient-opacity,0.3)] blur-[80px]" />
              <div className="bg-surface-card border-border shadow-glow relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border backdrop-blur-3xl">
                <div className="via-surface-main/20 to-surface-main/80 flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-transparent">
                  {/* Avatar Placeholder / Image */}
                  <div className="relative z-10 flex flex-col items-center">
                    <IconRenderer
                      name="UserCircle2"
                      size={140}
                      className="text-brand-primary/80 drop-shadow-2xl"
                    />
                  </div>

                  {/* Identity Badge */}
                  <div className="bg-surface-card/90 border-border shadow-glow absolute right-6 bottom-6 left-6 rounded-2xl border p-6 backdrop-blur-xl">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      <p className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                        Verified.Specialist
                      </p>
                    </div>

                    <h3 className="text-text-primary mt-1 text-2xl font-black tracking-tighter uppercase italic">
                      {SITE_CONFIG.expert.displayName}
                    </h3>
                    <p className="text-text-muted mt-1 text-[11px] font-bold tracking-widest uppercase opacity-80">
                      {SITE_CONFIG.expert.jobTitle}
                    </p>
                    <p className="text-brand-primary/80 mt-2 font-mono text-[10px]">
                      // {SITE_CONFIG.business.industry}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.2 Specialist Narrative */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-sm">
                  <IconRenderer name="Fingerprint" size={16} />
                  <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                    Our_DNA
                  </span>
                </div>
                <h2 className="text-text-primary text-5xl leading-tight font-black tracking-tighter uppercase italic md:text-6xl">
                  Technical Mastery <br />
                  <span className="from-brand-primary to-brand-secondary bg-gradient-to-r bg-clip-text text-transparent">
                    Meets Business Logic.
                  </span>
                </h2>
              </div>

              <div className="text-text-secondary space-y-6 text-lg leading-relaxed font-medium md:text-xl">
                <p>
                  สวัสดีครับ ผม{" "}
                  <span className="text-text-primary font-bold">
                    "{SITE_CONFIG.expert.legalNameThai}"
                  </span>
                  ผู้ก่อตั้ง {SITE_CONFIG.brandName}
                </p>
                <p>
                  ตลอดระยะเวลาที่ผ่านมา ผมเห็นผู้ประกอบการจำนวนมากเจ็บปวดกับการจ้างทำเว็บไซต์ที่
                  <span className="font-bold text-red-400"> "สวยแต่รูป จูบไม่หอม"</span>
                  คือหน้าตาดีแต่ไม่ทำเงิน โหลดช้า และไม่ติด Google
                </p>
                <p className="border-brand-primary/50 text-text-primary/80 border-l-4 pl-4 italic">
                  "ผมจึงตั้งปณิธานว่า ทุกเว็บที่ออกจากมือเรา ต้องเป็น{" "}
                  <span className="decoration-brand-primary underline decoration-2 underline-offset-4">
                    Asset (สินทรัพย์)
                  </span>{" "}
                  ไม่ใช่ Expense (ค่าใช้จ่าย) เราใช้หลักวิศวกรรมซอฟต์แวร์ระดับสูงผสานกับกลยุทธ์ SEO
                  เพื่อให้เว็บของคุณเป็นเครื่องจักรทำเงินที่ทำงานแทนคุณตลอด 24 ชั่วโมงครับ"
                </p>
              </div>

              {/* Specialist Meta Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Next.js_Expert", "Technical_SEO", "ROI_Focused", "Clean_Architecture"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="border-border bg-surface-card hover:border-brand-primary/50 text-text-muted hover:text-text-primary hover:shadow-glow group flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 transition-all"
                    >
                      <IconRenderer
                        name="Hash"
                        size={12}
                        className="text-brand-primary opacity-50 group-hover:opacity-100"
                      />
                      <span className="text-[10px] font-bold tracking-wider uppercase">{tag}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUTHORITY LAYER: Trust Signals */}
      <section className="border-border bg-surface-offset/30 border-y py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted mb-12 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
            Certified Excellence & Performance
          </p>
          <div className="flex flex-col items-center gap-y-16">
            <TrustBadge />
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 04. PHILOSOPHY GRID: The "Why Us" */}
      <FeatureGrid
        heading="Why Choose AEMDEVWEB?"
        subheading="เพราะเราเข้าใจว่าคุณไม่ได้อยากได้แค่ 'คนเขียนโค้ด' แต่ต้องการ 'พาร์ทเนอร์' ที่ช่วยให้ธุรกิจโตไปด้วยกัน"
        items={coreValues}
        columns={3}
      />

      {/* 05. VISION NODE: Future Outlook */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-surface-card border-border shadow-glow group hover:border-brand-primary/30 relative overflow-hidden rounded-[2.5rem] border p-12 transition-colors duration-500 md:p-24">
            {/* Decorative Background */}
            <div className="bg-grid-white/[0.02] absolute inset-0 bg-[length:32px_32px]" />
            <div className="bg-brand-primary/10 absolute top-0 right-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

            <div className="relative z-10 space-y-10 text-center">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-7xl">
                Ready to <span className="text-brand-primary">Scale Up?</span>
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed font-medium md:text-2xl">
                ไม่ว่าคุณจะเป็น SME ที่กำลังเริ่มต้น
                หรือองค์กรใหญ่ที่ต้องการปรับเปลี่ยนโครงสร้างดิจิทัล
                ผมและทีมงานพร้อมนำประสบการณ์ทั้งหมดมาวางรากฐานความสำเร็จให้คุณครับ
              </p>

              <div className="flex flex-col items-center gap-4 pt-8">
                <div className="via-brand-primary h-1 w-24 rounded-full bg-gradient-to-r from-transparent to-transparent opacity-50" />
                <p className="text-text-muted font-mono text-xs tracking-widest uppercase">
                  Build for Performance. Designed for Growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. CALL TO ACTION: High Intent */}
      <ConversionCTA
        title="อย่าปล่อยให้คู่แข่งแซงหน้าคุณในโลกออนไลน์"
        description="การลงทุนในโครงสร้างเว็บไซต์ที่ดี คือการลงทุนที่คุ้มค่าที่สุดในระยะยาว ปรึกษาผมวันนี้เพื่อวิเคราะห์โอกาสทางธุรกิจฟรีครับ"
        buttonLabel="แอดไลน์ปรึกษาฟรี"
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel="ดูแพ็กเกจราคา"
        secondaryHref="/services"
      />
    </LayoutEngine>
  );
}
