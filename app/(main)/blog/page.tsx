/** @format */

import React from "react"
import type { Metadata } from "next"
import { Zap, Heart, Sparkles } from "lucide-react"

// ดึงข้อมูลบทความจากระบบจัดการเนื้อหาหลัก
import { getBlogPostsMetadata } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

// ส่วนประกอบสำหรับการแสดงผล
import BlogCard from "@/components/shared/BlogCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * [STRATEGIC SEO]: การนำเสนอข้อมูลเชิงลึกเพื่อสร้างความน่าเชื่อถือ
 * มุ่งเน้นการสร้าง Authority ในด้าน Technical SEO และการพัฒนาเว็บไซต์ระดับพรีเมียม
 */
export const metadata: Metadata = {
  title: `Strategic Insights | กลยุทธ์เว็บไซต์และ SEO โดย ${siteConfig.expert.name}`,
  description:
    "เจาะลึกกลยุทธ์การวางโครงสร้างเว็บไซต์ประสิทธิภาพระดับสูงสุด เทคนิคการยกระดับอันดับบน Google 2026 และกระบวนการเปลี่ยนกลุ่มเป้าหมายให้เป็นผลลัพธ์ทางธุรกิจ",
  alternates: { canonical: `${siteConfig.project.url}/blog` },
}

/**
 * BlogPage - ศูนย์กลางข้อมูลเชิงกลยุทธ์ AEMDEVWEB
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การส่งต่อคุณค่าและองค์ความรู้เพื่อการเติบโตของธุรกิจอย่างยั่งยืน
 */
export default async function BlogPage() {
  // ดึงข้อมูลบทความผ่าน Server Component เพื่อประสิทธิภาพสูงสุด
  const posts = await getBlogPostsMetadata()

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. SCHEMA: การระบุโครงสร้างข้อมูลเพื่อให้ระบบ AI Search เข้าใจเนื้อหาอย่างแม่นยำ */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "คลังข้อมูลเชิงกลยุทธ์และเทคโนโลยีเว็บไซต์ - AEMDEVWEB",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/blog`,
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.realName,
          },
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. HERO SECTION: ส่วนนำเสนอหัวข้อหลักที่เน้นความน่าเชื่อถือ */}
      <section className="relative overflow-hidden border-b border-slate-50 bg-slate-50/50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-100 bg-white px-5 py-2 shadow-sm transition-transform hover:scale-105">
              <Sparkles size={14} className="animate-pulse text-emerald-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic">
                Technical Mastery and Marketing Logic
              </span>
            </div>

            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              The <br />
              <span className="text-emerald-500">Insights.</span>
            </h1>

            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              "เพราะเว็บไซต์ที่มีประสิทธิภาพเริ่มต้นจากกลยุทธ์ที่แม่นยำ" <br />
              รวมแนวคิดการพัฒนาเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่สร้างผลลัพธ์จริง
              และกลยุทธ์การเพิ่มขีดความสามารถทางการแข่งขันในปี 2026
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTENT FEED: ส่วนแสดงรายการบทความและข้อมูลเชิงลึก */}
      <section className="relative z-10 -mt-12 py-12 lg:py-24">
        <div className="container mx-auto px-6">
          {/* Status Bar: รายงานสถานะความเคลื่อนไหวของข้อมูล */}
          <div className="mb-20 flex flex-col gap-8 border-b border-slate-100 pb-12 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-12 rounded-full bg-emerald-500" />
                <h2 className="font-heading text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  Latest Insights
                </h2>
              </div>
              <p className="font-body text-xs font-bold tracking-widest text-slate-400 uppercase">
                Strategic Assets: {posts.length} Quality Articles
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 px-6 py-3">
              <div className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
                System Status: Daily Synchronization
              </span>
            </div>
          </div>

          {/* Render Logic: การแสดงผลบทความหรือสถานะว่าง */}
          {posts && posts.length > 0 ? (
            <div className="w-full">
              <BlogCard posts={posts} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/40 py-48 text-center transition-all hover:border-emerald-200 hover:bg-white">
              <Zap size={64} className="mb-8 animate-bounce text-slate-200" />
              <h3 className="font-heading text-3xl font-black text-slate-300 uppercase italic">
                Content Standby.
              </h3>
              <p className="font-body mt-4 max-w-sm text-lg font-bold text-slate-400 italic">
                ทีมงานกำลังจัดเตรียมข้อมูลเชิงลึกชุดใหม่
                เพื่อสร้างมูลค่าเพิ่มให้แก่แผนงานธุรกิจของคุณ
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ส่วนสรุปท้ายหน้า */}
      <footer className="mt-20 border-t border-slate-50 py-20 text-center select-none">
        <div className="flex flex-col items-center gap-4">
          <Heart size={20} className="text-emerald-500/30" />
          <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
            Developed by {siteConfig.expert.realName} • AEMDEVWEB 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
