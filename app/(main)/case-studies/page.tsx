/** @format */

import React from "react"
import type { Metadata } from "next"

// 📂 Logic & Config: เชื่อมต่อกับระบบจัดการผลงาน (MDX Engine)
import { getAllCaseStudies } from "@/lib/case-studies"
import { siteConfig } from "@/constants/site-config"

// 🧩 ส่วนประกอบหน้าเว็บ (Specialist Components)
import { JsonLd } from "@/components/seo/JsonLd"
import CaseStudyCard from "@/components/shared/CaseStudyCard"

/**
 * 🚀 Metadata — "บทพิสูจน์งานจริงจากประสบการณ์ตรง"
 */
export const metadata: Metadata = {
  title: `ผลงานและความสำเร็จ | ${siteConfig.shortName} Portfolio`,
  description:
    "รวมเคสจริงที่พิสูจน์แล้วว่างานที่เนี๊ยบและโหลดไว ช่วยเปลี่ยนธุรกิจ SME และโรงงานให้มียอดขายเพิ่มขึ้นได้จริง โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/case-studies` },
}

/**
 * 🧬 Case Studies Archive — "โชว์ผลลัพธ์ที่ทำให้ลูกค้าพอใจ"
 */
export default async function CaseStudiesPage() {
  /**
   * ⚡ ดึงข้อมูลผลงานทั้งหมดจากโฟลเดอร์ content/case-studies
   * เรียงลำดับตามความสดใหม่เพื่อให้ลูกค้าเห็นงานล่าสุดก่อนครับ
   */
  const cases = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 บอก Google Search AI ว่าหน้านี้รวมผลงานความสำเร็จไว้ */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Success Stories & Portfolio | ${siteConfig.shortName}`,
          description:
            "Explore real-world results of high-performance web solutions.",
          publisher: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
            image: siteConfig.ogImage,
          },
        }}
      />

      {/* 🔝 1. ส่วนหัวหน้าเว็บ (Hero Section) */}
      <section className="relative overflow-hidden bg-slate-50/30 pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* เลเยอร์ตกแต่งพื้นหลังให้ดูมีมิติ */}
        <div
          className="pointer-events-none absolute top-0 right-0 -z-10 h-full w-1/3 bg-white [mask-image:linear-gradient(to_left,white,transparent)]"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl border-l-4 border-emerald-500 pl-8">
            <h1 className="font-prompt text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-8xl">
              Success <br />
              <span className="text-emerald-500">Stories.</span>
            </h1>
            <p className="font-anuphan mt-8 max-w-2xl text-xl leading-relaxed font-bold text-slate-500">
              นี่คือหลักฐานที่ยืนยันว่า "ความเร็ว" และ "งานที่เนี๊ยบ"
              ช่วยให้ธุรกิจ SME และโรงงานมียอดขายเพิ่มขึ้นได้จริง
              ทุกโปรเจกต์ผมตั้งใจปั้นให้เป็นอาวุธทำเงินของลูกค้าครับ
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. ส่วนรายการผลงาน (Result Grid) */}
      <section className="container mx-auto px-4 py-20">
        {cases.length > 0 ? (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, idx) => (
              <CaseStudyCard
                key={item.slug}
                index={idx}
                slug={item.slug}
                title={item.frontmatter.title}
                description={
                  item.frontmatter.description || item.frontmatter.excerpt
                }
                image={item.frontmatter.thumbnail}
                industry={item.frontmatter.category || "ธุรกิจทั่วไป"}
                result={item.frontmatter.result || "งานเนี๊ยบ 100%"}
              />
            ))}
          </div>
        ) : (
          /* กรณีที่ยังไม่มีข้อมูลผลงานในระบบ */
          <div className="flex flex-col items-center justify-center py-48 text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-slate-50">
              <span className="font-prompt text-4xl font-black text-slate-300 italic">
                ?
              </span>
            </div>
            <h2 className="font-prompt text-2xl font-black tracking-[0.2em] text-slate-400 uppercase italic">
              กำลังรวบรวมผลงานใหม่ๆ มาลงเพิ่มครับ...
            </h2>
          </div>
        )}
      </section>

      {/* 📍 ส่วนท้ายหน้า (Specialist Footer Hook) */}
      <footer className="mt-20 text-center opacity-40 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Build & Proof by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
