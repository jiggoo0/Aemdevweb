/**
 * [ROUTE PAGE]: BLOG_HUB_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Content Authority | Grid-Optimization | Semantic Navigation
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & CMS ---
import { getAllPosts } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. SEO Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Components ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";
import BlogCard from "@/components/features/blog/BlogCard"; // [AUDIT]: Use centralized component

/* [A] SEO AUTHORITY PROTOCOL: ระบบ Unified Metadata ระดับแบรนด์ */
export const metadata: Metadata = constructMetadata({
  title: "คลังความรู้ Technical SEO & Web Development",
  description:
    "รวมบทความและกลยุทธ์การทำเว็บไซต์ให้ทำเงิน พร้อมเทคนิควิศวกรรมซอฟต์แวร์จากประสบการณ์จริงโดย Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

/**
 * @page BlogListingPage
 * @description หน้าศูนย์รวมบทความที่ออกแบบมาเพื่อสร้างความเชื่อมั่นผ่าน Content Strategy
 */
export default async function BlogListingPage() {
  // ดึงข้อมูลบทความทั้งหมดผ่าน CMS Engine (Server-side)
  const posts = await getAllPosts();

  // 1. [SEO]: สร้าง Linked Data Graph สำหรับโครงสร้างหมวดหมู่
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความทั้งหมด", item: "/blog" },
    ]),
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative min-h-screen pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* --- 01. STRATEGIC HEADER: การสื่อสารระดับ Identity --- */}
          <header className="mb-24 max-w-4xl space-y-10 md:mb-32">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
              <IconRenderer name="BookOpen" size={14} />
              <span>System_Knowledge_Base_v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
              Engineered <br /> <span className="text-brand-primary">Insights.</span>
            </h1>

            <div className="border-brand-primary border-l-4 pl-8 md:pl-14">
              <p className="text-text-secondary max-w-2xl text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
                เราเปลี่ยนเรื่องเทคนิคที่ซับซ้อนให้กลายเป็น{" "}
                <span className="text-text-primary font-black not-italic">"โอกาสทางธุรกิจ"</span>
                ผ่านบทความที่เจาะลึกจากประสบการณ์ของ Specialist ครับ
              </p>
            </div>
          </header>

          {/* --- 02. CONTENT GRID: Optimized Performance Grid --- */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Fallback Protocol: กรณี Content กำลัง Sync หรือไม่มีข้อมูล */}
          {posts.length === 0 && (
            <div className="border-border rounded-[3rem] border border-dashed py-32 text-center">
              <p className="text-text-muted font-mono text-sm font-black tracking-widest uppercase opacity-40">
                // System_Status: Syncing_Content_Node
              </p>
            </div>
          )}
        </div>
      </main>
    </LayoutEngine>
  );
}
