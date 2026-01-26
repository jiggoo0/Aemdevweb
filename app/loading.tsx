/** @format */

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * โครงสร้างส่วนแสดงผลระหว่างรอข้อมูล (v2026 Specialist Edition)
 * ออกแบบมาเพื่อรักษาโครงสร้างลำดับความสำคัญของเนื้อหาให้แม่นยำที่สุด
 * เน้นการลดคะแนน CLS และเพิ่มความลื่นไหลในการแสดงผล (Perceived Performance)
 */
export default function Loading() {
  return (
    <div className="animate-in fade-in container mx-auto space-y-20 px-6 py-12 duration-700">
      {/* 1. Hero Section Skeleton: จำลองโครงสร้างส่วนหัวเว็บไซต์ */}
      <section className="space-y-6 pt-16 text-center md:pt-24 md:text-left">
        <div className="space-y-3">
          {/* ป้ายระบุหมวดหมู่ (Category Badge) */}
          <Skeleton className="mx-auto h-4 w-32 rounded-full bg-slate-100 md:mx-0" />

          {/* หัวข้อหลัก (H1 Placeholder): ใช้สีที่เข้มขึ้นเล็กน้อยเพื่อบอกลำดับความสำคัญ */}
          <Skeleton className="mx-auto h-16 w-full max-w-[700px] rounded-2xl bg-slate-200 md:mx-0" />
        </div>

        {/* หัวข้อรอง (Sub-heading) */}
        <Skeleton className="mx-auto h-6 w-full max-w-[500px] rounded-lg bg-slate-100 md:mx-0" />

        {/* ปุ่มดำเนินการหลัก (CTA Buttons) */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row md:justify-start">
          <Skeleton className="h-14 w-44 rounded-full bg-emerald-100/50" />
          <Skeleton className="h-14 w-44 rounded-full bg-slate-100" />
        </div>
      </section>

      {/* 2. Services Grid Skeleton: จำลองส่วนบริการและการจัดการระบบ */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/50 p-8"
          >
            {/* กล่องไอคอน (Service Icon) */}
            <Skeleton className="h-14 w-14 rounded-2xl bg-slate-100" />

            <div className="space-y-3">
              {/* ชื่อบริการ (Service Title) */}
              <Skeleton className="h-7 w-3/4 rounded-md bg-slate-200" />

              {/* รายละเอียดเนื้อหา (Description Lines) */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded-sm bg-slate-50" />
                <Skeleton className="h-4 w-5/6 rounded-sm bg-slate-50" />
              </div>
            </div>

            {/* ลิงก์อ่านต่อ */}
            <div className="pt-4">
              <Skeleton className="h-5 w-24 rounded-full bg-slate-100" />
            </div>
          </div>
        ))}
      </section>

      {/* 3. Stats Section Skeleton: ส่วนแสดงผลลัพธ์และความเชื่อถือ */}
      <div className="flex flex-col items-center space-y-6 rounded-[3rem] bg-slate-900/5 p-16">
        <Skeleton className="h-5 w-48 rounded-full bg-slate-200" />
        <Skeleton className="h-14 w-full max-w-[400px] rounded-xl bg-slate-300" />

        <div className="grid w-full grid-cols-2 gap-10 pt-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="h-12 w-20 rounded-lg bg-slate-200" />
              <Skeleton className="h-3 w-16 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
