/**
 * [ROUTE PAGE]: BLOG_DETAIL_RENDERER v17.0.2 (PROD_STABILIZED)
 * [STRATEGY]: Dynamic MDX Binding | Component Orchestration | Neural Depth
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";

// --- 1. Infrastructure & SEO ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { getPostBySlug, getAllPosts } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import type { PageProps } from "@/types";

// --- 2. UI Components & Logic ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

// [CRITICAL]: Import Static Components for MDX to prevent Hydration Mismatch
import { CUSTOM_MDX_COMPONENTS } from "@/mdx-components";

/* [A] STATIC PARAMS ENGINE */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* [B] SEO AUTHORITY PROTOCOL */
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
    // [FIX]: Spread Readonly Array to Mutable Array
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
   * [DYNAMIC IMPORT]: โหลดเนื้อหา MDX เฉพาะเมื่อจำเป็น
   * ใช้ Generics <{ components: MDXComponents }> เพื่อ Type Safety
   */
  const MDXContent = dynamic<{ components: MDXComponents }>(
    () => import(`@/content/blog/${slug}.mdx`),
    {
      ssr: true, // SEO Requirement: Server-Side Rendering Mandatory
      loading: () => (
        <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
          <div className="border-brand-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent shadow-[0_0_20px_var(--color-brand-primary)]" />
          <p className="font-mono text-xs font-black tracking-[0.2em] text-gray-500 uppercase opacity-50">
            Decrypting_Knowledge_Node...
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
    image: post.thumbnail ? `${SITE_CONFIG.siteUrl}${post.thumbnail}` : undefined,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.expert.displayName,
      url: SITE_CONFIG.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}/images/logo.webp`,
      },
    },
  };

  return (
    <LayoutEngine>
      <JsonLd data={articleSchema} />

      <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
        {/* ATMOSPHERIC ENGINE: เลเยอร์บรรยากาศเบื้องหลัง */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
          aria-hidden="true"
        >
          <div className="ambient-aura absolute -top-[10%] left-1/2 h-[800px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />
          <div className="bg-infrastructure-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        </div>

        <article className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            {/* [NODE 01]: STRATEGIC HEADER */}
            <header className="mb-16 md:mb-24">
              <div className="mb-8 flex flex-wrap items-center gap-4 md:mb-10 md:gap-6">
                <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[10px] font-black tracking-[0.3em] uppercase md:px-5 md:py-2">
                  <IconRenderer name="Calendar" size={14} />
                  <span>PUBLISHED_{post.date}</span>
                </div>
                <div className="hidden font-mono text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase opacity-40 md:block">
                  Node.Ref_{slug.toUpperCase().replace(/-/g, "_")}
                </div>
              </div>

              <h1 className="mb-8 text-4xl leading-[1] font-black tracking-tighter text-balance text-white uppercase italic md:mb-12 md:text-6xl lg:text-7xl">
                {post.title}
              </h1>

              <div className="border-brand-primary relative overflow-hidden rounded-[2rem] border-l-[6px] bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:rounded-[2.5rem] md:border-l-[10px] md:p-12">
                <p className="relative z-10 text-xl leading-relaxed font-medium text-gray-300 italic opacity-90 md:text-2xl">
                  “{post.excerpt || post.description}”
                </p>
                <div className="absolute -right-10 -bottom-10 text-white opacity-[0.03]">
                  <IconRenderer name="Quote" size={180} />
                </div>
              </div>
            </header>

            {/* [NODE 02]: MDX CONTENT BODY (Prose Engine) */}
            <div
              className={cn(
                "prose prose-invert md:prose-lg lg:prose-xl max-w-none",
                // Headings
                "prose-headings:font-sans prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white",
                "prose-h2:mt-16 prose-h2:text-3xl md:prose-h2:text-4xl",
                "prose-h3:mt-12 prose-h3:text-2xl md:prose-h3:text-3xl",
                // Text
                "prose-p:font-thai prose-p:font-medium prose-p:leading-[1.8] prose-p:text-gray-400 prose-p:opacity-90",
                "prose-strong:font-black prose-strong:text-brand-primary",
                "prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline",
                // Lists
                "prose-ul:border-l-2 prose-ul:border-white/10 prose-ul:pl-6 prose-li:marker:text-brand-primary",
                "prose-ol:pl-6 prose-li:marker:font-black prose-li:marker:text-brand-primary",
                // Media
                "prose-img:rounded-[2rem] prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:bg-[#0A0A0A]",
                "prose-hr:my-16 prose-hr:border-white/10",
                // Code Blocks
                "prose-code:rounded-lg prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-brand-primary",
                "prose-pre:rounded-[2rem] prose-pre:bg-[#0A0A0A] prose-pre:p-6 prose-pre:border prose-pre:border-white/5",
              )}
            >
              <MDXContent components={CUSTOM_MDX_COMPONENTS} />
            </div>

            {/* [NODE 03]: CONVERSION FOOTER (Sticky Logic Support) */}
            <footer className="mt-24 border-t border-white/5 pt-20 md:mt-32">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl md:rounded-[3rem] md:p-16">
                <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
                  <div className="space-y-4 text-center lg:text-left">
                    <h3 className="text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
                      Ready to Build <br /> Your Strategy?
                    </h3>
                    <p className="max-w-md text-base leading-relaxed font-medium text-gray-400 italic opacity-80 md:text-lg">
                      เปลี่ยนระบบที่ซับซ้อนให้เป็นเครื่องจักรทำเงินที่ทรงพลัง{" "}
                      <br className="hidden md:block" />
                      ทักมาวางระบบหลังบ้านกับผมได้โดยตรงครับ
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      className="group bg-brand-primary relative h-16 w-full overflow-hidden rounded-[2rem] px-10 text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-95 sm:w-auto md:h-20 md:px-14"
                    >
                      <Link href={SITE_CONFIG.links.line} target="_blank">
                        <span className="relative z-10 flex items-center gap-4">
                          <IconRenderer name="MessageCircle" size={24} />
                          <span className="font-mono text-[11px] font-black tracking-[0.3em] uppercase">
                            ทักแชทปรึกษาแผนงานฟรี
                          </span>
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Decoration Aura */}
                <div className="bg-brand-primary/20 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-20 blur-[100px]" />
              </div>

              {/* Specialist Signature */}
              <div className="mt-16 text-center md:mt-20">
                <div className="inline-flex items-center gap-6 font-mono text-[10px] font-black tracking-[0.5em] text-gray-600 uppercase opacity-40">
                  <div className="h-px w-12 bg-gray-700" />
                  Core.Performance_v17.0
                  <div className="h-px w-12 bg-gray-700" />
                </div>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </LayoutEngine>
  );
}
