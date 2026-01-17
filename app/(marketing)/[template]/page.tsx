/** @format */

import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// 📦 Data & Utils
import {
  getTemplatesByCategory,
  getAllCategories,
  getCategoryInfo,
} from "@/constants/templates-data";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// 🧩 Layout Components (Updated Paths)
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar";
import { Footer } from "@/components/shared/Footer";
import { LineStickyButton } from "@/components/shared/LineStickyButton";

// 🧩 Page Components (Updated Paths)
import { TemplateHero } from "@/components/template/marketplace/TemplateHero";
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid";
import { TemplateFilter } from "@/components/template/marketplace/TemplateFilter";
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm";

interface CategoryPageProps {
  params: Promise<{
    template: string; // Category Slug (e.g., 'sale-page')
  }>;
}

/**
 * 🧬 1. SSG: Pre-generate all category pages
 */
export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    template: cat.slug,
  }));
}

/**
 * 🔍 2. Dynamic Metadata: Optimized for SEO
 */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { template: slug } = await params;
  const categoryInfo = getCategoryInfo(slug);

  if (!categoryInfo) return { title: "Category Not Found" };

  const title = `${categoryInfo.name} - คลังเทมเพลตเว็บไซต์คุณภาพ | ${siteConfig.shortName}`;
  const description =
    categoryInfo.description ||
    `เลือกชมเทมเพลต ${categoryInfo.name} ที่ออกแบบมาเพื่อเพิ่ม Conversion ให้ธุรกิจคุณโดยเฉพาะ`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [siteConfig.ogImage],
      url: `${siteConfig.url}/${slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/${slug}`,
    },
  };
}

/**
 * 🚀 3. Main Category Page Component
 */
export default async function TemplateCategoryPage({
  params,
}: CategoryPageProps) {
  const { template: categorySlug } = await params;

  // Fetch Data
  const categoryInfo = getCategoryInfo(categorySlug);
  const templates = getTemplatesByCategory(categorySlug);
  const allCategories = getAllCategories();

  // 🛡️ Guard Clause
  if (!categoryInfo) return notFound();

  // 🎨 Category DNA: กำหนดธีมสีตามหมวดหมู่เพื่อความเฉพาะตัว
  const themeColor = categoryInfo.themeColor || "emerald";

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      {/* Background Decor: Ambient Light Effect */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className={cn(
            "absolute -top-24 left-1/2 h-96 w-full max-w-5xl -translate-x-1/2 opacity-20 blur-[120px] transition-colors duration-1000",
            themeColor === "emerald" && "bg-emerald-500/20",
            themeColor === "blue" && "bg-blue-500/20",
            themeColor === "rose" && "bg-rose-500/20",
            themeColor === "amber" && "bg-amber-500/20"
          )}
        />
      </div>

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* --- SECTION 1: HERO --- */}
        <TemplateHero
          title={categoryInfo.name}
          subtitle={categoryInfo.description}
          category="Template Categories"
          themeColor={themeColor}
        />

        {/* --- SECTION 2: CATEGORY NAV (Sticky Filter) --- */}
        <div className="sticky top-20 z-40 -mt-10 mb-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Suspense
                fallback={
                  <div className="h-14 w-64 animate-pulse rounded-full border border-slate-800 bg-slate-900/50" />
                }
              >
                <TemplateFilter
                  activeCategory={categorySlug}
                  categories={allCategories}
                  themeColor={themeColor}
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: PRODUCT GRID --- */}
        <section id="templates" className="container mx-auto px-4 pb-24">
          <div className="mb-10 flex items-center gap-4">
            <div
              className={cn(
                "h-8 w-1 rounded-full",
                themeColor === "emerald" && "bg-emerald-500",
                themeColor === "blue" && "bg-blue-500",
                themeColor === "rose" && "bg-rose-500",
                themeColor === "amber" && "bg-amber-500"
              )}
            />
            <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
              รายการเทมเพลต {categoryInfo.name}
            </h2>
            <span className="text-sm font-medium text-slate-500">
              ({templates.length} แบบ)
            </span>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-72 w-full animate-pulse rounded-2xl border border-slate-800/50 bg-slate-900/40"
                  />
                ))}
              </div>
            }
          >
            <TemplateGrid templates={templates} />
          </Suspense>
        </section>

        {/* --- SECTION 4: CUSTOM CTA (Upsell) --- */}
        <section className="container mx-auto mb-24 px-4">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center shadow-2xl md:p-20">
            {/* Interactive Glow effect on hover */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10",
                themeColor === "emerald" && "bg-emerald-500",
                themeColor === "blue" && "bg-blue-500",
                themeColor === "rose" && "bg-rose-500",
                themeColor === "amber" && "bg-amber-500"
              )}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
                ยังไม่เจอแบบที่ถูกใจใช่ไหม?
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-balance text-slate-400">
                เราเข้าใจว่าธุรกิจที่พิเศษต้องการดีไซน์ที่แตกต่าง ยินดีให้บริการ{" "}
                <strong
                  className={cn(
                    themeColor === "emerald" && "text-emerald-400",
                    themeColor === "blue" && "text-blue-400",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400"
                  )}
                >
                  Custom Design
                </strong>{" "}
                ออกแบบใหม่ 100% ตามโจทย์และอัตลักษณ์แบรนด์ของคุณโดยเฉพาะ
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <LineLeadForm
                  variant="button"
                  label="คุยโจทย์โปรเจกต์ Custom ฟรี"
                  className={cn(
                    "h-14 px-8 text-lg font-bold shadow-xl transition-transform hover:scale-105",
                    themeColor === "emerald" &&
                      "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/20",
                    themeColor === "blue" &&
                      "bg-blue-600 hover:bg-blue-500 shadow-blue-900/20",
                    themeColor === "rose" &&
                      "bg-rose-600 hover:bg-rose-500 shadow-rose-900/20",
                    themeColor === "amber" &&
                      "bg-amber-600 hover:bg-amber-500 shadow-amber-900/20"
                  )}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LineStickyButton />
    </div>
  );
}
