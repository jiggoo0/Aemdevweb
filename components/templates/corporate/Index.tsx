/**
 * [TEMPLATE COMPONENT]: CORPORATE_ORCHESTRATOR v17.3.10 (STABILIZED)
 * [STRATEGY]: Organizational Authority | Enterprise Visualization | High-Fidelity Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- INFRASTRUCTURE (FIXED: ปรับ Path ให้ตรงตามตำแหน่งจริงใน /sections) ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- SHARED COMPONENTS ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- LOGIC ---
import type { TemplateMasterData } from "@/types";
import { generateCorporateSchema } from "./Schema";

interface CorporateTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component CorporateTemplate
 * @description หน้าเว็บสำหรับองค์กรและธุรกิจขนาดใหญ่
 * เน้นความมั่นคง (Stability) ความน่าเชื่อถือ (Trust) และระบบการทำงานที่เป็นมาตรฐานสากล
 */
function CorporateTemplate({ data }: CorporateTemplateProps) {
  const schema = generateCorporateSchema(data);

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      {/* 01. SEO SIGNAL: ยืนยันตัวตนระดับองค์กร */}
      <JsonLd data={schema} />

      {/* 02. HERO GATEWAY: วิสัยทัศน์ดิจิทัล [RESOLVED]: ปรับใช้ Prop ให้ตรงกับ HeroProps Interface */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionText="ทักแชทปรึกษาแผนงาน Enterprise"
        secondaryActionText="ดูมาตรฐาน Security"
      />

      {/* 03. VISUAL ARCHITECTURE: โครงสร้างระบบ (LCP Optimized) */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
        <div className="group relative mx-auto max-w-7xl">
          {/* Ambient Light Physics */}
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[4rem] opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-[var(--ambient-opacity,0.4)] will-change-opacity" />

          {/* [LCP]: High-Fidelity Interface Container */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface-main shadow-2xl md:rounded-[4rem] md:p-4">
            
            {/* Security Status Indicator */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-950/30 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">
                System Secure
              </span>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-surface-offset md:rounded-[3rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Enterprise System Architecture: ${data.title}`}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-main via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Enterprise Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 left-8 z-20 hidden items-center gap-4 rounded-[2rem] border border-border bg-surface-card/90 px-8 py-6 shadow-2xl backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-12 w-12 items-center justify-center rounded-xl border">
              <IconRenderer name="ShieldCheck" className="text-brand-primary" size={24} />
            </div>
            <div>
              <span className="text-text-muted block text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                Enterprise Grade
              </span>
              <span className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
                High Availability
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. CORPORATE TRUST: ความน่าเชื่อถือระดับสากล */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 text-center">
            <header className="space-y-4">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <IconRenderer name="Database" size={14} />
                Infrastructure Reliability
              </div>
              <h2 className="text-text-primary text-3xl font-black uppercase md:text-5xl tracking-tighter">
                {data.clientTrust || "Trusted by Leading Organizations"}
              </h2>
            </header>
            <ImpactStats />
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-border to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. CORE INFRASTRUCTURE: โซลูชันระดับองค์กร */}
      <FeatureGrid
        heading="Enterprise Solutions"
        subheading="โครงสร้างระบบที่ถูกออกแบบมาเพื่อรองรับการขยายตัว (Scalability) และความปลอดภัย (Security) สูงสุด"
        items={(data.coreFeatures || []).map((feat) => ({
          title: feat.title,
          description: feat.description,
          icon: feat.icon,
          category: "System Module",
        }))}
        columns={2}
      />

      {/* 06. SECURITY LAYER: ความปลอดภัยข้อมูล (PDPA Ready) */}
      <article className="border-y border-border bg-surface-offset/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <header>
                <h3 className="text-text-primary text-3xl font-black uppercase md:text-4xl tracking-tight italic">
                  Data Security & Compliance
                </h3>
              </header>
              <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-90">
                เราให้ความสำคัญสูงสุดกับการปกป้องข้อมูลองค์กร ด้วยมาตรฐานความปลอดภัยระดับสากล
                และการปฏิบัติตามกฎหมาย PDPA อย่างเคร่งครัด
              </p>
              <ul className="space-y-4">
                {[
                  "PDPA / GDPR Compliance Ready",
                  "SSL Encryption (TLS 1.3)",
                  "DDoS Protection Layer",
                  "Automated Daily Backups",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary font-bold italic">
                    <IconRenderer name="CheckCircle" className="text-brand-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Representation of Security */}
            <div className="relative mx-auto aspect-square w-full max-w-md lg:ml-auto">
              <div className="bg-brand-primary/10 absolute inset-0 rounded-full blur-3xl animate-pulse" />
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-border bg-surface-card/40 p-8 backdrop-blur-sm shadow-glow">
                <IconRenderer name="Shield" size={120} className="text-brand-primary opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="text-brand-primary font-mono text-[10px] font-black tracking-widest animate-pulse uppercase">
                    Secure_Node_Active
                  </span>
                  <div className="bg-brand-primary h-1 w-20 rounded-full opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 07. CALL TO ACTION: Enterprise Decision Point */}
      <ConversionCTA
        title="พร้อมยกระดับโครงสร้างดิจิทัลขององค์กรหรือยังครับ?"
        description="ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและออกแบบระบบที่ตอบโจทย์วิสัยทัศน์ขององค์กรคุณอย่างตรงจุด"
        buttonLabel="นัดปรึกษาแผนงาน Enterprise"
      />

      {/* 08. FAQ: SLA & Support Protocols */}
      <DynamicFAQ
        title="คำถามที่พบบ่อยสำหรับองค์กร"
        description="ข้อมูลด้านมาตรฐาน SLA และการซัพพอร์ตระดับ Specialist"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(CorporateTemplate);
