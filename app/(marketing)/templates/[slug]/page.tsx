/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { templateRegistry } from "../_registry"
import { siteConfig } from "@/constants/site-config"
// พิกัดสัญญาข้อมูล SEO
import { SEOContract } from "../_contracts/seo"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * Metadata Engine: วางพิกัด SEO รายหน้าเทมเพลต
 * [FIXED]: แก้ปัญหา TS2322 โดยการระบุพิกัดรูปภาพสำรองป้องกันค่า undefined
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) return {}

  // ยืนยันพิกัดข้อมูลผ่านสัญญา SEO
  const data = templateEntry.data as SEOContract

  return {
    title: `พรีวิวโครงสร้าง ${data.seo.title} | ${siteConfig.project.shortName}`,
    description: data.seo.description,
    openGraph: {
      // [FIXED]: ใส่ค่าสำรองจาก siteConfig กรณีที่ตัวเทมเพลตไม่มีรูป ogImage
      images: [data.seo.ogImage || siteConfig.project.ogImage],
    },
  }
}

/**
 * TemplateDetailPage - พิกัดหน้าแสดงผลโครงสร้างเว็บไซต์ (Live Preview)
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) notFound()

  const LiveComponent = templateEntry.component
  const liveData = templateEntry.data as Record<string, unknown> & SEOContract

  return (
    <div className="relative min-h-screen bg-white">
      {/* ส่วนแจ้งสถานะระบบ (Overlay) ที่กดทะลุได้ */}
      <div className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center">
        <div className="mt-20">
          <div className="flex items-center gap-3 rounded-full bg-slate-900/95 px-5 py-2.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-prompt text-[10px] font-black tracking-widest text-white uppercase italic">
              System Live Preview
            </span>
          </div>
        </div>
      </div>

      {/* พื้นที่จัดวางงานระบบจริง */}
      <div className="relative">
        <header className="pointer-events-none relative z-10 flex h-12 items-center justify-center border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-slate-200" />
            <p className="font-prompt text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
              Technical Structure v2026 • {slug}
            </p>
            <span className="h-px w-8 bg-slate-200" />
          </div>
        </header>

        <main className="relative z-0">
          <LiveComponent data={liveData} />
        </main>
      </div>

      <footer className="pointer-events-none fixed bottom-8 left-0 w-full text-center opacity-30">
        <p className="font-prompt text-[8px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          Verified by นายเอ็มซ่ามากส์ • {siteConfig.project.url}
        </p>
      </footer>
    </div>
  )
}
