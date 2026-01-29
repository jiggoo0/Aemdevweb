/** @format */

"use client"

import React from "react"
import { ArrowRight, ShieldCheck, Zap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * [TYPE DEFINITIONS]: กำหนดรูปแบบข้อมูลสำหรับระบบรับข้อมูล
 */
interface LineLeadFormProps {
  variant?: "button" | "form"
  label?: string
  className?: string
}

/**
 * LineLeadForm - ระบบเริ่มต้นโครงการและช่องทางติดต่อสื่อสาร
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างจุดปฏิสัมพันธ์ที่ลื่นไหลเพื่ออัตรา Conversion สูงสุด
 * มาตรฐาน: ประสิทธิภาพการโหลดระดับสูงบนโครงสร้าง Next.js 16
 */
export default function LineLeadForm({
  variant = "form",
  label = "ปรึกษาแผนงานระบบฟรีผ่าน LINE",
  className,
}: LineLeadFormProps) {
  const handleLineRedirect = () => {
    if (siteConfig.links.line) {
      window.open(siteConfig.links.line, "_blank", "noopener,noreferrer")
    }
  }

  /**
   * [MODE 1]: รูปแบบปุ่มกด (Inline Strategy)
   * สำหรับใช้ในส่วนเนื้อหาหรือส่วนท้ายของแต่ละส่วนเพื่อกระตุ้นการตัดสินใจ
   */
  if (variant === "button") {
    return (
      <Button
        onClick={handleLineRedirect}
        className={cn(
          "group h-14 rounded-2xl bg-emerald-600 px-8 text-[11px] font-black tracking-[0.3em] text-white uppercase italic shadow-2xl shadow-emerald-900/10 transition-all hover:bg-slate-950 active:scale-95",
          className
        )}
      >
        <MessageSquare size={16} className="mr-3" />
        {label}
        <ArrowRight
          size={16}
          className="ml-3 transition-transform group-hover:translate-x-1"
        />
      </Button>
    )
  }

  /**
   * [MODE 2]: รูปแบบฟอร์มเต็ม (Strategic Conversion Hub)
   * จุดรวบรวมข้อมูลหลักเพื่อให้การเริ่มต้นโครงการเป็นไปอย่างมีระบบ
   */
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] md:p-16 lg:p-20",
        className
      )}
    >
      {/* ลายเส้นโครงสร้างเชิงระบบจางๆ เพื่อเพิ่มมิติความประณีต */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        {/* ส่วนเนื้อหานำเสนอแผนงาน (Value Side) */}
        <div className="max-w-xl space-y-10 text-left">
          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-6 py-2.5 text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase italic">
            <Zap size={14} className="fill-emerald-600" />
            Active Service Hub
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-4xl leading-[1] font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl lg:text-7xl">
              เริ่มสร้างระบบ <br />
              <span className="text-emerald-500">เว็บไซต์ธุรกิจ.</span>
            </h2>

            <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ร่วมออกแบบแผนงานธุรกิจกับผู้เชี่ยวชาญวันนี้
              เปลี่ยนหน้าเว็บให้เป็นสินทรัพย์ดิจิทัลที่ทำงานแทนคุณตลอด 24 ชม.
            </p>
          </div>

          <div className="flex flex-col gap-5 pt-6">
            <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <ShieldCheck size={18} />
              </div>
              ระบบจัดเก็บและดูแลข้อมูลตามมาตรฐานความปลอดภัยปี 2026
            </div>
          </div>
        </div>

        {/* ส่วนรับข้อมูลโครงการ (Lead Intake Side) */}
        <div className="w-full max-w-md rounded-[3rem] bg-slate-50 p-10 shadow-inner ring-1 ring-slate-100 md:p-12">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 text-left">
              <Label
                htmlFor="biz-name"
                className="ml-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic"
              >
                ชื่อธุรกิจหรือแบรนด์ของคุณ
              </Label>
              <Input
                id="biz-name"
                placeholder="Business Name"
                className="h-16 rounded-2xl border-none bg-white px-8 font-bold shadow-sm ring-1 ring-slate-200 transition-all placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
            </div>

            <div className="grid gap-4 text-left">
              <Label
                htmlFor="biz-tel"
                className="ml-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic"
              >
                ช่องทางติดต่อ (โทรศัพท์)
              </Label>
              <Input
                id="biz-tel"
                type="tel"
                placeholder="0XX-XXX-XXXX"
                className="h-16 rounded-2xl border-none bg-white px-8 font-bold shadow-sm ring-1 ring-slate-200 transition-all placeholder:text-slate-300 focus-visible:ring-2 focus-visible:ring-emerald-500"
              />
            </div>

            <Button
              type="button"
              onClick={handleLineRedirect}
              className="group h-16 w-full rounded-2xl bg-slate-950 text-[11px] font-black tracking-[0.4em] text-white uppercase italic shadow-2xl shadow-slate-900/20 transition-all hover:bg-emerald-600 hover:text-white"
            >
              {label}
              <ArrowRight
                size={18}
                className="ml-3 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </form>

          {/* ส่วนท้ายระบบฟอร์ม */}
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-10">
            <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
              AEMDEVWEB SYSTEM FRAMEWORK 2026
            </p>
            <div className="h-1 w-10 rounded-full bg-emerald-500/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
