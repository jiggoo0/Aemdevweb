/**
 * [ROUTE PAGE]: BLOG_DETAIL_RENDERER v17.3.10 (STABILIZED)
 * [STRATEGY]: Dynamic MDX Binding | Multi-Theme Typography | Specialist Authority
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";

// --- 1. Infrastructure & SEO ---
// [FIXED]: ปรับ Path ของ LayoutEngine ให้ตรงกับตำแหน่งจริงในระบบ
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { getPostBySlug, getAllPosts } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import type { PageProps } from "@/types";

// --- 2. UI Components & Logic ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import { CUSTOM_MDX_COMPONENTS } from "@/mdx-components";

/* [A] STATIC PARAMS ENGINE: SSG Pre-rendering */
export async function generateStaticParams() {
  const posts = await getAllPosts().catch(() => []);
  return posts.map((post) => ({ slug: post.slug }));
}

/* [B] SEO AUTHORITY PROTOCOL: Article Intelligence */
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "404 Not Found" };

  return {
    title: `${post.title} | ${SITE_CONFIG.brandName}`,
    description: post.excerpt || post.description,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      type: "article",
      publishedTime: post.date,
      images: [post.thumbnail || "/images/og-default.webp"],
      authors: [SITE_CONFIG.expert.displayName],
    },
    keywords: [...(post.tags || [])],
  };
}

/**
 * @component BlogDetailPage
 * @description หน้าแสดงผลบทความเจาะลึกที่ใช้ระบบ Dynamic MDX เพื่อประสิทธิภาพสูงสุด
 */
export default async function BlogDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  /**
   * [DYNAMIC IMPORT]: ถอดรหัสเนื้อหา MDX พร้อมระบบ Skeleton แบบ Specialist
   * ปรับจูนเพื่อรองรับ Next.js 16 Dynamic Routing
   */
  const MDXContent = dynamic<{ components: MDXComponents }>(
    () => import(`@/content/blog/${slug}.mdx`),
    {
      ssr: true,
      loading: () => (
        <div className="flex h-96 w-full flex-col items-center justify-center space-y-6">
          <div className="border-brand-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent shadow-glow" />
          <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-50">
            Decrypting_Knowledge_Node.v{SITE_CONFIG.project.version}
          </p>
        </div>
      ),
    },
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.siteUrl },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.siteUrl}/images/logo.webp` },
    },
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={articleSchema} />

      <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
        
        {/* 01. ATMOSPHERIC PHYSICS: เลเยอร์บรรยากาศเบื้องหลัง */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="ambient-aura absolute -top-[10%] left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[120px]" />
          <div className="bg-infrastructure-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)] opacity-[0.05]" />
        </div>

        <article className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            
            {/* [NODE 01]: STRATEGIC HEADER */}
            <header className="mb-16 md:mb-24">
              <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-10 md:gap-6">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-3 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-md">
                  <IconRenderer name="Calendar" size={14} />
                  <span>PUBLISHED_{post.date}</span>
                </div>
                <div className="text-text-muted hidden font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-40 md:block">
                  Node.Ref_{slug.toUpperCase().replace(/-/g, "_")}
                </div>
              </div>

              <h1 className="text-text-primary mb-8 text-5xl leading-[1] font-black tracking-tighter text-balance text-text-primary uppercase italic md:mb-12 md:text-7xl">
                {post.title}
              </h1>

              <div className="border-brand-primary relative overflow-hidden rounded-[2.5rem] border-l-[12px] bg-surface-card p-10 shadow-glow backdrop-blur-sm md:p-14">
                <p className="text-text-primary relative z-10 text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  “{post.excerpt || post.description}”
                </p>
                <div className="text-text-primary absolute -right-10 -bottom-10 opacity-[0.03]">
                  <IconRenderer name="Quote" size={180} />
                </div>
              </div>
            </header>

            {/* [NODE 02]: MDX CONTENT BODY (Specialist Typography Engine) */}
            <div
              className={cn(
                "prose prose-neutral dark:prose-invert max-w-none transition-colors duration-500",
                "prose-headings:text-text-primary prose-headings:font-sans prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight",
                "prose-h2:mt-16 prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:border-b prose-h2:border-border prose-h2:pb-4",
                "prose-p:text-text-secondary prose-p:font-medium prose-p:leading-[1.9] prose-p:opacity-90 md:prose-p:text-xl",
                "prose-strong:text-brand-primary prose-strong:font-black",
                "prose-img:rounded-[2.5rem] prose-img:border prose-img:border-border prose-img:shadow-glow prose-img:bg-surface-offset",
                "prose-pre:rounded-[2.5rem] prose-pre:bg-surface-card prose-pre:p-8 prose-pre:border prose-pre:border-border",
              )}
            >
              <MDXContent components={CUSTOM_MDX_COMPONENTS} />
            </div>

            {/* [NODE 03]: CONVERSION FOOTER (Inverted High-Contrast) */}
            <footer className="mt-24 border-t border-border pt-20 md:mt-32">
              <div className="group bg-text-primary text-surface-main relative overflow-hidden rounded-[3rem] shadow-glow transition-all duration-700 hover:scale-[1.01]">
                <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 md:p-20 lg:flex-row">
                  <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic md:text-6xl">Ready to Build <br /> Your Strategy?</h2>
                    <p className="max-w-md text-lg font-medium italic opacity-80">
                      เปลี่ยนระบบที่ซับซ้อนให้เป็นเครื่องจักรทำเงินที่ทรงพลัง <br className="hidden md:block" />
                      ทักมาวางระบบหลังบ้านกับผมได้โดยตรงครับ
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      className="bg-surface-main text-text-primary hover:bg-brand-primary hover:text-surface-main h-20 rounded-[2rem] px-14 shadow-xl transition-all duration-500 hover:scale-105"
                    >
                      <Link href={SITE_CONFIG.links.line} target="_blank">
                        <span className="flex items-center gap-4">
                          <IconRenderer name="MessageCircle" size={24} />
                          <span className="font-mono text-[11px] font-black tracking-[0.3em] uppercase">ปรึกษาแผนงานฟรี</span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
                {/* Decoration Aura: Hybrid Physics */}
                <div className="bg-brand-primary/20 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-20 blur-[100px]" />
              </div>

              {/* Specialist Signature */}
              <div className="mt-16 text-center md:mt-24">
                <div className="inline-flex items-center gap-6 font-mono text-[10px] font-black tracking-[0.5em] text-text-muted uppercase opacity-40">
                  <div className="h-px w-12 bg-border" />
                  Engineered_Insights.v{SITE_CONFIG.project.version}
                  <div className="h-px w-12 bg-border" />
                </div>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </LayoutEngine>
  );
}
