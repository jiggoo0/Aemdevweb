/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

/**
 * ✅ [FIXED]: ใช้ next-mdx-remote เพื่อรองรับสถาปัตยกรรม Server Components 
 * มั่นใจได้ว่าโหลดไวและเป็นมิตรกับ SEO สำหรับ SME และโรงงาน
 */
import { MDXRemote } from "next-mdx-remote/rsc";

import {
  ArrowLeft,
  Calendar,
  Share2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

// 📂 ข้อมูลตัวตนและระบบจัดการบทความ
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/constants/site-config";
import { useMDXComponents } from "@/mdx-components";

// 🧩 ส่วนประกอบหน้าเว็บ (Specialist UI)
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * 🛠️ MDX Components Mapping — "ปรับแต่งการแสดงผลภายในบทความ"
 */
const mdxComponents = {
  ...useMDXComponents({}),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const safeSrc = typeof props.src === "string" ? props.src : "/images/og-image.png";
    return (
      <span className="relative my-12 block aspect-video w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl">
        <Image
          src={safeSrc}
          fill
          className="object-cover"
          alt={props.alt || "AEMDEVWEB Specialist Insight"}
          loading="lazy"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </span>
    );
  },
  h2: (props: any) => (
    <h2
      className="font-prompt mt-20 mb-10 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="font-anuphan mb-8 text-xl font-bold leading-relaxed text-slate-500"
      {...props}
    />
  ),
  CallToAction: ({ title, description, url }: { title: string; description: string; url?: string }) => (
    <div className="my-20 rounded-[3rem] border border-emerald-500/20 bg-emerald-50/5 p-12 text-center shadow-2xl shadow-emerald-500/5 lg:p-20">
      <h3 className="font-prompt mb-6 text-3xl font-black text-slate-900 uppercase italic">
        {title}
      </h3>
      <p className="font-anuphan mb-10 text-lg font-bold text-slate-500">{description}</p>
      <Button
        asChild
        className="font-prompt h-16 rounded-2xl bg-slate-950 px-12 font-black tracking-widest text-white uppercase transition-all hover:bg-emerald-500 hover:text-slate-950"
      >
        <Link href={url || "/contact"}>ทักคุยกับ นายเอ็มซ่ามากส์</Link>
      </Button>
    </div>
  ),
};

interface Props {
  params: Promise<{ slug: string }>;
}

/**
 * ⚙️ SSG Engine — "สร้างหน้าล่วงหน้าเพื่อความเร็วที่เหนือกว่า"
 */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * 🔍 SEO Specialist Metadata
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: `ไม่พบบทความ | ${siteConfig.shortName}` };

  return {
    title: `${post.title} | ${siteConfig.shortName}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      images: [{ url: post.thumbnail || siteConfig.ogImage }],
      authors: ["นายเอ็มซ่ามากส์"],
    },
  };
}

/**
 * 📄 BlogPostPage
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative min-h-screen bg-white pt-32 pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="Article"
        data={{
          headline: post.title,
          description: post.excerpt,
          image: post.thumbnail,
          datePublished: post.date,
          author: { "@type": "Person", name: "นายเอ็มซ่ามากส์", url: siteConfig.url },
        }}
      />

      <div className="container mx-auto max-w-4xl px-4">
        <nav className="mb-16">
          <Link
            href="/blog"
            className="group inline-flex items-center text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-emerald-500"
          >
            <ArrowLeft className="mr-3 h-4 w-4 transition-transform group-hover:-translate-x-2" />
            ย้อนกลับไปคลังบทความ
          </Link>
        </nav>

        <header className="mb-20">
          <div className="mb-10 flex flex-wrap items-center gap-4">
            {(post.tags || []).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full border-slate-200 px-5 py-1.5 text-[10px] font-black tracking-widest text-slate-500 uppercase"
              >
                {tag}
              </Badge>
            ))}
            <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
              <Calendar className="h-3.5 w-3.5 text-emerald-500" /> {formattedDate}
            </div>
          </div>

          <h1 className="font-prompt mb-10 text-4xl font-black leading-[1.05] tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-8xl">
            {post.title}
          </h1>

          <p className="font-anuphan text-2xl font-bold italic leading-relaxed text-slate-500/80">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-24 aspect-[21/9] w-full overflow-hidden rounded-[3.5rem] border border-slate-100 shadow-2xl">
          <Image
            src={post.thumbnail || "/images/og-image.png"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ✍️ เนื้อหาบทความประมวลผลผ่าน MDX (Server Side) */}
        <div className="prose prose-slate prose-lg md:prose-2xl font-anuphan max-w-none leading-[1.8] text-slate-600">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 p-12 shadow-sm md:flex-row">
          <div className="flex items-center gap-6">
            <div className="relative h-20 w-20 overflow-hidden rounded-[1.5rem] bg-slate-950 shadow-lg">
              <div className="font-prompt flex h-full w-full items-center justify-center text-3xl font-black text-emerald-500 italic">M</div>
            </div>
            <div>
              <div className="font-prompt text-xl font-black tracking-tight text-slate-900 uppercase italic">นายเอ็มซ่ามากส์</div>
              <div className="font-anuphan mt-1 text-[11px] font-black tracking-[0.25em] text-emerald-600 uppercase">Technical SEO & Specialist Dev</div>
            </div>
          </div>

          <Button
            variant="outline"
            className="font-prompt h-14 gap-3 rounded-2xl border-slate-200 px-10 text-xs font-black tracking-widest uppercase shadow-md transition-all hover:bg-emerald-500 hover:text-white"
          >
            <Share2 className="h-4 w-4" /> แชร์ต่อเพื่อเป็นความรู้
          </Button>
        </div>

        <div className="mt-24 overflow-hidden rounded-[4rem] bg-slate-950 p-16 text-center text-white shadow-2xl lg:p-24">
          <Sparkles className="mx-auto mb-10 h-14 w-14 animate-pulse text-emerald-500" />
          <h3 className="font-prompt mb-8 text-4xl font-black leading-none tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            พร้อมอัปเกรด <br />
            <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">รายได้</span> หรือยัง?
          </h3>
          <p className="font-anuphan mx-auto mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-400">
            ถ้าบทความนี้ทำให้คุณเห็นทางออก ทักมาปรึกษาผมได้โดยตรงครับ 
            ผมช่วยจูนระบบให้ SME และโรงงานอุตสาหกรรมมานับไม่ถ้วน
          </p>
          <Button
            asChild
            size="lg"
            className="h-20 rounded-[2rem] bg-emerald-500 px-16 text-slate-950 shadow-xl transition-all hover:scale-105 hover:bg-white active:scale-95"
          >
            <Link
              href="/contact"
              className="font-prompt text-lg font-black tracking-widest uppercase italic"
            >
              <MessageCircle className="mr-4 h-6 w-6 fill-current" /> ทักคุยกับ นายเอ็มซ่ามากส์
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
