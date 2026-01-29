/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { templateRegistry } from "../_registry"
import { siteConfig } from "@/constants/site-config"
import { SEOContract } from "../_contracts/seo"
import { JsonLd } from "@/components/seo/JsonLd"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * [METADATA STRATEGY]: ระบบการจัดการข้อมูล SEO รายโครงการ
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความน่าเชื่อถือผ่านโครงสร้างข้อมูลที่แม่นยำ (Semantic SEO)
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) return { title: "404 | Configuration Not Found" }

  const data = templateEntry.data as unknown as SEOContract
  const title = `${data.seo?.title || templateEntry.metadata.name} | Strategic Configuration - ${siteConfig.project.shortName}`

  return {
    title,
    description: data.seo?.description || templateEntry.metadata.description,
    openGraph: {
      title,
      description: data.seo?.description || templateEntry.metadata.description,
      url: `${siteConfig.project.url}/templates/${slug}`,
      images: [{ url: data.seo?.ogImage || siteConfig.project.ogImage }],
      type: "website",
    },
  }
}

/**
 * [SYSTEM CONFIGURATION PREVIEW]: การแสดงผลอินเทอร์เฟซและโครงสร้างระบบจริง
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การแสดงสมรรถนะของโครงสร้างระบบพื้นฐาน AEM 2026 ในรูปแบบ Real-time
 */
export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) notFound()

  const LiveComponent = templateEntry.component
  const liveData = templateEntry.data

  return (
    <div className="relative min-h-screen bg-white selection:bg-emerald-500/20">
      <JsonLd
        type="Product"
        data={{
          name: templateEntry.metadata.name,
          image: templateEntry.metadata.thumbnail,
          description: templateEntry.metadata.description,
          brand: { "@type": "Brand", name: siteConfig.company.name },
          offers: {
            "@type": "Offer",
            price: templateEntry.metadata.priceValue.toString(),
            priceCurrency: "THB",
          },
        }}
      />

      {/* [LAYER 1]: Floating Interface Hub (Specialist HUD) */}
      <div className="pointer-events-none fixed inset-x-0 top-6 z-[1000] flex justify-center px-6 md:top-10">
        <div className="flex items-center gap-4 rounded-3xl bg-slate-950/90 p-1.5 pr-2 pl-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-heading text-[10px] font-black tracking-[0.2em] text-white uppercase italic">
              System Live Preview
            </span>
          </div>

          <div className="h-6 w-px bg-white/10" />

          <div className="hidden items-center gap-2 md:flex">
            <span className="font-heading text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
              Config Ref: {templateEntry.metadata.id}
            </span>
          </div>

          <a
            href={siteConfig.links.line}
            target="_blank"
            className="pointer-events-auto flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-2.5 text-[9px] font-black tracking-widest text-slate-950 uppercase italic transition-all hover:bg-white active:scale-95"
          >
            CONSULT STRATEGY
          </a>
        </div>
      </div>

      {/* [LAYER 2]: Tech Specification Banner */}
      <div className="pointer-events-none relative z-10 flex h-10 items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 backdrop-blur-sm">
        <p className="font-heading text-[8px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
          Infrastructure Standard v2026.1
        </p>
        <p className="font-heading text-[8px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
          High-Efficiency Performance Verified
        </p>
      </div>

      {/* [LAYER 3]: Strategic Infrastructure (Live Component Deployment) */}
      <main className="relative z-0 min-h-screen pt-0">
        <LiveComponent data={liveData} />
      </main>

      {/* [LAYER 4]: Minimal Specialist Signature */}
      <footer className="pointer-events-none fixed bottom-6 left-6 z-50 opacity-40">
        <div className="flex flex-col items-start gap-1">
          <p className="font-heading text-[7px] font-black tracking-[0.6em] text-slate-950 uppercase italic">
            Architected by: {siteConfig.expert.name}
          </p>
          <div className="h-[1px] w-12 bg-slate-950" />
        </div>
      </footer>
    </div>
  )
}

/**
 * [SSG PROTOCOL]: การจัดเตรียมเส้นทางข้อมูลล่วงหน้า 100%
 */
export async function generateStaticParams() {
  return Object.keys(templateRegistry).map((slug) => ({ slug }))
}
