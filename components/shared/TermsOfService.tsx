/** @format */

"use client"

import React from "react"
import {
  ShieldCheck,
  Scale,
  CreditCard,
  AlertTriangle,
  FileText,
  Clock,
  Copyright,
  Server,
} from "lucide-react"
// [FIX]: ลบพิกัด cn ออกเนื่องจากไม่ได้ใช้งานตามที่ระบบแจ้ง Warning
import { siteConfig } from "@/constants/site-config"

/* -------------------------------------------------------------------------- */
/* ข้อมูลข้อตกลงและเงื่อนไข (Terms Data Structure)                               */
/* -------------------------------------------------------------------------- */

interface TermSection {
  id: string
  title: string
  icon: React.ElementType
  content: React.ReactNode
}

const TERMS_DATA: TermSection[] = [
  {
    id: "definitions",
    title: "1. นิยามและขอบเขตการใช้งาน",
    icon: FileText,
    content: (
      <div className="space-y-2">
        <p>
          <strong>"ผู้ให้บริการ"</strong> หมายถึง {siteConfig.company.fullName}{" "}
          (AEMDEVWEB) หรือ นายเอ็มซ่ามากส์
        </p>
        <p>
          <strong>"ผู้ใช้บริการ"</strong> หมายถึง
          บุคคลหรือนิติบุคคลที่ตกลงจ้างวางระบบเว็บไซต์หรือเช่าใช้พิกัดระบบ
        </p>
        <p>
          <strong>"เว็บไซต์สำเร็จรูป"</strong> หมายถึง
          บริการที่ผู้ให้บริการจัดเตรียมพิกัดมาตรฐานไว้แล้ว
          โดยผู้ใช้บริการไม่สามารถขอแก้ไขโครงสร้างหลักได้
        </p>
      </div>
    ),
  },
  {
    id: "service-scope",
    title: "2. ขอบเขตการให้บริการ (Service Scope)",
    icon: Scale,
    content: (
      <div className="space-y-3">
        <p>
          2.1 <strong>บริการเว็บไซต์สำเร็จรูป:</strong>{" "}
          ผู้ให้บริการจะดำเนินการติดตั้งระบบตามพิกัดที่ลูกค้าเลือก
          และลงข้อมูลระบบงานตามที่ได้รับมอบหมายภายใน 24-48
          ชั่วโมงหลังจากได้รับพิกัดข้อมูลครบถ้วน
        </p>
        <p>
          2.2 <strong>ข้อจำกัดการแก้ไข:</strong> สำหรับพิกัดราคาเริ่มต้น
          ผู้ใช้บริการสามารถแก้ไขข้อมูลได้ตามจำนวนที่กำหนด
          แต่ไม่สามารถขอให้เขียนโค้ดเพิ่มหรือปรับโครงสร้างระบบงานเองได้
        </p>
        <p>
          2.3 <strong>การส่งมอบงาน:</strong> ถือว่าสิ้นสุดพิกัดการติดตั้ง
          เมื่อระบบออนไลน์และเข้าถึงได้จริง
          และการแก้ไขหลังจากนั้นอาจมีค่าใช้จ่ายตามขอบเขตงานที่เพิ่มขึ้น
        </p>
      </div>
    ),
  },
  {
    id: "payment",
    title: "3. การชำระเงินและต่ออายุ (Payment & Renewal)",
    icon: CreditCard,
    content: (
      <div className="space-y-3">
        <p>
          3.1 <strong>ค่าบริการติดตั้ง:</strong>{" "}
          เป็นการชำระครั้งเดียวเพื่อวางระบบงาน ไม่สามารถขอคืนเงินได้
          หากผู้ให้บริการได้เริ่มพิกัดงานไปแล้ว
        </p>
        <p>
          3.2 <strong>ค่าบริการรายปี:</strong>{" "}
          พิกัดเช่าใช้ระบบจำเป็นต้องชำระค่าบริการรายปี เพื่อครอบคลุมค่า Server,
          ชื่อโดเมน และการดูแลระบบพื้นฐาน
        </p>
        <p>
          3.3 <strong>การระงับบริการ:</strong> หากผู้ใช้บริการค้างชำระเกิน 7 วัน
          ระบบจะระงับการแสดงผลชั่วคราว และพิกัดข้อมูลอาจถูกลบถาวรหากเกิน 30 วัน
        </p>
      </div>
    ),
  },
  {
    id: "ownership",
    title: "4. ลิขสิทธิ์และความเป็นเจ้าของ",
    icon: Copyright,
    content: (
      <div className="space-y-3">
        <p>
          4.1 <strong>ข้อมูลลูกค้า:</strong> พิกัดรูปภาพ, โลโก้,
          และเนื้อหาที่ผู้ใช้บริการส่งมา
          ถือเป็นลิขสิทธิ์ของผู้ใช้บริการแต่เพียงผู้เดียว
        </p>
        <p>
          4.2 <strong>ซอร์สโค้ด:</strong> โค้ดต้นฉบับ, ระบบหลังบ้าน,
          และโครงสร้างระบบงาน ถือเป็นทรัพย์สินทางปัญญาของ{" "}
          {siteConfig.company.name} ผู้ใช้บริการได้รับสิทธิ์ในการเช่าใช้เท่านั้น
        </p>
      </div>
    ),
  },
  {
    id: "limitation",
    title: "5. ข้อจำกัดความรับผิดชอบ",
    icon: AlertTriangle,
    content: (
      <div className="space-y-3">
        <div className="text-slate-600">
          ผู้ให้บริการจะไม่รับผิดชอบต่อความเสียหายที่เกิดจาก:
          <ul className="mt-4 list-inside list-disc space-y-2 pl-2">
            <li>การหยุดทำงานของ Server จากผู้ให้บริการภายนอก</li>
            <li>
              เหตุสุดวิสัยหรือการถูกโจมตีทางไซเบอร์ที่อยู่นอกเหนือการควบคุม
            </li>
            <li>ยอดขายหรือกำไรทางธุรกิจ (เราวางระบบงาน ไม่ได้การันตียอดขาย)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "termination",
    title: "6. การยกเลิกบริการ",
    icon: Server,
    content: (
      <p>
        ผู้ใช้บริการสามารถยกเลิกพิกัดบริการได้ตลอดเวลาโดยแจ้งล่วงหน้า 30 วัน
        โดยผู้ให้บริการขอสงวนสิทธิ์ในการไม่คืนค่าบริการรายปีในส่วนที่เหลือ
      </p>
    ),
  },
]

/* -------------------------------------------------------------------------- */
/* Component Implementation                                                   */
/* -------------------------------------------------------------------------- */

const TermsOfService = () => {
  const lastUpdated = "27 มกราคม 2026"

  return (
    <section className="bg-slate-50 py-20 antialiased" id="terms-of-service">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 text-[11px] font-bold tracking-widest text-slate-600 uppercase">
              <ShieldCheck size={14} className="text-emerald-600" />
              Legal Documents
            </div>
            <h1 className="font-heading mb-6 text-3xl font-black text-slate-900 italic md:text-5xl">
              เงื่อนไขและ
              <span className="text-emerald-600"> ข้อตกลงการใช้บริการ</span>
            </h1>
            <p className="font-body text-lg font-medium text-slate-500">
              เพื่อให้การวางระบบงานร่วมกันเป็นมืออาชีพ
              โปรดทำความเข้าใจรายละเอียดข้อตกลงเบื้องต้นครับ
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-400">
              <Clock size={14} />
              อัปเดตล่าสุด: {lastUpdated}
            </div>
          </div>

          {/* Agreement Card */}
          <div className="overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50">
            {/* Intro Box */}
            <div className="bg-slate-950 p-8 text-white md:p-12">
              <h3 className="mb-4 text-xl font-black text-emerald-400 uppercase italic">
                สรุปพิกัดงานจากนายเอ็ม
              </h3>
              <p className="font-body text-sm leading-relaxed text-slate-300">
                &quot;เราเน้นพิกัดการทำงานที่{" "}
                <strong>รวดเร็ว โปร่งใส และชัดเจน</strong>{" "}
                เพื่อให้ท่านมั่นใจว่าจะได้รับระบบงานที่มีคุณภาพในเวลาที่กำหนด
                โดยเน้นระบบสำเร็จรูปเพื่อให้คุ้มค่ากับงบประมาณที่สุดครับ&quot;
              </p>
            </div>

            {/* Content Sections */}
            <div className="divide-y divide-slate-100">
              {TERMS_DATA.map((term) => (
                <div
                  key={term.id}
                  className="p-8 transition-colors hover:bg-slate-50/50 md:p-12"
                >
                  <div className="mb-6 flex items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                      <term.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-xl font-black text-slate-950 uppercase italic">
                      {term.title}
                    </h3>
                  </div>
                  <div className="font-body pl-0 text-base leading-loose text-slate-600 md:pl-[4.25rem]">
                    {term.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Contact */}
            <div className="bg-slate-50 p-8 text-center md:p-12">
              <p className="mb-8 text-sm font-bold text-slate-500">
                หากมีข้อสงสัยเกี่ยวกับพิกัดเงื่อนไข สามารถสอบถามได้ตลอดครับ
              </p>
              <a
                href={siteConfig.contact.line}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-10 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 hover:bg-slate-950 active:scale-95"
              >
                ทักหานายเอ็มโดยตรง
                <Server
                  size={18}
                  className="transition-transform group-hover:rotate-12"
                />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-heading text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
              &copy; {new Date().getFullYear()} {siteConfig.company.fullName} •
              Standard Protocol 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService
