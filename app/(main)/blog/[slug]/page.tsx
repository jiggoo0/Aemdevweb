/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"

// 🛠️ Icons Essentials
import {
  ArrowLeft,
  Calendar,
  Share2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"

// 📦 Specialist Data & Config
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"
import { useMDXComponents } from "@/mdx-components"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🎨 Enhanced MDX Components Mapping
 * ปรับจูนให้หน้าอ่านบทความมีความ "พรีเมียม" และแก้ปัญหา TypeScript Error
 */
const mdxComponents = {
  ...useMDXComponents({}),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-16 space-y-4 text-center">
      <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl">
        <Image
          // ✅ [FIXED]: ทำการ Cast Type เป็น string เพื่อป้องกัน TS2322 (Type 'Blob' mismatch)
          src={(props.src as string) || "/images/og-image.png"}
          fill
          className="object-cover"
          alt={props.alt || "AEMDEVWEB Insight"}
          loading="lazy"
        />
      </div>
      {props.alt && (
        <figcaption className="font-anuphan text-sm font-bold text-slate-400 italic">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  h2: (props: any) => (
    <h2
      className="font-prompt mt-24 mb-10 border-l-8 border-emerald-500 pl-6 text-4xl leading-none font-black tracking-tighter text-slate-900 uppercase italic"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-prompt mt-16 mb-6 text-2xl font-black tracking-tight text-slate-800 uppercase italic"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="font-anuphan mb-10 text-xl leading-[1.8] font-medium text-slate-600"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="font-anuphan mb-4 list-inside list-disc text-xl font-medium text-slate-600 marker:text-emerald-500"
      {...props}
    />
  ),
  CallToAction: ({
    title,
    description,
    url,
  }: {
    title: string
    description: string
    url?: string
  }) => (
    <div className="my-24 rounded-[3.5rem] border-2 border-dashed border-emerald-500/30 bg-emerald-50/10 p-12 text-center shadow-2xl shadow-emerald-500/5 transition-transform duration-500 hover:scale-[1.01] md:p-20">
      <Badge className="mb-6 bg-emerald-500 font-black text-slate-950 italic">
        SPECIALIST OFFER
      </Badge>
      <h3 className="font-prompt mb-6 text-3xl leading-tight font-black text-slate-900 uppercase italic md:text-5xl">
        {title}
      </h3>
      <p className="font-anuphan mx-auto mb-10 max-w-2xl text-lg font-bold text-slate-500 md:text-xl">
        {description}
      </p>
      <Button
        asChild
        className="font-prompt h-16 rounded-2xl bg-slate-950 px-12 font-black tracking-widest text-white uppercase shadow-xl transition-all hover:bg-emerald-500 hover:text-slate-950"
      >
        <Link href={url || "/contact"}>ปรึกษานายเอ็มโดยตรง</Link>
      </Button>
    </div>
  ),
}

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ Static Generation Logic
 */
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

/**
 * 🔍 Metadata Specialist Strategy
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: `ไม่พบบทความ | ${siteConfig.shortName}` }
  return {
    title: `${post.title} | Knowledge Hub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      images: [{ url: post.thumbnail || siteConfig.ogImage }],
      authors: [siteConfig.expert],
    },
  }
}

/**
 * 🚀 Blog Post Main Engine
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="relative min-h-screen bg-white pt-32 pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.thumbnail,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: siteConfig.expert,
            url: siteConfig.url,
          },
        }}
      />

      {/* 🌌 Subtle Background Infrastructure */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      <div className="container mx-auto max-w-4xl px-6">
        <nav className="mb-16">
          <Link
            href="/blog"
            className="group inline-flex items-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-500"
          >
            <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-2" />
            Back to Library
          </Link>
        </nav>

        <header className="mb-20 space-y-10">
          <div className="flex flex-wrap items-center gap-4">
            {(post.tags || []).map((tag) => (
              <Badge
                key={tag}
                className="rounded-full border-slate-200 bg-slate-50 px-5 py-1.5 text-[10px] font-black tracking-widest text-slate-500 uppercase"
              >
                {tag}
              </Badge>
            ))}
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-300 uppercase italic">
              <Calendar className="h-4 w-4 text-emerald-500" /> {formattedDate}
            </div>
          </div>

          <h1 className="font-prompt text-5xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl">
            {post.title}
          </h1>

          <p className="font-anuphan border-l-4 border-slate-100 pl-6 text-2xl leading-relaxed font-bold text-slate-400 italic">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-24 aspect-[21/10] w-full overflow-hidden rounded-[4rem] shadow-2xl shadow-slate-200/50">
          <Image
            src={post.thumbnail || "/images/og-image.png"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ✍️ Core Content Area (MDX) */}
        <div className="prose prose-slate prose-xl prose-headings:font-prompt prose-p:font-anuphan prose-p:leading-[1.9] prose-strong:text-slate-950 prose-a:text-emerald-600 max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* 👤 Author Section */}
        <div className="mt-32 flex flex-col items-center justify-between gap-10 rounded-[3.5rem] border border-slate-100 bg-slate-50/80 p-12 md:flex-row">
          <div className="flex items-center gap-8">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">
              <span className="font-prompt text-4xl font-black text-emerald-500 italic">
                {siteConfig.expert.charAt(0)}
              </span>
            </div>
            <div className="space-y-1">
              <div className="font-prompt text-2xl leading-none font-black text-slate-900 uppercase italic">
                {siteConfig.expert}
              </div>
              <div className="font-anuphan text-xs font-black tracking-[0.2em] text-emerald-600 uppercase">
                Technical SEO Specialist
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="h-14 rounded-2xl border-slate-200 px-8 text-[10px] font-black tracking-widest uppercase transition-all hover:bg-slate-900 hover:text-white"
          >
            <Share2 className="mr-2 h-4 w-4" /> Share this Insight
          </Button>
        </div>

        {/* 🎯 High-Conversion CTA Section */}
        <div className="relative mt-24 overflow-hidden rounded-[4.5rem] bg-slate-950 p-12 text-center text-white shadow-3xl md:p-24">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <ShieldCheck size={250} />
          </div>
          <Sparkles className="mx-auto mb-10 h-16 w-16 animate-pulse text-emerald-500" />
          <h3 className="font-prompt mb-8 text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
            Ready to <br />{" "}
            <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">
              Scale
            </span>{" "}
            up?
          </h3>
          <p className="font-anuphan mx-auto mb-12 max-w-2xl text-xl font-medium text-slate-400">
            หากคุณต้องการระบบที่ "นิ่ง" และ "แรง" แบบสถาปัตยกรรมชิ้นนี้ 
            ทักมาคุยรายละเอียดโปรเจกต์กับผมโดยตรงได้ทันทีครับ
          </p>
          <Button
            asChild
            className="h-20 transform rounded-[2.5rem] bg-emerald-500 px-16 text-slate-950 shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-white active:scale-95"
          >
            <Link
              href="/contact"
              className="font-prompt text-lg font-black tracking-widest uppercase italic"
            >
              <MessageCircle className="mr-3 h-6 w-6 fill-current" /> Let's Talk
              Project
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
