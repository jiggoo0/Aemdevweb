/**
 * [TEMPLATE COMPONENT]: CORPORATE_SYSTEM_ORCHESTRATOR v17.9.102 (ULTIMATE_HARDENED)
 * [STRATEGY]: Outcome-Driven Architecture | Anti-White-Flash Wrapper | Performance-Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
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

// --- 2. Shared Nodes ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface CorporateTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const CorporateTemplate = ({ data, suppressUI: _suppressUI = false }: CorporateTemplateProps) => {
  // [MEMOIZATION]: สร้าง Schema Graph เชื่อมโยง Organization Node
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [SAFETY]: ตรวจสอบ Blur Data แบบ Type-Safe (Zero CLS Strategy)
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  return (
    // [CRITICAL FIX]: Root Wrapper ป้องกันแสงขาวรอด และล็อคสีพื้นหลังระดับโครงสร้าง
    <main
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      style={{
        backgroundColor: data.theme?.background || "#ffffff",
      }}
    >
      <LayoutEngine spacing="specialist" theme={data.theme}>
        {/* 01. SEO Layer */}
        <JsonLd data={schema} />

        {/* 02. Hero Section: Strategic Messaging */}
        <HeroEngine
          title={data.title}
          subtitle={data.description}
          primaryActionLabel="ปรึกษาแผนงานระดับ Enterprise"
          primaryHref="#contact"
          secondaryActionLabel="Infrastructure Audit"
          secondaryHref="#security"
          align="left"
        />

        {/* 03. Featured Architecture Image Section */}
        <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
          <div className="group relative mx-auto max-w-7xl">
            {/* Ambient Glow Node */}
            <div className="bg-brand-primary/10 absolute -inset-10 rounded-[4rem] opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-40" />

            <div className="bg-surface-main border-border/50 relative overflow-hidden rounded-[2.5rem] border shadow-2xl md:rounded-[4rem] md:p-4">
              {/* Architecture Verification Badge */}
              <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-950/40 px-4 py-1.5 backdrop-blur-md md:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-sm" />
                <span className="text-[9px] font-black tracking-widest text-green-400 uppercase">
                  Architecture_Verified_v18
                </span>
              </div>

              <div
                className="bg-surface-offset relative w-full overflow-hidden rounded-[2rem] md:rounded-[3rem]"
                style={{
                  aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "21/9",
                }}
              >
                <Image
                  src={data.image || "/images/service/corporate-node.webp"}
                  alt={`Enterprise Infrastructure: ${data.title}`}
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="from-surface-main absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Floating Trust Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-border bg-surface-card/95 absolute -bottom-8 left-8 z-20 hidden items-center gap-5 rounded-[2.5rem] border px-10 py-8 shadow-2xl backdrop-blur-xl md:flex"
            >
              <div className="bg-brand-primary/10 border-brand-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border">
                <IconRenderer name="ShieldCheck" className="text-brand-primary" size={28} />
              </div>
              <div>
                <span className="text-text-muted block font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-50">
                  Node_Stability
                </span>
                <span className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
                  {data.priceValue ? `฿${data.priceValue.toLocaleString()}` : "Premium_Build"}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 04. Trust & Impact Matrix */}
        <section className="py-24 md:pt-48">
          <div className="container mx-auto px-4 text-center">
            <header className="mb-20 space-y-6">
              <span className="text-brand-primary font-mono text-xs font-black tracking-[0.5em] uppercase">
                Reliability_Signals
              </span>
              <h2 className="text-text-primary text-4xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
                {data.clientTrust || "High-Stake Digital Solutions"}
              </h2>
            </header>

            <ImpactStats />

            <div className="via-border/50 mx-auto my-20 h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />

            <TrustBadge />
          </div>
        </section>

        {/* 05. Capability Grid */}
        <FeatureGrid
          heading="Corporate Matrix"
          subheading="วิศวกรรมสถาปัตยกรรมเว็บไซต์ที่เน้นความมั่นคงและภาพลักษณ์ระดับสากล"
          items={(data.coreFeatures || []).map((feat, idx) => ({
            title: feat.title,
            description: feat.description,
            icon: feat.icon as IconName,
            technicalDetail: `CORP_MOD_0${idx + 1}`,
          }))}
          columns={2}
        />

        {/* 06. Security & Compliance Section */}
        <article id="security" className="border-border bg-surface-offset/30 border-y py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-brand-primary font-mono text-xs font-black tracking-widest uppercase">
                    Security_Protocol
                  </span>
                  <h3 className="text-text-primary text-5xl leading-[0.85] font-black uppercase italic md:text-6xl">
                    Stability, Security <br /> & Compliance.
                  </h3>
                </div>
                <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85">
                  เราวางโครงสร้างพื้นฐานโดยยึดหลัก Zero-Trust Architecture
                  เพื่อให้มั่นใจว่าข้อมูลองค์กรของคุณจะปลอดภัย พร้อมรองรับมาตรฐาน PDPA และ SSL TLS
                  1.3
                </p>

                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    "PDPA Compliance Ready",
                    "TLS 1.3 Encryption",
                    "Infrastructure Security",
                    "Disaster Recovery Plan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-text-primary flex items-center gap-4 text-sm font-bold italic"
                    >
                      <div className="bg-brand-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
                        <IconRenderer name="CheckCircle" className="text-brand-primary" size={16} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="bg-brand-primary/5 absolute inset-0 animate-pulse rounded-full blur-[120px]" />
                <div className="border-border bg-surface-card/40 shadow-glow-sm relative flex aspect-square w-full items-center justify-center rounded-[4rem] border backdrop-blur-md">
                  <IconRenderer
                    name="Shield"
                    size={160}
                    className="text-brand-primary opacity-20"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <span className="text-brand-primary animate-pulse font-mono text-[10px] font-black tracking-widest uppercase">
                      Security_Node_Active
                    </span>
                    <div className="bg-brand-primary h-2 w-32 rounded-full opacity-30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 07. Conversion CTA */}
        <ConversionCTA
          title="พร้อมสร้างรากฐานที่มั่นคงให้ธุรกิจของคุณหรือยัง?"
          description="ปรึกษาแผนงานระดับ Enterprise เพื่อประสิทธิภาพสูงสุดในการดำเนินธุรกิจออนไลน์"
          buttonLabel="คุยรายละเอียดกับทีม Specialist"
        />

        {/* 08. FAQ */}
        <DynamicFAQ
          title="Enterprise Technical FAQ"
          description="เจาะลึกรายละเอียดเกี่ยวกับเทคโนโลยีและมาตรฐานการทำงานสำหรับองค์กร"
          items={data.faqs}
        />
      </LayoutEngine>
    </main>
  );
};

export default memo(CorporateTemplate);
