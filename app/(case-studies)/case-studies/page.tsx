/** @format */

import React from "react"
import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllCaseStudies } from "@/lib/case-studies"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * Metadata: ปรับจูน SEO ให้หน้าผลงานดึงดูดใจ
 * ปรัชญา: โชว์ผลลัพธ์ที่จับต้องได้ เพื่อสร้างความมั่นใจก่อนเริ่มงาน
 */
export const metadata: Metadata = {
  title: `ผลงานและความสำเร็จที่วัดผลได้จริง | นายเอ็มซ่ามากส์ ${siteConfig.project.shortName}`,
  description:
    "รวมโปรเจกต์ที่เราเข้าไปช่วยวางระบบเว็บไซต์ใหม่ให้ซิ่ง แรง และติดอันดับ Google จนสร้างยอดขายได้จริง",
  alternates: { canonical: `${siteConfig.project.url}/case-studies` },
}

export default async function CaseStudiesPage() {
  /**
   * [SERVER DATA FETCHING]: ดึงข้อมูลผลงานทั้งหมดจากระบบ
   * มั่นใจเรื่องความเร็วด้วยมาตรฐาน Next.js 16
   */
  const caseStudies = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 antialiased selection:bg-emerald-500/10 lg:pt-48">
      {/* 1. Structured Data: บอก AI ให้รู้ว่านี่คือหน้ารวมผลงาน (Portfolio) */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "รวมผลงานความสำเร็จจาก นายเอ็มซ่ามากส์",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/case-studies`,
        }}
      />

      {/* ลายตารางพื้นหลังจาง ๆ เพื่อคุมโทนงานระบบที่เนี้ยบ */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        {/* Header Section: หัวข้อที่เน้นความดุดันแต่เข้าถึงง่าย */}
        <div className="mb-20 max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
          <h1 className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
            Success <span className="text-emerald-500">Stories.</span>
          </h1>
          <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
            เบื้องหลังการเปลี่ยนธุรกิจ SME และโรงงานอุตสาหกรรม
            ให้กลายเป็นเครื่องจักรผลิตกำไรผ่านระบบเว็บไซต์สเปกปีศาจ
          </p>
        </div>

        {/* Grid แสดงผลการ์ดผลงาน */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              slug={study.slug}
              title={study.frontmatter.title}
              description={study.frontmatter.excerpt}
              image={study.frontmatter.thumbnail}
              industry={study.frontmatter.industry}
              result={
                typeof study.frontmatter.results?.[0] === "string"
                  ? study.frontmatter.results[0]
                  : study.frontmatter.results?.[0]?.value || "Success Optimized"
              }
            />
          ))}
        </div>

        {/* Empty State: กรณีที่ยังไม่มีข้อมูล (เพื่อความปลอดภัยของระบบ) */}
        {caseStudies.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40 text-center">
            <p className="font-heading text-lg font-black tracking-widest text-slate-300 uppercase italic">
              กำลังรวบรวมข้อมูลผลงานชุดใหม่...
            </p>
          </div>
        )}
      </div>

      {/* ส่วนท้ายหน้า */}
      <footer className="mt-40 border-t border-slate-50 py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          Performance Driven Portfolio • AEMDEVWEB 2026
        </p>
      </footer>
    </main>
  )
}
