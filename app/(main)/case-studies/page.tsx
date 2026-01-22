/** @format */

import React from "react"
import type { Metadata } from "next"

// 📂 Logic & Config: เชื่อมต่อกับระบบจัดการผลงาน (MDX Engine)
import { getAllCaseStudies } from "@/lib/case-studies"
import { siteConfig } from "@/constants/site-config"

// 🧩 ส่วนประกอบหน้าเว็บ (Specialist Components)
import { JsonLd } from "@/components/seo/JsonLd"
import CaseStudyCard from "@/components/shared/CaseStudyCard"
import CTASection from "@/components/landing/CTASection"

/**
 * 🛠️ [FIXED]: กำหนด Interface เพื่อรองรับข้อมูลจาก MDX Frontmatter
 * ป้องกัน Error: Property 'industry' does not exist on type 'CaseStudyFrontmatter'
 */
interface CaseStudyFrontmatter {
  title: string
  description?: string
  excerpt?: string
  thumbnail: string
  industry?: string // ✅ เพิ่มเพื่อแก้ปัญหา TS2339
  result?: string
  date?: string
}

/**
 * 🚀 Metadata — "พิสูจน์ด้วยผลลัพธ์ งานที่เนี๊ยบคืออาวุธของธุรกิจ"
 */
export const metadata: Metadata = {
  title: `Success Stories | ${siteConfig.shortName} Portfolio 2026`,
  description:
    "รวมเคสจริงที่พิสูจน์แล้วว่าเว็บไซต์ประสิทธิภาพสูง ช่วยเปลี่ยนธุรกิจ SME และโรงงานให้มียอดขายเพิ่มขึ้นได้จริง โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
}

/**
 * 🧬 Case Studies Archive — "โชว์ผลลัพธ์ที่ทำให้ลูกค้าพอใจ"
 */
export default async function CaseStudiesPage() {
  /**
   * ⚡ ดึงข้อมูลผลงานทั้งหมดจากโฟลเดอร์ content/case-studies
   */
  const cases = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 Enhanced SEO Context */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Success Stories & Portfolio | ${siteConfig.shortName}`,
          description: metadata.description,
          publisher: {
            "@type": "Person",
            name: siteConfig.expert,
            image: siteConfig.ogImage,
          },
        }}
      />

      {/* 🌌 Background Infrastructure */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]" aria-hidden="true" />

      {/* 🔝 1. Hero Section: ความมั่นใจในระดับ Specialist */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-12">
            <div className="animate-in fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-emerald-600 duration-700">
              <span className="font-prompt text-[10px] font-black tracking-[0.4em] uppercase italic">
                Proven Results • High Performance
              </span>
            </div>
            <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
              Success <br />
              <span className="text-emerald-500">Stories.</span>
            </h1>
            <p className="font-anuphan mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              "ความเร็ว" และ "งานที่เนี๊ยบ" ไม่ใช่แค่คำโฆษณา
              แต่นี่คือหลักฐานจริงที่เปลี่ยนยอดขายให้ SME
              และโรงงานอุตสาหกรรมมาแล้วนับไม่ถ้วน
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. Result Grid: การจัดวางที่เน้นความพรีเมียม */}
      <section className="container mx-auto px-6 py-20">
        {cases.length > 0 ? (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, idx) => {
              // 🧪 Type Casting เพื่อความปลอดภัยในขณะเรนเดอร์
              const fm = item.frontmatter as CaseStudyFrontmatter
              
              return (
                <CaseStudyCard
                  key={item.slug}
                  index={idx}
                  slug={item.slug}
                  title={fm.title}
                  description={fm.excerpt || fm.description || ""}
                  image={fm.thumbnail}
                  industry={fm.industry || "General Business"}
                  result={fm.result || "Score 100/100"}
                />
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 py-48 text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-slate-50 text-slate-200">
              <span className="font-prompt text-5xl font-black italic">?</span>
            </div>
            <h2 className="font-prompt text-2xl font-black tracking-[0.2em] text-slate-400 uppercase italic">
              กำลังวิเคราะห์ข้อมูลผลงานใหม่ๆ...
            </h2>
          </div>
        )}
      </section>

      <CTASection />

      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
          Build & Proven by {siteConfig.expert} v2026
        </p>
      </footer>
    </main>
  )
}
