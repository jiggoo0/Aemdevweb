/** @format */

import React from "react";
import { siteConfig } from "@/constants/site-config";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Case Studies Layout - โครงสร้างพื้นฐานส่วนงานผลงาน (Strategic Infrastructure Wrapper)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การรักษาความต่อเนื่องเชิงทัศนียภาพ (Visual Consistency) และมาตรฐานวิศวกรรม
 * มาตรฐาน: Next.js 16 Server Component - ปรับแต่งเพื่อสมรรถนะการตอบสนองสูงสุด
 */
export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white selection:bg-emerald-500/10">
      {/* 1. STRATEGIC SEO: การบูรณาการโครงสร้างข้อมูลเพื่อระบุบริบทของส่วนงานต่อระบบการค้นหา */}
      <JsonLd
        type="CollectionPage"
        data={{
          "@id": `${siteConfig.project.url}/case-studies/#webpage`,
          name: `Success Case Studies | ${siteConfig.project.name}`,
          description:
            "Technical success stories and web performance optimization benchmarks architected by AEMDEVWEB.",
          publisher: {
            "@id": `${siteConfig.project.url}/#organization`,
          },
        }}
      />

      {/* 2. ATMOSPHERIC ENGINE: ระบบชั้นบรรยากาศเชิงทัศนียภาพ (Visual Layers) */}

      {/* โครงสร้างระนาบเชิงระบบ (Systematic Grid Overlay) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* รัศมีแสงมรกตสร้างมิติ (Strategic Ambient Glow) */}
      <div
        className="pointer-events-none fixed top-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-500/[0.03] blur-[120px]"
        aria-hidden="true"
      />

      {/* 3. CONTENT EXECUTION: พื้นที่แสดงผลเนื้อหาหลัก (Main Strategic Area) */}
      <main className="relative z-10 w-full">{children}</main>

      {/* 4. LAYOUT EQUILIBRIUM: การจัดการสมดุลพื้นที่เพื่อรองรับส่วนท้ายหน้า (Footer Adaptation) */}
      <div className="h-20 w-full bg-transparent md:h-32" aria-hidden="true" />
    </div>
  );
}
