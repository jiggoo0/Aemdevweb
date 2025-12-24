/** @format */
"use client"

import React, { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react"

// ✅ 1. นิยามตัวแปร Default เพื่อป้องกัน Error no-undef
const defaultFaqs = [
  {
    question: "ใช้เวลาทำนานไหม กว่าจะได้เว็บไซต์?",
    answer:
      "สำหรับ Landing Page หน้าเดียว ใช้เวลาประมาณ 3-7 วันทำการครับ ส่วนเว็บไซต์บริษัท (3-5 หน้า) จะใช้เวลาประมาณ 10-14 วัน ขึ้นอยู่กับการเตรียมข้อมูลของคุณเป็นหลักครับ ผมเน้นงานไวแต่ต้องเป๊ะครับ",
  },
  {
    question: "มีค่าบริการรายปีเพิ่มเติมไหม?",
    answer:
      "ปีแรกผมดูแลค่า Hosting และ SSL ให้ฟรีครับ ปีถัดไปจะมีค่าต่ออายุโดเมนและพื้นที่เว็บ เริ่มต้นประมาณ 1,500 - 2,500 บาทต่อปี ตามขนาดเว็บครับ ไม่มีค่าบริการแอบแฝงแน่นอน",
  },
  {
    question: "ทำแล้วจะติดหน้าแรก Google (SEO) หรือเปล่า?",
    answer:
      "ผมวางโครงสร้างเว็บตามมาตรฐาน SEO 100% ครับ ทั้งความเร็วและการจัดวาง Tag ต่างๆ ซึ่งจะช่วยให้ Google เข้ามาเก็บข้อมูลได้ง่ายขึ้น",
  },
  {
    question: "ถ้าต้องการแก้ไขข้อมูลเองในอนาคต ทำได้ไหม?",
    answer:
      "ทำได้แน่นอนครับ! ผมมีคลิปวิดีโอสอนใช้งานเบื้องต้นส่งให้ด้วยครับ ไม่ต้องกลัวงง",
  },
]

// ✅ 2. นิยาม Interface สำหรับ Props
interface FAQSectionProps {
  config?: any
}

const FAQSection = ({ config }: FAQSectionProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  // ✅ 3. ใช้ requestAnimationFrame เพื่อเลี่ยง Cascading Render (React 19 Safe)
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setHasMounted(true)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  const displayFaqs = config?.faqs
    ? config.faqs.map((f: any) => ({ question: f.q_th, answer: f.a_th }))
    : defaultFaqs

  const primaryColor = config?.primaryColor || "#2563eb"

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
    >
      {/* ─── BACKGROUND DECOR ─── */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div
        className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full opacity-[0.03] blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
          {/* ─── LEFT: STRATEGIC HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-4">
              <div
                className="inline-flex items-center gap-2 border-l-4 px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                <HelpCircle size={12} />
                <span>Knowledge Base</span>
              </div>

              <h2 className="text-5xl font-black leading-[0.9] tracking-tighter text-slate-900 md:text-7xl">
                FREQUENTLY <br />
                <span className="italic text-slate-300">ASKED</span> <br />
                QUESTIONS
              </h2>
            </div>

            <p className="max-w-md border-l-8 border-slate-100 pl-8 text-xl font-bold leading-relaxed text-slate-500">
              ทุกข้อสงสัยเกี่ยวกับการสร้าง <br />
              <span className="text-slate-900">Digital Architecture</span>{" "}
              <br />
              เราเตรียมคำตอบไว้ให้คุณแล้วที่นี่
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="group relative inline-flex h-16 items-center justify-center bg-slate-900 px-10 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:pr-14"
              >
                คุยรายละเอียดเพิ่มเติม
                <ArrowRight
                  size={16}
                  className="absolute right-6 opacity-0 transition-all group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* ─── RIGHT: SHARP ACCORDION ─── */}
          <div className="lg:col-span-7">
            {hasMounted ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {displayFaqs.map((faq: any, index: number) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-4 border-slate-900 bg-white px-6 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] data-[state=open]:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <AccordionTrigger className="group py-8 text-left text-xl font-black uppercase tracking-tight text-slate-900 hover:no-underline data-[state=open]:text-blue-600">
                      <div className="flex items-start gap-6">
                        <span
                          className="mt-1 text-xs font-black opacity-20"
                          style={{ color: primaryColor }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-tight">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t border-slate-100 pb-8 pl-12 pt-6 text-lg font-bold leading-relaxed text-slate-500">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              // Skeleton UI ระหว่างรอ Mount
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-24 animate-pulse border-4 border-slate-100 bg-slate-50"
                  />
                ))}
              </div>
            )}

            {/* 💬 Bottom Help Note */}
            <div className="mt-12 flex items-center gap-4 border-2 border-dashed border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <MessageSquare size={20} className="text-slate-400" />
              </div>
              <p className="text-sm font-bold text-slate-500">
                ไม่พบคำตอบที่ต้องการ? <br />
                <a
                  href="#contact"
                  className="text-slate-900 underline underline-offset-4 hover:text-blue-600"
                >
                  ส่งข้อความหาผมโดยตรงได้เลยครับ
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
