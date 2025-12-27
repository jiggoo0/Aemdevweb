/** @format */
"use client"

import React from "react"
import { servicesData } from "@/data/servicesData"
import Services from "@/components/Services"
import PricingSection from "@/components/PricingSection"
import { siteConfig } from "@/config/siteConfig"
import { Zap, ShieldCheck, BarChart3, ChevronRight } from "lucide-react"

export default function ServicesPage() {
  // กรองเฉพาะบริการที่พร้อมใช้งาน
  const allServices = servicesData.filter((s) => s.status === "READY")

  const benefits = [
    {
      icon: <Zap className="transition-colors group-hover:text-white" />,
      title: "Ultra Fast Loading",
      desc: "เว็บไซต์โหลดไว คะแนน Google PageSpeed 90+ เพิ่มโอกาสปิดการขายและดีต่อ SEO",
    },
    {
      icon: (
        <ShieldCheck className="transition-colors group-hover:text-white" />
      ),
      title: "Security First",
      desc: "โครงสร้างปลอดภัยด้วยมาตรฐานวิศวกรรมซอฟต์แวร์ พร้อมระบบ SSL ป้องกันข้อมูลทุกโปรเจกต์",
    },
    {
      icon: <BarChart3 className="transition-colors group-hover:text-white" />,
      title: "Conversion Focus",
      desc: "ออกแบบ UI/UX ให้ใช้งานง่าย นำทางลูกค้าไปสู่เป้าหมาย ได้อย่างลื่นไหล",
    },
  ]

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      {/* ─── 1. Page Header: Architectural Blueprint Style ─── */}
      <section className="relative overflow-hidden bg-[#1E3A8A] py-28 text-white lg:py-36">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-[#F97316] px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
              Engineering Solutions / V{siteConfig.version}
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
              Professional <br />
              <span className="text-white/40">Web Modules</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-blue-100/80 md:text-xl">
              เราไม่ได้ขายแค่เว็บไซต์ แต่เราสร้าง &quot;เครื่องมือทำเงิน&quot;
              ที่มีโครงสร้างแข็งแรง ปรับแต่งให้เข้ากับธุรกิจเฉพาะทาง
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Services Grid ─── */}
      <div className="relative z-10 -mt-10">
        <Services services={allServices} />
      </div>

      {/* ─── 3. Pricing Section ─── */}
      <div className="border-y border-slate-200 bg-slate-50">
        <PricingSection />
      </div>

      {/* ─── 4. Why Us: Architectural Advantage ─── */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-8">
                <div className="inline-block bg-[#1E3A8A] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Why AEM DEV?
                </div>
                <h2 className="text-4xl font-black uppercase leading-tight tracking-tighter text-[#1E3A8A] md:text-6xl">
                  มาตรฐาน <br />
                  <span className="text-slate-400">วิศวกรรม</span> <br />
                  ทุกขั้นตอน
                </h2>
                <div className="h-2 w-32 bg-[#F97316]" />
                <p className="text-lg font-medium leading-relaxed text-slate-600">
                  &quot;เว็บไซต์ที่สวยอย่างเดียวไม่พอ ต้องฉลาดและทนทาน&quot;{" "}
                  <br />
                  เราเน้นการเขียนโค้ดที่สะอาด (Clean Code) เพื่อให้เว็บของคุณ
                  อัปเกรดได้ง่ายในอนาคต
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-6 border-2 border-slate-100 bg-white p-8 transition-all hover:border-[#1E3A8A] hover:shadow-[10px_10px_0px_0px_rgba(30,58,138,1)] md:flex-row md:items-start"
                  >
                    {/* ✅ แก้ปัญหา cloneElement โดยใช้ wrapper div แทน */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-slate-100 bg-slate-50 transition-colors group-hover:bg-[#1E3A8A] group-hover:text-white">
                      <div className="text-[#F97316]">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight text-[#1E3A8A]">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 text-base font-medium leading-relaxed text-slate-500">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Trust Item */}
                <div className="flex flex-col gap-6 border-2 border-[#1E3A8A] bg-[#1E3A8A] p-10 text-white shadow-[10px_10px_0px_0px_#F97316] md:flex-row md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-[#F97316]">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      100% Maintenance Guarantee
                    </h3>
                    <p className="mt-2 font-medium text-blue-100">
                      หมดกังวลเรื่องการถูกทิ้งงาน เรามีทีมซัพพอร์ตดูแลหลังการขาย
                      พร้อมช่วยเหลือด้านเทคนิคอย่างเต็มประสิทธิภาพ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Final CTA ─── */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden border-4 border-[#1E3A8A] bg-white p-12 text-center shadow-[20px_20px_0px_0px_#1E3A8A] md:p-24">
            <div className="relative z-10">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1E3A8A] md:text-7xl">
                Ready to <span className="text-[#F97316]">Build?</span>
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-lg font-bold uppercase tracking-widest text-slate-500">
                เริ่มสร้างรากฐานดิจิทัลที่แข็งแรงให้ธุรกิจของคุณวันนี้
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <a
                  href={siteConfig.contact.lineUrl}
                  className="group flex items-center justify-center gap-3 bg-[#1E3A8A] px-12 py-6 text-sm font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#F97316]"
                >
                  ปรึกษาโปรเจกต์ฟรี
                  <ChevronRight className="transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
