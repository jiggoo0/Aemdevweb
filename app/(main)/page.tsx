/** @format */

import { Metadata } from "next"
import dynamic from "next/dynamic"

// 🧩 Components - Static Imports (Critical Path for LCP)
// โหลดทันทีเพื่อให้ Hero Section แสดงผลเร็วที่สุดโดยไม่มี Layout Shift
import { Hero } from "@/components/landing/Hero"
import { TrustBadge } from "@/components/shared/TrustBadge"
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

// 📦 Data & Configuration
import { servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"

// 🚀 Dynamic Imports (Lazy Loading) - แยก Chunk เพื่อลด TBT
const HomeClientSections = dynamic(
  () =>
    import("@/components/landing/HomeClientSections").then(
      (mod) => mod.HomeClientSections
    ),
  { ssr: true } // ยังคง SSR ไว้เพื่อ SEO แต่ Code Split JS ออกไป
)

const WorkProcess = dynamic(() =>
  import("@/components/sales-engine/WorkProcess").then((mod) => mod.WorkProcess)
)

const LineLeadForm = dynamic(() =>
  import("@/components/sales-engine/LineLeadForm").then(
    (mod) => mod.LineLeadForm
  )
)

const ServiceCard = dynamic(() =>
  import("@/components/shared/ServiceCard").then((mod) => mod.ServiceCard)
)

// Dynamic import Components ที่อยู่ลึกๆ เพื่อประหยัด Initial Payload
const InsightsSection = dynamic(() =>
  import("@/components/landing/InsightsSection").then(
    (mod) => mod.InsightsSection
  )
)

const ValueProp = dynamic(() =>
  import("@/components/landing/ValueProp").then((mod) => mod.ValueProp)
)

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    url: siteConfig.url,
    type: "website",
  },
}

/**
 * 🚀 HomePage: AEM DEVWEB Engine v.2026
 * สถาปัตยกรรม: Hero > Trust > Value > ClientSections > Insights > Services > Process > CTA
 */
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden antialiased bg-slate-950 text-slate-50 selection:bg-aurora-cyan/30">
      {/* 🛠️ SEO Schema: WebSite & Service */}
      <JsonLd
        type="Website"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <JsonLd
        type="ProfessionalService"
        data={{
          name: siteConfig.companyName,
          image: siteConfig.ogImage,
          url: siteConfig.url,
          telephone: siteConfig.contact.tel,
          address: {
            "@type": "PostalAddress",
            addressCountry: "TH",
          },
          priceRange: "฿2,590 - ฿12,900",
        }}
      />

      {/* 🌌 Local Decorative Layer (Optimized for Mobile) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* ลด Blur และ Opacity เพื่อให้ Render เร็วขึ้น */}
        <div className="aurora-bg absolute -top-[10%] -right-[10%] h-[600px] w-[800px] opacity-[0.08] blur-[60px] md:h-[800px] md:w-[1000px] md:blur-[80px]" />
        <div className="aurora-bg absolute top-1/2 -left-[10%] h-[600px] w-[600px] opacity-[0.05] blur-[60px] md:h-[800px] md:w-[800px] md:blur-[80px]" />
      </div>

      {/* 1. HERO & 2. TRUST SIGNALS: Critical Rendering Path */}
      {/* วางโครงสร้างให้อ่าน HTML ปุ๊บเจอเลย ไม่ต้องรอ JS */}
      <div className="content-visibility-auto contain-layout">
        <Hero />
        <div className="relative z-20 -mt-12 md:-mt-16">
          <TrustBadge />
        </div>
      </div>

      {/* 3. VALUE PROPOSITION */}
      <section className="relative overflow-hidden py-24 lg:py-36 content-visibility-auto">
        {/* Background Accent - ใช้ CSS Gradient แทนรูปภาพเพื่อ Performance */}
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 -z-10 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br opacity-50 blur-3xl will-change-transform" />
        <div className="relative z-10">
          <ValueProp />
        </div>
      </section>

      {/* 4. DYNAMIC CLIENT SECTIONS (Stats, Pricing, Testimonials) */}
      <HomeClientSections />

      {/* 5. INSIGHTS SECTION */}
      <div className="relative z-10 content-visibility-auto">
        <InsightsSection />
      </div>

      {/* 6. SERVICES GRID */}
      <section id="services" className="relative py-32 lg:py-48 content-visibility-auto">
        <div className="mx-auto mb-24 max-w-4xl px-4 text-center">
          <div className="text-aurora-cyan font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
            Solutions for Growth
          </div>
          <h2 className="text-luminous mb-10 text-4xl uppercase md:text-8xl italic">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium text-slate-400 md:text-2xl">
            เลือกโซลูชันที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืนของ{" "}
            <span className="text-white italic underline decoration-aurora-cyan/30 underline-offset-8">
              SME ไทย
            </span>
          </p>
        </div>

        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS FLOW */}
      <WorkProcess />

      {/* 8. FINAL CONVERSION BOX */}
      <section className="mb-40 px-4 content-visibility-auto">
        <div className="glass-card group shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden p-12 text-center transition-all duration-700 md:p-32">
          {/* Inner Glow Decorative */}
          <div className="bg-aurora-emerald/10 absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-[80px] transition-all duration-700 group-hover:opacity-60 will-change-transform" />

          <h2 className="text-luminous relative z-10 mb-12 text-4xl leading-none uppercase md:text-[6rem] lg:text-[8rem] italic">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>

          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm
              variant="button"
              label="เริ่มโปรเจกต์กับนายเอ็ม"
              className="scale-110 md:scale-125"
            />
          </div>
        </div>
      </section>

      {/* 9. Floating CTA Engine */}
      <LineStickyButton />
    </div>
  )
}
