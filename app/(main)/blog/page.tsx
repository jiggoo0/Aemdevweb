/** @format */
import React, { memo } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { blogData } from "@/data/blogData"
import { siteConfig } from "@/config/siteConfig"
import { Calendar, Clock, Sparkles, MoveRight, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: `คลังความรู้ SME และเทคนิคการทำเว็บไซต์ | ${siteConfig.name}`,
  description:
    "รวมบทความเทคนิคการทำเว็บไซต์ การตลาดออนไลน์ และแนวทางการปรับตัวสำหรับธุรกิจ SME ร้านอาหาร และ หจก. โดยผู้เชี่ยวชาญ",
}

const BlogPage = () => {
  // เรียงลำดับบทความใหม่สุดขึ้นก่อน (Defensive Check)
  const allPosts = blogData
    ? [...blogData].sort((a, b) => Number(b.id) - Number(a.id))
    : []

  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HEADER SECTION: INDUSTRIAL INSIGHTS ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50 py-24 md:py-40">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 md:text-xs">
                Business Intelligence & Tech Insights
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              คลังความรู้ <br />
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
                สำหรับผู้ประกอบการ
              </span>
            </h1>

            <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              ถอดรหัสเทคนิคการสร้างตัวตนบนโลกออนไลน์ การจัดการระบบหลังบ้าน
              และกลยุทธ์ที่ช่วยให้ธุรกิจคุณเติบโตอย่างแม่นยำด้วยเทคโนโลยี
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. BLOG GRID: MODULAR INDUSTRIAL CARDS ─── */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-6">
          {allPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-px border-[6px] border-slate-900 bg-slate-900 shadow-2xl md:grid-cols-2 lg:grid-cols-3">
              {allPosts.map((post, index) => {
                const authorData =
                  typeof post.author === "object" && post.author !== null
                    ? post.author
                    : {
                        name:
                          typeof post.author === "string"
                            ? post.author
                            : "AEMDEVWEB Admin",
                        avatar: "/images/default-avatar.png",
                      }

                return (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-white transition-all duration-500 hover:z-10 hover:bg-slate-50"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden border-b-2 border-slate-900 bg-slate-100"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority={index < 3}
                        className="object-cover grayscale-[0.6] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute left-0 top-0 border-b-2 border-r-2 border-slate-900 bg-blue-600 px-5 py-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col p-10 md:p-12">
                      <div className="mb-8 flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <div className="flex items-center gap-2 transition-colors group-hover:text-blue-600">
                          <Calendar size={14} className="text-blue-500" />
                          <time>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-blue-500" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="mb-6 text-2xl font-black uppercase leading-[1.1] tracking-tight text-slate-900 transition-all group-hover:text-blue-600 md:text-3xl">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="mb-12 line-clamp-3 text-base font-bold leading-relaxed text-slate-500">
                        {post.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t-2 border-slate-100 pt-10">
                        <div className="flex items-center gap-4">
                          <div className="relative h-14 w-14 overflow-hidden border-2 border-slate-900 bg-slate-50 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-transform group-hover:rotate-6">
                            <Image
                              src={authorData.avatar}
                              alt={authorData.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600">
                              Verified Content
                            </span>
                            <span className="text-sm font-black text-slate-900">
                              {authorData.name}
                            </span>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex h-14 w-14 items-center justify-center border-2 border-slate-900 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white active:scale-90"
                        >
                          <MoveRight size={24} />
                        </Link>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center border-[6px] border-dashed border-slate-200 py-32 text-center">
              <BookOpen size={48} className="mb-6 text-slate-200" />
              <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-300">
                Database Empty | กำลังจัดเตรียมข้อมูลชุดใหม่ครับ
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── 3. CTA: THE PARTNERSHIP CONVERSION ─── */}
      <section className="container mx-auto px-6 pb-32 md:pb-48">
        <div className="relative overflow-hidden border-[8px] border-slate-900 bg-slate-900 p-12 shadow-2xl md:p-32">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

          <div className="relative z-10 flex flex-col items-center space-y-12 text-center">
            <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-white md:text-[85px]">
              ไม่อยากพลาดเทคนิค <br />
              <span className="text-blue-500 underline decoration-white/20 decoration-4 underline-offset-8">
                สำหรับธุรกิจคุณ?
              </span>
            </h2>
            <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-400 md:text-2xl">
              ติดตามอัปเดตความรู้ใหม่ๆ และปรึกษาโปรเจกต์ทำเว็บไซต์ได้ที่ LINE OA
              ผมดูแลงานเองทุกเคสแบบพาร์ทเนอร์ที่พร้อมซัพพอร์ต SME
              ไทยอย่างเต็มกำลังครับ
            </p>
            <div className="flex flex-col gap-6 sm:flex-row">
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-24 items-center justify-center bg-blue-600 px-16 text-sm font-black uppercase italic tracking-[0.3em] text-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-2 hover:bg-white hover:text-slate-900 hover:shadow-none active:scale-95"
              >
                Add Friend on LINE
                <MoveRight className="ml-5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(BlogPage)
