/**
 * [ROUTE_PAGE]: BLOG_HUB_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: ISR Revalidation | Collection Schema | LCP Priority Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Metadata, Viewport } from "next";

// --- 1. Infrastructure & Core Data (SSOT) ---
import { getAllPosts } from "@/lib/cms";
import type { BlogPost } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";
import { SITE_CONFIG } from "@/constants/site-config";

// --- 2. SEO & Schema Protocols (Knowledge Graph) ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Render Engine ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import BlogCard from "@/components/features/blog/BlogCard";

/** [STRATEGY]: บังคับอัปเดต Content ทุก 1 ชม. โดยไม่ต้อง Rebuild ทั้งระบบ (ISR) */
export const revalidate = 3600;

/** [VIEWPORT]: Mobile-First Theme Integration */
export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

/** [SEO_METADATA]: BLOG_AUTHORITY_PROTOCOL
 * ดักจับหัวข้อ Technical SEO และ Modern Web Development
 */
export const metadata: Metadata = constructMetadata({
  title: "Insights & Engineering Blog | AEMDEVWEB",
  description:
    "ถอดรหัสกลยุทธ์ Technical SEO และการพัฒนา Web Infrastructure ระดับวิศวกรรม โดยทีมงาน Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

/**
 * @component BlogListingPage
 * @description หน้าแสดงรายการบทความทั้งหมด พร้อมระบบจัดการลำดับการโหลดเพื่อคะแนน LCP
 */
export default async function BlogListingPage() {
  /* [A] DATA_RESOLUTION: ดึงข้อมูลจาก CMS (Markdown/MDX) */
  const posts: BlogPost[] = await getAllPosts().catch(() => []);

  /* [B] SCHEMA_ORCHESTRATION: การสร้าง Hierarchy สำหรับ AI Crawlers */
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความ", item: "/blog" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.siteUrl}/blog/#collection`,
      name: "Engineering Insights & Technical SEO Archive",
      description: "In-depth articles about high-performance web development.",
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} id="schema-blog-hub" />

      <main className="relative min-h-screen pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <section>
            {/* --- 01. STRATEGIC HUB HEADER --- */}
            <header className="mb-24 max-w-6xl space-y-10 md:mb-32">
              <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-6 py-2.5 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
                <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_12px_var(--brand-primary)]" />
                <span suppressHydrationWarning>
                  Technical_Archive.v{SITE_CONFIG.project.version}
                </span>
              </div>

              <h1 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
                Engineered <br />
                <span className="text-brand-primary ml-4 md:ml-8">Insights.</span>
              </h1>

              <div className="border-brand-primary border-l-[6px] pl-8 md:pl-14">
                <p className="text-text-secondary max-w-2xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  เจาะลึกกลยุทธ์การสร้างระบบที่รองรับการเติบโต และการปรับแต่ง SEO
                  ระดับโครงสร้างพื้นฐานที่วัดผลได้จริง
                </p>
              </div>
            </header>

            {/* --- 02. BLOG GRID: Optimized Rendering Path --- */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={index}
                    // [PERFORMANCE]: บังคับ Priority สำหรับ 3 ใบแรกเพื่อลดค่า LCP ต่ำกว่า 1.2s
                    priority={index < 3}
                  />
                ))}
              </div>
            ) : (
              /* [EMPTY_STATE]: Technical Terminal Style */
              <div className="border-border/40 bg-surface-card/20 flex flex-col items-center justify-center rounded-[3.5rem] border border-dashed py-40 text-center backdrop-blur-md">
                <div className="bg-brand-primary/10 mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full">
                  <div className="bg-brand-primary h-3 w-3 rounded-full" />
                </div>
                <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Status: Content_Node_Emptying...
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Ambient Decorative Background: GPU Accelerated */}
        <div className="pointer-events-none absolute top-0 right-0 -z-10 h-full w-full overflow-hidden opacity-10">
          <div className="bg-brand-primary/20 absolute -top-[10%] -right-[5%] h-[600px] w-[600px] transform-gpu rounded-full blur-[140px]" />
        </div>
      </main>
    </LayoutEngine>
  );
}
