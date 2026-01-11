/** @format */
"use client"

import React, { useId, memo } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, HelpCircle } from "lucide-react"

const DEFAULT_FAQS = [
  {
    question: "ทำเว็บนานไหม กว่าจะเสร็จพร้อมใช้งาน?",
    answer:
      "ถ้าเป็นหน้าเดียว (Landing Page) ใช้เวลาประมาณ 3-7 วันครับ ส่วนเว็บบริษัทขนาดกลางจะใช้เวลาประมาณ 10-14 วัน ทั้งนี้ขึ้นอยู่กับการเตรียมข้อมูลของคุณด้วยครับ ผมเน้นงานไวแต่ต้องมีคุณภาพครับ",
  },
  {
    question: "มีค่าใช้จ่ายรายปีอะไรบ้าง?",
    answer:
      "ปีแรกผมดูแลค่าเช่าพื้นที่เว็บ (Hosting) และชื่อเว็บ (Domain) ให้ฟรีครับ ปีถัดไปจะมีค่าต่ออายุตามจริง เริ่มต้นประมาณ 1,500 - 2,500 บาทต่อปี ไม่มีค่าบริการแอบแฝงแน่นอนครับ",
  },
  {
    question: "เว็บไซต์จะค้นหาเจอใน Google ไหม?",
    answer:
      "ผมวางโครงสร้างเว็บตามมาตรฐานที่ Google ชอบ 100% ครับ ทั้งเรื่องความเร็วและการตั้งชื่อส่วนต่างๆ ซึ่งจะช่วยให้เว็บไซต์มีโอกาสติดหน้าแรกได้ง่ายขึ้นในระยะยาวครับ",
  },
  {
    question: "ถ้าอยากแก้ข้อมูลเองในอนาคต ทำได้ยากไหม?",
    answer:
      "ทำได้ง่ายมากครับ! ผมมีคลิปวิดีโอสอนใช้งานเบื้องต้นให้ด้วย หรือถ้าติดปัญหาตรงไหน ทักมาสอบถามผมได้ตลอดครับ ผมดูแลให้เป็นบริการหลังการขาย",
  },
]

interface FAQProps {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQProps[]
  primaryColor?: string
}

const FAQSection = ({
  faqs = DEFAULT_FAQS,
  primaryColor = "#1E3A8A",
}: FAQSectionProps) => {
  const baseId = useId()

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
      aria-labelledby="faq-title"
      suppressHydrationWarning
    >
      {/* ─── 🧩 BACKGROUND DECOR ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-[0.05]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          {/* ─── 🏛️ LEFT: HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#F97316]">
                <HelpCircle size={16} className="text-[#F97316]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                  คำถามที่พบบ่อย
                </span>
              </div>
              <h2
                id="faq-title"
                className="text-5xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl"
              >
                ASKED <br />
                <span className="italic text-[#1E3A8A]">QUESTIONS.</span>
              </h2>
            </div>

            <p className="max-w-md border-l-[8px] border-[#F97316] pl-8 text-xl font-bold leading-relaxed text-slate-500">
              ทุกข้อสงสัยเกี่ยวกับการสร้าง <br />
              <span className="text-2xl text-slate-900">เว็บไซต์ธุรกิจ</span>{" "}
              <br />
              เราเตรียมคำตอบไว้ให้คุณแล้ว
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="group relative inline-flex h-16 items-center justify-center border-4 border-slate-900 bg-slate-900 px-10 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1E3A8A]"
              >
                คุยรายละเอียดเพิ่มเติม
                <ArrowRight
                  size={18}
                  className="ml-4 transition-transform group-hover:translate-x-2"
                />
              </a>
            </div>
          </div>

          {/* ─── ⚡ RIGHT: SHARP ACCORDION ─── */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-5">
              {faqs.map((faq, index) => {
                const itemId = `${baseId}-item-${index}`
                return (
                  <AccordionItem
                    key={itemId}
                    value={itemId}
                    className="border-4 border-slate-900 bg-white px-6 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1E3A8A] data-[state=open]:shadow-[8px_8px_0px_0px_#F97316]"
                  >
                    <AccordionTrigger className="group py-8 text-left text-xl font-black tracking-tight text-slate-900 hover:no-underline data-[state=open]:text-[#1E3A8A]">
                      <div className="flex items-start gap-6">
                        <span className="mt-1 text-xs font-black text-[#F97316] opacity-40">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-tight">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t-2 border-slate-100 pb-8 pl-12 pt-6 text-lg font-medium leading-relaxed text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(FAQSection)
