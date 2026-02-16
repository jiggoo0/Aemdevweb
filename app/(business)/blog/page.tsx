/**
 * [ROUTE PAGE]: BLOG_HUB_SYSTEM v18.0.0 (LCP_SEO_MAXIMIZED)
 * [STRATEGY]: ISR Revalidation | Collection Schema | LCP Priority
 */

import React from "react";
import type { Metadata } from "next";

import { getAllPosts } from "@/lib/cms";
import { type BlogPost } from "@/types";
import { constructMetadata } from "@/lib/seo-utils";

import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import BlogCard from "@/components/features/blog/BlogCard";

// [STRATEGY]: บังคับอัปเดต Content ทุก 1 ชม. โดยไม่ต้อง Rebuild ทั้งระบบ
export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: "Insights & Engineering Blog | AEMDEVWEB",
  description:
    "ถอดรหัสกลยุทธ์ Technical SEO และการพัฒนา Web Performance ระดับ Enterprise โดย Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

export default async function BlogListingPage() {
  const posts: BlogPost[] = await getAllPosts().catch(() => []);

  // [SEO_DEEP]: การใส่ CollectionPage + Blog ร่วมกับ Breadcrumb ช่วยให้ Search Engine เข้าใจโครงสร้าง Hierarchy
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความ", item: "/blog" },
    ]),
    {
      "@type": "CollectionPage",
      name: "Engineering Insights & Technical SEO Archive",
      description: "In-depth articles about high-performance web development.",
      publisher: { "@type": "Organization", name: "AEMDEVWEB" },
    },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={fullSchema} />

      <main className="relative min-h-screen pt-28 pb-20 md:pt-40 md:pb-32 lg:pt-48">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <section>
            <header className="mb-20 max-w-5xl space-y-8 md:mb-28 md:space-y-10">
              <div className="flex items-center gap-3">
                <span className="bg-brand-primary h-[2px] w-12" />
                <p className="text-brand-primary font-mono text-xs font-black tracking-[0.3em] uppercase">
                  Technical_Archive.log
                </p>
              </div>
              <h1 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
                Engineered <br />
                <span className="text-brand-primary ml-4 md:ml-8">Insights.</span>
              </h1>
              <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80 md:text-xl">
                เจาะลึกเบื้องหลังการสร้างระบบที่รองรับ Scale ระดับล้าน และกลยุทธ์ SEO
                ที่วัดผลได้จริงด้วยตัวเลข
              </p>
            </header>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={index}
                    // [PERFORMANCE]: Priority สำหรับ 3 ใบแรก (Above the fold)
                    // เพื่อลดค่า LCP ลงต่ำกว่า 1.2s
                    priority={index < 3}
                  />
                ))}
              </div>
            ) : (
              <div className="border-border/40 bg-surface-card/20 flex flex-col items-center justify-center rounded-[3.5rem] border border-dashed py-40 text-center backdrop-blur-md">
                <div className="bg-brand-primary/10 mb-6 flex h-16 w-16 animate-pulse items-center justify-center rounded-full">
                  <div className="bg-brand-primary h-3 w-3 rounded-full" />
                </div>
                <p className="text-text-muted font-mono text-[11px] font-black tracking-[0.4em] uppercase">
                  // Status: Content_Node_Emptying...
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Background Decorative Element */}
        <div className="pointer-events-none absolute top-0 right-0 -z-10 h-full w-full overflow-hidden opacity-20">
          <div className="bg-brand-primary/10 absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full blur-[120px]" />
        </div>
      </main>
    </LayoutEngine>
  );
}
