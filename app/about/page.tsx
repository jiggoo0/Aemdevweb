/**
 * [CORE PAGE]: ABOUT_US v17.0.2 (SPECIALIST_AUTHORITY_OPTIMIZED)
 * [STRATEGY]: Identity Authority | Strategic Trust | Partner-Centric Flow
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

/* 1. System Infrastructure & Engines */
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import HeroEngine from "@/components/templates/sections/HeroEngine";
import FeatureGrid from "@/components/templates/sections/FeatureGrid";
import { SITE_CONFIG } from "@/constants/site-config";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/seo";

/* 2. Shared Components: หลักฐานแห่งความสำเร็จและความใส่ใจ */
import TrustBadge from "@/components/shared/TrustBadge";
import ImpactStats from "@/components/shared/ImpactStats";
import ConversionCTA from "@/components/shared/ConversionCTA";
import JsonLd from "@/components/seo/JsonLd";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * [METADATA]: ปรับปรุงเพื่อสร้างความเชื่อมั่นตั้งแต่วินาทีแรกที่ค้นหา
 */
export const metadata: Metadata = {
  title: `ทำความรู้จักเราและความตั้งใจของเรา | ${SITE_CONFIG.brandName}`,
  description:
    "เบื้องหลังความสำเร็จของธุรกิจคุณ คือความตั้งใจของเราในการวางรากฐานเว็บไซต์ที่แข็งแกร่ง ปรึกษาแผนงาน SEO และเว็บเชิงยุทธศาสตร์กับ นายเอ็มซ่ามากส์ โดยตรง",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/about` },
};

export default function AboutPage() {
  /**
   * [SEO STRATEGY]: EEAT & Breadcrumb Injection
   */
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: `${SITE_CONFIG.siteUrl}` },
    { name: "เกี่ยวกับเรา", item: `${SITE_CONFIG.siteUrl}/about` },
  ]);

  const coreValues = [
    {
      title: "ระบบที่มั่นคงและไว้ใจได้",
      description:
        "เราเน้นวางรากฐานเว็บไซต์ให้แข็งแรง ปลอดภัย และใช้งานได้ยาวนาน เพื่อให้ธุรกิจของคุณเติบโตได้อย่างไร้กังวลครับ",
      icon: "ShieldCheck",
    },
    {
      title: "คุยกันตรงไปตรงมา",
      description:
        "ความโปร่งใสคือสิ่งสำคัญที่สุด เราแจ้งรายละเอียดการทำงานชัดเจนทุกขั้นตอน เพื่อให้คุณสบายใจและมั่นใจในงานที่ได้รับครับ",
      icon: "MessageCircle",
    },
    {
      title: "เทคโนโลยีระดับ Specialist",
      description:
        "เลือกใช้เครื่องมือที่ทันสมัยที่สุดเพื่อให้เว็บโหลดไวและรองรับ AI Search เพื่อให้ธุรกิจของคุณอยู่เหนือคู่แข่งเสมอครับ",
      icon: "Zap",
    },
  ];

  return (
    <LayoutEngine>
      {/* 00. SEARCH ENGINE INTELLIGENCE */}
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: ประกาศจุดยืนเชิงยุทธศาสตร์ */}
      <HeroEngine
        title={
          <>
            เราไม่ได้แค่รับทำเว็บไซต์
            <br />
            แต่เราช่วยคุณ <span className="text-brand-primary">"วางระบบทำเงิน"</span>
          </>
        }
        subtitle="จากประสบการณ์ในการพัฒนาเว็บและวางกลยุทธ์ SEO ผมเชื่อว่าเว็บไซต์ที่ดีต้องไม่ใช่แค่สวย แต่ต้องเป็นพนักงานขายที่เก่งที่สุดและทำงานแทนคุณได้ตลอด 24 ชั่วโมงครับ"
        primaryActionLabel="เริ่มวางแผนงานกับเรา"
        secondaryActionLabel="ดูผลงานที่ผ่านมา"
      />

      {/* 02. SPECIALIST NODE: ทำไมต้องเป็น "นายเอ็มซ่ามากส์" */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            {/* Visual Part */}
            <div className="relative mx-auto h-[400px] w-full max-w-[400px] md:h-[500px] md:max-w-[500px]">
              <div className="animate-pulse-slow bg-brand-primary/10 absolute inset-0 rounded-[3rem] blur-[80px]" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl">
                {/* Visual Placeholder for Expert Image */}
                <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-b from-transparent to-black/40">
                  <IconRenderer name="User" size={120} className="text-white/20" />
                  <div className="absolute right-10 bottom-10 left-10 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-xl">
                    <p className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                      Identity.Verified
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white italic">
                      {SITE_CONFIG.expert.displayName}
                    </h3>
                    <p className="text-xs font-medium text-gray-400">
                      {SITE_CONFIG.expert.role} // Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Part */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-block rounded-full border px-4 py-1.5 font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                  The Specialist Philosophy
                </span>
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
                  Technical Authority. <br />
                  Business Results.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                <p>
                  ผมชื่อ{" "}
                  <span className="font-bold text-white">"{SITE_CONFIG.expert.legalNameThai}"</span>{" "}
                  หรือที่พาร์ทเนอร์หลายท่านรู้จักในนาม{" "}
                  <span className="text-brand-primary font-bold">
                    "{SITE_CONFIG.expert.displayName}"
                  </span>{" "}
                  ครับ
                </p>
                <p>
                  แรงบันดาลใจในการสร้าง{" "}
                  <span className="font-bold text-white">{SITE_CONFIG.brandName}</span>{" "}
                  เกิดจากความตั้งใจที่จะลบภาพจำเดิมๆ ของการทำเว็บที่ใช้งานยากและไม่ได้ผลจริง
                  ผมจึงนำความเชี่ยวชาญด้าน <span className="text-white italic">Technical SEO</span>{" "}
                  และ <span className="text-white italic">Web Infrastructure</span>{" "}
                  มาหลอมรวมเป็นยุทธศาสตร์เดียว เพื่อสร้างอาวุธที่ทรงพลังที่สุดให้กับธุรกิจ SME
                  ไทยครับ
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="hover:border-brand-primary/30 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 transition-colors hover:bg-white/10">
                  <IconRenderer name="Code" size={16} className="text-brand-primary" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                    Clean Code
                  </span>
                </div>
                <div className="hover:border-brand-primary/30 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 transition-colors hover:bg-white/10">
                  <IconRenderer name="TrendingUp" size={16} className="text-brand-primary" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                    SEO Driven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. AUTHORITY LAYER: การันตีมาตรฐาน (Trust Signals) */}
      <section className="border-y border-white/5 bg-white/[0.02] py-24">
        <div className="container mx-auto px-4 text-center md:px-6">
          <p className="mb-16 font-mono text-[10px] font-black tracking-[0.5em] text-gray-500 uppercase">
            System Performance & Trust Authority
          </p>
          <div className="flex flex-col items-center gap-y-20">
            <TrustBadge />
            <div className="h-px w-full max-w-xs bg-white/10" />
            <ImpactStats />
          </div>
        </div>
      </section>

      {/* 04. PHILOSOPHY LAYER: เหตุผลที่เราแตกต่าง */}
      <FeatureGrid
        heading="ทำไมลูกค้าถึงเลือกเดินไปกับเรา"
        subheading="เพราะเราเชื่อว่าเว็บไซต์ที่ดีต้องมาพร้อมความเข้าใจในธุรกิจ เราจึงใส่ใจรายละเอียดทุกจุดเหมือนทำธุรกิจของตัวเองครับ"
        items={coreValues}
        columns={3}
      />

      {/* 05. VISION LAYER: พันธกิจเพื่อการเติบโตที่เท่าเทียม */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#050505] p-12 shadow-2xl md:p-24">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
            <div className="relative z-10 space-y-10 text-center">
              <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
                Empowering Your Future.
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed font-medium text-gray-400 md:text-xl">
                เป้าหมายสูงสุดของผมคือการสร้าง{" "}
                <span className="text-brand-primary font-bold">"โครงสร้างพื้นฐานดิจิทัล"</span>{" "}
                ที่แข็งแกร่งที่สุดในงบประมาณที่คุ้มค่า
                เพื่อให้เจ้าของธุรกิจทุกท่านสามารถโฟกัสกับการเติบโตได้อย่างเต็มที่
                โดยมีระบบที่ทรงพลังคอยสนับสนุนอยู่เบื้องหลังครับ
              </p>
              <div className="flex justify-center pt-6">
                <div className="bg-brand-primary h-1.5 w-32 animate-pulse rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. CALL TO ACTION */}
      <ConversionCTA
        title="เริ่มวางระบบธุรกิจของคุณให้ถูกต้องตั้งแต่วันนี้"
        description="ทักแชทคุยกับผมโดยตรงเพื่อวิเคราะห์แนวทางที่คุ้มค่าที่สุดสำหรับธุรกิจของคุณ ผมและทีมงานพร้อมเปลี่ยนทุกไอเดียให้กลายเป็นผลกำไรที่จับต้องได้ครับ"
        buttonLabel="ปรึกษาแผนงานฟรีกับเรา"
      />
    </LayoutEngine>
  );
}
