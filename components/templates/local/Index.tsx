/**
 * [TEMPLATE COMPONENT]: LOCAL_AUTHORITY_ORCHESTRATOR v16.7 (GEO_SPECIFIC)
 * [STRATEGY]: Geographic Personalization | Visual Authority | Local SEO Excellence
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
import type { AreaNode } from "@/types";
import { generateLocalBusinessSchema } from "./Schema";

interface LocalTemplateProps {
  readonly data: AreaNode;
}

/**
 * @component LocalTemplate
 * @description หน้า Landing Page สำหรับพื้นที่ให้บริการ (Area Specific)
 * เน้นการสร้างความเชื่อมั่นให้คนในจังหวัดนั้นๆ และดันอันดับ SEO Local Pack
 */
function LocalTemplate({ data }: LocalTemplateProps) {
  const schema = generateLocalBusinessSchema(data);

  return (
    <LayoutEngine spacing="specialist">
      {/* 01. LOCAL SEO SIGNAL: บอก Google ว่าเราคือตัวจริงในพื้นที่นี้ */}
      <JsonLd data={schema} />

      {/* 02. HERO SECTION: ทักทายลูกค้าด้วยความเข้าใจในบริบทท้องถิ่น */}
      <HeroEngine
        title={
          <>
            บริการทำเว็บไซต์และ SEO <br className="hidden md:block" />
            <span className="text-brand-primary">จังหวัด{data.province}</span>
          </>
        }
        subtitle={data.longDescription || data.description}
        primaryActionLabel={`ปรึกษาแผนงานใน ${data.province}`}
        secondaryActionLabel="ดูผลงานที่ผ่านมา"
      />

      {/* 03. VISUAL AUTHORITY: ภาพลักษณ์ที่เข้าถึงง่ายแต่เป็นมืออาชีพ */}
      <section className="relative z-30 container mx-auto -mt-16 px-4 md:-mt-24 lg:-mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative mx-auto max-w-6xl"
        >
          {/* Ambient Glow */}
          <div className="bg-brand-primary/20 absolute -inset-4 rounded-[3rem] opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-60" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A] shadow-2xl md:rounded-[3rem] md:p-2">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
              <Image
                src={data.heroImage || "/images/templates/preview.webp"}
                alt={`บริการทำเว็บไซต์และ SEO ในจังหวัด ${data.province}`}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 md:bottom-10 md:left-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md">
                  <IconRenderer name="MapPin" className="text-brand-primary" size={24} />
                </div>
                <div>
                  <span className="text-brand-primary block text-[10px] font-bold tracking-widest uppercase">
                    Service Area
                  </span>
                  <span className="text-xl font-black tracking-tighter text-white uppercase">
                    {data.province}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 04. LOCAL TRUST: ยืนยันมาตรฐานเดียวกันทั่วประเทศ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase">
                National Standard, Local Care
              </h3>
              <h2 className="text-3xl font-black text-white uppercase md:text-5xl">
                มาตรฐานสากล <br />
                <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                  เพื่อธุรกิจใน {data.province}
                </span>
              </h2>
            </div>
            <ImpactStats />
            <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* 05. DISTRICT COVERAGE: พื้นที่ให้บริการย่อย */}
      <section className="border-y border-white/5 bg-white/[0.02] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center gap-4 opacity-80">
            <IconRenderer name="Navigation" size={20} className="text-brand-primary" />
            <h3 className="text-lg font-bold tracking-widest text-white uppercase">
              พื้นที่ให้บริการใน {data.province}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {(data.districts || []).map((district, idx) => (
              <span
                key={idx}
                className="hover:border-brand-primary/50 hover:text-brand-primary inline-flex cursor-default items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm text-gray-300 transition-colors"
              >
                {district}
              </span>
            ))}
            <span className="inline-flex items-center rounded-full border border-dashed border-white/20 px-6 py-2 text-sm text-gray-500">
              และพื้นที่ใกล้เคียง
            </span>
          </div>
        </div>
      </section>

      {/* 06. SERVICE SOLUTIONS: สิ่งที่เราจะทำให้ธุรกิจคุณ */}
      <FeatureGrid
        heading={`ยกระดับธุรกิจใน ${data.province}`}
        subheading={`เราเข้าใจตลาดในพื้นที่ ${data.province} ดีกว่าใคร พร้อมเครื่องมือที่จะช่วยให้คุณแซงหน้าคู่แข่งในท้องถิ่นได้ทันที`}
        items={[
          {
            title: "Local SEO Dominance",
            description: `ทำให้คนใน ${data.province} ค้นหาเจอร้านคุณเป็นที่แรกใน Google Maps`,
            icon: "Map",
            category: "การค้นหาในพื้นที่",
          },
          {
            title: "High-Speed Website",
            description: "เว็บโหลดไว รองรับมือถือ 100% ลูกค้าเข้าถึงได้ทุกที่ทุกเวลา",
            icon: "Smartphone",
            category: "ประสบการณ์ผู้ใช้",
          },
          {
            title: "Conversion Focused",
            description: "ดีไซน์ที่เน้นให้คนโทรหา หรือทักแชทสอบถามทันทีที่เข้าเว็บ",
            icon: "MessageCircle",
            category: "ยอดขาย",
          },
        ]}
        columns={3}
      />

      {/* 07. CALL TO ACTION */}
      <ConversionCTA
        title={`พร้อมขยายฐานลูกค้าใน ${data.province} หรือยังครับ?`}
        description={`อย่าปล่อยให้ลูกค้าในพื้นที่หลุดมือไปหาคู่แข่ง ปรึกษาผมเพื่อวางระบบให้ธุรกิจของคุณเป็นเบอร์ 1 ใน ${data.province} วันนี้เลยครับ`}
        buttonLabel="ขอคำปรึกษาฟรี"
        className="bg-surface-offset"
      />

      {/* 08. FAQ (Generated from Keywords) */}
      <DynamicFAQ
        title={`คำถามที่พบบ่อยสำหรับลูกค้า ${data.province}`}
        description="ข้อมูลสำคัญที่คุณควรรู้ก่อนเริ่มงาน"
        items={(data.keywords || []).map((kw) => ({
          question: `บริการ ${kw} ราคาเริ่มต้นเท่าไหร่?`,
          answer: `สำหรับบริการ ${kw} ในพื้นที่${data.province} ทางเรามีแพ็กเกจที่ยืดหยุ่น เริ่มต้นเพียงหลักพัน พร้อมระบบที่รองรับการเติบโตในอนาคตครับ`,
        }))}
      />
    </LayoutEngine>
  );
}

export default memo(LocalTemplate);
