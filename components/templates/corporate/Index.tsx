/**
 * [TEMPLATE COMPONENT]: CORPORATE_SYSTEM_ORCHESTRATOR v17.9.105 (THEME_INJECTED)
 * [STRATEGY]: Outcome-Driven Architecture | Dynamic Theme Engine | Performance-Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import type { CSSProperties } from "react";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";

// --- Shared Nodes ---
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";

// --- Logic & Types ---
import type { UniversalTemplateProps } from "@/types";
import { generateUniversalSchema } from "@/lib/schema";

interface CorporateTemplateProps {
  readonly data: UniversalTemplateProps;
  readonly suppressUI?: boolean;
}

const CorporateTemplate = ({ data, suppressUI: _suppressUI = false }: CorporateTemplateProps) => {
  // [SEO]: Schema Graph
  const schema = useMemo(() => generateUniversalSchema(data), [data]);

  // [THEME_ENGINE]: แปลง Hex Config เป็น CSS Variables สำหรับ Tailwind v4
  const themeStyles = useMemo(() => {
    return {
      "--primary": data.theme?.primary || "#2563eb",
      "--background": data.theme?.background || "#ffffff",
      "--foreground": data.theme?.foreground || "#0f172a",
      "--accent": data.theme?.accent || data.theme?.primary,
    } as CSSProperties;
  }, [data.theme]);

  // [IMAGE_SAFETY]: Type-Safe Blur Data
  const imgKey = data.image as keyof typeof IMAGE_BLUR_DATA;
  const imgData = data.image && IMAGE_BLUR_DATA[imgKey] ? IMAGE_BLUR_DATA[imgKey] : null;

  return (
    // [ROOT_WRAPPER]: Inject Variables ที่นี่ เพื่อให้ Child ทั้งหมดนำไปใช้ได้
    <main
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300"
      style={themeStyles}
    >
      <LayoutEngine spacing="specialist">
        <JsonLd data={schema} />

        {/* 01. Hero Section */}
        <HeroEngine
          title={data.title}
          subtitle={data.description}
          primaryActionLabel="ปรึกษาแผนงานระดับ Enterprise"
          primaryHref="#contact"
          secondaryActionLabel="Infrastructure Audit"
          secondaryHref="#security"
          align="left"
        />

        {/* 02. Featured Image Section */}
        <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
          <div className="group relative mx-auto max-w-7xl">
            {/* Ambient Glow: ใช้ var(--primary) แทนสีตายตัว */}
            <div className="absolute -inset-10 rounded-[4rem] bg-[var(--primary)] opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-20" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--background)] shadow-2xl md:rounded-[4rem] md:p-4">
              {/* Image Container */}
              <div
                className="relative w-full overflow-hidden rounded-[2rem] bg-gray-100 md:rounded-[3rem]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Price/Trust Node */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 left-8 z-20 hidden items-center gap-5 rounded-[2.5rem] border border-[var(--foreground)]/10 bg-[var(--background)]/90 px-10 py-8 shadow-2xl backdrop-blur-xl md:flex"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/10">
                <IconRenderer name="ShieldCheck" className="text-[var(--primary)]" size={28} />
              </div>
              <div>
                <span className="block font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-50">
                  Investment_Value
                </span>
                <span className="text-2xl font-black tracking-tighter uppercase italic">
                  {data.priceValue ? `฿${data.priceValue.toLocaleString()}` : "Enterprise_Grade"}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 03. Trust & Impact */}
        <section className="py-24 md:pt-48">
          <div className="container mx-auto px-4 text-center">
            <header className="mb-20 space-y-6">
              <span className="font-mono text-xs font-black tracking-[0.5em] text-[var(--primary)] uppercase">
                Reliability_Signals
              </span>
              <h2 className="text-4xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
                {data.clientTrust || "High-Stake Digital Solutions"}
              </h2>
            </header>
            <ImpactStats />
            <div className="mx-auto my-20 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[var(--foreground)]/20 to-transparent" />
            <TrustBadge />
          </div>
        </section>

        {/* 04. Capabilities */}
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

        {/* 05. Security Section */}
        <article
          id="security"
          className="border-y border-[var(--foreground)]/10 bg-[var(--primary)]/5 py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="font-mono text-xs font-black tracking-widest text-[var(--primary)] uppercase">
                    Security_Protocol
                  </span>
                  <h3 className="text-5xl leading-[0.85] font-black uppercase italic md:text-6xl">
                    Stability, Security <br /> & Compliance.
                  </h3>
                </div>
                <p className="text-xl leading-relaxed font-medium italic opacity-85">
                  เราวางโครงสร้างพื้นฐานโดยยึดหลัก Zero-Trust Architecture
                  เพื่อให้มั่นใจว่าข้อมูลองค์กรของคุณจะปลอดภัย พร้อมรองรับมาตรฐาน PDPA
                </p>
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    "PDPA Compliance Ready",
                    "TLS 1.3 Encryption",
                    "Infrastructure Security",
                    "Disaster Recovery Plan",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold italic">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/10">
                        <IconRenderer
                          name="CheckCircle"
                          className="text-[var(--primary)]"
                          size={16}
                        />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Node */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 animate-pulse rounded-full bg-[var(--primary)]/20 blur-[120px]" />
                <div className="relative flex aspect-square w-full items-center justify-center rounded-[4rem] border border-[var(--foreground)]/10 bg-[var(--background)]/40 backdrop-blur-md">
                  <IconRenderer
                    name="Shield"
                    size={160}
                    className="text-[var(--primary)] opacity-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* 06. CTA & FAQ */}
        <ConversionCTA
          title="พร้อมสร้างรากฐานที่มั่นคงให้ธุรกิจของคุณหรือยัง?"
          description="ปรึกษาแผนงานระดับ Enterprise เพื่อประสิทธิภาพสูงสุด"
          buttonLabel="คุยรายละเอียดกับทีม Specialist"
        />

        <DynamicFAQ
          title="Enterprise Technical FAQ"
          description="รายละเอียดเทคโนโลยีและมาตรฐานการทำงาน"
          items={data.faqs || []}
        />
      </LayoutEngine>
    </main>
  );
};

export default memo(CorporateTemplate);
