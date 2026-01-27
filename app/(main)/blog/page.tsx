/** @format */

import React from "react"
import type { Metadata } from "next"
import { BookOpen, Zap } from "lucide-react"

// ดึงฟังก์ชันจัดการข้อมูลพิกัดบทความ
import { getBlogPostsMetadata } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

// คอมโพเนนต์แสดงผลพิกัดงาน
import BlogCard from "@/components/shared/BlogCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * Metadata: วางรากฐาน SEO สำหรับหน้าคลังความรู้เชิงธุรกิจ
 * ยุทธศาสตร์: สร้าง Authority ให้แบรนด์ผ่านเนื้อหาที่เป็นประโยชน์จริง
 */
export const metadata: Metadata = {
  title: `คลังความรู้และพิกัดงานระบบธุรกิจ | ${siteConfig.project.name}`,
  description:
    "รวมเทคนิคการวางระบบเว็บไซต์ กลยุทธ์ SEO และพิกัดการตลาดที่วัดผลได้จริง สำหรับ SME และคนทำงานที่ต้องการเติบโตอย่างมั่นคง",
  alternates: { canonical: `${siteConfig.project.url}/blog` },
}

export default async function BlogPage() {
  // ดึงพิกัดข้อมูลบทความล่าสุดจากระบบจัดการเนื้อหา
  const posts = getBlogPostsMetadata()

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/10">
      {/* 1. SEO Structured Data: แจ้งพิกัดข้อมูลให้ Search Engine ประมวลผลได้แม่นยำ */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "คลังความรู้ด้าน Web Infrastructure & Strategic Marketing",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/blog`,
        }}
      />

      {/* ลายตารางพิกัดโครงสร้างพื้นหลัง (Infrastructure Grid) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. Hero Section: พิกัดนำเสนอคลังความรู้เชิงกลยุทธ์ */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-5 py-2 shadow-sm">
              <BookOpen size={14} className="text-emerald-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
                Strategic Knowledge Hub
              </span>
            </div>

            <h1 className="text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Blog <br />
              <span className="text-emerald-500">& Insights.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-600 md:text-2xl">
              อัปเดตกลยุทธ์การวางระบบเว็บที่ใช้งานได้จริง{" "}
              <br className="hidden md:block" />
              เปลี่ยนข้อมูลเทคนิคให้เป็นพิกัดการทำกำไรให้ธุรกิจคุณ
            </p>
          </div>
        </div>
      </section>

      {/* 3. Blog Grid Section: แสดงรายการบทความที่ผ่านการคัดกรองแล้ว */}
      <section className="relative z-10 -mt-10 py-12 lg:py-24">
        <div className="container mx-auto px-6">
          {/* Header แสดงสถานะรายการบทความ */}
          <div className="mb-16 flex flex-col gap-6 border-b border-slate-100 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-slate-900 uppercase italic">
                Latest Updates
              </h2>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                คลังข้อมูลปัจจุบัน: {posts.length} รายการที่พร้อมรัน
              </p>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
                Active Content Stream for SME
              </span>
            </div>
          </div>

          {/* การแสดงผลรายการบทความ: ใช้คอมโพเนนต์ BlogCard ในการจัดพิกัดการแสดงผลแบบ Grid */}
          {posts && posts.length > 0 ? (
            <div className="w-full">
              <BlogCard />
            </div>
          ) : (
            <div className="rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50/30 py-40 text-center">
              <Zap size={48} className="mx-auto mb-6 text-slate-200" />
              <p className="text-xl font-bold text-slate-400 italic">
                กำลังประกอบพิกัดข้อมูลชุดใหม่ เพื่อให้ระบบความรู้กริบที่สุด...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Branding Footer จางๆ สื่อถึงงานระบบที่ทำงานอยู่เบื้องหลัง */}
      <footer className="py-20 text-center opacity-20 select-none">
        <p className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Knowledge Base • 2026
        </p>
      </footer>
    </main>
  )
}
