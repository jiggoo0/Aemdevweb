/** @format */

import React from "react"
import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllCaseStudies } from "@/lib/case-studies" // [FIX]: ใช้ชื่อที่ถูกต้อง
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"

export const metadata: Metadata = {
  title: `ผลงานและความสำเร็จ | ${siteConfig.project.shortName}`,
  description:
    "รวบรวมพิกัดความสำเร็จจากการปรับโครงสร้างระบบและการทำ Technical SEO",
}

export default async function CaseStudiesPage() {
  // ดึงข้อมูลทั้งหมดผ่าน Lib
  const caseStudies = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 lg:pt-48">
      <div className="container mx-auto px-6">
        <h1 className="font-prompt mb-16 text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl">
          Case <span className="text-emerald-500">Studies</span>
        </h1>

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
                  : study.frontmatter.results?.[0]?.value
              }
            />
          ))}
        </div>
      </div>
    </main>
  )
}
