/** @format */

import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTemplateComponent } from "@/lib/template-registry"
import { getTemplateData, getAllTemplates } from "@/lib/template"

/**
 * กำหนดประเภทข้อมูลตามมาตรฐาน Next.js 15
 * params ต้องถูกจัดการแบบ Promise เพื่อรองรับการทำ Async Request
 */
interface TemplatePageProps {
  params: Promise<{
    slug: string
  }>
}

/**
 * 1. ระบบจัดการข้อมูลชุดคำอธิบาย (Metadata)
 * ดึงข้อมูลจากไฟล์ data.ts ของแต่ละเทมเพลตมาทำ SEO โดยเฉพาะ
 */
export async function generateMetadata({
  params,
}: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params
  const data = await getTemplateData(slug)

  // กรณีไม่พบข้อมูล ป้องกันระบบพังด้วยการส่งค่าพื้นฐานกลับไป
  if (!data || !data.hero) {
    return { title: "ไม่พบพิกัดเทมเพลต | AEMDEVWEB" }
  }

  return {
    title: `${data.hero.title} - ตัวอย่างพิกัดหน้าเว็บ | AEMDEVWEB`,
    description: data.hero.subtitle || data.hero.description,
    openGraph: {
      title: data.hero.title,
      description: data.hero.subtitle || data.hero.description,
      images: [`/images/templates/${slug}.webp`],
      type: "website",
    },
  }
}

/**
 * 2. การทำระบบเตรียมข้อมูลล่วงหน้า (Static Site Generation)
 * ลงทะเบียน Slug ทั้งหมดที่มีในระบบ เพื่อให้ค่า LCP ต่ำกว่า 1 วินาที
 */
export async function generateStaticParams() {
  const templates = await getAllTemplates()
  return templates.map((template) => ({
    slug: template.id,
  }))
}

/**
 * 3. ส่วนแสดงผลหลัก (Page Component)
 */
export default async function TemplatePage({ params }: TemplatePageProps) {
  // คลายค่า slug ออกจาก Promise
  const { slug } = await params

  // ดึงข้อมูลและชุดแสดงผลจาก Registry
  const data = await getTemplateData(slug)
  const SelectedTemplate = getTemplateComponent(slug)

  /**
   * จุดเช็คความชัวร์ (ทักตรงๆ):
   * หากชื่อโฟลเดอร์ใน _components ไม่ตรงกับ id ในไฟล์ทะเบียน หน้าจะขาวทันที
   * ผมจึงดักด้วย notFound() เพื่อให้ระบบวิ่งไปหน้า 404 แทนการปล่อยให้ Error
   */
  if (!data || !SelectedTemplate) {
    notFound()
  }

  return (
    <main className="thai-font-smoothing min-h-screen bg-white">
      {/* ส่งก้อนข้อมูลเข้าสู่คอมโพเนนต์เทมเพลตที่เลือก */}
      <SelectedTemplate data={data} />
    </main>
  )
}
