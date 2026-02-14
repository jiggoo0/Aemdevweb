/**
 * [ROUTE PAGE]: ABOUT_US v17.9.66 (PROFESSIONAL_REWRITE)
 * [STRATEGY]: High-Authority Positioning | Digital Strategist | E-E-A-T Optimized
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Engines ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
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
import type { IconName } from "@/components/ui/IconRenderer"; // [IMPORT ADDED]

export const metadata: Metadata = {
  title: `รู้จักกับ ${SITE_CONFIG.expert.displayName} | ผู้ออกแบบกลยุทธ์เว็บไซต์เพื่อธุรกิจ`,
  description: `รู้จักกับคุณ${SITE_CONFIG.expert.displayName} และทีม ${SITE_CONFIG.brandName} ผู้อยู่เบื้องหลังการวางโครงสร้าง Digital Infrastructure ที่ช่วยให้ธุรกิจไทยเติบโตอย่างยั่งยืนบน Google`,
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  // [FIX]: Cast string literals to IconName to fix TS2322
  const coreValues = [
    {
      title: "Performance Driven",
      description:
        "ทุกระบบที่เราสร้างต้องวัดผลได้จริง โค้ดทุกบรรทัดต้องทำหน้าที่สนับสนุนยอดขายและการเติบโตของธุรกิจคุณ",
      icon: "TrendingUp" as IconName,
    },
    {
      title: "Strategic Partnership",
      description:
        "เราไม่ใช่แค่ผู้รับจ้าง แต่เราคือพาร์ทเนอร์ที่พร้อมให้คำปรึกษาอย่างตรงไปตรงมา เพื่อให้คุณตัดสินใจบนพื้นฐานของข้อมูลจริง",
      icon: "ShieldCheck" as IconName,
    },
    {
      title: "Future-Ready Stack",
      description: `เลือกใช้เทคโนโลยีระดับ High-End เพื่อให้เว็บไซต์ของคุณรองรับการเปลี่ยนแปลงของ Search Engine ในปี 2026 อย่างสมบูรณ์`,
      icon: "Cpu" as IconName,
    },
  ];

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: วางตำแหน่งเป็นคู่คิดทางธุรกิจ */}
      <HeroEngine
        title={
          <>
            มากกว่าการทำเว็บไซต์
            <br />
            คือการวาง <span className="text-brand-primary">"ยุทธศาสตร์ดิจิทัล"</span> ให้ธุรกิจคุณ
          </>
        }
        subtitle={`"เพราะเว็บไซต์ที่สมบูรณ์แบบคือการผสมผสานระหว่างเทคโนโลยีที่เฉียบคมและวิสัยทัศน์ทางธุรกิจ ผมจึงมุ่งมั่นสร้าง ${SITE_CONFIG.brandName} เพื่อเป็นรากฐานความสำเร็จให้ผู้ประกอบการไทยครับ"`}
        primaryActionLabel="ปรึกษาแผนงานกับผมโดยตรง"
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel="ดูผลงานทั้งหมด"
        secondaryHref="/case-studies"
        align="left"
      />

      {/* 02. SPECIALIST IDENTITY: ตอกย้ำภาพลักษณ์ที่ปรึกษาตัวจริง */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* Visual Identity Profile */}
            <div className="relative mx-auto h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
              <div className="bg-surface-card border-border shadow-pro-xl relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border backdrop-blur-3xl">
                <div className="via-surface-main/20 to-surface-main/80 flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-transparent">
                  <IconRenderer
                    name="UserCircle2"
                    size={140}
                    className="text-brand-primary/80 drop-shadow-2xl"
                  />

                  <div className="bg-surface-card/90 border-border absolute right-6 bottom-6 left-6 rounded-2xl border p-6 backdrop-blur-xl">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                      </span>
                      <p className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                        Verified.Strategist
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

            {/* Content Narrative */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5">
                  <IconRenderer name="Fingerprint" size={16} />
                  <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                    Our_Vision
                  </span>
                </div>
                <h2 className="text-text-primary text-5xl leading-tight font-black tracking-tighter uppercase italic md:text-6xl">
                  Strategic Design <br />
                  <span className="from-brand-primary to-brand-secondary bg-gradient-to-r bg-clip-text text-transparent">
                    Meets Pure Logic.
                  </span>
                </h2>
              </div>

              <div className="text-text-secondary space-y-6 text-lg leading-relaxed font-medium md:text-xl">
                <p>
                  สวัสดีครับ ผม{" "}
                  <span className="text-text-primary font-bold">
                    คุณ{SITE_CONFIG.expert.displayName}
                  </span>{" "}
                  ผู้ก่อตั้ง {SITE_CONFIG.brandName} ครับ
                </p>
                <p>
                  ผมเชื่อว่าความสำเร็จในโลกออนไลน์ไม่ได้เกิดขึ้นด้วยความบังเอิญ
                  แต่เกิดจากการวางโครงสร้างที่ถูกต้องตั้งแต่ก้าวแรก
                </p>
                <p className="border-brand-primary/50 text-text-primary/80 border-l-4 pl-4 italic">
                  "ภารกิจของผมคือการใช้ความเชี่ยวชาญด้านเทคนิค ผสานกับวิสัยทัศน์ทางธุรกิจ
                  เพื่อเปลี่ยนเว็บไซต์ให้กลายเป็นสินทรัพย์ที่สร้างมูลค่าให้คุณอย่างไม่มีที่สิ้นสุด"
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Digital_Architect", "Technical_SEO", "Business_Optimization", "Data_Driven"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="border-border bg-surface-card text-text-muted flex items-center gap-2 rounded-lg border px-4 py-2"
                    >
                      <IconRenderer
                        name="Hash"
                        size={12}
                        className="text-brand-primary opacity-50"
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

      {/* 03. TRUST INFRASTRUCTURE */}
      <section className="border-border bg-surface-offset/30 border-y py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted mb-12 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
            Industrial Standards & Excellence
          </p>
          <div className="flex flex-col items-center gap-y-16">
            <TrustBadge />
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 04. CORE VALUES */}
      <div className="py-24">
        <FeatureGrid
          heading="Why AEMDEVWEB?"
          subheading="สัมผัสประสบการณ์การทำงานกับพาร์ทเนอร์ที่ให้ความสำคัญกับเป้าหมายของคุณ"
          items={coreValues}
          columns={3}
        />
      </div>

      {/* 05. CALL TO ACTION: ยกระดับการเรียกขานให้เป็นระดับมืออาชีพ */}
      <ConversionCTA
        title="พร้อมสร้างความได้เปรียบให้ธุรกิจของคุณหรือยังครับ?"
        description="ให้ผมร่วมเป็นส่วนหนึ่งในการวางรากฐานดิจิทัลที่แข็งแกร่ง เพื่อการเติบโตอย่างก้าวกระโดดของธุรกิจคุณ"
        buttonLabel="ปรึกษาคุณเอ็มผ่าน Line"
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel="ศึกษาบริการและแนวทาง"
        secondaryHref="/services"
      />
    </LayoutEngine>
  );
}
