/** @format */
import React, { memo } from "react"
import AboutContent from "@/components/About"
import CTA from "@/components/CTA"
import { siteConfig } from "@/config/siteConfig"
import { Metadata } from "next"
import { Users, Code2, Heart, ArrowDownRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: `รู้จักเรา | ${siteConfig.name}`,
  description:
    "ทำความรู้จักกับ aemdevweb พาร์ทเนอร์ผู้ช่วยสร้างตัวตนบนโลกออนไลน์ให้กับธุรกิจ SME ด้วยมาตรฐานวิศวกรรมและความจริงใจ",
}

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO SECTION: INDUSTRIAL BLUEPRINT ─── */}
      <section className="relative overflow-hidden bg-slate-900 py-32 md:py-56">
        {/* Blueprint Grid Background: สลับสีเส้นให้ดูมีความลึก */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1.5px,transparent_1.5px),linear-gradient(to_bottom,#1e293b_1.5px,transparent_1.5px)] bg-[size:5rem_5rem] opacity-40" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20" />

        {/* Cinematic Glows */}
        <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[600px] w-[600px] bg-blue-600/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            <div className="group inline-flex items-center gap-3 border-l-4 border-blue-600 bg-white/5 px-6 py-3 backdrop-blur-md transition-all hover:bg-white/10">
              <Sparkles size={14} className="animate-pulse text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 md:text-xs">
                Engineering Digital Trust
              </span>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="text-5xl font-black uppercase italic leading-[0.85] tracking-tighter text-white md:text-8xl lg:text-[110px]">
                  เราสร้างเว็บเพื่อให้ <br />
                  <span className="text-blue-600 underline decoration-white/10 underline-offset-8">
                    ธุรกิจคุณไปได้ไกล
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-4 lg:pb-4">
                <p className="border-l-4 border-blue-600/30 pl-8 text-xl font-bold leading-relaxed text-slate-400 md:text-2xl">
                  พาร์ทเนอร์ที่พร้อมเติบโตไปกับ{" "}
                  <span className="text-white underline decoration-blue-600 decoration-4">
                    SME และ หจก.
                  </span>{" "}
                  ทั่วไทยด้วยความแม่นยำครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CORE VALUES: BENTO SHARP STRUCTURE ─── */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px border-4 border-slate-900 bg-slate-900 shadow-[20px_20px_0px_0px_rgba(30,41,59,0.2)] md:grid-cols-3">
          {[
            {
              icon: <Code2 size={24} />,
              color: "text-blue-600",
              t: "Precision Craft",
              d: "วิศวกรรมเว็บที่โหลดไว และรองรับโครงสร้าง SEO",
            },
            {
              icon: <Heart size={24} />,
              color: "text-rose-500",
              t: "Genuine Care",
              d: "ดูแลธุรกิจคุณ เหมือนเป็นธุรกิจของเราเอง",
            },
            {
              icon: <Users size={24} />,
              color: "text-emerald-500",
              t: "Real Partnership",
              d: "คุยตรงไปตรงมา ปรึกษาได้ทุกขั้นตอนงาน",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between bg-white p-12 transition-all duration-500 hover:bg-slate-50"
            >
              <div className="space-y-10">
                <div
                  className={cn(
                    "inline-block border-2 border-slate-900 p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none",
                    item.color
                  )}
                >
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                    {item.t}
                  </h4>
                  <p className="text-2xl font-black uppercase italic leading-tight text-slate-900 md:text-3xl">
                    {item.d}
                  </p>
                </div>
              </div>
              <div className="mt-12 flex justify-end">
                <ArrowDownRight
                  className="text-slate-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  size={64}
                  strokeWidth={2}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. MAIN CONTENT: ARCHITECTURAL DOCUMENT ─── */}
      <section className="relative py-32 md:py-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:3rem_3rem] opacity-50" />

        <div className="mx-auto max-w-5xl px-6">
          <div className="relative border-2 border-slate-200 bg-white p-10 shadow-sm md:p-24">
            {/* Corner Marks: เพิ่มความกว้างให้ดูเด่นขึ้น */}
            <div className="absolute -left-2 -top-2 h-16 w-16 border-l-[10px] border-t-[10px] border-blue-600" />
            <div className="absolute -bottom-2 -right-2 h-16 w-16 border-b-[10px] border-r-[10px] border-slate-900" />

            <div className="relative z-10">
              <AboutContent />
            </div>

            {/* Industrial Meta Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 px-8 py-2 text-[10px] font-black uppercase tracking-[0.5em] text-white">
              AEMDEVWEB / SYSTEM_OVERVIEW
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CTA SECTION ─── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <CTA
            title="พร้อมจะเริ่มสร้างความสำเร็จไปกับเราหรือยังครับ?"
            subtitle="ผมยินดีให้คำปรึกษาฟรี คุยงานตรงไปตรงมา เพื่อให้งบประมาณของคุณถูกใช้อย่างคุ้มค่าที่สุด"
          />
        </div>
      </section>
    </main>
  )
}

export default memo(AboutPage)
