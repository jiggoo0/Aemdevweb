/** @format */

import React from "react";
import Link from "next/link";
import { FileSearch, ArrowRight, Home, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * NotFound: ส่วนจัดการเมื่อพิกัดข้อมูลสูญหาย (Specialist Edition 2026)
 * -------------------------------------------------------------------------
 * กลยุทธ์: นำทางลูกค้ากลับเข้าสู่ส่วนงานหลักของระบบด้วยความฉับไว
 * มาตรฐาน: Tailwind 4 OKLCH | Ultra-Deep Level 7
 */
export default function NotFound() {
  return (
    <main className="animate-in fade-in relative flex min-h-[90vh] flex-col items-center justify-center bg-[oklch(1_0_0)] px-6 py-20 text-center duration-700 dark:bg-[oklch(0.12_0.02_260)]">
      {/* [LAYER 0] - Technical Grid: ลายตารางพิกัดโครงสร้างระบบ */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-[0.05]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] bg-center dark:invert" />
      </div>

      {/* [LAYER 1] - Visual Node: สัญลักษณ์พิกัดข้อมูลที่ไม่พบในระบบ */}
      <div className="group relative mb-12 flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-[oklch(0.98_0.01_260)] shadow-inner transition-all duration-500 hover:scale-105 hover:bg-[oklch(0.65_0.2_160_/_0.1)] dark:bg-[oklch(0.18_0.02_260)]">
        <FileSearch
          className="h-16 w-16 text-[oklch(0.8_0.02_260)] transition-colors duration-500 group-hover:text-[oklch(0.65_0.2_160)] dark:text-[oklch(0.45_0.02_260)]"
          strokeWidth={1}
        />
        <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-[12px] font-black text-white italic shadow-xl dark:bg-[oklch(0.95_0.01_260)] dark:text-[oklch(0.2_0.02_260)]">
          404
        </div>
      </div>

      {/* [LAYER 2] - Primary Messaging: ข้อความแจ้งพิกัดหลงทาง */}
      <div className="max-w-2xl space-y-6">
        <h1 className="font-heading text-5xl font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-7xl dark:text-white">
          พิกัดข้อมูล <br />
          <span className="text-[oklch(0.65_0.2_160)]">สูญหายในระบบ.</span>
        </h1>
        <p className="font-body mx-auto max-w-[520px] text-lg leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-xl">
          ไม่พบหน้าที่คุณเรียกใช้ในพิกัดปัจจุบัน
          อาจมีการปรับปรุงหรือย้ายที่อยู่ใหม่
          ลองเริ่มค้นหาแผนงานที่ใช่สำหรับธุรกิจของคุณจากตัวเลือกด้านล่างครับ
        </p>
      </div>

      {/* [LAYER 3] - Strategic Navigation: ปุ่มนำทางกลับเข้าสู่ระบบงานหลัก */}
      <div className="mt-16 flex flex-col items-center gap-5 sm:flex-row">
        <Button
          asChild
          className="h-16 rounded-2xl bg-[oklch(0.2_0.02_260)] px-10 text-[11px] font-black tracking-[0.2em] text-white uppercase italic shadow-2xl transition-all hover:bg-[oklch(0.65_0.2_160)] active:scale-95 dark:bg-[oklch(0.95_0.01_260)] dark:text-[oklch(0.2_0.02_260)]"
        >
          <Link href="/" className="flex items-center gap-3">
            <Home size={18} />
            กลับไปหน้าแรก
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-16 rounded-2xl border-[oklch(0.9_0.02_260)] bg-white px-10 text-[11px] font-black tracking-[0.2em] text-[oklch(0.2_0.02_260)] uppercase italic transition-all hover:bg-[oklch(0.98_0.01_260)] active:scale-95 dark:border-[oklch(0.3_0.02_260)] dark:bg-[oklch(0.12_0.02_260)] dark:text-white"
        >
          <Link href="/services" className="flex items-center gap-3">
            <LayoutGrid size={18} />
            ดูรายการบริการ
          </Link>
        </Button>
      </div>

      {/* [LAYER 4] - Trust Connectivity: เชื่อมต่อพิกัดความสำเร็จ */}
      <div className="mt-16 border-t border-[oklch(0.95_0.02_260)] pt-16 dark:border-[oklch(0.25_0.02_260)]">
        <Link
          href="/case-studies"
          className="group flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-[oklch(0.6_0.02_260)] uppercase italic transition-colors hover:text-[oklch(0.65_0.2_160)]"
        >
          สำรวจผลลัพธ์ที่ผ่านมาของเรา
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* Infrastructure Branding Footer */}
      <div className="mt-24 opacity-30 select-none">
        <p className="text-[9px] font-black tracking-[0.5em] text-[oklch(0.5_0.02_260)] uppercase italic">
          System Infrastructure Model • AEMDEVWEB 2026
        </p>
      </div>
    </main>
  );
}
