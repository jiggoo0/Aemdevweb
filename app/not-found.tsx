/** @format */

import React from "react"
import Link from "next/link"
import { FileSearch, ArrowRight, Home, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * NotFound: ส่วนจัดการเมื่อพิกัดข้อมูลสูญหาย (v2026 Specialist Edition)
 * กลยุทธ์: นำทางลูกค้ากลับเข้าสู่ส่วนงานหลักของระบบ (Home / Services)
 * โทน: เรียบง่าย ตรงไปตรงมา อธิบายแบบคนทำงานจริง
 */
export default function NotFound() {
  return (
    <main className="animate-in fade-in relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-20 text-center duration-700">
      
      {/* [LAYER 0] - Technical Background: ลายตารางพิกัดโครงสร้างระบบ */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-[0.04]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] bg-center" />
      </div>

      {/* [LAYER 1] - Visual Icon: สัญลักษณ์พิกัดข้อมูลที่ไม่พบในระบบ */}
      <div className="group relative mb-12 flex h-32 w-32 items-center justify-center rounded-[2.5rem] bg-slate-50 transition-all duration-500 hover:scale-105 hover:bg-emerald-50 shadow-inner">
        <FileSearch
          className="h-16 w-16 text-slate-200 transition-colors duration-500 group-hover:text-emerald-500"
          strokeWidth={1}
        />
        <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-[12px] font-black text-white italic shadow-xl">
          404
        </div>
      </div>

      {/* [LAYER 2] - Primary Messaging: ข้อความแจ้งพิกัดหลงทาง */}
      <div className="max-w-2xl space-y-6">
        <h1 className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
          ไม่พบหน้า <br />
          <span className="text-emerald-500">ที่คุณต้องการ.</span>
        </h1>
        <p className="font-body mx-auto max-w-[520px] text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
          พิกัดที่คุณเรียกใช้อาจมีการเปลี่ยนแปลง หรือข้อมูลถูกย้ายตำแหน่งใหม่ 
          ลองเริ่มค้นหาแผนงานที่ใช่สำหรับธุรกิจของคุณจากตัวเลือกด้านล่างครับ
        </p>
      </div>

      {/* [LAYER 3] - Strategic Navigation: ปุ่มนำทางกลับเข้าสู่ระบบงานหลัก */}
      <div className="mt-16 flex flex-col items-center gap-5 sm:flex-row">
        <Button
          asChild
          className="h-16 rounded-2xl bg-slate-950 px-10 text-[11px] font-black tracking-[0.2em] text-white uppercase italic shadow-2xl transition-all hover:bg-emerald-600 active:scale-95"
        >
          <Link href="/" className="flex items-center gap-3">
            <Home size={18} />
            กลับไปหน้าแรก
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-16 rounded-2xl border-slate-100 bg-white px-10 text-[11px] font-black tracking-[0.2em] text-slate-950 uppercase italic transition-all hover:border-slate-200 hover:bg-slate-50 active:scale-95"
        >
          <Link href="/services" className="flex items-center gap-3">
            <LayoutGrid size={18} />
            ดูรายการบริการ
          </Link>
        </Button>
      </div>

      {/* [LAYER 4] - Secondary Action: เชื่อมต่อผลงานเพื่อความน่าเชื่อถือ (Trust Node) */}
      <div className="mt-16 border-t border-slate-100 pt-16">
        <Link
          href="/case-studies"
          className="group flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase italic transition-colors hover:text-emerald-600"
        >
          สำรวจผลลัพธ์ที่ผ่านมาของเรา
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* Infrastructure Branding Footer */}
      <div className="mt-24 opacity-20 select-none">
        <p className="text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          System Infrastructure Model • AEMDEVWEB 2026
        </p>
      </div>
    </main>
  )
}
