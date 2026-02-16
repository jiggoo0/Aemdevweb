/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_ENGINE v18.0.0 (SSG_ENFORCED)
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc"; // [CORRECT IMPORT]

// --- Infrastructure ---
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

// --- SEO & UI ---
import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((item) => ({ slug: item.slug }));
}

export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);
  if (!data) return { title: "Case Study Not Found" };

  return constructMetadata({
    title: `${data.title} | ผลงานจาก AEMDEVWEB`,
    description: data.description || "",
    path: `/case-studies/${slug}`,
    image: data.thumbnail,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);

  if (!data) notFound();

  // [SCHEMA GENERATION]
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงานทั้งหมด", item: "/case-studies" },
      { name: data.title, item: `/case-studies/${slug}` },
    ]),
  ]);

  return (
    <LayoutEngine spacing="medium">
      <JsonLd data={fullSchema} />
      <article className="container mx-auto px-4 pt-32 md:px-6 md:pt-40">
        <header className="mx-auto mb-16 max-w-4xl space-y-6 text-center">
          <p className="text-brand-primary font-mono text-sm font-black tracking-widest uppercase">
            Case_Study: {data.client}
          </p>
          <h1 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl">
            {data.title}
          </h1>
        </header>

        {/* MDX Content Rendering */}
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-brand lg:prose-xl max-w-none">
            {/* [CRITICAL FIX]: เรียกใช้ useMDXComponents อย่างถูกต้อง */}
            <MDXRemote source={data.content || ""} components={useMDXComponents({})} />
          </div>
        </div>
      </article>
    </LayoutEngine>
  );
}
