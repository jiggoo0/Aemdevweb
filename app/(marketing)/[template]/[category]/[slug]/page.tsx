/** @format */

import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

// 📦 Specialist Data Logic
import { getAllTemplates, getTemplateBySlug } from "@/lib/template"
import { useMDXComponents } from "@/mdx-components"

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
import { siteConfig } from "@/constants/site-config"

/**
 * 🛠️ 1. generateStaticParams — "สร้างหน้าล่วงหน้าเพื่อความไวระดับ Specialist"
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
 * 🚀 2. Main Detail Page Component (v2026)
 */
export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  // ✅ Next.js 16 มาตรฐาน Specialist ต้อง await params
  const { category, slug } = await params
  const data = await getTemplateBySlug(slug)

  // 🛡️ Guard Clause: ตรวจสอบความถูกต้องของ URL และหมวดหมู่
  if (!data || data.category.toLowerCase() !== category.toLowerCase()) {
    notFound()
  }

  /**
   * 🧪 mdxComponents Registration
   * ลงทะเบียนคอมโพเนนต์เพื่อให้คุณแทรกตัวเลขสถิติหรือขั้นตอนการทำงาน
   * ลงในเนื้อหา MDX ได้โดยตรงครับ
   */
  const mdxComponents = {
    ...useMDXComponents({}),
    TemplatePricingCard,
    WorkProcess,
    ImpactStats,
    SpeedDemon,
    // Specialist Sales Hook: กล่องเน้นย้ำความคุ้มค่า
    SalesHook: ({ children }: { children: React.ReactNode }) => (
      <div className="my-10 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-8 shadow-xl backdrop-blur-sm">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase">
            Specialist Recommendation
          </span>
        </div>
        <div className="font-anuphan leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    ),
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      {/* 🔎 บอก Google Search AI ถึงรายละเอียดสินค้าชิ้นนี้ (Product Schema) */}
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
            availability: "https://schema.org/InStock",
          },
          brand: {
            "@type": "Brand",
            name: siteConfig.shortName,
          },
        }}
      />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* 🎭 Hero Section: เปิดตัวอย่างยิ่งใหญ่สไตล์พรีเมียม */}
        <TemplateHero
          title={data.name}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={data.themeColor || "emerald"}
        />

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* ✍️ Content Area: ส่วนเนื้อหารีวิวและรายละเอียด */}
            <article className="lg:col-span-8">
              <div className="prose prose-invert prose-emerald font-anuphan prose-headings:font-prompt prose-p:text-slate-400 mb-32 max-w-none leading-relaxed">
                <MDXRemote source={data.content} components={mdxComponents} />
              </div>

              {/* 📱 Interactive Device Preview: แสดงผลงานจริงในกรอบอุปกรณ์ */}
              <section id="preview" className="scroll-mt-32">
                <div className="mb-10 border-l-4 border-emerald-500 pl-6">
                  <h3 className="font-prompt text-3xl font-black tracking-tighter text-white uppercase italic">
                    Live Experience
                  </h3>
                  <p className="font-anuphan mt-2 text-slate-500">
                    สัมผัสประสบการณ์ความไวและ UI
                    ที่ออกแบบมาเพื่อการปิดการขายจริง
                  </p>
                </div>
                <Suspense
                  fallback={
                    <div className="h-[600px] w-full animate-pulse rounded-[3rem] bg-white/5" />
                  }
                >
                  <DevicePreview desktopSrc={data.image} title={data.name} />
                </Suspense>
              </section>
            </article>

            {/* 🛒 Sales Sidebar: กล่องราคาที่เลื่อนตามหน้าจอ (Sticky) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <TemplatePricingCard
                  title={data.name}
                  price={data.price}
                  salePrice={data.salePrice}
                  features={data.features || []}
                  themeColor={data.themeColor}
                />

                {/* Specialist Trust Note */}
                <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 text-center">
                  <p className="font-anuphan text-xs font-bold text-slate-500">
                    *เทมเพลตนี้ได้รับการปรับจูน Technical SEO <br />
                    โดย นายเอ็มซ่ามากส์ เรียบร้อยแล้ว 100%
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <LineStickyButton />

      {/* 📍 Specialist Footer Note */}
      <footer className="py-12 text-center opacity-20 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-500 uppercase">
          AEMDEVWEB Template Engine v2026 — Designed for Conversion
        </p>
      </footer>
    </div>
  )
}
