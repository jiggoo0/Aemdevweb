/** @format */
import { Metadata } from "next"
import { Suspense } from "react"

// 🧩 Components - Landing
import { Hero } from "@/components/landing/Hero"
import { ValueProp } from "@/components/landing/ValueProp"
import { Testimonials } from "@/components/landing/Testimonials"
import { InsightsSection } from "@/components/landing/InsightsSection"

// 🧩 Components - Sales Engine
import { PriceEstimator } from "@/components/sales-engine/PriceEstimator"
import { WorkProcess } from "@/components/sales-engine/WorkProcess"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"

// 🧩 Components - Shared
import { TrustBadge } from "@/components/shared/TrustBadge"
import ServiceCard from "@/components/shared/ServiceCard"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

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
      {/* 🌌 Luminous Background: แสง Aurora เต้นระบำทั่วหน้าเว็บ */}
      <div className="aurora-bg -top-[10%] -right-[10%] h-[800px] w-[1000px] opacity-[0.15]" />
      <div className="aurora-bg top-1/2 -left-[10%] h-[800px] w-[800px] opacity-[0.1]" />

      {/* 1. HERO SECTION: ประตูบานแรกสู่ความสว่างพรีเมียม */}
      <Hero />

      {/* 2. TRUST BADGE: เชื่อมั่นทันทีใน 3 วินาที */}
      <div className="relative z-10 -mt-12 md:-mt-16">
        <TrustBadge />
      </div>

      {/* 3. VALUE PROPOSITION: จุดต่างที่เหนือกว่าด้วย Technology */}
      <section className="relative overflow-hidden py-24">
        {/* Soft Aurora Mesh Background */}
        <div className="from-aurora-emerald/5 to-aurora-violet/5 absolute inset-0 z-0 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br blur-3xl" />
        <ValueProp />
      </section>

      {/* 4. IMPACT STATS: ตัวเลขพลังที่ชัดเจนและสว่างไสว */}
      <section className="shadow-luminous relative z-10 border-y border-white/5 bg-white/[0.03] py-24 backdrop-blur-3xl">
        <ImpactStats />
      </section>

      {/* 5. INSIGHTS & CASE STUDIES: ผลงานและบทความในสไตล์ Smart Tabs */}
      <InsightsSection />

      {/* 6. SERVICES: โซลูชันที่ปรับตามสเกลธุรกิจ (Luminous Card Style) */}
      <section id="services" className="relative container mx-auto px-4 py-32">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-luminous mb-8 text-4xl uppercase md:text-7xl">
            Services <span className="text-slate-600">&</span> Solutions
          </h2>
          <p className="text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
            เลือกแพ็กเกจที่ออกแบบมาเพื่อการเติบโตอย่างยั่งยืน{" "}
            <br className="hidden md:block" />
            ตั้งแต่ธุรกิจเริ่มต้นจนถึงระดับ Corporate
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} className="h-full" />
          ))}
        </div>
      </section>

      {/* 7. PROCESS: ความชัดเจนที่นุ่มนวลและเป็นมิตร */}
      <WorkProcess />

      {/* 8. PRICE ESTIMATOR: ระบบประเมินราคา (Interactive Luminous) */}
      <section id="pricing" className="container mx-auto px-4 py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-aurora-cyan mb-4 block text-[10px] font-black tracking-[0.3em] uppercase">
              Transparent Pricing
            </span>
            <h2 className="text-luminous text-3xl tracking-tighter uppercase md:text-6xl">
              ประเมินราคาเบื้องต้น
            </h2>
          </div>

          <Suspense
            fallback={
              <div className="h-[500px] w-full animate-pulse rounded-4xl border border-white/10 bg-white/5" />
            }
          >
            <PriceEstimator />
          </Suspense>
        </div>
      </section>

      {/* 9. TESTIMONIALS: คำยืนยันจากลูกค้าตัวจริงบนพื้นหลัง Midnight */}
      <section className="rounded-t-4xl border-t border-white/5 bg-white/[0.01] py-32">
        <Testimonials />
      </section>

      {/* 10. FINAL CTA: จุดปิดการขายที่ส่องสว่างและทรงพลัง */}
      <section className="container mx-auto mb-40 px-4">
        <div className="shadow-luminous hover:border-aurora-cyan/30 relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.02] p-12 text-center transition-all duration-700 md:p-32">
          <div className="aurora-bg -right-40 -bottom-40 h-[600px] w-[600px] opacity-20" />

          <h2 className="text-luminous relative z-10 mb-10 text-4xl leading-none tracking-tighter uppercase md:text-8xl">
            Ready to <span className="text-aurora-emerald">Scale</span> <br />
            Your Business?
          </h2>
          <p className="relative z-10 mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            หยุดให้เว็บไซต์ช้าฉุดรั้งกำไรของคุณ
            เริ่มสร้างระบบปิดการขายอัตโนมัติวันนี้
          </p>

          <div className="relative z-10 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <LineLeadForm variant="button" label="เริ่มโปรเจกต์กับเรา" />
            <div className="flex items-center gap-4 text-xs font-black tracking-[0.25em] text-slate-500 uppercase">
              <span className="relative flex h-4 w-4">
                <span className="bg-aurora-cyan absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-aurora-cyan relative inline-flex h-4 w-4 rounded-full"></span>
              </span>
              Available Now
            </div>
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}
