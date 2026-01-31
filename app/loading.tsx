/** @format */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Loading: ระบบจัดการหน้าจอระหว่างรอข้อมูล (Specialist Edition 2026)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: ลดค่า CLS (Cumulative Layout Shift) โดยการจองพิกัดพื้นที่ล่วงหน้า
 * มาตรฐาน: Tailwind 4 OKLCH | Ultra-Deep Level 7
 */
export default function Loading() {
  return (
    <div className="container-za animate-pulse space-y-24 py-20 opacity-90 transition-opacity duration-700">
      {/* [1. HERO SECTION SKELETON]: จำลองพิกัดนำเสนอสูงสุด */}
      <section className="flex flex-col gap-12 pt-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            {/* Badge Node Placeholder */}
            <Skeleton className="h-6 w-44 rounded-full bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.2_0.02_260)]" />

            {/* Heading Node Placeholder */}
            <div className="space-y-4">
              <Skeleton className="h-16 w-full max-w-2xl rounded-3xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
              <Skeleton className="h-16 w-2/3 rounded-3xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
            </div>
          </div>

          {/* Strategic Description Placeholder */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-full max-w-xl rounded-lg bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.18_0.02_260)]" />
            <Skeleton className="h-5 w-4/5 rounded-lg bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.18_0.02_260)]" />
          </div>

          {/* Action Call Placeholder */}
          <div className="flex flex-wrap items-center gap-5 pt-6">
            <Skeleton className="h-16 w-56 rounded-2xl bg-[oklch(0.65_0.2_160_/_0.15)]" />
            <Skeleton className="h-16 w-44 rounded-2xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.2_0.02_260)]" />
          </div>
        </div>

        {/* Visual Engine Placeholder */}
        <div className="hidden flex-1 justify-end lg:flex">
          <Skeleton className="h-[520px] w-full max-w-md rounded-[4rem] bg-[oklch(0.98_0.01_260)] shadow-2xl dark:bg-[oklch(0.15_0.02_260)]" />
        </div>
      </section>

      {/* [2. SERVICES GRID SKELETON]: จำลองพิกัดชุดข้อมูลบริการ */}
      <section className="space-y-14">
        <div className="max-w-2xl space-y-5">
          <Skeleton className="h-12 w-80 rounded-2xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
          <Skeleton className="h-5 w-full rounded-xl bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.18_0.02_260)]" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={`loading-node-${i}`}
              className="flex flex-col gap-10 rounded-[3rem] border border-[oklch(0.95_0.02_260)] bg-white p-10 dark:border-[oklch(0.25_0.02_260)] dark:bg-[oklch(0.15_0.02_260)]"
            >
              {/* Icon Node */}
              <Skeleton className="h-20 w-20 rounded-[1.5rem] bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.2_0.02_260)]" />

              <div className="space-y-6">
                <Skeleton className="h-10 w-3/4 rounded-xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full rounded-md bg-[oklch(0.98_0.005_260)] dark:bg-[oklch(0.18_0.02_260)]" />
                  <Skeleton className="h-4 w-5/6 rounded-md bg-[oklch(0.98_0.005_260)] dark:bg-[oklch(0.18_0.02_260)]" />
                  <Skeleton className="h-4 w-4/6 rounded-md bg-[oklch(0.98_0.005_260)] dark:bg-[oklch(0.18_0.02_260)]" />
                </div>
              </div>

              {/* Pricing Node */}
              <div className="mt-auto border-t border-[oklch(0.98_0.005_260)] pt-8 dark:border-[oklch(0.2_0.02_260)]">
                <Skeleton className="h-12 w-40 rounded-2xl bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.2_0.02_260)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [3. PERFORMANCE STATS SKELETON]: จำลองส่วน Authority Metrics */}
      <section className="rounded-[5rem] border border-[oklch(0.95_0.02_260)] bg-[oklch(0.99_0.005_260)] p-12 md:p-24 dark:border-[oklch(0.2_0.02_260)] dark:bg-[oklch(0.14_0.01_260)]">
        <div className="flex flex-col items-center gap-16">
          <div className="space-y-5 text-center">
            <Skeleton className="mx-auto h-5 w-44 rounded-full bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
            <Skeleton className="mx-auto h-16 w-full max-w-xl rounded-3xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
          </div>

          <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-4 lg:gap-20">
            {[...Array(4)].map((_, i) => (
              <div
                key={`stat-node-${i}`}
                className="flex flex-col items-center gap-5"
              >
                <Skeleton className="h-16 w-32 rounded-3xl bg-[oklch(0.9_0.02_260)] dark:bg-[oklch(0.25_0.02_260)]" />
                <Skeleton className="h-4 w-24 rounded-full bg-[oklch(0.96_0.02_260)] dark:bg-[oklch(0.2_0.02_260)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
