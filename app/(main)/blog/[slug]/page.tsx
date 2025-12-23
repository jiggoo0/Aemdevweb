/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogData } from "@/data/blogData"
import { siteConfig } from "@/config/siteConfig"
import { Button } from "@/components/ui/button"
import { CalendarDays, ChevronLeft, Clock, Share2 } from "lucide-react"
import { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ SSG Optimization: สร้างหน้า Static ไว้ล่วงหน้าตอน Build
 */
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * 🚀 SEO Metadata: ปรับปรุงการเรียกใช้ Metadata ให้สมบูรณ์
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)
  if (!post) return { title: "ไม่พบบทความ | aemdevweb" }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
      publishedTime: post.date, // สำหรับ Schema Markup
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) notFound()

  // Normalize Author
  const author = {
    name:
      typeof post.author === "object"
        ? post.author.name
        : post.author || "AemDev Team",
    role: typeof post.author === "object" ? post.author.role : "Web Specialist",
    avatar:
      typeof post.author === "object"
        ? post.author.avatar
        : "/images/profile/default-avatar.webp",
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Article Header */}
      <div className="mx-auto max-w-4xl px-4 pt-12 md:pt-20">
        <Button
          variant="ghost"
          asChild
          className="-ml-4 mb-8 text-slate-500 transition-colors hover:text-primary"
        >
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4" /> กลับสู่คลังความรู้
          </Link>
        </Button>

        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 md:justify-start">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-bold text-blue-600">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {post.date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> อ่านประมาณ{" "}
              {post.readTime || "5 นาที"}
            </div>
          </div>

          <h1 className="text-3xl font-black leading-[1.2] tracking-tight text-slate-900 md:text-5xl">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-6 md:justify-start">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">{author.name}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {author.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="mx-auto my-12 max-w-5xl px-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-2xl ring-1 ring-slate-200 md:aspect-[21/9] md:rounded-[2.5rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-4">
        <div className="prose prose-slate lg:prose-xl prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-p:leading-[1.8] prose-strong:text-slate-900 prose-a:text-blue-600 prose-img:rounded-3xl prose-img:shadow-lg prose-li:text-slate-600 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
        </div>

        {/* Share Section */}
        <div className="mt-20 flex items-center justify-between border-t border-slate-100 pt-10">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-900">
              แชร์บทความนี้:
            </span>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full transition-colors hover:bg-blue-50"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dynamic CTA for Blogs */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-center shadow-2xl md:p-16">
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 bg-blue-600/10 blur-[100px]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              อยากยกระดับธุรกิจ SME ของคุณ
              <br className="hidden md:block" /> ด้วยเว็บไซต์ระดับพรีเมียมไหม?
            </h2>
            <p className="mx-auto max-w-lg text-slate-400">
              ปรึกษาทีมงาน aemdevweb
              เพื่อวางโครงสร้างเว็บไซต์ที่ตอบโจทย์ธุรกิจคุณที่สุด
            </p>
            <Button
              size="lg"
              className="rounded-full bg-blue-600 px-10 py-7 text-lg font-bold text-white hover:bg-blue-500"
              asChild
            >
              <Link href="/contact">เริ่มโปรเจกต์ของคุณ</Link>
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}
