// @format
// พิกัดข้อมูล: app/(seo)/seo/page.tsx
// หน้าที่: แสดงผลรายการบริการ Technical SEO และรายงานผลการตรวจสอบสมรรถนะ
// มาตรฐาน: Next.js 16 (App Router) | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import React from "react"
import { Metadata } from "next"

// [DATA SOURCE]: คลังข้อมูลบริการและคอนฟิกระบบ
import { seoServicesData } from "@/constants/seo-services"
import { siteConfig } from "@/constants/site-config"

// [COMPONENTS]: ระบบการ์ดบริการและรายงานการตรวจสอบระดับลึก
import { SeoCard } from "../_components/SeoCard"
import AuditReport from "@/components/seo/AuditReport"

/**
 * Metadata: กำหนดพิกัดข้อมูล SEO สำหรับหน้าหลักหมวดงานเทคนิค
 */
export const metadata: Metadata = {
  title: `บริการ Technical SEO | ${siteConfig.project.nameTH}`,
  description:
    "ยกระดับเว็บไซต์ด้วยระบบการปรับจูนความเร็วและโครงสร้างข้อมูลระดับสากล ภายใต้มาตรฐานการควบคุมของ นายเอ็มซ่ามากส์",
  alternates: {
    canonical: `${siteConfig.project.url}/seo`,
  },
}

/**
 * SeoListingPage: พิกัดแสดงผลระบบงาน SEO และรายงานสมรรถนะ (Technical Hub)
 */
export default function SeoListingPage() {
  return (
    <div className="bg-[oklch(1_0_0)] pt-24 pb-32 dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. HERO SECTION]: ยุทธศาสตร์การนำเสนอ Search Performance */}
      <section className="container-za mb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.96_0.04_160)] px-4 py-1.5 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.15_160)] uppercase italic">
          Strategic Technical SEO
        </div>
        <h1 className="mt-6 text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl dark:text-[oklch(0.95_0.01_260)]">
          Search <br />
          <span className="text-[oklch(0.65_0.2_160)]">Performance.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-bold text-[oklch(0.45_0.02_260)] md:text-xl">
          วางรากฐานระบบเว็บไซต์ด้วยมาตรฐานความเร็วระดับสูงสุด LCP {"<"} 0.8
          วินาที เพื่อความได้เปรียบทางการแข่งขันบนระบบการค้นหายุค AI 2026
        </p>
      </section>

      {/* [2. SERVICES GRID]: ระบบกระจายพิกัดบริการรายจุด (Dynamic Node Mapping) */}
      <section className="container-za mb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {seoServicesData.map((service) => (
            <SeoCard key={service.id} data={service} />
          ))}
        </div>
      </section>

      {/* [3. AUDIT REPORT SECTION]: พิกัดแสดงผลรายงานสมรรถนะ (Technical Evidence) */}
      <section className="container-za mb-32">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-white">
            Performance{" "}
            <span className="text-[oklch(0.65_0.2_160)]">Evidence.</span>
          </h2>
          <p className="mt-4 font-bold text-[oklch(0.45_0.02_260)]">
            ตัวอย่างพิกัดข้อมูลการตรวจสอบความสมบูรณ์ของระบบงานที่ส่งมอบให้พาร์ทเนอร์
          </p>
        </div>
        <AuditReport />
      </section>

      {/* [4. CALL TO ACTION]: จุดตอบโต้เพื่อเริ่มกระบวนการตรวจสอบระบบ */}
      <section className="container-za">
        <div className="depth-card shadow-node rounded-4xl border border-[oklch(0.9_0.02_260)] bg-[oklch(0.98_0.01_260)] p-12 text-center dark:border-[oklch(0.3_0.02_260)] dark:bg-[oklch(0.18_0.02_260)]">
          <h2 className="text-3xl font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-[oklch(0.95_0.01_260)]">
            System <span className="text-[oklch(0.6_0.2_20)]">Audit.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-bold text-[oklch(0.45_0.02_260)]">
            หากคุณต้องการทราบพิกัดจุดเสี่ยงเชิงรหัสของเว็บไซต์ปัจจุบัน
            ส่งลิงก์มาให้ นายเอ็มซ่ามากส์ วิเคราะห์เชิงลึกได้ทันทีครับ
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-za shadow-aurora inline-flex items-center gap-3 bg-[oklch(0.2_0.02_260)] px-10 py-5 text-white dark:bg-[oklch(0.95_0.01_260)] dark:text-[oklch(0.2_0.02_260)]"
            >
              เริ่มประเมินโครงสร้างระบบ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
