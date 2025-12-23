/** @format */
import { notFound } from "next/navigation"
import { registry } from "./registry"
import { normalizeData, NormalizeWrapper } from "./normalize" // ✅ เพิ่ม NormalizeWrapper

// Import Mocks
import { starterMock } from "./mocks/starter"
import { cafeMock } from "./mocks/cafe"
import { clinicMock } from "./mocks/clinic"
import { constructionMock } from "./mocks/construction"
import { realEstateMock } from "./mocks/real-estate"

/**
 * 🛠️ Data Fetcher: รวม Mock ข้อมูล
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

  // Smart Fallback สำหรับการทดสอบผ่าน URL (กรณีพิมพ์ ID ผิดแต่มี Keyword)
  if (!data) {
    const lowerId = id.toLowerCase()
    if (lowerId.includes("estate")) data = Object.values(realEstateMock)[0]
    else if (lowerId.includes("cafe")) data = Object.values(cafeMock)[0]
    else if (lowerId.includes("clinic")) data = Object.values(clinicMock)[0]
    else if (lowerId.includes("construction")) data = Object.values(constructionMock)[0]
  }

  return data || null
}

interface PageProps {
  params: Promise<{ "template-id": string }>
}

export default async function LandingPage({ params }: PageProps) {
  /**
   * ⚠️ Next.js 15 Requirement:
   * params ต้อง await ก่อนนำมาใช้งาน
   */
  const { "template-id": id } = await params
  const rawData = await fetchLandingData(id)

  if (!rawData) {
    console.error(`[LandingPage] 404: No data for ID: ${id}`)
    return notFound()
  }

  // 🟢 1. จัดระเบียบข้อมูล (Fill Defaults / Multi-lang)
  const data = normalizeData(rawData)

  // 🟢 2. ดึง Component ตามประเภทธุรกิจจาก Registry
  const VariantComponent = registry[data.variant as keyof typeof registry]

  if (!VariantComponent) {
    console.error(`[LandingPage] 404: Variant "${data.variant}" not found in registry`)
    return notFound()
  }

  const ComponentToRender = VariantComponent as any

  return (
    /** * ✅ ใช้ NormalizeWrapper เพื่อคุม Layout พื้นฐาน 
     * และมั่นใจว่าไม่มี Header/Footer ของเว็บหลักมาปน
     */
    <NormalizeWrapper>
      <main className="relative w-full">
        <ComponentToRender data={data} />
      </main>
    </NormalizeWrapper>
  )
}

/** ─── 🚀 DYNAMIC METADATA (SEO) ─── */
export async function generateMetadata({ params }: PageProps) {
  const { "template-id": id } = await params
  const rawData = await fetchLandingData(id)
  if (!rawData) return { title: "Landing Page Not Found" }
  
  const data = normalizeData(rawData)
  const name = typeof data.name === 'string' ? data.name : (data.name?.th || data.name?.en)
  
  return {
    title: `${name} | Preview Template`,
    description: `ระบบออกแบบเว็บไซต์อัตโนมัติโดย aemdevweb สำหรับธุรกิจ ${name}`,
  }
}
