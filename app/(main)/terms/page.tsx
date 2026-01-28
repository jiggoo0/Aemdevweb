/** @format */

import { Metadata } from "next"
import TermsOfService from "@/components/shared/TermsOfService"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/* -------------------------------------------------------------------------- */
/* SEO Metadata Engine                                                       */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: `เงื่อนไขและข้อตกลงการใช้บริการ | นายเอ็มซ่ามากส์ ${siteConfig.project.shortName}`,
  description:
    "อ่านรายละเอียดข้อตกลงการใช้บริการเว็บไซต์สำเร็จรูป มาตรฐานการทำงาน และขอบเขตความรับผิดชอบ เพื่อความเข้าใจที่ตรงกันในการเริ่มต้นโปรเจกต์กับ AEMDEVWEB",
  openGraph: {
    title: "เงื่อนไขและข้อตกลงการใช้บริการ | AEMDEVWEB",
    description:
      "สรุปข้อมูลการใช้บริการเว็บไซต์สเปกปีศาจ โดยนายเอ็มซ่ามากส์ เพื่อความโปร่งใสและชัดเจนที่สุด",
    url: `${siteConfig.project.url}/terms`,
    type: "website",
    siteName: siteConfig.company.name,
    images: [
      {
        url: siteConfig.project.ogImage,
        width: 1200,
        height: 630,
        alt: "AEMDEVWEB Terms of Service",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.project.url}/terms`,
  },
}

/* -------------------------------------------------------------------------- */
/* Terms Page Component                                                      */
/* -------------------------------------------------------------------------- */

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 antialiased selection:bg-emerald-500/10">
      {/* 1. Structured Data: แจ้ง Google ให้รู้ว่าหน้าเว็บนี้เกี่ยวกับนโยบายและเงื่อนไข */}
      <JsonLd
        type="WebPage"
        data={{
          name: "Terms of Service | AEMDEVWEB",
          description:
            "Terms and conditions for using our website rental and development services.",
          publisher: {
            "@type": "Person",
            name: "Alongkorl Yomkerd",
          },
          url: `${siteConfig.project.url}/terms`,
        }}
      />

      {/* ลายตารางพื้นหลังจางๆ (Grid) เพื่อคุมโทนงานระบบที่เนี้ยบ */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. เนื้อหาเงื่อนไขการให้บริการ (Component) */}
      <div className="pb-32">
        <TermsOfService />
      </div>

      {/* ส่วนท้ายหน้า (Footer Signature) */}
      <div className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          Service Protocol Standards • AEMDEVWEB 2026
        </p>
      </div>
    </main>
  )
}
