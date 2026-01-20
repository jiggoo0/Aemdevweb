/** @format */

import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Zap,
  LayoutTemplate,
} from "lucide-react"

// 📂 Data & Logic Architecture
import { services } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"
import { getTemplatesByServiceCategory } from "@/lib/template"

// 🧩 Specialist Components
import { JsonLd } from "@/components/seo/JsonLd"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

/**
 * 🚀 Generate Metadata (Next.js 16 Async)
 * ดึงข้อมูลตาม Slug เพื่อทำ Dynamic SEO ให้ Google ค้นหาเจอง่ายขึ้น
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) return { title: `ไม่พบข้อมูลบริการ | ${siteConfig.shortName}` }

  return {
    title: `${service.title} | ${siteConfig.shortName} Specialist`,
    description: service.description,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: (service as any).image || siteConfig.ogImage,
        },
      ],
    },
  }
}

/**
 * 🧬 Service Detail Page — "เจาะลึกบริการที่เน้นผลลัพธ์ธุรกิจ"
 */
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  // ✅ Next.js 15/16 ต้อง await params
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  // 🔗 ดึงเทมเพลตที่แนะนำสำหรับหมวดหมู่นี้ (ถ้ามี)
  const relatedTemplates = await getTemplatesByServiceCategory(service.category)

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/30">
      {/* 🔎 บอก Google Search AI ถึงรายละเอียดบริการนี้ (Structured Data) */}
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
            url: siteConfig.url,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "THB",
            price: service.priceValue,
          },
        }}
      />

      {/* 🔝 1. แถบนำทาง (Breadcrumb Light) */}
      <nav className="relative z-10 container mx-auto px-4 pt-32 lg:pt-40">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-colors hover:text-emerald-500"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          ย้อนกลับไปดูบริการทั้งหมด
        </Link>
      </nav>

      {/* 🏆 2. ส่วนหัวเนื้อหา (Hero Service Section) */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* ฝั่งเนื้อหา: Identity & Value */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-600 uppercase shadow-sm">
                <Zap className="h-3.5 w-3.5" />
                Specialist Service v2026
              </div>

              <h1 className="font-prompt mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-8xl">
                {service.title.split(" ")[0]} <br />
                <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
                  {service.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="font-anuphan mb-10 max-w-xl text-xl leading-relaxed font-bold text-slate-500">
                {service.description}
              </p>

              <div className="mb-12 space-y-5">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="group flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500 transition-transform group-hover:scale-110" />
                    <span className="font-anuphan text-lg font-bold text-slate-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ฝั่งปิดการขาย: Pricing & Lead Generation */}
            <div className="group relative order-1 lg:order-2">
              <div className="relative z-10 rounded-[3.5rem] border border-white/5 bg-slate-950 p-10 text-white shadow-2xl transition-all duration-500 group-hover:shadow-emerald-500/10 lg:p-16">
                <div className="font-prompt mb-8 text-xs font-black tracking-[0.3em] text-emerald-400 uppercase">
                  งบประมาณเริ่มต้นโดยประมาณ
                </div>
                <div className="font-prompt mb-6 text-6xl font-black tracking-tighter italic md:text-7xl lg:text-8xl">
                  ฿{service.priceValue?.toLocaleString() || "Custom"}
                </div>
                <p className="font-anuphan mb-12 leading-relaxed font-bold text-slate-400 italic opacity-70">
                  *วางโครงสร้างด้วยมาตรฐาน <br />
                  Next.js 16 High-Performance Specialist
                </p>
                <LineLeadForm
                  variant="button"
                  label="ทักมาคุยรายละเอียดโปรเจกต์"
                  className="w-full py-8 text-lg"
                />
              </div>
              {/* Decorative Background Card */}
              <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-[3.5rem] border border-slate-100 bg-slate-50/50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>
        </div>
      </section>

      {/* 📊 3. สถิติที่พิสูจน์ได้ (Social Proof) */}
      <div className="border-y border-slate-50 bg-white">
        <ImpactStats />
      </div>

      {/* 🧩 4. ส่วนแนะนำเทมเพลต (Contextual Suggestions) */}
      {relatedTemplates && relatedTemplates.length > 0 && (
        <section className="bg-slate-50/50 py-24 lg:py-40">
          <div className="container mx-auto px-4">
            <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl border-l-8 border-emerald-500 pl-10">
                <div className="font-prompt mb-4 flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase">
                  <LayoutTemplate size={16} />
                  Structure Suggestions
                </div>
                <h2 className="font-prompt text-4xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                  เทมเพลตที่เหมาะสำหรับ <br />
                  <span className="text-emerald-500">{service.title}</span>
                </h2>
              </div>
              <Link
                href="/templates"
                className="group font-prompt flex items-center gap-3 text-xs font-black tracking-widest text-slate-400 uppercase transition-all hover:text-slate-900"
              >
                ดูเทมเพลตทั้งหมด{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <TemplateGrid initialTemplates={relatedTemplates} />
          </div>
        </section>
      )}

      {/* 🛡️ 5. ส่วนปิดท้าย: คุยตรงกับคนทำงาน (Personal Authority) */}
      <section className="overflow-hidden bg-white py-24 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-[4rem] border border-slate-100 bg-white p-12 shadow-sm transition-all duration-500 hover:shadow-2xl md:p-24">
            <h2 className="font-prompt mb-12 text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ทำไมต้องเลือกทำกับ <br className="hidden md:block" />
              <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
                นายเอ็มซ่ามากส์?
              </span>
            </h2>

            <div className="font-anuphan max-w-none text-xl leading-relaxed font-bold text-slate-500">
              <p>
                งานของผมไม่ใช่แค่ "รับจ้างทำเว็บ"
                แต่คือการเป็นพาร์ทเนอร์เชิงเทคนิค
                ผมจูนความเร็วให้ถึงขีดสุดและวางรากฐาน SEO
                ให้ธุรกิจคุณหาเงินได้จริง
                <span className="text-slate-950">
                  {" "}
                  ดูแลเองทุกขั้นตอน ไม่ผ่านเซลล์ คุยง่าย จบไว 100% ครับ{" "}
                </span>
              </p>
            </div>

            <div className="group mt-16 rounded-[3rem] border border-slate-50 bg-slate-50/50 p-10 text-center transition-all duration-500 hover:bg-white hover:shadow-xl">
              <h3 className="font-prompt mb-8 text-2xl font-black text-slate-900 uppercase italic">
                พร้อมเริ่มโปรเจกต์หรือยังครับ?
              </h3>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <LineLeadForm
                  variant="button"
                  label="ทักมาปรึกษาผมฟรี"
                  className="w-full min-w-[260px] sm:w-auto"
                />
                <Link
                  href="/case-studies"
                  className="group font-prompt flex items-center gap-2 text-xs font-black tracking-widest text-slate-400 uppercase transition-colors hover:text-slate-900"
                >
                  ดูเคสความสำเร็จที่ผ่านมา{" "}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 Specialist Footer Branding */}
      <footer className="container mx-auto px-4 pb-12 text-center opacity-40 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Specialist Service Managed by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
