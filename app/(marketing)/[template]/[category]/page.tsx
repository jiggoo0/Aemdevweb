/** @format */

import React from "react"
import { notFound } from "next/navigation"

// 📦 Specialist Logic & Data Hub
import { getAllTemplates } from "@/lib/template"
import { siteConfig } from "@/constants/site-config"

// 🧩 Specialist UI Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import TemplateCard from "@/components/template/marketplace/TemplateCard"
import LineStickyButton from "@/components/shared/LineStickyButton"

/**
 * 🎨 Props Interface: รองรับ Async Params
 */
interface CategoryPageProps {
  params: Promise<{ template: string; category: string }>
}

/**
 * 🛠️ 1. Static Paths Generation (SSG Optimization)
 */
export async function generateStaticParams() {
  const templates = await getAllTemplates()

  // ✅ [FIXED]: เพิ่มการตรวจสอบข้อมูลก่อน map เพื่อป้องกัน undefined error ตอน Build
  return templates
    .filter((t) => t.category)
    .map((t) => ({
      template: "templates",
      category: t.category.toLowerCase(),
    }))
}

/**
 * 🔍 2. Metadata Strategy
 */
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params
  if (!category) return { title: "Category Not Found" }

  const title = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${title} Templates | Premium Architecture by ${siteConfig.expert}`,
    description: `รวมเทมเพลตเว็บไซต์หมวดหมู่ ${title} ที่เน้น PageSpeed และ Conversion สูงสุด`,
  }
}

/**
 * 🚀 3. Category Listing Component
 */
export default async function TemplateCategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params
  const allTemplates = await getAllTemplates()

  // 🛡️ [GUARD]: กรองเทมเพลตที่ตรงกับหมวดหมู่ และป้องกันกรณี category เป็น undefined
  const filteredTemplates = allTemplates.filter(
    (t) => t.category && t.category.toLowerCase() === category?.toLowerCase()
  )

  if (filteredTemplates.length === 0) {
    notFound()
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/20">
      {/* 🌌 Background Infrastructure */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        <TemplateHero
          title={categoryName.toUpperCase()}
          subtitle={`คัดสรรสถาปัตยกรรมเว็บไซต์ในหมวด ${categoryName} เพื่อผลลัพธ์ทางธุรกิจที่ดีที่สุด`}
          image="/images/og-image.png" // หรือใช้ภาพประจำหมวดหมู่
          category="Marketplace"
          themeColor="emerald"
        />

        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </div>
      </main>

      <LineStickyButton />

      <footer className="mt-24 border-t border-white/5 bg-slate-950 py-12 text-center opacity-30">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-500 uppercase italic">
          High-End Solution by {siteConfig.expert} v2026
        </p>
      </footer>
    </div>
  )
}
