/**
 * [TEST ROUTE]: MDX_SANDBOX_RENDERER v17.0.3 (STABILIZED)
 * [STRATEGY]: Local Node Binding | Visual Regression Testing | Zero-DB Dependency
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI ---
import LayoutEngine from "@/components/templates/sections/LayoutEngine";
import IconRenderer from "@/components/ui/IconRenderer";
import { CUSTOM_MDX_COMPONENTS } from "@/mdx-components";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";

/* [A] SEO AUTHORITY: Static Meta for Testing */
export const metadata: Metadata = {
  title: `MDX Sandbox | ${SITE_CONFIG.brandName}`,
  description: "Environment สำหรับทดสอบการเรนเดอร์ MDX และ UI Components",
  robots: { index: false, follow: false },
};

/**
 * @component TestMdxPage
 * @description หน้า Sandbox สำหรับทดสอบเนื้อหาและ Layout ก่อนนำขึ้นระบบจริง
 */
export default async function TestMdxPage() {
  /**
   * [RECTIFIED]: DYNAMIC_TYPE_BYPASS
   * ใช้ eslint-disable-next-line เพื่ออนุญาตให้ใช้ any เฉพาะจุด
   * เนื่องจากความซับซ้อนของ Interface ระหว่าง MDX Module และ NextDynamic
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXContent = dynamic<any>(() => import("./content.mdx"), {
    ssr: true,
    loading: () => (
      <div className="flex items-center gap-3 py-10 font-mono text-[10px] italic opacity-50">
        <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full" />
        System.Node_Loading_Sandbox_Content...
      </div>
    ),
  });

  // [MOCK_DATA]: จำลองข้อมูลบทความเพื่อทดสอบการจัดวาง Visual
  const post = {
    slug: "test-node",
    title: "MDX Engine Stability Test",
    date: "2026-02-08",
    excerpt:
      "ระบบทดสอบการเรนเดอร์เนื้อหาแบบ MDX สำหรับ AEMDEVWEB Specialist Team เพื่อตรวจสอบความสมบูรณ์ของระบบ Typography และ Physics",
    description: "Sandbox Testing Mode",
    thumbnail: "/images/og-default.webp",
  };

  return (
    <LayoutEngine>
      <main className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24 md:pt-48 md:pb-32">
        {/* ATMOSPHERIC ENGINE */}
        <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
          <div className="bg-brand-primary/5 absolute -top-[10%] left-1/2 h-[600px] w-full -translate-x-1/2 opacity-40 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_70%)] bg-[size:32px_32px]" />
        </div>

        <article className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            {/* [NODE 01]: STRATEGIC HEADER */}
            <header className="mb-20 md:mb-32">
              <div className="mb-10 flex flex-wrap items-center gap-6">
                <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary flex items-center gap-3 rounded-full border px-5 py-2 font-mono text-[9px] font-black tracking-[0.3em]">
                  <IconRenderer name="Activity" size={14} />
                  <span>SANDBOX_MODE_ACTIVE</span>
                </div>
                <div className="font-mono text-[9px] font-bold tracking-[0.3em] text-slate-600 uppercase">
                  Ref.TEST_NODE_STABILITY
                </div>
              </div>

              <h1 className="mb-12 text-5xl font-black tracking-tighter text-white uppercase italic md:text-8xl">
                {post.title}
              </h1>

              <div className="border-brand-primary shadow-pro relative overflow-hidden rounded-[2.5rem] border-l-[8px] bg-white/5 p-8 md:p-12">
                <p className="relative z-10 text-xl leading-relaxed font-medium text-slate-300 italic opacity-90 md:text-2xl">
                  “{post.excerpt}”
                </p>
                <div className="absolute -right-10 -bottom-10 text-white/[0.03]">
                  <IconRenderer name="Quote" size={200} />
                </div>
              </div>
            </header>

            {/* [NODE 02]: MDX CONTENT BODY (Sandbox Render) */}
            <div
              className={cn(
                "prose prose-invert md:prose-xl max-w-none",
                "prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white",
                "prose-p:font-medium prose-p:italic prose-p:leading-[1.8] prose-p:text-slate-400",
                "prose-strong:font-black prose-strong:text-brand-primary",
                "prose-ul:border-l-2 prose-ul:border-white/10 prose-ul:pl-8 prose-li:marker:text-brand-primary",
                "prose-img:rounded-[2.5rem] prose-img:border prose-img:border-white/10",
                "prose-hr:my-20 prose-hr:border-white/10",
              )}
            >
              <MDXContent components={CUSTOM_MDX_COMPONENTS} />
            </div>

            {/* [NODE 03]: SPECIALIST SIGNATURE */}
            <footer className="mt-32 border-t border-white/10 pt-16">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4 font-mono text-[9px] font-black tracking-[0.5em] text-slate-600 uppercase opacity-50">
                  <div className="h-px w-12 bg-white/10" />
                  Testing_Engine.v17.Alpha
                  <div className="h-px w-12 bg-white/10" />
                </div>
                <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Ready to deploy to production_node?
                </p>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </LayoutEngine>
  );
}
