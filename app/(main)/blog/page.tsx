/** @format */

import React from "react"
import type { Metadata } from "next"
import { Zap, Heart } from "lucide-react" // [FIX]: ลบ BookOpen ที่ไม่ได้ใช้งานออก

// ดึงข้อมูลบทความจากระบบหลังบ้าน
import { getBlogPostsMetadata } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

// ส่วนประกอบหน้าเว็บ
import BlogCard from "@/components/shared/BlogCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * Metadata: วางพิกัดให้ Google เจอเราง่ายขึ้น
 * ปรัชญา: วางโครงสร้างให้คนอ่านเข้าใจง่าย ระบบการค้นหาก็จะชอบเอง
 */
export const metadata: Metadata = {
  title: `พิกัดความรู้และเทคนิคทำเว็บให้โตจริง | นายเอ็มซ่ามากส์ ${siteConfig.project.name}`,
  description:
    "รวมเทคนิคการวางระบบเว็บไซต์ให้โหลดไว วิธีดันอันดับการค้นหาให้ติดหน้าแรก และแผนงานธุรกิจออนไลน์ที่ใช้งานได้จริงในปี 2026",
  alternates: { canonical: `${siteConfig.project.url}/blog` },
}

/**
 * BlogPage - พิกัดคลังความรู้สไตล์นายเอ็มซ่ามากส์
 * แนวคิด: เรียบง่าย เข้าใจง่าย และซิ่งจริงตามมาตรฐานงานระบบ
 */
export default async function BlogPage() {
  // ดึงข้อมูลบทความล่าสุด (Server-side fetching)
  const posts = await getBlogPostsMetadata()

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. Structured Data: บอกพิกัด Google ว่าที่นี่คือแหล่งข้อมูลคุณภาพสูง */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "พิกัดความรู้และเทคนิคทำเว็บไซต์สไตล์นายเอ็มซ่ามากส์",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/blog`,
        }}
      />

      {/* ลายตารางพื้นหลังแบบจางๆ เพิ่มความเนี้ยบแบบ Minimal */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. Hero Section: ส่วนต้อนรับพิกัดงานที่ดูจริงใจ */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-white px-5 py-2 shadow-sm">
              <Heart size={14} className="fill-emerald-600 text-emerald-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
                Thoughtful Insights
              </span>
            </div>

            <h1 className="font-heading text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Blog <br />
              <span className="text-emerald-500">& Insights.</span>
            </h1>

            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-600 md:text-2xl">
              &quot;นายเอ็มซ่ามากส์ แค่อยากให้อ่านมันดีนะ&quot; <br />
              รวบรวมพิกัดวิธีทำเว็บให้ขายดีและวางโครงสร้างการค้นหาแบบเข้าใจง่าย
            </p>
          </div>
        </div>
      </section>

      {/* 3. รายการบทความ: วางระบบแสดงผลแบบซิ่งๆ */}
      <section className="relative z-10 -mt-10 py-12 lg:py-24">
        <div className="container mx-auto px-6">
          {/* แถบสถานะพิกัดข้อมูลล่าสุด */}
          <div className="mb-16 flex flex-col gap-6 border-b border-slate-100 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-black text-slate-950 uppercase italic">
                Latest Content
              </h2>
              <p className="font-body text-xs font-bold tracking-widest text-slate-400 uppercase">
                มีพิกัดเนื้อหาที่น่าสนใจทั้งหมด: {posts.length} บทความ
              </p>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
                Fresh techniques for your business
              </span>
            </div>
          </div>

          {/* ส่วนแสดงบทความผ่านคอมโพเนนต์ BlogCard */}
          {posts && posts.length > 0 ? (
            <div className="w-full">
              <BlogCard posts={posts} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-[3.5rem] border-2 border-dashed border-slate-100 bg-slate-50/30 py-40 text-center">
              <Zap size={48} className="mb-6 text-slate-200" />
              <p className="font-body text-xl font-bold text-slate-400 italic">
                รอก่อนนะ... เอ็มกำลังปั้นพิกัดบทความใหม่ให้คุณอ่านอยู่ครับ
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ลายเซ็นต์ท้ายระบบงาน */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Speed Website Content • AEMDEVWEB 2026
        </p>
      </footer>
    </main>
  )
}
