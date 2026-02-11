/**
 * [TEMPLATE COMPONENT]: CORPORATE_SYSTEM_ORCHESTRATOR v17.8.5 (ZERO_CLS)
 * [STRATEGY]: Outcome-Driven Architecture | Asset Metadata Injection | Performance First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- 1. Infrastructure & UI ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- 2. Shared Component Nodes ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { TemplateMasterData } from "@/types";
import { generateCorporateSchema } from "./Schema";

interface CorporateTemplateProps {
  readonly data: TemplateMasterData;
}

function CorporateTemplate({ data }: CorporateTemplateProps) {
  const schema = useMemo(() => generateCorporateSchema(data), [data]);
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. HERO GATEWAY: Enterprise Vision */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="ปรึกษาแผนงานกับนายเอ็มซ่ามากส์"
        primaryHref="/contact"
        secondaryActionLabel="Security Audit"
        secondaryHref="#security"
        align="left"
      />

      {/* 02. VISUAL AUTHORITY: Zero-CLS Protocol */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
        <div className="group relative mx-auto max-w-7xl">
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[4rem] opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-40" />

          <div className="bg-surface-main relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl md:rounded-[4rem] md:p-4">
            {/* Real-time Status Indicator */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-950/30 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">
                System Secure v17
              </span>
            </div>

            {/* Locked Aspect Ratio Container */}
            <div
              className="bg-surface-offset relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem]"
              style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9" }}
            >
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Enterprise Architecture: ${data.title}`}
                fill
                priority
                placeholder="blur"
                blurDataURL={imgData?.blurDataURL}
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-main absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Specialist Node Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-border bg-surface-card/90 absolute -bottom-8 left-8 z-20 hidden items-center gap-4 rounded-[2rem] border px-8 py-6 shadow-2xl backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-12 w-12 items-center justify-center rounded-xl border">
              <IconRenderer name="ShieldCheck" className="text-brand-primary" size={24} />
            </div>
            <div>
              <span className="text-text-muted block text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                Deployment_Mode
              </span>
              <span className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
                Enterprise_Grade
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. IMPACT & TRUST */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <header className="mb-16 space-y-4">
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.5em] uppercase">
              Infrastructure_Reliability
            </span>
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase md:text-6xl">
              {data.clientTrust || "High-Stake Digital Solutions"}
            </h2>
          </header>
          <ImpactStats />
          <div className="via-border mx-auto my-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
          <TrustBadge />
        </div>
      </section>

      {/* 04. CORE FEATURE GRID */}
      <FeatureGrid
        heading="Enterprise Matrix"
        subheading="ทุกโหนดของระบบถูกออกแบบเพื่อรองรับ Scalability และ Security สูงสุดตามมาตรฐานสากล"
        items={(data.coreFeatures || []).map((feat, idx) => ({
          ...feat,
          technicalDetail: `CORE_MODULE_0${idx + 1}`,
        }))}
        columns={2}
      />

      {/* 05. SECURITY & COMPLIANCE SECTION */}
      <article id="security" className="border-border bg-surface-offset/30 border-y py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand-primary font-mono text-xs font-black tracking-widest uppercase">
                  Protocol_Security
                </span>
                <h3 className="text-text-primary text-4xl leading-none font-black uppercase italic md:text-5xl">
                  Data Security <br /> & Compliance.
                </h3>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-80">
                นายเอ็มซ่ามากส์ ให้ความสำคัญสูงสุดกับการปกป้องข้อมูลองค์กร ด้วยมาตรฐาน TLS 1.3
                และการออกแบบระบบที่รองรับ PDPA Compliance อย่างสมบูรณ์
              </p>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  "PDPA / GDPR Ready",
                  "SSL TLS 1.3 Encryption",
                  "L7 DDoS Protection",
                  "Daily Auto-Backups",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-text-primary flex items-center gap-3 text-sm font-bold italic"
                  >
                    <IconRenderer name="CheckCircle" className="text-brand-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-brand-primary/10 absolute inset-0 animate-pulse rounded-full blur-3xl" />
              <div className="border-border bg-surface-card/40 shadow-glow relative flex aspect-square w-full items-center justify-center rounded-[3rem] border backdrop-blur-sm">
                <IconRenderer name="Shield" size={140} className="text-brand-primary opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-brand-primary animate-pulse font-mono text-[10px] font-black tracking-widest uppercase">
                    Encryption_Node
                  </span>
                  <div className="bg-brand-primary h-1.5 w-24 rounded-full opacity-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* 06. CONVERSION ARCHITECTURE */}
      <ConversionCTA
        title="พร้อมยกระดับโครงสร้างธุรกิจของคุณหรือยังครับ?"
        description="นายเอ็มซ่ามากส์ พร้อมร่วมวิเคราะห์และวางรากฐานระบบ Enterprise ที่มั่นคงที่สุดให้คุณตั้งแต่วันนี้"
        buttonLabel="จองคิวปรึกษาแผนงาน"
      />

      <DynamicFAQ
        title="Enterprise Technical FAQ"
        description="เจาะลึกรายละเอียด SLA และกระบวนการ Support ระดับ Specialist"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(CorporateTemplate);
