/** @format */

import { cn } from "@/lib/utils"

interface SectionSkeletonProps {
  className?: string
  hasHeader?: boolean
}

/**
 * SectionSkeleton - ระบบรักษาความต่อเนื่องในการแสดงผล (The Stability Node)
 * -------------------------------------------------------------------------
 * แนวคิด: รักษาความเสถียรของหน้าจอเพื่อมอบประสบการณ์การเข้าชมที่ลื่นไหลระดับสูงสุด
 * จุดเด่น: ใช้เอฟเฟกต์แสงเงาที่ประณีต สื่อถึงการประมวลผลระบบที่แม่นยำ
 */
export default function SectionSkeleton({
  className,
  hasHeader = true,
}: SectionSkeletonProps) {
  return (
    <div className={cn("container mx-auto px-6 py-24 lg:py-40", className)}>
      <div className="flex flex-col gap-12">
        {/* ส่วนหัวของเนื้อหา (Header Placeholder) */}
        {hasHeader && (
          <div className="max-w-2xl space-y-4">
            <div className="h-16 w-2/3 animate-pulse rounded-2xl bg-slate-100 italic" />
            <div className="h-6 w-full animate-pulse rounded-full bg-slate-50" />
          </div>
        )}

        {/* พื้นที่แสดงผลหลักพร้อมเอฟเฟกต์แสงสะท้อนระดับพรีเมียม */}
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-50/50 p-8 ring-1 ring-slate-100">
          <div className="h-[400px] w-full" />

          {/* Shimmer Effect: ระบบกำลังประมวลผลข้อมูลเพื่อให้พร้อมต่อการแสดงผลที่รวดเร็ว */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_40px_rgba(255,255,255,0.5)]" />
        </div>

        {/* รายการจำลองในรูปแบบตารางโครงสร้าง */}
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
