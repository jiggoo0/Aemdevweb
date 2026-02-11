/**
 * [TEMPLATE COMPONENT]: BIO_IDENTITY_ORCHESTRATOR v17.8.5 (STABILIZED)
 * [STRATEGY]: Instant LCP Paint | Identity Graphing | Performance First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- INFRASTRUCTURE ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
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
import { generateBioSchema } from "./Schema";
import { SITE_CONFIG } from "@/constants/site-config";

interface BioTemplateProps {
  readonly data: TemplateMasterData;
}

function BioTemplate({ data }: BioTemplateProps) {
  const schema = useMemo(() => generateBioSchema(data), [data]);
  const imgData = data.image ? IMAGE_BLUR_DATA[data.image] : null;

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* 01. IDENTITY HERO: ปูทางสู่ Authority */}
      <HeroEngine
        title={
          <span className="block">
            <span className="text-brand-primary mb-3 block font-mono text-lg tracking-[0.4em] uppercase opacity-80 md:text-2xl">
              {SITE_CONFIG.expert.jobTitle}
            </span>
            {SITE_CONFIG.expert.displayName}
          </span>
        }
        subtitle={data.description}
        primaryActionLabel="ทักแชทปรึกษาผมโดยตรง"
        primaryHref={SITE_CONFIG.links.line}
        secondaryActionLabel="Case Studies"
        secondaryHref="/case-studies"
        align="left"
      />

      {/* 02. IDENTITY VISUAL: Zero-CLS Showcase */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 transition-colors duration-500 md:-mt-40">
        <div className="group relative mx-auto max-w-5xl">
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-40" />

          <div className="border-border bg-surface-card relative overflow-hidden rounded-[3rem] border shadow-2xl md:rounded-[4rem] md:p-4">
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-3 md:flex">
              {[
                { name: "Github", href: SITE_CONFIG.links?.github, icon: "Github" },
                { name: "Facebook", href: SITE_CONFIG.links?.facebook, icon: "Facebook" },
              ].map(
                (social) =>
                  social.href && (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-surface-main/40 hover:bg-brand-primary hover:text-surface-main flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-md transition-all hover:scale-110"
                      aria-label={social.name}
                    >
                      <IconRenderer name={social.icon} size={20} />
                    </a>
                  ),
              )}
            </div>

            <div
              className="bg-surface-offset relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
              style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/9" }}
            >
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Portfolio: ${SITE_CONFIG.expert.displayName}`}
                fill
                priority
                placeholder="blur"
                blurDataURL={imgData?.blurDataURL}
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
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
                Expert_Status
              </p>
              <p className="text-text-primary text-xl leading-none font-black tracking-tighter uppercase italic">
                Ready_to_Consult
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 03. TRUST & STANDARDS */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16 space-y-6">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-5 py-2 text-[10px] font-black tracking-widest uppercase">
              <IconRenderer name="Award" size={14} />
              Professional_Standard_v17
            </div>
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase md:text-6xl">
              Quality-First Philosophy.
            </h2>
          </div>
          <div className="flex flex-col items-center gap-16">
            <ImpactStats />
            <div className="via-border h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 04. EXPERTISE HUB */}
      <div id="portfolio">
        <FeatureGrid
          heading="Technical Mastery"
          subheading="ทักษะวิศวกรรมที่ผมใช้ขับเคลื่อนธุรกิจของพาร์ทเนอร์ในโลกดิจิทัล"
          items={(data.coreFeatures || []).map((feat, idx) => ({
            ...feat,
            technicalDetail: `NODE_EXP: 0${idx + 1}`,
          }))}
          columns={3}
        />
      </div>

      {/* 05. PERSONAL QUOTE */}
      <section className="border-border bg-surface-offset/40 border-y py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            <div className="bg-brand-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-full">
              <IconRenderer name="Quote" size={32} className="text-brand-primary opacity-60" />
            </div>
            <blockquote className="text-text-primary text-2xl leading-relaxed font-bold italic md:text-5xl">
              "เว็บไซต์ที่ดีไม่ใช่แค่สวยงาม แต่ต้องเป็น{" "}
              <span className="text-brand-primary">Digital Asset</span>{" "}
              ที่เติบโตและสร้างมูลค่าจริงให้คุณครับ"
            </blockquote>
            <div className="pt-6">
              <p className="text-brand-primary text-base font-black tracking-[0.3em] uppercase">
                {SITE_CONFIG.expert.displayName}
              </p>
              <p className="text-text-muted mt-1 text-xs font-bold tracking-widest uppercase opacity-60">
                {SITE_CONFIG.expert.jobTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. CONVERSION & FAQ */}
      <ConversionCTA
        title="สนใจยกระดับโปรเจกต์ของคุณไหมครับ?"
        description="ไม่ว่าจะเป็นการสร้างระบบใหม่หรือ Optimize ระบบเดิม ผมยินดีให้คำปรึกษาเชิงวิศวกรรมที่เน้นผลลัพธ์เป็นอันดับหนึ่งครับ"
        buttonLabel="คุยรายละเอียดโปรเจกต์"
      />

      <DynamicFAQ
        title="FAQ & Process"
        description="ข้อมูลประกอบการตัดสินใจและขั้นตอนการเริ่มงานร่วมกัน"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(BioTemplate);
