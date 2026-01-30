/** @format */

import { Metadata } from "next";
import TermsOfService from "@/components/shared/TermsOfService";
import { siteConfig } from "@/constants/site-config";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * TermsPage: เงื่อนไขและข้อตกลงการใช้บริการ (Strategic Terms Protocol)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */

export const metadata: Metadata = {
  title: `เงื่อนไขและข้อตกลงการใช้บริการ | ${siteConfig.project.name}`,
  description:
    "รายละเอียดข้อตกลงการใช้บริการ มาตรฐานการส่งมอบแผนงาน และขอบเขตความรับผิดชอบเพื่อความโปร่งใสสูงสุด",
  alternates: { canonical: `${siteConfig.project.url}/terms` },
};

export default function TermsPage() {
  return (
    <main className="selection:bg-brand-primary/10 relative min-h-screen bg-[oklch(1_0_0)] antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. SCHEMA]: ยืนยันพิกัดมาตรฐานการให้บริการต่อระบบ Search Intelligence */}
      <JsonLd
        type="WebPage"
        data={{
          name: "Terms of Service | AEMDEVWEB",
          description:
            "Legal terms and service standards for AEMDEVWEB strategic projects.",
          publisher: {
            "@id": "https://me.aemdevweb.com/#person",
          },
        }}
      />

      {/* Background Technical Grid Layer */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert"
        aria-hidden="true"
      />

      {/* [2. HERO SECTION]: การประกาศมาตรฐานการให้บริการ (Strategic Header) */}
      <header className="relative border-b border-[oklch(0.95_0.02_260)] bg-[oklch(0.98_0.01_260)] pt-32 pb-16 lg:pt-48 lg:pb-24 dark:border-white/5 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="border-brand-primary max-w-4xl border-l-8 pl-8 md:pl-16">
            <span className="font-heading text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase italic">
              Strategic Protocol v2026.1
            </span>
            <h1 className="font-heading text-brand-depth mt-4 text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl dark:text-white">
              Terms of <br />
              <span className="text-brand-primary">Service.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* [3. CONTENT AREA]: พิกัดข้อตกลงการใช้บริการเชิงระบบ */}
      <section className="container-za py-20 lg:py-32">
        <div className="mx-auto max-w-4xl">
          {/* Note: เนื้อหาทางกฎหมายถูกจัดระเบียบผ่านคลาส 'prose-aem' 
              เพื่อให้อ่านง่ายและคงความพรีเมียมของ UI
          */}
          <div className="prose-aem">
            <TermsOfService />
          </div>
        </div>
      </section>

      {/* [4. OPERATIONAL STATUS FOOTER] */}
      <footer className="py-20 text-center select-none">
        <div className="inline-flex items-center gap-3 rounded-full border border-[oklch(0.9_0.02_260)] px-6 py-2 dark:border-white/10">
          <div className="bg-brand-primary h-2 w-2 animate-ping rounded-full" />
          <p className="font-heading text-[9px] font-black tracking-[0.5em] text-[oklch(0.5_0.02_260)] uppercase italic">
            Standard Operating Framework • Verified 2026
          </p>
        </div>
      </footer>
    </main>
  );
}
