/** @format */

import React from "react"
import type { Metadata } from "next"
import { Zap, ShieldCheck, LayoutGrid, Calculator } from "lucide-react"

// 📂 ข้อมูลตัวตนและโครงสร้างบริการ
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"

// 🧩 ส่วนประกอบหน้าเว็บ (Specialist Components)
import { JsonLd } from "@/components/seo/JsonLd"
import ServiceCard from "@/components/shared/ServiceCard"
import PriceEstimator from "@/components/sales-engine/PriceEstimator"
import CTASection from "@/components/landing/CTASection"

/**
 * 🚀 Metadata — "เลือกแพ็กเกจที่เกิดมาเพื่อธุรกิจคุณ"
 */
export const metadata: Metadata = {
  title: `แพ็กเกจทำเว็บและราคา | ${siteConfig.shortName}`,
  description:
    "รวมบริการทำเว็บไซต์ที่จูนมาเพื่อ SME และโรงงานอุตสาหกรรม โดย นายเอ็มซ่ามากส์ เริ่มต้นสร้างเครื่องจักรผลิตเงินให้ธุรกิจของคุณวันนี้",
  alternates: { canonical: `${siteConfig.url}/services` },
}

/**
 * 🧬 Services Hub — "ศูนย์รวมโซลูชันเพื่อการเติบโต"
 */
export default async function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 JSON-LD: บอก Google Search AI ว่าผมมีบริการอะไรบ้าง (Technical SEO Specialist) */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "บริการจาก นายเอ็มซ่ามากส์ (AEMDEVWEB)",
          description: metadata.description,
          url: `${siteConfig.url}/services`,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "บริการทำเว็บไซต์และ SEO",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.description,
              },
            })),
          },
        }}
      />

      {/* 🔝 1. ส่วนหัวหน้าเว็บ (Hero Section) */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl border-l-4 border-emerald-500 pl-8">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5 shadow-sm">
              <Zap className="h-4 w-4 text-emerald-500" />
              <span className="font-prompt text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">
                Expert Solutions v.2026
              </span>
            </div>

            <h1 className="font-prompt mb-10 text-5xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-9xl">
              Our <br />
              <span className="text-emerald-500">Solutions.</span>
            </h1>

            <p className="font-anuphan mt-6 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ผมไม่ได้แค่รับจ้างทำเว็บ แต่ผมมาช่วยคุณวางโครงสร้าง{" "}
              <span className="text-slate-950 underline decoration-emerald-500/30">
                "เครื่องจักรผลิตเงิน"
              </span>{" "}
              ที่จูนความเร็วและ SEO มาเพื่อ SME และโรงงานโดยเฉพาะ
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. ตารางแพ็กเกจบริการ (Services Grid) */}
      <section className="relative z-10 bg-slate-50/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex items-center gap-4">
            <LayoutGrid className="h-8 w-8 text-emerald-500" />
            <h2 className="font-prompt text-2xl font-black text-slate-900 uppercase italic md:text-4xl">
              Professional Packages
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.priceValue}
                slug={service.slug}
                features={service.features}
                isPopular={service.highlight}
                themeColor={service.themeColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 📊 3. ระบบประเมินงบประมาณแบบ Interactive (Budget Estimator) */}
      <section className="relative border-y border-slate-100 bg-white py-24 lg:py-40">
        <div className="container mx-auto mb-20 px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <Calculator className="h-8 w-8 text-emerald-500" />
            </div>
          </div>
          <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
            Budget <span className="text-emerald-500">Estimator</span>
          </h2>
          <p className="font-anuphan mx-auto mt-6 max-w-2xl text-lg font-bold text-slate-400">
            ลองคำนวณงบประมาณเบื้องต้นตามความต้องการของคุณได้ที่นี่ โปร่งใส
            จริงใจ ไม่มีบวกเพิ่มทีหลังครับ
          </p>
        </div>
        <div className="container mx-auto px-4">
          <PriceEstimator />
        </div>
      </section>

      {/* 🛡️ 4. การันตีคุณภาพระดับ Specialist (Industrial Logic) */}
      <section className="overflow-hidden py-24 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl rounded-[4rem] border border-slate-100 bg-slate-50/50 p-12 shadow-sm transition-all hover:border-emerald-500/20 md:p-24">
            <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-prompt mb-10 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                  จ้างผมแล้ว <br />
                  <span className="text-emerald-500">ดียังไง?</span>
                </h2>
                <ul className="space-y-6">
                  {[
                    "Next.js 16 + React 19: เทคโนโลยีที่ไวและเสถียรที่สุดในโลก",
                    "คะแนน PageSpeed 99+: มาตรฐานความไวที่หาตัวจับยาก",
                    "Industrial Logic: เข้าใจระบบโรงงานและการจัดการข้อมูลใหญ่",
                    "Direct Support: คุยกับผมตรงๆ ไม่ต้องผ่านเซลล์ ไม่ทิ้งงาน 100%",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="font-anuphan flex items-start gap-4 text-lg font-bold text-slate-600"
                    >
                      <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="grid gap-6">
                  <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1">
                    <div className="font-prompt mb-2 text-sm font-black tracking-widest text-emerald-500 uppercase">
                      SME Standard
                    </div>
                    <div className="font-anuphan font-bold text-slate-500">
                      เน้นปิดการขายไว (Conversion Focus) บนโครงสร้างที่ Google
                      รัก
                    </div>
                  </div>
                  <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl transition-all hover:-translate-y-1">
                    <div className="font-prompt mb-4 text-sm font-black tracking-widest text-emerald-400 uppercase">
                      Industrial Grade
                    </div>
                    <div className="font-anuphan leading-relaxed font-bold text-slate-300 opacity-80">
                      สถาปัตยกรรมระดับสูงที่เน้นความปลอดภัย ความนิ่ง
                      และรองรับข้อมูลสินค้ามหาศาลสำหรับโรงงานและบริษัท B2B
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 5. Conversion Hook */}
      <CTASection />

      {/* 📍 Specialist Footer Note */}
      <footer className="mt-20 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          AEMDEVWEB Specialist Service Engine v2026
        </p>
      </footer>
    </main>
  )
}
