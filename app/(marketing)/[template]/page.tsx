/** @format */

import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

// 📦 Specialist Logic & Data
import { getAllTemplates } from "@/lib/template"
import { siteConfig } from "@/constants/site-config"

// 🧩 Specialist Marketplace Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid"
import { TemplateFilter } from "@/components/template/marketplace/TemplateFilter"
import { TemplateSearch } from "@/components/template/marketplace/TemplateSearch"

// ✅ UI Shared Components
import LineStickyButton from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🎨 Page Interface
 */
interface TemplateMainPageProps {
  params: Promise<{
    template: string // ค่านี้จะเป็น 'templates' ตามโครงสร้างโฟลเดอร์
  }>
  searchParams: Promise<{
    q?: string
    cat?: string
  }>
}

/**
 * 🛠️ 1. generateStaticParams — "Zero-404 Strategy"
 */
export async function generateStaticParams() {
  return [{ template: "templates" }]
}

/**
 * 🔍 2. generateMetadata (Technical SEO Specialist)
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Premium Website Templates | สถาปัตยกรรมเว็บไซต์ Specialist | ${siteConfig.shortName}`,
    description:
      "รวมเทมเพลตเว็บไซต์คุณภาพสูงที่ผมจูนความเร็วระดับ Specialist มาให้แล้ว เพื่อสร้างความได้เปรียบให้ธุรกิจ SME และโรงงานอุตสาหกรรม",
    alternates: {
      canonical: `${siteConfig.url}/templates`,
    },
  }
}

/**
 * 🚀 3. Main Marketplace Page Component (v2026)
 */
export default async function TemplateMainPage({
  params,
  searchParams,
}: TemplateMainPageProps) {
  // ✅ ดึงค่าแบบ Async ตามมาตรฐาน Next.js 16
  const { template } = await params
  const { q: query, cat: selectedCat } = await searchParams

  // 🛡️ Guard Clause: ตรวจสอบ URL พื้นฐาน (ต้องเป็น /templates เท่านั้น)
  if (template !== "templates") {
    return notFound()
  }

  const allTemplates = await getAllTemplates()

  // 🔍 Filtering Logic: ระบบคัดกรองอัจฉริยะ
  const filteredTemplates = allTemplates.filter((tpl) => {
    const matchesSearch = query
      ? tpl.name.toLowerCase().includes(query.toLowerCase()) ||
        tpl.description?.toLowerCase().includes(query.toLowerCase())
      : true

    const matchesCategory =
      !selectedCat || selectedCat.toLowerCase() === "all"
        ? true
        : tpl.category.toLowerCase() === selectedCat.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      {/* 🔎 บอก Google Search AI ว่าหน้านี้คือศูนย์รวมสินค้า (ItemPage Schema) */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "Premium Website Templates Marketplace",
          description: "คัดสรรเทมเพลตเว็บไซต์ที่เน้น Conversion และ Speed",
          url: `${siteConfig.url}/templates`,
        }}
      />

      <TemplateNavbar />

      <main className="flex-1">
        {/* 🎭 Hero Layer: ดุดัน สุขุม สไตล์พรีเมียม */}
        <TemplateHero
          title="WEBSITE MARKETPLACE"
          subtitle="เลือกสถาปัตยกรรมที่ใช่ เพื่อสร้างความได้เปรียบที่เหนือกว่าให้ธุรกิจคุณ"
          themeColor="emerald"
        />

        <div className="container mx-auto px-4 py-12">
          {/* 🔍 Search & Filter Layer: ยกระดับประสบการณ์การค้นหา */}
          <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
            <TemplateSearch placeholder="ค้นหาสถาปัตยกรรมที่ต้องการ..." />
            <TemplateFilter activeCategory={selectedCat || "all"} />
          </div>

          {/* 🏗️ Template Grid Section */}
          <section className="min-h-[600px]">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-8 w-1 bg-emerald-500" />
                <h2 className="font-prompt text-2xl font-black text-white uppercase italic md:text-3xl">
                  {query ? `ค้นหา: "${query}"` : "All Premium Templates"}
                </h2>
              </div>
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1 text-xs font-black tracking-widest text-emerald-500 uppercase">
                {filteredTemplates.length} Items Found
              </span>
            </div>

            {/* ระบบ Grid สำหรับแสดงผลการ์ดเทมเพลต */}
            <TemplateGrid initialTemplates={filteredTemplates} />

            {/* Empty State กรณีค้นหาไม่เจอ */}
            {filteredTemplates.length === 0 && (
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <p className="font-anuphan text-lg text-slate-500">
                  ไม่พบเทมเพลตที่ตรงกับเงื่อนไขของคุณ <br />
                  ลองค้นหาด้วยคำอื่น หรือทักมาให้ผมช่วยแนะนำได้ครับ
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <LineStickyButton />

      {/* 📍 Specialist Footer Note */}
      <footer className="py-12 text-center opacity-20 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase">
          AEMDEVWEB Marketplace System v2026 — Expert Dev Only
        </p>
      </footer>
    </div>
  )
}
