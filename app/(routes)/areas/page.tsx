/**
 * [ROUTE PAGE]: LOCAL_HUB_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Geographic Authority | Semantic Regional Nodes | Performance First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

// --- 1. Infrastructure & Core Data ---
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import { constructMetadata } from "@/lib/seo-utils";
import AreaCard from "@/components/features/areas/AreaCard";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// --- 2. SEO & Schema Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

/* [A] SEO AUTHORITY PROTOCOL: วางรากฐาน Keyword รายจังหวัดระดับ Macro */
export const metadata: Metadata = constructMetadata({
  title: "พื้นที่ให้บริการและแผนงานรายจังหวัด | Regional Network",
  description:
    "วางรากฐานระบบเว็บไซต์ที่ออกแบบมาเพื่อเข้าถึงลูกค้าในแต่ละพื้นที่โดยเฉพาะ ด้วยกลยุทธ์ Local SEO ระดับ Specialist จาก AEMDEVWEB",
  path: "/areas",
  keywords: [
    "รับทำเว็บไซต์รายจังหวัด",
    "SEO ท้องถิ่น",
    "Local SEO Thailand",
    "จ้างทำเว็บใกล้ฉัน",
    ...AREA_NODES.map((area) => `รับทำเว็บไซต์ ${area.province}`),
  ],
});

/**
 * @page AreasPage
 * @description หน้าศูนย์รวมโหนดพื้นที่ให้บริการ (Geographic Hub) ที่เน้นการสร้างความเชื่อใจระดับภูมิภาค
 */
export default function AreasPage() {
  // 1. [SEO]: สร้าง Graph สำหรับโครงสร้างทางภูมิศาสตร์ขององค์กร
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "พื้นที่ให้บริการ", item: "/areas" },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:px-6 md:pt-48 md:pb-32">
        {/* --- 01. STRATEGIC HEADER: Regional Identity --- */}
        <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
          {/* Node Badge: ยืนยันสถานะระบบ */}
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
            <span>Regional_Network.v{SITE_CONFIG.project.version}</span>
          </div>

          <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Geographic <br /> <span className="text-brand-primary">Authority.</span>
          </h1>

          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="text-text-secondary max-w-4xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
              เราวางโครงสร้างระบบที่สอดรับกับพฤติกรรมลูกค้าในแต่ละจังหวัด เพื่อสร้าง{" "}
              <span className="text-text-primary decoration-brand-primary font-black not-italic underline decoration-4 underline-offset-8">
                "ความได้เปรียบทางภูมิศาสตร์"
              </span>{" "}
              ที่จับต้องได้จริงทั่วประเทศครับ
            </p>
          </div>
        </header>

        {/* --- 02. AREA CARD GRID: Regional Nodes --- */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {AREA_NODES.map((node, index) => (
            <AreaCard key={node.slug} data={node} index={index} />
          ))}
        </section>

        {/* --- 03. NATIONWIDE SUPPORT: Beyond The List --- */}
        <section className="border-border mt-32 border-t pt-24 text-center">
          <div className="mx-auto max-w-4xl space-y-12">
            <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              Beyond_The_Nodes.
            </h3>
            <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85 md:text-2xl">
              ไม่พบจังหวัดของคุณในรายการใช่ไหมครับ? <br className="hidden md:block" />
              เราพร้อมวางระบบให้ครอบคลุมทุกพื้นที่และขยายขีดความสามารถไปสู่ธุรกิจของคุณครับ
            </p>

            <div className="flex justify-center pt-8">
              <Button
                asChild
                size="lg"
                variant="specialist"
                className="group h-20 w-full overflow-hidden px-12 md:w-auto"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <span className="relative z-10 flex items-center gap-4">
                    <IconRenderer name="MessageCircle" size={24} />
                    <span className="text-[12px] font-black tracking-[0.3em] uppercase">
                      ปรึกษาแผนงานรายพื้นที่
                    </span>
                  </span>
                  {/* Neural Sweep Effect */}
                  <div className="via-brand-primary/20 absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </LayoutEngine>
  );
}
