/** @format */

import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

import {
  ArrowLeft,
  Calendar,
  Tag,
  ShieldCheck,
  TrendingUp,
  Fingerprint,
  Cpu,
  CheckCircle2,
  CheckCircle,
  Settings,
  Factory,
  LayoutDashboard,
  Clock,
  Lock,
  Zap,
  BarChart3,
  Rocket,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"

import { MDXRemote } from "next-mdx-remote/rsc"
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies"
import { useMDXComponents } from "@/mdx-components"
import { siteConfig } from "@/constants/site-config"

import { JsonLd } from "@/components/seo/JsonLd"
import CTASection from "@/components/landing/CTASection"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { SpeedDemon } from "@/components/sales-engine/SpeedDemon"
import WorkProcess from "@/components/sales-engine/WorkProcess"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

/**
 * แก้ไขจุดที่ 1: Metadata Engine
 * ปรับการเรียกพิกัดจาก siteConfig.name เป็น siteConfig.project.name
 * และแก้ปัญหาเรื่อง URL ของรูปภาพ OG
 */
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy)
    return { title: `ไม่พบข้อมูลผลงาน | ${siteConfig.project.name}` }

  return {
    title: `${caseStudy.frontmatter.title} | ${siteConfig.project.name}`,
    description: caseStudy.frontmatter.excerpt,
    openGraph: {
      title: caseStudy.frontmatter.title,
      description: caseStudy.frontmatter.excerpt,
      type: "article",
      url: `${siteConfig.project.url}/case-studies/${slug}`,
      images: [
        { url: caseStudy.frontmatter.thumbnail || siteConfig.project.ogImage },
      ],
    },
    alternates: {
      canonical: `${siteConfig.project.url}/case-studies/${slug}`,
    },
  }
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) notFound()

  const mdxComponents = {
    ...useMDXComponents({}),
    ImpactStats,
    SpeedDemon,
    WorkProcess,
    LineLeadForm,
    CallToAction: CTASection,
    CheckCircle,
    Settings,
    Factory,
    LayoutDashboard,
    Clock,
    ShieldCheck,
    TrendingUp,
    Fingerprint,
    Cpu,
    CheckCircle2,
    Lock,
    Zap,
    BarChart3,
    Rocket,
    MessageSquare,
    AlertTriangle,
  }

  return (
    <article className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* แก้ไขจุดที่ 2: JSON-LD 
          เปลี่ยนจาก siteConfig.expert เป็น siteConfig.expert.name
      */}
      <JsonLd
        type="Article"
        data={{
          headline: caseStudy.frontmatter.title,
          description: caseStudy.frontmatter.excerpt,
          image: caseStudy.frontmatter.thumbnail,
          datePublished: caseStudy.frontmatter.date,
          author: {
            "@type": "Person",
            name: siteConfig.expert.name,
            url: siteConfig.project.url,
          },
        }}
      />

      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6">
          <Link
            href="/case-studies"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-colors hover:text-emerald-500"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Back to Success Stories
          </Link>

          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-12">
            <h1 className="font-prompt mb-10 text-4xl leading-[0.95] font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl lg:text-8xl">
              {caseStudy.frontmatter.title}
            </h1>

            <div className="flex flex-wrap gap-10 border-y border-slate-100 py-10">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
                <span className="font-anuphan text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {caseStudy.frontmatter.date}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="h-5 w-5 text-emerald-500" />
                <span className="font-anuphan text-xs font-bold tracking-widest text-slate-500 uppercase">
                  {caseStudy.frontmatter.service ||
                    caseStudy.frontmatter.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto mb-24 px-6">
        <div className="relative aspect-[21/10] w-full overflow-hidden rounded-[4rem] border border-slate-200 bg-slate-50 shadow-2xl">
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

      <main className="container mx-auto px-6">
        <div className="prose prose-slate prose-xl prose-headings:font-prompt prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-950 prose-headings:uppercase prose-headings:italic prose-p:font-anuphan prose-p:text-xl prose-p:leading-relaxed mx-auto mb-32 max-w-4xl">
          <MDXRemote source={caseStudy.content} components={mdxComponents} />
        </div>
      </main>

      <div className="border-y border-slate-50 bg-slate-50/50 py-24">
        <div className="container mx-auto px-6">
          <ImpactStats />
        </div>
      </div>

      <div className="mt-32">
        <CTASection />
      </div>

      {/* แก้ไขจุดที่ 3: Footer
          ใช้ siteConfig.expert.name เพื่อป้องกัน Error ReactNode
      */}
      <footer className="mt-24 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Security Methods by {siteConfig.expert.name} v2026
        </p>
      </footer>
    </article>
  )
}
