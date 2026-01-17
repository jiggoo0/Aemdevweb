/** @format */

import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Sparkles,
  MessageCircle,
} from "lucide-react"

// 🛠️ Components
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🎨 MDX Components Configuration
 * ✅ Fixed: แก้ไขปัญหา href เป็น undefined โดยรองรับทั้ง url และ href จาก MDX
 */
const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const imgSrc = typeof props.src === "string" ? props.src : ""
    return (
      <Image
        src={imgSrc}
        width={800}
        height={450}
        className="rounded-3xl border border-white/10"
        alt={props.alt || "Blog Image Content"}
        loading="lazy"
      />
    )
  },
  // 🚀 CallToAction: รองรับทั้งการพิมพ์ <CallToAction url="..." /> หรือ href="..."
  CallToAction: ({
    title,
    description,
    href,
    url,
  }: {
    title: string
    description: string
    href?: string
    url?: string
  }) => {
    // 🎯 Fallback logic: ถ้าไม่มีทั้งคู่ให้ไปหน้า contact
    const targetPath = href || url || "/contact"

    return (
      <div className="border-aurora-cyan/20 bg-aurora-cyan/5 shadow-luminous my-12 rounded-[2rem] border p-8 text-center">
        <h3 className="font-prompt mb-4 text-2xl font-black text-white uppercase italic">
          {title}
        </h3>
        <p className="font-anuphan mb-8 text-slate-400">{description}</p>
        <Button variant="premium" asChild className="h-12 px-10">
          <Link href={targetPath}>เริ่มโปรเจกต์ของคุณ</Link>
        </Button>
      </div>
    )
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

// ⚙️ SSG Build: สร้างหน้า Static ไว้ล่วงหน้า
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// 🔍 SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | AemDevWeb`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}

/**
 * 📄 BlogPostPage: Luminous Edition
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  return (
    <article className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[0.05] blur-[120px]" />

      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* 🔙 Navigation: Back Link */}
        <Link
          href="/blog"
          className="hover:text-aurora-cyan group font-prompt mb-12 inline-flex items-center text-xs font-black tracking-widest text-slate-500 uppercase transition-all"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Back to Insights
        </Link>

        {/* 🏷️ Header: Luminous Title */}
        <header className="mb-16 space-y-8">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="luminous" className="px-4 py-1.5">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">
              <span className="flex items-center">
                <Calendar className="text-aurora-cyan mr-2 h-3.5 w-3.5" />{" "}
                {post.date.split("T")[0]}
              </span>
              <span className="flex items-center">
                <Clock className="text-aurora-cyan mr-2 h-3.5 w-3.5" />{" "}
                {post.readingTime} READ
              </span>
            </div>
          </div>

          <h1 className="font-prompt text-4xl leading-[1.1] font-black tracking-tighter text-balance text-white uppercase italic md:text-6xl">
            {post.title}
          </h1>

          <p className="font-anuphan text-xl leading-relaxed font-medium text-balance text-slate-400">
            {post.description}
          </p>
        </header>

        {/* 🖼️ Cover Image: Glass Showcase */}
        <div className="shadow-luminous group relative mb-20 aspect-video w-full overflow-hidden rounded-[2.5rem] border border-white/10">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 to-transparent" />
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* ✍️ Content Body: Humanistic Reading */}
        <div className="prose prose-lg md:prose-xl prose-invert prose-emerald prose-headings:font-prompt prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white prose-p:font-anuphan prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-medium prose-strong:text-aurora-cyan prose-a:text-aurora-cyan prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-code:text-aurora-emerald prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md mx-auto max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* 👤 Author & Share: Glass Panel */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:flex-row">
          <div className="flex items-center gap-5">
            <div className="from-aurora-cyan to-aurora-emerald shadow-aurora-glow relative size-14 rounded-2xl bg-gradient-to-br p-[1px]">
              <div className="font-prompt flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                A
              </div>
            </div>
            <div>
              <div className="font-prompt font-black tracking-wider text-white uppercase">
                นายเอ็มซ่ามากส์
              </div>
              <div className="font-anuphan mt-1 text-xs font-bold tracking-widest text-slate-500 uppercase">
                Fullstack Dev & Consultant
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="hover:border-aurora-cyan group h-12 gap-2 rounded-xl px-8"
          >
            <Share2 className="h-4 w-4 transition-transform group-hover:scale-110" />
            Share Insight
          </Button>
        </div>

        {/* 🚀 Final CTA */}
        <div className="border-aurora-cyan/30 bg-aurora-cyan/5 group shadow-luminous relative mt-16 overflow-hidden rounded-[3rem] border p-10 text-center md:p-16">
          <div className="aurora-bg -top-1/2 -left-1/2 h-full w-full opacity-10 transition-opacity group-hover:opacity-20" />
          <div className="relative z-10">
            <Sparkles className="text-aurora-cyan mx-auto mb-6 h-10 w-10 animate-pulse" />
            <h3 className="font-prompt mb-6 text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
              อ่านจบแล้ว... <br />
              อยากมีเว็บที่ <span className="text-aurora-cyan">ไบร์ท</span>{" "}
              แบบนี้ไหม?
            </h3>
            <p className="font-anuphan mx-auto mb-10 max-w-xl text-lg leading-relaxed font-medium text-slate-400">
              ปรึกษาฟรี ไม่คิดเงิน
              นายเอ็มพร้อมช่วยวางโครงสร้างที่ปิดการขายได้จริง
              ทักมาคุยไอเดียกันก่อนได้ครับ
            </p>
            <Button
              variant="premium"
              size="lg"
              className="shadow-aurora-glow group h-18 px-12 text-lg"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-3 h-6 w-6" />{" "}
                ทักไลน์คุยงานกับคุณเอ็ม
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
