/** @format */

"use client"

import React from "react"
import { ArrowRight, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

/**
 * LineLeadFormProps: พิกัดการปรับแต่งส่วนหน้าจอ
 */
interface LineLeadFormProps {
  variant?: "button" | "form" // เลือกระหว่างปุ่มกด หรือฟอร์มรับข้อมูล
  label?: string // ข้อความแสดงผลบนปุ่ม
  className?: string // สำหรับการปรับแต่งสไตล์เพิ่มเติม
}

/**
 * LineLeadForm: ส่วนจัดการข้อมูลเพื่อเริ่มวางระบบงานธุรกิจ
 * ยุทธศาสตร์: ปรับเปลี่ยนตามพิกัดการวางหน้าจอ เพื่อความเร็วในการเชื่อมต่อ SME
 */
export default function LineLeadForm({
  variant = "form",
  label = "เริ่มปรึกษางานทาง LINE",
  className,
}: LineLeadFormProps) {
  const handleLineRedirect = () => {
    window.open(siteConfig.contact.line, "_blank")
  }

  // [MODE 1]: แสดงผลแบบปุ่ม (สำหรับใช้ในหน้า About หรือส่วน Hero)
  if (variant === "button") {
    return (
      <Button
        onClick={handleLineRedirect}
        className={cn(
          "group h-14 rounded-2xl bg-emerald-500 text-[11px] font-black tracking-[0.2em] text-white uppercase italic shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600 active:scale-95",
          className
        )}
      >
        {label}
        <ArrowRight
          size={16}
          className="ml-2 transition-transform group-hover:translate-x-1"
        />
      </Button>
    )
  }

  // [MODE 2]: แสดงผลแบบชุดฟอร์มเต็มระบบ (มาตรฐานสำหรับการเก็บข้อมูลโครงการ)
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12",
        className
      )}
    >
      {/* ลายตารางพิกัดโครงสร้างระบบ */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md space-y-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black tracking-widest text-emerald-600 uppercase italic">
            <Zap size={14} fill="currentColor" />
            Active Business System
          </div>
          <h2 className="text-4xl leading-tight font-black tracking-tighter text-slate-950 uppercase italic md:text-5xl">
            Connect <br />
            <span className="text-emerald-500">Your Project.</span>
          </h2>
          <p className="text-lg leading-relaxed font-bold text-slate-500">
            วางพิกัดโครงการของคุณร่วมกับเราวันนี้
            เพื่อเปลี่ยนหน้าเว็บให้เป็นระบบที่ช่วยขยายฐานลูกค้าให้คุณ
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
              <ShieldCheck size={18} className="text-emerald-500" />
              พิกัดข้อมูลปลอดภัยและเป็นส่วนตัวตามมาตรฐานปี 2026
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm space-y-6 rounded-[2rem] bg-slate-50 p-8 md:p-10">
          <div className="space-y-4">
            <div className="grid gap-2 text-left">
              <Label
                htmlFor="name"
                className="text-[10px] font-black tracking-widest text-slate-400 uppercase italic"
              >
                ชื่อหรือชื่อธุรกิจ
              </Label>
              <Input
                id="name"
                placeholder="ระบุชื่อพิกัดธุรกิจของคุณ"
                className="h-12 rounded-xl border-none bg-white font-bold placeholder:text-slate-300 focus-visible:ring-emerald-500"
              />
            </div>
            <div className="grid gap-2 text-left">
              <Label
                htmlFor="tel"
                className="text-[10px] font-black tracking-widest text-slate-400 uppercase italic"
              >
                เบอร์โทรติดต่อกลับ
              </Label>
              <Input
                id="tel"
                type="tel"
                placeholder="0XX-XXX-XXXX"
                className="h-12 rounded-xl border-none bg-white font-bold placeholder:text-slate-300 focus-visible:ring-emerald-500"
              />
            </div>
          </div>

          <Button
            className="group h-14 w-full rounded-2xl bg-emerald-500 text-[11px] font-black tracking-[0.2em] text-white uppercase italic shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-600"
            onClick={handleLineRedirect}
          >
            {label}
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>

          <p className="text-center text-[9px] font-bold tracking-widest text-slate-300 uppercase italic">
            Ready to scale with aemdevweb
          </p>
        </div>
      </div>
    </div>
  )
}
