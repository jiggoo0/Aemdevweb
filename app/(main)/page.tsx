/** @format */
import { Metadata } from "next"

// 🧩 Components - Static Imports (Instant LCP Engine)
import { Hero } from "@/components/landing/Hero"
import { ValueProp } from "@/components/landing/ValueProp"
import { InsightsSection } from "@/components/landing/InsightsSection"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { TrustBadge } from "@/components/shared/TrustBadge"
import ServiceCard from "@/components/shared/ServiceCard"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🚀 Client-Side Sections (Deferred Loading เพื่อประสิทธิภาพสูงสุด)
import HomeClientSections from "@/components/landing/HomeClientSections"

// 📦 Data & Configuration
import { servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"

// ✅ Metadata SEO Strategy
export const metadata: Metadata = {
  title: `AemDevWeb | ${siteConfig.tagline}`,
  description: siteConfig.description,
}

/**
 * 🚀 HomePage: AEM DEVWEB Engine v.2026
 * Structure: Hero > Trust > Value > ClientSections > Insights > Services > Process > CTA
 */
export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden antialiased">
      {/* 🌌 Local Decorative Layer: จัดการแสงพื้นหลังแยกส่วน (z-index: -10) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        <div className="aurora-bg absolute -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.1] blur-[120px]" />
        <div className="aurora-bg absolute top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.05] blur-[120px]" />
      </div>

      {/* 1. HERO & 2. TRUST SIGNALS: ส่วนที่ User ต้องเห็นทันทีเมื่อโหลดหน้า */}
      <Hero />
      <div className="relative z-20 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION: ทำไมต้องเลือกเรา? */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 -z-10 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br opacity-50 blur-3xl" />
        <div className="relative z-10">
          <ValueProp />
        </div>
      </section>

      {/* 🚀 4, 8, 9. DYNAMIC CLIENT SECTIONS: Stats, Pricing, Testimonials (Deferred) */}
      <HomeClientSections />

      {/* 5. INSIGHTS SECTION: ข้อมูล Case Study และบทความ */}
      <div className="relative z-10">
        <InsightsSection />
      </div>

      {/* 6. SERVICES GRID: แคตตาล็อกบริการหลัก */}
      <section id="services" className="relative py-32 lg:py-48">
        <div className="mx-auto mb-24 max-w-4xl px-4 text-center">
          <div className="text-aurora-cyan font-prompt mb-6 inline-block text-[10px] font-black tracking-[0.4em] uppercase">
            Solutions for Growth
          </div>
          <h2 className="text-luminous mb-10 text-4xl uppercase md:text-8xl">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium text-slate-400 md:text-2xl">
            เลือกโซลูชันที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืนของ{" "}
            <span className="text-white">SME ไทย</span>
          </p>
        </div>

        <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS FLOW: ขั้นตอนการทำงานที่เป็นระบบ */}
      <WorkProcess />

      {/* 10. FINAL CONVERSION BOX: ปิดการขายท้ายหน้าหน้า */}
      <section className="mb-40 px-4">
        <div className="glass-card group shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden p-12 text-center transition-all duration-700 md:p-32">
          {/* Decorative Glow within Card */}
          <div className="bg-aurora-emerald/10 absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-[120px] transition-all duration-700 group-hover:opacity-60" />

          <h2 className="text-luminous relative z-10 mb-12 text-4xl leading-none uppercase md:text-[6rem] lg:text-[8rem]">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>

          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm
              variant="button"
              label="เริ่มโปรเจกต์กับเรา"
              className="scale-110 md:scale-125"
            />
          </div>
        </div>
      </section>

      {/* Conversion Floating Engine */}
      <LineStickyButton />
    </div>
  )
}
