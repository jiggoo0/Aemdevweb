/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Rocket, Paintbrush, ShieldCheck, ChevronRight } from "lucide-react"

// 📦 Data & Utils
import { getServiceBySlug, servicesData } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

// 🧩 Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

// 🧩 Page Sub-Components (Reusing Template System)
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateFeatures } from "@/components/template/shared/TemplateFeatures"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import { SalesHook } from "@/components/template/shared/SalesHook"

// ✅ Define Theme Color Type
type ThemeColor =
  | "emerald"
  | "blue"
  | "indigo"
  | "rose"
  | "amber"
  | "slate"
  | "red"

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * 🎨 Helper: Map Service Slug to Theme Color
 */
const getThemeColor = (slug: string): ThemeColor => {
  switch (slug) {
    case "corporate":
      return "blue"
    case "food-beverage":
      return "amber"
    case "health-beauty":
      return "rose"
    case "internal-system":
      return "indigo"
    default:
      return "emerald"
  }
}

/**
 * 🧬 1. Static Params Generation
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

/**
 * 🔍 2. Dynamic Metadata
 */
export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getServiceBySlug(slug)

  if (!data) return { title: "Service Not Found" }

  const title = `${data.title} | ${siteConfig.shortName}`
  return {
    title,
    description: data.description,
    openGraph: {
      images: [data.mockups.desktop],
      title,
      description: data.description,
      type: "website",
      url: `${siteConfig.url}/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.description,
      images: [data.mockups.desktop],
    },
  }
}

/**
 * 🚀 3. Main Service Detail Page
 */
export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params
  const data = getServiceBySlug(slug)

  if (!data) return notFound()

  // ✅ Theme Identity
  const themeColor = getThemeColor(slug)

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-aurora-cyan/30">
      {/* 🛠️ SEO Schema for Service */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: data.title,
          description: data.longDescription || data.description,
          image: data.mockups.desktop,
          url: `${siteConfig.url}/services/${slug}`,
          priceRange: `฿${data.priceStart.toLocaleString()} - ฿${(
            data.priceStart * 2
          ).toLocaleString()}`,
          address: {
            "@type": "PostalAddress",
            addressCountry: "TH",
          },
        }}
      />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* --- SECTION 1: HERO --- */}
        <TemplateHero
          title={data.title}
          subtitle={data.description}
          image={data.mockups.desktop}
          category="Service"
          themeColor={themeColor}
        />

        {/* --- SECTION 2: VALUE PROPOSITIONS --- */}
        <section className="border-y border-white/5 bg-white/[0.02] py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-prompt mb-4 text-3xl font-black tracking-tighter uppercase md:text-4xl">
                บริการที่ช่วยให้ธุรกิจคุณ{" "}
                <span
                  className={cn(
                    "transition-colors duration-500",
                    themeColor === "emerald" && "text-aurora-emerald",
                    themeColor === "blue" && "text-blue-400",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400",
                    themeColor === "indigo" && "text-indigo-400"
                  )}
                >
                  ไปได้ไกลกว่าเดิม
                </span>
              </h2>
              <p className="font-anuphan text-lg font-medium text-slate-400">
                เราเตรียม Infrastructure และเครื่องมือที่ดีที่สุดไว้ให้คุณแล้ว
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ServiceCard
                icon={<Rocket className="text-aurora-emerald" />}
                title="High-Speed"
                description="คะแนน Google PageSpeed 90+ โหลดไวใน 0.5 วินาที"
              />
              <ServiceCard
                icon={<Paintbrush className="text-aurora-cyan" />}
                title="Premium Standard"
                description="งานดีไซน์และโค้ดคุณภาพสูง มาตรฐานสากล"
              />
              <ServiceCard
                icon={<ShieldCheck className="text-rose-400" />}
                title="Business Ready"
                description="ติดตั้งเครื่องมือการตลาดพร้อมลุยทันที"
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CONTENT & GRID --- */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* 👈 LEFT: CONTENT AREA */}
            <article className="space-y-32 lg:col-span-8">
              {/* Features List */}
              <section id="features" className="scroll-mt-32">
                {/* Note: Reuse TemplateFeatures (ensure it handles ServiceItem structure) */}
                <TemplateFeatures
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  data={data as any}
                  themeColor={themeColor}
                />
              </section>

              {/* Interactive Preview */}
              <section id="preview" className="scroll-mt-32">
                <div
                  className={cn(
                    "mb-10 border-l-4 pl-6 transition-colors duration-500",
                    themeColor === "emerald" && "border-aurora-emerald",
                    themeColor === "blue" && "border-blue-500",
                    themeColor === "rose" && "border-rose-500",
                    themeColor === "amber" && "border-amber-500",
                    themeColor === "indigo" && "border-indigo-500"
                  )}
                >
                  <h3 className="font-prompt text-3xl font-black text-white uppercase italic">
                    ตัวอย่างผลงานจริง
                  </h3>
                  <p className="font-anuphan mt-3 text-lg font-medium text-slate-400">
                    ดูตัวอย่างงานที่เราส่งมอบให้กับลูกค้าในแพ็กเกจนี้
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-3xl bg-white/5" />
                  }
                >
                  <DevicePreview
                    desktopSrc={data.mockups.desktop}
                    mobileSrc={data.mockups.mobile}
                    title={data.title}
                    themeColor={themeColor}
                  />
                </Suspense>
              </section>

              {/* Step Process */}
              <section className="space-y-8">
                <h3 className="font-prompt text-2xl font-black text-white uppercase italic">
                  ขั้นตอนการเริ่มงาน
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <StepItem number="01" text="เลือกแพ็กเกจและมัดจำ" />
                  <StepItem number="02" text="ส่งข้อมูลธุรกิจและบรีฟงาน" />
                  <StepItem number="03" text="ทีมงานพัฒนาและปรับแก้" />
                  <StepItem number="04" text="ส่งมอบงานพร้อมคู่มือ" />
                </div>
              </section>
            </article>

            {/* 👉 RIGHT: SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <TemplatePricingCard
                  title={data.title}
                  price={data.priceStart}
                  features={data.features}
                  demoUrl="#" // Services might not have a direct demo URL
                  themeColor={themeColor}
                />

                <div className="glass-card rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-sm text-slate-400 backdrop-blur-xl">
                  <h4
                    className={cn(
                      "font-prompt mb-4 flex items-center gap-2 font-black tracking-widest uppercase",
                      themeColor === "emerald" && "text-aurora-emerald",
                      themeColor === "blue" && "text-blue-400",
                      themeColor === "rose" && "text-rose-400",
                      themeColor === "amber" && "text-amber-400",
                      themeColor === "indigo" && "text-indigo-400"
                    )}
                  >
                    Expert Insight
                  </h4>
                  <p className="font-anuphan leading-relaxed opacity-80">
                    {data.longDescription}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* --- SECTION 4: FINAL CTA --- */}
        <SalesHook
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={data as any}
          isTemplate={false}
          themeColor={themeColor}
        />
      </main>

      <LineStickyButton />
    </div>
  )
}

// --- 🧩 SUB-COMPONENTS ---

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group glass-card rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:bg-white/[0.05] hover:shadow-luminous">
      <div className="mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="font-prompt mb-3 text-xl font-black text-white uppercase italic">
        {title}
      </h3>
      <p className="font-anuphan text-sm leading-relaxed text-slate-400 opacity-80">
        {description}
      </p>
    </div>
  )
}

function StepItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/10">
      <span className="font-prompt text-3xl font-black text-slate-800 transition-colors group-hover:text-aurora-cyan/40">
        {number}
      </span>
      <span className="font-anuphan text-base font-bold text-slate-300">
        {text}
      </span>
      <ChevronRight className="ml-auto h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1" />
    </div>
  )
}
