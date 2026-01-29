/** @format */

import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { compileMDX } from "next-mdx-remote/rsc"
import { ChevronLeft, BarChart3 } from "lucide-react"

import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies"
import { useMDXComponents } from "@/mdx-components"
import { JsonLd } from "@/components/seo/JsonLd"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * [STRATEGIC SSG PROTOCOL]: การจัดเตรียมเส้นทางข้อมูลล่วงหน้าเพื่อประสิทธิภาพการตอบสนองสูงสุด
 */
export async function generateStaticParams() {
  const studies = await getAllCaseStudies()
  return studies.map((s) => ({ slug: s.slug }))
}

/**
 * [SEO METADATA]: การกำหนดข้อมูลอัตลักษณ์รายโครงการเพื่อความน่าเชื่อถือ
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)
  if (!study) return { title: "Strategic Insights | Content Not Found" }

  return {
    title: `${study.frontmatter.title} | Case Study Analysis`,
    description: study.frontmatter.excerpt,
    openGraph: {
      images: [study.frontmatter.thumbnail || "/og-image.png"],
      type: "article",
    },
  }
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)

  if (!study) notFound()

  // การประมวลผลเนื้อหา MDX สำหรับการแสดงผลผ่าน Server-side Component
  const { content } = await compileMDX({
    source: study.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  })

  /**
   * [DATA HELPER]: การจัดการดึงดัชนีชี้วัดหลัก (Primary Impact Metric)
   * เพื่อความแม่นยำในการแสดงผลข้อมูลตามระนาบโครงสร้างระบบ
   */
  const getPrimaryResult = () => {
    const res = study.frontmatter.results?.[0]
    if (!res) return "Optimization Protocol Success"
    return typeof res === "string" ? res : res.value
  }

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. SCHEMA: การจัดการโครงสร้างข้อมูลให้สอดคล้องกับมาตรฐานระบบบทความเชิงลึก */}
      <JsonLd
        type="Article"
        data={{
          headline: study.frontmatter.title,
          image: study.frontmatter.thumbnail,
          datePublished: study.frontmatter.date,
          description: study.frontmatter.excerpt,
          authorName: "AEMDEVWEB Specialist",
        }}
      />

      {/* [LAYER 1]: HERO SECTION - หัวข้อบันทึกผลลัพธ์เชิงกลยุทธ์ */}
      <section className="bg-slate-50/50 pt-32 pb-24 lg:pt-48">
        <div className="container mx-auto px-6">
          <Link
            href="/case-studies"
            className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            กลับสู่คลังผลลัพธ์เชิงกลยุทธ์
          </Link>
          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <h1 className="font-heading text-5xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
              {study.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: CONTENT BODY - บันทึกการวิเคราะห์และดัชนีชี้วัดความสำเร็จ */}
      <article className="container mx-auto px-6">
        <div className="relative -mt-20 mb-24 aspect-video overflow-hidden rounded-[3.5rem] border-8 border-white bg-slate-100 shadow-2xl shadow-slate-900/10 md:-mt-32">
          <Image
            src={study.frontmatter.thumbnail}
            alt={study.frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl">
          {/* ส่วนแสดงดัชนีชี้วัดความสำเร็จหลัก (Strategic Impact Metric) */}
          <div className="mb-24 rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl shadow-emerald-500/10">
            <div className="mb-6 flex items-center gap-4 text-emerald-500">
              <BarChart3 size={32} />
              <span className="font-heading text-xs font-black tracking-widest uppercase italic">
                Strategic Impact Metric
              </span>
            </div>
            <p className="font-body text-4xl leading-tight font-black italic md:text-6xl">
              {getPrimaryResult()}
            </p>
          </div>

          {/* ส่วนเนื้อหาหลักที่ผ่านการประมวลผล MDX */}
          <div className="prose prose-slate prose-mzaa prose-headings:font-heading prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-strong:text-emerald-600 prose-p:font-body prose-p:text-slate-600 prose-p:text-lg max-w-none">
            {content}
          </div>

          {/* ส่วนปิดท้ายบันทึกความสำเร็จ */}
          <div className="mt-32 border-t border-slate-100 pt-12 text-center">
            <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
              Verified Case Insight • AEMDEVWEB 2026
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
