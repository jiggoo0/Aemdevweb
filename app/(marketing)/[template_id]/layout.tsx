// app/(marketing)/[template_id]/layout.tsx
import React from "react"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: Promise<{ template_id: string }>
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  // ❌ ลบ Header และ Footer ออกจากไฟล์นี้ทั้งหมด
  // เพื่อให้แต่ละ Template (Starter, Cafe, Clinic) แสดง Header ของตัวเองได้อิสระ

  return (
    <div className="min-h-screen bg-white">
      {/* 🚀 Main Content Area */}
      <main role="main">{children}</main>
    </div>
  )
}
