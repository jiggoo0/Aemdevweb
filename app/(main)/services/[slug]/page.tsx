/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  ChevronLeft,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

import { servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServiceItem } from "@/types"

// การเรียกใช้ข้อมูลรูปแบบระบบที่เกี่ยวข้อง
import { getTemplatesBySlugs } from "@/lib/template"
import TemplateCard from "@/components/marketplace/template/TemplateCard"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: `${service.title} | ${siteConfig.project.name}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.project.name}`,
      description: service.description,
      type: "article",
      url: `${siteConfig.project.url}/services/${slug}`,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = (servicesData as ServiceItem[]).find((s) => s.slug === slug)

  if (!service) notFound()

  // การจัดเตรียมรูปแบบระบบ (Templates) ที่สัมพันธ์กับแผนงานหลัก
  const recommendedTemplates = getTemplatesBySlugs(
    service.relatedTemplateSlugs || []
  )

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      <JsonLd
        type="Graph"
        data={{
          "@graph": [
            {
              "@type": "Service",
              "@id": `${siteConfig.project.url}/services/${slug}/#service`,
              name: service.title,
              description: service.description,
              provider: { "@id": `${siteConfig.project.url}/#organization` },
              offers: {
                "@type": "Offer",
                price: service.priceValue,
                priceCurrency: "THB",
                availability: "https://schema.org/InStock",
              },
            },
          ],
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* [HERO SECTION]: ส่วนนำเสนอหัวข้อและรายละเอียดแผนงานหลัก */}
      <section className="relative overflow-hidden border-b border-slate-50 bg-slate-50/50 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-6">
          <Link
            href="/services"
            className="group mb-16 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            Service Catalog
          </Link>

          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-[9px] font-black tracking-widest text-emerald-600 uppercase italic">
              <ShieldCheck size={12} />
              System Ref: {service.id}
            </div>
            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[10rem]">
              {service.title}
            </h1>
            <p className="font-body mt-12 max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* [CONTENT SECTION]: รายละเอียดกลยุทธ์และคุณสมบัติของระบบ */}
      <section className="container mx-auto px-6 pt-24 lg:pt-48">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="space-y-24 lg:col-span-7">
            <div className="space-y-10">
              <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
                Strategic <span className="text-emerald-500">Protocol.</span>
              </h2>
              <p className="font-body text-xl leading-relaxed font-medium text-slate-600">
                เราวางโครงสร้างระบบของ <strong>{service.title}</strong>{" "}
                โดยยึดเป้าหมายความสำเร็จของธุรกิจคุณเป็นหัวใจสำคัญ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white">
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <span className="font-body text-lg leading-tight font-bold text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: ส่วนสรุปมูลค่าการลงทุนและการเริ่มต้นโครงการ */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-emerald-500/10">
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <p className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-400 uppercase italic">
                      Investment Package
                    </p>
                    <div className="flex items-baseline gap-4">
                      <span className="font-heading text-6xl font-black italic md:text-8xl">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  <a
                    href={siteConfig.links.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-between rounded-3xl bg-emerald-500 px-10 py-7 text-slate-950 transition-all hover:bg-white"
                  >
                    <span className="font-heading text-xs font-black tracking-[0.3em] uppercase italic">
                      Start Project Now
                    </span>
                    <ArrowRight
                      size={24}
                      strokeWidth={3}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* [RECOMMENDED ASSETS]: โซลูชันสำเร็จรูปที่พัฒนามาเพื่อประสิทธิภาพสูงสุด */}
      {recommendedTemplates.length > 0 && (
        <section className="mt-32 border-t border-slate-100 pt-32 lg:mt-56 lg:pt-48">
          <div className="container mx-auto px-6">
            <div className="mb-20 space-y-6">
              <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
                Ready <span className="text-emerald-500">Assets.</span>
              </h2>
              <p className="font-body text-xl font-bold text-slate-500 md:text-2xl">
                โซลูชันรูปแบบระบบที่พัฒนาและทดสอบมาเพื่อประสิทธิภาพสูงสุดร่วมกับแผนงานนี้
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recommendedTemplates.map((template) => (
                <TemplateCard key={template.slug} template={template} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
