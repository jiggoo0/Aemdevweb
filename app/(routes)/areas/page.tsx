/**
 * [ROUTE PAGE]: LOCAL_HUB_SYSTEM v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Geographic Authority | Semantic Regional Nodes | Performance First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & Core Data ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import { constructMetadata } from "@/lib/seo-utils";
import AreaCard from "@/components/features/areas/AreaCard";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = constructMetadata({
  title: "พื้นที่ให้บริการและแผนงานรายจังหวัด | Regional Network",
  description:
    "วิศวกรรมการเข้าถึงกลุ่มเป้าหมายรายพื้นที่ด้วย Local SEO Specialist เจาะลึกความต้องการแต่ละภูมิภาคทั่วไทย",
  path: "/areas",
  keywords: [
    "รับทำเว็บไซต์รายจังหวัด",
    "Local SEO Thailand",
    "จ้างทำเว็บใกล้ฉัน",
    ...AREA_NODES.map((area) => `รับทำเว็บไซต์ ${area.province}`),
  ],
});

export default function AreasPage() {
  // [SCHEMA]: สร้างความสัมพันธ์ทางภูมิศาสตร์ให้ Search Engine เข้าใจโครงสร้างองค์กร
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
      { name: "พื้นที่ให้บริการ", item: `${SITE_CONFIG.siteUrl}/areas` },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:px-6 md:pt-48 md:pb-32">
        {/* --- 01. STRATEGIC HEADER --- */}
        <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
            <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
            <span>Regional_Network.v{SITE_CONFIG.project.version}</span>
          </div>

          <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Geographic <br /> <span className="text-brand-primary">Authority.</span>
          </h1>

          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
              เราวางโครงสร้างระบบที่สอดรับกับพฤติกรรมลูกค้าในแต่ละจังหวัด เพื่อสร้าง{" "}
              <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                "Digital Footprint"
              </span>{" "}
              ที่ทรงพลังที่สุดในระดับภูมิภาคครับ
            </p>
          </div>
        </header>

        {/* --- 02. AREA CARD GRID: Multi-Node Projection --- */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {AREA_NODES.map((node, index) => (
            <AreaCard key={node.slug} data={node} index={index} />
          ))}
        </section>

        {/* --- 03. CTA: NATIONWIDE EXPANSION --- */}
        <section className="border-border mt-32 border-t pt-24 text-center">
          <div className="mx-auto max-w-4xl space-y-12">
            <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Beyond_The_Nodes.
            </h3>
            <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85 md:text-2xl">
              พร้อมขยายฐานธุรกิจสู่พื้นที่ใหม่ทั่วประเทศ <br />
              ทีม Specialist ของเราพร้อมวางระบบ Local SEO ให้คุณทันที
            </p>

            <div className="flex justify-center pt-8">
              <Button
                asChild
                size="lg"
                variant="specialist"
                className="group h-20 w-full px-12 md:w-auto"
              >
                {/* [FIXED]: ใช้แท็ก <a> ร่วมกับ target="_blank" สำหรับลิงก์ภายนอก 
                  เพื่อแก้ปัญหา Next.js Typed Routes (Error TS2322)
                */}
                <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-4 text-[12px] font-black tracking-[0.2em] uppercase">
                    <IconRenderer name="MessageCircle" size={24} />
                    วิเคราะห์แผนงานรายพื้นที่
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </LayoutEngine>
  );
}
