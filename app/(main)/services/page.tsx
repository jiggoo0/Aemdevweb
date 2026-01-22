/** @format */

import React from "react"
import type { Metadata } from "next"
import {
  Zap,
  ShieldCheck,
  LayoutGrid,
  Calculator,
  CheckCircle2,
} from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import ServiceCard from "@/components/shared/ServiceCard"
import PriceEstimator from "@/components/sales-engine/PriceEstimator"
import CTASection from "@/components/landing/CTASection"

/**
 * 🚀 Metadata Strategy: เน้น Intent-based Keywords สำหรับ SME และโรงงาน
 */
export const metadata: Metadata = {
  title: `แพ็กเกจทำเว็บและราคา | ${siteConfig.shortName} Specialist Solution`,
  description:
    "โซลูชันเว็บไซต์ที่ออกแบบมาเพื่อเปลี่ยนธุรกิจ SME และโรงงานสู่ระบบดิจิทัลที่โหลดไวที่สุด 2026 เริ่มต้นสร้างเครื่องจักรผลิตเงินให้ธุรกิจของคุณวันนี้",
  alternates: { canonical: `${siteConfig.url}/services` },
}

/**
 * 🧬 Services Hub — "High-Performance Business Solutions"
 */
export default async function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 Enhanced Technical SEO: Service Schema */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: `บริการจาก ${siteConfig.expert} (AEMDEVWEB)`,
          description: metadata.description,
          url: `${siteConfig.url}/services`,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "บริการทำเว็บไซต์ Next.js และ Technical SEO",
            itemListElement: services.map((s, index) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.description,
              },
              position: index + 1,
            })),
          },
        }}
      />

      {/* 🌌 Background Decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      {/* 🔝 1. Hero Section: Specialist Statement */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="animate-in fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-2 text-emerald-600 duration-700">
              <Zap size={14} fill="currentColor" />
              <span className="font-prompt text-[10px] font-black tracking-[0.4em] uppercase italic">
                Performance Solutions 2026
              </span>
            </div>

            <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
              Our <br />
              <span className="text-emerald-500">Solutions.</span>
            </h1>

            <p className="font-anuphan mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ผมไม่ได้แค่รับจ้างทำเว็บ แต่ผมสร้าง{" "}
              <span className="text-slate-900 underline decoration-emerald-500/30 underline-offset-8">
                เครื่องจักรผลิตเงิน
              </span>
              ที่จูนมาเพื่อ SME และโรงงานไทยโดยเฉพาะ เน้นความเร็วสูงสุดและ SEO
              ที่ยั่งยืน
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. Professional Packages Grid */}
      <section className="relative z-10 bg-slate-50/50 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <LayoutGrid size={20} />
            </div>
            <h2 className="font-prompt text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
              Specialist Packages
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

      {/* 📊 3. Interactive Budget Estimator: Conversion Booster */}
      <section className="relative overflow-hidden py-24 lg:py-40">
        <div className="container mx-auto mb-20 px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/20">
              <Calculator size={32} />
            </div>
          </div>
          <h2 className="font-prompt text-4xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
            Budget <span className="text-emerald-500">Estimator</span>
          </h2>
          <p className="font-anuphan mx-auto mt-8 max-w-2xl text-lg font-bold text-slate-400">
            วางแผนงบประมาณที่คุ้มค่าที่สุดสำหรับธุรกิจของคุณ โปร่งใส ตรงไปตรงมา
            และได้รับงานคุณภาพระดับ Specialist แน่นอนครับ
          </p>
        </div>
        <div className="container mx-auto px-6">
          <div className="shadow-3xl mx-auto max-w-6xl rounded-[4rem] border border-slate-100 bg-white p-2 md:p-8">
            <PriceEstimator />
          </div>
        </div>
      </section>

      {/* 🛡️ 4. Why AEMDEVWEB? Specialist Guarantee */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-40">
        <div className="pointer-events-none absolute top-0 right-0 p-20 opacity-[0.03]">
          <ShieldCheck size={400} />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="space-y-12">
              <h2 className="font-prompt text-4xl font-black tracking-tighter text-white uppercase italic md:text-7xl">
                จ้างผมแล้ว <br />
                <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
                  ดียังไง?
                </span>
              </h2>
              <ul className="space-y-8">
                {[
                  "Next.js 16 Architecture: สถาปัตยกรรมที่โหลดไวที่สุดในยุคนี้",
                  "Performance Goal 100/100: มาตรฐานความเร็วที่ลูกค้าคุณจะประทับใจ",
                  "B2B & Industrial Expert: เข้าใจโครงสร้างข้อมูลสินค้าอุตสาหกรรมหนัก",
                  "Direct Access Support: คุยกับผมตรงๆ งานจบไว ไม่ทิ้งงาน 100%",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="font-anuphan flex items-start gap-5 text-xl font-bold text-slate-300"
                  >
                    <CheckCircle2 className="mt-1.5 h-6 w-6 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="font-prompt mb-3 text-xs font-black tracking-[0.3em] text-emerald-600 uppercase italic">
                  SME Strategy
                </div>
                <p className="font-anuphan text-lg leading-relaxed font-bold text-slate-600">
                  เปลี่ยนผู้เข้าชมให้เป็นลูกค้าด้วยโครงสร้าง Conversion Focus
                  ที่จูนมาเพื่อการยิงโฆษณา (Facebook/Google Ads) โดยเฉพาะ
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2">
                <div className="font-prompt mb-3 text-xs font-black tracking-[0.3em] text-emerald-400 uppercase italic">
                  Industrial Grade
                </div>
                <p className="font-anuphan text-lg leading-relaxed font-bold text-slate-300">
                  จัดการข้อมูลมหาศาลด้วยระบบ E-Catalog ที่นิ่ง เสถียร และปลอดภัย
                  เหมาะสำหรับโรงงานที่ต้องการยกระดับความน่าเชื่อถือสู่สากล
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 5. CTA Section */}
      <CTASection />

      {/* 📍 Footer Hook */}
      <footer className="py-12 text-center opacity-30 select-none">
        <p className="font-prompt text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-End Service Engine by {siteConfig.expert} v2026
        </p>
      </footer>
    </main>
  )
}
