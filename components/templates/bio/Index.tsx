/**
 * [TEMPLATE COMPONENT]: BIO_IDENTITY_ORCHESTRATOR v17.9.100 (STRICT_MODE)
 * [STRATEGY]: Identity Graphing | E-E-A-T Validation | Zero-Any Policy
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
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer"; // [FIX]: Import IconName
import ImpactStats from "@/components/shared/ImpactStats";

// --- 3. Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface BioTemplateProps {
  readonly data: UniversalTemplateProps; // [FIX]: ใช้ Universal Type เพื่อความยืดหยุ่น
  readonly suppressUI?: boolean;
}

function BioTemplate({ data, suppressUI = false }: BioTemplateProps) {
  // [SEO_SCHEMA]: ใช้ Universal Generator ตัวเดียวกับเทมเพลตอื่น
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [SAFETY]: Image Blur Data Validation แบบ Type-Safe
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  // [DATA_ADAPTER]: ดึงข้อมูลเสริมผ่าน Universal Props (ไม่ต้อง Cast Type มั่ว)
  const pricing = data.regionalPricing;
  const social = data.socialProof;

  // [SOCIAL_LINKS]: สร้างรายการโซเชียลพร้อม IconName ที่ถูกต้อง
  const socialLinks = useMemo(
    () => [
      {
        name: "Github",
        href: SITE_CONFIG.links.github,
        icon: "Github" as IconName,
      },
      {
        name: "Facebook",
        href: SITE_CONFIG.links.facebook,
        icon: "Facebook" as IconName,
      },
      // [FIX]: ใช้ MessageCircle แทน Line เพราะใน IconMap ไม่มี Line icon ตรงๆ
      {
        name: "Line",
        href: SITE_CONFIG.links.line,
        icon: "MessageCircle" as IconName,
      },
    ],
    [],
  );

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {!suppressUI && (
        <HeroEngine
          title={
            <span className="block font-black italic">
              <span className="text-brand-primary mb-3 block font-mono text-lg tracking-[0.4em] uppercase opacity-80 md:text-2xl">
                {SITE_CONFIG.expert.jobTitle}
              </span>
              {SITE_CONFIG.expert.displayName}
            </span>
          }
          subtitle={data.description}
          // [SYNCED]: ใช้ Prop แบบแยก (Legacy Safe Mode)
          primaryActionLabel="ปรึกษาแผนงานกับผมโดยตรง"
          primaryHref={SITE_CONFIG.links.line}
          secondaryActionLabel="Case Studies"
          secondaryHref="/case-studies"
          align="left"
        />
      )}

      {/* Main Profile Node: The Authority Visual */}
      <section className="relative z-30 container mx-auto -mt-12 px-4 md:-mt-24 lg:-mt-32">
        <div className="group relative mx-auto max-w-5xl">
          <div className="bg-brand-primary/10 absolute -inset-10 rounded-[5rem] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-40" />

          <div className="bg-surface-card border-border relative overflow-hidden rounded-[3rem] border shadow-2xl md:rounded-[4rem] md:p-4">
            {/* Social Floating Bars */}
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-3 md:flex">
              {socialLinks.map(
                (socialItem) =>
                  socialItem.href && (
                    <a
                      key={socialItem.name}
                      href={socialItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-surface-main/40 border-border hover:bg-brand-primary flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:text-white"
                    >
                      <IconRenderer name={socialItem.icon} size={20} />
                    </a>
                  ),
              )}
            </div>

            <div
              className="bg-surface-offset gpu-layer relative w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem]"
              style={{
                // [ASPECT_RATIO]: ใช้ข้อมูลจริงจาก Blur Data หรือ Default 16:9
                aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/9",
              }}
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
              <div className="from-surface-card absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floater: Pricing & Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-card/90 border-border shadow-glow absolute -right-6 -bottom-6 z-20 hidden items-center gap-6 rounded-[2.5rem] border px-10 py-8 backdrop-blur-xl md:flex"
          >
            <div className="bg-brand-primary/10 border-brand-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border">
              {/* [FIX]: ใช้ UserCheck ที่มีใน IconMap */}
              <IconRenderer name="UserCheck" className="text-brand-primary" size={28} />
            </div>
            <div>
              <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
                {pricing ? `Start: ${pricing.startPrice}` : "Verified_Expert"}
              </p>
              <p className="text-text-primary text-2xl leading-none font-black tracking-tighter uppercase italic">
                Active_Now
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Matrix & Impact */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <ImpactStats />

          {social && (
            <div className="mt-12 flex flex-col items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <IconRenderer key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
              <span className="text-text-muted text-[10px] font-black tracking-widest uppercase">
                Expert Authority: {social.rating}/5 ({social.reviewCount} Client Reviews)
              </span>
            </div>
          )}

          <div className="via-border mx-auto my-16 h-px w-full max-w-4xl bg-gradient-to-r from-transparent to-transparent" />
          <TrustBadge />
        </div>
      </section>

      {/* [FEATURE_GRID]: Explicit Mapping for Type Safety */}
      <FeatureGrid
        heading="Professional Mastery"
        subheading="ทักษะที่ผมใช้ขับเคลื่อนความสำเร็จให้โครงการระดับ Enterprise"
        items={(data.coreFeatures || []).map((feat, idx) => ({
          title: feat.title,
          description: feat.description,
          icon: feat.icon as IconName, // [FIX]: Explicit Cast เพื่อยืนยันกับ TS
          technicalDetail: `EXP_NODE_0${idx + 1}`,
        }))}
        columns={2}
      />

      {/* Personal Narrative / Quote */}
      <section className="border-border bg-surface-offset/40 border-y py-32">
        <div className="container mx-auto px-4 text-center">
          <IconRenderer
            name="Quote"
            size={40}
            className="text-brand-primary mx-auto mb-10 opacity-40"
          />
          <blockquote className="text-text-primary text-2xl leading-tight font-black italic md:text-5xl">
            "ในยุคของ AI, เว็บไซต์ที่ดีคือสินทรัพย์ <br className="hidden md:block" />
            <span className="text-brand-primary">ที่พิสูจน์ความจริง</span> ได้ทรงพลังที่สุด"
          </blockquote>
          <p className="text-text-muted mt-8 font-mono text-sm font-black tracking-widest uppercase opacity-60">
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
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(BioTemplate);
