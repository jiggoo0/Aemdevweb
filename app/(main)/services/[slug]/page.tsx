/** @format */

import React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, CheckCircle2, Zap, Target, BarChart3 } from "lucide-react"

// ดึงก้อนข้อมูลและพิกัดสัญญาข้อมูล
import { servicesData } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServiceItem } from "@/types"

/**
 * นิยามพิกัดรายละเอียดงาน
 */
interface ServiceFeature {
  name: string
  desc?: string
}

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * Metadata Engine: จัดการพิกัด SEO รายบริการ
 * ปรับเรียกใช้ thumbnail แทน image เพื่อความกริบของระบบงาน
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = (servicesData as ServiceItem[]).find((s) => s.slug === slug)

  if (!service) return { title: "ไม่พบข้อมูลบริการ" }

  return {
    title: `${service.title} | บริการจาก นายเอ็มซ่ามากส์`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.thumbnail || "/og-image.png"],
      type: "article",
    },
  }
}

/**
 * ServiceDetailPage - หน้าเจาะลึกพิกัดงานระบบ
 * เน้นภาษาคนทำงานจริง เข้าใจง่าย ไม่ลิเก
 */
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = (servicesData as ServiceItem[]).find((s) => s.slug === slug)

  if (!service) notFound()

  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* วางพิกัดข้อมูลให้ AI และระบบค้นหาเก็บรายละเอียดได้แม่นยำ */}
      <JsonLd
        type="Service"
        data={{
          name: service.title,
          description: service.description,
          provider: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
          },
        }}
      />

      {/* Hero Section: พาดหัวเน้นความแรงและพิกัดงานที่ชัดเจน */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <Link
            href="/services"
            className="group mb-12 inline-flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
          >
            <ChevronLeft
              size={14}
              className="transition-transform group-hover:-translate-x-2"
            />
            ย้อนกลับไปดูรายการบริการทั้งหมด
          </Link>

          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <h1 className="font-heading text-4xl leading-[1] font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-9xl">
              {service.title}
            </h1>
            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: รายละเอียดระบบงานและสิ่งที่ลูกค้าจะได้รับ */}
      <section className="container mx-auto px-6 pt-24 lg:pt-40">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-7">
            <div className="space-y-8">
              <h2 className="font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
                พิกัด <span className="text-emerald-500">การวางระบบงาน.</span>
              </h2>
              <div className="font-body space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  {service.description ||
                    "เรากำลังเตรียมข้อมูลพิกัดงานส่วนนี้ให้คุณ..."}
                </p>
              </div>
            </div>

            {/* รายการรายการงาน (Features) แบบ Type-Safe */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.features?.map(
                (feature: string | ServiceFeature, i: number) => (
                  <div
                    key={`feat-${i}`}
                    className="flex items-start gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-emerald-500"
                    />
                    <div>
                      <h4 className="font-heading text-sm font-black text-slate-950 uppercase italic">
                        {typeof feature === "string" ? feature : feature.name}
                      </h4>
                      {typeof feature !== "string" && feature.desc && (
                        <p className="font-body mt-1 text-xs font-bold text-slate-500">
                          {feature.desc}
                        </p>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Sidebar สำหรับปิดพิกัดการขาย */}
          <aside className="lg:col-span-5">
            <div className="shadow-3xl sticky top-32 space-y-8 rounded-[3rem] bg-slate-950 p-10 text-white shadow-slate-900/20 md:p-16">
              <div className="space-y-2">
                <p className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
                  Budget Projection
                </p>
                <h3 className="font-heading text-4xl font-black italic md:text-6xl">
                  {service.priceDisplay || "สอบถามพิกัดราคา"}
                </h3>
              </div>

              <div className="space-y-6 border-y border-white/10 py-10">
                <div className="flex items-center gap-4">
                  <Zap size={20} className="text-emerald-500" />
                  <p className="font-body text-sm font-bold">
                    วางระบบไว ออนไลน์ได้ทันใจแน่นอน
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Target size={20} className="text-emerald-500" />
                  <p className="font-body text-sm font-bold">
                    ปรับแต่งโครงสร้างให้ตรงโจทย์ธุรกิจจริง
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <BarChart3 size={20} className="text-emerald-500" />
                  <p className="font-body text-sm font-bold">
                    วัดผลงานได้จริงด้วยมาตรฐานสากล
                  </p>
                </div>
              </div>

              <button className="group font-heading w-full rounded-2xl bg-emerald-500 py-6 text-[11px] font-black tracking-[0.3em] text-slate-950 uppercase italic transition-all hover:bg-white active:scale-95">
                เริ่มวางระบบกับนายเอ็ม
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* ท้ายพิกัดหน้าเว็บ */}
      <footer className="mt-40 border-t border-slate-100 py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          Professional Service Protocol • AEMDEVWEB 2026
        </p>
      </footer>
    </main>
  )
}

/**
 * แจ้งพิกัดรายการงานทั้งหมดเพื่อทำ SSG
 */
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}
