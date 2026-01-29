/** @format */

import { Metadata } from "next"
import TermsOfService from "@/components/shared/TermsOfService"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * STRATEGIC METADATA: การจัดการโครงสร้างข้อมูลเพื่อสร้างความเชื่อมั่นระดับสากล
 */
export const metadata: Metadata = {
  title: `เงื่อนไขและข้อตกลงการใช้บริการ | ${siteConfig.project.name}`,
  description:
    "รายละเอียดข้อตกลงการใช้บริการ มาตรฐานการส่งมอบแผนงาน และขอบเขตความรับผิดชอบของ AEMDEVWEB เพื่อความโปร่งใสสูงสุดในทุกโครงการ",
  alternates: { canonical: `${siteConfig.project.url}/terms` },
}

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/10">
      {/* 1. SCHEMA: การระบุประเภทหน้าข้อมูลทางกฎหมายและเงื่อนไขสำหรับระบบ AI Search */}
      <JsonLd
        type="WebPage"
        data={{
          name: "Terms of Service | AEMDEVWEB",
          description:
            "Legal terms and service standards for AEMDEVWEB strategic projects.",
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.realName,
          },
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* 2. HERO SECTION: การประกาศมาตรฐานการให้บริการ */}
      <header className="relative border-b border-slate-50 bg-slate-50/50 pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <span className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
              Strategic Protocol v2026.1
            </span>
            <h1 className="font-heading mt-4 text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-8xl">
              Terms of <br />
              <span className="text-emerald-500">Service.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* 3. CONTENT AREA: ข้อมูลข้อตกลงการใช้บริการเชิงระบบ */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <TermsOfService />
        </div>
      </section>

      {/* 4. OPERATIONAL STATUS FOOTER */}
      <footer className="py-20 text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-100 px-6 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
            Standard Operating Framework • Verified 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
