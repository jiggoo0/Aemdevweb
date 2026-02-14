/**
 * [TEMPLATE COMPONENT]: BIO_IDENTITY_ORCHESTRATOR v17.9.105 (THEME_INJECTED)
 * [STRATEGY]: Identity Graphing | CSS Variable Synergy | Zero-Any Policy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- 1. Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { SITE_CONFIG } from "@/constants/site-config";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- 2. Shared Components ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface BioTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

function BioTemplate({ data, suppressUI = false }: BioTemplateProps) {
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  const socialLinks = useMemo(
    () => [
      { name: "Github", href: SITE_CONFIG.links.github, icon: "Github" as IconName },
      { name: "Facebook", href: SITE_CONFIG.links.facebook, icon: "Facebook" as IconName },
      { name: "Line", href: SITE_CONFIG.links.line, icon: "MessageCircle" as IconName },
    ],
    [],
  );

  return (
    <>
      <JsonLd data={schema} />

      {/* [NOTE]: ไม่ต้องมี <main> และพื้นหลังที่นี่ 
        เพราะ DynamicThemeWrapper (จาก TemplateRenderer) จัดการให้แล้ว 
      */}
      <LayoutEngine spacing="specialist">
        {!suppressUI && (
          <HeroEngine
            title={
              <span className="block font-black italic">
                <span className="mb-3 block font-mono text-lg tracking-[0.4em] text-[var(--brand-primary)] uppercase opacity-80 md:text-2xl">
                  {SITE_CONFIG.expert.jobTitle}
                </span>
                {SITE_CONFIG.expert.displayName}
              </span>
            }
            subtitle={data.description}
            primaryActionLabel="ปรึกษาแผนงานกับผมโดยตรง"
            primaryHref={SITE_CONFIG.links.line}
            secondaryActionLabel="Case Studies"
            secondaryHref="/case-studies"
            align="left"
          />
        )}

        {/* Profile Visual Node */}
        <section className="relative z-30 container mx-auto -mt-12 px-4 md:-mt-24 lg:-mt-32">
          <div className="group relative mx-auto max-w-5xl">
            {/* Ambient Glow using CSS Var */}
            <div className="absolute -inset-10 rounded-[5rem] bg-[var(--brand-primary)] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-20" />

            <div className="relative overflow-hidden rounded-[3rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl md:rounded-[4rem] md:p-4">
              {/* Social Bars */}
              <div className="absolute top-8 right-8 z-20 hidden items-center gap-3 md:flex">
                {socialLinks.map(
                  (socialItem) =>
                    socialItem.href && (
                      <a
                        key={socialItem.name}
                        href={socialItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--foreground)]/10 bg-[var(--background)]/40 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[var(--brand-primary)] hover:text-white"
                      >
                        <IconRenderer name={socialItem.icon} size={20} />
                      </a>
                    ),
                )}
              </div>

              <div
                className="relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
                style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/9" }}
              >
                <Image
                  src={data.image || "/images/experts/profile-hero.webp"}
                  alt={`Digital Authority: ${SITE_CONFIG.expert.displayName}`}
                  fill
                  priority
                  placeholder={imgData ? "blur" : "empty"}
                  blurDataURL={imgData?.blurDataURL}
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Price Floater */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -right-6 -bottom-6 z-20 hidden items-center gap-6 rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--background)]/90 px-10 py-8 shadow-2xl backdrop-blur-xl md:flex"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/10">
                <IconRenderer name="UserCheck" className="text-[var(--brand-primary)]" size={28} />
              </div>
              <div>
                <p className="font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                  {data.regionalPricing
                    ? `Start: ${data.regionalPricing.startPrice}`
                    : "Verified_Expert"}
                </p>
                <p className="text-2xl leading-none font-black tracking-tighter uppercase italic">
                  Active_Now
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 text-center">
            <ImpactStats />
            <div className="mx-auto my-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[var(--foreground)]/10 to-transparent" />
            <TrustBadge />
          </div>
        </section>

        {/* Capability Grid */}
        <FeatureGrid
          heading="Professional Mastery"
          subheading="ทักษะที่ผมใช้ขับเคลื่อนความสำเร็จให้โครงการระดับ Enterprise"
          items={(data.coreFeatures || []).map((feat, idx) => ({
            title: feat.title,
            description: feat.description,
            icon: feat.icon as IconName,
            technicalDetail: `EXP_NODE_0${idx + 1}`,
          }))}
          columns={2}
        />

        {/* Narrative Quote */}
        <section className="border-y border-[var(--foreground)]/10 bg-[var(--foreground)]/5 py-32">
          <div className="container mx-auto px-4 text-center">
            <IconRenderer
              name="Quote"
              size={40}
              className="mx-auto mb-10 text-[var(--brand-primary)] opacity-40"
            />
            <blockquote className="text-2xl leading-tight font-black italic md:text-5xl">
              "ในยุคของ AI, เว็บไซต์ที่ดีคือสินทรัพย์ <br className="hidden md:block" />
              <span className="text-[var(--brand-primary)]">ที่พิสูจน์ความจริง</span>{" "}
              ได้ทรงพลังที่สุด"
            </blockquote>
            <p className="mt-8 font-mono text-sm font-black tracking-widest text-[var(--foreground)] uppercase opacity-60">
              — {SITE_CONFIG.expert.displayName}
            </p>
          </div>
        </section>

        <ConversionCTA
          title="เริ่มปั้นแบรนด์บุคคลของคุณให้เป็นสินทรัพย์วันนี้"
          description="ปรึกษาแนวทางการวางรากฐาน Digital Identity ของคุณกับผมได้โดยตรง"
          buttonLabel="จองคิววิเคราะห์โปรไฟล์"
        />

        <DynamicFAQ
          title="Expert FAQ"
          description="ข้อมูลประกอบการตัดสินใจและการเตรียมตัวก่อนเริ่มงาน"
          items={data.faqs || []}
        />
      </LayoutEngine>
    </>
  );
}

export default memo(BioTemplate);
