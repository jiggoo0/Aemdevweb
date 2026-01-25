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
  ShieldCheck,
  BarChart3,
} from "lucide-react"

// ส่วนจัดการข้อมูลและโครงสร้างระบบ
import { services } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"
import { getTemplatesByServiceCategory } from "@/lib/template"

// ส่วนประกอบคอมโพเนนต์เฉพาะทาง
import { JsonLd } from "@/components/seo/JsonLd"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

/**
 * กลยุทธ์การจัดการข้อมูลส่วนหัว (Metadata Strategy)
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) return { title: `ไม่พบข้อมูลบริการ | ${siteConfig.shortName}` }

  return {
    title: `${service.title} | ระบบงานเว็บเฉพาะทางโดย ${siteConfig.expert}`,
    description: service.description,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: (service as any).image || siteConfig.ogImage }],
    },
  }
}

/**
 * หน้าแสดงรายละเอียดบริการ — ออกแบบมาเพื่อเน้นการปิดการขายและประสิทธิภาพสูงสุด
 */
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  // ดึงรายการเทมเพลตที่แนะนำสำหรับกลุ่มธุรกิจนี้
  const relatedTemplates = await getTemplatesByServiceCategory(service.category)

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Person",
            name: siteConfig.expert,
            url: siteConfig.url,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "THB",
            price: service.priceValue,
          },
        }}
      />

      {/* ส่วนตกแต่งพื้นหลังเชิงเทคนิค */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      {/* การนำทางและ Breadcrumb */}
      <nav className="relative z-10 container mx-auto px-6 pt-32 lg:pt-40">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-500"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to all services
        </Link>
      </nav>

      {/* ส่วนเนื้อหาหลัก (Hero Section) */}
      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            {/* ฝั่งซ้าย: ข้อมูลและจุดเด่นของบริการ */}
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-2 text-[10px] font-black tracking-widest text-emerald-600 uppercase italic">
                <Zap size={14} fill="currentColor" />
                Performance Specialist v2026
              </div>

              <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl">
                {service.title.split(" ")[0]} <br />
                <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-[12px]">
                  {service.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="font-anuphan max-w-xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                {service.description}
              </p>

              <div className="space-y-5 pt-4">
                {service.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 border-l-4 border-slate-50 pl-6 transition-all hover:border-emerald-500"
                  >
                    <CheckCircle2
                      size={24}
                      className="shrink-0 text-emerald-500"
                    />
                    <span className="font-anuphan text-lg leading-none font-bold text-slate-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ฝั่งขวา: การแสดงราคาและส่วนติดต่อ Lead Generation */}
            <div className="relative">
              <div className="shadow-3xl relative overflow-hidden rounded-[4rem] bg-slate-950 p-10 text-white md:p-20">
                <div className="pointer-events-none absolute top-0 right-0 p-10 opacity-5">
                  <ShieldCheck size={300} className="text-emerald-500" />
                </div>

                <div className="relative z-10">
                  <div className="font-prompt mb-10 text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase italic">
                    Estimated Budget Starting At
                  </div>
                  <div className="font-prompt mb-8 text-7xl font-black tracking-tighter italic md:text-9xl">
                    <span className="mr-2 text-3xl font-normal text-slate-600">
                      ฿
                    </span>
                    {service.priceValue?.toLocaleString() || "Custom"}
                  </div>
                  <p className="font-anuphan mb-12 border-l-2 border-white/10 pl-6 leading-relaxed font-bold text-slate-400">
                    สร้างด้วยโครงสร้างระบบประสิทธิภาพสูง <br />
                    พร้อมระบบจัดการข้อมูลมาตรฐานปี 2026
                  </p>

                  <LineLeadForm
                    variant="button"
                    label="จองคิวเริ่มโปรเจกต์กับผม"
                    className="h-20 w-full rounded-2xl bg-emerald-500 text-xl font-black text-slate-950 shadow-xl shadow-emerald-500/10 transition-colors hover:bg-white"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-[4.5rem] bg-slate-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนแสดงสถิติความสำเร็จ */}
      <div className="border-y border-slate-50 bg-white">
        <ImpactStats />
      </div>

      {/* ส่วนแนะนำเทมเพลตที่เกี่ยวข้อง (Marketplace Integration) */}
      {relatedTemplates && relatedTemplates.length > 0 && (
        <section className="overflow-hidden bg-slate-50/50 py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-2xl border-l-8 border-emerald-500 pl-8">
                <div className="font-prompt mb-4 flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                  <LayoutTemplate size={16} />
                  Structure Suggestions
                </div>
                <h2 className="font-prompt text-5xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
                  เทมเพลตที่แนะนำ <br />
                  <span className="text-emerald-500">สำหรับคุณ</span>
                </h2>
              </div>
              <Link
                href="/templates"
                className="group font-prompt flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:text-slate-950"
              >
                Explore Marketplace
                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>

            <TemplateGrid initialTemplates={relatedTemplates} />
          </div>
        </section>
      )}

      {/* ส่วนตอกย้ำความเชื่อมั่น (Authority Section) */}
      <section className="overflow-hidden py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-5xl rounded-[4rem] bg-slate-50 p-12 text-center shadow-2xl shadow-slate-200/50 md:p-24">
            <div className="absolute -top-10 -left-10 opacity-5">
              <BarChart3 size={200} className="text-emerald-500" />
            </div>
            <h2 className="font-prompt mb-10 text-4xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
              ทำไมต้องเลือกทำกับ <br />
              <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-8">
                นายเอ็มซ่ามากส์?
              </span>
            </h2>

            <div className="font-anuphan mx-auto mb-16 max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              <p>
                ผมไม่ได้แค่รับจ้างทำเว็บ แต่ผมคือที่ปรึกษาเชิงเทคนิค
                ผมเปลี่ยนความเร็วให้เป็นยอดขาย และวางโครงสร้างระบบการค้นหา
                ให้ธุรกิจของคุณทำเงินได้ในระยะยาว
                <span className="text-slate-900">
                  {" "}
                  ดูแลเองทุกขั้นตอน งานจบไว รับผิดชอบเต็มร้อยแน่นอนครับ
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <LineLeadForm
                variant="button"
                label="ทักมาคุยรายละเอียดฟรี"
                className="h-20 px-12 text-xl"
              />
              <Link
                href="/case-studies"
                className="group font-prompt flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:text-slate-950"
              >
                Success Stories
                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนท้ายข้อมูลระบบ */}
      <footer className="py-12 text-center opacity-30 select-none">
        <p className="font-prompt text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-End Systems by {siteConfig.expert} v2026
        </p>
      </footer>
    </main>
  )
}
