"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/features/landing/Hero";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import DynamicFAQ from "@/components/templates/sections/DynamicFAQ";
import TrustBadge from "@/components/shared/TrustBadge";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";
import ImpactStats from "@/components/shared/ImpactStats";
import type { TemplateMasterData } from "@/types";
import { generateCorporateSchema } from "./Schema";

interface CorporateTemplateProps {
  readonly data: TemplateMasterData;
}

function CorporateTemplate({ data }: CorporateTemplateProps) {
  const schema = generateCorporateSchema(data);

  return (
    <LayoutEngine spacing="specialist" theme={data.theme}>
      <JsonLd data={schema} />

      {/* [FIX]: Updated Props to match HeroEngine interface */}
      <HeroEngine
        title={data.title}
        subtitle={data.description}
        primaryActionLabel="ทักแชทปรึกษาแผนงาน Enterprise"
        primaryHref="/contact"
        secondaryActionLabel="ดูมาตรฐาน Security"
        secondaryHref="#security"
      />

      {/* ... (ส่วนอื่นๆ ของ Code คงเดิม) ... */}
      <section className="relative z-30 container mx-auto -mt-24 px-4 md:-mt-40">
        <div className="group relative mx-auto max-w-7xl">
          <div className="bg-brand-primary/10 will-change-opacity absolute -inset-10 rounded-[4rem] opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-[var(--ambient-opacity,0.4)]" />
          <div className="bg-surface-main relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl md:rounded-[4rem] md:p-4">
            <div className="absolute top-8 right-8 z-20 hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-950/30 px-4 py-1.5 backdrop-blur-md md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">
                System Secure
              </span>
            </div>
            <div className="bg-surface-offset relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem]">
              <Image
                src={data.image || "/images/templates/preview.webp"}
                alt={`Enterprise System Architecture: ${data.title}`}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />
              <div className="from-surface-main absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border-border bg-surface-card/90 absolute -bottom-8 left-8 z-20 hidden items-center gap-4 rounded-[2rem] border px-8 py-6 shadow-2xl backdrop-blur-xl md:flex"
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

      <section className="py-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 text-center">
            <header className="space-y-4">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                <IconRenderer name="Database" size={14} />
                Infrastructure Reliability
              </div>
              <h2 className="text-text-primary text-3xl font-black tracking-tighter uppercase md:text-5xl">
                {data.clientTrust || "Trusted by Leading Organizations"}
              </h2>
            </header>
            <ImpactStats />
            <div className="via-border h-px w-full max-w-2xl bg-gradient-to-r from-transparent to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      <FeatureGrid
        heading="Enterprise Solutions"
        subheading="โครงสร้างระบบที่ถูกออกแบบมาเพื่อรองรับการขยายตัว (Scalability) และความปลอดภัย (Security) สูงสุด"
        items={(data.coreFeatures || []).map((feat) => ({
          title: feat.title,
          description: feat.description,
          icon: feat.icon,
          technicalDetail: "System Module",
        }))}
        columns={2}
      />

      <article id="security" className="border-border bg-surface-offset/30 border-y py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <header>
                <h3 className="text-text-primary text-3xl font-black tracking-tight uppercase italic md:text-4xl">
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
                  <li
                    key={i}
                    className="text-text-secondary flex items-center gap-3 font-bold italic"
                  >
                    <IconRenderer name="CheckCircle" className="text-brand-primary" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md lg:ml-auto">
              <div className="bg-brand-primary/10 absolute inset-0 animate-pulse rounded-full blur-3xl" />
              <div className="border-border bg-surface-card/40 shadow-glow relative flex h-full w-full items-center justify-center rounded-3xl border p-8 backdrop-blur-sm">
                <IconRenderer name="Shield" size={120} className="text-brand-primary opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="text-brand-primary animate-pulse font-mono text-[10px] font-black tracking-widest uppercase">
                    Secure_Node_Active
                  </span>
                  <div className="bg-brand-primary h-1 w-20 rounded-full opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ConversionCTA
        title="พร้อมยกระดับโครงสร้างดิจิทัลขององค์กรหรือยังครับ?"
        description="ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและออกแบบระบบที่ตอบโจทย์วิสัยทัศน์ขององค์กรคุณอย่างตรงจุด"
        buttonLabel="นัดปรึกษาแผนงาน Enterprise"
      />

      <DynamicFAQ
        title="คำถามที่พบบ่อยสำหรับองค์กร"
        description="ข้อมูลด้านมาตรฐาน SLA และการซัพพอร์ตระดับ Specialist"
        items={data.faqs}
      />
    </LayoutEngine>
  );
}

export default memo(CorporateTemplate);
