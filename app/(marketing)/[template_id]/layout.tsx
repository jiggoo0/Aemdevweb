/** @format */

import React from "react"
import { getServiceBySlug } from "@/data/servicesData"
import { StickyPurchaseBar } from "@/components/marketing/StickyPurchaseBar"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: Promise<{ template_id: string }>
}

export default async function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  // 1. ดึง template_id จาก params
  const { template_id } = await params

  // 2. ค้นหาข้อมูล Config ของ Template นี้จาก Data Hub
  const serviceConfig = getServiceBySlug(template_id)

  return (
    <div className="relative min-h-screen bg-white">
      {/* 🚀 Main Content Area */}
      {/* ปล่อยให้แต่ละ Template จัดการ Header/Footer เองข้างในเพื่อความเป็นอิสระของดีไซน์ */}
      <main role="main">{children}</main>

      {/* 💳 Conversion Layer: จัดการ Error เรื่อง undefined ด้วย Fallback Values */}
      {serviceConfig && (
        <StickyPurchaseBar
          templateName={serviceConfig.title || "Standard Template"}
          // ✅ แก้ไข TS2322: ใส่ Fallback string "" หรือ "0" เพื่อป้องกันค่า undefined
          price={serviceConfig.price || "0"}
          promoPrice={serviceConfig.promoPrice || serviceConfig.price || "0"}
        />
      )}
    </div>
  )
}
