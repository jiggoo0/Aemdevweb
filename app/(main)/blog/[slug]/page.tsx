/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Tag } from "lucide-react"

// ระบบดึงข้อมูลและจัดการเนื้อหา
import { getBlogPostBySlug, getBlogPostsMetadata } from "@/lib/blog"
import { JsonLd } from "@/components/seo/JsonLd"

// นำเข้าพิกัดสำหรับการเรนเดอร์เนื้อหา MDX
import { useMDXComponents } from "@/mdx-components"
import { compileMDX } from "next-mdx-remote/rsc"

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * 1. SEO Strategy: วางพิกัดหัวข้อและรายละเอียดเพื่อการแสดงผลบน Google
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) return { title: "ไม่พบพิกัดบทความ" }

  return {
    title: `${post.frontmatter.title} | Blog`,
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
 * 2. Blog Post Component: แสดงผลเนื้อหาบทความแบบเน้นความอ่านง่าย
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) notFound()

  // ประมวลผลเนื้อหา MDX พร้อมดึงคอมโพเนนต์ที่ลงทะเบียนไว้มาใช้งาน
  const { content } = await compileMDX({
    source: post.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  })

  return (
    <main className="min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/10">
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

      {/* Header Layer: ส่วนหัวบทความที่เน้นความโปร่งและสะอาดตา */}
      <section className="bg-slate-50 pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="group mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Knowledge Hub
          </Link>

          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-6 flex flex-wrap items-center gap-6 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
              <span className="flex items-center gap-2">
                <Calendar size={12} className="text-emerald-500" />
                {post.frontmatter.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={12} className="text-emerald-500" />
                {post.frontmatter.author}
              </span>
              <span className="flex items-center gap-2 text-emerald-600">
                <Tag size={12} />
                {post.frontmatter.category}
              </span>
            </div>

            <h1 className="text-4xl leading-[1.1] font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl lg:text-7xl">
              {post.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Body: ส่วนเนื้อหาหลักที่จัดการ Typo ให้เหมาะกับบทความยาว */}
      <article className="container mx-auto px-6">
        <div className="relative -mt-12 mb-16 aspect-video overflow-hidden rounded-[2.5rem] border-8 border-white bg-slate-100 shadow-2xl md:-mt-20">
          <Image
            src={post.frontmatter.thumbnail || "/images/blog/placeholder.webp"}
            alt={post.frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl">
          {/* เรนเดอร์เนื้อหาที่ผ่านการประมวลผลพร้อมดีไซน์กริบๆ */}
          <div className="prose prose-slate prose-lg prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:italic prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-emerald-500 prose-h2:pl-6 prose-p:font-medium prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-950 prose-strong:font-black prose-img:rounded-[2rem] prose-img:shadow-xl max-w-none">
            {content}
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-slate-100 pt-10">
            <div className="text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
              End of Insights • 2026
            </div>
            <Link
              href="/blog"
              className="text-[10px] font-black tracking-widest text-emerald-600 uppercase italic hover:underline"
            >
              อ่านพิกัดอื่นต่อ
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

/**
 * [STRATEGY]: แจ้งพิกัด Static Slug เพื่อให้ระบบเตรียมหน้าเว็บไว้ล่วงหน้า
 */
export async function generateStaticParams() {
  const posts = getBlogPostsMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
