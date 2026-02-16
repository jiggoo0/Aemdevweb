/**
 * [ROUTE PAGE]: CASE_STUDY_DETAIL_ENGINE v18.0.3 (SEMANTIC_HARDENED)
 * [STRATEGY]: ISR Strategy | Portfolio Schema | Conversion Optimized
 */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import { constructMetadata } from "@/lib/seo-utils";
import { useMDXComponents } from "@/mdx-components";
import type { PageProps } from "@/types";

import JsonLd from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema, generateSchemaGraph } from "@/lib/schema";
import LayoutEngine from "@/components/templates/sections/LayoutEngine";

// [DYNAMIC CONFIG]: เปลี่ยนเป็น ISR เพื่อความยืดหยุ่นในการอัปเดตข้อมูล
export const revalidate = 3600; // Revalidate ทุก 1 ชั่วโมง
export const dynamicParams = true; // รองรับ Slug ใหม่ที่ยังไม่มีตอน Build

export async function generateStaticParams() {
  const cases = await getAllCaseStudies();
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);
  if (!data) return { title: "Case Study Not Found" };

  return constructMetadata({
    title: `${data.title} | ผลงาน AEMDEVWEB`,
    description: data.description || "",
    path: `/case-studies/${slug}`,
    image: data.thumbnail,
  });
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getCaseStudyBySlug(slug);

  if (!data) notFound();

  // [SEMANTIC DATA]: เตรียมข้อมูลวันที่และ Schema
  const projectDate = data.date ? new Date(data.date) : new Date();
  const isoDate = projectDate.toISOString();
  const displayDate = projectDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
  });

  // [SCHEMA]: CreativeWork / Article Graph สำหรับ Portfolio
  const fullSchema = generateSchemaGraph([
    generateBreadcrumbSchema([
      { name: "หน้าแรก", item: "/" },
      { name: "ผลงาน", item: "/case-studies" },
      { name: data.title, item: `/case-studies/${slug}` },
    ]),
    {
      "@type": "CreativeWork", // ใช้ CreativeWork หรือ Article สำหรับ Case Study
      headline: data.title,
      image: data.image,
      datePublished: isoDate,
      dateModified: isoDate,
      provider: {
        "@type": "Organization",
        name: data.client, // ระบุชื่อลูกค้าใน Schema เพื่อความน่าเชื่อถือ
      },
      author: { "@type": "Organization", name: "AEMDEVWEB" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.aemdevweb.com/case-studies/${slug}`,
      },
    },
  ]);

  return (
    <LayoutEngine spacing="medium">
      <JsonLd data={fullSchema} />
      <article className="container mx-auto px-4 md:px-6">
        <header className="mx-auto mb-12 max-w-4xl space-y-6 pt-32 text-center md:pt-40">
          <div className="flex flex-col items-center gap-2">
            <p className="text-brand-primary font-mono text-sm font-black tracking-[0.3em] uppercase">
              Client_Report: {data.client}
            </p>
            {/* [SEMANTIC]: Project Date */}
            <time
              dateTime={isoDate}
              className="text-text-muted font-mono text-[10px] uppercase opacity-60"
            >
              Completed: {displayDate}
            </time>
          </div>

          <h1 className="text-text-primary text-5xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
            {data.title}
          </h1>

          {data.result && (
            <div className="bg-surface-card border-brand-primary/20 inline-block rounded-xl border px-6 py-2 shadow-sm">
              <span className="text-brand-primary font-mono text-lg font-bold">{data.result}</span>
            </div>
          )}
        </header>

        {/* Hero Image with LCP Optimization */}
        <div className="shadow-glow-sm border-border bg-surface-card relative mx-auto mb-16 aspect-video max-w-6xl overflow-hidden rounded-[2.5rem] border md:rounded-[3rem]">
          <Image
            src={data.image || "/images/case-studies/preview.webp"}
            alt={`ผลงานเว็บไซต์ ${data.title} - ${data.client}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-brand lg:prose-xl prose-img:rounded-3xl prose-img:border prose-img:border-border max-w-none">
            <MDXRemote source={data.content || ""} components={useMDXComponents({})} />
          </div>
        </div>
      </article>
    </LayoutEngine>
  );
}
