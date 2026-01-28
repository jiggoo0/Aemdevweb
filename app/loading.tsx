/** @format */

import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

/**
 * Loading: ระบบจัดการหน้าจอระหว่างรอข้อมูล (Specialist Edition 2026)
 * แนวทาง: ใช้การไล่ระดับความเข้มของสีเพื่อระบุลำดับความสำคัญของเนื้อหา
 * เทคนิค: เน้นความเรียบง่าย ไม่แฟนซี เพื่อความรวดเร็วในการแสดงผลครั้งแรก
 */
export default function Loading() {
  return (
    <div className="container mx-auto animate-pulse space-y-24 px-6 py-16 opacity-80 transition-opacity duration-1000">
      {/* 1. Hero Section Skeleton: จำลองส่วนพาดหัวและแผนงานหลัก */}
      <section className="flex flex-col gap-10 pt-12 md:flex-row md:items-center">
        <div className="flex-1 space-y-8 text-left">
          <div className="space-y-4">
            {/* ป้ายระบุพิกัดงาน (Badge Placeholder) */}
            <Skeleton className="h-6 w-40 rounded-full bg-slate-100" />

            {/* หัวข้อแบรนด์หรือบริการ (Heading Placeholder) */}
            <div className="space-y-3">
              <Skeleton className="h-16 w-full max-w-xl rounded-2xl bg-slate-200" />
              <Skeleton className="h-16 w-3/4 rounded-2xl bg-slate-200" />
            </div>
          </div>

          {/* รายละเอียดแผนงาน (Description Placeholder) */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-full max-w-lg rounded-md bg-slate-100" />
            <Skeleton className="h-5 w-2/3 rounded-md bg-slate-100" />
          </div>

          {/* ปุ่มดำเนินการ (Action Buttons Placeholder) */}
          <div className="flex items-center gap-4 pt-4">
            <Skeleton className="h-14 w-48 rounded-2xl bg-emerald-100/50" />
            <Skeleton className="h-14 w-40 rounded-2xl bg-slate-100" />
          </div>
        </div>

        {/* ส่วนภาพกราฟิกหรือเครื่องยนต์ (Visual Side Placeholder) */}
        <div className="hidden flex-1 justify-end md:flex">
          <Skeleton className="h-[450px] w-full max-w-sm rounded-[3rem] bg-slate-50 shadow-sm" />
        </div>
      </section>

      {/* 2. Services Grid Skeleton: จำลองชุดข้อมูลแพ็กเกจเช่าเว็บไซต์ */}
      <section className="space-y-12">
        <div className="max-w-xl space-y-4">
          <Skeleton className="h-10 w-64 rounded-xl bg-slate-200" />
          <Skeleton className="h-5 w-full rounded-md bg-slate-100" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={`loading-card-${i}`}
              className="flex flex-col gap-8 rounded-[2.5rem] border border-slate-50 bg-white p-10 shadow-sm"
            >
              {/* พิกัดไอคอน */}
              <Skeleton className="h-16 w-16 rounded-2xl bg-slate-100" />

              <div className="space-y-4">
                <Skeleton className="h-8 w-2/3 rounded-lg bg-slate-200" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded bg-slate-50" />
                  <Skeleton className="h-4 w-5/6 rounded bg-slate-50" />
                  <Skeleton className="h-4 w-4/6 rounded bg-slate-50" />
                </div>
              </div>

              {/* ราคาเริ่มต้น */}
              <div className="mt-auto pt-6">
                <Skeleton className="h-10 w-32 rounded-xl bg-slate-100" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Performance Stats Skeleton: จำลองส่วนแสดงความแรงของระบบงาน */}
      <section className="rounded-[4rem] border border-slate-50 bg-slate-50/50 p-12 md:p-20">
        <div className="flex flex-col items-center gap-12">
          <div className="space-y-4 text-center">
            <Skeleton className="mx-auto h-4 w-32 rounded-full bg-slate-200" />
            <Skeleton className="mx-auto h-12 w-full max-w-md rounded-2xl bg-slate-200" />
          </div>

          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4 lg:gap-16">
            {[...Array(4)].map((_, i) => (
              <div
                key={`stat-loading-${i}`}
                className="flex flex-col items-center gap-4"
              >
                <Skeleton className="h-12 w-24 rounded-2xl bg-slate-200" />
                <Skeleton className="h-3 w-20 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
