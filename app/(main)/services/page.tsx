/** @format */

import React from "react"
import type { Metadata } from "next"
import {
  Zap,
  LayoutGrid,
  Calculator,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

// ดึงข้อมูลและคอนฟิกหลัก
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"

// คอมโพเนนต์หลัก
import { JsonLd } from "@/components/seo/JsonLd"
import ServiceCard from "@/components/shared/ServiceCard"
import PriceEstimator from "@/components/sales-engine/PriceEstimator"

/**
 * Metadata: กำหนดพิกัด SEO เพื่อให้ Google เข้าใจบริการของเราชัดเจน
 */
export const metadata: Metadata = {
  title: `บริการและแผนงานเว็บธุรกิจ | ${siteConfig.project.name}`,
  description:
    "ยกระดับธุรกิจ SME และโรงงานด้วยระบบเว็บที่โหลดไวและวัดผลได้จริง เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือขายที่มีประสิทธิภาพ",
  alternates: { canonical: `${siteConfig.project.url}/services` },
}

export default async function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/10">
      {/* 1. SEO Structured Data: ประกาศพิกัดบริการให้ Search Engine */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: `บริการวางระบบเว็บโดย ${siteConfig.expert.name}`,
          description: metadata.description as string,
          url: `${siteConfig.project.url}/services`,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "บริการทำเว็บไซต์ Next.js และระบบงาน Technical SEO",
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

      {/* Grid Pattern พื้นหลัง */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* 2. Hero Section: แนะนำบริการด้วยความจริงใจและทรงพลัง */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-sm">
              <Zap size={14} className="fill-emerald-600 text-emerald-600" />
              <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                Strategic Service Hub 2026
              </span>
            </div>

            <h1 className="text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Business <br />
              <span className="text-emerald-500">Packages.</span>
            </h1>

            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-600 md:text-2xl">
              ผมเน้นการสร้าง "ระบบงาน" ที่ช่วยให้ธุรกิจเดินหน้าได้จริง{" "}
              <br className="hidden md:block" />
              ไม่ใช่แค่หน้าเว็บที่สวยงาม
              แต่ต้องเป็นเครื่องมือที่รวดเร็วและวัดผลได้ชัดเจน
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service Cards Section: รายการพิกัดบริการ */}
      <section className="relative z-10 py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl">
              <LayoutGrid size={24} />
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
              Our Services
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Budget Estimator: ส่วนประเมินแผนการลงทุน */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-24 lg:py-40">
        <div className="container mx-auto mb-20 px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-[2rem] bg-emerald-500 text-slate-950 shadow-2xl shadow-emerald-500/20">
              <Calculator size={32} />
            </div>
          </div>
          <h2 className="text-4xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
            Budget <span className="text-emerald-500">Estimator.</span>
          </h2>
          <p className="font-body mt-6 text-lg font-bold text-slate-500 md:text-xl">
            วางแผนงบประมาณเบื้องต้น
            เพื่อความโปร่งใสและคุ้มค่าที่สุดสำหรับธุรกิจคุณ
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-2 shadow-2xl shadow-slate-200/50 md:p-10">
            <PriceEstimator />
          </div>
        </div>
      </section>

      {/* 5. Trust Points: จุดยืนการทำงานแบบ Technical Expert */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-40">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-emerald-400 uppercase italic">
                <Sparkles size={16} />
                Technical Foundation
              </div>
              <h2 className="text-4xl leading-tight font-black tracking-tighter text-white uppercase italic md:text-7xl">
                มากกว่าเว็บไซต์ <br />
                <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
                  คือผลลัพธ์ธุรกิจ
                </span>
              </h2>
              <ul className="space-y-10">
                {[
                  "เน้นโครงสร้าง Technical SEO เพื่อการทำอันดับระยะยาว",
                  "ความเร็วหน้าเว็บผ่านมาตรฐาน Core Web Vitals ทุกพิกัด",
                  "การออกแบบที่เน้นเปลี่ยนผู้เยี่ยมชมให้กลายเป็นลูกค้าจริง",
                  "ระบบหลังบ้านที่จัดการง่าย ไม่ยุ่งยากสำหรับเจ้าของธุรกิจ",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-6 text-xl font-bold text-slate-300"
                  >
                    <CheckCircle2 className="mt-1.5 h-6 w-6 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-16 text-center opacity-20 select-none">
        <p className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Service Engine • {siteConfig.expert.name} • 2026
        </p>
      </footer>
    </main>
  )
}
