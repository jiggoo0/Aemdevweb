/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
// ✅ Fix 1: เพิ่ม ChevronRight เข้าไปใน Import
import { Rocket, Paintbrush, ShieldCheck, ChevronRight } from "lucide-react"

// 📦 Data & Utils
import { getTemplateBySlug, templatesData } from "@/constants/templates-data"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

// 🧩 Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { JsonLd } from "@/components/seo/JsonLd"

// 🧩 Page Sub-Components
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateFeatures } from "@/components/template/shared/TemplateFeatures"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import { SalesHook } from "@/components/template/shared/SalesHook"

// ✅ Define Type for ThemeColor
type ThemeColor = "emerald" | "blue" | "indigo" | "rose" | "amber" | "slate" | "red"

interface DetailPageProps {
  params: Promise<{
    template: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    template: tpl.category.toLowerCase() || "sale-page",
    slug: tpl.slug,
  }))
}

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return { title: "Template Not Found" }

  const title = `${data.title} - Professional Web Template | ${siteConfig.shortName}`

  return {
    title,
    description: data.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
    openGraph: {
      title,
      description: data.description,
      url: `${siteConfig.url}/services/${slug}`,
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  }
}

export default async function TemplateDetailPage({ params }: DetailPageProps) {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return notFound()

  // ✅ Fix: Type Casting อย่างถูกต้อง
  const themeColor = (data.themeColor as ThemeColor) || "emerald"

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-aurora-cyan/30">
      <JsonLd
        type="Product"
        data={{
          name: data.title,
          description: data.description,
          image: data.image,
          brand: {
            "@type": "Brand",
            name: siteConfig.name,
          },
          offers: {
            "@type": "Offer",
            price: data.salePrice || data.price,
            priceCurrency: "THB",
            availability: "https://schema.org/InStock",
          },
        }}
      />

      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        <TemplateHero
          title={data.title}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={themeColor}
        />

        <section className="border-y border-white/5 bg-white/[0.02] py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-prompt mb-4 text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
                ทุกสิ่งที่คุณต้องการเพื่อ{" "}
                <span
                  className={cn(
                    "transition-colors duration-500",
                    themeColor === "emerald" && "text-aurora-emerald",
                    themeColor === "blue" && "text-aurora-cyan",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400"
                  )}
                >
                  เติบโตบนโลกออนไลน์
                </span>
              </h2>
              <p className="font-anuphan text-lg font-medium text-slate-400 md:text-xl">
                เทมเพลตนี้เตรียม Infrastructure สำหรับการปิดการขายไว้ให้ครบถ้วน
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
                title="Premium UI/UX"
                description="ดีไซน์ทันสมัย ปรับแต่ง CI ได้ตามอัตลักษณ์แบรนด์"
              />
              <ServiceCard
                icon={<ShieldCheck className="text-rose-400" />}
                title="Conversion Ready"
                description="ติดตั้ง Facebook CAPI และ TikTok Pixel พร้อมใช้งาน"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <article className="space-y-32 lg:col-span-8">
              <section id="features" className="scroll-mt-32">
                <TemplateFeatures data={data} themeColor={themeColor} />
              </section>

              <section id="preview" className="scroll-mt-32">
                <div
                  className={cn(
                    "mb-10 border-l-4 pl-6 transition-colors duration-500",
                    themeColor === "emerald" && "border-aurora-emerald",
                    themeColor === "blue" && "border-aurora-cyan",
                    themeColor === "rose" && "border-rose-500",
                    themeColor === "amber" && "border-amber-500"
                  )}
                >
                  <h3 className="font-prompt text-3xl font-black text-white uppercase italic">
                    ตัวอย่างประสบการณ์การใช้งาน
                  </h3>
                  <p className="font-anuphan mt-3 text-lg font-medium text-slate-400">
                    จำลองการแสดงผลจริงบนอุปกรณ์ที่ลูกค้าของคุณใช้งาน
                  </p>
                </div>
                <Suspense
                  fallback={
                    <div className="shadow-luminous h-[600px] w-full animate-pulse rounded-[3rem] bg-white/5" />
                  }
                >
                  <DevicePreview
                    desktopSrc={data.image}
                    mobileSrc={data.mockups?.mobile || data.image}
                    title={data.title}
                    themeColor={themeColor}
                  />
                </Suspense>
              </section>

              <section className="space-y-10">
                <h3 className="font-prompt text-2xl font-black text-white uppercase italic">
                  ขั้นตอนการสั่งซื้อและติดตั้ง
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <StepItem number="01" text="เลือกเทมเพลตและชำระเงิน" />
                  <StepItem number="02" text="ส่งข้อมูลธุรกิจและรูปภาพแบรนด์" />
                  <StepItem number="03" text="ทีมงานปรับแต่งระบบ (3-7 วัน)" />
                  <StepItem number="04" text="ตรวจงานและส่งมอบ Source Code" />
                </div>
              </section>
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <TemplatePricingCard
                  title={data.title}
                  price={data.price ?? 0}
                  salePrice={data.salePrice}
                  features={data.features}
                  demoUrl={data.demoUrl || "#"}
                  themeColor={themeColor}
                />

                <div className="glass-card group overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:bg-white/[0.04]">
                  <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-aurora-cyan/10 blur-2xl transition-all group-hover:bg-aurora-cyan/20" />
                  <h4
                    className={cn(
                      "font-prompt mb-4 flex items-center gap-2 font-black tracking-widest uppercase",
                      themeColor === "emerald" && "text-aurora-emerald",
                      themeColor === "blue" && "text-aurora-cyan",
                      themeColor === "rose" && "text-rose-400",
                      themeColor === "amber" && "text-amber-400"
                    )}
                  >
                    Developer Insight
                  </h4>
                  <p className="font-anuphan leading-relaxed text-slate-400">
                    เทมเพลตนี้รองรับการทำ{" "}
                    <span className="font-bold text-slate-100 italic">
                      SEO Semantic HTML
                    </span>{" "}
                    ติดหน้าแรก Google ได้ง่ายและยั่งยืน
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <SalesHook data={data} isTemplate={true} themeColor={themeColor} />
      </main>

      <LineStickyButton />
    </div>
  )
}

// --- SUB-COMPONENTS ---

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
    <div className="group glass-card rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-10 transition-all duration-500 hover:bg-white/[0.05] hover:shadow-luminous">
      <div className="mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="font-prompt mb-3 text-2xl font-black text-white uppercase italic">
        {title}
      </h3>
      <p className="font-anuphan text-base leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  )
}

function StepItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.06] hover:border-white/10">
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
