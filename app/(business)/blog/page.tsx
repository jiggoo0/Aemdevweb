/**
 * [ROUTE PAGE]: BLOG_HUB_SYSTEM v17.9.11 (FIXED_IMPORTS)
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure ---
import { getAllPosts } from "@/lib/cms"; // ดึงเฉพาะ Function
import { type BlogPost } from "@/types"; // ดึง Type จาก SSOT
import { constructMetadata } from "@/lib/seo-utils";

// --- 2. SEO Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

// --- 3. UI Components ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import BlogCard from "@/components/features/blog/BlogCard";

export const metadata: Metadata = constructMetadata({
  title: "คลังความรู้ Technical SEO & Web Development | AEMDEVWEB",
  description:
    "เจาะลึกกลยุทธ์การทำเว็บไซต์ Performance สูง พร้อมเทคนิควิศวกรรมซอฟต์แวร์โดย Specialist",
  path: "/blog",
  image: "/images/og-blog.webp",
});

export default async function BlogListingPage() {
  // Safe Fetching
  const posts: BlogPost[] = await getAllPosts().catch(() => []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: "/" },
    { name: "บทความทั้งหมด", item: "/blog" },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={breadcrumbSchema} />

      {/* ... (Render Logic คงเดิม) ... */}

      <main className="relative min-h-screen pt-28 pb-20 md:pt-40 md:pb-32 lg:pt-48">
        {/* ... (Header Section คงเดิม) ... */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <header className="mb-20 max-w-5xl space-y-8 md:mb-28 md:space-y-10">
            {/* ... Content ... */}
            <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl lg:text-9xl">
              Engineered <br /> <span className="text-brand-primary">Insights.</span>
            </h1>
          </header>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} priority={index < 3} />
              ))}
            </div>
          ) : (
            <div className="border-border/50 bg-surface-card/30 flex flex-col items-center justify-center rounded-[3rem] border border-dashed py-32 text-center backdrop-blur-sm">
              <p className="text-text-muted font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                // System_Status: Syncing_Content_Node...
              </p>
            </div>
          )}
        </div>
      </main>
    </LayoutEngine>
  );
}
