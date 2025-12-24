// app/(marketing)/[template_id]/layout.tsx
import React from "react"
import { TEMPLATE_REGISTRY } from "./_config/registry"

interface MarketingLayoutProps {
  children: React.ReactNode
  params: Promise<{ template_id: string }>
}

export default async function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  const { template_id } = await params
  const entry = TEMPLATE_REGISTRY[template_id.toLowerCase()]

  // ดึงค่าสีหลักจาก Config (ถ้าไม่มีให้ใช้ Slate-900 เป็นค่าพื้นฐาน)
  const brandColor = entry?.config?.themeColor || "#0f172a"
  const brandName = entry?.config?.name || "MARKETING_UNIT"

  return (
    <div className="min-h-screen bg-white">
      {/* 🛠️ Dynamic Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="text-xl font-black uppercase tracking-tighter text-slate-900">
            {brandName}
            <span style={{ color: brandColor }}>.</span>
          </div>

          <button
            style={{ backgroundColor: brandColor }}
            className="rounded-none px-6 py-2 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:opacity-90 active:scale-95"
          >
            CONNECT_NOW
          </button>
        </div>
      </nav>

      {/* 🚀 Main Content Area */}
      <main
        role="main"
        className="duration-700 animate-in fade-in slide-in-from-bottom-2"
      >
        {children}
      </main>

      {/* 🏁 Industrial Footer */}
      <footer className="border-t bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              © 2025 JP-ENGINE // SYSTEM_READY
            </p>
            <div className="flex gap-4">
              <div
                className="h-2 w-2 animate-pulse rounded-full"
                style={{ backgroundColor: brandColor }}
              />
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                Status: Optimized
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
