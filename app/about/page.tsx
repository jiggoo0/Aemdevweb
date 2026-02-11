/**
 * [ROUTE PAGE]: ABOUT_US v17.5.5 (IDENTITY_STABILIZED)
 * [STRATEGY]: Personal Branding | Technical Authority | E-E-A-T Dominance
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Engines ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero"; // [FIX]: Use Hero from landing/Hero
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
 * [METADATA]: เสริมสร้าง Authority (ความน่าเชื่อถือ) ผ่านชื่อจริงของผู้เชี่ยวชาญ
 */
export const metadata: Metadata = {
  title: `เกี่ยวกับเรา | ${SITE_CONFIG.brandName} - Technical SEO & Web Architect`,
  description: `รู้จักกับทีม ${SITE_CONFIG.brandName} และคุณ${SITE_CONFIG.expert.legalNameThai} ผู้อยู่เบื้องหลังการสร้าง High-Performance Infrastructure ที่ช่วยให้ธุรกิจติดอันดับ Google อย่างยั่งยืน`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  /* [SEO STRATEGY]: Identity Linking via Schema Graph */
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  // [CONTENT]: Core Values (Business Alignment)
  const coreValues = [
    {
      title: "Business-First Engineering",
      description:
        "เราไม่ได้แค่เขียนโค้ด แต่เราสร้าง 'กลไกการตลาดดิจิทัล' ที่ทุกบรรทัดต้องส่งผลต่อยอดขายและการเติบโตของธุรกิจคุณ",
      icon: "TrendingUp",
    },
    {
      title: "Transparent Partnership",
      description:
        "ความจริงใจคือหัวใจของเรา สื่อสารตรงไปตรงมา รายงานผลด้วยข้อมูลจริง และแนะนำทางเลือกที่คุ้มค่าที่สุดสำหรับการลงทุน",
      icon: "ShieldCheck",
    },
    {
      title: "Future-Proof Architecture",
      description:
        "ใช้ Tech Stack ระดับโลกอย่าง Next.js และโครงสร้าง Technical SEO ล่าสุด เพื่อให้เว็บไซต์รองรับ AI Search 2026",
      icon: "Cpu",
    },
  ];

  return (
    <LayoutEngine spacing="none">
      {/* ฉีดข้อมูล Identity เข้าสู่โครงสร้างหน้าเว็บ */}
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: Strategic Vision */}
      <HeroEngine
        title={
          <>
            มากกว่าคนทำเว็บไซต์
            <br />
            คือ <span className="text-brand-primary">"คู่คิดทางเทคนิค"</span> ของธุรกิจคุณ
          </>
        }
        subtitle={`"ในโลกที่ใครก็ทำเว็บได้ ความท้าทายคือการสร้างเว็บที่ 'ขายของได้จริง' ผมจึงก่อตั้ง ${SITE_CONFIG.brandName} เพื่อสร้างมาตรฐานใหม่ของ High-Performance Infrastructure ครับ"`}
        primaryActionLabel="ปรึกษาแนวทางธุรกิจ"
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel="ดูผลงานทั้งหมด"
        secondaryHref="/case-studies"
      />

      {/* 02. SPECIALIST IDENTITY: The Authority Node */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="bg-brand-primary/10 absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* 2.1 Specialist Visual Interface */}
            <div className="relative mx-auto h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
              <div className="bg-surface-card border-border shadow-pro-xl relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border backdrop-blur-3xl">
                <div className="via-surface-main/20 to-surface-main/80 flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-transparent">
                  <div className="relative z-10 flex flex-col items-center">
                    <IconRenderer
                      name="UserCircle2"
                      size={140}
                      className="text-brand-primary/80 drop-shadow-2xl"
                    />
                  </div>

                  {/* Trust Identity Badge */}
                  <div className="bg-surface-card/90 border-border shadow-pro-lg absolute right-6 bottom-6 left-6 rounded-2xl border p-6 backdrop-blur-xl">
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
                  </div>
                </div>
              </div>
            </div>

            {/* 2.2 Narrative & Expertise */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5">
                  <IconRenderer name="Fingerprint" size={16} />
                  <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                    Technical_DNA
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
                  </span>{" "}
                  ผู้ก่อตั้ง {SITE_CONFIG.brandName}
                </p>
                <p>
                  ผมเชื่อว่าในโลกดิจิทัลปี 2026 เว็บไซต์ที่{" "}
                  <span className="font-bold text-red-400">"สวยแต่ขายไม่ได้"</span>{" "}
                  คือการลงทุนที่สูญเปล่า
                  เว็บไซต์ที่ดีต้องเป็นสินทรัพย์ที่ดึงดูดลูกค้าและปิดการขายได้ด้วยตัวเอง
                </p>
                <p className="border-brand-primary/50 text-text-primary/80 border-l-4 pl-4 italic">
                  "ผมใช้หลักวิศวกรรมซอฟต์แวร์ที่แม่นยำ ผสานกับยุทธศาสตร์ Technical SEO
                  เพื่อสร้างเครื่องจักรทำเงินที่ทำงานแทนคุณตลอด 24 ชั่วโมงครับ"
                </p>
              </div>

              {/* Specialist Meta Tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Next.js_Expert", "Technical_SEO", "ROI_Focused", "Clean_Architecture"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="border-border bg-surface-card hover:border-brand-primary/50 text-text-muted hover:text-text-primary hover:shadow-pro-sm group flex cursor-default items-center gap-2 rounded-lg border px-4 py-2 transition-all"
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

      {/* 03. TRUST & AUTHORITY INFRASTRUCTURE */}
      <section className="border-border bg-surface-offset/30 border-y py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted mb-12 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
            Certified Excellence & System Performance
          </p>
          <div className="flex flex-col items-center gap-y-16">
            <TrustBadge />
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 04. CORE VALUES: Why Choose Us */}
      <FeatureGrid
        heading="Why Choose AEMDEVWEB?"
        subheading="ยกระดับธุรกิจของคุณด้วยพาร์ทเนอร์ที่เข้าใจทั้ง Code และ Business Logic"
        items={coreValues}
        columns={3}
      />

      {/* 05. CALL TO ACTION: Scale Your Vision */}
      <ConversionCTA
        title="พร้อมสร้างสินทรัพย์ดิจิทัลที่เติบโตไปกับคุณหรือยัง?"
        description="การลงทุนในโครงสร้างเว็บไซต์ที่ถูกต้อง คือการวางรากฐานธุรกิจที่คุ้มค่าที่สุดในระยะยาว ปรึกษาผมวันนี้เพื่อวิเคราะห์โอกาสของคุณฟรีครับ"
        buttonLabel="แอดไลน์ปรึกษาช่างเอ็ม"
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel="ดูบริการและราคา"
        secondaryHref="/services"
      />
    </LayoutEngine>
  );
}
