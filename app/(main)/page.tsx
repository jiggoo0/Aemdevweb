/** @format */
import { Metadata } from "next"

// 🧩 Components - Static Imports (Instant LCP Engine)
// ส่วนประกอบกลุ่มนี้จะถูกโหลดทันทีเพื่อให้ First Contentful Paint (FCP) ไวที่สุด
import { Hero } from "@/components/landing/Hero"
import { ValueProp } from "@/components/landing/ValueProp"
import { InsightsSection } from "@/components/landing/InsightsSection"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { TrustBadge } from "@/components/shared/TrustBadge"
import ServiceCard from "@/components/shared/ServiceCard"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🚀 Client-Side Sections (Deferred Loading)
// ใช้ dynamic import ภายในไฟล์นี้เพื่อลดค่า Total Blocking Time (TBT) บน Desktop
import HomeClientSections from "@/components/landing/HomeClientSections"

// 📦 Data & Configuration
import { servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"

/**
 * 🔍 Metadata SEO Strategy
 * จูน Title และ Description ให้ตรงกับตัวตนแบรนด์นายเอ็มซ่ามากส์
 */
export const metadata: Metadata = {
  title: `นายเอ็มซ่ามากส์ | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `นายเอ็มซ่ามากส์ | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
}

/**
 * 🚀 HomePage: AEM DEVWEB Engine v.2026
 * สถาปัตยกรรม: Hero > Trust > Value > ClientSections > Insights > Services > Process > CTA
 * ✅ Optimized: PageSpeed 100 Focus | Server-First Architecture | High-Conversion
 */
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden antialiased">
      
      {/* 🌌 Local Decorative Layer: จัดการแสงพื้นหลังแยกส่วน (-z-10) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        <div className="aurora-bg absolute -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.1] blur-[120px]" />
        <div className="aurora-bg absolute top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.05] blur-[120px]" />
      </div>

      {/* 1. HERO & 2. TRUST SIGNALS: วินาทีแรกที่ผู้ใช้สัมผัส (Critical Rendering Path) */}
      <Hero />
      <div className="relative z-20 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION: ขยี้ปัญหาและนำเสนอทางออก */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        {/* Background Accent: สร้างมิติด้วย Gradient เอียงจางๆ */}
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 -z-10 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br opacity-50 blur-3xl" />
        <div className="relative z-10">
          <ValueProp />
        </div>
      </section>

      {/* 🚀 4, 8, 9. DYNAMIC CLIENT SECTIONS: Stats, Pricing, Testimonials */}
      {/* ส่วนนี้ถูกแยกโหลดแบบ Lazy เพื่อไม่ให้บล็อกการแสดงผล Hero ด้านบน */}
      <HomeClientSections />

      {/* 5. INSIGHTS SECTION: โชว์ผลงาน Case Study และบทความความรู้ */}
      <div className="relative z-10">
        <InsightsSection />
      </div>

      {/* 6. SERVICES GRID: แคตตาล็อกบริการสำหรับ SME */}
      <section id="services" className="relative py-32 lg:py-48">
        <div className="mx-auto mb-24 max-w-4xl px-4 text-center">
          <div className="text-aurora-cyan font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
            Solutions for Growth
          </div>
          <h2 className="text-luminous mb-10 text-4xl uppercase md:text-8xl italic">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium text-slate-400 md:text-2xl">
            เลือกโซลูชันที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืนของ{" "}
            <span className="text-white italic underline decoration-aurora-cyan/30 underline-offset-8">SME ไทย</span>
          </p>
        </div>

        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS FLOW: แสดงขั้นตอนการทำงานที่โปร่งใส */}
      <WorkProcess />

      {/* 10. FINAL CONVERSION BOX: กระตุ้นการตัดสินใจขั้นสุดท้าย */}
      <section className="mb-40 px-4">
        <div className="glass-card group shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden p-12 text-center transition-all duration-700 md:p-32">
          {/* Inner Glow Decorative: แสงรัศมีภายในหน้าบัตร */}
          <div className="bg-aurora-emerald/10 absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-[120px] transition-all duration-700 group-hover:opacity-60" />

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

      {/* 🛰️ Conversion Floating Engine: ปุ่มติดต่อที่เข้าถึงง่ายที่สุด */}
      <LineStickyButton />
    </div>
  )
}
