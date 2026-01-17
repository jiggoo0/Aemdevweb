/** @format */

import { Metadata } from "next"

// 🧩 Components - Static Imports (ส่วนที่ต้องการความเร็ว FCP สูงสุด)
import { Hero } from "@/components/landing/Hero"
import { ValueProp } from "@/components/landing/ValueProp"
import { InsightsSection } from "@/components/landing/InsightsSection"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { TrustBadge } from "@/components/shared/TrustBadge"
import ServiceCard from "@/components/shared/ServiceCard"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🚀 นำเข้ากลุ่ม Client Sections ที่เราแยกออกมา
import HomeClientSections from "@/components/landing/HomeClientSections"

// 📦 Data
import { servicesData } from "@/constants/services-data"

export const metadata: Metadata = {
  title: "AemDevWeb | รับทำเว็บไซต์ Next.js มาตรฐานปี 2026",
  description:
    "เปลี่ยนยอดวิวเป็นยอดโอน ด้วยเว็บไซต์ High-Performance ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ เร็ว แรง ติด Google",
}

export default function HomePage() {
  return (
    <main className="bg-background selection:bg-aurora-cyan/30 selection:text-aurora-cyan relative flex min-h-screen flex-col overflow-x-hidden">
      {/* 🌌 Luminous Background */}
      <div className="aurora-bg -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.15]" />
      <div className="aurora-bg top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.1]" />

      {/* 1. HERO & 2. TRUST BADGE */}
      <Hero />
      <div className="relative z-10 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION */}
      <section className="relative overflow-hidden py-24">
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 z-0 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br blur-3xl" />
        <ValueProp />
      </section>

      {/* 🚀 4, 8, 9. DYNAMIC SECTIONS (Client-side Load) */}
      <HomeClientSections />

      {/* 5. INSIGHTS */}
      <InsightsSection />

      {/* 6. SERVICES */}
      <section id="services" className="relative container mx-auto px-4 py-32">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-luminous mb-8 text-4xl uppercase md:text-7xl">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="text-lg font-medium text-slate-400 md:text-xl">
            เลือกแพ็กเกจที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืน
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS */}
      <WorkProcess />

      {/* 10. FINAL CTA */}
      <section className="container mx-auto mb-40 px-4">
        <div className="shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.02] p-12 text-center transition-all duration-700 md:p-32">
          <h2 className="text-luminous relative z-10 mb-10 text-4xl uppercase md:text-8xl">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>
          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm variant="button" label="เริ่มโปรเจกต์กับเรา" />
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}
