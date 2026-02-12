/**
 * [ROUTE PAGE]: CASE_STUDIES_HUB_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Social Proof Authority | Grid-Optimization | Strategic Branding
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import CaseStudyCard from "@/components/features/case-studies/CaseStudyCard";
import IconRenderer from "@/components/ui/IconRenderer";

/* [METADATA]: เพิ่มความแข็งแกร่งด้าน SEO ให้หน้า Hub */
export const metadata: Metadata = constructMetadata({
  title: "ผลงานและความสำเร็จของเรา | Case Studies",
  description:
    "เจาะลึกเบื้องหลังความสำเร็จของโปรเจกต์ต่างๆ ตั้งแต่เว็บโรงงาน ไปจนถึงระบบ E-commerce ขนาดใหญ่ พัฒนาด้วยมาตรฐานสูงสุด",
  path: "/case-studies",
  image: "/images/og-case-studies.webp",
});

export default async function CaseStudiesPage() {
  const cases = await getAllCaseStudies();

  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงานทั้งหมด", item: "/case-studies" },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-24 transition-colors duration-500 md:px-6 md:pt-48 md:pb-32">
        {/* --- Header Section: Authority Positioning --- */}
        <header className="mb-24 max-w-4xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
            <IconRenderer name="Briefcase" size={14} />
            <span>Project_Success_Ref.v17.4.5</span>
          </div>
          <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Proven <br /> <span className="text-brand-primary">Success.</span>
          </h1>
          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="text-text-secondary max-w-2xl text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
              ความสำเร็จของลูกค้าคือตัวชี้วัดคุณภาพของเรา เราเน้นสร้างผลลัพธ์ที่จับต้องได้จริง
              ผ่านกระบวนการวิศวกรรมที่แม่นยำครับ
            </p>
          </div>
        </header>

        {/* --- Case Grid: Optimized Rendering Pipeline --- */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {cases.map((item, index) => (
            <CaseStudyCard key={item.slug} data={item} index={index} />
          ))}
        </div>
      </main>
    </LayoutEngine>
  );
}
