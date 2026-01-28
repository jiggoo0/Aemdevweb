/** @format */

import { cn } from "@/lib/utils"

interface SectionSkeletonProps {
  className?: string
  hasHeader?: boolean
}

/**
 * SectionSkeleton - ตัวช่วยรักษาความลื่นไหลขณะรอข้อมูล
 * แนวคิด: ป้องกันหน้าจอกระตุกเพื่อให้ประสบการณ์ใช้งานซิ่งที่สุด
 * จุดเด่น: ใช้เอฟเฟกต์แสงเงาที่นุ่มนวล สื่อถึงระบบที่กำลังทำงานอย่างมีประสิทธิภาพ
 */
export default function SectionSkeleton({
  className,
  hasHeader = true,
}: SectionSkeletonProps) {
  return (
    <div className={cn("container mx-auto px-6 py-24 lg:py-40", className)}>
      <div className="flex flex-col gap-12">
        {/* ส่วนหัวของเนื้อหา (Header Skeleton) */}
        {hasHeader && (
          <div className="max-w-2xl space-y-4">
            <div className="h-16 w-2/3 animate-pulse rounded-2xl bg-slate-100 italic" />
            <div className="h-6 w-full animate-pulse rounded-full bg-slate-50" />
          </div>
        )}

        {/* พื้นที่แสดงผลหลัก (Content Body) พร้อมแสงวิ่งผ่านเพื่อให้ดูพรีเมียม */}
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-50/50 p-8 ring-1 ring-slate-100">
          <div className="h-[400px] w-full" />

          {/* Shimmer Effect: แสงสะท้อนที่ช่วยให้ลูกค้าทราบว่าระบบกำลังเตรียมความซิ่ง */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_40px_rgba(255,255,255,0.5)]" />
        </div>

        {/* รายการจำลองด้านล่าง (Grid Skeleton) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={`skeleton-item-${i}`}
              className="h-48 animate-pulse rounded-3xl bg-slate-50 ring-1 ring-slate-100"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
