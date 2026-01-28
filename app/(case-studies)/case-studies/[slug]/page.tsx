/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Target,
  BarChart3,
  Globe,
  Layers,
  Heart,
} from "lucide-react"

// ดึงข้อมูลผลงานจากระบบจัดการไฟล์
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies"
import { JsonLd } from "@/components/seo/JsonLd"

// ส่วนจัดการเนื้อหา MDX และคอมโพเนนต์เสริม
import { useMDXComponents } from "@/mdx-components"
import { compileMDX } from "next-mdx-remote/rsc"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 1. วางพิกัด SEO: ทำให้ Google รู้ว่านี่คือเคสความสำเร็จที่ใช้งานได้จริง
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)

  if (!study) return { title: "ไม่พบข้อมูลผลงาน" }

  return {
    title: `${study.frontmatter.title} | ผลงานจาก นายเอ็มซ่ามากส์`,
    description: study.frontmatter.excerpt,
    openGraph: {
      title: study.frontmatter.title,
      description: study.frontmatter.excerpt,
      images: [study.frontmatter.thumbnail || "/og-image.png"],
      type: "article",
    },
  }
}

/**
 * 2. หน้ารายละเอียดผลงาน: โชว์พิกัดความสำเร็จและตัวเลขที่จับต้องได้
 */
export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)

  if (!study) notFound()

  // จัดการเนื้อหา MDX ให้โหลดไวและแสดงผลกริบ
  const { content } = await compileMDX({
    source: study.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  })

  // พิกัด Type Guard: เช็คข้อมูล Results เพื่อแก้ Error TS2551
  const firstResult = study.frontmatter.results?.[0]
  const displayResult =
    typeof firstResult === "object" && firstResult !== null
      ? firstResult.value
      : firstResult || "ผลลัพธ์วัดผลได้จริง"

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* วางโครงสร้างข้อมูลให้ AI และ Search Engine เก็บพิกัดได้แม่นยำ */}
      <JsonLd
        type="Article"
        data={{
          headline: study.frontmatter.title,
          description: study.frontmatter.excerpt,
          image: study.frontmatter.thumbnail,
          authorName: "Alongkorl Yomkerd",
        }}
      />

      {/* Header: ส่วนพาดหัวที่เน้นงานจริง ไม่เน้นคำลิเก */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <Link
            href="/case-studies"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            ย้อนกลับไปดูพิกัดผลงานทั้งหมด
          </Link>

          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 flex flex-wrap items-center gap-8 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
              <span className="flex items-center gap-2">
                <Globe size={14} className="text-emerald-500" />
                {study.frontmatter.industry}
              </span>
              <span className="flex items-center gap-2 text-emerald-600">
                <Target size={14} />
                {study.frontmatter.category || "ระบบเว็บงานตรง"}
              </span>
            </div>

            <h1 className="font-heading text-4xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-8xl">
              {study.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* เนื้อหาหลักและตัวเลขความสำเร็จ */}
      <article className="container mx-auto px-6">
        {/* พิกัดภาพผลงาน (LCP Optimized) */}
        <div className="relative -mt-16 mb-24 aspect-video w-full overflow-hidden rounded-[3rem] border-8 border-white bg-slate-100 shadow-2xl shadow-slate-900/10 md:-mt-24">
          <Image
            src={study.frontmatter.thumbnail}
            alt={study.frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl">
          {/* KPI Grid: โชว์ผลลัพธ์ที่ช่วยธุรกิจได้จริง */}
          <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[2.5rem] bg-slate-950 p-10 text-white">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                <BarChart3 size={24} />
              </div>
              <h3 className="font-heading mb-2 text-xl font-black text-emerald-400 uppercase italic">
                ตัวเลขความสำเร็จ
              </h3>
              <p className="font-body text-2xl leading-tight font-bold italic">
                {displayResult}
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                <Layers size={24} />
              </div>
              <h3 className="font-heading mb-2 text-xl font-black text-slate-950 uppercase italic">
                วิธีการหลัก
              </h3>
              <p className="font-body text-lg font-bold text-slate-500">
                ปรับโครงสร้างระบบให้โหลดไวและหยุดลูกค้าได้ทันที
              </p>
            </div>
          </div>

          {/* เนื้อหา MDX ที่ผ่านการจัดพิกัดให้น่าอ่าน */}
          <div className="prose prose-slate prose-lg prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic prose-headings:text-slate-950 prose-h2:text-4xl prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-6 prose-h2:mt-24 prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium prose-p:text-slate-600 prose-strong:text-slate-950 prose-strong:font-black prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-20 prose-ul:font-body prose-li:font-medium max-w-none">
            {content}
          </div>

          {/* ส่วนปิดท้าย: การนำทางไปยังพิกัดงานอื่นๆ */}
          <div className="mt-32 border-t border-slate-100 pt-16 text-center md:text-left">
            <div className="mb-8 flex items-center gap-3 text-[10px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
              <Heart size={14} className="text-emerald-500/50" />
              สร้างขึ้นเพื่อความสำเร็จโดย AEMDEVWEB 2026
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-4 text-sm font-black tracking-widest text-slate-950 uppercase italic transition-colors hover:text-emerald-600"
            >
              ย้อนกลับไปดูพิกัดงานอื่นที่กริบไม่แพ้กัน
              <ChevronLeft
                size={18}
                className="rotate-180 text-emerald-500 transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

/**
 * 3. พิกัด Static Params: ทำระบบหน้าเว็บล่วงหน้าเพื่อความซิ่งในการเข้าถึง
 */
export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}
