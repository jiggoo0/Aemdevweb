/** @format */

import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// 📦 Specialist Logic & Data
import { getAllTemplates } from "@/lib/template"
import { siteConfig } from "@/constants/site-config"

// 🧩 Specialist Components (Marketplace Layer)
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid"
import { TemplateFilter } from "@/components/template/marketplace/TemplateFilter"
import { TemplateSearch } from "@/components/template/marketplace/TemplateSearch"

// ✅ UI Shared Components
import LineStickyButton from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🎨 CategoryPage Interface (Next.js 16 Specialist)
 */
interface CategoryPageProps {
  params: Promise<{
    template: string // หน้าคงที่ เช่น 'templates'
    category: string // หมวดหมู่ เช่น 'booking', 'e-commerce'
  }>
  searchParams: Promise<{
    q?: string // คำค้นหาภายในหมวดหมู่
  }>
}

/**
 * 🛠️ 1. generateStaticParams
 * กวาดหาหมวดหมู่ทั้งหมดเพื่อสร้างหน้า Static ล่วงหน้า เพิ่มประสิทธิภาพความเร็วสูงสุด
 */
export async function generateStaticParams() {
  const templates = await getAllTemplates()

  // สร้างรายการหมวดหมู่ที่ไม่ซ้ำกัน (Unique Categories)
  const categories = Array.from(
    new Set(templates.map((t) => t.category.toLowerCase()))
  )

  return categories.map((cat) => ({
    template: "templates",
    category: cat,
  }))
}

/**
 * 🔍 2. generateMetadata (Technical SEO Specialist)
 */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  return {
    title: `${categoryName} Templates | สถาปัตยกรรมความเร็วสูง | ${siteConfig.shortName}`,
    description: `เลือกชมโครงสร้างเว็บไซต์หมวด ${categoryName} ที่ผ่านการจูนความเร็วและ SEO ระดับ Specialist โดย นายเอ็มซ่ามากส์`,
    alternates: {
      canonical: `${siteConfig.url}/templates/${category}`,
    },
  }
}

/**
 * 🚀 3. Main Category Page Component
 */
export default async function TemplateCategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  // ดึงค่า Params และ SearchParams แบบ Async ตามมาตรฐาน Next.js 16
  const { category: categorySlug, template } = await params
  const { q: query } = await searchParams

  // 🛡️ Guard Clause: ตรวจสอบ URL Prefix (ต้องเป็น /templates/...)
  if (template !== "templates") {
    return notFound()
  }

  const allTemplates = await getAllTemplates()

  // 🛡️ Guard Clause: ตรวจสอบว่ามีหมวดหมู่นี้ในระบบจริงหรือไม่
  const categoryExists = allTemplates.some(
    (t) => t.category.toLowerCase() === categorySlug.toLowerCase()
  )

  if (!categoryExists) {
    return notFound()
  }

  // 🔍 Filtering Logic: คัดกรองตามหมวดหมู่และคำค้นหา
  const filteredTemplates = allTemplates.filter((tpl) => {
    const isInCategory =
      tpl.category.toLowerCase() === categorySlug.toLowerCase()
    const matchesSearch = query
      ? tpl.name.toLowerCase().includes(query.toLowerCase()) ||
        tpl.description?.toLowerCase().includes(query.toLowerCase())
      : true

    return isInCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      {/* 🔎 บอก Google Search AI ถึงหมวดหมู่เทมเพลตนี้ */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: `หมวดหมู่เทมเพลต ${categorySlug} | ${siteConfig.shortName}`,
          description: `รวมเทมเพลตเว็บไซต์หมวด ${categorySlug} ที่เน้นความไวและ SEO`,
          url: `${siteConfig.url}/templates/${categorySlug}`,
        }}
      />

      <TemplateNavbar />

      <main className="flex-1">
        {/* 🎭 Hero Layer: ดุดันสไตล์ Industrial Minimalism */}
        <TemplateHero
          title={categorySlug.replace("-", " ").toUpperCase()}
          subtitle={`รวมสถาปัตยกรรมเว็บไซต์หมวด ${categorySlug} ที่ผมออกแบบมาเพื่อปิดการขายให้ SME โดยเฉพาะ`}
          category={categorySlug}
          themeColor="emerald"
        />

        <div className="container mx-auto px-4 py-12">
          {/* 🔍 Search & Filter Layer: ระบบคัดกรองแบบ Real-time */}
          <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
            <TemplateSearch
              placeholder={`ค้นหาเทมเพลตในหมวด ${categorySlug}...`}
            />
            <TemplateFilter activeCategory={categorySlug} />
          </div>

          {/* 🏗️ Result Grid Section */}
          <section className="min-h-[400px]">
            <div className="mb-8 border-l-4 border-emerald-500 pl-6">
              <h2 className="font-prompt text-2xl font-black text-white uppercase italic md:text-3xl">
                {query
                  ? `ผลการค้นหา: "${query}"`
                  : `${categorySlug} Specialist Selection`}
              </h2>
            </div>

            {/* Grid System: แสดงผลรายการเทมเพลตที่คัดกรองแล้ว */}
            <TemplateGrid initialTemplates={filteredTemplates} />
          </section>
        </div>
      </main>

      <LineStickyButton />

      {/* 📍 Specialist Footer Note */}
      <footer className="py-12 text-center opacity-20 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-500 uppercase">
          AEMDEVWEB Industry Standard v2026 — Secure & Fast
        </p>
      </footer>
    </div>
  )
}
