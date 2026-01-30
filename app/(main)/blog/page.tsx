/** @format */

import React from "react"
import type { Metadata } from "next"
import { Zap, Heart, Sparkles, Activity } from "lucide-react"

// ระบบจัดการพิกัดข้อมูลและ Config หลักของแบรนด์
import { getBlogPostsMetadata } from "@/lib/blog"
import { siteConfig } from "@/constants/site-config"

// ส่วนประกอบ UI และ SEO ระดับ Specialist
import BlogCard from "@/components/shared/BlogCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * [STRATEGIC SEO PROTOCOL]: พิกัดความน่าเชื่อถือระดับสากล
 */
export const metadata: Metadata = {
  title: `Strategic Insights | คลังความรู้และกลยุทธ์ระบบโดย ${siteConfig.expert.name}`,
  description:
    "เจาะลึกกลยุทธ์การวางโครงสร้างระบบประสิทธิภาพสูง เทคนิคการทำ SEO เชิงเทคนิค 2026 และกระบวนการเปลี่ยน Digital Asset ให้เป็นผลกำไรจริง",
  alternates: { canonical: `${siteConfig.project.url}/blog` },
}

/**
 * BlogPage: ศูนย์กลางพิกัดข้อมูลเชิงกลยุทธ์ (Insight Hub)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default async function BlogPage() {
  // ดึงพิกัดข้อมูลผ่านเครื่องยนต์ Server-side เพื่อค่า LCP < 0.8s
  const posts = await getBlogPostsMetadata()

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. SCHEMA]: ยืนยันพิกัดคลังข้อมูลต่อระบบ Search Intelligence */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "คลังข้อมูลเชิงกลยุทธ์และเทคโนโลยีระบบ - AEMDEVWEB",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/blog`,
          publisher: {
            "@id": "https://me.aemdevweb.com/#person",
          },
        }}
      />

      {/* Background Technical Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />

      {/* [2. HERO SECTION]: พิกัดนำเสนอหัวข้อหลัก (Authority Header) */}
      <section className="relative overflow-hidden border-b border-[oklch(0.95_0.02_260)] bg-[oklch(0.98_0.01_260)] pt-32 pb-20 lg:pt-48 lg:pb-32 dark:border-white/5 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <div className="border-brand-primary max-w-5xl border-l-8 pl-8 md:pl-16">
            <div className="border-brand-primary/20 mb-10 inline-flex items-center gap-3 rounded-full border bg-white px-5 py-2 shadow-sm transition-all hover:scale-105 dark:bg-white/5">
              <Sparkles
                size={14}
                className="text-brand-primary animate-pulse"
              />
              <span className="text-brand-primary text-[10px] font-black tracking-[0.3em] uppercase italic">
                Technical Mastery and Strategic Protocol
              </span>
            </div>

            <h1 className="font-heading text-brand-depth text-6xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl dark:text-white">
              The <br />
              <span className="text-brand-primary">Insights.</span>
            </h1>

            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl dark:text-[oklch(0.7_0.02_260)]">
              รวมแนวคิดการพัฒนาระบบให้เป็นสินทรัพย์ดิจิทัลที่สร้างผลลัพธ์ได้จริง
              และกลยุทธ์การเพิ่มขีดความสามารถทางการแข่งขันภายใต้มาตรฐาน
              Specialist 2026
            </p>
          </div>
        </div>
      </section>

      {/* [3. CONTENT FEED]: ส่วนแสดงพิกัดรายการบทความ */}
      <section className="relative z-10 -mt-12 py-12 lg:py-24">
        <div className="container-za">
          {/* Status Bar: รายงานพิกัดสถานะความเคลื่อนไหว */}
          <div className="mb-20 flex flex-col gap-8 border-b border-[oklch(0.9_0.02_260)] pb-12 md:flex-row md:items-end md:justify-between dark:border-white/10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-brand-primary shadow-aurora h-2 w-12 rounded-full" />
                <h2 className="font-heading text-brand-depth text-2xl font-black tracking-tight uppercase italic dark:text-white">
                  Latest Insights
                </h2>
              </div>
              <p className="font-body text-xs font-bold tracking-widest text-[oklch(0.5_0.02_260)] uppercase">
                Strategic Assets: {posts.length} Technical Articles
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-[oklch(0.98_0.01_260)] px-6 py-3 shadow-inner dark:bg-white/5">
              <Activity
                size={14}
                className="text-brand-primary animate-bounce"
              />
              <span className="text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase italic">
                System Status: Real-time Sync 2026
              </span>
            </div>
          </div>

          {/* Render Logic: พิกัดบทความหรือสถานะ Standby */}
          {posts && posts.length > 0 ? (
            <div className="w-full">
              <BlogCard posts={posts} />
            </div>
          ) : (
            <div className="depth-card flex flex-col items-center justify-center py-48 text-center">
              <Zap
                size={64}
                className="mb-8 animate-pulse text-[oklch(0.9_0.02_260)]"
              />
              <h3 className="font-heading text-3xl font-black text-[oklch(0.8_0.02_260)] uppercase italic">
                Content Standby.
              </h3>
              <p className="font-body mt-4 max-w-sm text-lg font-bold text-[oklch(0.5_0.02_260)] italic">
                ทีมงานกำลังจัดเตรียมพิกัดข้อมูลชุดใหม่ เพื่อยกระดับระบบงานของคุณ
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Global Branding Footer */}
      <footer className="mt-20 py-20 text-center opacity-30 select-none">
        <div className="flex flex-col items-center gap-4">
          <Heart size={20} className="text-brand-primary/50" />
          <p className="font-heading text-brand-depth text-[10px] font-black tracking-[0.6em] uppercase italic dark:text-white">
            Developed by {siteConfig.expert.realName} • AEMDEVWEB 2026
          </p>
        </div>
      </footer>
    </main>
  )
}
