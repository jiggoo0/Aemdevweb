/**
 * [TEMPLATE COMPONENT]: CORPORATE_ORCHESTRATOR v17.0.2 (LINT_FIXED)
 * [STRATEGY]: Organizational Authority | Enterprise Visualization | High-Fidelity Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- INFRASTRUCTURE ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
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
    <LayoutEngine spacing="specialist">
      {/* 01. SEO SIGNAL: ยืนยันตัวตนระดับองค์กร */}
      <JsonLd data={schema} />

      {/* 02. HERO GATEWAY: วิสัยทัศน์ดิจิทัล */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="ทักแชทปรึกษาแผนงาน Enterprise"
        secondaryActionLabel="ดูมาตรฐาน Security"
      />

      {/* 03. VISUAL ARCHITECTURE: โครงสร้างระบบ (LCP Optimized) */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
        <div className="group relative mx-auto max-w-7xl">
          {/* Ambient Light: CSS Animation */}
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[4rem] opacity-40 blur-[100px] transition-opacity duration-1000 group-hover:opacity-60 will-change-opacity" />

          {/* [LCP FIX]: รูปภาพโหลดทันที */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] shadow-2xl md:rounded-[4rem] md:p-4">
            {/* Security Badge Overlay */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-950/30 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">
                System Secure
              </span>
            </div>

            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] bg-gray-900 md:rounded-[3rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`โครงสร้างระบบเว็บไซต์องค์กร: ${data.title}`}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-50" />
            </div>
          </div>

          {/* Enterprise Status Badge: Animation แยก */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 left-8 z-20 hidden items-center gap-4 rounded-[2rem] border border-white/10 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-12 w-12 items-center justify-center rounded-xl border">
              <IconRenderer name="ShieldCheck" className="text-brand-primary" size={24} />
            </div>
            <div>
              <span className="block text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">
                Enterprise Grade
              </span>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
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
              <span className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <IconRenderer name="Database" size={14} />
                Infrastructure Reliability
              </span>
              <h2 className="text-3xl font-black text-white uppercase md:text-5xl">
                {data.clientTrust || "Trusted by Leading Organizations"}
              </h2>
            </header>
            <ImpactStats />
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. CORE INFRASTRUCTURE: โซลูชันระดับองค์กร */}
      <FeatureGrid
        heading="Enterprise Solutions"
        subheading="โครงสร้างระบบที่ถูกออกแบบมาเพื่อรองรับการขยายตัว (Scalability) และความปลอดภัย (Security) สูงสุด"
        // [FIX]: ลบ idx ออกเนื่องจากไม่ได้ใช้งาน (Fix unused-vars warning)
        items={(data.coreFeatures || []).map((feat) => ({
          title: feat.title,
          description: feat.description,
          icon: feat.icon,
          category: "System Module",
          technicalDetail: "SLA 99.9% Guarantee",
        }))}
        columns={2}
      />

      {/* 06. SECURITY LAYER: ความปลอดภัยข้อมูล */}
      <article className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <header>
                <h3 className="text-3xl font-bold text-white uppercase md:text-4xl">
                  Data Security & Compliance
                </h3>
              </header>
              <p className="text-lg leading-relaxed text-gray-400">
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
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <IconRenderer name="CheckCircle" className="text-brand-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Representation of Security */}
            <div className="relative mx-auto aspect-square w-full max-w-md lg:ml-auto">
              <div className="bg-brand-primary/5 absolute inset-0 rounded-full blur-3xl animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm">
                <IconRenderer name="Shield" size={120} className="text-brand-primary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-brand-primary font-mono text-xs font-bold tracking-widest animate-pulse">
                    SECURE::ENCRYPTED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 07. CALL TO ACTION */}
      <ConversionCTA
        title="พร้อมยกระดับโครงสร้างดิจิทัลขององค์กรหรือยังครับ?"
        description="ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและออกแบบระบบที่ตอบโจทย์วิสัยทัศน์ขององค์กรคุณอย่างตรงจุด"
        buttonLabel="นัดปรึกษาแผนงาน Enterprise"
      />

      {/* 08. FAQ */}
      <DynamicFAQ
        title="คำถามที่พบบ่อยสำหรับองค์กร"
        description="ข้อมูลด้านมาตรฐาน SLA และการซัพพอร์ต"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(CorporateTemplate);
