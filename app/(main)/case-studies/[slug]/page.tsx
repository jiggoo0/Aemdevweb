/** @format */

import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

/** * ✅ [FIXED]: เปลี่ยนจาก next-md-remote เป็น next-mdx-remote
 * เพื่อให้ตรงกับแพ็กเกจที่ติดตั้งผ่าน pnpm
 */
import { MDXRemote } from "next-mdx-remote/rsc"

// 📂 Logic & Config Architecture
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies"
import { useMDXComponents } from "@/mdx-components"
import { siteConfig } from "@/constants/site-config"

// 🧩 Specialist Components
import { JsonLd } from "@/components/seo/JsonLd"
import CTASection from "@/components/landing/CTASection"

// ⚡ Sales Engine Components (สำหรับเรียกใช้ภายในเนื้อหา MDX)
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"
import WorkProcess from "@/components/sales-engine/WorkProcess"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) return { title: `ไม่พบข้อมูลผลงาน | ${siteConfig.shortName}` }

  return {
    title: `${caseStudy.frontmatter.title} | ${siteConfig.shortName}`,
    description: caseStudy.frontmatter.excerpt,
    openGraph: {
      title: caseStudy.frontmatter.title,
      description: caseStudy.frontmatter.excerpt,
      images: [{ url: caseStudy.frontmatter.thumbnail || siteConfig.ogImage }],
    },
  }
}

/**
 * 🧬 Case Study Detail Engine v2026
 * จัดการ Error 'Module not found' สำเร็จแล้ว
 */
export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  // Next.js 15/16 มาตรฐาน Specialist ต้อง await params
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) notFound()

  // ลงทะเบียนคอมโพเนนต์สำหรับ MDX
  const mdxComponents = {
    ...useMDXComponents({}),
    ImpactStats,
    SpeedDemon,
    WorkProcess,
  }

  return (
    <article className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Article"
        data={{
          headline: caseStudy.frontmatter.title,
          description: caseStudy.frontmatter.excerpt,
          image: caseStudy.frontmatter.thumbnail,
          datePublished: caseStudy.frontmatter.date,
          author: { "@type": "Person", name: "นายเอ็มซ่ามากส์" },
        }}
      />

      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-4">
          <Link
            href="/case-studies"
            className="group mb-8 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-emerald-500"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />{" "}
            ย้อนกลับไปดูผลงานทั้งหมด
          </Link>

          <div className="max-w-4xl">
            <h1 className="font-prompt mb-8 text-4xl leading-tight font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl lg:text-7xl">
              {caseStudy.frontmatter.title}
            </h1>

            <div className="flex flex-wrap gap-8 border-y border-slate-100 py-8">
              <div className="flex items-center gap-2.5">
                <Calendar className="h-4 w-4 text-emerald-500" />
                <span className="font-anuphan text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  {caseStudy.frontmatter.date}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Tag className="h-4 w-4 text-emerald-500" />
                <span className="font-anuphan text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  {caseStudy.frontmatter.service ||
                    caseStudy.frontmatter.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mb-20 px-4">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[3rem] border border-slate-200 bg-slate-50 shadow-2xl">
          <Image
            src={caseStudy.frontmatter.thumbnail}
            alt={caseStudy.frontmatter.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>
      </div>

      <main className="container mx-auto px-4">
        <div className="prose prose-slate prose-lg prose-headings:font-prompt prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-headings:uppercase prose-p:font-anuphan prose-p:text-xl prose-p:leading-relaxed mx-auto mb-24 max-w-4xl">
          <MDXRemote source={caseStudy.content} components={mdxComponents} />
        </div>
      </main>

      <div className="border-y border-slate-50 bg-white py-12">
        <ImpactStats />
      </div>

      <div className="mt-32">
        <CTASection />
      </div>

      <footer className="mt-20 text-center opacity-40 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Build & Proof by นายเอ็มซ่ามากส์ v2026 — Case Analysis
        </p>
      </footer>
    </article>
  )
}
