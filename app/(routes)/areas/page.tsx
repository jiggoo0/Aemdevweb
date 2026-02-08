/**
 * [ROUTE PAGE]: LOCAL_HUB_SYSTEM v17.0.1 (PURE_ORCHESTRATION)
 * [STRATEGY]: Direct Component Mapping | Geographic Authority | High-Fidelity UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Core Components & Data ---
import AreaCard from "@/components/features/areas/AreaCard";
import { AREA_NODES } from "@/constants/area-nodes";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = {
  title: `พื้นที่ให้บริการและแผนงานรายจังหวัด | ${SITE_CONFIG.brandName}`,
  description:
    "วางรากฐานระบบเว็บไซต์ที่ออกแบบมาเพื่อเข้าถึงลูกค้าในแต่ละจังหวัดโดยเฉพาะ ด้วยกลยุทธ์ SEO และการออกแบบระดับ Specialist จาก AEMDEVWEB",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/areas` },
  keywords: [
    "รับทำเว็บไซต์รายจังหวัด",
    "SEO ท้องถิ่น",
    "Local SEO Thailand",
    ...AREA_NODES.map((area) => `รับทำเว็บไซต์ ${area.province}`),
  ],
};

export default function AreasPage() {
  return (
    <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศเพื่อสร้างมิติ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0" />
        <div className="ambient-aura absolute -top-20 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.1] blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. STRATEGIC HEADER: พาดหัวแบบกำหนดเอง */}
        <header className="mb-24 max-w-5xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <IconRenderer name="Globe" size={14} />
            <span>Regional_Network.v17</span>
          </div>

          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-9xl">
            Geographic <br /> Authority.
          </h1>

          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="max-w-3xl text-xl leading-relaxed font-medium text-gray-400 italic opacity-90 md:text-2xl">
              เราไม่ได้แค่รับทำเว็บไซต์ แต่เราวางรากฐานระบบที่สอดรับกับพฤติกรรมลูกค้าในแต่ละจังหวัด
              เพื่อสร้าง{" "}
              <span className="text-brand-primary font-black not-italic">
                "ความได้เปรียบทางธุรกิจ"
              </span>{" "}
              ที่จับต้องได้จริงครับ
            </p>
          </div>
        </header>

        {/* 03. AREA CARD GRID: การเรนเดอร์โหนดพื้นที่โดยตรง (Direct Mapping) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {AREA_NODES.map((node, index) => (
            <AreaCard key={node.slug} data={node} index={index} />
          ))}
        </div>

        {/* 04. FALLBACK & SUPPORT NODE */}
        <div className="mt-32 border-t border-white/5 pt-20 text-center">
          <div className="mx-auto max-w-3xl space-y-10">
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
              Beyond_The_List.
            </h3>
            <p className="text-lg font-medium text-gray-500 italic opacity-80 md:text-xl">
              ไม่เจอจังหวัดของคุณในรายการด้านบนใช่ไหมครับ? <br className="hidden md:block" />
              เราพร้อมขยายขีดความสามารถและวางระบบให้ครอบคลุมทุกพื้นที่ทั่วไทยครับ
            </p>

            <div className="flex justify-center pt-4">
              <Button
                asChild
                className="group bg-brand-primary relative h-20 overflow-hidden rounded-[2rem] px-12 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-95"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <span className="relative z-10 flex items-center gap-4">
                    <IconRenderer name="MessageCircle" size={24} />
                    <span className="text-[11px] font-black tracking-[0.3em] uppercase">
                      ทักแชทปรึกษาแผนงานรายพื้นที่
                    </span>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
