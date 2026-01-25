/** @format */

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileSearch, ArrowRight, Home, LayoutGrid } from "lucide-react"

/**
 * หน้าแสดงผลเมื่อไม่พบข้อมูล (v2026 Specialist Edition)
 * วัตถุประสงค์: รักษาผู้ใช้งานให้อยู่ในระบบ และนำทางไปยังส่วนงานสำคัญที่สร้างรายได้
 * แนวคิด: สื่อสารอย่างเป็นมิตรแต่ยังคงความเนี้ยบในมาตรฐานงานเทคนิค
 */
export default function NotFound() {
  return (
    <main className="animate-in fade-in zoom-in-95 relative flex min-h-[85vh] flex-col items-center justify-center px-6 text-center duration-700">
      {/* ส่วนตกแต่งพื้นหลัง: ใช้ลายตารางแบบจางเพื่อให้ดูเป็นงานเทคนิคที่สะอาดตา */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(black,transparent_70%)] opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      {/* ส่วนแสดงสัญลักษณ์: การจัดวางที่เน้นความแตกต่างและจดจำง่าย */}
      <div className="group relative mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-slate-50 transition-all duration-500 hover:rotate-12 hover:bg-emerald-50">
        <FileSearch
          className="h-14 w-14 text-slate-300 transition-colors duration-500 group-hover:text-emerald-500"
          strokeWidth={1.2}
        />
        <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white italic">
          404
        </div>
      </div>

      {/* ส่วนเนื้อหาหลัก: สื่อสารอย่างตรงไปตรงมาและเป็นมิตร */}
      <div className="max-w-2xl space-y-4">
        <h1 className="font-prompt text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
          ไม่พบหน้า <span className="text-emerald-500">ที่คุณต้องการ</span>
        </h1>
        <p className="font-anuphan mx-auto max-w-[500px] text-lg leading-relaxed font-bold text-slate-500">
          ลิงก์ที่คุณเรียกใช้อาจไม่ถูกต้อง หรือข้อมูลถูกย้ายไปยังตำแหน่งใหม่
          ลองเริ่มใหม่อีกครั้งจากตัวเลือกด้านล่างนี้ครับ
        </p>
      </div>

      {/* ส่วนการนำทางเชิงกลยุทธ์: ปุ่มกดที่เน้นความชัดเจนและเพิ่มโอกาสการติดต่อ */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="h-14 bg-slate-950 px-10 text-white transition-colors hover:bg-emerald-600"
        >
          <Link href="/">
            <Home className="mr-3 h-5 w-5" />
            กลับไปหน้าหลัก
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-14 border-slate-200 px-10 transition-colors hover:bg-slate-50"
        >
          <Link href="/services">
            <LayoutGrid className="mr-3 h-5 w-5" />
            ดูแพ็กเกจบริการ
          </Link>
        </Button>
      </div>

      {/* ลิงก์รอง: นำเสนอผลงานเพื่อสร้างความเชื่อถือ (Social Proof) */}
      <Link
        href="/case-studies"
        className="group font-prompt mt-12 inline-flex items-center gap-2 text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-emerald-500"
      >
        ดูผลงานที่ผ่านมาของเรา
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

      {/* ป้ายระบุสถานะระบบ: สำหรับมาตรฐานงานระดับมืออาชีพ */}
      <p className="font-prompt mt-20 text-[9px] font-black tracking-[0.5em] text-slate-300 uppercase">
        System Status: Operational | Managed by AEMDEVWEB
      </p>
    </main>
  )
}
