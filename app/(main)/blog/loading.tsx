/** @format */
import React from "react"
import { Cpu } from "lucide-react" // ✅ ลบ Terminal ออกเพื่อแก้ Warning

export default function Loading() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans antialiased">
      {/* 🛠️ BACKGROUND GRID DECOR (สไตล์กระดาษไขเขียนแบบ) */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-40 [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        {/* ─── 01. HEADER SKELETON (หัวข้อหน้า) ─── */}
        <div className="mb-20 space-y-8">
          {/* Badge Skeleton */}
          <div className="h-10 w-48 animate-pulse border-2 border-slate-300 bg-slate-200 shadow-[4px_4px_0px_0px_#e2e8f0]" />

          <div className="space-y-4">
            {/* Title Skeleton */}
            <div className="h-20 w-full max-w-2xl animate-pulse bg-slate-900/10 md:h-32" />
            {/* Subtitle Skeleton */}
            <div className="h-6 w-full max-w-lg animate-pulse bg-slate-200" />
          </div>
        </div>

        {/* ─── 02. GRID SKELETON (โครงร่างการ์ด 6 ใบ) ─── */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-14">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group relative flex flex-col border-[6px] border-slate-200 bg-white p-6 shadow-[10px_10px_0px_0px_#f1f5f9]"
            >
              {/* Image Skeleton with Shimmer Effect */}
              <div className="relative mb-8 aspect-[16/10] overflow-hidden border-b-4 border-slate-200 bg-slate-100">
                {/* Shimmer Overlay: วิ่งจากซ้ายไปขวา */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>

              {/* Meta Skeleton (Category & Ref) */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-slate-100 pb-4">
                <div className="h-4 w-20 animate-pulse bg-slate-200" />
                <div className="h-4 w-12 animate-pulse bg-slate-100" />
              </div>

              {/* Content Skeleton (Title & Description) */}
              <div className="space-y-4">
                <div className="h-8 w-3/4 animate-pulse bg-slate-200" />
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse bg-slate-100" />
                  <div className="h-4 w-5/6 animate-pulse bg-slate-100" />
                </div>
              </div>

              {/* Footer Skeleton (Stats & Button) */}
              <div className="mt-10 flex items-center justify-between border-t-2 border-slate-100 pt-6">
                <div className="h-10 w-24 animate-pulse bg-slate-100" />
                <div className="h-12 w-12 animate-pulse bg-slate-200" />
              </div>
            </div>
          ))}
        </div>

        {/* ─── 03. SYSTEM STATUS INDICATOR (มุมขวาล่าง) ─── */}
        <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4 border-4 border-slate-900 bg-white px-6 py-3 shadow-[8px_8px_0px_0px_#0F172A]">
          <div className="relative">
            {/* ใช้ animate-spin-slow ที่ตั้งค่าไว้ใน tailwind.config.ts */}
            <Cpu className="h-6 w-6 animate-spin-slow text-[#F97316]" />
            <div className="absolute inset-0 animate-ping rounded-full bg-[#F97316]/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              System_Loading
            </span>
            <span className="font-mono text-xs font-bold uppercase text-slate-900">
              Fetching_Registry...
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
