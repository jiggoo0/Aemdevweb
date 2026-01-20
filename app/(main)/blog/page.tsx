/** @format */

import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Sparkles, ChevronRight } from "lucide-react"

// 📂 ข้อมูลตัวตนและระบบจัดการบทความ
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

// 🧩 ส่วนประกอบหน้าเว็บ (Specialist Components)
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "คลังความรู้ SME & โรงงาน | กลยุทธ์เว็บไซต์และ SEO",
  description:
    "รวมเทคนิคการทำเว็บไซต์ให้โหลดไว ดันอันดับ Google และกลยุทธ์การตลาดออนไลน์ที่ผมสรุปมาให้เจ้าของธุรกิจโดยเฉพาะ โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/blog` },
}

/**
 * 📚 Blog Hub — "คลังอาวุธลับของคนทำธุรกิจ"
 */
export default async function BlogPage() {
  const posts = await getAllPosts()

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 selection:bg-emerald-500/20">
      {/* 🛠️ [FIXED]: เปลี่ยนเป็น type="WebSite" (S ใหญ่) เพื่อให้ตรงกับ Interface */}
      <JsonLd
        type="WebSite"
        data={{
          "@type": "Blog",
          name: "นายเอ็มซ่ามากส์ Knowledge Hub",
          description: metadata.description,
          url: `${siteConfig.url}/blog`,
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `${siteConfig.url}/blog/${post.slug}`,
          })),
        }}
      />

      {/* 🌌 พื้นหลังลายตาราง Industrial */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed" />
      </div>

      <section className="relative z-10 container mx-auto mb-20 px-4 text-center lg:mb-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-emerald-600" />
          <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase">
            Specialist Insights
          </span>
        </div>
        <h1 className="font-prompt mb-8 text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
          คลังอาวุธ <br className="md:hidden" />
          <span className="text-emerald-500">SME ยุคใหม่</span>
        </h1>
        <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
          แชร์เทคนิคจากประสบการณ์ตรง เพื่อช่วยเพิ่มยอดขายให้{" "}
          <br className="hidden md:block" />
          <span className="text-slate-950 underline decoration-emerald-500/20">
            เจ้าของกิจการ บริษัท และโรงงานอุตสาหกรรม
          </span>
        </p>
      </section>

      <div className="relative z-10 container mx-auto px-4">
        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative mb-20 block overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl lg:mb-32"
          >
            <div className="grid min-h-[500px] gap-0 md:grid-cols-2 lg:items-center">
              <div className="relative aspect-video h-full overflow-hidden md:aspect-auto">
                <Image
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
                <div className="mb-8 flex items-center gap-6">
                  <Badge className="rounded-full bg-slate-950 px-4 py-1 text-[10px] font-black tracking-widest text-emerald-500 uppercase">
                    แนะนำโดยเอ็ม
                  </Badge>
                  <span className="font-prompt text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    {new Date(featuredPost.date).toLocaleDateString("th-TH", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="font-prompt mb-6 text-3xl leading-[1.1] font-black tracking-tighter text-slate-900 uppercase italic transition-colors group-hover:text-emerald-500 md:text-5xl lg:text-6xl">
                  {featuredPost.title}
                </h2>
                <p className="font-anuphan mb-10 text-lg leading-relaxed font-bold text-slate-500">
                  {featuredPost.excerpt}
                </p>
                <div className="font-prompt flex items-center gap-3 text-xs font-black tracking-widest text-slate-950 uppercase transition-all group-hover:translate-x-3">
                  อ่านบทความนี้ต่อ{" "}
                  <ArrowRight className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-emerald-500" />{" "}
                    {new Date(post.date).toLocaleDateString("th-TH")}
                  </span>
                </div>
                <h3 className="font-prompt mb-4 line-clamp-2 text-2xl font-black tracking-tighter text-slate-900 uppercase transition-colors group-hover:text-emerald-500">
                  {post.title}
                </h3>
                <p className="font-anuphan mb-8 line-clamp-3 flex-1 text-base leading-relaxed font-bold text-slate-500">
                  {post.excerpt}
                </p>
                <div className="font-prompt mt-auto flex items-center gap-2 border-t border-slate-50 pt-6 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-all group-hover:text-slate-900">
                  อ่านเนื้อหาเต็มๆ{" "}
                  <ChevronRight className="ml-auto h-4 w-4 text-emerald-500 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="container mx-auto mt-32 px-4 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Managed by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
