/** @format */
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { blogData } from "@/data/blog/allposts"

interface Props {
  params: Promise<{
    slug: string
  }>
}

/* Static Params */
export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

/* Metadata */
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) return {}

  return {
    title: `${post.title} | AEMDEVWEB`,
    description: post.description,
  }
}

/* Page */
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <main className="min-h-screen bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back */}
        <Link
          href="/blog"
          className="mb-12 inline-block font-black uppercase tracking-widest text-slate-400 hover:text-slate-900"
        >
          ← Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-900">
          {post.title}
        </h1>

        <p className="mt-6 text-xl font-bold italic text-slate-500">
          {post.description}
        </p>

        {/* ✅ FEATURE IMAGE */}
        {post.image && (
          <div className="relative mt-16 aspect-[16/9] w-full border-4 border-slate-900 shadow-[8px_8px_0px_0px_#2563eb]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* ✅ CONTENT (HTML) */}
        <article
          className="prose prose-lg mt-16 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  )
}