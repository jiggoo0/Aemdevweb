/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Rocket, Paintbrush, ShieldCheck } from "lucide-react"

// 📦 Data & Utils
import { getTemplateBySlug, templatesData } from "@/constants/templates-data"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

// 🧩 Layout Components
import { TemplateNavbar } from "@/components/template/shared/TemplateNavbar"
import { Footer } from "@/components/shared/Footer"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

// 🧩 Page Components (Updated Paths)
import { TemplateHero } from "@/components/template/marketplace/TemplateHero"
import { TemplateFeatures } from "@/components/template/shared/TemplateFeatures"
import { DevicePreview } from "@/components/template/shared/DevicePreview"
import { TemplatePricingCard } from "@/components/template/shared/TemplatePricingCard"
import { SalesHook } from "@/components/template/shared/SalesHook"

interface DetailPageProps {
  params: Promise<{
    template: string
    slug: string
  }>
}

/**
 * 🧬 1. Static Params Generation
 */
export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    template: tpl.category || "sale-page",
    slug: tpl.slug,
  }))
}

/**
 * 🔍 2. Dynamic Metadata
 */
export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return { title: "Template Not Found" }

  const title = `${data.title} - Sales Page Template | ${siteConfig.shortName}`
  return {
    title,
    description: data.description,
    openGraph: {
      images: [data.image],
      title,
      description: data.description,
    },
  }
}

/**
 * 🚀 3. Main Detail Page Component
 */
export default async function TemplateDetailPage({ params }: DetailPageProps) {
  const { slug } = await params
  const data = getTemplateBySlug(slug)

  if (!data) return notFound()

  // ✅ Theme Identity
  // ✅ Fixed Error TS2322: ใช้ Type Assertion เพื่อระบุกลุ่มสีที่ยอมรับ
  const themeColor =
    (data.themeColor as
      | "emerald"
      | "blue"
      | "indigo"
      | "rose"
      | "amber"
      | "slate"
      | "red") || "emerald"

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased">
      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* --- SECTION 1: HERO --- */}
        <TemplateHero
          title={data.title}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={themeColor}
        />

        {/* --- SECTION 2: VALUE PROPOSITIONS --- */}
        <section className="border-y border-slate-900 bg-slate-900/20 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                ทุกสิ่งที่คุณต้องการเพื่อ{" "}
                <span
                  className={cn(
                    themeColor === "emerald" && "text-emerald-400",
                    themeColor === "blue" && "text-blue-400",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400"
                  )}
                >
                  เติบโตบนโลกออนไลน์
                </span>
              </h2>
              <p className="text-slate-400">
                เทมเพลตนี้เตรียม Infrastructure สำหรับการปิดการขายไว้ให้ครบถ้วน
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ServiceCard
                icon={<Rocket className="text-emerald-400" />}
                title="High-Speed"
                description="คะแนน Google PageSpeed 90+ โหลดไวใน 0.5 วินาที"
              />
              <ServiceCard
                icon={<Paintbrush className="text-blue-400" />}
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

        {/* --- SECTION 3: CONTENT & CONVERSION GRID --- */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* 👈 LEFT: CONTENT AREA */}
            <article className="space-y-32 lg:col-span-8">
              {/* Features List */}
              <section id="features" className="scroll-mt-32">
                <TemplateFeatures data={data} themeColor={themeColor} />
              </section>

              {/* Interactive Preview */}
              <section id="preview" className="scroll-mt-32">
                <div
                  className={cn(
                    "mb-10 border-l-4 pl-6",
                    themeColor === "emerald" && "border-emerald-500",
                    themeColor === "blue" && "border-blue-500",
                    themeColor === "rose" && "border-rose-500",
                    themeColor === "amber" && "border-amber-500"
                  )}
                >
                  <h3 className="text-3xl font-bold text-white">
                    ตัวอย่างประสบการณ์การใช้งาน
                  </h3>
                  <p className="mt-3 text-lg text-slate-400">
                    จำลองการแสดงผลจริงบนอุปกรณ์ที่ลูกค้าของคุณใช้งาน
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-3xl bg-slate-900/50" />
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

              {/* Step Process */}
              <section className="space-y-8">
                <h3 className="text-2xl font-bold">
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

            {/* 👉 RIGHT: CONVERSION SIDEBAR */}
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

                <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 text-sm text-slate-400 backdrop-blur-md">
                  <h4
                    className={cn(
                      "mb-4 flex items-center gap-2 font-bold",
                      themeColor === "emerald" && "text-emerald-400",
                      themeColor === "blue" && "text-blue-400",
                      themeColor === "rose" && "text-rose-400",
                      themeColor === "amber" && "text-amber-400"
                    )}
                  >
                    Developer Insight
                  </h4>
                  <p className="leading-relaxed">
                    เทมเพลตนี้รองรับการทำ{" "}
                    <span className="font-bold text-slate-100">
                      SEO Semantic HTML
                    </span>{" "}
                    ติดหน้าแรก Google ได้ง่ายและยั่งยืน
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* --- SECTION 4: FINAL CALL TO ACTION --- */}
        <SalesHook data={data} isTemplate={true} themeColor={themeColor} />
      </main>

      <Footer />
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
    <div className="group rounded-[2rem] border border-slate-800 bg-slate-950 p-8 transition-all hover:bg-slate-900/50">
      <div className="mb-6 inline-block rounded-2xl bg-slate-900 p-4 transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  )
}

function StepItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
      <span className="text-2xl font-black text-slate-800">{number}</span>
      <span className="text-sm font-medium text-slate-300">{text}</span>
    </div>
  )
}
