/**
 * [ROUTE PAGE]: BLOG_DETAIL_ENGINE v17.9.9 (HARDENED_TYPE_SAFE)
 * [STRATEGY]: Narrative Authority | MDX Remote Rendering | SEO Graph Injection
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

// --- 1. Infrastructure & CMS ---
import { getPostBySlug, getAllPosts } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
// [FIXED]: Import MetadataParams เพื่อใช้งานร่วมกับ constructMetadata ให้ครบวงจร
import { constructMetadata, type MetadataParams } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

// --- 2. SEO Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Components ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";

/* [A] STATIC GENERATION ENGINE: สร้าง Static Paths ล่วงหน้า 100% */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* [B] SEO METADATA ENGINE: ประมวลผล Metadata ระดับ Specialist */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Article Not Found" };

  // [INJECTION]: ใช้งาน MetadataParams Interface เพื่อความ Strict ของข้อมูล SEO บทความ
  const seoConfig: MetadataParams = {
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.thumbnail,
    keywords: post.tags,
  };

  return constructMetadata(seoConfig);
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // สร้าง Schema Graph สำหรับบทความ (EEAT Optimization)
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความทั้งหมด", item: "/blog" },
      { name: post.title, item: `/blog/${slug}` },
    ]),
  ]);

  return (
    <LayoutEngine spacing="medium">
      <JsonLd data={fullSchema} />

      <article className="container mx-auto px-4 md:px-6">
        {/* --- 01. HEADER: ข้อมูลระบุตัวตนบทความ --- */}
        <header className="mx-auto mb-16 max-w-4xl space-y-10 pt-32 text-center md:pt-40">
          <div className="text-brand-primary flex items-center justify-center gap-4 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <span className="border-brand-primary/20 bg-brand-primary/5 rounded-full border px-5 py-2 backdrop-blur-md">
              {post.category}
            </span>
            <span className="opacity-50">{post.date}</span>
          </div>

          <h1 className="text-text-primary text-5xl leading-[1] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary/10 border-brand-primary/20 shadow-glow-sm relative h-12 w-12 overflow-hidden rounded-full border">
                <Image src="/images/avatar.webp" alt={post.author} fill className="object-cover" />
              </div>
              <span className="text-text-primary text-base font-bold italic">{post.author}</span>
            </div>
            <div className="text-text-muted flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase opacity-60">
              <IconRenderer name="Clock" size={14} />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* --- 02. VISUAL ENGINE: จัดการรูปภาพเพื่อคะแนน LCP สูงสุด --- */}
        <div className="shadow-glow-lg border-border bg-surface-card relative mx-auto mb-20 aspect-video max-w-6xl overflow-hidden rounded-[3.5rem] border">
          <Image src={post.thumbnail} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* --- 03. CONTENT ENGINE: ขุมพลัง MDX Remote (RSC Optimized) --- */}
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-brand lg:prose-xl max-w-none">
            <MDXRemote source={post.content || ""} components={useMDXComponents({})} />
          </div>
        </div>

        {/* --- 04. FOOTER: บทสรุปเชิงยุทธศาสตร์ --- */}
        <footer className="border-border mt-32 border-t pt-20 text-center">
          <div className="mx-auto max-w-3xl space-y-12">
            <p className="text-text-secondary text-2xl leading-relaxed font-medium italic opacity-80 md:text-3xl">
              “{post.description}”
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-10">
              <div className="bg-brand-primary shadow-glow h-1.5 w-24 rounded-full" />
              <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] uppercase opacity-30">
                AEMDEVWEB_NODE_CORE // Specialist: {SITE_CONFIG.expert.displayName}
              </span>
            </div>
          </div>
        </footer>
      </article>
    </LayoutEngine>
  );
}
