/** @format */

import type { ReactNode } from "react"

interface MarketingLayoutProps {
  children: ReactNode
}

/**
 * Marketing Layout (Clean Wrapper Mode)
 *
 * - ไม่มี Navbar / Footer / Floating Button
 * - เหมาะกับ Landing Page, Campaign Page, หรือ Page เฉพาะกิจ
 * - ให้ child pages คุม layout ได้ 100%
 */
export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      {/* Main Content Area */}
      <main className="flex-1 transition-all duration-500">{children}</main>
    </div>
  )
}
