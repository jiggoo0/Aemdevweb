/** @format */
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"
import { ArrowLeft, Calendar, Share2, Tag } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd" // ✅ Fix: Updated path to /seo/
import { siteConfig } from "@/config/siteConfig"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 🛠️ Generate Static Params สำหรับทำ SSG
 */
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * 🛡️ Dynamic Metadata เพื่อผลทาง SEO
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) return {}

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
      type: "article",
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  // ✅ บังคับ Type Casting เพื่อกำจัด Error 'tags' does not exist
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) notFound()

  // จัดการข้อมูล Author ให้เป็นมาตรฐาน
  const authorName =
    typeof post.author === "string" ? post.author : post.author.name
  const authorAvatar =
    typeof post.author !== "string" ? post.author.avatar : null

  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO: ARTICLE SCHEMA */}
      <JsonLd
        type="Organization" // หรือปรับเป็น BlogPosting ในระดับลึกหากต้องการ
        data={{
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: authorName },
          description: post.description,
        }}
      />

      {/* ─── 01. HEADER SECTION ─── */}
      <header className="relative border-b-[6px] border-[#0F172A] bg-white py-20 lg:py-32">
        <div
          className="bg-grid-pattern absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link
            href="/blog"
            className="group mb-12 inline-flex items-center gap-3 border-2 border-[#0F172A] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <ArrowLeft size={14} strokeWidth={3} /> Back_to_Knowledge_Hub
          </Link>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="bg-[#1E3A8A] px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-white">
                {post.category}
              </span>
              <div className="h-[2px] w-12 bg-slate-200" />
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-slate-400">
                <Calendar size={12} /> {post.date}
              </div>
            </div>

            <h1 className="font-heading text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-[#0F172A] md:text-7xl lg:text-8xl">
              {post.title}
            </h1>

            <p className="max-w-3xl border-l-[10px] border-[#F97316] pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              {post.description}
            </p>
          </div>
        </div>
      </header>

      {/* ─── 02. CONTENT SECTION ─── */}
      <div className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {post.image && (
              <div className="group relative mb-16 aspect-[16/9] w-full overflow-hidden border-[6px] border-[#0F172A] bg-slate-200 shadow-[16px_16px_0px_0px_#1E3A8A]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            )}

            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-headings:text-[#0F172A] prose-h2:border-b-4 prose-h2:border-slate-100 prose-h2:pb-4 prose-h2:text-4xl prose-p:font-bold prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:font-black prose-strong:text-[#1E3A8A] prose-img:border-4 prose-img:border-[#0F172A] prose-img:shadow-[8px_8px_0px_0px_#F97316]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="mt-20 flex items-center gap-6 border-t-4 border-slate-100 pt-10">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                Share_Insight:
              </span>
              <button className="flex h-12 w-12 items-center justify-center border-2 border-[#0F172A] bg-white transition-colors hover:bg-[#1E3A8A] hover:text-white">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <aside className="space-y-12 lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="border-[4px] border-[#0F172A] bg-white p-8 shadow-[8px_8px_0px_0px_#0F172A]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden border-2 border-[#0F172A] bg-slate-100">
                    {authorAvatar && (
                      <Image
                        src={authorAvatar}
                        alt={authorName}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Written_By
                    </span>
                    <span className="text-lg font-black uppercase text-[#0F172A]">
                      {authorName}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-bold leading-relaxed text-slate-500">
                  สถาปนิกดิจิทัลผู้เชี่ยวชาญด้านการวางโครงสร้างเว็บเพื่อ SME ไทย
                </p>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#0F172A]">
                    <Tag size={14} className="text-[#F97316]" /> Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
