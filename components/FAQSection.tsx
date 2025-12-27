/** @format */
"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, HelpCircle, MessageSquare } from "lucide-react"

// ✅ Data Structure: คำถามที่พบบ่อย
const DEFAULT_FAQS = [
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
      "ผมวางโครงสร้างเว็บตามมาตรฐาน SEO 100% ครับ ทั้งความเร็วและการจัดวาง Tag ต่างๆ ซึ่งจะช่วยให้ Google เข้ามาเก็บข้อมูลได้ง่ายขึ้น ส่งผลดีต่ออันดับในระยะยาวครับ",
  },
  {
    question: "ถ้าต้องการแก้ไขข้อมูลเองในอนาคต ทำได้ไหม?",
    answer:
      "ทำได้แน่นอนครับ! ผมมีคลิปวิดีโอสอนใช้งานเบื้องต้นส่งให้ด้วยครับ หากติดขัดตรงไหนสามารถทักมาสอบถามได้ตลอด เป็นบริการหลังการขายครับ",
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
  // 💡 ตัดการใช้ useEffect/setHasMounted ออกเพื่อลด Cascading Renders และ Hydration Warning
  // Accordion ของ Radix UI รองรับ SSR ได้ดีอยู่แล้ว

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-white py-24 md:py-32"
      id="faq"
      aria-labelledby="faq-title"
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
          {/* ─── 🏛️ LEFT: STRATEGIC HEADER ─── */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#F97316]">
                <HelpCircle size={16} className="text-[#F97316]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                  Knowledge Database
                </span>
              </div>

              <h2
                id="faq-title"
                className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-tighter text-slate-900 md:text-7xl lg:text-8xl"
              >
                ASKED <br />
                <span className="italic text-[#1E3A8A]">QUESTIONS.</span>
              </h2>
            </div>

            <p className="max-w-md border-l-[8px] border-[#F97316] pl-8 text-xl font-bold leading-relaxed text-slate-500">
              ทุกข้อสงสัยเกี่ยวกับการสร้าง <br />
              <span className="text-slate-900">Digital Architecture</span>{" "}
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
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-4 border-slate-900 bg-white px-6 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#1E3A8A] data-[state=open]:shadow-[8px_8px_0px_0px_#F97316]"
                >
                  <AccordionTrigger className="group py-8 text-left text-xl font-black uppercase tracking-tight text-slate-900 hover:no-underline data-[state=open]:text-[#1E3A8A]">
                    <div className="flex items-start gap-6">
                      <span className="mt-1 text-xs font-black text-[#F97316] opacity-40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-tight">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-t-2 border-slate-100 pb-8 pl-12 pt-6 text-lg font-bold leading-relaxed text-slate-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* 💬 BOTTOM HELP NOTE */}
            <div className="mt-16 flex flex-col items-center gap-6 border-4 border-dashed border-slate-200 bg-slate-50 p-8 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-none border-2 border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <MessageSquare size={24} className="text-[#1E3A8A]" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-slate-400">
                  Still Confused?
                </p>
                <p className="mt-1 text-lg font-bold text-slate-600">
                  ไม่พบคำตอบที่ต้องการ?{" "}
                  <a
                    href="#contact"
                    className="text-[#F97316] underline underline-offset-4 transition-colors hover:text-[#1E3A8A]"
                  >
                    ส่งข้อความหาผมโดยตรงได้เลยครับ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
