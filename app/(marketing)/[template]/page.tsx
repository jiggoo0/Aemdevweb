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

// 🧩 Page Components
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
 * 🧬 1. Static Params Generation: Pre-render all templates at build time
 */
export async function generateStaticParams() {
  return templatesData.map((tpl) => ({
    template: tpl.category || "sale-page",
    slug: tpl.slug,
  }))
}

/**
 * 🔍 2. Dynamic Metadata: Optimized for High CTR Social Sharing
 */
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
    openGraph: {
      images: [data.image],
      title,
      description: data.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.description,
      images: [data.image],
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

  // ✅ Theme Identity: Mapping to Design System Colors
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
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased selection:bg-emerald-500/30">
      <TemplateNavbar />

      <main className="relative z-10 flex-1">
        {/* --- SECTION 1: HERO (Visual Impact) --- */}
        <TemplateHero
          title={data.title}
          subtitle={data.description}
          image={data.image}
          category={data.category}
          themeColor={themeColor}
        />

        {/* --- SECTION 2: VALUE PROPOSITIONS (Trust Signals) --- */}
        <section className="border-y border-white/5 bg-white/[0.02] py-20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="font-prompt mb-4 text-3xl font-black tracking-tighter uppercase md:text-4xl">
                ทุกสิ่งที่คุณต้องการเพื่อ{" "}
                <span
                  className={cn(
                    "transition-colors duration-500",
                    themeColor === "emerald" && "text-emerald-400",
                    themeColor === "blue" && "text-blue-400",
                    themeColor === "rose" && "text-rose-400",
                    themeColor === "amber" && "text-amber-400"
                  )}
                >
                  เติบโตบนโลกออนไลน์
                </span>
              </h2>
              <p className="font-anuphan text-lg font-medium text-slate-400">
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

        {/* --- SECTION 3: CONTENT & CONVERSION GRID (Main Layout) --- */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* 👈 LEFT: CONTENT AREA */}
            <article className="space-y-32 lg:col-span-8">
              {/* 🛠️ Features List */}
              <section id="features" className="scroll-mt-32">
                <TemplateFeatures data={data} themeColor={themeColor} />
              </section>

              {/* 📱 Interactive Preview */}
              <section id="preview" className="scroll-mt-32">
                <div
                  className={cn(
                    "mb-10 border-l-4 pl-6 transition-colors duration-500",
                    themeColor === "emerald" && "border-emerald-500",
                    themeColor === "blue" && "border-blue-500",
                    themeColor === "rose" && "border-rose-500",
                    themeColor === "amber" && "border-amber-500"
                  )}
                >
                  <h3 className="font-prompt text-3xl font-black text-white uppercase">
                    ตัวอย่างประสบการณ์การใช้งาน
                  </h3>
                  <p className="font-anuphan mt-3 text-lg font-medium text-slate-400">
                    จำลองการแสดงผลจริงบนอุปกรณ์ที่ลูกค้าของคุณใช้งาน
                  </p>
                </div>

                <Suspense
                  fallback={
                    <div className="h-[500px] w-full animate-pulse rounded-3xl bg-white/5" />
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

              {/* 🛣️ Step Process */}
              <section className="space-y-8">
                <h3 className="font-prompt text-2xl font-black text-white uppercase">
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

            {/* 👉 RIGHT: CONVERSION SIDEBAR (Sticky Engine) */}
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

                {/* Developer Insight Card */}
                <div className="glass-card rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-sm text-slate-400 backdrop-blur-xl">
                  <h4
                    className={cn(
                      "font-prompt mb-4 flex items-center gap-2 font-black tracking-widest uppercase",
                      themeColor === "emerald" && "text-emerald-400",
                      themeColor === "blue" && "text-blue-400",
                      themeColor === "rose" && "text-rose-400",
                      themeColor === "amber" && "text-amber-400"
                    )}
                  >
                    Developer Insight
                  </h4>
                  <p className="font-anuphan leading-relaxed opacity-80">
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
    <div className="group glass-card rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:bg-white/[0.05]">
      <div className="mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="font-prompt mb-3 text-xl font-black text-white uppercase">
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
    <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.05]">
      <span className="font-prompt text-2xl font-black text-slate-700 transition-colors group-hover:text-white/20">
        {number}
      </span>
      <span className="font-anuphan text-sm font-bold text-slate-300">
        {text}
      </span>
    </div>
  )
}
