/** @format */

import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, User, Tag, Heart, Share2 } from "lucide-react";

// ระบบดึงพิกัดข้อมูลและประมวลผลเนื้อหาเชิงกลยุทธ์ (AEM Engine)
import { getBlogPostBySlug, getBlogPostsMetadata } from "@/lib/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/constants/site-config";

// ระบบจัดการส่วนประกอบ MDX ระดับพิกัดความลึก 7
import { useMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 1. STRATEGIC METADATA: พิกัดชุดข้อมูลความน่าเชื่อถือ (E-E-A-T)
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Insight Node | Not Found" };

  const ogImage = post.frontmatter.thumbnail || siteConfig.project.ogImage;

  return {
    title: `${post.frontmatter.title} | ${post.frontmatter.category}`,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [{ url: ogImage }],
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  };
}

/**
 * 2. BLOG POST RENDERER: โครงสร้างการนำเสนอระดับ High-Performance
 * ควบคุมมาตรฐานโดย: นายเอ็มซ่ามากส์
 */
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  // ประมวลผลพิกัด MDX (Server-side Compiled)
  const { content } = await compileMDX({
    source: post.content,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [SCHEMA DATA]: ยืนยันพิกัดบทความต่อระบบ AI Search */}
      <JsonLd
        type="BlogPosting"
        data={{
          headline: post.frontmatter.title,
          description: post.frontmatter.description,
          image: post.frontmatter.thumbnail,
          datePublished: post.frontmatter.date,
          author: {
            "@type": "Person",
            name: post.frontmatter.author,
            url: siteConfig.links.personal,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.company.name,
            logo: { "@type": "ImageObject", url: siteConfig.project.logo },
          },
        }}
      />

      {/* [LAYER 0]: Hero Header - พิกัดนำเสนอข้อมูลเชิงลึก */}
      <section className="relative overflow-hidden bg-[oklch(0.98_0.01_260)] pt-32 pb-20 lg:pt-48 lg:pb-32 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <Link
            href="/blog"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-[oklch(0.6_0.02_260)] uppercase italic transition-colors hover:text-brand-primary"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            Back to Insight Hub
          </Link>

          <div className="max-w-4xl border-l-8 border-brand-primary pl-8 md:pl-16">
            <div className="mb-8 flex flex-wrap items-center gap-8 text-[10px] font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase italic">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-brand-primary" />
                {post.frontmatter.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={14} className="text-brand-primary" />
                {post.frontmatter.author}
              </span>
              <span className="flex items-center gap-2 text-brand-primary">
                <Tag size={14} />
                {post.frontmatter.category}
              </span>
            </div>

            <h1 className="font-heading text-4xl leading-[1.1] font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl lg:text-8xl dark:text-white">
              {post.frontmatter.title}
            </h1>
          </div>
        </div>
      </section>

      {/* [LAYER 1]: Article Content Node */}
      <article className="container-za">
        <div className="relative -mt-16 mb-20 aspect-video w-full overflow-hidden rounded-[3.5rem] border-8 border-white bg-[oklch(0.95_0.02_260)] shadow-node md:-mt-24 dark:border-[oklch(0.12_0.02_260)]">
          <Image
            src={post.frontmatter.thumbnail || "/images/blog/placeholder.webp"}
            alt={post.frontmatter.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Side Action Protocol */}
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-32 flex flex-col items-center gap-8">
              <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[oklch(0.98_0.01_260)] text-[oklch(0.6_0.02_260)] transition-all hover:bg-brand-primary hover:text-white dark:bg-[oklch(0.2_0.02_260)]">
                <Share2 size={20} />
              </button>
              <div className="h-20 w-px bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.3_0.02_260)]" />
              <p className="font-heading vertical-text text-[10px] font-black tracking-widest text-[oklch(0.7_0.02_260)] uppercase italic">
                Strategic Node
              </p>
            </div>
          </aside>

          {/* Main Prose Content: พิกัดแสดงผลมาตรฐาน Master Style */}
          <div className="lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3">
            <div className="prose-aem prose-lg max-w-none">{content}</div>

            {/* Navigation Footer Node */}
            <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-[oklch(0.95_0.02_260)] pt-12 md:flex-row dark:border-[oklch(0.2_0.02_260)]">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-[oklch(0.7_0.02_260)] uppercase italic">
                <Heart size={14} className="text-brand-primary" />
                Specialist Insight 2026
              </div>
              <Link
                href="/blog"
                className="group flex items-center gap-3 text-[11px] font-black tracking-widest text-brand-primary uppercase italic transition-colors hover:text-[oklch(0.2_0.02_260)] dark:hover:text-white"
              >
                Explore More Nodes
                <ChevronLeft
                  size={16}
                  className="rotate-180 transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

/**
 * 3. STATIC PATH ENGINE: การเตรียมพิกัดล่วงหน้า (SSG)
 */
export async function generateStaticParams() {
  const posts = await getBlogPostsMetadata();
  return posts.map((post) => ({ slug: post.slug }));
}
