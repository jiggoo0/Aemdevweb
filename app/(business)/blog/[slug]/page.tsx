/**
 * [ROUTE PAGE]: BLOG_DETAIL_ENGINE v17.9.11 (FIXED_PROPERTY_ACCESS)
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

// --- 1. Infrastructure ---
import { getPostBySlug, getAllPosts } from "@/lib/cms"; // เอาเฉพาะ Function
// Import Type ให้ถูกที่
import { constructMetadata } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

// --- 2. SEO & UI ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

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
    image: post.thumbnail, // [FIXED]: ใช้ thumbnail แทน coverImage
    keywords: post.tags,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // ... (Schema Generation Logic คงเดิม) ...
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
        {/* ... Header ... */}
        <header className="mx-auto mb-16 max-w-4xl space-y-10 pt-32 text-center md:pt-40">
          <h1 className="text-text-primary text-5xl leading-[1] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            {post.title}
          </h1>
          {/* ... Author Info ... */}
        </header>

        {/* [FIXED]: Image Access */}
        <div className="shadow-glow-lg border-border bg-surface-card relative mx-auto mb-20 aspect-video max-w-6xl overflow-hidden rounded-[3.5rem] border">
          <Image
            src={post.thumbnail || "/images/blog/default-thumb.webp"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-brand lg:prose-xl max-w-none">
            <MDXRemote source={post.content || ""} components={useMDXComponents({})} />
          </div>
        </div>

        {/* ... Footer ... */}
      </article>
    </LayoutEngine>
  );
}
