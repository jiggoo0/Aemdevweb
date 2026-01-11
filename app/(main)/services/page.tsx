/** @format */
"use client"

import React from "react"
import { servicesData } from "@/data/servicesData"
import Services from "@/components/Services"
import PricingSection from "@/components/PricingSection"
import { siteConfig } from "@/config/siteConfig"
import {
  Zap,
  ShieldCheck,
  BarChart3,
  ChevronRight,
  Terminal,
  Box,
} from "lucide-react"

export default function ServicesPage() {
  const allServices = servicesData.filter((s) => s.status === "READY")

  const benefits = [
    {
      icon: <Zap size={28} />,
      title: "Ultra Fast Loading",
      desc: "เว็บไซต์โหลดไว คะแนน Google PageSpeed 90+ เพิ่มโอกาสปิดการขายและดีต่อ SEO อย่างมีนัยสำคัญ",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Security First",
      desc: "โครงสร้างปลอดภัยด้วยมาตรฐานวิศวกรรมซอฟต์แวร์ พร้อมระบบ SSL และการป้องกัน Data Injection ทุกจุด",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Conversion Focus",
      desc: "ออกแบบ UI/UX ตามพฤติกรรมผู้ใช้จริง เพื่อนำทางลูกค้าไปสู่เป้าหมายการสั่งซื้อได้อย่างแม่นยำ",
    },
  ]

  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* ─── 1. Page Header: Architectural Blueprint ─── */}
      <section className="relative overflow-hidden border-b-[8px] border-[#0F172A] bg-[#1E3A8A] py-28 text-white lg:py-40">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 border-2 border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Terminal size={14} className="text-[#F97316]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                System_Architecture / V{siteConfig.version}
              </span>
            </div>

            <h1 className="font-heading text-6xl font-black uppercase leading-[0.85] tracking-tighter md:text-8xl lg:text-9xl">
              Professional <br />
              <span className="text-white/30 underline decoration-[#F97316] decoration-[10px] underline-offset-[12px] md:decoration-[18px]">
                Web Modules.
              </span>
            </h1>

            <p className="max-w-2xl text-xl font-bold leading-relaxed text-blue-100/80 md:text-2xl">
              เราไม่ได้ขายแค่เว็บไซต์ แต่เราสร้าง{" "}
              <span className="text-white underline decoration-white/30">
                &quot;เครื่องมือผลิตรายได้&quot;
              </span>
              ที่มีโครงสร้างแข็งแรง และปรับแต่งตาม Business Logic ของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. Services Grid ─── */}
      <div className="relative z-10 -mt-12">
        <Services services={allServices} />
      </div>

      {/* ─── 3. Pricing Section ─── */}
      <div className="border-y-[6px] border-[#0F172A] bg-slate-50">
        <PricingSection />
      </div>

      {/* ─── 4. Why Us: Architectural Advantage ─── */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                <div className="inline-flex items-center gap-3 border-b-4 border-[#F97316] pb-2">
                  <Box size={20} className="text-[#F97316]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0F172A]">
                    Why_Aem_Dev
                  </span>
                </div>

                <h2 className="font-heading text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-[#1E3A8A] md:text-7xl">
                  มาตรฐาน <br />
                  <span className="text-slate-300">วิศวกรรม</span> <br />
                  <span className="text-[#0F172A]">ทุกขั้นตอน.</span>
                </h2>

                <p className="text-lg font-bold leading-relaxed text-slate-500 md:text-xl">
                  &quot;เว็บไซต์ที่สวยอย่างเดียวไม่พอ ต้องฉลาดและทนทาน&quot;
                  เราเน้นการเขียน Clean Code เพื่อให้ระบบอัปเกรดได้ง่ายในระยะยาว
                  ไม่เป็นภาระในอนาคต
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex flex-col gap-8 border-[4px] border-[#0F172A] bg-white p-8 transition-all duration-500 hover:bg-slate-50 hover:shadow-[12px_12px_0px_0px_#1E3A8A] md:flex-row"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center border-4 border-[#0F172A] bg-white text-[#F97316] transition-all duration-500 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:shadow-[4px_4px_0px_0px_#F97316]">
                      {benefit.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black uppercase tracking-tighter text-[#1E3A8A]">
                        {benefit.title}
                      </h3>
                      <p className="text-lg font-bold leading-relaxed text-slate-500">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Trust Item: Fixed CTA */}
                <div className="flex flex-col gap-8 border-[4px] border-[#0F172A] bg-[#0F172A] p-10 text-white shadow-[16px_16px_0px_0px_#F97316] md:flex-row md:items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-[#F97316]">
                    <ShieldCheck
                      size={40}
                      className="text-[#0F172A]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      100% Maintenance Protocol
                    </h3>
                    <p className="font-bold text-slate-400">
                      เรามีระบบ Monitor และ Support หลังส่งมอบงาน
                      เพื่อให้มั่นใจว่าฟันเฟืองดิจิทัลของคุณจะทำงานได้ตลอด 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Final CTA: System Deployment ─── */}
      <section className="bg-slate-100 py-24 md:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden border-[8px] border-[#0F172A] bg-white p-12 text-center shadow-[30px_30px_0px_0px_rgba(15,23,42,0.1)] md:p-32">
            {/* Background Decor */}
            <div className="vertical-text absolute right-0 top-0 hidden p-8 font-mono text-[10px] font-black uppercase text-slate-100 md:block">
              Build_Deploy_Scale_Repeat
            </div>

            <div className="relative z-10 space-y-10">
              <h2 className="font-heading text-5xl font-black uppercase italic leading-none tracking-tighter text-[#0F172A] md:text-8xl">
                Ready to <span className="text-[#F97316]">Build?</span>
              </h2>
              <p className="mx-auto max-w-xl text-xl font-bold uppercase tracking-[0.2em] text-slate-400">
                เริ่มสร้างรากฐานดิจิทัลที่แข็งแรงให้ธุรกิจของคุณวันนี้
              </p>

              <div className="flex flex-col items-center justify-center gap-8 pt-8 md:flex-row">
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-6 bg-[#0F172A] px-12 py-6 text-sm font-black uppercase tracking-[0.3em] text-white transition-all hover:bg-[#1E3A8A] hover:shadow-[8px_8px_0px_0px_#F97316]"
                >
                  Initialize_Project
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
