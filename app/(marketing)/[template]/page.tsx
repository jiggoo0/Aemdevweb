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
 * 🎨 Shared Constants
 * ป้องกัน ReferenceError โดยนิยามตัวแปรไว้นอก Component scope
 */
const MARKETPLACE_DESCRIPTION =
  "รวบรวมเทมเพลตเว็บไซต์ประสิทธิภาพสูงที่จูน Performance ระดับ 100/100 เพื่อสร้างความได้เปรียบในการแข่งขันให้ธุรกิจ SME และโรงงานไทย"

/**
 * 🎨 Page Interface: มาตรฐาน Next.js 16 (Async Context)
 */
interface TemplateMainPageProps {
  params: Promise<{ template: string }>
  searchParams: Promise<{ q?: string; cat?: string }>
}

/**
 * 🛠️ Static Generation Strategy: เพิ่มความเร็วในการเข้าถึงหน้าหลัก
 */
export async function generateStaticParams() {
  return [{ template: "templates" }]
}

/**
 * 🔍 Metadata Strategy: เน้นความน่าเชื่อถือระดับผู้เชี่ยวชาญ
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Premium Templates Marketplace | สถาปัตยกรรมเว็บไซต์ 2026 | ${siteConfig.shortName}`,
    description: MARKETPLACE_DESCRIPTION,
    alternates: { canonical: `${siteConfig.url}/templates` },
  }
}

/**
 * 🚀 Template Marketplace Hub
 */
export default async function TemplateMainPage({
  params,
  searchParams,
}: TemplateMainPageProps) {
  // ✅ Next.js 16 Async Pattern (Await params as per framework requirements)
  const { template } = await params
  const { q: query, cat: selectedCat } = await searchParams

  // 🛡️ Guard Clause: ตรวจสอบ Path Integrity
  if (template !== "templates") notFound()

  // ดึงข้อมูล Template ทั้งหมดผ่าน Specialist Logic
  const allTemplates = await getAllTemplates()

  // 🔍 Advanced Multi-Layer Filtering
  const filteredTemplates = allTemplates.filter((tpl) => {
    const searchStr = query?.toLowerCase() || ""
    const matchesSearch = searchStr
      ? tpl.name.toLowerCase().includes(searchStr) ||
        tpl.description?.toLowerCase().includes(searchStr) ||
        tpl.category.toLowerCase().includes(searchStr)
      : true

    const matchesCategory =
      !selectedCat || selectedCat.toLowerCase() === "all"
        ? true
        : tpl.category.toLowerCase() === selectedCat.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      {/* 🔎 JSON-LD Search Engine Optimization */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "Premium Web Architecture Marketplace",
          description: MARKETPLACE_DESCRIPTION,
          url: `${siteConfig.url}/templates`,
        }}
      />

      {/* 🌌 Background Infrastructure (High-End Industrial Atmosphere) */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed bg-center" />
      </div>

      <TemplateNavbar />

      <main className="relative z-10 flex-1 pb-24">
        {/* 🎭 Hero Component: Visual Impact Layer */}
        <TemplateHero
          title="WEBSITE MARKETPLACE"
          subtitle="เลือกสถาปัตยกรรมที่ใช่ เพื่อสร้างความได้เปรียบที่เหนือกว่าให้ธุรกิจคุณ"
          themeColor="emerald"
        />

        <div className="container mx-auto px-6">
          {/* 🔍 Discovery Hub: Search & Category Logic */}
          <div className="relative z-20 -mt-10 mb-16 lg:-mt-14">
            <div className="shadow-3xl flex flex-col items-center justify-between gap-6 rounded-[2.5rem] border border-white/5 bg-slate-900/50 p-6 backdrop-blur-xl md:p-10 lg:flex-row">
              <TemplateSearch
                placeholder="ค้นหาชื่อเทมเพลต หรือ ประเภทธุรกิจ..."
                className="w-full lg:max-w-md"
              />
              <TemplateFilter activeCategory={selectedCat || "all"} />
            </div>
          </div>

          {/* 🏗️ Results Layer */}
          <section className="min-h-[600px] space-y-12">
            {/* Results Status Bar */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/5 pb-8 md:flex-row md:items-end">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-1.5 rounded-full bg-emerald-500" />
                  <h2 className="font-prompt text-3xl font-black tracking-tighter text-white uppercase italic">
                    {query ? `Results: "${query}"` : "Premium Architectures"}
                  </h2>
                </div>
                <p className="font-anuphan text-sm font-bold text-slate-500">
                  High-Performance Standard 2026
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5">
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase">
                  {filteredTemplates.length} Solutions Available
                </span>
              </div>
            </div>

            {/* Template Rendering Engine */}
            <TemplateGrid initialTemplates={filteredTemplates} />

            {/* Empty State Visualization */}
            {filteredTemplates.length === 0 && (
              <div className="animate-in fade-in zoom-in flex flex-col items-center justify-center space-y-6 py-40 text-center duration-500">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/5 bg-slate-900 text-3xl font-black text-slate-700 italic">
                  ?
                </div>
                <div className="space-y-2">
                  <h3 className="font-prompt text-xl font-black text-white italic">
                    ไม่พบสถาปัตยกรรมที่ตรงเงื่อนไข
                  </h3>
                  <p className="font-anuphan mx-auto max-w-sm text-slate-500">
                    ลองปรับเปลี่ยนคำค้นหา หรือทักมาคุยกับผมโดยตรง
                    เพื่อออกแบบโครงสร้างใหม่ให้ธุรกิจคุณครับ
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <LineStickyButton />

      <footer className="border-t border-white/5 bg-slate-950 py-12 text-center opacity-30">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-500 uppercase italic">
          Managed by {siteConfig.expert} v2026 — Advanced Infrastructure
        </p>
      </footer>
    </div>
  )
}
