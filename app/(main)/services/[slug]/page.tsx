/** @format */

import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { services } from "@/constants/services-data"
import { siteConfig } from "@/constants/site-config"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

/**
 * Metadata Engine: วางพิกัด SEO รายหน้าบริการ
 * ช่วยให้ Google Index ข้อมูลบริการธุรกิจ SME ได้แม่นยำ
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) return {}

  return {
    title: `${service.title} | ${siteConfig.project.shortName}`,
    description: service.description,
  }
}

/**
 * ServiceDetailPage - พิกัดเจาะลึกรายละเอียดบริการรายหมวดหมู่
 * แนวทาง: จัดการระนาบข้อมูลให้ลื่นไหล รองรับพฤติกรรมการอ่านของกลุ่มธุรกิจ
 * Identity: นายเอ็มซ่ามากส์ (Alongkorl Yomkerd)
 */
export default async function ServiceDetailPage({ params }: ServicePageProps) {
  // [FIXED]: แกะพิกัดข้อมูลจาก Promise ด้วย await ก่อนนำไปใช้งาน
  const { slug } = await params

  // ค้นหาพิกัดข้อมูลบริการจากสารบบกลาง
  const service = services.find((s) => s.slug === slug)

  // หากไม่พบพิกัด slug ในระบบ ให้ถอยไปหน้า 404 ทันที
  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* พิกัดเนื้อหาและรายละเอียดบริการ */}
        <section className="max-w-4xl space-y-12 text-left">
          <div className="space-y-6">
            <div className="font-heading inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[10px] font-black tracking-widest text-emerald-600 uppercase italic">
              Service Registry v2026
            </div>

            <h1 className="font-heading text-5xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
              {service.title}
            </h1>

            <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              {service.description}
            </p>
          </div>

          <div className="h-px w-full bg-slate-100" />

          {/* พิกัดโครงสร้างเนื้อหาเชิงลึก (รายละเอียดงานระบบ) */}
          <div className="font-body prose prose-slate prose-lg max-w-none font-medium text-slate-600">
            {/* ส่วนเรนเดอร์เนื้อหาจาก Content Layer หรือ Markdown */}
            <div className="space-y-8">
              {service.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="font-heading mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-[10px] font-black text-white">
                    0{index + 1}
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
