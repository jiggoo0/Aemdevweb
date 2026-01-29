// @format
// พิกัดข้อมูล: app/(seo)/seo/page.tsx
// หน้าที่: แสดงผลรายการบริการ Technical SEO ทั้งหมดในรูปแบบ Grid
// มาตรฐาน: Next.js 16 (App Router) | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import React from "react";
import { Metadata } from "next";

// [DATA SOURCE]: ดึงข้อมูลบริการจากคลังข้อมูลหลักและคอนฟิกระบบ
import { seoServicesData } from "@/constants/seo-services";
import { siteConfig } from "@/constants/site-config";

// [COMPONENTS]: เรียกใช้ระบบการ์ดแสดงผลพิกัดบริการ
import { SeoCard } from "../_components/SeoCard";

/**
 * Metadata: กำหนดพิกัดข้อมูลเพื่อการจัดอันดับหน้าหลักของระบบ SEO
 */
export const metadata: Metadata = {
  title: `บริการ Technical SEO | ${siteConfig.project.nameTH}`,
  description: "รวมระบบการปรับจูนเว็บไซต์เพื่อผลลัพธ์ความเร็วสูงสุดและการจัดอันดับที่ยั่งยืนในระดับสากล",
  alternates: {
    canonical: `${siteConfig.project.url}/seo`,
  },
};

/**
 * SeoListingPage: พิกัดแสดงผลรายการบริการหลักของ AEMDEVWEB
 */
export default function SeoListingPage() {
  return (
    <div className="bg-[oklch(1_0_0)] pb-32 pt-24 dark:bg-[oklch(0.12_0.02_260)]">
      {/* ส่วนหัวของหน้าพิกัดบริการ (Hero Section) */}
      <section className="container-za mb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
          Strategic Technical SEO
        </div>
        <h1 className="mt-6 text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic dark:text-[oklch(0.95_0.01_260)] md:text-7xl">
          Search <br />
          <span className="text-[oklch(0.65_0.2_160)]">Performance.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-bold text-[oklch(0.45_0.02_260)] md:text-xl">
          ยกระดับโครงสร้างระบบเว็บไซต์ของคุณด้วยมาตรฐานการวางระบบระดับสากล 
          เน้นความเร็วระดับ 0.8 วินาที และความแม่นยำของพิกัดข้อมูลหลังบ้าน
        </p>
      </section>

      {/* ส่วน Grid รายการบริการ (Dynamic Service Mapping) */}
      <section className="container-za">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {seoServicesData.map((service) => (
            <SeoCard key={service.id} data={service} />
          ))}
        </div>
      </section>

      {/* ส่วนแจ้งเตือนจุดเสี่ยงเชิงระบบ (Audit Call to Action) */}
      <section className="container-za mt-32">
        <div className="depth-card rounded-4xl p-12 text-center bg-[oklch(0.98_0.01_260)] dark:bg-[oklch(0.18_0.02_260)] border border-[oklch(0.9_0.02_260)] dark:border-[oklch(0.3_0.02_260)]">
          <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] italic uppercase dark:text-[oklch(0.95_0.01_260)]">
            System <span className="text-[oklch(0.6_0.2_20)]">Audit.</span>
          </h2>
          <p className="mt-4 font-bold text-[oklch(0.45_0.02_260)]">
            หากคุณไม่มั่นใจว่าระบบปัจจุบันมีจุดเสี่ยงตรงไหน 
            สามารถส่งพิกัดเว็บไซต์มาให้ นายเอ็มซ่ามากส์ ตรวจสอบเบื้องต้นได้ทันทีครับ
          </p>
          <div className="mt-10">
            <a 
              href={siteConfig.links.line} 
              className="btn-za inline-flex items-center gap-3 px-8 py-4 bg-[oklch(0.2_0.02_260)] text-white dark:bg-[oklch(0.95_0.01_260)] dark:text-[oklch(0.2_0.02_260)]"
            >
              เริ่มประเมินโครงสร้างระบบ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
