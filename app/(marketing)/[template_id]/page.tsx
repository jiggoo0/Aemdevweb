import { notFound } from "next/navigation"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface Props {
  params: Promise<{ template_id: string }>
}

// 🛰️ Dynamic SEO: ดึงค่าจาก config.ts ของแต่ละโฟลเดอร์มาใช้
export async function generateMetadata({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return {}

  return {
    title: entry.config.metadata.title,
    description: entry.config.metadata.description,
    openGraph: {
      images: [entry.config.metadata.ogImage],
    },
  }
}

// ⚡ Static Generation
export async function generateStaticParams() {
  return Object.keys(TEMPLATE_REGISTRY).map((id) => ({ template_id: id }))
}

export default async function MarketingPage({ params }: Props) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  if (!entry) return notFound()

  const SelectedTemplate = entry.component

  return (
    <div className="selection:bg-slate-900 selection:text-white">
      {/* ส่งข้อมูล config เข้าไปใน Template เป็น Props ได้เลย */}
      <SelectedTemplate data={entry.config} />
    </div>
  )
}
