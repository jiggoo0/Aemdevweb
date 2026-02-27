/**
 * [ROUTE PAGE]: ABOUT_US v18.0.0 (INTERACTIVE_MAXIMIZED)
 * [STRATEGY]: High-Authority Positioning | Digital Strategist | E-E-A-T Optimized
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Engines ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { FeatureGrid } from "@/components/templates/sections/UniversalRegistry";
import { CapabilityGraph } from "@/components/templates/sections/CapabilityGraph";
import { SuccessTimeline } from "@/components/templates/sections/SuccessTimeline";
import { TrustEquation } from "@/components/templates/sections/TrustEquation";

import { SITE_CONFIG } from "@/constants/site-config";
import { ABOUT_CONTENT } from "@/constants/about";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/schema";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

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

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: วางตำแหน่งเป็นคู่คิดทางธุรกิจ */}
      <UniversalHero
        title={ABOUT_CONTENT.hero.title}
        subtitle={ABOUT_CONTENT.hero.subtitle}
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
              <div className="bg-surface-card border-border shadow-pro-xl rounded-card-lg relative flex h-full w-full items-center justify-center overflow-hidden border backdrop-blur-3xl">
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
                    {ABOUT_CONTENT.vision.title}
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
                <div className="border-brand-primary/50 text-text-primary/80 border-l-4 pl-4 leading-relaxed italic">
                  “{ABOUT_CONTENT.vision.description}”
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {ABOUT_CONTENT.vision.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border-border bg-surface-card text-text-muted flex items-center gap-2 rounded-lg border px-4 py-2"
                  >
                    <IconRenderer name="Hash" size={12} className="text-brand-primary opacity-50" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CAPABILITY NODES: Visualize the Expertise */}
      <section className="bg-surface-offset/50 border-border border-y py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                Technical <br /> <span className="text-brand-primary">Command.</span>
              </h2>
              <p className="text-text-secondary max-w-xl text-lg leading-relaxed font-medium italic opacity-80">
                เราใช้ทักษะทางวิศวกรรมซอฟต์แวร์ระดับลึก เพื่อสร้างระบบที่ไม่ใช่แค่สวยงาม
                แต่คือโครงสร้างพื้นฐานที่แข็งแกร่งที่สุดสำหรับธุรกิจคุณ
              </p>
            </div>
            <CapabilityGraph
              skills={[
                { title: "Web Architecture (Next.js)", description: "", icon: "Layers" },
                { title: "Technical SEO Engineering", description: "", icon: "SearchCheck" },
                { title: "Data-Driven Conversion", description: "", icon: "Activity" },
                { title: "Core Web Vitals Mastery", description: "", icon: "Zap" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 04. MILESTONES: The Success Journey */}
      <section className="py-24">
        <div className="container mx-auto mb-16 px-4 text-center">
          <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            Success <span className="text-brand-primary">Roadmap.</span>
          </h2>
        </div>
        <SuccessTimeline />
      </section>

      {/* 05. TRUST INFRASTRUCTURE */}
      <section className="border-border bg-surface-offset/30 border-y py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="sr-only">Professional Trust and Performance Metrics</h2>
          <p className="text-text-muted mb-12 font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
            Industrial Standards & Excellence
          </p>
          <div className="flex flex-col items-center gap-y-16">
            <TrustBadge />
            <div className="w-full max-w-5xl">
              <TrustEquation />
            </div>
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 06. CORE VALUES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
              Why AEMDEVWEB?
            </h2>
            <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-lg font-medium opacity-60">
              สัมผัสประสบการณ์การทำงานกับพาร์ทเนอร์ที่ให้ความสำคัญกับเป้าหมายของคุณ
            </p>
          </div>
          <FeatureGrid features={ABOUT_CONTENT.coreValues} />
        </div>
      </section>

      {/* 07. CALL TO ACTION: ยกระดับการเรียกขานให้เป็นระดับมืออาชีพ */}
      <ConversionCTA
        title={ABOUT_CONTENT.cta.title}
        description={ABOUT_CONTENT.cta.description}
        buttonLabel={ABOUT_CONTENT.cta.primaryLabel}
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel={ABOUT_CONTENT.cta.secondaryLabel}
        secondaryHref="/services"
      />
    </LayoutEngine>
  );
}
