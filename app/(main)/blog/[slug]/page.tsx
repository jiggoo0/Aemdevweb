/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Tag, Clock, Heart } from "lucide-react"

// ระบบดึงข้อมูลบทความจากหลังบ้าน
import { getBlogPostBySlug, getBlogPostsMetadata } from "@/lib/blog"
import { JsonLd } from "@/components/seo/JsonLd"

// ส่วนประมวลผลเนื้อหา MDX เพื่อการแสดงผลที่สวยงาม
import { useMDXComponents } from "@/mdx-components"
import { compileMDX } from "next-mdx-remote/rsc"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 1. SEO Fine-tuning: ปรับแต่งข้อมูลให้ระบบค้นหาจัดลำดับเนื้อหาได้แม่นยำ
 * เป้าหมาย: ให้บทความนี้เข้าถึงคนที่กำลังหาคำตอบจริงๆ
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return { title: "ไม่พบข้อมูลบทความ" }

  return {
    title: `${post.frontmatter.title} | นายเอ็มซ่ามากส์`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [post.frontmatter.thumbnail || "/og-image.png"],
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "Alongkorl Yomkerd"],
    },
  }
}

/**
 * 2. BlogPost Component: จัดระเบียบการอ่านให้ลื่นไหลและสบายตาที่สุด
 * คอนเซปต์: "นายเอ็มซ่ามากส์ แค่อยากให้อ่านมันดีนะ"
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  // แปลงข้อมูลจาก MDX ให้กลายเป็นหน้าเว็บที่เนี้ยบและซิ่ง
  const { content } = await compileMDX({
    source: post.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  })

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* ข้อมูลโครงสร้างเพื่อบอก AI ว่าเนื้อหานี้มีคุณภาพระดับมาตรฐานปี 2026 */}
      <JsonLd
        type="BlogPosting"
        data={{
          headline: post.frontmatter.title,
          description: post.frontmatter.description,
          image: post.frontmatter.thumbnail,
          datePublished: post.frontmatter.date,
          authorName: post.frontmatter.author || "Alongkorl Yomkerd",
        }}
      />

      {/* Header Section: ส่วนพาดหัวที่เน้นความโปร่งและอ่านง่าย */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* ลายตารางพื้นหลังแบบจางๆ เพิ่มความแพงแบบเรียบง่าย */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            ย้อนกลับไปคลังบทความ
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
                <Clock size={14} className="text-slate-300" />5 MIN READ
              </span>
            </div>

            <h1 className="font-heading text-4xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
              {post.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Body: จัดการเรื่องความสวยงามของตัวอักษรให้อ่านง่ายในทุกอุปกรณ์ */}
      <article className="container mx-auto px-6">
        {/* ภาพหน้าปก: จัดวางให้ลอยขึ้นเพื่อมิติที่สวยงาม (LCP Optimized) */}
        <div className="shadow-3xl relative -mt-16 mb-20 aspect-video w-full overflow-hidden rounded-[3rem] border-8 border-white bg-slate-100 shadow-slate-900/10 md:-mt-24">
          <Image
            src={post.frontmatter.thumbnail || "/images/blog/placeholder.webp"}
            alt={post.frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl">
          {/* ส่วนเนื้อหาหลักที่ผ่านการปรับจูน CSS ให้เนียนกริบ */}
          <div className="prose prose-slate prose-lg prose-headings:font-heading prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic prose-headings:text-slate-950 prose-h2:text-4xl prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-6 prose-h2:mt-16 prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-p:font-medium prose-p:text-slate-600 prose-strong:text-slate-950 prose-strong:font-black prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-16 prose-a:text-emerald-600 prose-a:font-black prose-a:no-underline hover:prose-a:text-slate-950 prose-code:bg-slate-50 prose-code:text-emerald-700 prose-code:px-2 prose-code:rounded max-w-none">
            {content}
          </div>

          {/* ส่วนท้ายบทความ: ขอบคุณคนอ่านและนำทางต่อ */}
          <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
            <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
              <Heart size={14} className="text-emerald-500/50" />
              อ่านมันดีนะ • AEMDEVWEB 2026
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-3 text-[11px] font-black tracking-widest text-emerald-600 uppercase italic transition-colors hover:text-slate-950"
            >
              ดูเรื่องราวน่าสนใจอื่นต่อ
              <ChevronLeft
                size={16}
                className="rotate-180 transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

/**
 * แจ้งรายการ Slug ทั้งหมดเพื่อให้ระบบสร้างหน้าเว็บล่วงหน้า (Static Site Generation)
 */
export async function generateStaticParams() {
  const posts = await getBlogPostsMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
