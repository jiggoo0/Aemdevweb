/**
 * [ROUTE PAGE]: BLOG_LISTING v17.0.2 (PURE_ORCHESTRATION)
 * [STRATEGY]: Technical Authority | Dynamic Content Matrix | Zero-Jitter UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

// --- 1. Core Components & Data ---
import BlogCard from "@/components/features/blog/BlogCard";
import { getAllPosts } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

/* [A] SEO AUTHORITY PROTOCOL */
export const metadata: Metadata = {
  title: `Technical Insights & Strategic SEO | ${SITE_CONFIG.brandName}`,
  description:
    "เจาะลึกกลยุทธ์การวางระบบเว็บไซต์และ SEO Technical เพื่อเปลี่ยนธุรกิจของคุณให้เป็นเครื่องจักรทำเงินที่ทรงพลังและยั่งยืนในปี 2026",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/blog` },
  keywords: [
    "สอนทำ SEO",
    "Technical SEO Guide",
    "Web Performance Optimization",
    "Digital Strategy 2026",
    "Next.js Best Practices",
  ],
};

export default async function BlogPage() {
  // ดึงรายการบทความทั้งหมดจากระบบ Content (MDX-Based)
  const posts = await getAllPosts();

  return (
    <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: เลเยอร์บรรยากาศเพื่อสร้างมิติของข้อมูล */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0" />
        <div className="ambient-aura absolute -top-20 left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.1] blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. STRATEGIC HEADER: การนำเสนอหัวใจของคลังความรู้ */}
        <header className="mb-24 max-w-5xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <IconRenderer name="BookOpen" size={14} />
            <span>Knowledge_Archives.v17</span>
          </div>

          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-9xl">
            Strategic <br /> Growth.
          </h1>

          <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
            <p className="max-w-3xl text-xl leading-relaxed font-medium text-gray-400 italic opacity-90 md:text-2xl">
              ผมรวบรวมเทคนิคการวางโครงสร้างระบบและกลยุทธ์ SEO จากประสบการณ์จริง เพื่อให้คุณนำไป{" "}
              <span className="text-brand-primary font-black not-italic">"ขยายขีดจำกัด"</span>{" "}
              ของธุรกิจให้เหนือกว่าคู่แข่งครับ
            </p>
          </div>
        </header>

        {/* 03. CONTENT MATRIX: การจัดวางรายการบทความเชิงกลยุทธ์ */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} data={post} index={index} />
          ))}
        </div>

        {/* 04. EMPTY STATE: เมื่อระบบกำลังประมวลผลข้อมูลบทความใหม่ */}
        {posts.length === 0 && (
          <div className="relative mt-20 overflow-hidden rounded-[3rem] border border-dashed border-white/10 bg-white/[0.02] py-32 text-center md:py-48">
            <div className="mx-auto max-w-lg space-y-8 px-6">
              <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl border backdrop-blur-md">
                <div className="bg-brand-primary h-2.5 w-2.5 animate-ping rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl leading-none font-black tracking-tighter text-white uppercase italic md:text-5xl">
                  Analyzing_Data.
                </h3>
                <p className="text-lg leading-relaxed font-medium text-gray-500 italic opacity-80">
                  เรากำลังเรียบเรียงบทความเทคนิคชุดใหม่ เพื่อมอบกลยุทธ์ที่ดีที่สุดให้คุณ{" "}
                  <br className="hidden md:block" />
                  อดใจรอการอัปเดตข้อมูลชุดใหม่ได้ที่นี่เร็ว ๆ นี้ครับ
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 05. EXPERT SUPPORT NODE: จุดเชื่อมต่อสำหรับการปรึกษาเชิงลึก */}
        <footer className="mt-32 border-t border-white/5 pt-20 text-center md:mt-48 md:pt-24">
          <div className="mx-auto max-w-4xl space-y-12">
            <h2 className="text-3xl leading-tight font-black tracking-tighter text-white uppercase italic md:text-6xl">
              ต้องการกลยุทธ์ <br /> ที่ออกแบบมา{" "}
              <span className="text-brand-primary">เพื่อธุรกิจคุณ</span> โดยเฉพาะ?
            </h2>

            <div className="flex justify-center">
              <Button
                asChild
                className="group bg-brand-primary relative h-20 w-full overflow-hidden rounded-[2rem] px-12 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-95 sm:w-auto"
              >
                <Link href={SITE_CONFIG.links.line} target="_blank">
                  <span className="relative z-10 flex items-center gap-4">
                    <IconRenderer name="MessageCircle" size={24} />
                    <span className="text-[11px] font-black tracking-[0.3em] uppercase">
                      ทักแชทคุยแผนงานกับผม
                    </span>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
