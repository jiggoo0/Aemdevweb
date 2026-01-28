/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { templateRegistry } from "../_registry"
import { siteConfig } from "@/constants/site-config"

// ข้อมูลข้อตกลง SEO สำหรับการแสดงผลพิกัดหน้าบ้าน
import { SEOContract } from "../_contracts/seo"

/**
 * [Type Definitions]: กำหนดรูปแบบข้อมูลสำหรับ Component
 */
interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * [METADATA ENGINE]: วางพิกัดการค้นหาและรูปภาพแชร์ (OG Image)
 * แนวคิด: ดึงข้อมูลจากส่วนจัดการ SEO เพื่อให้ Google และ AI เข้าใจข้อมูลหน้าตัวอย่างนี้ได้กริบที่สุด
 * วางระบบโดย: นายเอ็มซ่ามากส์ (Specialist ผู้วางระบบ)
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  if (!templateEntry) {
    return { title: `404 | ไม่พบข้อมูลพิกัดชุดเว็บ` }
  }

  /**
   * [FIX]: ล้างพิกัด Error TS2352 โดยบีบ Type ผ่าน unknown
   */
  const data = templateEntry.data as unknown as SEOContract
  const title = `ตัวอย่างเว็บ: ${data.seo?.title || templateEntry.metadata.name} | ${siteConfig.project.shortName} Shops.`
  const description =
    data.seo?.description || templateEntry.metadata.description

  return {
    title,
    description,
    keywords: data.seo?.keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.project.url}/templates/${slug}`,
      images: [
        {
          url: data.seo?.ogImage || siteConfig.project.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.seo?.ogImage || siteConfig.project.ogImage],
    },
  }
}

/**
 * [TEMPLATE DETAIL PAGE]: หน้าแสดงผลเว็บไซต์ตัวอย่าง (Live Preview)
 * แนวคิด: แสดงผลหน้าเว็บจริงแบบรวดเร็วที่สุดเพื่อโชว์ความแรงของระบบงานปี 2026
 * ตัวตน: นายเอ็มซ่ามากส์ (Instant Deployment Specialist)
 */
export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const templateEntry = templateRegistry[slug]

  // [FALLBACK]: หากไม่พบแบบที่เลือกในพิกัดระบบ ให้ไปหน้า 404 ทันทีครับ
  if (!templateEntry) notFound()

  /**
   * [CORE RENDERER]: ดึงส่วนแสดงผลจากทะเบียนชุดเว็บ
   * [FIX]: บีบพิกัดข้อมูลให้ตรงตามสัญญาเพื่อให้ระบบทำงานได้กริบ 100%
   */
  const LiveComponent = templateEntry.component
  const liveData = templateEntry.data

  return (
    <div className="relative min-h-screen bg-white selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* [เลเยอร์ 1] - ส่วนแจ้งสถานะหน้าพรีวิว
          โชว์ความโปรด้วยสถานะ Live เพื่อให้ลูกค้ารู้ว่านี่คือ "ของจริง" ที่ซิ่งได้จริง
      */}
      <div className="pointer-events-none fixed inset-x-0 top-16 z-[999] flex justify-center px-6 md:top-20">
        <div className="shadow-3xl flex items-center gap-4 rounded-[1.25rem] bg-slate-950/90 px-6 py-3 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="relative flex h-2.5 w-2.5">
            <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <div className="relative h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
          </div>
          <span className="font-heading text-[10px] font-black tracking-[0.2em] text-white uppercase italic">
            Live Website Preview
          </span>
          <div className="h-4 w-px bg-white/10" />
          <span className="font-heading text-[9px] font-black tracking-widest text-slate-400 uppercase italic">
            ID: {templateEntry.metadata.id}
          </span>
        </div>
      </div>

      {/* [เลเยอร์ 2] - แถบแจ้งสเปกพิกัดเบื้องหลัง
          ตอกย้ำมาตรฐานความแรงของระบบงานสไตล์ AEM Engine 2026
      */}
      <header className="pointer-events-none relative z-10 flex h-14 items-center justify-center border-b border-slate-50 bg-slate-50/30 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <div className="hidden h-[1px] w-12 bg-slate-200 md:block" />
          <p className="font-heading text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
            AEM v2026 • Build: {slug} • Next-Gen Speed Enabled
          </p>
          <div className="hidden h-[1px] w-12 bg-slate-200 md:block" />
        </div>
      </header>

      {/* [เลเยอร์ 3] - พื้นที่แสดงพิกัดเว็บไซต์จริง
          แสดงผลคอมโพเนนต์แบบไหลลื่นตามชุดข้อมูลที่ดึงมาจากพิกัดทะเบียน
      */}
      <main className="relative z-0 min-h-screen">
        <LiveComponent data={liveData} />
      </main>

      {/* [เลเยอร์ 4] - ส่วนท้ายยืนยันมาตรฐานพิกัดงานเนี้ยบ */}
      <footer className="pointer-events-none fixed bottom-8 left-0 w-full text-center opacity-40 select-none">
        <p className="font-heading text-[8px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Performance System by {siteConfig.expert.name} • 2026 Edition
        </p>
      </footer>
    </div>
  )
}

/**
 * [DYNAMIC STRATEGY]: เตรียมพิกัดหน้าเว็บล่วงหน้าเพื่อให้โหลดได้ไวระดับปีศาจ
 * เมื่อลูกค้าคลิกมาจากหน้ารวม Shops ระบบจะแสดงผลได้ทันทีโดยไม่ต้องรอพิกัดเครื่องให้เสียเวลาครับ
 */
export async function generateStaticParams() {
  const slugs = Object.keys(templateRegistry)
  return slugs.map((slug) => ({ slug }))
}
