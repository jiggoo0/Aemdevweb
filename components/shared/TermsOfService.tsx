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
  ArrowRight,
  MessageCircle,
} from "lucide-react"
import { siteConfig } from "@/constants/site-config"

/**
 * [TYPE DEFINITIONS]
 */
interface TermSection {
  id: string
  title: string
  icon: React.ElementType
  content: React.ReactNode
}

/**
 * ข้อมูลข้อตกลงและเงื่อนไข (Strategic Terms Data)
 */
const TERMS_DATA: TermSection[] = [
  {
    id: "definitions",
    title: "1. นิยามและขอบเขตการใช้งาน",
    icon: FileText,
    content: (
      <div className="space-y-3">
        <p>
          <strong>ผู้ให้บริการ</strong> หมายถึง {siteConfig.company.fullName}{" "}
          (AEMDEVWEB)
        </p>
        <p>
          <strong>ผู้ใช้บริการ</strong> หมายถึง
          บุคคลหรือนิติบุคคลที่ตกลงจ้างงานพัฒนาระบบเว็บไซต์หรือใช้บริการระบบ
        </p>
        <p>
          <strong>เว็บไซต์สำเร็จรูป</strong> หมายถึง
          บริการที่ผู้ให้บริการจัดเตรียมรูปแบบมาตรฐานไว้ให้
          โดยเน้นประสิทธิภาพการใช้งานที่ผู้ใช้บริการไม่สามารถแก้ไขโครงสร้างหลักได้เอง
        </p>
      </div>
    ),
  },
  {
    id: "service-scope",
    title: "2. ขอบเขตการให้บริการ (Service Scope)",
    icon: Scale,
    content: (
      <div className="space-y-4">
        <p>
          2.1 <strong>บริการติดตั้ง:</strong>{" "}
          ดำเนินการตั้งค่าระบบตามรูปแบบที่ลูกค้าเลือก
          และจัดเตรียมข้อมูลเบื้องต้นภายใน 24 ถึง 48
          ชั่วโมงหลังจากได้รับข้อมูลครบถ้วน
        </p>
        <p>
          2.2 <strong>ข้อจำกัดการปรับปรุง:</strong> สำหรับแพ็กเกจเริ่มต้น
          สามารถแก้ไขข้อมูลได้ตามจำนวนที่ระบุในสัญญา
          แต่ไม่รวมการเขียนโปรแกรมเพิ่มเติมหรือปรับเปลี่ยนโครงสร้างตรรกะของระบบหลัก
        </p>
        <p>
          2.3 <strong>การส่งมอบงาน:</strong>{" "}
          ถือว่าการส่งมอบเสร็จสิ้นเมื่อระบบออนไลน์และเข้าถึงได้จริง
          การร้องขอแก้ไขเพิ่มเติมหลังจากนี้อาจมีค่าใช้จ่ายตามขอบเขตงานจริง
        </p>
      </div>
    ),
  },
  {
    id: "payment",
    title: "3. การชำระเงินและต่ออายุ (Payment & Renewal)",
    icon: CreditCard,
    content: (
      <div className="space-y-4">
        <p>
          3.1 <strong>ค่าธรรมเนียมการเริ่มต้น:</strong>{" "}
          เป็นการชำระเพื่อเริ่มแผนงานระบบ
          ไม่สามารถขอคืนเงินได้เมื่อผู้ให้บริการเริ่มกระบวนการตั้งค่าระบบแล้ว
        </p>
        <p>
          3.2 <strong>ค่าบริการรายปี:</strong>{" "}
          การใช้บริการระบบจำเป็นต้องมีการชำระค่าบริการรายปี เพื่อครอบคลุมค่าดูแล
          Server ระบบความปลอดภัย SSL และการบำรุงรักษาพื้นฐาน
        </p>
        <p>
          3.3 <strong>การระงับบริการ:</strong> หากมียอดค้างชำระเกิน 7 วัน
          ระบบจะระงับการแสดงผลชั่วคราว
          และข้อมูลจะถูกนำออกจากระบบถาวรหากเกินกำหนด 30 วัน
        </p>
      </div>
    ),
  },
  {
    id: "ownership",
    title: "4. ลิขสิทธิ์และความเป็นเจ้าของ",
    icon: Copyright,
    content: (
      <div className="space-y-4">
        <p>
          4.1 <strong>ข้อมูลของผู้ใช้บริการ:</strong> เนื้อหา รูปภาพ
          และเครื่องหมายการค้าที่ท่านจัดส่งมา
          ถือเป็นลิขสิทธิ์ของท่านแต่เพียงผู้เดียว
        </p>
        <p>
          4.2 <strong>โครงสร้างระบบหลัก:</strong>{" "}
          รหัสต้นฉบับและระบบบริหารจัดการถือเป็นทรัพย์สินทางปัญญาของ{" "}
          {siteConfig.company.name}{" "}
          โดยผู้ใช้บริการได้รับสิทธิ์ในการใช้งานตามระยะเวลาที่กำหนดเท่านั้น
        </p>
      </div>
    ),
  },
  {
    id: "limitation",
    title: "5. ข้อจำกัดความรับผิดชอบ",
    icon: AlertTriangle,
    content: (
      <div className="space-y-4">
        <p>
          ผู้ให้บริการขอสงวนสิทธิ์ในการรับผิดชอบต่อความเสียหายในกรณีต่อไปนี้:
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4">
          <li>การหยุดทำงานของระบบ Cloud จากผู้ให้บริการภายนอก</li>
          <li>
            เหตุสุดวิสัยหรือการคุกคามทางไซเบอร์ที่อยู่เหนือการควบคุมของระบบพื้นฐาน
          </li>
          <li>
            ผลลัพธ์ทางธุรกิจหรือผลกำไร (เราดูแลมาตรฐานระบบ
            แต่ไม่ได้การันตียอดขายเชิงธุรกิจ)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "termination",
    title: "6. การยกเลิกบริการ",
    icon: Server,
    content: (
      <p>
        ผู้ใช้บริการสามารถแจ้งความประสงค์ยกเลิกการรับบริการได้ตลอดเวลาโดยแจ้งล่วงหน้า
        30 วัน
        ทั้งนี้ผู้ให้บริการขอสงวนสิทธิ์ในการไม่คืนค่าบริการในส่วนที่เหลือของรอบปีนั้นๆ
      </p>
    ),
  },
]

const TermsOfService = () => {
  const lastUpdated = "29 มกราคม 2026"

  return (
    <section className="relative py-20 antialiased" id="terms-of-service">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase italic shadow-sm">
              <ShieldCheck size={14} className="text-emerald-500" />
              Standard Legal Framework
            </div>
            <h1 className="font-heading mb-8 text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
              Terms and <span className="text-emerald-500">Conditions.</span>
            </h1>
            <p className="font-body mx-auto max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              เพื่อให้การร่วมงานเป็นไปอย่างมืออาชีพและชัดเจนที่สุด
              <br className="hidden md:block" />
              โปรดศึกษาข้อตกลงและเงื่อนไขการใช้บริการของ AEMDEVWEB
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase italic">
              <Clock size={12} />
              Last Updated: {lastUpdated}
            </div>
          </div>

          {/* Main Agreement Card */}
          <div className="overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
            {/* Value Statement Box */}
            <div className="bg-slate-950 p-10 text-white md:p-16">
              <div className="mb-6 flex items-center gap-3 text-emerald-400">
                <div className="h-px w-8 bg-emerald-500/50" />
                <span className="font-heading text-xs font-black tracking-widest uppercase italic">
                  Service Commitment
                </span>
              </div>
              <p className="font-body text-xl leading-tight font-black italic md:text-3xl">
                เรามุ่งเน้นการส่งมอบงานที่
                <span className="text-emerald-400 underline decoration-white/20 underline-offset-8">
                  รวดเร็วและโปร่งใส
                </span>
                เพื่อให้ธุรกิจของคุณได้รับระบบงานที่มีคุณภาพสูงสุด
              </p>
            </div>

            {/* Content Sections */}
            <div className="divide-y divide-slate-50">
              {TERMS_DATA.map((term) => (
                <div
                  key={term.id}
                  className="group p-10 transition-all duration-500 hover:bg-slate-50/50 md:p-14"
                >
                  <div className="mb-8 flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 ring-1 ring-slate-100 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                      <term.icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                      {term.title}
                    </h3>
                  </div>
                  <div className="font-body pl-0 text-base leading-loose font-bold text-slate-600 md:pl-20">
                    {term.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Contact Section */}
            <div className="bg-slate-50 p-10 text-center md:p-20">
              <div className="mb-10 space-y-2">
                <p className="font-body text-lg font-black text-slate-950">
                  ต้องการสอบถามรายละเอียดเพิ่มเติมเกี่ยวกับเงื่อนไขบริการ
                </p>
                <p className="font-body text-sm font-bold text-slate-400">
                  ยินดีให้คำปรึกษาเพื่อให้เกิดความเข้าใจที่ตรงกันอย่างสมบูรณ์ครับ
                </p>
              </div>

              <a
                href={siteConfig.links.line}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 rounded-2xl bg-[#00B900] px-10 py-6 text-[11px] font-black tracking-[0.3em] text-white uppercase italic shadow-xl shadow-emerald-500/20 transition-all hover:bg-slate-950 active:scale-95"
              >
                <MessageCircle size={18} fill="currentColor" />
                ปรึกษาผู้เชี่ยวชาญผ่าน LINE
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-300 uppercase italic">
              AEMDEVWEB SYSTEM FRAMEWORK 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService
