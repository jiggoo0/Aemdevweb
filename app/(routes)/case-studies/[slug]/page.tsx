/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_RENDERER v17.0.2 (PROD_STABILIZED)
 * [STRATEGY]: Evidence-Based Trust | Dynamic MDX Binding | Strict Type Integrity
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
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import { SITE_CONFIG } from "@/constants/site-config";
import { CUSTOM_MDX_COMPONENTS } from "@/mdx-components";
import { cn } from "@/lib/utils";
import type { PageProps } from "@/types";

// --- 2. UI Components & Types ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

/* [A] STATIC GENERATION ENGINE */
export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return (cases || []).map((item) => ({ slug: item.slug }));
}

/* [B] SEO AUTHORITY PROTOCOL */
export async function generateMetadata({
  params,
}: PageProps<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
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
    // [FIX]: Spread Readonly Array to Mutable Array
    keywords: [...(item.tags || [])],
  };
}

export default async function CaseStudyDetailPage({
  params,
}: PageProps<{ slug: string }>) {
  const { slug } = await params;
  const item = await getCaseStudyBySlug(slug);

  if (!item) notFound();

  /**
   * [DYNAMIC IMPORT]: โหลดเนื้อหา MDX เฉพาะเมื่อจำเป็น
   * ใช้ Generics <{ components: MDXComponents }> เพื่อ Type Safety
   */
  const MDXContent = dynamic<{ components: MDXComponents }>(
    () => import(`@/content/case-studies/${slug}.mdx`),
    {
      ssr: true,
      loading: () => (
        <div className="flex h-96 w-full flex-col items-center justify-center space-y-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-primary border-t-transparent shadow-[0_0_20px_var(--color-brand-primary)]" />
          <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-gray-500 opacity-50">
            Deciphering_Evidence...
          </p>
        </div>
      ),
    }
  );

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: item.title,
    description: item.excerpt || item.description,
    image: item.thumbnail
      ? `${SITE_CONFIG.siteUrl}${item.thumbnail}`
      : undefined,
    datePublished: item.date,
    author: { "@type": "Person", name: SITE_CONFIG.expert.displayName },
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
      <JsonLd data={caseSchema} />

      <main className="bg-surface-main relative min-h-screen overflow-hidden pb-24 pt-32 md:pb-32 md:pt-48">
        {/* ATMOSPHERIC ENGINE */}
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none opacity-[0.05]"
          aria-hidden="true"
        >
          <div className="ambient-aura absolute -top-[10%] left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />
          <div className="bg-infrastructure-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        </div>

        <article className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            {/* [NODE 01]: STRATEGIC HEADER */}
            <header className="mb-16 space-y-8 md:mb-24 md:space-y-10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 font-mono text-[10px] font-black tracking-[0.3em] uppercase text-brand-primary md:px-5 md:py-2">
                  <IconRenderer name="CheckCircle2" size={14} />
                  <span>Success_Evidence_v17</span>
                </div>
                <time className="font-mono text-[10px] font-bold tracking-widest uppercase text-gray-500 opacity-60">
                  REF_DATE: {item.date}
                </time>
              </div>

              <h1 className="text-balance text-4xl font-black italic leading-[0.95] tracking-tighter text-white uppercase md:text-6xl lg:text-8xl">
                {item.title}
              </h1>

              <div className="relative overflow-hidden rounded-[2rem] border-l-[8px] border-brand-primary bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:rounded-[2.5rem] md:border-l-[12px] md:p-14">
                <p className="relative z-10 text-xl font-medium italic leading-relaxed text-gray-300 opacity-90 md:text-3xl">
                  “{item.excerpt || item.description}”
                </p>
                <div className="absolute -bottom-10 -right-10 text-white opacity-[0.03]">
                  <IconRenderer name="TrendingUp" size={200} />
                </div>
              </div>
            </header>

            {/* [NODE 02]: MDX CONTENT BODY */}
            <div
              className={cn(
                "prose prose-invert max-w-none md:prose-lg lg:prose-xl",
                // Headings
                "prose-headings:font-sans prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white",
                "prose-h2:mt-16 prose-h2:text-3xl md:prose-h2:text-4xl",
                "prose-h3:mt-12 prose-h3:text-2xl md:prose-h3:text-3xl",
                // Text
                "prose-p:font-thai prose-p:font-medium prose-p:leading-[1.8] prose-p:text-gray-400 prose-p:opacity-90",
                "prose-strong:font-black prose-strong:text-brand-primary",
                "prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline",
                // Lists & Media
                "prose-ul:border-l-2 prose-ul:border-white/10 prose-ul:pl-6 prose-li:marker:text-brand-primary",
                "prose-img:rounded-[2.5rem] prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:bg-[#0A0A0A]",
                "prose-hr:my-16 prose-hr:border-white/10",
                // Code Blocks
                "prose-code:rounded-lg prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:text-brand-primary",
                "prose-pre:rounded-[2rem] prose-pre:bg-[#0A0A0A] prose-pre:p-6 prose-pre:border prose-pre:border-white/5"
              )}
            >
              <MDXContent components={CUSTOM_MDX_COMPONENTS} />
            </div>

            {/* [NODE 03]: CONVERSION FOOTER */}
            <footer className="mt-24 border-t border-white/5 pt-20 md:mt-32">
              <div className="group relative overflow-hidden rounded-[3rem] bg-white text-black shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <div className="relative z-10 flex flex-col items-center justify-between gap-10 p-10 md:flex-row md:p-20">
                  <div className="max-w-xl space-y-4 text-center md:text-left">
                    <h2 className="text-4xl font-black italic leading-none tracking-tighter uppercase md:text-6xl">
                      Ready to Scale <br /> Your Growth?
                    </h2>
                    <p className="text-lg font-medium italic opacity-70">
                      ผมพร้อมช่วยคุณวางแผนระบบที่แม่นยำ เพื่ออุดรอยรั่วและขยายโอกาสในการทำกำไร
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      size="lg"
                      className="h-20 rounded-[2rem] bg-black px-10 text-white shadow-xl transition-all duration-500 hover:scale-105 hover:bg-brand-primary hover:text-black hover:shadow-2xl active:scale-95"
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

                {/* Decoration */}
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-primary opacity-20 blur-[80px] transition-opacity duration-700 group-hover:opacity-40" />
              </div>
            </footer>
          </div>
        </article>
      </main>
    </LayoutEngine>
  );
}
