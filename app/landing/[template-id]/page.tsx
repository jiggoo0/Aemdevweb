/** @format */
import React from "react"
import { notFound } from "next/navigation"
import { registry } from "./registry"
import { normalizeData, NormalizeWrapper } from "./normalize"

// Import Mocks
import { starterMock } from "./mocks/starter"
import { cafeMock } from "./mocks/cafe"
import { clinicMock } from "./mocks/clinic"
import { constructionMock } from "./mocks/construction"
import { realEstateMock } from "./mocks/real-estate"

/**
 * 🛠️ Data Fetcher: รวมแหล่งข้อมูลทั้งหมด (Single Source of Truth)
 */
async function fetchLandingData(id: string) {
  const allMocks: Record<string, any> = {
    ...starterMock,
    ...cafeMock,
    ...clinicMock,
    ...constructionMock,
    ...realEstateMock,
  }

  let data = allMocks[id]

  // Smart Fallback สำหรับการทดสอบผ่าน Keyword ใน URL
  if (!data) {
    const lowerId = id.toLowerCase()
    if (lowerId.includes("estate")) data = Object.values(realEstateMock)[0]
    else if (lowerId.includes("cafe")) data = Object.values(cafeMock)[0]
    else if (lowerId.includes("clinic")) data = Object.values(clinicMock)[0]
    else if (lowerId.includes("construction"))
      data = Object.values(constructionMock)[0]
    else if (lowerId.includes("starter")) data = Object.values(starterMock)[0]
  }

  return data || null
}

interface PageProps {
  params: Promise<{ "template-id": string }>
}

export default async function LandingPage({ params }: PageProps) {
  // ⚠️ Next.js 15: ต้อง await params เสมอ
  const { "template-id": id } = await params
  const rawData = await fetchLandingData(id)

  if (!rawData) {
    console.warn(`[LandingPage] Routing to 404: No data for ID: ${id}`)
    return notFound()
  }

  // 🟢 1. จัดระเบียบข้อมูล (Layer Separation: Business & AEM Service)
  const data = normalizeData(rawData)

  /**
   * 🟢 2. ดึง Component และทำ Type Casting (Fix TS2322 Never Error)
   * เราเปลี่ยนเป็น React.ComponentType<{ data: any }> เพื่อบอก TypeScript ว่า
   * ไม่ว่า Variant จะมี Type ซับซ้อนแค่ไหน คอมโพเนนต์นี้รับ Prop 'data' ได้แน่นอน
   */
  const VariantComponent = registry[
    data.variant as keyof typeof registry
  ] as React.ComponentType<{ data: any }>

  if (!VariantComponent) {
    console.error(
      `[LandingPage] Configuration Error: Variant "${data.variant}" not registered`
    )
    return notFound()
  }

  return (
    <NormalizeWrapper>
      {/* 🟢 3. Render Variant ที่เลือก พร้อมส่ง Data ที่ถูก Normalize แล้ว */}
      <VariantComponent data={data} />
    </NormalizeWrapper>
  )
}

/** ─── 🚀 DYNAMIC METADATA (SEO) ─── */
export async function generateMetadata({ params }: PageProps) {
  const { "template-id": id } = await params
  const rawData = await fetchLandingData(id)

  if (!rawData) return { title: "Page Not Found | AEM DEV" }

  const data = normalizeData(rawData)
  const name =
    typeof data.name === "string"
      ? data.name
      : data.name?.th || data.name?.en || "AEM Template"

  return {
    title: `${name} | Template Preview by AEM DEV`,
    description: `ตัวอย่างหน้าเว็บไซต์ ${name} พัฒนาด้วย Next.js 15 พร้อมมาตรฐานวิศวกรรมจาก AEM DEV`,
    openGraph: {
      title: `${name} - Business Landing Page`,
      description: "Preview your future website architecture with AEM DEV",
      type: "website",
    },
  }
}
