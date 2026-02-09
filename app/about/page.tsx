/**
 * [ROUTE PAGE]: ABOUT_US v17.3.10 (STABILIZED)
 * [STRATEGY]: Identity Authority | Multi-Theme Orchestration | Partner-Centric Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Engines ---
// [FIXED]: ปรับ Path ให้ตรงตามโครงสร้าง File Tree จริงของคุณ
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
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
 * [METADATA]: สื่อสารความโปร่งใสและ EEAT Authority
 */
export const metadata: Metadata = {
  title: `ทำความรู้จักเราและความตั้งใจของเรา | ${SITE_CONFIG.brandName}`,
  description: "เบื้องหลังความสำเร็จของธุรกิจคุณ คือความตั้งใจของเราในการวางรากฐานเว็บไซต์ที่แข็งแกร่ง ปรึกษาแผนงาน SEO กับผู้เชี่ยวชาญโดยตรง",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  /* [SEO STRATEGY]: Graph-Based Schema Injection */
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  const coreValues = [
    {
      title: "ระบบที่มั่นคงและไว้ใจได้",
      description: "เราเน้นวางรากฐานเว็บไซต์ให้แข็งแรง ปลอดภัย และใช้งานได้ยาวนาน เพื่อให้ธุรกิจของคุณเติบโตได้อย่างไร้กังวลครับ",
      icon: "ShieldCheck",
    },
    {
      title: "คุยกันตรงไปตรงมา",
      description: "ความโปร่งใสคือสิ่งสำคัญที่สุด เราแจ้งรายละเอียดงานชัดเจนทุกขั้นตอน เพื่อให้คุณสบายใจและมั่นใจในงานที่ได้รับครับ",
      icon: "MessageCircle",
    },
    {
      title: "เทคโนโลยีระดับ Specialist",
      description: "เลือกใช้เครื่องมือที่ทันสมัยที่สุดเพื่อให้เว็บโหลดไวและรองรับ AI Search ให้ธุรกิจของคุณอยู่เหนือคู่แข่งเสมอครับ",
      icon: "Zap",
    },
  ];

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: [RESOLVED]: ใช้ subtitle prop ที่อัปเดตใหม่ใน HeroEngine */}
      <HeroEngine
        title={<>เราไม่ได้แค่รับทำเว็บไซต์<br />แต่เราช่วยคุณ <span className="text-brand-primary">"วางระบบทำเงิน"</span></>}
        subtitle="จากประสบการณ์ในการพัฒนาเว็บและวางกลยุทธ์ SEO ผมเชื่อว่าเว็บไซต์ที่ดีต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่เก่งที่สุดและทำงานแทนคุณได้ตลอด 24 ชั่วโมงครับ"
        primaryActionText="เริ่มวางแผนงานกับเรา"
        secondaryActionText="ดูผลงานที่ผ่านมา"
      />

      {/* 02. SPECIALIST NODE: Identity Interface */}
      <section className="relative overflow-hidden py-24 md:py-32 transition-colors duration-500">
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
            <div className="ambient-aura absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* Visual Profile Interface */}
            <div className="relative mx-auto h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
              <div className="bg-brand-primary/10 absolute inset-0 rounded-[3rem] blur-[80px] opacity-[var(--ambient-opacity,0.3)]" />
              <div className="bg-surface-card border-border relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border shadow-glow backdrop-blur-3xl">
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-transparent via-surface-main/20 to-surface-main/80">
                  <IconRenderer name="User" size={120} className="text-text-muted/20" />
                  
                  {/* Identity Badge */}
                  <div className="bg-surface-card/80 border-border absolute right-8 bottom-8 left-8 rounded-2xl border p-6 shadow-glow backdrop-blur-xl">
                    <p className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">Identity.Verified</p>
                    <h3 className="text-text-primary mt-2 text-2xl font-black italic uppercase tracking-tighter">
                      {SITE_CONFIG.expert.displayName}
                    </h3>
                    <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest opacity-60">
                      {SITE_CONFIG.expert.jobTitle} // Node_v{SITE_CONFIG.project.version}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialist Narrative */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-sm">
                  <span className="bg-brand-primary h-1.5 w-1.5 rounded-full animate-pulse shadow-glow" />
                  <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">The_Philosophy</span>
                </div>
                <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl">
                  Technical <br /> <span className="text-brand-primary">Authority.</span>
                </h2>
              </div>
              
              <div className="text-text-secondary space-y-6 text-lg leading-relaxed font-medium italic md:text-xl">
                <p>
                  ผมชื่อ <span className="text-text-primary font-black">"{SITE_CONFIG.expert.displayName}"</span> ครับ หรือพาร์ทเนอร์ในวงการอาจจะคุ้นเคยในชื่อ <span className="text-brand-primary font-black">"{SITE_CONFIG.expert.legalNameThai}"</span>
                </p>
                <p>
                  แรงบันดาลใจในการสร้าง <span className="text-text-primary font-black uppercase">{SITE_CONFIG.brandName}</span> เกิดจากความตั้งใจที่จะลบภาพจำเดิมๆ ของการทำเว็บที่ไม่ได้ผลจริง 
                  ผมจึงนำยุทธศาสตร์ <span className="text-text-primary font-black">Technical SEO</span> มาหลอมรวมกับ <span className="text-text-primary font-black">Web Infrastructure</span> เพื่อสร้างอาวุธที่ทรงพลังที่สุดให้ธุรกิจคุณครับ
                </p>
              </div>

              {/* Specialist Meta Tags */}
              <div className="flex flex-wrap gap-4 pt-4">
                {["Clean_Code", "SEO_Driven", "Deterministic_Build"].map((tag) => (
                  <div key={tag} className="border-border bg-surface-card hover:border-brand-primary/30 text-text-primary flex items-center gap-3 rounded-full border px-6 py-2 transition-all hover:shadow-glow">
                    <IconRenderer name="Check" size={14} className="text-brand-primary" />
                    <span className="text-[10px] font-black tracking-widest uppercase">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUTHORITY LAYER: ระบบการันตีมาตรฐาน */}
      <section className="border-y border-border bg-surface-offset/50 py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-muted mb-16 font-mono text-[10px] font-black tracking-[0.5em] uppercase opacity-40">
            System Performance & Trust Authority
          </p>
          <div className="flex flex-col items-center gap-y-20">
            <TrustBadge />
            <div className="border-border h-px w-full max-w-xs border-t" />
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 04. PHILOSOPHY GRID */}
      <FeatureGrid
        heading="Why Partners Choose Us"
        subheading="เพราะเราเชื่อว่าเว็บไซต์ที่ดีต้องมาพร้อมความเข้าใจในธุรกิจ เราจึงใส่ใจรายละเอียดทุกจุดเหมือนทำธุรกิจของตัวเองครับ"
        items={coreValues}
        columns={3}
      />

      {/* 05. VISION NODE: พันธกิจเพื่อการเติบโต */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-surface-card border-border relative overflow-hidden rounded-[3rem] border p-12 shadow-glow md:p-24 transition-colors duration-500">
            <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
            <div className="relative z-10 space-y-10 text-center">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-7xl">
                Empowering <br /> Your Future.
              </h2>
              <p className="text-text-secondary mx-auto max-w-3xl text-lg leading-relaxed font-medium italic md:text-2xl">
                เป้าหมายสูงสุดของผมคือการสร้าง <span className="text-brand-primary font-black">"โครงสร้างพื้นฐานดิจิทัล"</span> ที่แข็งแกร่งที่สุดในงบประมาณที่คุ้มค่า 
                เพื่อให้เจ้าของธุรกิจทุกท่านสามารถโฟกัสกับการเติบโตได้อย่างเต็มที่ โดยมีระบบที่ทรงพลังคอยสนับสนุนอยู่เบื้องหลังครับ
              </p>
              <div className="flex justify-center pt-6">
                <div className="bg-brand-primary h-1.5 w-32 animate-pulse rounded-full shadow-glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. CALL TO ACTION */}
      <ConversionCTA
        title="เริ่มวางระบบธุรกิจของคุณให้ถูกต้องตั้งแต่วันนี้"
        description="ทักแชทคุยกับผมโดยตรงเพื่อวิเคราะห์แนวทางที่คุ้มค่าที่สุดสำหรับธุรกิจของคุณ เราพร้อมเปลี่ยนทุกไอเดียให้กลายเป็นผลกำไรที่จับต้องได้ครับ"
        buttonLabel="ปรึกษาแผนงานรายพื้นที่"
      />
    </LayoutEngine>
  );
}
