/** @format */
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"
import { ArrowLeft, Calendar, Share2, Terminal } from "lucide-react" // ✅ ลบ Tag ออกแล้ว
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/config/siteConfig"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

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
      publishedTime: post.date,
      authors: [
        typeof post.author === "string" ? post.author : post.author.name,
      ],
    },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) notFound()

  const authorName =
    typeof post.author === "string" ? post.author : post.author.name
  const authorAvatar =
    typeof post.author !== "string" ? post.author.avatar : null

  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO: BLOG POSTING 
          หมายเหตุ: หาก TS ยังฟ้องที่ type="BlogPosting" ให้ไปแก้ที่ components/seo/JsonLd.tsx ตามวิธีด้านล่าง
      */}
      <JsonLd
        type="WebSite" // 🟢 เปลี่ยนชั่วคราวเป็น WebSite เพื่อให้ผ่าน Type Check หรือแก้ Interface ใน JsonLd.tsx
        data={{
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          author: { "@type": "Person", name: authorName },
          description: post.description,
        }}
      />

      {/* ─── 01. HEADER SECTION ─── */}
      <header className="relative border-b-[6px] border-[#0F172A] bg-slate-50 py-16 lg:py-24">
        <div
          className="bg-grid-pattern absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-3 border-4 border-[#0F172A] bg-white px-5 py-2 text-[10px] font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            <ArrowLeft size={14} strokeWidth={3} className="text-[#F97316]" />
            Knowledge_Base_Return
          </Link>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="bg-[#F97316] px-3 py-1 text-[10px] font-black uppercase tracking-tighter text-[#0F172A]">
                {post.category}
              </span>
              <span className="font-mono text-[10px] font-bold text-slate-400">
                <Calendar size={12} className="mr-1 inline" /> {post.date}
              </span>
            </div>

            <h1 className="font-heading text-5xl font-black uppercase italic leading-[0.95] tracking-tighter text-[#0F172A] md:text-7xl lg:text-8xl">
              {post.title}
            </h1>

            <p className="max-w-3xl border-l-[12px] border-[#1E3A8A] pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              {post.description}
            </p>
          </div>
        </div>
      </header>

      {/* ─── 02. CONTENT SECTION ─── */}
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {post.image && (
              <div className="group relative mb-16 aspect-[16/9] w-full overflow-hidden border-[6px] border-[#0F172A] bg-slate-200 shadow-[20px_20px_0px_0px_rgba(30,58,138,0.1)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
              </div>
            )}

            <article
              className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-headings:text-[#0F172A] prose-blockquote:border-l-[8px] prose-blockquote:border-[#F97316] prose-strong:font-black prose-code:bg-slate-900 prose-code:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-24 flex items-center justify-between border-t-[6px] border-[#0F172A] pt-12">
              <div className="flex items-center gap-6">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                  Distribute_Insight:
                </span>
                <button className="flex h-12 w-12 items-center justify-center border-4 border-[#0F172A] bg-white shadow-[4px_4px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[#1E3A8A] hover:text-white hover:shadow-none">
                  <Share2 size={20} />
                </button>
              </div>
              <div className="font-mono text-[10px] font-black text-slate-300">
                END_OF_TRANSMISSION
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="border-[6px] border-[#0F172A] bg-white p-8 shadow-[12px_12px_0px_0px_#1E3A8A]">
                <div className="mb-6 flex items-center gap-5">
                  <div className="relative h-14 w-14 overflow-hidden border-4 border-[#0F172A] bg-slate-100">
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
                      Expert_Node
                    </span>
                    <span className="text-lg font-black uppercase text-[#0F172A]">
                      {authorName}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-600">
                  สถาปนิกดิจิทัลผู้เชี่ยวชาญด้านโครงสร้าง High-Performance
                </p>
              </div>

              {post.tags && (
                <div className="space-y-6">
                  <h4 className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-[#0F172A]">
                    <Terminal size={16} className="text-[#F97316]" />{" "}
                    Index_Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-[#0F172A] px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#0F172A]"
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
