/** @format */

import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

// 🛠️ Icons & UI Essentials
import { ShieldCheck, Bell } from "lucide-react"

// 📦 Specialist Logic & Data Hub
import { getAllTemplates, getTemplateBySlug } from "@/lib/template"
import { useMDXComponents } from "@/mdx-components"
import { siteConfig } from "@/constants/site-config"

// 🚀 Sales Engine Components
import WorkProcess from "@/components/sales-engine/WorkProcess"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"

// 🧩 Specialist UI Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import LineStickyButton from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

interface TemplatePageProps {
  params: Promise<{ category: string; slug: string }>
}

/**
 * 🛠️ 1. Static Generation
 */
export async function generateStaticParams() {
  const templates = await getAllTemplates()
  return templates.map((t) => ({
    template: "templates",
    category: t.category.toLowerCase(),
    slug: t.slug.toLowerCase(),
  }))
}

/**
 * 🔍 2. Metadata Strategy
 */
export async function generateMetadata({ params }: TemplatePageProps) {
  const { slug } = await params
  const data = await getTemplateBySlug(slug)
  if (!data) return { title: "Template Not Found" }

  return {
    title: `${data.name} | Premium Web Architecture by ${siteConfig.expert}`,
    description: data.description,
    alternates: {
      canonical: `${siteConfig.url}/templates/${data.category.toLowerCase()}/${slug}`,
    },
  }
}

/**
 * 🚀 3. Main Detail Page Component
 */
export default async function TemplateDetailPage({
  params,
}: TemplatePageProps) {
  const { category, slug } = await params
  const data = await getTemplateBySlug(slug)

  if (!data || data.category.toLowerCase() !== category.toLowerCase()) {
    notFound()
  }

  const mdxComponents = {
    ...useMDXComponents({}),
    TemplatePricingCard,
    WorkProcess,
    ImpactStats,
    SpeedDemon,
    ShieldCheck,
    Bell,
    SalesHook: ({ children }: { children: React.ReactNode }) => (
      <div className="group relative my-12 overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-emerald-500/[0.03] p-8 transition-all hover:bg-emerald-500/[0.05] md:p-12">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-500 uppercase italic">
              Specialist Strategy
            </span>
          </div>
          <div className="font-anuphan text-lg leading-relaxed font-medium text-slate-300 md:text-xl">
            {children}
          </div>
        </div>
      </div>
    ),
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Product"
        data={{
          name: data.name,
          description: data.description,
          image: data.image,
          offers: {
            "@type": "Offer",
            price: data.salePrice || data.price,
            priceCurrency: "THB",
          },
        }}
      />

      {/* 🌌 Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        <TemplateHero
          title={data.name.toUpperCase()}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={data.themeColor || "emerald"}
        />

        {/* 🛠️ [LAYOUT FIXED]: จำกัดความกว้างสูงสุดและจัดการ Grid ให้สมดุล */}
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* 📝 Content Area (8/12) */}
            <article className="space-y-20 overflow-hidden lg:col-span-8">
              <div className="prose prose-invert prose-emerald prose-headings:font-prompt prose-p:font-anuphan prose-p:text-lg prose-p:leading-relaxed prose-li:font-anuphan prose-li:text-lg max-w-full">
                <MDXRemote source={data.content} components={mdxComponents} />
              </div>

              {/* Live Preview Interface */}
              <section id="preview" className="scroll-mt-32 space-y-10">
                <div className="border-l-[6px] border-emerald-500 pl-6">
                  <h3 className="font-prompt text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
                    Live Preview
                  </h3>
                </div>
                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-[2.5rem] bg-white/5" />
                  }
                >
                  <DevicePreview desktopSrc={data.image} title={data.name} />
                </Suspense>
              </section>
            </article>

            {/* 💰 Sidebar (4/12) - ปรับ Sticky Behavior ให้ไม่ยืดล้น */}
            <aside className="h-fit space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              <TemplatePricingCard
                title={data.name}
                price={data.price}
                salePrice={data.salePrice}
                features={data.features || []}
                themeColor={data.themeColor}
              />

              {/* Trust Infrastructure Card */}
              <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-md">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                <p className="font-anuphan text-sm leading-relaxed font-bold text-slate-400 italic">
                  สถาปัตยกรรมนี้ผ่านการ Audit โดย{" "}
                  <span className="text-white">{siteConfig.expert}</span>
                  <br />
                  Performance Specialist Standard
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <LineStickyButton />

      <footer className="mt-24 border-t border-white/5 bg-slate-950 py-12 text-center opacity-30">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-500 uppercase italic">
          Managed by {siteConfig.expert} v2026 — Expert Authority
        </p>
      </footer>
    </div>
  )
}
