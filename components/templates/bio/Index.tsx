/**
 * [TEMPLATE COMPONENT]: BIO_IDENTITY_ORCHESTRATOR v17.5.7 (STABILIZED)
 * [STRATEGY]: Instant LCP Paint | Multi-Theme Logic | Zero-Any Architecture
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- INFRASTRUCTURE ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine"; // Uses Shared Engine
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
import { generateBioSchema } from "./Schema";
import { SITE_CONFIG } from "@/constants/site-config";

interface BioTemplateProps {
  readonly data: TemplateMasterData;
}

function BioTemplate({ data }: BioTemplateProps) {
  const schema = generateBioSchema(data);

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. IDENTITY HERO */}
      <HeroEngine
        title={
          <span className="block">
            <span className="text-brand-primary mb-2 block font-mono text-lg tracking-[0.3em] uppercase md:text-2xl">
              {SITE_CONFIG.expert.jobTitle}
            </span>
            {SITE_CONFIG.expert.displayName}
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ทักแชทปรึกษาผมได้เลย"
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel="ดูผลงานที่ผ่านมา"
        secondaryHref="#portfolio"
        align="left"
      />

      {/* 02. IDENTITY VISUAL */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 transition-colors duration-500 md:-mt-40">
        <div className="group relative mx-auto max-w-5xl">
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-[var(--ambient-opacity,0.4)]" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[3rem] border shadow-2xl md:rounded-[4rem] md:p-4">
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 md:flex">
              {[
                { name: "Github", href: SITE_CONFIG.links?.github },
                { name: "Facebook", href: SITE_CONFIG.links?.facebook },
              ].map(
                (social) =>
                  social.href && (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-surface-main/20 hover:bg-brand-primary hover:text-surface-main rounded-full border p-3 backdrop-blur-md transition-all"
                    >
                      <IconRenderer name={social.name} size={20} />
                    </a>
                  ),
              )}
            </div>

            <div className="bg-surface-offset relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] md:aspect-[21/9] md:rounded-[3.5rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Personal Portfolio: ${SITE_CONFIG.expert.displayName}`}
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-surface-card/90 shadow-glow absolute right-10 -bottom-10 z-20 hidden items-center gap-6 rounded-[2.5rem] border px-8 py-6 backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 relative flex h-14 w-14 items-center justify-center rounded-2xl border">
              <span className="bg-brand-primary absolute -top-1 -right-1 flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              <IconRenderer name="UserCheck" className="text-brand-primary" size={28} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                Status
              </p>
              <p className="text-text-primary text-xl leading-none font-black tracking-tighter uppercase italic">
                Available for Hire
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. AUTHORITY & PHILOSOPHY */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12 space-y-4">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
              <IconRenderer name="Award" size={14} />
              Certified Specialist
            </div>
            <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase md:text-5xl">
              My Professional Standards
            </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            <ImpactStats />
            <div className="via-border h-px w-full max-w-2xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 04. EXPERTISE & CONVERSION */}
      <div id="portfolio">
        <FeatureGrid
          heading="Core Expertise"
          subheading="ทักษะและเครื่องมือที่ผมเชี่ยวชาญ พร้อมนำมาปรับใช้เพื่อยกระดับธุรกิจของคุณ"
          items={(data.coreFeatures || []).map((feat, idx) => ({
            title: feat.title,
            description: feat.description,
            icon: feat.icon,
            technicalDetail: `SKILL_NODE: 0${idx + 1}`,
          }))}
          columns={3}
        />
      </div>

      <section className="border-border bg-surface-offset/50 border-y py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <IconRenderer name="Quote" size={48} className="text-brand-primary/20 mx-auto" />
            <blockquote className="text-text-primary text-2xl leading-relaxed font-medium italic md:text-4xl">
              "ผมเชื่อว่าเว็บไซต์ที่ดี ไม่ใช่แค่สวยงาม
              แต่ต้องเป็นเครื่องมือที่ทรงพลังที่สุดในการสร้างโอกาสทางธุรกิจให้กับคุณครับ"
            </blockquote>
            <div className="pt-4">
              <p className="text-brand-primary text-sm font-black tracking-widest uppercase">
                {SITE_CONFIG.expert.displayName}
              </p>
              <p className="text-text-muted mt-1 text-xs font-bold tracking-widest uppercase">
                {SITE_CONFIG.expert.jobTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA
        title="สนใจร่วมงานกับผู้เชี่ยวชาญไหมครับ?"
        description="การทำงานกับผมจะช่วยให้คุณประหยัดเวลาและได้ผลลัพธ์ที่ตรงจุด ผมยินดีให้คำปรึกษาและออกแบบแผนงานที่เหมาะกับธุรกิจคุณโดยเฉพาะครับ"
        buttonLabel="แอดไลน์คุยกับผม"
      />

      <DynamicFAQ
        title="คำถามที่พบบ่อย"
        description="ข้อมูลเบื้องต้นเกี่ยวกับกระบวนการจ้างงานและการร่วมงาน"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(BioTemplate);
