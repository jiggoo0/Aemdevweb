/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_RENDERER v17.3.10 (STABILIZED)
 * [STRATEGY]: Evidence-Based Trust | Multi-Theme Typography | GPU-Accelerated MDX
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { MDXComponents } from "mdx/types";

// --- 1. Infrastructure & SEO ---
// [FIXED]: ปรับ Path ของ LayoutEngine ให้ตรงกับตำแหน่งจริง (@/components/templates/sections/)
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import JsonLd from "@/components/seo/JsonLd";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import { CUSTOM_MDX_COMPONENTS } from "@/mdx-components";
import { cn } from "@/lib/utils";
import type { PageProps } from "@/types";

// --- 2. UI Components & Logic ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

/* [A] STATIC GENERATION ENGINE: SSG Pre-rendering */
export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return (cases || []).map((item) => ({ slug: item.slug }));
}

/* [B] SEO AUTHORITY PROTOCOL: Article Intelligence */
export async function generateMetadata({ params }: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params; // Next.js 16 Async Params
  const item = await getCaseStudyBySlug(slug);

  if (!item) return { title: "404 Not Found" };

  return {
    title: `${item.title} | Case Study Success | ${SITE_CONFIG.brandName}`,
    description: item.excerpt || item.description,
    openGraph: {
      title: item.title,
      description: item.excerpt || item.description,
      type: "article",
      publishedTime: item.date,
      images: [item.thumbnail || "/images/og-default.webp"],
      authors: [SITE_CONFIG.expert.displayName],
    },
    keywords: [...(item.tags || [])],
  };
}

/**
 * @component CaseStudyDetailPage
 * @description หน้าแสดงรายละเอียดผลงานเชิงวิศวกรรมที่เน้นการสร้าง Trust ผ่าน MDX Content
 */
export default async function CaseStudyDetailPage({ params }: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const item = await getCaseStudyBySlug(slug);

  if (!item) notFound();

  /**
   * [DYNAMIC IMPORT]: ประมวลผลเนื้อหา MDX พร้อมระบบ Skeleton แบบ Specialist
   */
  const MDXContent = dynamic<{ components: MDXComponents }>(
    () => import(`@/content/case-studies/${slug}.mdx`),
    {
      ssr: true,
      loading: () => (
        <div className="flex h-96 w-full flex-col items-center justify-center space-y-6">
          <div className="border-brand-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent shadow-glow" />
          <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-50">
            Deciphering_Evidence.v{SITE_CONFIG.project.version}
          </p>
        </div>
      ),
    },
  );

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: item.title,
    description: item.excerpt || item.description,
    image: item.thumbnail ? `${SITE_CONFIG.siteUrl}${item.thumbnail}` : undefined,
    datePublished: item.date,
    author: { "@type": "Person", name: SITE_CONFIG.expert.displayName },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.siteUrl}/images/logo.webp` },
    },
  };

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={caseSchema} />

      <main className="bg-surface-main relative min-h-screen overflow-hidden pt-32 pb-24 transition-colors duration-500 md:pt-48 md:pb-32">
        
        {/* 01. ATMOSPHERIC PHYSICS: เลเยอร์บรรยากาศเบื้องหลัง */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="ambient-aura absolute -top-[10%] left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[var(--ambient-opacity,0.4)] blur-[120px]" />
          <div className="bg-infrastructure-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)] opacity-[0.05]" />
        </div>

        <article className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            
            {/* [NODE 01]: STRATEGIC HEADER */}
            <header className="mb-16 space-y-10 md:mb-24">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-md">
                  <IconRenderer name="CheckCircle2" size={14} />
                  <span>Success_Evidence.v{SITE_CONFIG.project.version}</span>
                </div>
                <time className="text-text-muted font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">
                  REF_DATE: {item.date}
                </time>
              </div>

              <h1 className="text-text-primary text-5xl leading-[0.95] font-black tracking-tighter text-balance uppercase italic md:text-7xl lg:text-8xl">
                {item.title}
              </h1>

              <div className="border-brand-primary relative overflow-hidden rounded-[2.5rem] border-l-[12px] bg-surface-card p-10 shadow-glow backdrop-blur-sm md:p-14">
                <p className="text-text-primary relative z-10 text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  “{item.excerpt || item.description}”
                </p>
                <div className="text-text-primary absolute -right-10 -bottom-10 opacity-[0.03]">
                  <IconRenderer name="TrendingUp" size={200} />
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
                "prose-pre:rounded-[2.5rem] prose-pre:bg-surface-card prose-pre:p-8 prose-pre:border prose-pre:border-border prose-pre:shadow-glow",
                "prose-blockquote:border-brand-primary prose-blockquote:bg-brand-primary/5 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl"
              )}
            >
              <MDXContent components={CUSTOM_MDX_COMPONENTS} />
            </div>

            {/* [NODE 03]: CONVERSION FOOTER (Inverted High-Contrast) */}
            <footer className="mt-24 border-t border-border pt-20 md:mt-32">
              <div className="group bg-text-primary text-surface-main relative overflow-hidden rounded-[3rem] shadow-glow transition-all duration-700 hover:scale-[1.01]">
                <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 md:flex-row md:p-20">
                  <div className="max-w-xl space-y-4 text-center md:text-left">
                    <h2 className="text-4xl leading-none font-black tracking-tighter uppercase italic md:text-6xl">
                      Ready to Scale <br /> Your Growth?
                    </h2>
                    <p className="text-lg font-medium italic opacity-80">
                      ผมพร้อมช่วยคุณวางแผนระบบที่แม่นยำ เพื่ออุดรอยรั่วและขยายโอกาสในการทำกำไร
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      size="lg"
                      className="bg-surface-main text-text-primary hover:bg-brand-primary hover:text-surface-main h-20 rounded-[2rem] px-10 shadow-xl transition-all duration-500 hover:scale-105"
                    >
                      <Link href={SITE_CONFIG.links.line} target="_blank">
                        <span className="flex items-center gap-4">
                          <IconRenderer name="MessageCircle" size={24} />
                          <span className="font-mono text-[11px] font-black tracking-[0.2em] uppercase">
                            ปรึกษาแผนงานของคุณ
                          </span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Decoration: Hybrid Physics Aura */}
                <div className="bg-brand-primary absolute -right-24 -bottom-24 h-64 w-64 rounded-full opacity-20 blur-[80px] transition-opacity duration-700 group-hover:opacity-40" />
              </div>
            </footer>
          </div>
        </article>
      </main>
    </LayoutEngine>
  );
}
