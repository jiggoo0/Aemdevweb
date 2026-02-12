/**
 * [ROUTE PAGE]: BLOG_HUB_SYSTEM v17.9.9 (STABILIZED_FINAL)
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
import { generateBreadcrumbSchema } from "@/lib/schema";

// --- 3. UI Components ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";
import BlogCard from "@/components/features/blog/BlogCard";

/* [METADATA]: Unified Search Presence Optimization */
export const metadata: Metadata = constructMetadata({
  title: "คลังความรู้ Technical SEO & Web Development | AEMDEVWEB",
  description:
    "เจาะลึกกลยุทธ์การทำเว็บไซต์ให้ Performance สูง พร้อมเทคนิควิศวกรรมซอฟต์แวร์จากประสบการณ์จริงโดย Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

export default async function BlogListingPage() {
  // [DATA_FETCHING]: Server-Side Data Retrieval with Fail-Safe
  const posts = await getAllPosts().catch(() => []);

  // [SEO_SCHEMA]: Breadcrumb Graph Construction for Rich Snippets
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "บทความทั้งหมด", item: "/blog" },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={breadcrumbSchema} />

      <main className="relative min-h-screen pt-28 pb-20 md:pt-40 md:pb-32 lg:pt-48">
        {/* --- 00. ATMOSPHERIC LAYER (Glow Effect) --- */}
        <div
          className="bg-brand-primary/5 pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px] select-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* --- 01. STRATEGIC HEADER --- */}
          <header className="mb-20 max-w-5xl space-y-8 md:mb-28 md:space-y-10">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[9px] font-black tracking-[0.3em] uppercase backdrop-blur-md md:px-5 md:py-2 md:text-[10px]">
              <IconRenderer name="BookOpen" size={14} />
              <span>System_Knowledge_Base_v{SITE_CONFIG.project.version}</span>
            </div>

            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl lg:text-9xl">
              Engineered <br /> <span className="text-brand-primary">Insights.</span>
            </h1>

            <div className="border-brand-primary border-l-[4px] pl-6 md:border-l-[6px] md:pl-10">
              <p className="text-text-secondary max-w-3xl text-lg leading-relaxed font-medium italic opacity-90 md:text-2xl lg:text-3xl">
                เราเปลี่ยนเรื่องเทคนิคที่ซับซ้อนให้กลายเป็น{" "}
                <span className="text-text-primary decoration-brand-primary font-black not-italic underline underline-offset-4">
                  "โอกาสทางธุรกิจ"
                </span>{" "}
                ผ่านบทความที่เจาะลึกจากประสบการณ์จริง
              </p>
            </div>
          </header>

          {/* --- 02. CONTENT GRID: Optimized Performance Pipeline --- */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
              {posts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  index={index}
                  // [PERFORMANCE]: Priority load for first 3 items (LCP Optimization)
                  priority={index < 3}
                />
              ))}
            </div>
          ) : (
            /* --- 03. FALLBACK: Empty State --- */
            <div className="border-border/50 bg-surface-card/30 flex flex-col items-center justify-center rounded-[3rem] border border-dashed py-32 text-center backdrop-blur-sm">
              <div className="bg-surface-offset mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem]">
                <IconRenderer name="Database" size={32} className="text-text-muted opacity-50" />
              </div>
              <h3 className="text-text-primary mb-2 text-xl font-black tracking-widest uppercase italic">
                No_Data_Stream
              </h3>
              <p className="text-text-muted font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                // System_Status: Syncing_Content_Node...
              </p>
            </div>
          )}

          {/* --- 04. SIGNATURE --- */}
          <div className="border-border mt-24 border-t pt-12 text-center md:mt-32">
            <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-40">
              {SITE_CONFIG.brandName} // Knowledge_Archive // End_of_Stream
            </p>
          </div>
        </div>
      </main>
    </LayoutEngine>
  );
}
