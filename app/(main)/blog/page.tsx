/** @format */

import { getAllPosts } from "@/lib/mdx"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
// ✅ Fixed: Removed unused 'Zap' import to clear ESLint error
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
// ✅ Fixed: Removed unused 'cn' import to clear ESLint error

export const metadata: Metadata = {
  title: "Knowledge Hub | AEMDEVWEB",
  description:
    "รวมเทคนิคการทำเว็บ High-Conversion และการตลาดออนไลน์สำหรับ SME ปี 2026",
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const featuredPost = posts.find((p) => p.isFeatured) || posts[0]
  const regularPosts = posts.filter((p) => p.slug !== featuredPost?.slug)

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* 🌌 Aurora Background Decorations */}
      <div className="aurora-bg top-0 left-1/2 h-[500px] w-full -translate-x-1/2 opacity-[0.05] blur-[120px]" />
      <div className="aurora-bg bg-aurora-violet -bottom-40 -left-40 h-[600px] w-[600px] opacity-[0.03] blur-[150px]" />

      {/* 🎯 1. Hero Section: Hub Header */}
      <section className="relative z-10 container mx-auto mb-24 px-4 text-center">
        <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" /> Knowledge Hub
        </div>
        <h1 className="font-prompt mb-8 text-5xl font-black tracking-tighter text-white uppercase italic md:text-8xl">
          คลังอาวุธ <br className="md:hidden" />
          <span className="text-aurora-cyan drop-shadow-luminous">
            SME ยุคใหม่
          </span>
        </h1>
        <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
          ไม่ใช่แค่บทความ แต่คือคู่มือการใช้งานเทคโนโลยีเพื่อสร้างยอดขาย{" "}
          <br className="hidden md:block" />
          <span className="text-white">
            คัดเนื้อเน้นๆ เพื่อเครื่องยนต์ธุรกิจที่แรงกว่าเดิม
          </span>
        </p>
      </section>

      <div className="relative z-10 container mx-auto px-4">
        {/* 🏆 2. Featured Post: The Spotlight Card */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group shadow-luminous hover:border-aurora-cyan/30 relative mb-24 block overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-500"
          >
            <div className="grid min-h-[500px] gap-0 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/20" />
              </div>
              <div className="flex flex-col justify-center p-10 md:p-16">
                <div className="mb-8 flex items-center gap-6">
                  <Badge variant="luminous" className="px-4 py-1">
                    {featuredPost.category}
                  </Badge>
                  <span className="font-prompt text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    {featuredPost.date.split("T")[0]}
                  </span>
                </div>
                <h2 className="font-prompt group-hover:text-aurora-cyan mb-6 text-3xl leading-[1.1] font-black tracking-tighter text-white uppercase italic transition-colors md:text-5xl">
                  {featuredPost.title}
                </h2>
                <p className="font-anuphan mb-10 line-clamp-3 text-lg leading-relaxed font-medium text-slate-400">
                  {featuredPost.description}
                </p>
                <div className="font-prompt flex items-center gap-3 text-xs font-black tracking-widest text-white uppercase transition-all group-hover:translate-x-3">
                  READ ARTICLE{" "}
                  <ArrowRight className="text-aurora-cyan h-5 w-5" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* 📚 3. Regular Grid: Insight Gallery */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass-card hover:border-aurora-cyan/30 hover:shadow-luminous flex flex-col overflow-hidden rounded-[2.5rem] border-white/5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-110 hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 z-10">
                  <Badge
                    variant="outline"
                    className="border-white/10 bg-slate-950/40 backdrop-blur-md"
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="text-aurora-cyan h-3.5 w-3.5" />{" "}
                    {post.date.split("T")[0]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="text-aurora-cyan h-3.5 w-3.5" />{" "}
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-prompt group-hover:text-aurora-cyan mb-4 line-clamp-2 text-2xl leading-tight font-black tracking-tighter text-white uppercase transition-colors">
                  {post.title}
                </h3>

                <p className="font-anuphan mb-8 line-clamp-3 flex-1 text-base leading-relaxed font-medium text-slate-400 opacity-80">
                  {post.description}
                </p>

                <div className="font-prompt mt-auto flex items-center gap-2 border-t border-white/5 pt-6 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-all group-hover:text-white">
                  Full Details{" "}
                  <ArrowRight className="text-aurora-cyan ml-auto h-4 w-4 transition-transform group-hover:-rotate-45" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
