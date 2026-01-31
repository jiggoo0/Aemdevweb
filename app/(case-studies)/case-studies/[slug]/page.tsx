/** @format */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { ChevronLeft, BarChart3 } from "lucide-react";

// ระบบดึงพิกัดข้อมูลและประมวลผลเนื้อหาเชิงกลยุทธ์
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { useMDXComponents } from "@/mdx-components";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/constants/site-config";

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * [STRATEGIC SSG PROTOCOL]: การจัดเตรียมเส้นทางข้อมูลล่วงหน้า (Pre-rendering)
 */
export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

/**
 * [SEO METADATA]: การกำหนดข้อมูลอัตลักษณ์รายโครงการเพื่อความน่าเชื่อถือ
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Strategic Insights | Content Not Found" };

  const ogImage = study.frontmatter.thumbnail || siteConfig.project.ogImage;

  return {
    title: `${study.frontmatter.title} | Case Study Analysis`,
    description: study.frontmatter.excerpt,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: study.frontmatter.title,
      description: study.frontmatter.excerpt,
      images: [{ url: ogImage }],
      type: "article",
      section: "Case Study",
      publishedTime: study.frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) notFound();

  // การประมวลผลเนื้อหา MDX (Server-side Compiled)
  const { content } = await compileMDX({
    source: study.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  /**
   * [DATA HELPER]: การจัดการดึงดัชนีชี้วัดหลัก (Primary Impact Metric)
   */
  const getPrimaryResult = () => {
    const res = study.frontmatter.results?.[0];
    if (!res) return "Optimization Protocol Success";
    return typeof res === "string" ? res : res.value;
  };

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* 1. SCHEMA: การจัดการโครงสร้างข้อมูลยืนยันความสำเร็จ (E-E-A-T) */}
      <JsonLd
        type="Article"
        data={{
          headline: study.frontmatter.title,
          image: study.frontmatter.thumbnail,
          datePublished: study.frontmatter.date,
          description: study.frontmatter.excerpt,
          author: {
            "@type": "Person",
            name: siteConfig.expert.name, // เชื่อมโยงกับพิกัดผู้เชี่ยวชาญโดยตรง
            url: siteConfig.links.personal,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.company.name,
            logo: { "@type": "ImageObject", url: siteConfig.project.logo },
          },
          about: {
            "@type": "Service",
            name: study.frontmatter.service,
          },
        }}
      />

      {/* [LAYER 1]: HERO SECTION - พิกัดนำเสนอหัวข้อบันทึกผลลัพธ์เชิงกลยุทธ์ */}
      <section className="bg-[oklch(0.98_0.01_260)] pt-32 pb-24 lg:pt-48 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <Link
            href="/case-studies"
            className="group hover:text-brand-primary mb-12 inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-[oklch(0.6_0.02_260)] uppercase italic transition-colors dark:text-[oklch(0.7_0.02_260)]"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            กลับสู่คลังผลลัพธ์เชิงกลยุทธ์
          </Link>
          <div className="border-brand-primary max-w-5xl border-l-8 pl-8 md:pl-16">
            <h1 className="font-heading text-5xl leading-tight font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-8xl dark:text-white">
              {study.frontmatter.title}
            </h1>
            <p className="font-body mt-6 text-lg font-bold text-[oklch(0.45_0.02_260)] md:text-xl dark:text-[oklch(0.8_0.02_260)]">
              Service Protocol:{" "}
              <span className="text-brand-primary">
                {study.frontmatter.service}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: CONTENT BODY - พิกัดบันทึกการวิเคราะห์และดัชนีชี้วัด */}
      <article className="container-za">
        {/* Visual Node: ภาพประกอบหลัก */}
        <div className="shadow-node relative -mt-20 mb-24 aspect-video overflow-hidden rounded-[3.5rem] border-8 border-white bg-[oklch(0.95_0.02_260)] md:-mt-32 dark:border-[oklch(0.12_0.02_260)]">
          <Image
            src={study.frontmatter.thumbnail}
            alt={study.frontmatter.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Strategic Impact Metric: กล่องแสดงผลลัพธ์หลัก */}
          <div className="mb-24 rounded-[3rem] bg-[oklch(0.2_0.02_260)] p-12 text-white shadow-2xl dark:bg-[oklch(0.25_0.02_260)]">
            <div className="text-brand-primary mb-6 flex items-center gap-4">
              <BarChart3 size={32} />
              <span className="font-heading text-xs font-black tracking-widest uppercase italic">
                Strategic Impact Metric
              </span>
            </div>
            <p className="font-body text-4xl leading-tight font-black italic md:text-6xl">
              {getPrimaryResult()}
            </p>
          </div>

          {/* Main Prose Content: เนื้อหา MDX มาตรฐาน prose-aem */}
          <div className="prose-aem prose-lg max-w-none">{content}</div>

          {/* Footer Node: ส่วนปิดท้ายบันทึก */}
          <div className="mt-32 border-t border-[oklch(0.95_0.02_260)] pt-12 text-center dark:border-[oklch(0.2_0.02_260)]">
            <p className="font-heading text-[10px] font-black tracking-[0.4em] text-[oklch(0.7_0.02_260)] uppercase italic">
              Verified Case Insight • AEMDEVWEB 2026
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
