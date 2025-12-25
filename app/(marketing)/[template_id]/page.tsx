/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: DYNAMIC TEMPLATE ROUTER (STABLE)
// Path: app/(marketing)/[template_id]/page.tsx
// Identity: Central Entry Point for Dynamic Routing
// ----------------------------------------------------

import { notFound } from "next/navigation"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

/**
 * 🛰️ DYNAMIC_SEO_GENERATOR
 * ดึงค่า Metadata จาก config.ts ของแต่ละเทมเพลตมาสร้าง SEO โดยอัตโนมัติ
 */
export async function generateMetadata({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // ป้องกันกรณีไม่พบข้อมูล Metadata
  if (!entry || !entry.config?.metadata) {
    return {
      title: "Marketing Template | AEMDEVWEB",
    }
  }

  const { metadata } = entry.config

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : [],
    },
  }
}

/**
 * ⚡ STATIC_GENERATION (SSG)
 * สร้าง Path ของเทมเพลตทั้งหมดไว้ล่วงหน้าตอน Build Time เพื่อความเร็วสูงสุด
 */
export async function generateStaticParams() {
  return Object.keys(TEMPLATE_REGISTRY).map((id) => ({
    template_id: id,
  }))
}

/**
 * 🎨 MARKETING_PAGE_RENDERER
 * หน้าแสดงผลหลักที่สลับเทมเพลตตาม [template_id]
 */
export default async function MarketingPage({ params }: Props) {
  // จัดการ Async Params ตามมาตรฐาน Next.js 15
  const { template_id } = await params

  // ดึงข้อมูลจาก Registry (Case-insensitive)
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // หากไม่มีเทมเพลตใน Registry ให้ส่งไปหน้า 404
  if (!entry) return notFound()

  // ดึง Component ออกมา (เช่น StarterTemplate, CafeTemplate, ClinicTemplate)
  const SelectedTemplate = entry.component

  return (
    <main className="selection:bg-slate-900 selection:text-white">
      {/* 🚀 PASS_DATA: ส่งก้อน config ทั้งหมดเข้าไปในชื่อ 'data' 
        เพื่อให้ทุก Template ดึงไปใช้งานผ่าน props.data ได้เหมือนกันทั้งหมด 
      */}
      <SelectedTemplate data={entry.config} />
    </main>
  )
}
