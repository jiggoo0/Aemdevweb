/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { BlogPost } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogSectionProps {
  posts?: BlogPost[]
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  const blogLink = `/blog/${post.slug || post.id}`
  const description = post.description || post.excerpt || ""

  return (
    <Link href={blogLink} className="group block h-full">
      {/* ─── CARD: ENTERPRISE BRUTALISM ─── */}
      <div className="relative flex h-full flex-col border-2 border-brand-navy bg-white transition-all duration-300 hover:shadow-enterprise-md group-hover:-translate-x-1 group-hover:-translate-y-1">
        {/* Thumbnail with Grayscale effect */}
        <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-brand-navy bg-slate-100">
          <Image
            src={post.image || "/images/blog-placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Category Label */}
          <div className="absolute bottom-0 left-0 bg-brand-blue px-5 py-2">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
              {post.category || "Business Insight"}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-grow flex-col space-y-6 p-8 lg:p-10">
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-brand-blue" />
              <span>{post.date}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-brand-blue" />
              <span>{post.readTime || "5 MIN READ"}</span>
            </div>
          </div>

          <h3 className="line-clamp-2 text-xl font-black uppercase italic leading-tight text-brand-navy transition-colors group-hover:text-brand-blue md:text-2xl">
            {post.title}
          </h3>

          <p className="line-clamp-2 text-sm font-bold leading-relaxed text-slate-500">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t-2 border-slate-50 pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy transition-colors group-hover:text-brand-blue">
              Continue Reading
            </span>
            <div className="flex h-10 w-10 items-center justify-center border-2 border-brand-navy transition-all group-hover:bg-brand-navy group-hover:text-white">
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function BlogSection({ posts = [] }: BlogSectionProps) {
  // แสดงผลสูงสุด 4 บทความในหน้า Home
  const displayPosts = posts.slice(0, 4)

  return (
    <section
      id="blog"
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-40" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Area */}
        <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b-2 border-slate-200 pb-12 lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-3 border-l-4 border-brand-blue bg-white px-5 py-2 shadow-enterprise-sm">
              <Sparkles size={14} className="text-brand-blue" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                Knowledge Hub
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase italic leading-[0.95] tracking-tighter text-brand-navy md:text-7xl">
              สาระน่ารู้ <br />
              <span className="text-brand-blue">ฉบับคนทำธุรกิจ</span>
            </h2>

            <p className="border-l-4 border-slate-100 pl-8 text-lg font-bold leading-relaxed text-slate-500 md:text-xl">
              รวบรวมเทคนิคการทำเว็บไซต์และการตลาดออนไลน์ฉบับพาร์ทเนอร์{" "}
              <br className="hidden md:block" />
              เน้นภาษาที่เข้าใจง่าย และนำไปใช้จริงกับธุรกิจของคุณได้ทันทีครับ
            </p>
          </div>

          <Button
            variant="outline"
            asChild
            className="h-16 rounded-none border-2 border-brand-navy bg-white px-12 text-xs font-black uppercase tracking-[0.2em] shadow-enterprise-sm transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-brand-navy hover:text-white hover:shadow-none"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        {/* Blog Grid: Modular Blueprint Layout */}
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {displayPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="border-4 border-dashed border-slate-200 bg-slate-50 py-32 text-center">
            <BookOpen size={40} className="mx-auto mb-6 text-slate-300" />
            <h3 className="text-xl font-black uppercase tracking-[0.1em] text-brand-navy">
              Data Synchronizing...
            </h3>
            <p className="mt-2 text-sm font-bold uppercase text-slate-400">
              กำลังปั้นเนื้อหาคุณภาพเพื่อ SME ไทยครับ
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
