/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

// 📦 Data & Utils
import {
  getCategoryInfo,
  getTemplatesByCategory,
  categoriesData,
} from "@/constants/templates-data"
import { siteConfig } from "@/constants/site-config"

// 🧩 Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateGrid } from "@/components/template/marketplace/TemplateGrid"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// ✅ Define Type for ThemeColor to avoid 'any'
type ThemeColor = "emerald" | "blue" | "indigo" | "rose" | "amber" | "slate" | "red"

interface CategoryPageProps {
  params: Promise<{ template: string }>
}

export async function generateStaticParams() {
  return categoriesData.map((cat) => ({
    template: cat.slug,
  }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { template } = await params
  const category = getCategoryInfo(template)

  if (!category) return { title: "Category Not Found" }

  return {
    title: `${category.name} Templates | ${siteConfig.shortName}`,
    description: category.description,
    openGraph: {
      title: `${category.name} - ${siteConfig.name}`,
      description: category.description,
      url: `${siteConfig.url}/${template}`,
      images: [siteConfig.ogImage],
    },
  }
}

export default async function TemplateCategoryPage({
  params,
}: CategoryPageProps) {
  const { template } = await params
  const category = getCategoryInfo(template)
  const templates = getTemplatesByCategory(template)

  if (!category) return notFound()

  // ✅ Fix: Type Casting อย่างถูกต้อง
  const themeColor = (category.themeColor as ThemeColor) || "emerald"

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-aurora-cyan/30">
      <TemplateNavbar />

      <main className="flex-1">
        <TemplateHero
          title={category.name}
          subtitle={category.description}
          category={category.slug}
          themeColor={themeColor}
          image="/images/og-image.png"
        />

        <section className="container mx-auto px-4 py-20">
          <div className="mb-10 border-l-4 border-slate-700 pl-6">
            <h2 className="font-prompt text-3xl font-black text-white uppercase italic">
              All Templates
            </h2>
            <p className="font-anuphan mt-2 text-slate-400">
              เทมเพลตทั้งหมดในหมวด {category.name}
            </p>
          </div>

          <TemplateGrid initialTemplates={templates} />
        </section>
      </main>

      <LineStickyButton />
    </div>
  )
}
