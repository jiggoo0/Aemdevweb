/**
 * [ROUTE PAGE]: BLOG_DETAIL_ENGINE v18.0.3 (HTML_SEMANTIC_FIXED)
 * [STRATEGY]: ISR Strategy | Semantic Time Tag | Dynamic Params Handling
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllPosts } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// [DYNAMIC CONFIG]:
// 1. revalidate: อัปเดต Cache ทุก 1 ชม. (ISR)
// 2. dynamicParams: อนุญาตให้สร้างหน้าใหม่ที่ไม่มีตอน Build (สำหรับบทความใหม่)
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return constructMetadata({
    title: post.title,
    description: post.description || "",
    path: `/blog/${slug}`,
    image: post.thumbnail,
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // [SEMANTIC DATA]: เตรียมข้อมูลวันที่ให้ปลอดภัยและถูกต้อง
  const publishDate = post.date ? new Date(post.date) : new Date();
  const isoDate = publishDate.toISOString();
  const displayDate = publishDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // [SCHEMA]: Article Graph
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "บทความ", item: "/blog" },
      { name: post.title, item: `/blog/${slug}` },
    ]),
    {
      "@type": "Article",
      headline: post.title,
      image: post.thumbnail,
      datePublished: isoDate,
      dateModified: isoDate, // ควรเพิ่ม dateModified ด้วยถ้ามี
      author: { "@type": "Person", name: "AEMZA MACKS" },
      publisher: { "@type": "Organization", name: "AEMDEVWEB" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.aemdevweb.com/blog/${slug}`,
      },
    },
  ]);

  return (
    <LayoutEngine spacing="medium">
      <JsonLd data={fullSchema} />
      <article className="container mx-auto px-4 md:px-6">
        <header className="mx-auto mb-12 max-w-4xl space-y-6 pt-32 text-center md:pt-40">
          <div className="flex justify-center gap-2">
            <span className="bg-brand-primary/10 text-brand-primary rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase">
              {post.category}
            </span>
          </div>

          <h1 className="text-text-primary text-5xl leading-[1.1] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            {post.title}
          </h1>

          {/* [HTML FIX]: ใช้ <time> tag เพื่อความถูกต้องทาง Semantic SEO */}
          <div className="text-text-secondary font-mono text-sm uppercase">
            <span>Published_on: </span>
            <time dateTime={isoDate} className="text-text-primary font-bold">
              {displayDate}
            </time>
          </div>
        </header>

        <div className="shadow-glow-lg border-border bg-surface-card relative mx-auto mb-16 aspect-video max-w-5xl overflow-hidden rounded-[2.5rem] border md:rounded-[3.5rem]">
          <Image
            src={post.thumbnail || "/images/blog/default-thumb.webp"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="prose prose-invert prose-brand lg:prose-xl prose-headings:italic prose-headings:tracking-tighter max-w-none">
            <MDXRemote source={post.content || ""} components={useMDXComponents({})} />
          </div>
        </div>
      </article>
    </LayoutEngine>
  );
}
