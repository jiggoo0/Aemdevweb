/** @format */

import React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Heart,
  Share2,
} from "lucide-react"

// ระบบดึงข้อมูลและประมวลผลเนื้อหาเชิงกลยุทธ์
import { getBlogPostBySlug, getBlogPostsMetadata } from "@/lib/blog"
import { JsonLd } from "@/components/seo/JsonLd"

// ระบบจัดการส่วนประกอบ MDX เพื่อการแสดงผลที่แม่นยำ
import { useMDXComponents } from "@/mdx-components"
import { compileMDX } from "next-mdx-remote/rsc"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 1. SEO Strategy: การกำหนดข้อมูล Metadata เชิงรุก
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  if (!post) return { title: "Strategic Insights | Content Not Found" }

  return {
    title: `${post.frontmatter.title} | ${post.frontmatter.category} by ${post.frontmatter.author}`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.thumbnail || "/og-image.png"],
      type: "article",
    },
  }
}

/**
 * 2. BlogPost Page: โครงสร้างการนำเสนอเนื้อหาที่เน้นประสิทธิภาพการเข้าถึงข้อมูล
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  // การประมวลผล MDX สำหรับการแสดงผลผ่าน Server-side Component
  const { content } = await compileMDX({
    source: post.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  })

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      <JsonLd
        type="BlogPosting"
        data={{
          headline: post.frontmatter.title,
          description: post.frontmatter.description,
          image: post.frontmatter.thumbnail,
          datePublished: post.frontmatter.date,
          authorName: post.frontmatter.author,
        }}
      />

      {/* [LAYER 0]: แถบสถานะการอ่าน (Reading Status Bar) */}
      <div className="fixed top-0 left-0 z-[100] h-1.5 w-full bg-slate-100">
        <div
          className="h-full w-0 bg-emerald-500 transition-all duration-300"
          id="reading-progress"
        />
      </div>

      {/* [LAYER 1]: Hero Header - ส่วนนำเสนอหัวข้อและข้อมูลเชิงลึก */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            กลับสู่คลังข้อมูลเชิงกลยุทธ์
          </Link>

          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 flex flex-wrap items-center gap-8 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-emerald-500" />
                {post.frontmatter.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={14} className="text-emerald-500" />
                {post.frontmatter.author}
              </span>
              <span className="flex items-center gap-2 text-emerald-600">
                <Tag size={14} />
                {post.frontmatter.category}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-slate-300" />
                {post.frontmatter.readingTime || "5 MIN READ"}
              </span>
            </div>

            <h1 className="font-heading text-4xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-8xl">
              {post.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: Article Body - ส่วนเนื้อหาหลักและข้อมูลสนับสนุน */}
      <article className="container mx-auto px-6">
        <div className="relative -mt-16 mb-20 aspect-video w-full overflow-hidden rounded-[3.5rem] border-8 border-white bg-slate-100 shadow-2xl shadow-slate-900/10 md:-mt-24">
          <Image
            src={post.frontmatter.thumbnail || "/images/blog/placeholder.webp"}
            alt={post.frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-12">
          {/* ส่วนแถบควบคุมข้อมูลสำหรับการแชร์และข้อมูลแบรนด์ */}
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-32 flex flex-col items-center gap-8">
              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all hover:bg-slate-950 hover:text-white">
                <Share2 size={20} />
              </button>
              <div className="h-20 w-px bg-slate-100" />
              <p className="font-heading vertical-text text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
                Strategic Insights
              </p>
            </div>
          </aside>

          {/* ส่วนแสดงผลเนื้อหาหลัก (Main Content Body) */}
          <div className="lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
            <div className="prose-mzaa prose prose-slate prose-lg prose-headings:font-heading prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-4xl prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-6 prose-p:font-body prose-p:text-slate-600 prose-img:rounded-[3rem] prose-a:text-emerald-600 prose-strong:text-slate-950 max-w-none">
              {content}
            </div>

            {/* ส่วนสรุปเนื้อหาและทางเลือกการนำทางต่อ */}
            <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                <Heart size={14} className="text-emerald-500" />
                Strategic Insight Hub 2026
              </div>
              <Link
                href="/blog"
                className="group flex items-center gap-3 text-[11px] font-black tracking-widest text-emerald-600 uppercase italic transition-colors hover:text-slate-950"
              >
                ตรวจสอบข้อมูลเชิงลึกอื่น
                <ChevronLeft
                  size={16}
                  className="rotate-180 transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

/**
 * 3. Static Path Generation: การจัดเตรียมเส้นทางข้อมูลล่วงหน้า
 */
export async function generateStaticParams() {
  const posts = await getBlogPostsMetadata()
  return posts.map((post) => ({ slug: post.slug }))
}
