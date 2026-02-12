/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_ENGINE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Trust Architecture | Result-Driven SEO | Technical Depth
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

// --- 1. Infrastructure & CMS ---
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
// [FIXED]: Import MetadataParams เพื่อกำจัด Knip Warning และทำ Type Hardening
import { constructMetadata, type MetadataParams } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

// --- 2. SEO Protocols ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";

// --- 3. UI Components ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";

/* [A] STATIC GENERATION PROTOCOL: สร้างหน้าแบบ Static ล่วงหน้าเพื่อความเร็วระดับมิลลิวินาที */
export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((item) => ({ slug: item.slug }));
}

/* [B] SEO METADATA ENGINE: ประมวลผล Metadata ตามเนื้อหาจริงของโปรเจกต์ */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCaseStudyBySlug(slug);

  if (!item) return { title: "Case Study Not Found" };

  // [INJECTION]: ใช้งาน MetadataParams Interface เพื่อความแม่นยำของข้อมูล SEO ผลงาน
  const seoConfig: MetadataParams = {
    title: `ผลงาน: ${item.title}`,
    description: item.description,
    path: `/case-studies/${slug}`,
    image: item.thumbnail,
    keywords: [...item.tags, item.client, item.industry],
  };

  return constructMetadata(seoConfig);
}

/**
 * @component CaseStudyDetailPage
 * @description หน้าแสดงผลงานที่เน้นการโชว์ Results และ Technical Stack อย่างเป็นระบบ
 */
export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = await getCaseStudyBySlug(slug);

  if (!item) notFound();

  // 1. [SEO]: Linked Data Graph (Schema.org Integration)
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงานทั้งหมด", item: "/case-studies" },
      { name: item.title, item: `/case-studies/${slug}` },
    ]),
  ]);

  return (
    <LayoutEngine spacing="medium">
      <JsonLd data={fullSchema} />

      <article className="container mx-auto px-4 md:px-6">
        {/* --- 01. HERO HEADER: Identity & Industry --- */}
        <header className="mx-auto mb-20 max-w-5xl space-y-10 pt-32 text-center md:pt-40">
          <div className="text-brand-primary flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] font-black tracking-[0.3em] uppercase">
            <span className="border-brand-primary/20 bg-brand-primary/5 rounded-full border px-5 py-2 backdrop-blur-md">
              Client: {item.client}
            </span>
            <span className="border-border bg-surface-offset text-text-muted rounded-full border px-5 py-2">
              Industry: {item.industry}
            </span>
          </div>

          <h1 className="text-text-primary text-4xl leading-[1] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            {item.title}
          </h1>
          <div className="bg-brand-primary shadow-glow mx-auto h-1.5 w-24" />
        </header>

        {/* --- 02. SHOWCASE VISUAL: The Proof --- */}
        <div className="shadow-glow-lg border-border bg-surface-card relative mx-auto mb-24 aspect-video max-w-6xl overflow-hidden rounded-[3.5rem] border">
          <Image
            src={item.thumbnail}
            alt={`Showcase: ${item.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* --- 03. HYBRID CONTENT GRID: Content & Specs --- */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-brand max-w-none">
              <MDXRemote source={item.content || ""} components={useMDXComponents({})} />
            </div>
          </div>

          {/* Strategic Sidebar: Results & Technology */}
          <aside className="space-y-12 lg:col-span-4">
            <section className="bg-surface-card border-border rounded-[2.5rem] border p-8 md:p-10">
              <h3 className="text-text-primary mb-8 flex items-center gap-4 text-xl font-black tracking-tight uppercase italic">
                <IconRenderer name="TrendingUp" size={24} className="text-brand-primary" />
                Key_Results.
              </h3>
              <ul className="space-y-6">
                {item.results.map((res: string, i: number) => (
                  <li key={i} className="flex gap-4">
                    <div className="bg-brand-primary shadow-glow mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="text-text-secondary text-base leading-tight font-bold italic">
                      {res}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-brand-primary/5 border-brand-primary/10 rounded-[2.5rem] border p-8 md:p-10">
              <h3 className="text-text-primary mb-8 flex items-center gap-4 text-xl font-black tracking-tight uppercase italic">
                <IconRenderer name="Cpu" size={24} className="text-brand-primary" />
                Tech_Stack.
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.technicalStack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="bg-surface-main border-border text-text-primary hover:border-brand-primary/40 rounded-xl border px-4 py-2 font-mono text-[11px] font-bold tracking-wider uppercase transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </article>
    </LayoutEngine>
  );
}
