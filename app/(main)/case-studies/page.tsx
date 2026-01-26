/** @format */

import React from "react"
import type { Metadata } from "next"

// การนำเข้าข้อมูลและระบบจัดการไฟล์
import { getAllCaseStudies } from "@/lib/case-studies"
import { siteConfig } from "@/constants/site-config"

// ส่วนประกอบหน้าเว็บ
import { JsonLd } from "@/components/seo/JsonLd"
import CaseStudyCard from "@/components/shared/CaseStudyCard"
import CTASection from "@/components/landing/CTASection"

/**
 * กำหนด Interface ให้ตรงกับโครงสร้าง MDX และ SiteConfig ชุดใหม่
 * รองรับทั้งข้อมูลแบบข้อความธรรมดาและก้อนข้อมูลสถิติ
 */
interface CaseStudyFrontmatter {
  title: string
  description?: string
  excerpt?: string
  thumbnail: string
  industry?: string
  results?: (string | { label: string; value: string })[]
  date?: string
}

/**
 * Metadata: ปรับพิกัดข้อมูลเข้ากลุ่ม project
 */
export const metadata: Metadata = {
  title: `Success Stories | ${siteConfig.project.shortName} Portfolio 2026`,
  description:
    "รวมเคสจริงที่พิสูจน์แล้วว่าเว็บไซต์ประสิทธิภาพสูง ช่วยเปลี่ยนธุรกิจ SME และโรงงานให้มียอดขายเพิ่มขึ้นได้จริง",
  alternates: { canonical: `${siteConfig.project.url}/case-studies` },
}

export default async function CaseStudiesPage() {
  /**
   * ดึงข้อมูลผลงานทั้งหมดผ่านระบบจัดการไฟล์
   */
  const cases = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* ระบบข้อมูลสำหรับการค้นหาและ AI */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Success Stories & Portfolio | ${siteConfig.project.shortName}`,
          description: metadata.description as string,
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.name,
            image: siteConfig.project.ogImage,
          },
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* ส่วนแสดงหัวข้อหลัก */}
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
              หลักฐานจริงจากการปรับลำดับข้อมูลและโครงสร้างระบบที่เปลี่ยนยอดขายให้
              SME และโรงงานอุตสาหกรรม
            </p>
          </div>
        </div>
      </section>

      {/* ส่วนแสดงตารางผลงาน */}
      <section className="container mx-auto px-6 py-20">
        {cases.length > 0 ? (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, idx) => {
              const fm = item.frontmatter as CaseStudyFrontmatter

              /**
               * ระบบคัดกรองประเภทข้อมูลผลงาน (Type Guard)
               * เพื่อแยกการดึงค่าระหว่าง String และ Object สถิติ
               */
              const primaryResult = fm.results?.[0]
                ? typeof fm.results[0] === "string"
                  ? fm.results[0]
                  : fm.results[0].value
                : "Performance 100"

              return (
                <CaseStudyCard
                  key={item.slug}
                  index={idx}
                  slug={item.slug}
                  title={fm.title}
                  description={fm.excerpt || fm.description || ""}
                  image={fm.thumbnail}
                  industry={fm.industry || "General Business"}
                  result={primaryResult}
                />
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 py-48 text-center">
            <h2 className="font-prompt text-2xl font-black tracking-[0.2em] text-slate-400 uppercase italic">
              กำลังวิเคราะห์ข้อมูลผลงาน...
            </h2>
          </div>
        )}
      </section>

      <CTASection />

      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        {/* ระบุชื่อผู้เชี่ยวชาญผ่าน property .name เพื่อความถูกต้องของข้อมูล */}
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
          Build & Proven by {siteConfig.expert.name} v2026
        </p>
      </footer>
    </main>
  )
}
