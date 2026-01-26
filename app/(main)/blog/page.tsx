/** @format */

import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Sparkles } from "lucide-react" // เคลียร์ ChevronRight และ BookOpen ออก

import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * การจัดการข้อมูลส่วนหัว: ดึงพิกัดจาก siteConfig.project
 * เพื่อให้ตรงกับโครงสร้างที่ปรับปรุงใหม่
 */
export const metadata: Metadata = {
  title: `คลังความรู้ SME และโรงงาน | ${siteConfig.project.name} 2026`,
  description:
    "รวมเทคนิคการทำเว็บไซต์ให้โหลดไว เพิ่มโอกาสการเข้าถึง และแนวทางการจัดการตลาดออนไลน์ที่สรุปมาเพื่อเจ้าของธุรกิจโดยเฉพาะ",
  alternates: { canonical: `${siteConfig.project.url}/blog` },
}

const FALLBACK_IMAGE = "/images/og-image.png"

export default async function BlogPage() {
  const posts = await getAllPosts()

  if (!posts || posts.length === 0) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center pt-32">
        <p className="font-anuphan text-lg font-bold text-slate-400">
          ยังไม่มีบทความในคลังข้อมูลขณะนี้
        </p>
      </main>
    )
  }

  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <main className="relative min-h-screen bg-white pt-32 pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="WebPage"
        data={{
          "@type": "Blog",
          name: `${siteConfig.project.name} Knowledge Hub`,
          description: metadata.description as string,
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.name,
          },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            datePublished: post.frontmatter.date,
            url: `${siteConfig.project.url}/blog/${post.slug}`,
          })),
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed bg-center" />
      </div>

      <section className="relative z-10 container mx-auto mb-20 px-6 text-center lg:mb-32">
        <div className="animate-in fade-in slide-in-from-bottom-2 mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 shadow-sm duration-700">
          <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
          <span className="font-prompt text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
            Specialist Perspectives 2026
          </span>
        </div>
        <h1 className="font-prompt mb-10 text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
          คลังความรู้ <br className="md:hidden" />
          <span className="text-emerald-500">SME ยุคใหม่</span>
        </h1>
        <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
          ถอดบทเรียนการทำเว็บจากหน้างานจริง เพื่อช่วยเพิ่มยอดขายให้เจ้าของธุรกิจ
        </p>
      </section>

      <div className="relative z-10 container mx-auto px-6">
        {featuredPost && (
          <article className="mb-20 lg:mb-32">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white shadow-xl transition-all duration-700 hover:shadow-emerald-500/10"
            >
              <div className="grid min-h-[500px] gap-0 md:grid-cols-2 lg:items-center">
                <div className="relative aspect-video h-full overflow-hidden md:aspect-auto">
                  <Image
                    src={featuredPost.frontmatter.thumbnail || FALLBACK_IMAGE}
                    alt={featuredPost.frontmatter.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center space-y-8 p-10 md:p-16 lg:p-24">
                  <div className="flex items-center gap-6">
                    <Badge className="rounded-full border-none bg-emerald-500 px-4 py-1 text-[10px] font-black tracking-widest text-slate-950 uppercase italic">
                      MUST READ
                    </Badge>
                  </div>
                  <h2 className="font-prompt text-4xl leading-[1] font-black tracking-tighter text-slate-900 uppercase italic transition-colors group-hover:text-emerald-600 md:text-5xl lg:text-7xl">
                    {featuredPost.frontmatter.title}
                  </h2>
                  <p className="font-anuphan line-clamp-3 text-lg leading-relaxed font-bold text-slate-500">
                    {featuredPost.frontmatter.excerpt ||
                      featuredPost.frontmatter.description}
                  </p>
                  <div className="font-prompt inline-flex items-center gap-4 text-xs font-black tracking-[0.3em] text-slate-950 uppercase">
                    <span>อ่านเบื้องหลังฉบับเต็ม</span>
                    <ArrowRight className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        )}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <article key={post.slug} className="flex h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex w-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.frontmatter.thumbnail || FALLBACK_IMAGE}
                    alt={post.frontmatter.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-6 p-8">
                  <div className="flex items-center justify-between text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5 text-emerald-500" />
                      {post.frontmatter.date || "ไม่ระบุวันที่"}
                    </span>
                  </div>
                  <h3 className="font-prompt line-clamp-2 text-2xl font-black tracking-tighter text-slate-900 uppercase italic transition-colors group-hover:text-emerald-500">
                    {post.frontmatter.title}
                  </h3>
                  <p className="font-anuphan line-clamp-3 flex-1 text-base leading-relaxed font-bold text-slate-500">
                    {post.frontmatter.excerpt || post.frontmatter.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <footer className="container mx-auto mt-40 border-t border-slate-50 px-6 py-12 text-center">
        <p className="font-prompt text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase">
          Managed and Curated by {siteConfig.expert.name} v.2026
        </p>
      </footer>
    </main>
  )
}
