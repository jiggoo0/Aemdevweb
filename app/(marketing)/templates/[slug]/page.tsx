/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllTemplates } from "@/lib/template"
import { templateRegistry } from "../_registry"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 1. ฟังก์ชันสร้าง Metadata (SEO Strategy)
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) return { title: "ไม่พบข้อมูล" }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = templateEntry.data as any

  return {
    title: `${data.seo?.title || "Template"} | AEMDEVWEB`,
    description: data.seo?.description,
    openGraph: {
      title: data.seo?.title,
      description: data.seo?.description,
      images: [data.seo?.ogImage || "/og-image.png"],
    },
  }
}

/**
 * 2. หน้าแสดงผลพรีวิวงานจริง (Clean View)
 */
export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) notFound()

  const LiveComponent = templateEntry.component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const liveData = templateEntry.data as any

  return (
    <div className="min-h-screen bg-white selection:bg-emerald-500/20">
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-10 z-[60] flex justify-center px-6">
          <div className="flex items-center gap-3 rounded-full bg-slate-950/90 px-4 py-2 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Live Content: {liveData.seo?.title?.split("|")[0] || "System Ready"}
          </div>
        </div>

        <section className="relative z-10 bg-white">
          <div className="flex items-center justify-center border-b border-slate-100 bg-slate-50/50 py-4">
            <span className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
              Live Layout Preview v2026
            </span>
          </div>

          <div className="template-live-render min-h-screen">
            <LiveComponent data={liveData} />
          </div>
        </section>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const templates = getAllTemplates()
  return templates.map((slug) => ({ slug }))
}
