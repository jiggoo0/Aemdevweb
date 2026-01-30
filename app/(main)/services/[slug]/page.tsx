/** @format */

import React from "react"
import type { Metadata } from "next"
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

// การดึงพิกัดเทมเพลตที่จูนมาเพื่อแผนงานนี้โดยเฉพาะ
import { getTemplatesBySlugs } from "@/lib/template"
import TemplateCard from "@/components/marketplace/template/TemplateCard"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * [SSG PROTOCOL]: เตรียมพิกัดทางเดินข้อมูลล่วงหน้า
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

/**
 * [SEO METADATA]: กำหนดอัตลักษณ์บริการเชิงเทคนิค
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Service Protocol | Not Found" }

  return {
    title: `${service.title} | ${siteConfig.project.name}`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.project.name}`,
      description: service.description,
      type: "article",
      url: `${siteConfig.project.url}/services/${slug}`,
      images: [{ url: service.thumbnail || siteConfig.project.ogImage }],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = (servicesData as readonly ServiceItem[]).find(
    (s) => s.slug === slug
  )

  if (!service) notFound()

  /**
   * [FIXED]: แก้ไข Error TS2345 (Readonly string[] is not assignable to mutable string[])
   * โดยการใช้ Spread Operator เพื่อกระจายพิกัดข้อมูลสร้าง Array ชุดใหม่
   */
  const recommendedTemplates = getTemplatesBySlugs([
    ...(service.relatedTemplateSlugs || []),
  ])

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* 1. SCHEMA: เชื่อมโยงพิกัดบริการเข้ากับแผนผังองค์กร (Graph Connectivity) */}
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
                seller: { "@id": `${siteConfig.project.url}/#organization` },
              },
            },
          ],
        }}
      />

      {/* [LAYER 0]: Hero Header - พิกัดนำเสนอแผนงานบริการ */}
      <section className="relative overflow-hidden border-b border-[oklch(0.95_0.02_260)] bg-[oklch(0.98_0.01_260)] pt-32 pb-24 lg:pt-48 lg:pb-40 dark:border-[oklch(0.2_0.02_260)] dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <Link
            href="/services"
            className="group hover:text-brand-primary mb-16 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-[oklch(0.6_0.02_260)] uppercase italic transition-colors"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            Service Catalog
          </Link>

          <div className="border-brand-primary max-w-5xl border-l-8 pl-8 md:pl-16">
            <div className="bg-brand-primary/10 text-brand-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[9px] font-black tracking-widest uppercase italic">
              <ShieldCheck size={12} />
              System Node: {service.id}
            </div>
            <h1 className="font-heading text-brand-depth text-6xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[9rem] dark:text-white">
              {service.title}
            </h1>
            <p className="font-body mt-12 max-w-3xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-3xl dark:text-[oklch(0.8_0.02_260)]">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* [LAYER 1]: STRATEGIC PROTOCOL - รายละเอียดการวางโครงสร้างระบบ */}
      <section className="container-za pt-24 lg:pt-48">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-12">
          <div className="space-y-24 lg:col-span-7">
            <div className="space-y-10">
              <h2 className="font-heading text-brand-depth text-4xl font-black tracking-tighter uppercase italic md:text-6xl dark:text-white">
                Strategic <span className="text-brand-primary">Protocol.</span>
              </h2>
              <p className="font-body text-xl leading-relaxed font-medium text-[oklch(0.4_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
                เราวางโครงสร้างระบบของ <strong>{service.title}</strong>{" "}
                ภายใต้มาตรฐานของ <strong>นายเอ็มซ่ามากส์</strong>{" "}
                เพื่อรีดสมรรถนะการเติบโตสูงสุดให้กับธุรกิจของคุณ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="depth-card group hover:border-brand-primary/40 flex items-start gap-5 p-10"
                >
                  <div className="bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl group-hover:text-white">
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <span className="font-body text-brand-depth text-lg leading-tight font-bold dark:text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Sidebar Node */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="bg-brand-depth shadow-node relative overflow-hidden rounded-[4rem] p-12 text-white dark:bg-[oklch(0.2_0.02_260)]">
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4">
                    <p className="font-heading text-brand-primary text-[10px] font-black tracking-[0.5em] uppercase italic">
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
                    className="group bg-brand-primary text-brand-depth relative flex w-full items-center justify-between rounded-3xl px-10 py-7 transition-all hover:bg-white"
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
                {/* Visual Accent */}
                <div className="bg-brand-primary/10 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full p-32 blur-3xl" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* [LAYER 2]: READY ASSETS - ระบบงานพร้อมใช้ที่จูนมาเพื่อแผนงานนี้ */}
      {recommendedTemplates.length > 0 && (
        <section className="mt-32 border-t border-[oklch(0.95_0.02_260)] pt-32 lg:mt-56 lg:pt-48 dark:border-[oklch(0.2_0.02_260)]">
          <div className="container-za">
            <div className="mb-20 space-y-6">
              <h2 className="font-heading text-brand-depth text-5xl font-black tracking-tighter uppercase italic md:text-7xl dark:text-white">
                Ready <span className="text-brand-primary">Assets.</span>
              </h2>
              <p className="font-body text-xl font-bold text-[oklch(0.5_0.02_260)] md:text-2xl">
                เลือกโครงสร้างเว็บไซต์สำเร็จรูปที่ นายเอ็มซ่ามากส์
                พัฒนามาเพื่อแผนงานนี้โดยเฉพาะ
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
