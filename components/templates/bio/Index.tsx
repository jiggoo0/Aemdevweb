/**
 * [TEMPLATE COMPONENT]: BIO_IDENTITY_ORCHESTRATOR v16.7 (PERSONAL_BRANDING)
 * [STRATEGY]: Identity Architecture | Personal Authority | High-Fidelity Flow
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
import { generateBioSchema } from "./Schema";
import { SITE_CONFIG } from "@/constants/site-config";

interface BioTemplateProps {
  readonly data: TemplateMasterData;
}

/**
 * @component BioTemplate
 * @description หน้าแนะนำตัวและ Portfolio (Personal Branding)
 * ออกแบบมาเพื่อสร้างความน่าเชื่อถือ (Trust) และโชว์ศักยภาพ (Authority) ของผู้เชี่ยวชาญ
 */
function BioTemplate({ data }: BioTemplateProps) {
  const schema = generateBioSchema(data);

  return (
    <LayoutEngine spacing="specialist">
      {/* 01. SEO SIGNAL: ยืนยันตัวตนผู้เชี่ยวชาญ */}
      <JsonLd data={schema} />

      {/* 02. IDENTITY HERO: แนะนำตัวอย่างเป็นทางการ */}
      <HeroEngine
        title={
          <>
            <span className="text-brand-primary mb-2 block font-mono text-lg tracking-widest uppercase md:text-2xl">
              {SITE_CONFIG.expert.jobTitle}
            </span>
            {SITE_CONFIG.expert.displayName}
          </>
        }
        subtitle={data.description}
        primaryActionLabel="ทักแชทปรึกษาผมได้เลย"
        secondaryActionLabel="ดูผลงานที่ผ่านมา"
      />

      {/* 03. IDENTITY VISUAL: ภาพลักษณ์มืออาชีพ */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="group relative mx-auto max-w-5xl"
        >
          {/* Ambient Aura */}
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0A0A0A] shadow-2xl md:rounded-[4rem] md:p-4">
            {/* Social Links Badge */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 md:flex">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <IconRenderer name="Github" className="text-white" size={20} />
              </a>
              <a
                href={SITE_CONFIG.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <IconRenderer name="Facebook" className="text-white" size={20} />
              </a>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem] bg-gray-900 md:aspect-[21/9] md:rounded-[3.5rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Personal Portfolio: ${SITE_CONFIG.expert.displayName}`}
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Status Badge: Available for Work */}
          <div className="absolute right-10 -bottom-10 z-20 hidden items-center gap-6 rounded-[2.5rem] border border-white/10 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-xl md:flex">
            <div className="bg-brand-primary/10 border-brand-primary/20 relative flex h-14 w-14 items-center justify-center rounded-2xl border">
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary relative inline-flex h-3 w-3 rounded-full"></span>
              </span>
              <IconRenderer name="UserCheck" className="text-brand-primary" size={28} />
            </div>
            <div className="space-y-1">
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                Status
              </p>
              <p className="text-xl leading-none font-black tracking-tighter text-white uppercase italic">
                Available for Hire
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 04. AUTHORITY STRIP: ความน่าเชื่อถือ */}
      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12 space-y-4">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
              <IconRenderer name="Award" size={14} />
              Certified Specialist
            </div>
            <h2 className="text-3xl font-black text-white uppercase md:text-5xl">
              My Professional Standards
            </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            <ImpactStats />
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. EXPERTISE GRID: ทักษะและความเชี่ยวชาญ */}
      <FeatureGrid
        heading="Core Expertise"
        subheading="ทักษะและเครื่องมือที่ผมเชี่ยวชาญ พร้อมนำมาปรับใช้เพื่อยกระดับธุรกิจของคุณ"
        items={(data.coreFeatures || []).map((feat, idx) => ({
          title: feat.title,
          description: feat.description,
          icon: feat.icon,
          category: `SKILL_SET: 0${idx + 1}`,
          technicalDetail: "Pro Level",
        }))}
        columns={3}
      />

      {/* 06. PHILOSOPHY: แนวคิดการทำงาน (New Section) */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <IconRenderer name="Quote" size={48} className="text-brand-primary/20 mx-auto" />
            <blockquote className="text-2xl leading-relaxed font-medium text-white italic md:text-4xl">
              "ผมเชื่อว่าเว็บไซต์ที่ดี ไม่ใช่แค่สวยงาม
              แต่ต้องเป็นเครื่องมือที่ทรงพลังที่สุดในการสร้างโอกาสทางธุรกิจให้กับคุณครับ"
            </blockquote>
            <div className="pt-4">
              <p className="text-brand-primary text-sm font-bold tracking-widest uppercase">
                {SITE_CONFIG.expert.displayName}
              </p>
              <p className="mt-1 text-xs text-gray-500">{SITE_CONFIG.expert.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. CONVERSION CTA */}
      <ConversionCTA
        title="สนใจร่วมงานกับผู้เชี่ยวชาญไหมครับ?"
        description="การทำงานกับผมจะช่วยให้คุณประหยัดเวลาและได้ผลลัพธ์ที่ตรงจุด ผมยินดีให้คำปรึกษาและออกแบบแผนงานที่เหมาะกับธุรกิจคุณโดยเฉพาะครับ"
        buttonLabel="แอดไลน์คุยกับผม"
        className="bg-surface-offset"
      />

      {/* 08. FAQ */}
      <DynamicFAQ
        title="คำถามที่พบบ่อย"
        description="ข้อมูลเบื้องต้นเกี่ยวกับกระบวนการจ้างงานและการร่วมงาน"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(BioTemplate);
